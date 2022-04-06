(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{251:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(339)),o={id:"nativeview-gh",title:"NativeViewGestureHandler",sidebar_label:"NativeView"},c={unversionedId:"gesture-handlers/api/nativeview-gh",id:"version-2.1.1/gesture-handlers/api/nativeview-gh",isDocsHomePage:!1,title:"NativeViewGestureHandler",description:"A gesture handler that allows other touch handling components to participate in",source:"@site/versioned_docs/version-2.1.1/gesture-handlers/api/nativeview-gh.md",slug:"/gesture-handlers/api/nativeview-gh",permalink:"/react-native-gesture-handler/docs/2.1.1/gesture-handlers/api/nativeview-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.1/gesture-handlers/api/nativeview-gh.md",version:"2.1.1",sidebar_label:"NativeView",sidebar:"version-2.1.1/docs",previous:{title:"ForceTouchGestureHandler (iOS only)",permalink:"/react-native-gesture-handler/docs/2.1.1/gesture-handlers/api/force-gh"},next:{title:"createNativeWrapper",permalink:"/react-native-gesture-handler/docs/2.1.1/gesture-handlers/api/create-native-wrapper"}},l=[{value:"Properties",id:"properties",children:[{value:"<code>shouldActivateOnStart</code> (<strong>Android only</strong>)",id:"shouldactivateonstart-android-only",children:[]},{value:"<code>disallowInterruption</code>",id:"disallowinterruption",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A gesture handler that allows other touch handling components to participate in\nRNGH's gesture system."),Object(i.b)("p",null,"Used by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/gesture-handlers/api/create-native-wrapper"}),Object(i.b)("inlineCode",{parentName:"a"},"createNativeWrapper()")),"."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.1.1/gesture-handlers/api/common-gh#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to ",Object(i.b)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," component:"),Object(i.b)("h3",{id:"shouldactivateonstart-android-only"},Object(i.b)("inlineCode",{parentName:"h3"},"shouldActivateOnStart")," (",Object(i.b)("strong",{parentName:"h3"},"Android only"),")"),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", underlying handler will activate unconditionally when in ",Object(i.b)("inlineCode",{parentName:"p"},"BEGAN")," or ",Object(i.b)("inlineCode",{parentName:"p"},"UNDETERMINED")," state."),Object(i.b)("h3",{id:"disallowinterruption"},Object(i.b)("inlineCode",{parentName:"h3"},"disallowInterruption")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", cancels all other gesture handlers when this ",Object(i.b)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," receives an ",Object(i.b)("inlineCode",{parentName:"p"},"ACTIVE")," state event."))}p.isMDXComponent=!0},339:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return r?a.a.createElement(h,c(c({ref:t},s),{},{components:r})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);