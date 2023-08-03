"use strict";(self.webpackChunkastroscore=self.webpackChunkastroscore||[]).push([[3190],{18456:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(1413),a=t(45987),o=t(64554),i=t(20890),s=t(23060),l=t(43504),c=t(93517),d=t(80184),x=["links","activeLast"];function p(e){var r=e.links,t=e.activeLast,s=void 0!==t&&t,l=(0,a.Z)(e,x),p=r[r.length-1].name,u=r.map((function(e){return(0,d.jsx)(h,{link:e},e.name)})),m=r.map((function(e){return(0,d.jsx)("div",{children:e.name!==p?(0,d.jsx)(h,{link:e}):(0,d.jsx)(i.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:p})},e.name)}));return(0,d.jsx)(c.Z,(0,n.Z)((0,n.Z)({separator:(0,d.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{},{children:s?u:m}))}function h(e){var r=e.link,t=r.href,n=r.name,a=r.icon;return(0,d.jsxs)(s.Z,{variant:"body2",component:l.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&(0,d.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),n]},n)}var u=["links","action","heading","moreLink","sx"];function m(e){var r=e.links,t=e.action,l=e.heading,c=e.moreLink,x=void 0===c?[]:c,h=e.sx,m=(0,a.Z)(e,u);return(0,d.jsxs)(o.Z,{sx:(0,n.Z)({mb:5},h),children:[(0,d.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(i.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,d.jsx)(p,(0,n.Z)({links:r},m))]}),t&&(0,d.jsx)(o.Z,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(o.Z,{sx:{mt:2},children:"string"===typeof x?(0,d.jsx)(s.Z,{href:x,target:"_blank",rel:"noopener",variant:"body2",children:x}):x.map((function(e){return(0,d.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},13190:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var n=t(26445),a=t(64554),o=t(38072),i=t(85703),s=t(23434),l=t(25212),c=t(18456),d=t(1413),x=t(47630),p=t(57621),h=t(60220),u=t(20890),m=t(53767),f=t(94721),v=t(63402),Z=t(7870),g=t(5977),b=t(39330),j=t(37835),y=t(80184),k=(0,x.ZP)("div")((function(e){var r=e.theme;return(0,d.Z)((0,d.Z)({},(0,v.Z)().bgBlur({blur:2,color:r.palette.primary.darker})),{},{top:0,zIndex:8,content:"''",width:"100%",height:"100%",position:"absolute"})}));function w(e){var r=e.expert,t=r.name,n=r.cover,o=r.position,i=r.follower,s=r.totalPost,l=r.avatarUrl,c=r.following;return(0,y.jsxs)(p.Z,{sx:{textAlign:"center"},children:[(0,y.jsxs)(a.Z,{sx:{position:"relative"},children:[(0,y.jsx)(j.Z,{src:"https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg",sx:{width:144,height:62,zIndex:10,left:0,right:0,bottom:-26,mx:"auto",position:"absolute",color:"background.paper"}}),(0,y.jsx)(h.Z,{alt:t,src:l,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),(0,y.jsx)(k,{}),(0,y.jsx)(g.Z,{src:n,alt:n,ratio:"16/9"})]}),(0,y.jsx)(u.Z,{variant:"subtitle1",sx:{mt:6},children:t}),(0,y.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:o}),(0,y.jsx)(m.Z,{alignItems:"center",children:(0,y.jsx)(b.Z,{initialColor:!0,sx:{my:2.5}})}),(0,y.jsx)(f.Z,{sx:{borderStyle:"dashed"}}),(0,y.jsxs)(a.Z,{sx:{py:3,display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Follower"}),(0,y.jsx)(u.Z,{variant:"subtitle1",children:(0,Z.v1)(i)})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Following"}),(0,y.jsx)(u.Z,{variant:"subtitle1",children:(0,Z.v1)(c)})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{variant:"caption",component:"div",sx:{mb:.75,color:"text.disabled"},children:"Total Post"}),(0,y.jsx)(u.Z,{variant:"subtitle1",children:(0,Z.v1)(s)})]})]})]})}function C(){var e=(0,i.Z)().themeStretch;return(0,y.jsx)(l.Z,{title:"Expert: Cards",children:(0,y.jsxs)(n.Z,{maxWidth:!e&&"lg",children:[(0,y.jsx)(c.Z,{heading:"Expert Cards",links:[{name:"Dashboard",href:o.vB.root},{name:"Expert",href:o.vB.expert.root},{name:"Cards"}]}),(0,y.jsx)(a.Z,{sx:{display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}},children:s.eD.map((function(e){return(0,y.jsx)(w,{expert:e},e.id)}))})]})})}},93517:function(e,r,t){t.d(r,{Z:function(){return M}});var n=t(93433),a=t(29439),o=t(4942),i=t(87462),s=t(63366),l=t(72791),c=(t(57441),t(28182)),d=t(90767),x=t(47630),p=t(93736),h=t(20890),u=t(12065),m=t(74223),f=t(80184),v=(0,m.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(95080),g=(0,x.ZP)(Z.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,u._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,u._4)(r.palette.grey[600],.12)})})})),b=(0,x.ZP)(v)({width:24,height:16});var j=function(e){var r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(g,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(b,{ownerState:r})}))})},y=t(95159);function k(e){return(0,y.Z)("MuiBreadcrumbs",e)}var w=(0,t(30208).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,x.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(w.li),r.li),r.root]}})({}),B=(0,x.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,x.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,r,t,n){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,f.jsx)(R,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):a.push(o),a}),[])}var M=l.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,x=t.className,h=t.component,u=void 0===h?"nav":h,m=t.expandText,v=void 0===m?"Show path":m,Z=t.itemsAfterCollapse,g=void 0===Z?1:Z,b=t.itemsBeforeCollapse,y=void 0===b?1:b,w=t.maxItems,R=void 0===w?8:w,M=t.separator,P=void 0===M?"/":M,z=(0,s.Z)(t,C),L=l.useState(!1),N=(0,a.Z)(L,2),T=N[0],A=N[1],E=(0,i.Z)({},t,{component:u,expanded:T,expandText:v,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:R,separator:P}),W=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,r)}(E),_=l.useRef(null),D=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,f.jsx)("li",{className:W.li,children:e},"child-".concat(r))}));return(0,f.jsx)(S,(0,i.Z)({ref:r,component:u,color:"text.secondary",className:(0,c.Z)(W.root,x),ownerState:E},z,{children:(0,f.jsx)(B,{className:W.ol,ref:_,ownerState:E,children:I(T||R&&D.length<=R?D:function(e){return y+g>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,f.jsx)(j,{"aria-label":v,onClick:function(){A(!0);var e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-g,e.length)))}(D),W.separator,P,E)})}))}))}}]);
//# sourceMappingURL=3190.48ff1e91.chunk.js.map