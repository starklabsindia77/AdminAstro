"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[4212],{25416:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),i=t(45987),o=t(88564),a=t(61113),s=t(3484),l=t(46417),c=["title","description","img"],d=(0,o.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function u(e){var n=e.title,t=e.description,o=e.img,u=(0,i.Z)(e,c);return(0,l.jsxs)(d,(0,r.Z)((0,r.Z)({},u),{},{children:[(0,l.jsx)(s.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:o||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(a.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,l.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}},67871:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(1413),i=t(45987),o=t(57829),a=t(61113),s=t(47723),l=t(29466),c=t(3404),d=t(46417),u=["links","activeLast"];function h(e){var n=e.links,t=e.activeLast,s=void 0!==t&&t,l=(0,i.Z)(e,u),h=n[n.length-1].name,f=n.map((function(e){return(0,d.jsx)(x,{link:e},e.name)})),g=n.map((function(e){return(0,d.jsx)("div",{children:e.name!==h?(0,d.jsx)(x,{link:e}):(0,d.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:h})},e.name)}));return(0,d.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{},{children:s?f:g}))}function x(e){var n=e.link,t=n.href,r=n.name,i=n.icon;return(0,d.jsxs)(s.Z,{variant:"body2",component:l.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&(0,d.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),r]},r)}var f=["links","action","heading","moreLink","sx"];function g(e){var n=e.links,t=e.action,l=e.heading,c=e.moreLink,u=void 0===c?[]:c,x=e.sx,g=(0,i.Z)(e,f);return(0,d.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},x),children:[(0,d.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,d.jsx)(h,(0,r.Z)({links:n},g))]}),t&&(0,d.jsx)(o.Z,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(o.Z,{sx:{mt:2},children:"string"===typeof u?(0,d.jsx)(s.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,d.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},55844:function(e,n,t){t.d(n,{$W:function(){return p},K:function(){return b},V7:function(){return u},et:function(){return s},Nl:function(){return C},hM:function(){return g}});var r=t(24076),i=t(67478),o=t(25416),a=t(46417);function s(e){var n=e.isNotFound;return(0,a.jsx)(r.Z,{children:n?(0,a.jsx)(i.Z,{colSpan:12,children:(0,a.jsx)(o.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,a.jsx)(i.Z,{colSpan:12,sx:{p:0}})})}var l=t(47131),c=t(42593),d=t(28100);function u(e){var n=e.actions,t=e.open,r=e.onClose,i=e.onOpen;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{onClick:i,children:(0,a.jsx)(c.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,a.jsx)(d.Z,{open:Boolean(t),anchorEl:t,onClose:r,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:n})]})}var h=t(1413),x=t(35898),f=t(84488);function g(e){var n=Object.assign({},e);return(0,a.jsx)(r.Z,(0,h.Z)((0,h.Z)({},n),{},{children:(0,a.jsx)(i.Z,{colSpan:12,children:(0,a.jsxs)(x.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,a.jsx)(f.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,a.jsx)(f.Z,{variant:"text",width:"100%",height:20}),(0,a.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(f.Z,{variant:"text",width:160,height:20})]})})}))}function p(e){var n=e.emptyRows,t=e.height;return n?(0,a.jsx)(r.Z,{sx:(0,h.Z)({},t&&{height:t*n}),children:(0,a.jsx)(i.Z,{colSpan:9})}):null}var m=t(23477),Z=t(44758),v=t(82558),j=t(57829),w={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function b(e){var n=e.order,t=e.orderBy,o=e.rowCount,s=void 0===o?0:o,l=e.headLabel,c=e.numSelected,d=void 0===c?0:c,u=e.onSort,x=e.onSelectAllRows,f=e.sx;return(0,a.jsx)(m.Z,{sx:f,children:(0,a.jsxs)(r.Z,{children:[x&&(0,a.jsx)(i.Z,{padding:"checkbox",children:(0,a.jsx)(Z.Z,{indeterminate:d>0&&d<s,checked:s>0&&d===s,onChange:function(e){return x(e.target.checked)}})}),l.map((function(e){return(0,a.jsx)(i.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:u?(0,a.jsxs)(v.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return u(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,a.jsx)(j.Z,{sx:(0,h.Z)({},w),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var S=t(45987),k=t(61113),y=["dense","actions","rowCount","numSelected","onSelectAllRows","sx"];function C(e){var n=e.dense,t=e.actions,r=e.rowCount,i=e.numSelected,o=e.onSelectAllRows,s=e.sx,l=(0,S.Z)(e,y);return(0,a.jsxs)(x.Z,(0,h.Z)((0,h.Z)({direction:"row",alignItems:"center",sx:(0,h.Z)((0,h.Z)({px:2,top:0,left:8,right:8,zIndex:9,height:58,borderRadius:1,position:"absolute",bgcolor:"primary.lighter"},n&&{pl:1,height:38}),s)},l),{},{children:[(0,a.jsx)(Z.Z,{indeterminate:i>0&&i<r,checked:r>0&&i===r,onChange:function(e){return o(e.target.checked)}}),(0,a.jsxs)(k.Z,{variant:"subtitle1",sx:(0,h.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[i," selected"]}),t&&t]}))}},66429:function(e,n,t){t.d(n,{ZP:function(){return o},sQ:function(){return s},fQ:function(){return l}});var r=t(29439),i=t(47313);function o(e){var n=(0,i.useState)((null===e||void 0===e?void 0:e.defaultDense)||!1),t=(0,r.Z)(n,2),o=t[0],a=t[1],s=(0,i.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),l=(0,r.Z)(s,2),c=l[0],d=l[1],u=(0,i.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,r.Z)(u,2),x=h[0],f=h[1],g=(0,i.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),p=(0,r.Z)(g,2),m=p[0],Z=p[1],v=(0,i.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),j=(0,r.Z)(v,2),w=j[0],b=j[1],S=(0,i.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),k=(0,r.Z)(S,2),y=k[0],C=k[1];return{dense:o,order:x,page:m,setPage:Z,orderBy:c,rowsPerPage:w,selected:y,setSelected:C,onSelectRow:function(e){var n=y.indexOf(e),t=[];-1===n?t=t.concat(y,e):0===n?t=t.concat(y.slice(1)):n===y.length-1?t=t.concat(y.slice(0,-1)):n>0&&(t=t.concat(y.slice(0,n),y.slice(n+1))),C(t)},onSelectAllRows:function(e,n){C(e?n:[])},onSort:function(e){""!==e&&(f(c===e&&"asc"===x?"desc":"asc"),d(e))},onChangePage:function(e,n){Z(n)},onChangeDense:function(e){a(e.target.checked)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value,10)),Z(0)}}}function a(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function s(e,n){return"desc"===e?function(e,t){return a(e,t,n)}:function(e,t){return-a(e,t,n)}}function l(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}},80648:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),i=t(47313);function o(e){var n=(0,i.useState)(e||""),t=(0,r.Z)(n,2),o=t[0],a=t[1];return{currentTab:o,onChangeTab:function(e,n){a(n)},setCurrentTab:a}}},24212:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});t(47313);var r=t(97890),i=t(43265),o=t(73428),a=t(48175),s=(t(80648),t(11338)),l=t(66429),c=(t(43465),t(71361)),d=(t(42593),t(62677),t(67871)),u=(t(55844),t(28328),t(85077),t(88669),t(46417));function h(){var e=(0,l.ZP)(),n=(e.dense,e.page,e.order,e.orderBy,e.rowsPerPage,e.setPage,e.selected,e.setSelected,e.onSelectRow,e.onSelectAllRows,e.onSort,e.onChangeDense,e.onChangePage,e.onChangeRowsPerPage,(0,s.Z)().themeStretch);(0,r.s0)();return(0,u.jsx)(c.Z,{title:"Sessions: List",children:(0,u.jsxs)(i.Z,{maxWidth:!n&&"lg",children:[(0,u.jsx)(d.Z,{heading:"Sessions List",links:[{name:"Dashboard",href:a.vB.root},{name:"Sessions",href:a.vB.sessions.root},{name:"List"}]}),(0,u.jsx)(o.Z,{})]})})}},28328:function(e,n,t){t.d(n,{Z:function(){return m},N:function(){return w}});var r=t(1413),i=t(29439),o=t(47313),a=t(19860),s=t(24076),l=t(67478),c=t(44758),d=t(63585),u=t(61113),h=t(51405),x=t(86853),f=t(42593),g=t(55844),p=t(46417);function m(e){var n=e.row,t=e.selected,m=e.onEditRow,Z=e.onSelectRow,v=e.onDeleteRow,j=(0,a.Z)(),w=n.name,b=n.avatarUrl,S=n.email,k=n.mobileNo,y=n.isVerified,C=n.status,R=(0,o.useState)(null),P=(0,i.Z)(R,2),B=P[0],I=P[1],_=function(){I(null)};return(0,p.jsxs)(s.Z,{hover:!0,selected:t,children:[(0,p.jsx)(l.Z,{padding:"checkbox",children:(0,p.jsx)(c.Z,{checked:t,onClick:Z})}),(0,p.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,p.jsx)(d.Z,{alt:w,src:b,sx:{mr:2}}),(0,p.jsx)(u.Z,{variant:"subtitle2",noWrap:!0,children:w})]}),(0,p.jsx)(l.Z,{align:"left",children:S}),(0,p.jsx)(l.Z,{align:"left",sx:{textTransform:"capitalize"},children:k}),(0,p.jsx)(l.Z,{align:"center",children:(0,p.jsx)(f.Z,{icon:y?"eva:checkmark-circle-fill":"eva:clock-outline",sx:(0,r.Z)({width:20,height:20,color:"success.main"},!y&&{color:"warning.main"})})}),(0,p.jsx)(l.Z,{align:"left",children:(0,p.jsx)(x.Z,{variant:"light"===j.palette.mode?"ghost":"filled",color:0===C?"error":"success",sx:{textTransform:"capitalize"},children:1===C?"Active":"Banned"})}),(0,p.jsx)(l.Z,{align:"right",children:(0,p.jsx)(g.V7,{open:B,onOpen:function(e){I(e.currentTarget)},onClose:_,actions:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(h.Z,{onClick:function(){v(),_()},sx:{color:"error.main"},children:[(0,p.jsx)(f.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,p.jsxs)(h.Z,{onClick:function(){m(),_()},children:[(0,p.jsx)(f.Z,{icon:"eva:edit-fill"}),"Edit"]})]})})})]})}var Z=t(35898),v=t(15082),j=t(41727);function w(e){var n=e.filterName,t=(e.filterRole,e.onFilterName);e.onFilterRole,e.optionsRole;return(0,p.jsx)(Z.Z,{spacing:2,direction:{xs:"column",sm:"row"},sx:{py:2.5,px:3},children:(0,p.jsx)(v.Z,{fullWidth:!0,value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search user...",InputProps:{startAdornment:(0,p.jsx)(j.Z,{position:"start",children:(0,p.jsx)(f.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}})})}},3404:function(e,n,t){t.d(n,{Z:function(){return I}});var r=t(93433),i=t(29439),o=t(4942),a=t(87462),s=t(63366),l=t(47313),c=(t(96214),t(83061)),d=t(50317),u=t(88564),h=t(25469),x=t(61113),f=t(17551),g=t(54750),p=t(46417),m=(0,g.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(38743),v=(0,u.ZP)(Z.Z)((function(e){var n=e.theme;return(0,a.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,a.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,f._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(n.palette.grey[600],.12)})})})),j=(0,u.ZP)(m)({width:24,height:16});var w=function(e){var n=e;return(0,p.jsx)("li",{children:(0,p.jsx)(v,(0,a.Z)({focusRipple:!0},e,{ownerState:n,children:(0,p.jsx)(j,{ownerState:n})}))})},b=t(22131);function S(e){return(0,b.Z)("MuiBreadcrumbs",e)}var k=(0,t(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),y=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],C=(0,u.ZP)(x.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,o.Z)({},"& .".concat(k.li),n.li),n.root]}})({}),R=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function B(e,n,t,r){return e.reduce((function(i,o,a){return a<e.length-1?i=i.concat(o,(0,p.jsx)(P,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(a))):i.push(o),i}),[])}var I=l.forwardRef((function(e,n){var t=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,u=t.className,x=t.component,f=void 0===x?"nav":x,g=t.expandText,m=void 0===g?"Show path":g,Z=t.itemsAfterCollapse,v=void 0===Z?1:Z,j=t.itemsBeforeCollapse,b=void 0===j?1:j,k=t.maxItems,P=void 0===k?8:k,I=t.separator,_=void 0===I?"/":I,M=(0,s.Z)(t,y),N=l.useState(!1),A=(0,i.Z)(N,2),z=A[0],D=A[1],L=(0,a.Z)({},t,{component:f,expanded:z,expandText:m,itemsAfterCollapse:v,itemsBeforeCollapse:b,maxItems:P,separator:_}),O=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,n)}(L),T=l.useRef(null),W=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,n){return(0,p.jsx)("li",{className:O.li,children:e},"child-".concat(n))}));return(0,p.jsx)(C,(0,a.Z)({ref:n,component:f,color:"text.secondary",className:(0,c.Z)(O.root,u),ownerState:L},M,{children:(0,p.jsx)(R,{className:O.ol,ref:T,ownerState:L,children:B(z||P&&W.length<=P?W:function(e){return b+v>=e.length?e:[].concat((0,r.Z)(e.slice(0,b)),[(0,p.jsx)(w,{"aria-label":m,onClick:function(){D(!0);var e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-v,e.length)))}(W),O.separator,_,L)})}))}))}}]);