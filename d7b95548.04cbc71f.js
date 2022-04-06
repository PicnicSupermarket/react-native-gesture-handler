(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{301:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(339)),s={id:"tap-gh",title:"TapGestureHandler",sidebar_label:"Tap"},o={unversionedId:"gesture-handlers/api/tap-gh",id:"gesture-handlers/api/tap-gh",isDocsHomePage:!1,title:"TapGestureHandler",description:"We recently released RNGH 2.0 with new Gestures system. Check out [RNGH 2.0",source:"@site/docs/gesture-handlers/api/tap-gh.md",slug:"/gesture-handlers/api/tap-gh",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/tap-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/docs/gesture-handlers/api/tap-gh.md",version:"current",sidebar_label:"Tap",sidebar:"docs",previous:{title:"PanGestureHandler",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/pan-gh"},next:{title:"LongPressGestureHandler",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/api/longpress-gh"}},c=[{value:"Properties",id:"properties",children:[{value:"<code>minPointers</code>",id:"minpointers",children:[]},{value:"<code>maxDurationMs</code>",id:"maxdurationms",children:[]},{value:"<code>maxDelayMs</code>",id:"maxdelayms",children:[]},{value:"<code>numberOfTaps</code>",id:"numberoftaps",children:[]},{value:"<code>maxDeltaX</code>",id:"maxdeltax",children:[]},{value:"<code>maxDeltaY</code>",id:"maxdeltay",children:[]},{value:"<code>maxDist</code>",id:"maxdist",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We recently released RNGH 2.0 with new Gestures system. Check out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/#rngh-20"}),"RNGH 2.0\nsection in Introduction")," for more information."))),Object(i.b)("p",null,"A discrete gesture handler that recognizes one or many taps."),Object(i.b)("p",null,"Tap gestures detect one or more fingers briefly touching the screen.\nThe fingers involved in these gestures must not move significantly from their initial touch positions.\nThe required number of taps and allowed distance from initial position may be configured.\nFor example, you might configure tap gesture recognizers to detect single taps, double taps, or triple taps."),Object(i.b)("p",null,"In order for a handler to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activate"),", specified gesture requirements such as minPointers, numberOfTaps, maxDist, maxDurationMs, and maxDelayMs (explained below) must be met. Immediately after the handler ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activates"),", it will ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#end"}),"END"),"."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to the ",Object(i.b)("inlineCode",{parentName:"p"},"TapGestureHandler")," component:"),Object(i.b)("h3",{id:"minpointers"},Object(i.b)("inlineCode",{parentName:"h3"},"minPointers")),Object(i.b)("p",null,"Minimum number of pointers (fingers) required to be placed before the handler ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activates"),". Should be a positive integer. The default value is 1."),Object(i.b)("h3",{id:"maxdurationms"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDurationMs")),Object(i.b)("p",null,"Maximum time, expressed in milliseconds, that defines how fast a finger must be released after a touch. The default value is 500."),Object(i.b)("h3",{id:"maxdelayms"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDelayMs")),Object(i.b)("p",null,"Maximum time, expressed in milliseconds, that can pass before the next tap \u2014 if many taps are required. The default value is 500."),Object(i.b)("h3",{id:"numberoftaps"},Object(i.b)("inlineCode",{parentName:"h3"},"numberOfTaps")),Object(i.b)("p",null,"Number of tap gestures required to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activate")," the handler. The default value is 1."),Object(i.b)("h3",{id:"maxdeltax"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDeltaX")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the X axis during a tap gesture. If the finger travels further than the defined distance along the X axis and the handler hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)("h3",{id:"maxdeltay"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDeltaY")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel along the Y axis during a tap gesture. If the finger travels further than the defined distance along the Y axis and the handler hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)("h3",{id:"maxdist"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDist")),Object(i.b)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel during a tap gesture. If the finger travels further than the defined distance and the handler hasn't yet ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state#active"}),"activated"),", it will fail to recognize the gesture."),Object(i.b)("h2",{id:"event-data"},"Event data"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to the ",Object(i.b)("inlineCode",{parentName:"p"},"TapGestureHandler")," component:"),Object(i.b)("h3",{id:"x"},Object(i.b)("inlineCode",{parentName:"h3"},"x")),Object(i.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),Object(i.b)("h3",{id:"y"},Object(i.b)("inlineCode",{parentName:"h3"},"y")),Object(i.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),Object(i.b)("h3",{id:"absolutex"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(i.b)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"absoluteX")," instead of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#x"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),Object(i.b)("h3",{id:"absolutey"},Object(i.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(i.b)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",Object(i.b)("inlineCode",{parentName:"p"},"absoluteY")," instead of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#y"}),Object(i.b)("inlineCode",{parentName:"a"},"y"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/multitap/index.tsx"}),"multitap example")," from GestureHandler Example App."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"export class PressBox extends Component {\n  doubleTapRef = React.createRef();\n  render() {\n    return (\n      <TapGestureHandler\n        onHandlerStateChange={this._onSingleTap}\n        waitFor={this.doubleTapRef}>\n        <TapGestureHandler ref={this.doubleTapRef} numberOfTaps={2}>\n          <View style={styles.box} />\n        </TapGestureHandler>\n      </TapGestureHandler>\n    );\n  }\n}\n")))}d.isMDXComponent=!0},339:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(s,".").concat(u)]||p[u]||b[u]||i;return a?r.a.createElement(h,o(o({ref:t},l),{},{components:a})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);