import * as React from 'react';
import { findNodeHandle as findNodeHandleRN, Platform, Touchable, UIManager, } from 'react-native';
// @ts-ignore - it isn't typed by TS & don't have definitelyTyped types
import deepEqual from 'fbjs/lib/areEqual';
import RNGestureHandlerModule from '../RNGestureHandlerModule';
import { State } from '../State';
const UIManagerAny = UIManager;
function findNodeHandle(node) {
    if (Platform.OS === 'web')
        return node;
    return findNodeHandleRN(node);
}
const customGHEventsConfig = {
    onGestureHandlerEvent: { registrationName: 'onGestureHandlerEvent' },
    onGestureHandlerStateChange: {
        registrationName: 'onGestureHandlerStateChange',
    },
};
// Add gesture specific events to genericDirectEventTypes object exported from UIManager
// native module.
// Once new event types are registered with react it is possible to dispatch these
// events to all kind of native views.
UIManagerAny.genericDirectEventTypes = {
    ...UIManagerAny.genericDirectEventTypes,
    ...customGHEventsConfig,
};
// In newer versions of RN the `genericDirectEventTypes` is located in the object
// returned by UIManager.getViewManagerConfig('getConstants') or in older RN UIManager.getConstants(), we need to add it there as well to make
// it compatible with RN 61+
const UIManagerConstants = UIManagerAny.getViewManagerConfig?.('getConstants') ??
    UIManagerAny.getConstants?.();
