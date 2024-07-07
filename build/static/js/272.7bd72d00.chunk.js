"use strict";(self.webpackChunkastroscore=self.webpackChunkastroscore||[]).push([[272],{18456:function(e,n,r){r.d(n,{Z:function(){return v}});var i=r(1413),t=r(45987),s=r(64554),a=r(20890),l=r(23060),o=r(43504),d=r(93517),c=r(80184),u=["links","activeLast"];function h(e){var n=e.links,r=e.activeLast,l=void 0!==r&&r,o=(0,t.Z)(e,u),h=n[n.length-1].name,p=n.map((function(e){return(0,c.jsx)(x,{link:e},e.name)})),v=n.map((function(e){return(0,c.jsx)("div",{children:e.name!==h?(0,c.jsx)(x,{link:e}):(0,c.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:h})},e.name)}));return(0,c.jsx)(d.Z,(0,i.Z)((0,i.Z)({separator:(0,c.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},o),{},{children:l?p:v}))}function x(e){var n=e.link,r=n.href,i=n.name,t=n.icon;return(0,c.jsxs)(l.Z,{variant:"body2",component:o.rU,to:r||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[t&&(0,c.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:t}),i]},i)}var p=["links","action","heading","moreLink","sx"];function v(e){var n=e.links,r=e.action,o=e.heading,d=e.moreLink,u=void 0===d?[]:d,x=e.sx,v=(0,t.Z)(e,p);return(0,c.jsxs)(s.Z,{sx:(0,i.Z)({mb:5},x),children:[(0,c.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsxs)(s.Z,{sx:{flexGrow:1},children:[(0,c.jsx)(a.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,c.jsx)(h,(0,i.Z)({links:n},v))]}),r&&(0,c.jsx)(s.Z,{sx:{flexShrink:0},children:r})]}),(0,c.jsx)(s.Z,{sx:{mt:2},children:"string"===typeof u?(0,c.jsx)(l.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,c.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},54843:function(e,n,r){r.d(n,{Z:function(){return s}});var i=r(29439),t=r(72791);function s(e){var n=(0,t.useState)(e||!1),r=(0,i.Z)(n,2),s=r[0],a=r[1];return{toggle:s,onToggle:function(){return a(!s)},onOpen:function(){return a(!0)},onClose:function(){return a(!1)},setToggle:a}}},50272:function(e,n,r){r.r(n),r.d(n,{default:function(){return H}});var i=r(15861),t=r(29439),s=r(64687),a=r.n(s),l=r(16871),o=r(72791),d=r(26445),c=r(38072),u=r(85703),h=(r(23434),r(25212)),x=r(18456),p=r(1413),v=r(62797),Z=r(61134),f=r(61265),g=r(39709),j=r(13967),m=r(57621),b=r(53767),y=r(77353),w=r(53861),k=r(7870),S=(r(41758),r(5977),r(27578)),I=r(24109),_=r(23786),D=r(27760),C=r(80184),O=["New Order","In Transit","Delivered","Cancelled"];function T(){var e=(0,Z.Gc)(),n=e.control,r=(0,e.watch)();return(0,C.jsxs)(b.Z,{spacing:2,direction:{xs:"column",sm:"row"},sx:{p:3,bgcolor:"background.neutral"},children:[(0,C.jsx)(y.au,{disabled:!0,name:"orderNumber",label:"Order number",value:"INV-".concat(r.orderId)}),(0,C.jsx)(y.Cc,{fullWidth:!0,name:"status",label:"Status",InputLabelProps:{shrink:!0},SelectProps:{native:!1,sx:{textTransform:"capitalize"}},children:O.map((function(e){return(0,C.jsx)(_.Z,{value:e,sx:{mx:1,my:.5,borderRadius:.75,typography:"body2",textTransform:"capitalize"},children:e},e)}))}),(0,C.jsx)(Z.Qr,{name:"createDate",control:n,render:function(e){var n=e.field,r=e.fieldState.error;return(0,C.jsx)(I.M,{label:"Date create",value:n.value,onChange:function(e){n.onChange(e)},renderInput:function(e){return(0,C.jsx)(D.Z,(0,p.Z)((0,p.Z)({},e),{},{disabled:!0,fullWidth:!0,error:!!r,helperText:null===r||void 0===r?void 0:r.message}))}})}}),(0,C.jsx)(Z.Qr,{name:"dueDate",control:n,render:function(e){var n=e.field,r=e.fieldState.error;return(0,C.jsx)(I.M,{label:"Due date",value:n.value,onChange:function(e){n.onChange(e)},renderInput:function(e){return(0,C.jsx)(D.Z,(0,p.Z)((0,p.Z)({},e),{},{fullWidth:!0,error:!!r,helperText:null===r||void 0===r?void 0:r.message}))}})}})]})}var q=r(94721),W=r(61889),N=r(20890);r(54843),r(53026);function B(){var e,n,r,i,t,s,a,l=(0,Z.Gc)(),o=l.watch,d=(l.setValue,l.formState.errors,(0,w.Z)("up","md")),c=o();return(0,C.jsx)(b.Z,{spacing:{xs:2,md:5},direction:{xs:"column",md:"row"},divider:(0,C.jsx)(q.Z,{flexItem:!0,orientation:d?"vertical":"horizontal",sx:{borderStyle:"dashed"}}),sx:{p:3},children:(0,C.jsx)(W.ZP,{container:!0,children:(0,C.jsxs)(W.ZP,{item:!0,xs:12,sm:6,sx:{mb:5},children:[(0,C.jsx)(N.Z,{paragraph:!0,variant:"overline",sx:{color:"text.disabled"},children:"Order from"}),(0,C.jsx)(N.Z,{variant:"body2",children:null===(e=c.shippingInfo)||void 0===e?void 0:e.name}),(0,C.jsxs)(N.Z,{variant:"body2",children:[null===(n=c.shippingInfo)||void 0===n?void 0:n.address,", ",null===(r=c.shippingInfo)||void 0===r?void 0:r.town]}),(0,C.jsxs)(N.Z,{variant:"body2",children:[null===(i=c.shippingInfo)||void 0===i?void 0:i.city,", ",null===(t=c.shippingInfo)||void 0===t?void 0:t.state," - ",null===(s=c.shippingInfo)||void 0===s?void 0:s.pincode]}),(0,C.jsxs)(N.Z,{variant:"body2",children:["Phone: ",null===(a=c.shippingInfo)||void 0===a?void 0:a.mobile_number]})]})})})}var E=r(47630),P=r(35855),V=r(64554),z=r(39281),L=r(79836),F=r(56890),G=r(53994),R=r(53382),U=(0,E.ZP)(P.Z)((function(e){var n=e.theme;return{"& td":{paddingTop:n.spacing(1),paddingBottom:n.spacing(1)}}}));function M(){var e,n=(0,Z.Gc)(),r=n.watch,i=(n.setValue,n.formState.errors,(0,w.Z)("up","md"),r());return(0,C.jsxs)(V.Z,{sx:{p:3},children:[(0,C.jsx)(N.Z,{variant:"h6",sx:{color:"text.disabled",mb:3},children:"Details:"}),(0,C.jsx)(S.Z,{children:(0,C.jsx)(z.Z,{sx:{minWidth:860},children:(0,C.jsxs)(L.Z,{children:[(0,C.jsx)(F.Z,{sx:{borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)},"& th":{backgroundColor:"transparent"}},children:(0,C.jsxs)(P.Z,{children:[(0,C.jsx)(G.Z,{width:40,children:"#"}),(0,C.jsx)(G.Z,{align:"left",children:"Description"}),(0,C.jsx)(G.Z,{align:"left",children:"Qty"}),(0,C.jsx)(G.Z,{align:"right",children:"Unit price"}),(0,C.jsx)(G.Z,{align:"right",children:"Total"})]})}),(0,C.jsxs)(R.Z,{children:[null===(e=i.items)||void 0===e?void 0:e.map((function(e,n){return(0,C.jsxs)(P.Z,{sx:{borderBottom:function(e){return"solid 1px ".concat(e.palette.divider)}},children:[(0,C.jsx)(G.Z,{children:n+1}),(0,C.jsx)(G.Z,{align:"left",children:(0,C.jsx)(V.Z,{sx:{maxWidth:560},children:(0,C.jsx)(N.Z,{variant:"subtitle2",children:e.title})})}),(0,C.jsx)(G.Z,{align:"left",children:e.quantity}),(0,C.jsx)(G.Z,{align:"right",children:"\u20b9 ".concat((0,k.e_)(e.price))}),(0,C.jsx)(G.Z,{align:"right",children:"\u20b9 ".concat((0,k.e_)(e.price*e.quantity))})]},n)})),(0,C.jsxs)(U,{children:[(0,C.jsx)(G.Z,{colSpan:3}),(0,C.jsxs)(G.Z,{align:"right",children:[(0,C.jsx)(V.Z,{sx:{mt:2}}),(0,C.jsx)(N.Z,{children:"Subtotal"})]}),(0,C.jsxs)(G.Z,{align:"right",width:120,children:[(0,C.jsx)(V.Z,{sx:{mt:2}}),(0,C.jsx)(N.Z,{children:"\u20b9 ".concat((0,k.e_)(i.subTotal))})]})]}),(0,C.jsxs)(U,{children:[(0,C.jsx)(G.Z,{colSpan:3}),(0,C.jsx)(G.Z,{align:"right",children:(0,C.jsx)(N.Z,{children:"Shipping Fees"})}),(0,C.jsx)(G.Z,{align:"right",width:120,children:(0,C.jsx)(N.Z,{children:i.shippingFee&&"\u20b9 ".concat((0,k.e_)(+i.shippingFee))})})]}),(0,C.jsxs)(U,{children:[(0,C.jsx)(G.Z,{colSpan:3}),(0,C.jsx)(G.Z,{align:"right",children:(0,C.jsx)(N.Z,{children:"Taxes"})}),(0,C.jsx)(G.Z,{align:"right",width:120,children:(0,C.jsx)(N.Z,{children:i.gst&&"\u20b9 ".concat((0,k.e_)(i.gst))})})]}),(0,C.jsxs)(U,{children:[(0,C.jsx)(G.Z,{colSpan:3}),(0,C.jsx)(G.Z,{align:"right",children:(0,C.jsx)(N.Z,{variant:"h6",children:"Total"})}),(0,C.jsx)(G.Z,{align:"right",width:140,children:(0,C.jsx)(N.Z,{variant:"h6",children:"\u20b9 ".concat((0,k.e_)(i.total))})})]})]})]})})})]})}function Q(e){var n=e.isEdit,r=e.currentOrder,s=((0,l.s0)(),(0,w.Z)("up","md"),(0,j.Z)(),(0,o.useState)(!1)),d=(0,t.Z)(s,2),c=d[0],u=d[1],h=(0,o.useState)(!1),x=(0,t.Z)(h,2),k=x[0],S=x[1],I=v.Ry().shape({createDate:v.Z_().nullable().required("Create date is required"),dueDate:v.Z_().nullable().required("Due date is required"),shipping_info:v.nK().nullable().required("Order to is required")}),_=(0,o.useMemo)((function(){return{orderId:(null===r||void 0===r?void 0:r.order_id)||"17099",createDate:(null===r||void 0===r?void 0:r.createDate)||null,dueDate:(null===r||void 0===r?void 0:r.dueDate)||null,shippingFee:(null===r||void 0===r?void 0:r.shipping_fee)||"",status:(null===r||void 0===r?void 0:r.status)||"New Order",gst:(null===r||void 0===r?void 0:r.gst)||"",subTotal:(null===r||void 0===r?void 0:r.sub_total)||"",total:(null===r||void 0===r?void 0:r.total)||"",shippingInfo:(null===r||void 0===r?void 0:r.shipping_info)||{name:"",mobile_number:"",address:"",town:"",city:"",state:"",pincode:""},items:(null===r||void 0===r?void 0:r.cart_info)||[{title:"",description:"",service:"",quantity:0,price:0,total:0}]}}),[r]),D=(0,Z.cI)({resolver:(0,f.X)(I),defaultValues:_}),O=(D.control,D.reset),q=D.watch,W=D.handleSubmit,N=D.formState.isSubmitting,E=q();(0,o.useEffect)((function(){n&&r&&O(_),n||O(_)}),[n,r]);var P=(0,p.Z)((0,p.Z)({},E),{},{items:E.items.map((function(e){return(0,p.Z)((0,p.Z)({},e),{},{total:e.quantity*e.price})}))}),V=function(){var e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(!0);try{console.log(JSON.stringify(P,null,2))}catch(n){console.error(n)}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!0);try{console.log(JSON.stringify(P,null,2))}catch(n){console.error(n)}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,C.jsxs)(y.RV,{methods:D,children:[(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(B,{}),(0,C.jsx)(T,{}),(0,C.jsx)(M,{})]}),(0,C.jsxs)(b.Z,{justifyContent:"flex-end",direction:"row",spacing:2,sx:{mt:3},children:[(0,C.jsx)(g.Z,{color:"inherit",size:"large",variant:"contained",loading:c&&N,onClick:function(){return W(V)},children:"Save as Draft"}),(0,C.jsxs)(g.Z,{size:"large",variant:"contained",loading:k&&N,onClick:function(){return W(z)},children:[n?"Update":"Create"," & Send"]})]})]})}var J=r(89731),K=r(77103);function H(){var e=(0,u.Z)().themeStretch,n=(0,l.UO)().id,r=(0,o.useState)({}),s=(0,t.Z)(r,2),p=s[0],v=s[1],Z=localStorage.getItem("accessToken");return(0,o.useEffect)((0,i.Z)(a().mark((function e(){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z||!(0,K.w)(Z)){e.next=7;break}return(0,K.K)(Z),e.next=4,J.Z.get("/orders/".concat(n));case 4:r=e.sent,i=r.data.data,v(i[0]);case 7:case"end":return e.stop()}}),e)}))),[Z]),(0,C.jsx)(h.Z,{title:"Orders: Edit",children:(0,C.jsxs)(d.Z,{maxWidth:!e&&"lg",children:[(0,C.jsx)(x.Z,{heading:"Edit order",links:[{name:"Dashboard",href:c.vB.root},{name:"Orders",href:c.vB.order.list},{name:"INV-".concat(null===p||void 0===p?void 0:p.order_id)||0}]}),(0,C.jsx)(Q,{isEdit:!0,currentOrder:p})]})})}}}]);
//# sourceMappingURL=272.7bd72d00.chunk.js.map