"use strict";(self.webpackChunkastroscore=self.webpackChunkastroscore||[]).push([[156],{93517:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(93433),a=n(29439),o=n(4942),i=n(87462),s=n(63366),l=n(72791),c=(n(57441),n(28182)),u=n(90767),d=n(47630),h=n(93736),p=n(20890),m=n(12065),f=n(74223),g=n(80184),v=(0,f.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=n(95080),b=(0,d.ZP)(Z.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,m._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(t.palette.grey[600],.12)})})})),w=(0,d.ZP)(v)({width:24,height:16});var x=function(e){var t=e;return(0,g.jsx)("li",{children:(0,g.jsx)(b,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,g.jsx)(w,{ownerState:t})}))})},C=n(95159);function y(e){return(0,C.Z)("MuiBreadcrumbs",e)}var k=(0,n(30208).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,d.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(k.li),t.li),t.root]}})({}),M=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),B=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function j(e,t,n,r){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,g.jsx)(B,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):a.push(o),a}),[])}var N=l.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,d=n.className,p=n.component,m=void 0===p?"nav":p,f=n.expandText,v=void 0===f?"Show path":f,Z=n.itemsAfterCollapse,b=void 0===Z?1:Z,w=n.itemsBeforeCollapse,C=void 0===w?1:w,k=n.maxItems,B=void 0===k?8:k,N=n.separator,A=void 0===N?"/":N,P=(0,s.Z)(n,S),F=l.useState(!1),z=(0,a.Z)(F,2),I=z[0],T=z[1],X=(0,i.Z)({},n,{component:m,expanded:I,expandText:v,itemsAfterCollapse:b,itemsBeforeCollapse:C,maxItems:B,separator:A}),_=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,t)}(X),q=l.useRef(null),L=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return(0,g.jsx)("li",{className:_.li,children:e},"child-".concat(t))}));return(0,g.jsx)(R,(0,i.Z)({ref:t,component:m,color:"text.secondary",className:(0,c.Z)(_.root,d),ownerState:X},P,{children:(0,g.jsx)(M,{className:_.ol,ref:q,ownerState:X,children:j(I||B&&L.length<=B?L:function(e){return C+b>=e.length?e:[].concat((0,r.Z)(e.slice(0,C)),[(0,g.jsx)(x,{"aria-label":v,onClick:function(){T(!0);var e=q.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-b,e.length)))}(L),_.separator,A,X)})}))}))},47047:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(30168),a=n(63366),o=n(87462),i=n(72791),s=n(28182),l=n(52554),c=n(90767);function u(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(e){return parseFloat(e)}var h=n(12065),p=n(47630),m=n(93736),f=n(95159);function g(e){return(0,f.Z)("MuiSkeleton",e)}(0,n(30208).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v,Z,b,w,x,C,y,k,S=n(80184),R=["animation","className","component","height","style","variant","width"],M=(0,l.F4)(x||(x=v||(v=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),B=(0,l.F4)(C||(C=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),j=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=u(t.shape.borderRadius)||"px",a=d(t.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(r,"/").concat(Math.round(a/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,l.iv)(y||(y=b||(b=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),M)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,l.iv)(k||(k=w||(w=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),B,n.palette.action.hover)})),N=i.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,l=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,p=n.style,f=n.variant,v=void 0===f?"text":f,Z=n.width,b=(0,a.Z)(n,R),w=(0,o.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(b.children)}),x=function(e){var t=e.classes,n=e.variant,r=e.animation,a=e.hasChildren,o=e.width,i=e.height,s={root:["root",n,r,a&&"withChildren",a&&!o&&"fitContent",a&&!i&&"heightAuto"]};return(0,c.Z)(s,g,t)}(w);return(0,S.jsx)(j,(0,o.Z)({as:d,ref:t,className:(0,s.Z)(x.root,l),ownerState:w},b,{style:(0,o.Z)({width:Z,height:h},p)}))}))}}]);
//# sourceMappingURL=156.4fb0990c.chunk.js.map