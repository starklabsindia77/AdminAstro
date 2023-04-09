"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[2891],{67871:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),i=t(45987),a=t(57829),o=t(61113),s=t(47723),l=t(29466),c=t(3404),d=t(46417),u=["links","activeLast"];function x(e){var n=e.links,t=e.activeLast,s=void 0!==t&&t,l=(0,i.Z)(e,u),x=n[n.length-1].name,p=n.map((function(e){return(0,d.jsx)(m,{link:e},e.name)})),h=n.map((function(e){return(0,d.jsx)("div",{children:e.name!==x?(0,d.jsx)(m,{link:e}):(0,d.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return(0,d.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{},{children:s?p:h}))}function m(e){var n=e.link,t=n.href,r=n.name,i=n.icon;return(0,d.jsxs)(s.Z,{variant:"body2",component:l.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&(0,d.jsx)(a.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),r]},r)}var p=["links","action","heading","moreLink","sx"];function h(e){var n=e.links,t=e.action,l=e.heading,c=e.moreLink,u=void 0===c?[]:c,m=e.sx,h=(0,i.Z)(e,p);return(0,d.jsxs)(a.Z,{sx:(0,r.Z)({mb:5},m),children:[(0,d.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,d.jsx)(x,(0,r.Z)({links:n},h))]}),t&&(0,d.jsx)(a.Z,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(a.Z,{sx:{mt:2},children:"string"===typeof u?(0,d.jsx)(s.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,d.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},41307:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(29439),i=t(47313);function a(e){var n=(0,i.useState)(e||!1),t=(0,r.Z)(n,2),a=t[0],o=t[1];return{toggle:a,onToggle:function(){return o(!a)},onOpen:function(){return o(!0)},onClose:function(){return o(!1)},setToggle:o}}},99927:function(e,n,t){t.d(n,{Z:function(){return F}});var r=t(15861),i=t(1413),a=t(29439),o=t(87757),s=t.n(o),l=t(28089),c=t(47313),d=t(97890),u=t(75627),x=t(1432),m=t(32703),p=t(73428),h=t(35898),v=t(48175),f=t(43465),Z=t(40844),g=t(57829),j=t(61113),b=t(19536),y=t(51405),C=t(41727),w=t(69099),k=t(76221),S=t(42593),I=t(46417),z=["full stack development","backend development","ui design","ui/ux design","front end development"];function T(){var e=(0,u.Gc)(),n=e.control,t=e.setValue,r=e.watch,i=(0,u.Dq)({control:n,name:"items"}),a=i.fields,o=i.append,s=i.remove,l=r();return(0,I.jsxs)(g.Z,{sx:{p:3},children:[(0,I.jsx)(j.Z,{variant:"h6",sx:{color:"text.disabled",mb:3},children:"Details:"}),(0,I.jsx)(h.Z,{divider:(0,I.jsx)(b.Z,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:a.map((function(e,n){return(0,I.jsxs)(h.Z,{alignItems:"flex-end",spacing:1.5,children:[(0,I.jsxs)(h.Z,{direction:{xs:"column",md:"row"},spacing:2,sx:{width:1},children:[(0,I.jsx)(Z.au,{size:"small",name:"items[".concat(n,"].title"),label:"Title",InputLabelProps:{shrink:!0}}),(0,I.jsx)(Z.au,{size:"small",name:"items[".concat(n,"].description"),label:"Description",InputLabelProps:{shrink:!0}}),(0,I.jsxs)(Z.Cc,{name:"items[".concat(n,"].service"),label:"Service type",size:"small",InputLabelProps:{shrink:!0},SelectProps:{native:!1,sx:{textTransform:"capitalize"}},sx:{maxWidth:{md:160}},children:[(0,I.jsx)(y.Z,{value:"",sx:{mx:1,borderRadius:.75,typography:"body2",fontStyle:"italic",color:"text.secondary"},children:"None"}),(0,I.jsx)(b.Z,{}),z.map((function(e){return(0,I.jsx)(y.Z,{value:e,sx:{mx:1,my:.5,borderRadius:.75,typography:"body2",textTransform:"capitalize"},children:e},e)}))]}),(0,I.jsx)(Z.au,{size:"small",type:"number",name:"items[".concat(n,"].quantity"),label:"Quantity",onChange:function(e){return t("items[".concat(n,"].quantity"),Number(e.target.value))},sx:{maxWidth:{md:96}}}),(0,I.jsx)(Z.au,{size:"small",type:"number",name:"items[".concat(n,"].price"),label:"Price",onChange:function(e){return t("items[".concat(n,"].price"),Number(e.target.value))},InputProps:{startAdornment:(0,I.jsx)(C.Z,{position:"start",children:"$"})},sx:{maxWidth:{md:96}}}),(0,I.jsx)(Z.au,{disabled:!0,size:"small",name:"items[".concat(n,"].total"),label:"Total",value:(0,k.FK)(l.items[n].quantity*l.items[n].price),InputProps:{startAdornment:(0,I.jsx)(C.Z,{position:"start",children:"$"})},sx:{maxWidth:{md:96}}})]}),(0,I.jsx)(w.Z,{size:"small",color:"error",startIcon:(0,I.jsx)(S.Z,{icon:"eva:trash-2-outline"}),onClick:function(){return function(e){s(e)}(n)},children:"Remove"})]},e.id)}))}),(0,I.jsx)(b.Z,{sx:{my:3,borderStyle:"dashed"}}),(0,I.jsxs)(h.Z,{spacing:2,direction:{xs:"column-reverse",md:"row"},alignItems:{xs:"flex-start",md:"center"},children:[(0,I.jsx)(w.Z,{size:"small",startIcon:(0,I.jsx)(S.Z,{icon:"eva:plus-fill"}),onClick:function(){o({title:"",description:"",service:"",quantity:"",price:"",total:""})},sx:{flexShrink:0},children:"Add new detail"}),(0,I.jsxs)(h.Z,{spacing:2,justifyContent:"flex-end",direction:{xs:"column",md:"row"},sx:{width:1},children:[(0,I.jsx)(Z.au,{size:"small",label:"Discount",name:"discount",onChange:function(e){return t("discount",Number(e.target.value))},sx:{maxWidth:{md:200}}}),(0,I.jsx)(Z.au,{size:"small",label:"Taxes",name:"taxes",onChange:function(e){return t("taxes",Number(e.target.value))},sx:{maxWidth:{md:200}}})]})]})]})}var N=t(66281),R=t(41307),D=t(94469),P=t(89840),W=t(62677);function q(e){var n=e.open,t=e.selected,r=e.onClose,i=e.onSelect,a=e.addressOptions;return(0,I.jsxs)(D.Z,{fullWidth:!0,maxWidth:"xs",open:n,onClose:r,children:[(0,I.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2.5,px:3},children:[(0,I.jsx)(j.Z,{variant:"h6",children:" Select address "}),(0,I.jsx)(w.Z,{size:"small",variant:"outlined",startIcon:(0,I.jsx)(S.Z,{icon:"eva:plus-fill"}),sx:{alignSelf:"flex-end"},children:"Add New"})]}),(0,I.jsx)(W.Z,{sx:{p:1.5,pt:0,maxHeight:640},children:a.map((function(e){return(0,I.jsxs)(P.Z,{selected:t(e.id),onClick:function(){return function(e){i(e),r()}(e)},sx:{p:1.5,borderRadius:1,flexDirection:"column",alignItems:"flex-start"},children:[(0,I.jsx)(j.Z,{variant:"subtitle2",children:e.name}),(0,I.jsx)(j.Z,{variant:"caption",sx:{color:"primary.main",my:.5,fontWeight:"fontWeightMedium"},children:e.company}),(0,I.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.address})]},e.id)}))})]})}function _(){var e=(0,u.Gc)(),n=e.watch,t=e.setValue,r=e.formState.errors,i=(0,N.Z)("up","md"),a=n(),o=(0,R.Z)(),s=o.toggle,l=o.onOpen,c=o.onClose,d=(0,R.Z)(),x=d.toggle,m=d.onOpen,p=d.onClose,v=a.invoiceFrom,Z=a.invoiceTo;return(0,I.jsxs)(h.Z,{spacing:{xs:2,md:5},direction:{xs:"column",md:"row"},divider:(0,I.jsx)(b.Z,{flexItem:!0,orientation:i?"vertical":"horizontal",sx:{borderStyle:"dashed"}}),sx:{p:3},children:[(0,I.jsxs)(h.Z,{sx:{width:1},children:[(0,I.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:[(0,I.jsx)(j.Z,{variant:"h6",sx:{color:"text.disabled"},children:"From:"}),(0,I.jsx)(w.Z,{size:"small",startIcon:(0,I.jsx)(S.Z,{icon:"eva:edit-fill"}),onClick:l,children:"Change"}),(0,I.jsx)(q,{open:s,onClose:c,selected:function(e){return(null===v||void 0===v?void 0:v.id)===e},onSelect:function(e){return t("invoiceFrom",e)},addressOptions:f.Fr})]}),(0,I.jsx)(B,{name:v.name,address:v.address,phone:v.phone})]}),(0,I.jsxs)(h.Z,{sx:{width:1},children:[(0,I.jsxs)(h.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:[(0,I.jsx)(j.Z,{variant:"h6",sx:{color:"text.disabled"},children:"To:"}),(0,I.jsx)(w.Z,{size:"small",startIcon:(0,I.jsx)(S.Z,{icon:Z?"eva:edit-fill":"eva:plus-fill"}),onClick:m,children:Z?"Change":"Add"}),(0,I.jsx)(q,{open:x,onClose:p,selected:function(e){return(null===Z||void 0===Z?void 0:Z.id)===e},onSelect:function(e){return t("invoiceTo",e)},addressOptions:f.yN})]}),Z?(0,I.jsx)(B,{name:Z.name,address:Z.address,phone:Z.phone}):(0,I.jsx)(j.Z,{typography:"caption",sx:{color:"error.main"},children:r.invoiceTo?r.invoiceTo.message:null})]})]})}function B(e){var n=e.name,t=e.address,r=e.phone;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(j.Z,{variant:"subtitle2",children:n}),(0,I.jsx)(j.Z,{variant:"body2",sx:{mt:1,mb:.5},children:t}),(0,I.jsxs)(j.Z,{variant:"body2",children:["Phone: ",r]})]})}var M=t(44890),L=t(15082),O=["paid","unpaid","overdue","draft"];function A(){var e=(0,u.Gc)(),n=e.control,t=(0,e.watch)();return(0,I.jsxs)(h.Z,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:[(0,I.jsx)(Z.au,{disabled:!0,name:"invoiceNumber",label:"Invoice number",value:"INV-".concat(t.invoiceNumber)}),(0,I.jsx)(Z.Cc,{fullWidth:!0,name:"status",label:"Status",InputLabelProps:{shrink:!0},SelectProps:{native:!1,sx:{textTransform:"capitalize"}},children:O.map((function(e){return(0,I.jsx)(y.Z,{value:e,sx:{mx:1,my:.5,borderRadius:.75,typography:"body2",textTransform:"capitalize"},children:e},e)}))}),(0,I.jsx)(u.Qr,{name:"createDate",control:n,render:function(e){var n=e.field,t=e.fieldState.error;return(0,I.jsx)(M.M,{label:"Date create",value:n.value,onChange:function(e){n.onChange(e)},renderInput:function(e){return(0,I.jsx)(L.Z,(0,i.Z)((0,i.Z)({},e),{},{fullWidth:!0,error:!!t,helperText:null===t||void 0===t?void 0:t.message}))}})}}),(0,I.jsx)(u.Qr,{name:"dueDate",control:n,render:function(e){var n=e.field,t=e.fieldState.error;return(0,I.jsx)(M.M,{label:"Due date",value:n.value,onChange:function(e){n.onChange(e)},renderInput:function(e){return(0,I.jsx)(L.Z,(0,i.Z)((0,i.Z)({},e),{},{fullWidth:!0,error:!!t,helperText:null===t||void 0===t?void 0:t.message}))}})}})]})}function F(e){var n=e.isEdit,t=e.currentInvoice,o=(0,d.s0)(),g=(0,c.useState)(!1),j=(0,a.Z)(g,2),b=j[0],y=j[1],C=(0,c.useState)(!1),w=(0,a.Z)(C,2),k=w[0],S=w[1],z=l.Ry().shape({createDate:l.Z_().nullable().required("Create date is required"),dueDate:l.Z_().nullable().required("Due date is required"),invoiceTo:l.nK().nullable().required("Invoice to is required")}),N=(0,c.useMemo)((function(){return{invoiceNumber:(null===t||void 0===t?void 0:t.invoiceNumber)||"17099",createDate:(null===t||void 0===t?void 0:t.createDate)||null,dueDate:(null===t||void 0===t?void 0:t.dueDate)||null,taxes:(null===t||void 0===t?void 0:t.taxes)||"",status:(null===t||void 0===t?void 0:t.status)||"draft",discount:(null===t||void 0===t?void 0:t.discount)||"",invoiceFrom:(null===t||void 0===t?void 0:t.invoiceFrom)||f.Fr[0],invoiceTo:(null===t||void 0===t?void 0:t.invoiceTo)||null,items:(null===t||void 0===t?void 0:t.items)||[{title:"",description:"",service:"",quantity:0,price:0,total:0}]}}),[t]),R=(0,u.cI)({resolver:(0,x.X)(z),defaultValues:N}),D=R.reset,P=R.watch,W=R.handleSubmit,q=R.formState.isSubmitting,B=P();(0,c.useEffect)((function(){n&&t&&D(N),n||D(N)}),[n,t]);var M=(0,i.Z)((0,i.Z)({},B),{},{items:B.items.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{total:e.quantity*e.price})}))}),L=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:D(),y(!0),o(v.vB.invoice.list),console.log(JSON.stringify(M,null,2)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:D(),S(!1),o(v.vB.invoice.list),console.log(JSON.stringify(M,null,2)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return(0,I.jsxs)(Z.RV,{methods:R,children:[(0,I.jsxs)(p.Z,{children:[(0,I.jsx)(_,{}),(0,I.jsx)(A,{}),(0,I.jsx)(T,{})]}),(0,I.jsxs)(h.Z,{justifyContent:"flex-end",direction:"row",spacing:2,sx:{mt:3},children:[(0,I.jsx)(m.Z,{color:"inherit",size:"large",variant:"contained",loading:b&&q,onClick:W(L),children:"Save as Draft"}),(0,I.jsxs)(m.Z,{size:"large",variant:"contained",loading:k&&q,onClick:W(O),children:[n?"Update":"Create"," & Send"]})]})]})}},3404:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(93433),i=t(29439),a=t(4942),o=t(87462),s=t(63366),l=t(47313),c=(t(96214),t(83061)),d=t(50317),u=t(88564),x=t(25469),m=t(61113),p=t(17551),h=t(54750),v=t(46417),f=(0,h.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(38743),g=(0,u.ZP)(Z.Z)((function(e){var n=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,p._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(n.palette.grey[600],.12)})})})),j=(0,u.ZP)(f)({width:24,height:16});var b=function(e){var n=e;return(0,v.jsx)("li",{children:(0,v.jsx)(g,(0,o.Z)({focusRipple:!0},e,{ownerState:n,children:(0,v.jsx)(j,{ownerState:n})}))})},y=t(22131);function C(e){return(0,y.Z)("MuiBreadcrumbs",e)}var w=(0,t(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,a.Z)({},"& .".concat(w.li),n.li),n.root]}})({}),I=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),z=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function T(e,n,t,r){return e.reduce((function(i,a,o){return o<e.length-1?i=i.concat(a,(0,v.jsx)(z,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(o))):i.push(a),i}),[])}var N=l.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,u=t.className,m=t.component,p=void 0===m?"nav":m,h=t.expandText,f=void 0===h?"Show path":h,Z=t.itemsAfterCollapse,g=void 0===Z?1:Z,j=t.itemsBeforeCollapse,y=void 0===j?1:j,w=t.maxItems,z=void 0===w?8:w,N=t.separator,R=void 0===N?"/":N,D=(0,s.Z)(t,k),P=l.useState(!1),W=(0,i.Z)(P,2),q=W[0],_=W[1],B=(0,o.Z)({},t,{component:p,expanded:q,expandText:f,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:z,separator:R}),M=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,n)}(B),L=l.useRef(null),O=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,n){return(0,v.jsx)("li",{className:M.li,children:e},"child-".concat(n))}));return(0,v.jsx)(S,(0,o.Z)({ref:n,component:p,color:"text.secondary",className:(0,c.Z)(M.root,u),ownerState:B},D,{children:(0,v.jsx)(I,{className:M.ol,ref:L,ownerState:B,children:T(q||z&&O.length<=z?O:function(e){return y+g>=e.length?e:[].concat((0,r.Z)(e.slice(0,y)),[(0,v.jsx)(b,{"aria-label":f,onClick:function(){_(!0);var e=L.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-g,e.length)))}(O),M.separator,R,B)})}))}))}}]);