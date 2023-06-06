"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[7130],{25416:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(1413),r=t(45987),s=t(88564),a=t(61113),o=t(3484),l=t(46417),c=["title","description","img"],d=(0,s.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function u(e){var n=e.title,t=e.description,s=e.img,u=(0,r.Z)(e,c);return(0,l.jsxs)(d,(0,i.Z)((0,i.Z)({},u),{},{children:[(0,l.jsx)(o.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:s||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(a.Z,{variant:"h5",gutterBottom:!0,children:n}),t&&(0,l.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:t})]}))}},67871:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(1413),r=t(45987),s=t(57829),a=t(61113),o=t(47723),l=t(29466),c=t(3404),d=t(46417),u=["links","activeLast"];function x(e){var n=e.links,t=e.activeLast,o=void 0!==t&&t,l=(0,r.Z)(e,u),x=n[n.length-1].name,p=n.map((function(e){return(0,d.jsx)(h,{link:e},e.name)})),m=n.map((function(e){return(0,d.jsx)("div",{children:e.name!==x?(0,d.jsx)(h,{link:e}):(0,d.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return(0,d.jsx)(c.Z,(0,i.Z)((0,i.Z)({separator:(0,d.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{},{children:o?p:m}))}function h(e){var n=e.link,t=n.href,i=n.name,r=n.icon;return(0,d.jsxs)(o.Z,{variant:"body2",component:l.rU,to:t||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&(0,d.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),i]},i)}var p=["links","action","heading","moreLink","sx"];function m(e){var n=e.links,t=e.action,l=e.heading,c=e.moreLink,u=void 0===c?[]:c,h=e.sx,m=(0,r.Z)(e,p);return(0,d.jsxs)(s.Z,{sx:(0,i.Z)({mb:5},h),children:[(0,d.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,d.jsx)(x,(0,i.Z)({links:n},m))]}),t&&(0,d.jsx)(s.Z,{sx:{flexShrink:0},children:t})]}),(0,d.jsx)(s.Z,{sx:{mt:2},children:"string"===typeof u?(0,d.jsx)(o.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,d.jsx)(o.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},55844:function(e,n,t){t.d(n,{$W:function(){return j},K:function(){return y},V7:function(){return u},et:function(){return o},Nl:function(){return S},hM:function(){return m}});var i=t(24076),r=t(67478),s=t(25416),a=t(46417);function o(e){var n=e.isNotFound;return(0,a.jsx)(i.Z,{children:n?(0,a.jsx)(r.Z,{colSpan:12,children:(0,a.jsx)(s.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,a.jsx)(r.Z,{colSpan:12,sx:{p:0}})})}var l=t(47131),c=t(42593),d=t(28100);function u(e){var n=e.actions,t=e.open,i=e.onClose,r=e.onOpen;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{onClick:r,children:(0,a.jsx)(c.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,a.jsx)(d.Z,{open:Boolean(t),anchorEl:t,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:n})]})}var x=t(1413),h=t(35898),p=t(84488);function m(e){var n=Object.assign({},e);return(0,a.jsx)(i.Z,(0,x.Z)((0,x.Z)({},n),{},{children:(0,a.jsx)(r.Z,{colSpan:12,children:(0,a.jsxs)(h.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,a.jsx)(p.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,a.jsx)(p.Z,{variant:"text",width:"100%",height:20}),(0,a.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(p.Z,{variant:"text",width:160,height:20})]})})}))}function j(e){var n=e.emptyRows,t=e.height;return n?(0,a.jsx)(i.Z,{sx:(0,x.Z)({},t&&{height:t*n}),children:(0,a.jsx)(r.Z,{colSpan:9})}):null}var Z=t(23477),v=t(44758),f=t(82558),b=t(57829),g={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function y(e){var n=e.order,t=e.orderBy,s=e.rowCount,o=void 0===s?0:s,l=e.headLabel,c=e.numSelected,d=void 0===c?0:c,u=e.onSort,h=e.onSelectAllRows,p=e.sx;return(0,a.jsx)(Z.Z,{sx:p,children:(0,a.jsxs)(i.Z,{children:[h&&(0,a.jsx)(r.Z,{padding:"checkbox",children:(0,a.jsx)(v.Z,{indeterminate:d>0&&d<o,checked:o>0&&d===o,onChange:function(e){return h(e.target.checked)}})}),l.map((function(e){return(0,a.jsx)(r.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:u?(0,a.jsxs)(f.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return u(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,a.jsx)(b.Z,{sx:(0,x.Z)({},g),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var w=t(45987),k=t(61113),C=["dense","actions","rowCount","numSelected","onSelectAllRows","sx"];function S(e){var n=e.dense,t=e.actions,i=e.rowCount,r=e.numSelected,s=e.onSelectAllRows,o=e.sx,l=(0,w.Z)(e,C);return(0,a.jsxs)(h.Z,(0,x.Z)((0,x.Z)({direction:"row",alignItems:"center",sx:(0,x.Z)((0,x.Z)({px:2,top:0,left:8,right:8,zIndex:9,height:58,borderRadius:1,position:"absolute",bgcolor:"primary.lighter"},n&&{pl:1,height:38}),o)},l),{},{children:[(0,a.jsx)(v.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return s(e.target.checked)}}),(0,a.jsxs)(k.Z,{variant:"subtitle1",sx:(0,x.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[r," selected"]}),t&&t]}))}},37130:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ge}});var i=t(47313),r=t(88564),s=t(63494),a=t(57829),o=t(43265),l=t(9019),c=t(54982),d=t(78490),u=t(80315),x=t(5239),h=t(42785),p=t(48175),m=t(58434),j=t(11338),Z=t(71361),v=t(42593),f=t(67871),b=t(29439),g=t(69099),y=t(73428),w=t(61113),k=t(43465),C=t(86853),S=t(54641),I=t(93405),D=t(35898),P=t(19536),_=t(15082),A=t(41727),B=t(76221),F=t(46417);function z(e){var n=e.total,t=e.onEdit,i=e.discount,r=e.subtotal,s=e.shipping,o=e.onApplyDiscount,l=e.enableEdit,c=void 0!==l&&l,d=e.enableDiscount,u=void 0!==d&&d,x=null!==s?"Free":"-";return(0,F.jsxs)(y.Z,{sx:{mb:3},children:[(0,F.jsx)(S.Z,{title:"Order Summary",action:c&&(0,F.jsx)(g.Z,{size:"small",onClick:t,startIcon:(0,F.jsx)(v.Z,{icon:"eva:edit-fill"}),children:"Edit"})}),(0,F.jsx)(I.Z,{children:(0,F.jsxs)(D.Z,{spacing:2,children:[(0,F.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",children:[(0,F.jsx)(w.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),(0,F.jsx)(w.Z,{variant:"subtitle2",children:(0,B.e_)(r)})]}),(0,F.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",children:[(0,F.jsx)(w.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),(0,F.jsx)(w.Z,{variant:"subtitle2",children:i?(0,B.e_)(-i):"-"})]}),(0,F.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",children:[(0,F.jsx)(w.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),(0,F.jsx)(w.Z,{variant:"subtitle2",children:s?(0,B.e_)(s):x})]}),(0,F.jsx)(P.Z,{}),(0,F.jsxs)(D.Z,{direction:"row",justifyContent:"space-between",children:[(0,F.jsx)(w.Z,{variant:"subtitle1",children:"Total"}),(0,F.jsxs)(a.Z,{sx:{textAlign:"right"},children:[(0,F.jsx)(w.Z,{variant:"subtitle1",sx:{color:"error.main"},children:(0,B.e_)(n)}),(0,F.jsx)(w.Z,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),u&&o&&(0,F.jsx)(_.Z,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:(0,F.jsx)(A.Z,{position:"end",children:(0,F.jsx)(g.Z,{onClick:function(){return o(5)},sx:{mr:-.5},children:"Apply"})})}})]})})]})}var W=t(15861),R=t(87757),q=t.n(R),N=t(28089),O=t(75627),T=t(1432),M=t(94469),G=t(33604),E=t(96467),L=t(4117),V=t(32703),Q=t(40844);function H(e){var n=e.open,t=e.onClose,i=e.onNextStep,r=e.onCreateBilling,s=N.Ry().shape({receiver:N.Z_().required("Fullname is required"),phone:N.Z_().required("Phone is required"),address:N.Z_().required("Address is required"),city:N.Z_().required("City is required"),state:N.Z_().required("State is required")}),o={addressType:"Home",receiver:"",phone:"",address:"",city:"",state:"",country:k.hW[0].label,zipcode:"",isDefault:!0},l=(0,O.cI)({resolver:(0,T.X)(s),defaultValues:o}),c=l.handleSubmit,d=l.formState.isSubmitting,u=function(){var e=(0,W.Z)(q().mark((function e(n){return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i(),r({receiver:n.receiver,phone:n.phone,fullAddress:"".concat(n.address,", ").concat(n.city,", ").concat(n.state,", ").concat(n.country,", ").concat(n.zipcode),addressType:n.addressType,isDefault:n.isDefault})}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,F.jsxs)(M.Z,{fullWidth:!0,maxWidth:"sm",open:n,onClose:t,children:[(0,F.jsx)(G.Z,{children:"Add new address"}),(0,F.jsxs)(Q.RV,{methods:l,onSubmit:c(u),children:[(0,F.jsx)(E.Z,{children:(0,F.jsxs)(D.Z,{spacing:3,children:[(0,F.jsx)(Q.km,{name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),(0,F.jsxs)(a.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,F.jsx)(Q.au,{name:"receiver",label:"Full Name"}),(0,F.jsx)(Q.au,{name:"phone",label:"Phone Number"})]}),(0,F.jsx)(Q.au,{name:"address",label:"Address"}),(0,F.jsxs)(a.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"}},children:[(0,F.jsx)(Q.au,{name:"city",label:"Town / City"}),(0,F.jsx)(Q.au,{name:"state",label:"State"}),(0,F.jsx)(Q.au,{name:"zipcode",label:"Zip / Postal Code"})]}),(0,F.jsx)(Q.Cc,{name:"country",label:"Country",children:k.hW.map((function(e){return(0,F.jsx)("option",{value:e.label,children:e.label},e.code)}))}),(0,F.jsx)(Q.jb,{name:"isDefault",label:"Use this address as default.",sx:{mt:3}})]})}),(0,F.jsx)(P.Z,{}),(0,F.jsxs)(L.Z,{children:[(0,F.jsx)(V.Z,{type:"submit",variant:"contained",loading:d,children:"Deliver to this Address"}),(0,F.jsx)(g.Z,{color:"inherit",variant:"outlined",onClick:t,children:"Cancel"})]})]})]})}function X(){var e=(0,x.I0)(),n=(0,x.v9)((function(e){return e.product})).checkout,t=n.total,r=n.discount,s=n.subtotal,o=(0,i.useState)(!1),c=(0,b.Z)(o,2),d=c[0],u=c[1],p=function(){e((0,h.NX)())},m=function(n){e((0,h.YN)(n))};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,F.jsxs)(l.ZP,{item:!0,xs:12,md:8,children:[k.PX.map((function(e,n){return(0,F.jsx)(U,{address:e,onNextStep:p,onCreateBilling:m},n)})),(0,F.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,F.jsx)(g.Z,{size:"small",color:"inherit",onClick:function(){e((0,h.Fs)())},startIcon:(0,F.jsx)(v.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),(0,F.jsx)(g.Z,{size:"small",onClick:function(){u(!0)},startIcon:(0,F.jsx)(v.Z,{icon:"eva:plus-fill"}),children:"Add new address"})]})]}),(0,F.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,F.jsx)(z,{subtotal:s,total:t,discount:r})})]}),(0,F.jsx)(H,{open:d,onClose:function(){u(!1)},onNextStep:p,onCreateBilling:m})]})}function U(e){var n=e.address,t=e.onNextStep,i=e.onCreateBilling,r=n.receiver,s=n.fullAddress,o=n.addressType,l=n.phone,c=n.isDefault;return(0,F.jsxs)(y.Z,{sx:{p:3,mb:3,position:"relative"},children:[(0,F.jsxs)(a.Z,{sx:{mb:1,display:"flex",alignItems:"center"},children:[(0,F.jsx)(w.Z,{variant:"subtitle1",children:r}),(0,F.jsxs)(w.Z,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",o,")"]}),c&&(0,F.jsx)(C.Z,{color:"info",sx:{ml:1},children:"Default"})]}),(0,F.jsx)(w.Z,{variant:"body2",gutterBottom:!0,children:s}),(0,F.jsx)(w.Z,{variant:"body2",sx:{color:"text.secondary"},children:l}),(0,F.jsxs)(a.Z,{sx:{mt:3,display:"flex",position:{sm:"absolute"},right:{sm:24},bottom:{sm:24}},children:[!c&&(0,F.jsx)(g.Z,{variant:"outlined",size:"small",color:"inherit",children:"Delete"}),(0,F.jsx)(a.Z,{sx:{mx:.5}}),(0,F.jsx)(g.Z,{variant:"outlined",size:"small",onClick:function(){i(n),t()},children:"Deliver to this Address"})]})]})}function Y(e){var n=e.onBackStep,t=(0,x.v9)((function(e){return e.product})).checkout.billing;return(0,F.jsxs)(y.Z,{sx:{mb:3},children:[(0,F.jsx)(S.Z,{title:"Billing Address",action:(0,F.jsx)(g.Z,{size:"small",startIcon:(0,F.jsx)(v.Z,{icon:"eva:edit-fill"}),onClick:n,children:"Edit"})}),(0,F.jsxs)(I.Z,{children:[(0,F.jsxs)(w.Z,{variant:"subtitle2",gutterBottom:!0,children:[null===t||void 0===t?void 0:t.receiver,"\xa0",(0,F.jsxs)(w.Z,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["(",null===t||void 0===t?void 0:t.addressType,")"]})]}),(0,F.jsx)(w.Z,{variant:"body2",gutterBottom:!0,children:null===t||void 0===t?void 0:t.fullAddress}),(0,F.jsx)(w.Z,{variant:"body2",sx:{color:"text.secondary"},children:null===t||void 0===t?void 0:t.phone})]})]})}var K=t(90972),$=t.n(K),J=t(29466),ee=t(62677),ne=t(25416),te=t(51629),ie=t(66835),re=t(57861),se=t(24076),ae=t(67478),oe=t(47131),le=t(80202),ce=t(3484),de=t(55844),ue=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalPrice",label:"Total Price",align:"right"},{id:""}],xe=(0,r.ZP)("div")((function(e){var n=e.theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:n.spacing(.5),padding:n.spacing(.5,.75),borderRadius:n.shape.borderRadius,border:"solid 1px ".concat(n.palette.grey[50032])}}));function he(e){var n=e.products,t=e.onDelete,i=e.onIncreaseQuantity,r=e.onDecreaseQuantity;return(0,F.jsx)(te.Z,{sx:{minWidth:720},children:(0,F.jsxs)(ie.Z,{children:[(0,F.jsx)(de.K,{headLabel:ue}),(0,F.jsx)(re.Z,{children:n.map((function(e){return(0,F.jsx)(pe,{row:e,onDelete:function(){return t(e.id)},onDecrease:function(){return r(e.id)},onIncrease:function(){return i(e.id)}},e.id)}))})]})})}function pe(e){var n=e.row,t=e.onDelete,i=e.onDecrease,r=e.onIncrease,s=n.name,o=n.size,l=n.price,c=n.color,d=n.cover,u=n.quantity,x=n.available;return(0,F.jsxs)(se.Z,{children:[(0,F.jsxs)(ae.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,F.jsx)(ce.Z,{alt:"product image",src:d,sx:{width:64,height:64,borderRadius:1.5,mr:2}}),(0,F.jsxs)(D.Z,{spacing:.5,children:[(0,F.jsx)(w.Z,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:s}),(0,F.jsxs)(D.Z,{direction:"row",alignItems:"center",children:[(0,F.jsxs)(w.Z,{variant:"body2",children:[(0,F.jsx)(a.Z,{component:"span",sx:{color:"text.secondary"},children:"size:\xa0"}),o]}),(0,F.jsx)(P.Z,{orientation:"vertical",sx:{mx:1,height:16}}),(0,F.jsxs)(w.Z,{variant:"body2",children:[(0,F.jsx)(a.Z,{component:"span",sx:{color:"text.secondary"},children:"color:\xa0"}),(0,le.Z)(c)]})]})]})]}),(0,F.jsx)(ae.Z,{children:(0,B.e_)(l)}),(0,F.jsx)(ae.Z,{children:(0,F.jsx)(me,{quantity:u,available:x,onDecrease:i,onIncrease:r})}),(0,F.jsx)(ae.Z,{align:"right",children:(0,B.e_)(l*u)}),(0,F.jsx)(ae.Z,{align:"right",children:(0,F.jsx)(oe.Z,{onClick:t,children:(0,F.jsx)(v.Z,{icon:"eva:trash-2-outline",width:20,height:20})})})]})}function me(e){var n=e.available,t=e.quantity,i=e.onIncrease,r=e.onDecrease;return(0,F.jsxs)(a.Z,{sx:{width:96,textAlign:"right"},children:[(0,F.jsxs)(xe,{children:[(0,F.jsx)(oe.Z,{size:"small",color:"inherit",onClick:r,disabled:t<=1,children:(0,F.jsx)(v.Z,{icon:"eva:minus-fill",width:16,height:16})}),t,(0,F.jsx)(oe.Z,{size:"small",color:"inherit",onClick:i,disabled:t>=n,children:(0,F.jsx)(v.Z,{icon:"eva:plus-fill",width:16,height:16})})]}),(0,F.jsxs)(w.Z,{variant:"caption",sx:{color:"text.secondary"},children:["available: ",n]})]})}function je(){var e=(0,x.I0)(),n=(0,x.v9)((function(e){return e.product})).checkout,t=n.cart,i=n.total,r=n.discount,s=n.subtotal,a=$()(t.map((function(e){return e.quantity}))),o=0===t.length;return(0,F.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,F.jsxs)(l.ZP,{item:!0,xs:12,md:8,children:[(0,F.jsxs)(y.Z,{sx:{mb:3},children:[(0,F.jsx)(S.Z,{title:(0,F.jsxs)(w.Z,{variant:"h6",children:["Card",(0,F.jsxs)(w.Z,{component:"span",sx:{color:"text.secondary"},children:["\xa0(",a," item)"]})]}),sx:{mb:3}}),o?(0,F.jsx)(ne.Z,{title:"Cart is empty",description:"Look like you have no items in your shopping cart.",img:"/assets/illustrations/illustration_empty_cart.svg"}):(0,F.jsx)(ee.Z,{children:(0,F.jsx)(he,{products:t,onDelete:function(n){e((0,h.al)(n))},onIncreaseQuantity:function(n){e((0,h.Qd)(n))},onDecreaseQuantity:function(n){e((0,h.a3)(n))}})})]}),(0,F.jsx)(g.Z,{color:"inherit",component:J.rU,to:p.vB.eCommerce.root,startIcon:(0,F.jsx)(v.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),(0,F.jsxs)(l.ZP,{item:!0,xs:12,md:4,children:[(0,F.jsx)(z,{enableDiscount:!0,total:i,discount:r,subtotal:s,onApplyDiscount:function(n){e((0,h.b6)(n))}}),(0,F.jsx)(g.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:0===t.length,onClick:function(){e((0,h.NX)())},children:"Check Out"})]})]})}var Ze=t(1413),ve=t(54299),fe=t(83929),be=t(33827),ge=(0,r.ZP)("div")((function(e){var n=e.theme;return{width:"100%",display:"flex",alignItems:"center",padding:n.spacing(0,2.5),justifyContent:"space-between",transition:n.transitions.create("all"),border:"solid 1px ".concat(n.palette.divider),borderRadius:1.5*Number(n.shape.borderRadius)}}));function ye(e){var n=e.deliveryOptions,t=e.onApplyShipping,i=(0,O.Gc)().control;return(0,F.jsxs)(y.Z,{children:[(0,F.jsx)(S.Z,{title:"Delivery options"}),(0,F.jsx)(I.Z,{children:(0,F.jsx)(O.Qr,{name:"delivery",control:i,render:function(e){var i=e.field;return(0,F.jsx)(ve.Z,(0,Ze.Z)((0,Ze.Z)({},i),{},{onChange:function(e){var n=e.target.value;i.onChange(Number(n)),t(Number(n))},children:(0,F.jsx)(D.Z,{spacing:2,alignItems:"center",direction:{xs:"column",md:"row"},children:n.map((function(e){var n=i.value===e.value;return(0,F.jsx)(ge,{sx:(0,Ze.Z)({},n&&{boxShadow:function(e){return e.customShadows.z20}}),children:(0,F.jsx)(fe.Z,{value:e.value,control:(0,F.jsx)(be.Z,{checkedIcon:(0,F.jsx)(v.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:(0,F.jsxs)(a.Z,{sx:{ml:1},children:[(0,F.jsx)(w.Z,{variant:"subtitle2",children:e.title}),(0,F.jsx)(w.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.description})]}),sx:{py:3,flexGrow:1,mr:0}})},e.value)}))})}))}})})]})}var we=t(4942),ke=t(97890),Ce=t(47723),Se=t(57597),Ie=t(64092),De=(0,r.ZP)(Se.Kl)((function(e){var n=e.theme;return{"& .MuiDialog-paper":(0,we.Z)({margin:0},n.breakpoints.up("md"),{maxWidth:"calc(100% - 48px)",maxHeight:"calc(100% - 48px)"})}}));function Pe(e){var n=Object.assign({},e),t=(0,ke.s0)(),i=(0,x.I0)(),r=function(){i((0,h.s9)()),t(p.vB.eCommerce.shop)};return(0,F.jsx)(De,(0,Ze.Z)((0,Ze.Z)({fullScreen:!0},n),{},{children:(0,F.jsxs)(a.Z,{sx:{p:4,maxWidth:480,margin:"auto"},children:[(0,F.jsxs)(a.Z,{sx:{textAlign:"center"},children:[(0,F.jsx)(w.Z,{variant:"h4",paragraph:!0,children:"Thank you for your purchase!"}),(0,F.jsx)(Ie.mn,{sx:{height:260,my:10}}),(0,F.jsxs)(w.Z,{align:"left",paragraph:!0,children:["Thanks for placing order \xa0",(0,F.jsx)(Ce.Z,{href:"#",children:"01dc1370-3df6-11eb-b378-0242ac130002"})]}),(0,F.jsxs)(w.Z,{align:"left",sx:{color:"text.secondary"},children:["We will send you a notification within 5 days when it ships.",(0,F.jsx)("br",{})," ",(0,F.jsx)("br",{})," If you have any question or queries then fell to get in contact us. ",(0,F.jsx)("br",{})," ",(0,F.jsx)("br",{})," All the best,"]})]}),(0,F.jsx)(P.Z,{sx:{my:3}}),(0,F.jsxs)(D.Z,{direction:{xs:"column-reverse",sm:"row"},justifyContent:"space-between",spacing:2,children:[(0,F.jsx)(g.Z,{color:"inherit",onClick:r,startIcon:(0,F.jsx)(v.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),(0,F.jsx)(g.Z,{variant:"contained",startIcon:(0,F.jsx)(v.Z,{icon:"ant-design:file-pdf-filled"}),onClick:r,children:"Download as PDF"})]})]})}))}var _e=t(65033),Ae=t(15480),Be=t(66281),Fe=(0,r.ZP)("div")((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(0,2.5),justifyContent:"space-between",transition:n.transitions.create("all"),border:"solid 1px ".concat(n.palette.divider),borderRadius:1.5*Number(n.shape.borderRadius)}}));function ze(e){var n=e.paymentOptions,t=e.cardOptions,i=(0,O.Gc)().control,r=(0,Be.Z)("up","sm");return(0,F.jsxs)(y.Z,{sx:{my:3},children:[(0,F.jsx)(S.Z,{title:"Payment options"}),(0,F.jsx)(I.Z,{children:(0,F.jsx)(O.Qr,{name:"payment",control:i,render:function(e){var i=e.field,s=e.fieldState.error;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ve.Z,(0,Ze.Z)((0,Ze.Z)({row:!0},i),{},{children:(0,F.jsx)(D.Z,{spacing:2,children:n.map((function(e){var n=e.value,s=e.title,o=e.icons,l=e.description,c="credit_card"===n,d=i.value===n;return(0,F.jsxs)(Fe,{sx:(0,Ze.Z)((0,Ze.Z)({},d&&{boxShadow:function(e){return e.customShadows.z20}}),c&&{flexWrap:"wrap"}),children:[(0,F.jsx)(fe.Z,{value:n,control:(0,F.jsx)(be.Z,{checkedIcon:(0,F.jsx)(v.Z,{icon:"eva:checkmark-circle-2-fill"})}),label:(0,F.jsxs)(a.Z,{sx:{ml:1},children:[(0,F.jsx)(w.Z,{variant:"subtitle2",children:s}),(0,F.jsx)(w.Z,{variant:"body2",sx:{color:"text.secondary"},children:l})]}),sx:{flexGrow:1,py:3}}),r&&(0,F.jsx)(D.Z,{direction:"row",spacing:1,flexShrink:0,children:o.map((function(e){return(0,F.jsx)(ce.Z,{alt:"logo card",src:e},e)}))}),c&&(0,F.jsxs)(_e.Z,{in:"credit_card"===i.value,sx:{width:1},children:[(0,F.jsx)(_.Z,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:t.map((function(e){return(0,F.jsx)("option",{value:e.value,children:e.label},e.value)}))}),(0,F.jsx)(g.Z,{size:"small",startIcon:(0,F.jsx)(v.Z,{icon:"eva:plus-fill",width:20,height:20}),sx:{my:3},children:"Add new card"})]})]},s)}))})})),!!s&&(0,F.jsx)(Ae.Z,{error:!0,sx:{pt:1,px:2},children:s.message})]})}})})]})}var We=[{value:0,title:"Standard delivery (Free)",description:"Delivered on Monday, August 12"},{value:2,title:"Fast delivery ($2,00)",description:"Delivered on Monday, August 5"}],Re=[{value:"paypal",title:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely.",icons:["https://minimal-assets-api-dev.vercel.app/assets/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe.",icons:["https://minimal-assets-api-dev.vercel.app/assets/icons/ic_mastercard.svg","https://minimal-assets-api-dev.vercel.app/assets/icons/ic_visa.svg"]},{value:"cash",title:"Cash on CheckoutDelivery",description:"Pay with cash when your order is delivered.",icons:[]}],qe=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Ne(){var e=(0,x.I0)(),n=(0,x.v9)((function(e){return e.product})).checkout,t=n.total,i=n.discount,r=n.subtotal,s=n.shipping,a=function(){e((0,h.Fs)())},o=N.Ry().shape({payment:N.Z_().required("Payment is required!")}),c={delivery:s,payment:""},d=(0,O.cI)({resolver:(0,T.X)(o),defaultValues:c}),u=d.handleSubmit,p=d.formState.isSubmitting,m=function(){var n=(0,W.Z)(q().mark((function n(){return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{e((0,h.NX)())}catch(t){console.error(t)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,F.jsx)(Q.RV,{methods:d,onSubmit:u(m),children:(0,F.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,F.jsxs)(l.ZP,{item:!0,xs:12,md:8,children:[(0,F.jsx)(ye,{onApplyShipping:function(n){e((0,h.SY)(n))},deliveryOptions:We}),(0,F.jsx)(ze,{cardOptions:qe,paymentOptions:Re}),(0,F.jsx)(g.Z,{size:"small",color:"inherit",onClick:a,startIcon:(0,F.jsx)(v.Z,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),(0,F.jsxs)(l.ZP,{item:!0,xs:12,md:4,children:[(0,F.jsx)(Y,{onBackStep:a}),(0,F.jsx)(z,{enableEdit:!0,total:t,subtotal:r,discount:i,shipping:s,onEdit:function(){return n=0,void e((0,h.$w)(n));var n}}),(0,F.jsx)(V.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:p,children:"Complete Order"})]})]})})}var Oe=["Cart","Billing & address","Payment"],Te=(0,r.ZP)(s.Z)((function(e){var n=e.theme;return{top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)","& .MuiStepConnector-line":{borderTopWidth:2,borderColor:n.palette.divider},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:n.palette.primary.main}}}}));function Me(e){var n=e.active,t=e.completed;return(0,F.jsx)(a.Z,{sx:{zIndex:9,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",color:n?"primary.main":"text.disabled"},children:t?(0,F.jsx)(v.Z,{icon:"eva:checkmark-fill",sx:{zIndex:1,width:20,height:20,color:"primary.main"}}):(0,F.jsx)(a.Z,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function Ge(){var e=(0,j.Z)().themeStretch,n=(0,x.I0)(),t=(0,m.Z)(),r=(0,x.v9)((function(e){return e.product})).checkout,s=r.cart,a=r.billing,v=r.activeStep,b=v===Oe.length;return(0,i.useEffect)((function(){t.current&&n((0,h.dv)(s))}),[n,t,s]),(0,i.useEffect)((function(){1===v&&n((0,h.YN)(null))}),[n,v]),(0,F.jsx)(Z.Z,{title:"Ecommerce: Checkout",children:(0,F.jsxs)(o.Z,{maxWidth:!e&&"lg",children:[(0,F.jsx)(f.Z,{heading:"Checkout",links:[{name:"Dashboard",href:p.vB.root},{name:"E-Commerce",href:p.vB.eCommerce.root},{name:"Checkout"}]}),(0,F.jsx)(l.ZP,{container:!0,justifyContent:b?"center":"flex-start",children:(0,F.jsx)(l.ZP,{item:!0,xs:12,md:8,sx:{mb:5},children:(0,F.jsx)(c.Z,{alternativeLabel:!0,activeStep:v,connector:(0,F.jsx)(Te,{}),children:Oe.map((function(e){return(0,F.jsx)(d.Z,{children:(0,F.jsx)(u.Z,{StepIconComponent:Me,sx:{"& .MuiStepLabel-label":{typography:"subtitle2",color:"text.disabled"}},children:e})},e)}))})})}),b?(0,F.jsx)(Pe,{open:b}):(0,F.jsxs)(F.Fragment,{children:[0===v&&(0,F.jsx)(je,{}),1===v&&(0,F.jsx)(X,{}),2===v&&a&&(0,F.jsx)(Ne,{})]})]})})}},80202:function(e,n,t){function i(e){var n;switch(e){case"#00AB55":n="Green";break;case"#000000":n="Black";break;case"#FFFFFF":n="White";break;case"#FFC0CB":n="Pink";break;case"#FF4842":n="Red";break;case"#1890FF":n="Blue";break;case"#94D82D":n="Greenyellow";break;case"#FFC107":n="Orange";break;default:n=e}return n}t.d(n,{Z:function(){return i}})}}]);