(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{335:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(339)),o={id:"state-manager",title:"Gesture state manager",sidebar_label:"Gesture state manager"},s={unversionedId:"api/gestures/state-manager",id:"version-2.3.0/api/gestures/state-manager",isDocsHomePage:!1,title:"Gesture state manager",description:"GestureStateManager allows to manually control the state of the gestures. Please note that react-native-reanimated is required to use it, since it allows for synchronously executing methods in worklets.",source:"@site/versioned_docs/version-2.3.0/api/gestures/state-manager.md",slug:"/api/gestures/state-manager",permalink:"/react-native-gesture-handler/docs/api/gestures/state-manager",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.3.0/api/gestures/state-manager.md",version:"2.3.0",sidebar_label:"Gesture state manager",sidebar:"version-2.3.0/docs",previous:{title:"Touch events",permalink:"/react-native-gesture-handler/docs/api/gestures/touch-events"},next:{title:"Buttons",permalink:"/react-native-gesture-handler/docs/api/components/buttons"}},c=[{value:"Methods",id:"methods",children:[{value:"<code>begin()</code>",id:"begin",children:[]},{value:"<code>activate()</code>",id:"activate",children:[]},{value:"<code>end()</code>",id:"end",children:[]},{value:"<code>fail()</code>",id:"fail",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"GestureStateManager")," allows to manually control the state of the gestures. Please note that ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," is required to use it, since it allows for synchronously executing methods in worklets."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"begin"},Object(i.b)("inlineCode",{parentName:"h3"},"begin()")),Object(i.b)("p",null,"Transition the gesture to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#began"}),Object(i.b)("inlineCode",{parentName:"a"},"BEGAN"))," state. This method will have no effect if the gesture has already activated or finished."),Object(i.b)("h3",{id:"activate"},Object(i.b)("inlineCode",{parentName:"h3"},"activate()")),Object(i.b)("p",null,"Transition the gesture to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#active"}),Object(i.b)("inlineCode",{parentName:"a"},"ACTIVE"))," state. This method will have no effect if the handler is already active, or has finished.\nIf the gesture is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),Object(i.b)("inlineCode",{parentName:"a"},"exclusive"))," with another one, the activation will be delayed until the gesture with higher priority fails."),Object(i.b)("h3",{id:"end"},Object(i.b)("inlineCode",{parentName:"h3"},"end()")),Object(i.b)("p",null,"Transition the gesture to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#end"}),Object(i.b)("inlineCode",{parentName:"a"},"END"))," state. This method will have no effect if the handler has already finished."),Object(i.b)("h3",{id:"fail"},Object(i.b)("inlineCode",{parentName:"h3"},"fail()")),Object(i.b)("p",null,"Transition the gesture to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/under-the-hood/states-events#failed"}),Object(i.b)("inlineCode",{parentName:"a"},"FAILED"))," state. This method will have no effect if the handler has already finished."))}d.isMDXComponent=!0},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,b=u["".concat(o,".").concat(p)]||u[p]||h[p]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);