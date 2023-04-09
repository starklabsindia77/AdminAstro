"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[2182],{42182:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var o=t(4942),r=t(88564),i=t(43265),a=t(9019),s=t(43465),l=t(71361),c=t(1413),p=t(29439),d=t(52417),u=t(47313),h=t(19860),m=t(61113),x=t(13918),g=t(42593),b=t(45987),v=t(46417),j=["children","onClose"],f=(0,r.ZP)(d.GI)((function(e){var n=e.theme,t="rtl"===n.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:n.spacing(1),boxShadow:n.customShadows.z20,borderRadius:n.shape.borderRadius,backgroundColor:n.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:n.palette.common.white,right:t&&"0",left:t&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:n.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:n.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:n.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:n.palette.grey[800]}}}));function Z(e){var n=e.children,t=e.onClose,o=(0,b.Z)(e,j);return(0,v.jsx)(f,(0,c.Z)((0,c.Z)({tipSize:8,anchor:"bottom",onClose:t,closeButton:!0,closeOnClick:!1},o),{},{children:n}))}var w=["sx"],y=(0,r.ZP)("div")((function(e){var n=e.theme;return{zIndex:99,position:"absolute",left:n.spacing(1.5),bottom:n.spacing(3.5),boxShadow:n.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:n.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function k(e){var n=e.sx,t=(0,b.Z)(e,w);return(0,v.jsx)(y,{sx:n,children:(0,v.jsx)(d.jf,(0,c.Z)({maxWidth:100,unit:"imperial"},t))})}var C=["onClick"],P=(0,r.ZP)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function S(e){var n=e.onClick,t=(0,b.Z)(e,C);return(0,v.jsx)(d.Jx,(0,c.Z)((0,c.Z)({},t),{},{children:(0,v.jsx)(P,{viewBox:"0 0 24 24",onClick:n,children:(0,v.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}(0,r.ZP)(d.$j)((function(e){var n=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:n.spacing(6),left:n.spacing(1.5),boxShadow:n.customShadows.z8}}));(0,r.ZP)(d.ot)((function(e){var n=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:n.spacing(1.5),left:n.spacing(1.5),boxShadow:n.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));var z=(0,r.ZP)(d.Pv)((function(e){var n=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:n.spacing(6),left:n.spacing(1.5),boxShadow:n.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(n.palette.divider)}}}));function U(e){var n=Object.assign({},e);return(0,v.jsx)(z,(0,c.Z)({},n))}var N=(0,r.ZP)("div")((function(e){return{zIndex:0,height:560,overflow:"hidden",position:"relative",borderRadius:e.theme.shape.borderRadius,"& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right":{display:"none"}}}));function A(e){var n=e.contacts,t="light"===(0,h.Z)().palette.mode,o=(0,u.useState)(null),r=(0,p.Z)(o,2),i=r[0],a=r[1],s=(0,u.useState)({latitude:12,longitude:42,zoom:2}),l=(0,p.Z)(s,2),b=l[0],j=l[1];return(0,v.jsx)(N,{children:(0,v.jsxs)(d.ZP,(0,c.Z)((0,c.Z)({},b),{},{onViewportChange:j,mapStyle:"mapbox://styles/mapbox/".concat(t?"light":"dark","-v10"),mapboxApiAccessToken:x.$t,width:"100%",height:"100%",children:[(0,v.jsx)(k,{}),(0,v.jsx)(U,{}),n.map((function(e){return(0,v.jsx)(S,{latitude:e.latlng[0],longitude:e.latlng[1],onClick:function(){return a(e)}},e.phoneNumber)})),i&&(0,v.jsxs)(Z,{longitude:i.latlng[1],latitude:i.latlng[0],onClose:function(){return a(null)},sx:{"& .mapboxgl-popup-content":{bgcolor:"common.white"},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{borderTopColor:"#FFF"},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{borderBottomColor:"#FFF"}},children:[(0,v.jsx)(m.Z,{variant:"subtitle2",sx:{mb:.5},children:"Address"}),(0,v.jsx)(m.Z,{component:"p",variant:"caption",children:i.address}),(0,v.jsxs)(m.Z,{component:"p",variant:"caption",sx:{mt:1,display:"flex",alignItems:"center"},children:[(0,v.jsx)(g.Z,{icon:"eva:phone-fill",sx:{mr:.5,width:14,height:14}}),i.phoneNumber]})]})]}))})}var R=t(80206),E=t(57829),B=t(57597),I=[{country:"Bali",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(239) 555-0108"},{country:"London",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(319) 555-0115"},{country:"Prague",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(252) 555-0126"},{country:"Moscow",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(307) 555-0133"}],W=(0,r.ZP)("div")((function(e){var n=e.theme;return(0,o.Z)({backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/overlay.svg), url(https://minimal-assets-api-dev.vercel.app/assets/images/contact/hero.jpg)",padding:n.spacing(10,0)},n.breakpoints.up("md"),{height:560,padding:0})})),_=(0,r.ZP)("div")((function(e){var n=e.theme;return(0,o.Z)({textAlign:"center"},n.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:n.spacing(10)})}));function F(){return(0,v.jsx)(W,{children:(0,v.jsx)(i.Z,{component:B.NM,sx:{position:"relative",height:"100%"},children:(0,v.jsxs)(_,{children:[(0,v.jsx)(B.gH,{text:"Where",sx:{color:"primary.main"},variants:(0,B.EU)().inRight}),(0,v.jsx)("br",{}),(0,v.jsxs)(E.Z,{sx:{display:"inline-flex",color:"common.white"},children:[(0,v.jsx)(B.gH,{text:"to",sx:{mr:2}}),(0,v.jsx)(B.gH,{text:"find",sx:{mr:2}}),(0,v.jsx)(B.gH,{text:"us?"})]}),(0,v.jsx)(a.ZP,{container:!0,spacing:5,sx:{mt:5,color:"common.white"},children:I.map((function(e){return(0,v.jsxs)(a.ZP,{item:!0,xs:12,sm:6,md:3,lg:2,sx:{pr:{md:5}},children:[(0,v.jsx)(R.m.div,{variants:(0,B.EU)().in,children:(0,v.jsx)(m.Z,{variant:"h6",paragraph:!0,children:e.country})}),(0,v.jsx)(R.m.div,{variants:(0,B.EU)().inRight,children:(0,v.jsxs)(m.Z,{variant:"body2",children:[e.address,(0,v.jsx)("br",{})," ",e.phoneNumber]})})]},e.country)}))})]})})})}var T=t(35898),G=t(15082),H=t(69099);function L(){return(0,v.jsxs)(T.Z,{component:B.DG,spacing:5,children:[(0,v.jsx)(R.m.div,{variants:(0,B.EU)().inUp,children:(0,v.jsxs)(m.Z,{variant:"h3",children:["Feel free to contact us. ",(0,v.jsx)("br",{}),"We'll be glad to hear from you, buddy."]})}),(0,v.jsxs)(T.Z,{spacing:3,children:[(0,v.jsx)(R.m.div,{variants:(0,B.EU)().inUp,children:(0,v.jsx)(G.Z,{fullWidth:!0,label:"Name"})}),(0,v.jsx)(R.m.div,{variants:(0,B.EU)().inUp,children:(0,v.jsx)(G.Z,{fullWidth:!0,label:"Email"})}),(0,v.jsx)(R.m.div,{variants:(0,B.EU)().inUp,children:(0,v.jsx)(G.Z,{fullWidth:!0,label:"Subject"})}),(0,v.jsx)(R.m.div,{variants:(0,B.EU)().inUp,children:(0,v.jsx)(G.Z,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})})]}),(0,v.jsx)(R.m.div,{variants:(0,B.EU)().inUp,children:(0,v.jsx)(H.Z,{size:"large",variant:"contained",children:"Submit Now"})})]})}var M=(0,r.ZP)("div")((function(e){var n=e.theme;return(0,o.Z)({paddingTop:n.spacing(8)},n.breakpoints.up("md"),{paddingTop:n.spacing(11)})}));function O(){return(0,v.jsx)(l.Z,{title:"Contact us",children:(0,v.jsxs)(M,{children:[(0,v.jsx)(F,{}),(0,v.jsx)(i.Z,{sx:{my:10},children:(0,v.jsxs)(a.ZP,{container:!0,spacing:10,children:[(0,v.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(L,{})}),(0,v.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(A,{contacts:s.o2})})]})})]})})}}}]);