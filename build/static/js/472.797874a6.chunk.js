"use strict";(self.webpackChunkastroscore=self.webpackChunkastroscore||[]).push([[472],{40896:function(e,r,t){t.r(r),t.d(r,{default:function(){return Z}});var n=t(15861),o=t(29439),a=t(64687),i=t.n(a),l=t(26445),s=t(72791),c=t(16871),u=t(13915),d=t(38072),p=t(85703),f=t(22175),m=t(25212),h=t(89731),g=t(18456),v=t(30720),x=t(80184);function Z(){var e=(0,p.Z)().themeStretch,r=(0,c.TH)().pathname,t=(0,f.Z)(),a=(0,s.useState)(null),Z=(0,o.Z)(a,2),b=(Z[0],Z[1]),C=(0,c.UO)().title,w=(0,s.useState)({}),B=(0,o.Z)(w,2),k=B[0],y=B[1],S=r.includes("edit"),j=(0,s.useCallback)((0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.get("/blog/post/".concat(C));case 3:r=e.sent,t.current&&y(r.data.post),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),b(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t,C]);return(0,s.useEffect)((function(){j()}),[j]),(0,x.jsx)(m.Z,{title:"Blog: Edit Post",children:(0,x.jsxs)(l.Z,{maxWidth:!e&&"lg",children:[(0,x.jsx)(g.Z,{heading:"Edit a post",links:[{name:"Dashboard",href:d.vB.root},{name:"Blog",href:d.vB.blog.root},{name:(0,u.G)(C)}]}),(0,x.jsx)(v.Ge,{isEdit:S,currentBlog:k})]})})}},93517:function(e,r,t){t.d(r,{Z:function(){return N}});var n=t(93433),o=t(29439),a=t(4942),i=t(87462),l=t(63366),s=t(72791),c=(t(57441),t(28182)),u=t(90767),d=t(47630),p=t(93736),f=t(20890),m=t(12065),h=t(74223),g=t(80184),v=(0,h.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(95080),Z=(0,d.ZP)(x.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,m._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(r.palette.grey[600],.12)})})})),b=(0,d.ZP)(v)({width:24,height:16});var C=function(e){var r=e;return(0,g.jsx)("li",{children:(0,g.jsx)(Z,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,g.jsx)(b,{ownerState:r})}))})},w=t(95159);function B(e){return(0,w.Z)("MuiBreadcrumbs",e)}var k=(0,t(30208).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),y=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,d.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(k.li),r.li),r.root]}})({}),j=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,r,t,n){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,g.jsx)(R,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):o.push(a),o}),[])}var N=s.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,d=t.className,f=t.component,m=void 0===f?"nav":f,h=t.expandText,v=void 0===h?"Show path":h,x=t.itemsAfterCollapse,Z=void 0===x?1:x,b=t.itemsBeforeCollapse,w=void 0===b?1:b,k=t.maxItems,R=void 0===k?8:k,N=t.separator,P=void 0===N?"/":N,E=(0,l.Z)(t,y),z=s.useState(!1),A=(0,o.Z)(z,2),I=A[0],T=A[1],G=(0,i.Z)({},t,{component:m,expanded:I,expandText:v,itemsAfterCollapse:Z,itemsBeforeCollapse:w,maxItems:R,separator:P}),L=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},B,r)}(G),H=s.useRef(null),O=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:L.li,children:e},"child-".concat(r))}));return(0,g.jsx)(S,(0,i.Z)({ref:r,component:m,color:"text.secondary",className:(0,c.Z)(L.root,d),ownerState:G},E,{children:(0,g.jsx)(j,{className:L.ol,ref:H,ownerState:G,children:M(I||R&&O.length<=R?O:function(e){return w+Z>=e.length?e:[].concat((0,n.Z)(e.slice(0,w)),[(0,g.jsx)(C,{"aria-label":v,onClick:function(){T(!0);var e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-Z,e.length)))}(O),L.separator,P,G)})}))}))},53305:function(e,r,t){t.d(r,{o:function(){return a}});var n=t(3431),o=t(17254);function a(e,r){return void 0===r&&(r={}),function(e,r){return void 0===r&&(r={}),(0,o.B)(e,(0,n.pi)({delimiter:"."},r))}(e,(0,n.pi)({delimiter:"-"},r))}},13915:function(e,r,t){t.d(r,{G:function(){return l}});var n=t(3431),o=t(17254),a=t(48652);function i(e,r){var t=e.toLowerCase();return 0===r?(0,a.l)(t):t}function l(e,r){return void 0===r&&(r={}),(0,o.B)(e,(0,n.pi)({delimiter:" ",transform:i},r))}}}]);
//# sourceMappingURL=472.797874a6.chunk.js.map