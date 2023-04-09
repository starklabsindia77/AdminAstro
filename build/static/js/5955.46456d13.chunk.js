(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[5955],{84488:function(n,t,r){"use strict";r.d(t,{Z:function(){return M}});var e=r(30168),i=r(63366),a=r(87462),o=r(47313),u=r(83061),s=r(30686),l=r(50317);function h(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function c(n){return parseFloat(n)}var f=r(17551),d=r(88564),v=r(25469),m=r(22131);function p(n){return(0,m.Z)("MuiSkeleton",n)}(0,r(655).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,w,b,x,k,C,Z,y,S=r(46417),_=["animation","className","component","height","style","variant","width"],R=(0,s.F4)(k||(k=g||(g=(0,e.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),A=(0,s.F4)(C||(C=w||(w=(0,e.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),F=(0,d.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var r=n.ownerState;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})((function(n){var t=n.theme,r=n.ownerState,e=h(t.shape.borderRadius)||"px",i=c(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:(0,f.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===r.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(e,"/").concat(Math.round(i/.6*10)/10).concat(e),"&:empty:before":{content:'"\\00a0"'}},"circular"===r.variant&&{borderRadius:"50%"},r.hasChildren&&{"& > *":{visibility:"hidden"}},r.hasChildren&&!r.width&&{maxWidth:"fit-content"},r.hasChildren&&!r.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,s.iv)(Z||(Z=b||(b=(0,e.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(n){var t=n.ownerState,r=n.theme;return"wave"===t.animation&&(0,s.iv)(y||(y=x||(x=(0,e.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),A,r.palette.action.hover)})),M=o.forwardRef((function(n,t){var r=(0,v.Z)({props:n,name:"MuiSkeleton"}),e=r.animation,o=void 0===e?"pulse":e,s=r.className,h=r.component,c=void 0===h?"span":h,f=r.height,d=r.style,m=r.variant,g=void 0===m?"text":m,w=r.width,b=(0,i.Z)(r,_),x=(0,a.Z)({},r,{animation:o,component:c,variant:g,hasChildren:Boolean(b.children)}),k=function(n){var t=n.classes,r=n.variant,e=n.animation,i=n.hasChildren,a=n.width,o=n.height,u={root:["root",r,e,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,l.Z)(u,p,t)}(x);return(0,S.jsx)(F,(0,a.Z)({as:c,ref:t,className:(0,u.Z)(k.root,s),ownerState:x},b,{style:(0,a.Z)({width:w,height:f},d)}))}))},2785:function(n,t,r){var e=r(35705),i=r(36428)(e);n.exports=i},71839:function(n,t,r){var e=r(2785),i=r(2114);n.exports=function(n,t){var r=-1,a=i(n)?Array(n.length):[];return e(n,(function(n,e,i){a[++r]=t(n,e,i)})),a}},89318:function(n,t,r){var e=r(95434),i=r(30207),a=r(81186),o=r(71839),u=r(40078),s=r(36902),l=r(49674),h=r(19908),c=r(95585);n.exports=function(n,t,r){t=t.length?e(t,(function(n){return c(n)?function(t){return i(t,1===n.length?n[0]:n)}:n})):[h];var f=-1;t=e(t,s(a));var d=o(n,(function(n,r,i){return{criteria:e(t,(function(t){return t(n)})),index:++f,value:n}}));return u(d,(function(n,t){return l(n,t,r)}))}},40078:function(n){n.exports=function(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}},85445:function(n,t,r){var e=r(72060);n.exports=function(n,t){if(n!==t){var r=void 0!==n,i=null===n,a=n===n,o=e(n),u=void 0!==t,s=null===t,l=t===t,h=e(t);if(!s&&!h&&!o&&n>t||o&&u&&l&&!s&&!h||i&&u&&l||!r&&l||!a)return 1;if(!i&&!o&&!h&&n<t||h&&r&&a&&!i&&!o||s&&r&&a||!u&&a||!l)return-1}return 0}},49674:function(n,t,r){var e=r(85445);n.exports=function(n,t,r){for(var i=-1,a=n.criteria,o=t.criteria,u=a.length,s=r.length;++i<u;){var l=e(a[i],o[i]);if(l)return i>=s?l:l*("desc"==r[i]?-1:1)}return n.index-t.index}},36428:function(n,t,r){var e=r(2114);n.exports=function(n,t){return function(r,i){if(null==r)return r;if(!e(r))return n(r,i);for(var a=r.length,o=t?a:-1,u=Object(r);(t?o--:++o<a)&&!1!==i(u[o],o,u););return r}}},68520:function(n,t,r){var e=r(89318),i=r(95585);n.exports=function(n,t,r,a){return null==n?[]:(i(t)||(t=null==t?[]:[t]),i(r=a?void 0:r)||(r=null==r?[]:[r]),e(n,t,r))}}}]);