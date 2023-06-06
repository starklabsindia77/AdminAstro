"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[2548],{3404:function(t,e,n){n.d(e,{Z:function(){return B}});var a=n(93433),r=n(29439),o=n(4942),i=n(87462),s=n(63366),l=n(47313),c=(n(96214),n(83061)),u=n(50317),d=n(88564),h=n(25469),f=n(61113),m=n(17551),p=n(54750),v=n(46417),g=(0,p.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=n(38743),b=(0,d.ZP)(Z.Z)((function(t){var e=t.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(e.spacing(1)," * 0.5)"),marginRight:"calc(".concat(e.spacing(1)," * 0.5)")},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,m._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(e.palette.grey[600],.12)})})})),w=(0,d.ZP)(g)({width:24,height:16});var x=function(t){var e=t;return(0,v.jsx)("li",{children:(0,v.jsx)(b,(0,i.Z)({focusRipple:!0},t,{ownerState:e,children:(0,v.jsx)(w,{ownerState:e})}))})},C=n(22131);function y(t){return(0,C.Z)("MuiBreadcrumbs",t)}var S=(0,n(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),M=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=(0,d.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(t,e){return[(0,o.Z)({},"& .".concat(S.li),e.li),e.root]}})({}),D=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(t,e){return e.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(t,e){return e.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function X(t,e,n,a){return t.reduce((function(r,o,i){return i<t.length-1?r=r.concat(o,(0,v.jsx)(R,{"aria-hidden":!0,className:e,ownerState:a,children:n},"separator-".concat(i))):r.push(o),r}),[])}var B=l.forwardRef((function(t,e){var n=(0,h.Z)({props:t,name:"MuiBreadcrumbs"}),o=n.children,d=n.className,f=n.component,m=void 0===f?"nav":f,p=n.expandText,g=void 0===p?"Show path":p,Z=n.itemsAfterCollapse,b=void 0===Z?1:Z,w=n.itemsBeforeCollapse,C=void 0===w?1:w,S=n.maxItems,R=void 0===S?8:S,B=n.separator,N=void 0===B?"/":B,_=(0,s.Z)(n,M),j=l.useState(!1),A=(0,r.Z)(j,2),T=A[0],P=A[1],F=(0,i.Z)({},n,{component:m,expanded:T,expandText:g,itemsAfterCollapse:b,itemsBeforeCollapse:C,maxItems:R,separator:N}),I=function(t){var e=t.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,e)}(F),z=l.useRef(null),E=l.Children.toArray(o).filter((function(t){return l.isValidElement(t)})).map((function(t,e){return(0,v.jsx)("li",{className:I.li,children:t},"child-".concat(e))}));return(0,v.jsx)(k,(0,i.Z)({ref:e,component:m,color:"text.secondary",className:(0,c.Z)(I.root,d),ownerState:F},_,{children:(0,v.jsx)(D,{className:I.ol,ref:z,ownerState:F,children:X(T||R&&E.length<=R?E:function(t){return C+b>=t.length?t:[].concat((0,a.Z)(t.slice(0,C)),[(0,v.jsx)(x,{"aria-label":g,onClick:function(){P(!0);var t=z.current.querySelector("a[href],button,[tabindex]");t&&t.focus()}},"ellipsis")],(0,a.Z)(t.slice(t.length-b,t.length)))}(E),I.separator,N,F)})}))}))},84488:function(t,e,n){n.d(e,{Z:function(){return B}});var a=n(30168),r=n(63366),o=n(87462),i=n(47313),s=n(83061),l=n(30686),c=n(50317);function u(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(t){return parseFloat(t)}var h=n(17551),f=n(88564),m=n(25469),p=n(22131);function v(t){return(0,p.Z)("MuiSkeleton",t)}(0,n(655).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,Z,b,w,x,C,y,S,M=n(46417),k=["animation","className","component","height","style","variant","width"],D=(0,l.F4)(x||(x=g||(g=(0,a.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),R=(0,l.F4)(C||(C=Z||(Z=(0,a.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),X=(0,f.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(t){var e=t.theme,n=t.ownerState,a=u(e.shape.borderRadius)||"px",r=d(e.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(a,"/").concat(Math.round(r/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(t){return"pulse"===t.ownerState.animation&&(0,l.iv)(y||(y=b||(b=(0,a.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),D)}),(function(t){var e=t.ownerState,n=t.theme;return"wave"===e.animation&&(0,l.iv)(S||(S=w||(w=(0,a.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),R,n.palette.action.hover)})),B=i.forwardRef((function(t,e){var n=(0,m.Z)({props:t,name:"MuiSkeleton"}),a=n.animation,i=void 0===a?"pulse":a,l=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,f=n.style,p=n.variant,g=void 0===p?"text":p,Z=n.width,b=(0,r.Z)(n,k),w=(0,o.Z)({},n,{animation:i,component:d,variant:g,hasChildren:Boolean(b.children)}),x=function(t){var e=t.classes,n=t.variant,a=t.animation,r=t.hasChildren,o=t.width,i=t.height,s={root:["root",n,a,r&&"withChildren",r&&!o&&"fitContent",r&&!i&&"heightAuto"]};return(0,c.Z)(s,v,e)}(w);return(0,M.jsx)(X,(0,o.Z)({as:d,ref:e,className:(0,s.Z)(x.root,l),ownerState:w},b,{style:(0,o.Z)({width:Z,height:h},f)}))}))},51166:function(t,e,n){n.d(e,{Z:function(){return r}});var a=n(49294);function r(t){return(0,a.Z)({},t)}},98495:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(7781),r=n(409),o=n(75377),i=n(55456),s=n(93601),l=n(51166),c=n(5025),u=n(34800),d=1440,h=43200;function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,u.Z)(2,arguments);var f=n.locale||i.Z;if(!f.formatDistance)throw new RangeError("locale must contain formatDistance property");var m=(0,a.Z)(t,e);if(isNaN(m))throw new RangeError("Invalid time value");var p,v,g=(0,l.Z)(n);g.addSuffix=Boolean(n.addSuffix),g.comparison=m,m>0?(p=(0,s.Z)(e),v=(0,s.Z)(t)):(p=(0,s.Z)(t),v=(0,s.Z)(e));var Z,b=(0,o.Z)(v,p),w=((0,c.Z)(v)-(0,c.Z)(p))/1e3,x=Math.round((b-w)/60);if(x<2)return n.includeSeconds?b<5?f.formatDistance("lessThanXSeconds",5,g):b<10?f.formatDistance("lessThanXSeconds",10,g):b<20?f.formatDistance("lessThanXSeconds",20,g):b<40?f.formatDistance("halfAMinute",null,g):b<60?f.formatDistance("lessThanXMinutes",1,g):f.formatDistance("xMinutes",1,g):0===x?f.formatDistance("lessThanXMinutes",1,g):f.formatDistance("xMinutes",x,g);if(x<45)return f.formatDistance("xMinutes",x,g);if(x<90)return f.formatDistance("aboutXHours",1,g);if(x<d){var C=Math.round(x/60);return f.formatDistance("aboutXHours",C,g)}if(x<2520)return f.formatDistance("xDays",1,g);if(x<h){var y=Math.round(x/d);return f.formatDistance("xDays",y,g)}if(x<86400)return Z=Math.round(x/h),f.formatDistance("aboutXMonths",Z,g);if((Z=(0,r.Z)(v,p))<12){var S=Math.round(x/h);return f.formatDistance("xMonths",S,g)}var M=Z%12,k=Math.floor(Z/12);return M<3?f.formatDistance("aboutXYears",k,g):M<9?f.formatDistance("overXYears",k,g):f.formatDistance("almostXYears",k+1,g)}function m(t,e){return(0,u.Z)(1,arguments),f(t,Date.now(),e)}}}]);