(window.webpackJsonp=window.webpackJsonp||[]).push([[147,59,179,212],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return h}));var a=n(2),r=n(6),i=(n(0),n(339)),o=n(54),c=n(55),s=n(56),l={id:"fling-gesture",title:"Fling gesture",sidebar_label:"Fling gesture"},d={unversionedId:"api/gestures/fling-gesture",id:"version-2.1.1/api/gestures/fling-gesture",isDocsHomePage:!1,title:"Fling gesture",description:"A discrete gesture that activates when the movement is sufficiently long and fast.",source:"@site/versioned_docs/version-2.1.1/api/gestures/fling-gesture.md",slug:"/api/gestures/fling-gesture",permalink:"/react-native-gesture-handler/docs/2.1.1/api/gestures/fling-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.1/api/gestures/fling-gesture.md",version:"2.1.1",sidebar_label:"Fling gesture",sidebar:"version-2.1.1/docs",previous:{title:"Pinch gesture",permalink:"/react-native-gesture-handler/docs/2.1.1/api/gestures/pinch-gesture"},next:{title:"Force touch gesture (iOS only)",permalink:"/react-native-gesture-handler/docs/2.1.1/api/gestures/force-touch-gesture"}},b=[{value:"Config",id:"config",children:[{value:"Properties specific to <code>FlingGesture</code>:",id:"properties-specific-to-flinggesture",children:[]},{value:"<code>direction(value: Directions)</code>",id:"directionvalue-directions",children:[]},{value:"<code>numberOfPointers(value: number)</code>",id:"numberofpointersvalue-number",children:[]}]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Event data",id:"event-data",children:[{value:"Event attributes specific to <code>FlingGesture</code>:",id:"event-attributes-specific-to-flinggesture",children:[]},{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],u={rightToc:b};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A discrete gesture that activates when the movement is sufficiently long and fast.\nGesture gets ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events#active"}),"ACTIVE")," when movement is sufficiently long and it does not take too much time.\nWhen gesture gets activated it will turn into ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events#end"}),"END")," state when finger is released.\nThe gesture will fail to recognize if the finger is lifted before being activated."),Object(i.b)("h2",{id:"config"},"Config"),Object(i.b)("h3",{id:"properties-specific-to-flinggesture"},"Properties specific to ",Object(i.b)("inlineCode",{parentName:"h3"},"FlingGesture"),":"),Object(i.b)("h3",{id:"directionvalue-directions"},Object(i.b)("inlineCode",{parentName:"h3"},"direction(value: Directions)")),Object(i.b)("p",null,"Expressed allowed direction of movement. Expected values are exported as constants in the ",Object(i.b)("inlineCode",{parentName:"p"},"Directions")," object. It's possible to pass one or many directions in one parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"fling.direction(Directions.RIGHT | Directions.LEFT);\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"fling.direction(Directions.DOWN);\n")),Object(i.b)("h3",{id:"numberofpointersvalue-number"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfPointers(value: number)")),Object(i.b)("p",null,"Determine exact number of points required to handle the fling gesture."),Object(i.b)(c.default,{mdxType:"BaseEventConfig"}),Object(i.b)("h2",{id:"callbacks"},"Callbacks"),Object(i.b)(s.default,{mdxType:"BaseEventCallbacks"}),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("h3",{id:"event-attributes-specific-to-flinggesture"},"Event attributes specific to ",Object(i.b)("inlineCode",{parentName:"h3"},"FlingGesture"),":"),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/api/gestures/gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/api/gestures/gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. The value is expressed in point units. It is recommended to use it instead of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),Object(i.b)(o.default,{mdxType:"BaseEventData"}),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const position = useSharedValue(0);\n\nconst flingGesture = Gesture.Fling()\n  .direction(Directions.RIGHT)\n  .onStart((e) => {\n    position.value = withTiming(position.value + 10, { duration: 100 });\n  });\n\nconst animatedStyle = useAnimatedStyle(() => ({\n  transform: [{ translateX: position.value }],\n}));\n\nreturn (\n  <GestureDetector gesture={flingGesture}>\n    <Animated.View style={[styles.box, animatedStyle]} />\n  </GestureDetector>\n);\n")))}h.isMDXComponent=!0},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),h=a,p=b["".concat(o,".").concat(h)]||b[h]||u[h]||i;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(339)),o={},c={unversionedId:"api/gestures/base-gesture-event-data",id:"version-2.1.1/api/gestures/base-gesture-event-data",isDocsHomePage:!1,title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/versioned_docs/version-2.1.1/api/gestures/base-gesture-event-data.md",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/2.1.1/api/gestures/base-gesture-event-data",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.1/api/gestures/base-gesture-event-data.md",version:"2.1.1"},s=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),Object(i.b)("h3",{id:"state"},Object(i.b)("inlineCode",{parentName:"h3"},"state")),Object(i.b)("p",null,"Current ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(i.b)("inlineCode",{parentName:"p"},"State")," object by the library."),Object(i.b)("h3",{id:"numberofpointers"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(i.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}d.isMDXComponent=!0},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(339)),o={},c={unversionedId:"api/gestures/base-gesture-config",id:"version-2.1.1/api/gestures/base-gesture-config",isDocsHomePage:!1,title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/versioned_docs/version-2.1.1/api/gestures/base-gesture-config.md",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/2.1.1/api/gestures/base-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.1/api/gestures/base-gesture-config.md",version:"2.1.1"},s=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",children:[]},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",children:[]},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",children:[]},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",children:[]},{value:"<code>withRef(ref)</code>",id:"withrefref",children:[]},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",children:[]},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),Object(i.b)("h3",{id:"enabledvalue-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),Object(i.b)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(i.b)("strong",{parentName:"p"},"never")," become ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events#active"}),Object(i.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events#failed"}),Object(i.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events#cancelled"}),Object(i.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events#cancelled"}),"cancel")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(i.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/api/gestures/long-press-gesture"}),Object(i.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/api/gestures/tap-gesture"}),Object(i.b)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h3",{id:"hitslopsettings"},Object(i.b)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),Object(i.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/under-the-hood/states-events#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(i.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(i.b)("inlineCode",{parentName:"p"},"left"),", ",Object(i.b)("inlineCode",{parentName:"p"},"right"),", ",Object(i.b)("inlineCode",{parentName:"p"},"top")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(i.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(i.b)("inlineCode",{parentName:"p"},"left"),", ",Object(i.b)("inlineCode",{parentName:"p"},"right")," or ",Object(i.b)("inlineCode",{parentName:"p"},"top")," and ",Object(i.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(i.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(i.b)("inlineCode",{parentName:"p"},"right")," or ",Object(i.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(i.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(i.b)("inlineCode",{parentName:"p"},"top")," or ",Object(i.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(i.b)("inlineCode",{parentName:"p"},"width")," or ",Object(i.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(i.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(i.b)("inlineCode",{parentName:"p"},"width")," and ",Object(i.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(i.b)("h3",{id:"withrefref"},Object(i.b)("inlineCode",{parentName:"h3"},"withRef(ref)")),Object(i.b)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),Object(i.b)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},Object(i.b)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),Object(i.b)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),". ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(i.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),Object(i.b)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},Object(i.b)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),Object(i.b)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),".",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(i.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(i.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}d.isMDXComponent=!0},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(339)),o={},c={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.1.1/api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.1.1/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.1.1/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.1/api/gestures/base-gesture-callbacks.md",version:"2.1.1"},s=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",children:[]},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",children:[]},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",children:[]},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",children:[]},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(i.b)("h3",{id:"onbegincallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(i.b)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),Object(i.b)("h3",{id:"onstartcallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(i.b)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),Object(i.b)("h3",{id:"onendcallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(i.b)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),Object(i.b)("h3",{id:"onfinalizecallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),Object(i.b)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),Object(i.b)("h3",{id:"ontouchesdowncallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(i.b)("h3",{id:"ontouchesmovecallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(i.b)("h3",{id:"ontouchesupcallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(i.b)("h3",{id:"ontouchescancelledcallback"},Object(i.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),Object(i.b)("p",null,"Set the ",Object(i.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}d.isMDXComponent=!0}}]);