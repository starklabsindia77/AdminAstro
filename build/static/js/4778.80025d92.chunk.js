"use strict";(self.webpackChunkastroscore=self.webpackChunkastroscore||[]).push([[4778],{62720:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(1413),r=n(45987),o=n(47630),l=n(20890),a=n(5977),c=n(80184),s=["title","description","img"],d=(0,o.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function u(e){var t=e.title,n=e.description,o=e.img,u=(0,r.Z)(e,s);return(0,c.jsxs)(d,(0,i.Z)((0,i.Z)({},u),{},{children:[(0,c.jsx)(a.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:o||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,c.jsx)(l.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,c.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},18456:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(1413),r=n(45987),o=n(64554),l=n(20890),a=n(23060),c=n(43504),s=n(93517),d=n(80184),u=["links","activeLast"];function h(e){var t=e.links,n=e.activeLast,a=void 0!==n&&n,c=(0,r.Z)(e,u),h=t[t.length-1].name,f=t.map((function(e){return(0,d.jsx)(x,{link:e},e.name)})),v=t.map((function(e){return(0,d.jsx)("div",{children:e.name!==h?(0,d.jsx)(x,{link:e}):(0,d.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:h})},e.name)}));return(0,d.jsx)(s.Z,(0,i.Z)((0,i.Z)({separator:(0,d.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},c),{},{children:a?f:v}))}function x(e){var t=e.link,n=t.href,i=t.name,r=t.icon;return(0,d.jsxs)(a.Z,{variant:"body2",component:c.rU,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&(0,d.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),i]},i)}var f=["links","action","heading","moreLink","sx"];function v(e){var t=e.links,n=e.action,c=e.heading,s=e.moreLink,u=void 0===s?[]:s,x=e.sx,v=(0,r.Z)(e,f);return(0,d.jsxs)(o.Z,{sx:(0,i.Z)({mb:5},x),children:[(0,d.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:c}),(0,d.jsx)(h,(0,i.Z)({links:t},v))]}),n&&(0,d.jsx)(o.Z,{sx:{flexShrink:0},children:n})]}),(0,d.jsx)(o.Z,{sx:{mt:2},children:"string"===typeof u?(0,d.jsx)(a.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,d.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},52502:function(e,t,n){n.d(t,{$W:function(){return p},K:function(){return b},V7:function(){return u},et:function(){return a},Nl:function(){return k},hM:function(){return v}});var i=n(35855),r=n(53994),o=n(62720),l=n(80184);function a(e){var t=e.isNotFound;return(0,l.jsx)(i.Z,{children:t?(0,l.jsx)(r.Z,{colSpan:12,children:(0,l.jsx)(o.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,l.jsx)(r.Z,{colSpan:12,sx:{p:0}})})}var c=n(13400),s=n(53026),d=n(51086);function u(e){var t=e.actions,n=e.open,i=e.onClose,r=e.onOpen;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{onClick:r,children:(0,l.jsx)(s.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,l.jsx)(d.Z,{open:Boolean(n),anchorEl:n,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:t})]})}var h=n(1413),x=n(53767),f=n(47047);function v(e){var t=Object.assign({},e);return(0,l.jsx)(i.Z,(0,h.Z)((0,h.Z)({},t),{},{children:(0,l.jsx)(r.Z,{colSpan:12,children:(0,l.jsxs)(x.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,l.jsx)(f.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,l.jsx)(f.Z,{variant:"text",width:"100%",height:20}),(0,l.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,l.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,l.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,l.jsx)(f.Z,{variant:"text",width:160,height:20})]})})}))}function p(e){var t=e.emptyRows,n=e.height;return t?(0,l.jsx)(i.Z,{sx:(0,h.Z)({},n&&{height:n*t}),children:(0,l.jsx)(r.Z,{colSpan:9})}):null}var Z=n(56890),g=n(94454),m=n(80720),j=n(64554),w={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function b(e){var t=e.order,n=e.orderBy,o=e.rowCount,a=void 0===o?0:o,c=e.headLabel,s=e.numSelected,d=void 0===s?0:s,u=e.onSort,x=e.onSelectAllRows,f=e.sx;return(0,l.jsx)(Z.Z,{sx:f,children:(0,l.jsxs)(i.Z,{children:[x&&(0,l.jsx)(r.Z,{padding:"checkbox",children:(0,l.jsx)(g.Z,{indeterminate:d>0&&d<a,checked:a>0&&d===a,onChange:function(e){return x(e.target.checked)}})}),c.map((function(e){return(0,l.jsx)(r.Z,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:u?(0,l.jsxs)(m.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:function(){return u(e.id)},sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,l.jsx)(j.Z,{sx:(0,h.Z)({},w),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var S=n(45987),y=n(20890),C=["dense","actions","rowCount","numSelected","onSelectAllRows","sx"];function k(e){var t=e.dense,n=e.actions,i=e.rowCount,r=e.numSelected,o=e.onSelectAllRows,a=e.sx,c=(0,S.Z)(e,C);return(0,l.jsxs)(x.Z,(0,h.Z)((0,h.Z)({direction:"row",alignItems:"center",sx:(0,h.Z)((0,h.Z)({px:2,top:0,left:8,right:8,zIndex:9,height:58,borderRadius:1,position:"absolute",bgcolor:"primary.lighter"},t&&{pl:1,height:38}),a)},c),{},{children:[(0,l.jsx)(g.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return o(e.target.checked)}}),(0,l.jsxs)(y.Z,{variant:"subtitle1",sx:(0,h.Z)({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[r," selected"]}),n&&n]}))}},20096:function(e,t,n){n.d(t,{ZP:function(){return o},sQ:function(){return a},fQ:function(){return c}});var i=n(29439),r=n(72791);function o(e){var t=(0,r.useState)((null===e||void 0===e?void 0:e.defaultDense)||!1),n=(0,i.Z)(t,2),o=n[0],l=n[1],a=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),c=(0,i.Z)(a,2),s=c[0],d=c[1],u=(0,r.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,i.Z)(u,2),x=h[0],f=h[1],v=(0,r.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),p=(0,i.Z)(v,2),Z=p[0],g=p[1],m=(0,r.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),j=(0,i.Z)(m,2),w=j[0],b=j[1],S=(0,r.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),y=(0,i.Z)(S,2),C=y[0],k=y[1];return{dense:o,order:x,page:Z,setPage:g,orderBy:s,rowsPerPage:w,selected:C,setSelected:k,onSelectRow:function(e){var t=C.indexOf(e),n=[];-1===t?n=n.concat(C,e):0===t?n=n.concat(C.slice(1)):t===C.length-1?n=n.concat(C.slice(0,-1)):t>0&&(n=n.concat(C.slice(0,t),C.slice(t+1))),k(n)},onSelectAllRows:function(e,t){k(e?t:[])},onSort:function(e){""!==e&&(f(s===e&&"asc"===x?"desc":"asc"),d(e))},onChangePage:function(e,t){g(t)},onChangeDense:function(e){l(e.target.checked)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value,10)),g(0)}}}function l(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function a(e,t){return"desc"===e?function(e,n){return l(e,n,t)}:function(e,n){return-l(e,n,t)}}function c(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}},73024:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(29439),r=n(72791);function o(e){var t=(0,r.useState)(e||""),n=(0,i.Z)(t,2),o=n[0],l=n[1];return{currentTab:o,onChangeTab:function(e,t){l(t)},setCurrentTab:l}}},54778:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var i=n(29439),r=n(31357),o=n.n(r),l=n(72791),a=n(43504),c=n(16871),s=n(13967),d=n(26445),u=n(36151),h=n(57621),x=n(53767),f=n(94721),v=n(2101),p=n(43896),Z=n(39281),g=n(20068),m=n(13400),j=n(79836),w=n(53382),b=n(64554),S=n(67492),y=n(85523),C=n(9955),k=n(38072),D=n(73024),P=n(85703),R=n(20096),M=n(50098),I=n(25212),B=n(41758),T=n(53026),W=n(27578),N=n(18456),O=n(52502),L=n(13239),z=n(20890),E=n(7870),F=n(80184);function A(e){var t=e.title,n=e.total,i=e.icon,r=e.color,o=e.percent,l=e.price;return(0,F.jsxs)(x.Z,{direction:"row",alignItems:"center",justifyContent:"center",sx:{width:1,minWidth:200},children:[(0,F.jsxs)(x.Z,{alignItems:"center",justifyContent:"center",sx:{position:"relative"},children:[(0,F.jsx)(T.Z,{icon:i,sx:{color:r,width:24,height:24,position:"absolute"}}),(0,F.jsx)(L.Z,{variant:"determinate",value:o,size:56,thickness:4,sx:{color:r,opacity:.48}}),(0,F.jsx)(L.Z,{variant:"determinate",value:100,size:56,thickness:4,sx:{color:"grey.50016",position:"absolute",top:0,left:0,opacity:.48}})]}),(0,F.jsxs)(x.Z,{spacing:.5,sx:{ml:2},children:[(0,F.jsx)(z.Z,{variant:"h6",children:t}),(0,F.jsxs)(z.Z,{variant:"subtitle2",children:[(0,E.v1)(n)," ",(0,F.jsx)(b.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"invoice"})]}),(0,F.jsx)(z.Z,{variant:"subtitle2",sx:{color:r},children:(0,E.e_)(l)})]})]})}var V=n(35855),_=n(53994),H=n(94454),Q=n(23060),U=n(23786),G=n(22654),K=n(39954),$=n(67307);function Y(e){var t=e.row,n=e.selected,r=e.onSelectRow,o=e.onViewRow,a=e.onEditRow,c=e.onDeleteRow,d=(0,s.Z)(),u=t.sent,h=t.invoiceNumber,f=t.createDate,v=t.dueDate,p=t.status,Z=t.invoiceTo,g=t.totalPrice,m=(0,l.useState)(null),j=(0,i.Z)(m,2),w=j[0],b=j[1],S=function(){b(null)};return(0,F.jsxs)(V.Z,{hover:!0,selected:n,children:[(0,F.jsx)(_.Z,{padding:"checkbox",children:(0,F.jsx)(H.Z,{checked:n,onClick:r})}),(0,F.jsxs)(_.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,F.jsx)($.Z,{alt:Z.name,color:(0,K.Z)(Z.name).color,sx:{mr:2},children:(0,K.Z)(Z.name).name}),(0,F.jsxs)(x.Z,{children:[(0,F.jsx)(z.Z,{variant:"subtitle2",noWrap:!0,children:Z.name}),(0,F.jsx)(Q.Z,{noWrap:!0,variant:"body2",onClick:o,sx:{color:"text.disabled",cursor:"pointer"},children:"INV-".concat(h)})]})]}),(0,F.jsx)(_.Z,{align:"left",children:(0,G.Mu)(f)}),(0,F.jsx)(_.Z,{align:"left",children:(0,G.Mu)(v)}),(0,F.jsx)(_.Z,{align:"center",children:(0,E.e_)(g)}),(0,F.jsx)(_.Z,{align:"center",sx:{textTransform:"capitalize"},children:u}),(0,F.jsx)(_.Z,{align:"left",children:(0,F.jsx)(B.Z,{variant:"light"===d.palette.mode?"ghost":"filled",color:("paid"===p?"success":"unpaid"===p&&"warning")||"overdue"===p&&"error"||"default",sx:{textTransform:"capitalize"},children:p})}),(0,F.jsx)(_.Z,{align:"right",children:(0,F.jsx)(O.V7,{open:w,onOpen:function(e){b(e.currentTarget)},onClose:S,actions:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(U.Z,{onClick:function(){c(),S()},sx:{color:"error.main"},children:[(0,F.jsx)(T.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,F.jsxs)(U.Z,{onClick:function(){o(),S()},children:[(0,F.jsx)(T.Z,{icon:"eva:eye-fill"}),"View"]}),(0,F.jsxs)(U.Z,{onClick:function(){a(),S()},children:[(0,F.jsx)(T.Z,{icon:"eva:edit-fill"}),"Edit"]})]})})})]})}var q=n(1413),J=n(27760),X=n(63466),ee=n(24109);function te(e){var t=e.optionsService,n=e.filterStartDate,i=e.filterEndDate,r=e.filterName,o=e.filterService,l=e.onFilterName,a=e.onFilterService,c=e.onFilterStartDate,s=e.onFilterEndDate;return(0,F.jsxs)(x.Z,{spacing:2,direction:{xs:"column",md:"row"},sx:{py:2.5,px:3},children:[(0,F.jsx)(J.Z,{fullWidth:!0,select:!0,label:"Service type",value:o,onChange:a,SelectProps:{MenuProps:{sx:{"& .MuiPaper-root":{maxHeight:260}}}},sx:{maxWidth:{md:160},textTransform:"capitalize"},children:t.map((function(e){return(0,F.jsx)(U.Z,{value:e,sx:{mx:1,my:.5,borderRadius:.75,typography:"body2",textTransform:"capitalize"},children:e},e)}))}),(0,F.jsx)(ee.M,{label:"Start date",value:n,onChange:c,renderInput:function(e){return(0,F.jsx)(J.Z,(0,q.Z)((0,q.Z)({},e),{},{fullWidth:!0,sx:{maxWidth:{md:160}}}))}}),(0,F.jsx)(ee.M,{label:"End date",value:i,onChange:s,renderInput:function(e){return(0,F.jsx)(J.Z,(0,q.Z)((0,q.Z)({},e),{},{fullWidth:!0,sx:{maxWidth:{md:160}}}))}}),(0,F.jsx)(J.Z,{fullWidth:!0,value:r,onChange:function(e){return l(e.target.value)},placeholder:"Search client or invoice number...",InputProps:{startAdornment:(0,F.jsx)(X.Z,{position:"start",children:(0,F.jsx)(T.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}})]})}var ne=["all","full stack development","backend development","ui design","ui/ux design","front end development"],ie=[{id:"invoiceNumber",label:"Client",align:"left"},{id:"createDate",label:"Create",align:"left"},{id:"dueDate",label:"Due",align:"left"},{id:"price",label:"Amount",align:"center",width:140},{id:"sent",label:"Sent",align:"center",width:140},{id:"status",label:"Status",align:"left"},{id:""}];function re(){var e=(0,s.Z)(),t=(0,P.Z)().themeStretch,n=(0,c.s0)(),r=(0,R.ZP)({defaultOrderBy:"createDate"}),L=r.dense,z=r.page,E=r.order,V=r.orderBy,_=r.rowsPerPage,H=r.setPage,Q=r.selected,U=r.setSelected,G=r.onSelectRow,K=r.onSelectAllRows,$=r.onSort,q=r.onChangeDense,J=r.onChangePage,X=r.onChangeRowsPerPage,ee=(0,l.useState)(M.Ot),re=(0,i.Z)(ee,2),oe=re[0],le=re[1],ae=(0,l.useState)(""),ce=(0,i.Z)(ae,2),se=ce[0],de=ce[1],ue=(0,l.useState)("all"),he=(0,i.Z)(ue,2),xe=he[0],fe=he[1],ve=(0,l.useState)(null),pe=(0,i.Z)(ve,2),Ze=pe[0],ge=pe[1],me=(0,l.useState)(null),je=(0,i.Z)(me,2),we=je[0],be=je[1],Se=(0,D.Z)("all"),ye=Se.currentTab,Ce=Se.onChangeTab,ke=function(e){var t=e.tableData,n=e.comparator,i=e.filterName,r=e.filterStatus,o=e.filterService,l=e.filterStartDate,a=e.filterEndDate,c=t.map((function(e,t){return[e,t]}));c.sort((function(e,t){var i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t=c.map((function(e){return e[0]})),i&&(t=t.filter((function(e){return-1!==e.invoiceNumber.toLowerCase().indexOf(i.toLowerCase())||-1!==e.invoiceTo.name.toLowerCase().indexOf(i.toLowerCase())})));"all"!==r&&(t=t.filter((function(e){return e.status===r})));"all"!==o&&(t=t.filter((function(e){return e.items.some((function(e){return e.service===o}))})));l&&a&&(t=t.filter((function(e){return e.createDate.getTime()>=l.getTime()&&e.createDate.getTime()<=a.getTime()})));return t}({tableData:oe,comparator:(0,R.sQ)(E,V),filterName:se,filterService:xe,filterStatus:ye,filterStartDate:Ze,filterEndDate:we}),De=!ke.length&&!!se||!ke.length&&!!ye||!ke.length&&!!xe||!ke.length&&!!we||!ke.length&&!!Ze,Pe=L?56:76,Re=function(e){return oe.filter((function(t){return t.status===e})).length},Me=function(e){return o()(oe.filter((function(t){return t.status===e})),"totalPrice")},Ie=function(e){return Re(e)/oe.length*100},Be=[{value:"all",label:"All",color:"info",count:oe.length},{value:"paid",label:"Paid",color:"success",count:Re("paid")},{value:"unpaid",label:"Unpaid",color:"warning",count:Re("unpaid")},{value:"overdue",label:"Overdue",color:"error",count:Re("overdue")},{value:"draft",label:"Draft",color:"default",count:Re("draft")}];return(0,F.jsx)(I.Z,{title:"Invoice: List",children:(0,F.jsxs)(d.Z,{maxWidth:!t&&"lg",children:[(0,F.jsx)(N.Z,{heading:"Invoice List",links:[{name:"Dashboard",href:k.vB.root},{name:"Invoices",href:k.vB.invoice.root},{name:"List"}],action:(0,F.jsx)(u.Z,{variant:"contained",component:a.rU,to:k.vB.invoice.new,startIcon:(0,F.jsx)(T.Z,{icon:"eva:plus-fill"}),children:"New Invoice"})}),(0,F.jsx)(h.Z,{sx:{mb:5},children:(0,F.jsx)(W.Z,{children:(0,F.jsxs)(x.Z,{direction:"row",divider:(0,F.jsx)(f.Z,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),sx:{py:2},children:[(0,F.jsx)(A,{title:"Total",total:oe.length,percent:100,price:o()(oe,"totalPrice"),icon:"ic:round-receipt",color:e.palette.info.main}),(0,F.jsx)(A,{title:"Paid",total:Re("paid"),percent:Ie("paid"),price:Me("paid"),icon:"eva:checkmark-circle-2-fill",color:e.palette.success.main}),(0,F.jsx)(A,{title:"Unpaid",total:Re("unpaid"),percent:Ie("unpaid"),price:Me("unpaid"),icon:"eva:clock-fill",color:e.palette.warning.main}),(0,F.jsx)(A,{title:"Overdue",total:Re("overdue"),percent:Ie("overdue"),price:Me("overdue"),icon:"eva:bell-fill",color:e.palette.error.main}),(0,F.jsx)(A,{title:"Draft",total:Re("draft"),percent:Ie("draft"),price:Me("draft"),icon:"eva:file-fill",color:e.palette.text.secondary})]})})}),(0,F.jsxs)(h.Z,{children:[(0,F.jsx)(v.Z,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:ye,onChange:Ce,sx:{px:2,bgcolor:"background.neutral"},children:Be.map((function(e){return(0,F.jsx)(p.Z,{disableRipple:!0,value:e.value,icon:(0,F.jsxs)(B.Z,{color:e.color,children:[" ",e.count," "]}),label:e.label},e.value)}))}),(0,F.jsx)(f.Z,{}),(0,F.jsx)(te,{filterName:se,filterService:xe,filterStartDate:Ze,filterEndDate:we,onFilterName:function(e){de(e),H(0)},onFilterService:function(e){fe(e.target.value)},onFilterStartDate:function(e){ge(e)},onFilterEndDate:function(e){be(e)},optionsService:ne}),(0,F.jsx)(W.Z,{children:(0,F.jsxs)(Z.Z,{sx:{minWidth:800,position:"relative"},children:[Q.length>0&&(0,F.jsx)(O.Nl,{dense:L,numSelected:Q.length,rowCount:oe.length,onSelectAllRows:function(e){return K(e,oe.map((function(e){return e.id})))},actions:(0,F.jsxs)(x.Z,{spacing:1,direction:"row",children:[(0,F.jsx)(g.Z,{title:"Sent",children:(0,F.jsx)(m.Z,{color:"primary",children:(0,F.jsx)(T.Z,{icon:"ic:round-send"})})}),(0,F.jsx)(g.Z,{title:"Download",children:(0,F.jsx)(m.Z,{color:"primary",children:(0,F.jsx)(T.Z,{icon:"eva:download-outline"})})}),(0,F.jsx)(g.Z,{title:"Print",children:(0,F.jsx)(m.Z,{color:"primary",children:(0,F.jsx)(T.Z,{icon:"eva:printer-fill"})})}),(0,F.jsx)(g.Z,{title:"Delete",children:(0,F.jsx)(m.Z,{color:"primary",onClick:function(){return function(e){var t=oe.filter((function(t){return!e.includes(t.id)}));U([]),le(t)}(Q)},children:(0,F.jsx)(T.Z,{icon:"eva:trash-2-outline"})})})]})}),(0,F.jsxs)(j.Z,{size:L?"small":"medium",children:[(0,F.jsx)(O.K,{order:E,orderBy:V,headLabel:ie,rowCount:oe.length,numSelected:Q.length,onSort:$,onSelectAllRows:function(e){return K(e,oe.map((function(e){return e.id})))}}),(0,F.jsxs)(w.Z,{children:[ke.slice(z*_,z*_+_).map((function(e){return(0,F.jsx)(Y,{row:e,selected:Q.includes(e.id),onSelectRow:function(){return G(e.id)},onViewRow:function(){return t=e.id,void n(k.vB.invoice.view(t));var t},onEditRow:function(){return t=e.id,void n(k.vB.invoice.edit(t));var t},onDeleteRow:function(){return function(e){var t=oe.filter((function(t){return t.id!==e}));U([]),le(t)}(e.id)}},e.id)})),(0,F.jsx)(O.$W,{height:Pe,emptyRows:(0,R.fQ)(z,_,oe.length)}),(0,F.jsx)(O.et,{isNotFound:De})]})]})]})}),(0,F.jsxs)(b.Z,{sx:{position:"relative"},children:[(0,F.jsx)(S.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:ke.length,rowsPerPage:_,page:z,onPageChange:J,onRowsPerPageChange:X}),(0,F.jsx)(y.Z,{control:(0,F.jsx)(C.Z,{checked:L,onChange:q}),label:"Dense",sx:{px:3,py:1.5,top:0,position:{md:"absolute"}}})]})]})]})})}},22654:function(e,t,n){n.d(t,{Mu:function(){return o},zM:function(){return l},Pp:function(){return a},DY:function(){return c}});var i=n(16386),r=n(24054);function o(e){return(0,i.Z)(new Date(e),"dd MMMM yyyy")}function l(e){return(0,i.Z)(new Date(e),"dd MMM yyyy HH:mm")}function a(e){return(0,i.Z)(new Date(e),"dd/MM/yyyy hh:mm p")}function c(e){return(0,r.Z)(new Date(e),{addSuffix:!0})}}}]);
//# sourceMappingURL=4778.80025d92.chunk.js.map