if (UIManagerConstants) {
    UIManagerConstants.genericDirectEventTypes = {
        ...UIManagerConstants.genericDirectEventTypes,
        ...customGHEventsConfig,
    };
}
// Wrap JS responder calls and notify gesture handler manager
const { setJSResponder: oldSetJSResponder = () => {
    //no operation
}, clearJSResponder: oldClearJSResponder = () => {
    //no operation
}, } = UIManagerAny;
UIManagerAny.setJSResponder = (tag, blockNativeResponder) => {
    RNGestureHandlerModule.handleSetJSResponder(tag, blockNativeResponder);
    oldSetJSResponder(tag, blockNativeResponder);
};
UIManagerAny.clearJSResponder = () => {
    RNGestureHandlerModule.handleClearJSResponder();
    oldClearJSResponder();
};
let handlerTag = 1;
const handlerIDToTag = {};
function isConfigParam(param, name) {
    // param !== Object(param) returns false if `param` is a function
    // or an object and returns true if `param` is null
    return (param !== undefined &&
        (param !== Object(param) ||
            !('__isNative' in param)) &&
        name !== 'onHandlerStateChange' &&
        name !== 'onGestureEvent');
}
function filterConfig(props, validProps, defaults = {}) {
    const res = { ...defaults };
    validProps.forEach((key) => {
        const value = props[key];
        if (isConfigParam(value, key)) {
            let value = props[key];
            if (key === 'simultaneousHandlers' || key === 'waitFor') {
                value = transformIntoHandlerTags(props[key]);
            }
            else if (key === 'hitSlop') {
                if (typeof value !== 'object') {
                    value = { top: value, left: value, bottom: value, right: value };
                }
            }
            res[key] = value;
        }
    });
    return res;
}
function transformIntoHandlerTags(handlerIDs) {
    if (!Array.isArray(handlerIDs)) {
        handlerIDs = [handlerIDs];
    }
    if (Platform.OS === 'web') {
        return handlerIDs
            .map(({ current }) => current)
            .filter((handle) => handle);
    }
    // converts handler string IDs into their numeric tags
    return handlerIDs
        .map((handlerID) => handlerIDToTag[handlerID] || handlerID.current?.handlerTag || -1)
        .filter((handlerTag) => handlerTag > 0);
}
function hasUnresolvedRefs(props) {
    // TODO(TS) - add type for extract arg
    const extract = (refs) => {
        if (!Array.isArray(refs)) {
            return refs && refs.current === null;
        }
        return refs.some((r) => r && r.current === null);
    };
    return extract(props['simultaneousHandlers']) || extract(props['waitFor']);
}
const stateToPropMappings = {
    [State.UNDETERMINED]: undefined,
    [State.BEGAN]: 'onBegan',
    [State.FAILED]: 'onFailed',
    [State.CANCELLED]: 'onCancelled',
    [State.ACTIVE]: 'onActivated',
    [State.END]: 'onEnded',
};
// TODO(TS) - make sure that BaseGestureHandlerProps doesn't need other generic parameter to work with custom properties.
export default function createHandler({ name, allowedProps = [], config = {}, transformProps, customNativeProps = [], }) {
    class Handler extends React.Component {
        constructor(props) {
            super(props);
            this.updateEnqueued = null;
            this.onGestureHandlerEvent = (event) => {
                if (event.nativeEvent.handlerTag === this.handlerTag) {
                    this.props.onGestureEvent?.(event);
                }
                else {
                    this.props.onGestureHandlerEvent?.(event);
                }
            };
            // TODO(TS) - make sure this is right type for event
            this.onGestureHandlerStateChange = (event) => {
                if (event.nativeEvent.handlerTag === this.handlerTag) {
                    this.props.onHandlerStateChange?.(event);
                    const state = event.nativeEvent.state;
                    const stateEventName = stateToPropMappings[state];
                    const eventHandler = stateEventName && this.props[stateEventName];
                    if (eventHandler && typeof eventHandler === 'function') {
                        eventHandler(event);
                    }
                }
                else {
                    this.props.onGestureHandlerStateChange?.(event);
                }
            };
            this.refHandler = (node) => {
                this.viewNode = node;
                const child = React.Children.only(this.props.children);
                // TODO(TS) fix ref type
                const { ref } = child;
                if (ref !== null) {
                    if (typeof ref === 'function') {
                        ref(node);
                    }
                    else {
                        ref.current = node;
                    }
                }
            };
            this.createGestureHandler = (newConfig) => {
                this.config = newConfig;
                RNGestureHandlerModule.createGestureHandler(name, this.handlerTag, newConfig);
            };
            this.attachGestureHandler = (newViewTag) => {
                this.viewTag = newViewTag;
                if (Platform.OS === 'web') {
                    // typecast due to dynamic resolution, attachGestureHandler should have web version signature in this branch
                    RNGestureHandlerModule.attachGestureHandler(this.handlerTag, newViewTag, this.propsRef);
                }
                else {
                    RNGestureHandlerModule.attachGestureHandler(this.handlerTag, newViewTag);
                }
            };
            this.updateGestureHandler = (newConfig) => {
                this.config = newConfig;
                RNGestureHandlerModule.updateGestureHandler(this.handlerTag, newConfig);
            };
            this.handlerTag = handlerTag++;
            this.config = {};
            this.propsRef = React.createRef();
            if (props.id) {
                if (handlerIDToTag[props.id] !== undefined) {
                    throw new Error(`Handler with ID "${props.id}" already registered`);
                }
                handlerIDToTag[props.id] = this.handlerTag;
            }
        }
        componentDidMount() {
            const props = this.props;
            if (hasUnresolvedRefs(props)) {
                // If there are unresolved refs (e.g. ".current" has not yet been set)
                // passed as `simultaneousHandlers` or `waitFor`, we enqueue a call to
                // _update method that will try to update native handler props using
                // setImmediate. This makes it so _update function gets called after all
                // react components are mounted and we expect the missing ref object to
                // be resolved by then.
                this.updateEnqueued = setImmediate(() => {
                    this.updateEnqueued = null;
                    this.update();
                });
            }
            this.createGestureHandler(filterConfig(transformProps ? transformProps(this.props) : this.props, [...allowedProps, ...customNativeProps], config));
            this.attachGestureHandler(findNodeHandle(this.viewNode)); // TODO(TS) - check if this can be null
        }
        componentDidUpdate() {
            const viewTag = findNodeHandle(this.viewNode);
            if (this.viewTag !== viewTag) {
                this.attachGestureHandler(viewTag); // TODO(TS) - check interaction between _viewTag & findNodeHandle
            }
            this.update();
        }
        componentWillUnmount() {
            RNGestureHandlerModule.dropGestureHandler(this.handlerTag);
            if (this.updateEnqueued) {
                clearImmediate(this.updateEnqueued);
            }
            // We can't use this.props.id directly due to TS generic type narrowing bug, see https://github.com/microsoft/TypeScript/issues/13995 for more context
            const handlerID = this.props.id;
            if (handlerID) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete handlerIDToTag[handlerID];
            }
        }
        update() {
            const newConfig = filterConfig(transformProps ? transformProps(this.props) : this.props, [...allowedProps, ...customNativeProps], config);
            if (!deepEqual(this.config, newConfig)) {
                this.updateGestureHandler(newConfig);
            }
        }
        setNativeProps(updates) {
            const mergedProps = { ...this.props, ...updates };
            const newConfig = filterConfig(transformProps ? transformProps(mergedProps) : mergedProps, [...allowedProps, ...customNativeProps], config);
            this.updateGestureHandler(newConfig);
        }
        render() {
            let gestureEventHandler = this.onGestureHandlerEvent;
            const { onGestureEvent, onGestureHandlerEvent, } = this.props;
            if (onGestureEvent && typeof onGestureEvent !== 'function') {
                // If it's not a method it should be an native Animated.event
                // object. We set it directly as the handler for the view
                // In this case nested handlers are not going to be supported
                if (onGestureHandlerEvent) {
                    throw new Error('Nesting touch handlers with native animated driver is not supported yet');
                }
                gestureEventHandler = onGestureEvent;
            }
            else {
                if (onGestureHandlerEvent &&
                    typeof onGestureHandlerEvent !== 'function') {
                    throw new Error('Nesting touch handlers with native animated driver is not supported yet');
                }
            }
            let gestureStateEventHandler = this.onGestureHandlerStateChange;
            const { onHandlerStateChange, onGestureHandlerStateChange, } = this.props;
            if (onHandlerStateChange && typeof onHandlerStateChange !== 'function') {
                // If it's not a method it should be an native Animated.event
                // object. We set it directly as the handler for the view
                // In this case nested handlers are not going to be supported
                if (onGestureHandlerStateChange) {
                    throw new Error('Nesting touch handlers with native animated driver is not supported yet');
                }
                gestureStateEventHandler = onHandlerStateChange;
            }
            else {
                if (onGestureHandlerStateChange &&
                    typeof onGestureHandlerStateChange !== 'function') {
                    throw new Error('Nesting touch handlers with native animated driver is not supported yet');
                }
            }
            const events = {
                onGestureHandlerEvent: gestureEventHandler,
                onGestureHandlerStateChange: gestureStateEventHandler,
            };
            this.propsRef.current = events;
            const child = React.Children.only(this.props.children);
            let grandChildren = child.props.children;
            if (Touchable.TOUCH_TARGET_DEBUG &&
                child.type &&
                (child.type === 'RNGestureHandlerButton' ||
                    child.type.name === 'View' ||
                    child.type.displayName === 'View')) {
                grandChildren = React.Children.toArray(grandChildren);
                grandChildren.push(Touchable.renderDebugView({
                    color: 'mediumspringgreen',
                    hitSlop: child.props.hitSlop,
                }));
            }
            return React.cloneElement(child, {
                ref: this.refHandler,
                collapsable: false,
                ...events,
            }, grandChildren);
        }
    }
    Handler.displayName = name;
    return Handler;
}