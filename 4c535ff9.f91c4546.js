(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(6),o=(n(0),n(339)),r=n(341),l=n(343),c={id:"swipeable",title:"Swipeable",sidebar_label:"Swipeable"},s={unversionedId:"api/components/swipeable",id:"api/components/swipeable",isDocsHomePage:!1,title:"Swipeable",description:'This component allows for implementing swipeable rows or similar interaction. It renders its children within a panable container allows for horizontal swiping left and right. While swiping one of two "action" containers can be shown depends on whether user swipes left or right (containers can be rendered by renderLeftActions or renderRightActions props).',source:"@site/docs/api/components/swipeable.md",slug:"/api/components/swipeable",permalink:"/react-native-gesture-handler/docs/next/api/components/swipeable",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/api/components/swipeable.md",version:"current",sidebar_label:"Swipeable",sidebar:"docs",previous:{title:"Buttons",permalink:"/react-native-gesture-handler/docs/next/api/components/buttons"},next:{title:"Touchables",permalink:"/react-native-gesture-handler/docs/next/api/components/touchables"}},d=[{value:"Usage:",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>friction</code>",id:"friction",children:[]},{value:"<code>leftThreshold</code>",id:"leftthreshold",children:[]},{value:"<code>rightThreshold</code>",id:"rightthreshold",children:[]},{value:"<code>overshootLeft</code>",id:"overshootleft",children:[]},{value:"<code>overshootRight</code>",id:"overshootright",children:[]},{value:"<code>overshootFriction</code>",id:"overshootfriction",children:[]},{value:"<code>onSwipeableLeftOpen</code>",id:"onswipeableleftopen",children:[]},{value:"<code>onSwipeableRightOpen</code>",id:"onswipeablerightopen",children:[]},{value:"<code>onSwipeableOpen</code>",id:"onswipeableopen",children:[]},{value:"<code>onSwipeableClose</code>",id:"onswipeableclose",children:[]},{value:"<code>onSwipeableLeftWillOpen</code>",id:"onswipeableleftwillopen",children:[]},{value:"<code>onSwipeableRightWillOpen</code>",id:"onswipeablerightwillopen",children:[]},{value:"<code>onSwipeableWillOpen</code>",id:"onswipeablewillopen",children:[]},{value:"<code>onSwipeableWillClose</code>",id:"onswipeablewillclose",children:[]},{value:"<code>renderLeftActions</code>",id:"renderleftactions",children:[]},{value:"<code>renderRightActions</code>",id:"renderrightactions",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>childrenContainerStyle</code>",id:"childrencontainerstyle",children:[]},{value:"<code>enableTrackpadTwoFingerGesture</code> (iOS only)",id:"enabletrackpadtwofingergesture-ios-only",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>close</code>",id:"close",children:[]},{value:"<code>openLeft</code>",id:"openleft",children:[]},{value:"<code>openRight</code>",id:"openright",children:[]},{value:"Example:",id:"example",children:[]}]}],p={rightToc:d};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(r.a)("gifs/sampleswipeable.gif"),height:"120"})),Object(o.b)("p",null,'This component allows for implementing swipeable rows or similar interaction. It renders its children within a panable container allows for horizontal swiping left and right. While swiping one of two "action" containers can be shown depends on whether user swipes left or right (containers can be rendered by ',Object(o.b)("inlineCode",{parentName:"p"},"renderLeftActions")," or ",Object(o.b)("inlineCode",{parentName:"p"},"renderRightActions")," props)."),Object(o.b)("h3",{id:"usage"},"Usage:"),Object(o.b)("p",null,"Similarly to the ",Object(o.b)("inlineCode",{parentName:"p"},"DrawerLayout"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Swipeable")," component isn't exported by default from the ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," package. To use it, import it in the following way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import Swipeable from 'react-native-gesture-handler/Swipeable';\n")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"friction"},Object(o.b)("inlineCode",{parentName:"h3"},"friction")),Object(o.b)("p",null,'a number that specifies how much the visual interaction will be delayed compared to the gesture distance. e.g. value of 1 will indicate that the swipeable panel should exactly follow the gesture, 2 means it is going to be two times "slower".'),Object(o.b)("h3",{id:"leftthreshold"},Object(o.b)("inlineCode",{parentName:"h3"},"leftThreshold")),Object(o.b)("p",null,"distance from the left edge at which released panel will animate to the open state (or the open panel will animate into the closed state). By default it's a half of the panel's width."),Object(o.b)("h3",{id:"rightthreshold"},Object(o.b)("inlineCode",{parentName:"h3"},"rightThreshold")),Object(o.b)("p",null,"distance from the right edge at which released panel will animate to the open state (or the open panel will animate into the closed state). By default it's a half of the panel's width."),Object(o.b)("h3",{id:"overshootleft"},Object(o.b)("inlineCode",{parentName:"h3"},"overshootLeft")),Object(o.b)("p",null,"a boolean value indicating if the swipeable panel can be pulled further than the left actions panel's width. It is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," by default as long as the left panel render method is present."),Object(o.b)("h3",{id:"overshootright"},Object(o.b)("inlineCode",{parentName:"h3"},"overshootRight")),Object(o.b)("p",null,"a boolean value indicating if the swipeable panel can be pulled further than the right actions panel's width. It is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," by default as long as the right panel render method is present."),Object(o.b)("h3",{id:"overshootfriction"},Object(o.b)("inlineCode",{parentName:"h3"},"overshootFriction")),Object(o.b)("p",null,"a number that specifies how much the visual interaction will be delayed compared to the gesture distance at overshoot. Default value is 1, it mean no friction, for a native feel, try 8 or above."),Object(o.b)("h3",{id:"onswipeableleftopen"},Object(o.b)("inlineCode",{parentName:"h3"},"onSwipeableLeftOpen")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This callback is deprecated and will be removed in the next version. Please use ",Object(o.b)("inlineCode",{parentName:"p"},"onSwipeableOpen(direction)")))),Object(o.b)("p",null,"method that is called when left action panel gets open."),Object(o.b)("h3",{id:"onswipeablerightopen"},Object(o.b)("inlineCode",{parentName:"h3"},"onSwipeableRightOpen")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This callback is deprecated and will be removed in the next version. Please use ",Object(o.b)("inlineCode",{parentName:"p"},"onSwipeableOpen(direction)")))),Object(o.b)("p",null,"method that is called when right action panel gets open."),Object(o.b)("h3",{id:"onswipeableopen"},Object(o.b)("inlineCode",{parentName:"h3"},"onSwipeableOpen")),Object(o.b)("p",null,"method that is called when action panel gets open (either right or left). Takes swipe direction as\nan argument."),Object(o.b)("h3",{id:"onswipeableclose"},Object(o.b)("inlineCode",{parentName:"h3"},"onSwipeableClose")),Object(o.b)("p",null,"method that is called when action panel is closed. Takes swipe direction as\nan argument."),Object(o.b)("h3",{id:"onswipeableleftwillopen"},Object(o.b)("inlineCode",{parentName:"h3"},"onSwipeableLeftWillOpen")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This callback is deprecated and will be removed in the next version. Please use ",Object(o.b)("inlineCode",{parentName:"p"},"onSwipeableWillOpen(direction)")))),Object(o.b)("p",null,"method that is called when left action panel starts animating on open."),Object(o.b)("h3",{id:"onswipeablerightwillopen"},Object(o.b)("inlineCode",{parentName:"h3"},"onSwipeableRightWillOpen")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This callback is deprecated and will be removed in the next version. Please use ",Object(o.b)("inlineCode",{parentName:"p"},"onSwipeableWillOpen(direction)")))),Object(o.b)("p",null,"method that is called when right action panel starts animating on open."),Object(o.b)("h3",{id:"onswipeablewillopen"},Object(o.b)("inlineCode",{parentName:"h3"},"onSwipeableWillOpen")),Object(o.b)("p",null,"method that is called when action panel starts animating on open (either right or left). Takes swipe direction as\nan argument."),Object(o.b)("h3",{id:"onswipeablewillclose"},Object(o.b)("inlineCode",{parentName:"h3"},"onSwipeableWillClose")),Object(o.b)("p",null,"method that is called when action panel starts animating on close. Takes swipe direction as\nan argument."),Object(o.b)("h3",{id:"renderleftactions"},Object(o.b)("inlineCode",{parentName:"h3"},"renderLeftActions")),Object(o.b)("p",null,"method that is expected to return an action panel that is going to be revealed from the left side when user swipes right.\nThis map describes the values to use as inputRange for extra interpolation:\nAnimatedValue: ","[startValue, endValue]"),Object(o.b)("p",null,"progressAnimatedValue: ","[0, 1]","\ndragAnimatedValue: ","[0, +]"),Object(o.b)("p",null,"To support ",Object(o.b)("inlineCode",{parentName:"p"},"rtl")," flexbox layouts use ",Object(o.b)("inlineCode",{parentName:"p"},"flexDirection")," styling."),Object(o.b)("h3",{id:"renderrightactions"},Object(o.b)("inlineCode",{parentName:"h3"},"renderRightActions")),Object(o.b)("p",null,"method that is expected to return an action panel that is going to be revealed from the right side when user swipes left.\nThis map describes the values to use as inputRange for extra interpolation:\nAnimatedValue: ","[startValue, endValue]"),Object(o.b)("p",null,"progressAnimatedValue: ","[0, 1]","\ndragAnimatedValue: ","[0, -]"),Object(o.b)("p",null,"To support ",Object(o.b)("inlineCode",{parentName:"p"},"rtl")," flexbox layouts use ",Object(o.b)("inlineCode",{parentName:"p"},"flexDirection")," styling."),Object(o.b)("h3",{id:"containerstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(o.b)("p",null,"style object for the container (Animated.View), for example to override ",Object(o.b)("inlineCode",{parentName:"p"},"overflow: 'hidden'"),"."),Object(o.b)("h3",{id:"childrencontainerstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"childrenContainerStyle")),Object(o.b)("p",null,"style object for the children container (Animated.View), for example to apply ",Object(o.b)("inlineCode",{parentName:"p"},"flex: 1"),"."),Object(o.b)("h3",{id:"enabletrackpadtwofingergesture-ios-only"},Object(o.b)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture")," (iOS only)"),Object(o.b)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("p",null,"Using reference to ",Object(o.b)("inlineCode",{parentName:"p"},"Swipeable")," it's possible to trigger some actions on it"),Object(o.b)("h3",{id:"close"},Object(o.b)("inlineCode",{parentName:"h3"},"close")),Object(o.b)("p",null,"method that closes component."),Object(o.b)("h3",{id:"openleft"},Object(o.b)("inlineCode",{parentName:"h3"},"openLeft")),Object(o.b)("p",null,"method that opens component on left side."),Object(o.b)("h3",{id:"openright"},Object(o.b)("inlineCode",{parentName:"h3"},"openRight")),Object(o.b)("p",null,"method that opens component on right side."),Object(o.b)("h3",{id:"example"},"Example:"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/showcase/swipeable/index.tsx"}),"swipeable example")," from GestureHandler Example App or view it directly on your phone by visiting ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import React, { Component } from 'react';\nimport { Animated, StyleSheet, View } from 'react-native';\nimport { RectButton } from 'react-native-gesture-handler';\nimport Swipeable from 'react-native-gesture-handler/Swipeable';\n\nclass AppleStyleSwipeableRow extends Component {\n  renderLeftActions = (progress, dragX) => {\n    const trans = dragX.interpolate({\n      inputRange: [0, 50, 100, 101],\n      outputRange: [-20, 0, 0, 1],\n    });\n    return (\n      <RectButton style={styles.leftAction} onPress={this.close}>\n        <Animated.Text\n          style={[\n            styles.actionText,\n            {\n              transform: [{ translateX: trans }],\n            },\n          ]}>\n          Archive\n        </Animated.Text>\n      </RectButton>\n    );\n  };\n  render() {\n    return (\n      <Swipeable renderLeftActions={this.renderLeftActions}>\n        <Text>\"hello\"</Text>\n      </Swipeable>\n    );\n  }\n}\n")))}b.isMDXComponent=!0},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(r,".").concat(h)]||p[h]||b[h]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},340:function(e,t,n){"use strict";var i=n(0),a=n(20);t.a=function(){var e=Object(i.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},341:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var i=n(340),a=n(342);function o(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,l=void 0!==r&&r,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var d=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+d:d}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},342:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},343:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=function(e){var t=e.children;return a.a.createElement("div",{style:o.container},i.Children.map(t,(function(e){return Object(i.cloneElement)(e,Object.assign({},e.props.style,{style:o.img}))})))}}}]);