"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[3135],{25416:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(1413),r=n(45987),o=n(88564),a=n(61113),s=n(3484),l=n(46417),c=["title","description","img"],d=(0,o.ZP)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function h(e){var t=e.title,n=e.description,o=e.img,h=(0,r.Z)(e,c);return(0,l.jsxs)(d,(0,i.Z)((0,i.Z)({},h),{},{children:[(0,l.jsx)(s.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:o||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(a.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,l.jsx)(a.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},40885:function(e,t,n){n.d(t,{cU:function(){return S},i5:function(){return j},A0:function(){return d}});var i=n(1413),r=n(88564),o=n(57829),a=n(46417),s=(0,r.ZP)(o.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{display:"flex",listStyle:"none",alignItems:"center",justifyContent:"center","& li":{width:18,height:18,opacity:.32,cursor:"pointer"},"& li.slick-active":(0,i.Z)({opacity:1},t&&{"& .dotActive":{width:16,borderRadius:6}})}})),l=(0,r.ZP)("div")((function(){return{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}})),c=(0,r.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function d(e){var t=null===e||void 0===e?void 0:e.color,n=(null===e||void 0===e?void 0:e.rounded)||!1;return{appendDots:function(t){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s,(0,i.Z)((0,i.Z)({rounded:n,component:"ul"},e),{},{children:t}))})},customPaging:function(){return(0,a.jsx)(l,{children:(0,a.jsx)(c,{className:"dotActive",sx:{bgcolor:t||"primary.main"}})})}}}var h=n(45987),u=n(19860),x=n(35898),p=n(42593),Z=n(57597),g=["filled","customIcon","onNext","onPrevious","children"],m=(0,r.ZP)(Z.w_,{shouldForwardProp:function(e){return"filled"!==e}})((function(e){var t=e.filled,n=e.theme;return(0,i.Z)({width:40,height:40,cursor:"pointer",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:n.palette.text.primary}},t&&{opacity:.48,borderRadius:1.5*Number(n.shape.borderRadius),color:n.palette.common.white,backgroundColor:n.palette.grey[900],"&:hover":{opacity:1,color:n.palette.common.white,backgroundColor:n.palette.grey[900]}})}));function j(e){var t=e.filled,n=void 0!==t&&t,r=e.customIcon,s=e.onNext,l=e.onPrevious,c=e.children,d=(0,h.Z)(e,g),p="rtl"===(0,u.Z)().direction,Z={position:"absolute",mt:-2.5,top:"50%",zIndex:9};return c?(0,a.jsxs)(o.Z,(0,i.Z)((0,i.Z)({},d),{},{children:[(0,a.jsx)(o.Z,{className:"arrow left",sx:(0,i.Z)((0,i.Z)({},Z),{},{left:0}),children:(0,a.jsx)(m,{filled:n,onClick:l,children:f(r,p)})}),c,(0,a.jsx)(o.Z,{className:"arrow right",sx:(0,i.Z)((0,i.Z)({},Z),{},{right:0}),children:(0,a.jsx)(m,{filled:n,onClick:s,children:v(r,p)})})]})):(0,a.jsxs)(x.Z,(0,i.Z)((0,i.Z)({direction:"row",spacing:1},d),{},{children:[(0,a.jsx)(m,{className:"arrow left",filled:n,onClick:l,children:f(r,p)}),(0,a.jsx)(m,{className:"arrow right",filled:n,onClick:s,children:v(r,p)})]}))}var f=function(e,t){return(0,a.jsx)(p.Z,{icon:e||"eva:arrow-right-fill",sx:(0,i.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},v=function(e,t){return(0,a.jsx)(p.Z,{icon:e||"eva:arrow-right-fill",sx:(0,i.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})},b=n(17551),y=n(47131),w=n(61113),C=["index","total","onNext","onPrevious","customIcon"],k=(0,r.ZP)(o.Z)((function(e){var t=e.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),color:t.palette.common.white,borderRadius:t.shape.borderRadius,backgroundColor:(0,b.Fq)(t.palette.grey[900],.48)}})),I=(0,r.ZP)(y.Z)((function(e){return{padding:6,opacity:.48,color:e.theme.palette.common.white,"&:hover":{opacity:1}}}));function S(e){var t=e.index,n=e.total,r=e.onNext,o=e.onPrevious,s=e.customIcon,l=(0,h.Z)(e,C),c="rtl"===(0,u.Z)().direction;return(0,a.jsxs)(k,(0,i.Z)((0,i.Z)({},l),{},{children:[(0,a.jsx)(I,{size:"small",onClick:o,children:D(s,c)}),(0,a.jsxs)(w.Z,{variant:"subtitle2",children:[t+1,"/",n]}),(0,a.jsx)(I,{size:"small",onClick:r,children:P(s,c)})]}))}var D=function(e,t){return(0,a.jsx)(p.Z,{icon:e||"eva:arrow-right-fill",sx:(0,i.Z)({width:20,height:20,transform:" scaleX(-1)"},t&&{transform:" scaleX(1)"})})},P=function(e,t){return(0,a.jsx)(p.Z,{icon:e||"eva:arrow-right-fill",sx:(0,i.Z)({width:20,height:20},t&&{transform:" scaleX(-1)"})})}},55844:function(e,t,n){n.d(t,{$W:function(){return g},K:function(){return y},V7:function(){return h},et:function(){return s},Nl:function(){return I},hM:function(){return Z}});var i=n(24076),r=n(67478),o=n(25416),a=n(46417);function s(e){var t=e.isNotFound;return(0,a.jsx)(i.Z,{children:t?(0,a.jsx)(r.Z,{colSpan:12,children:(0,a.jsx)(o.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,a.jsx)(r.Z,{colSpan:12,sx:{p:0}})})}var l=n(47131),c=n(42593),d=n(28100);function h(e){var t=e.actions,n=e.open,i=e.onClose,r=e.onOpen;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{onClick:r,children:(0,a.jsx)(c.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,a.jsx)(d.Z,{open:Boolean(n),anchorEl:n,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:t})]})}var u=n(1413),x=n(35898),p=n(84488);function Z(e){var t=Object.assign({},e);return(0,a.jsx)(i.Z,(0,u.Z)((0,u.Z)({},t),{},{children:(0,a.jsx)(r.Z,{colSpan:12,children:(0,a.jsxs)(x.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,a.jsx)(p.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,a.jsx)(p.Z,{variant:"text",width:"100%",height:20}),(0,a.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,a.jsx)(p.Z,{variant:"text",width:160,height:20})]})})}))}function g(e){var t=e.emptyRows,n=e.height;return t?(0,a.jsx)(i.Z,{sx:(0,u.Z)({},n&&{height:n*t}),children:(0,a.jsx)(r.Z,{colSpan:9})}):null}var m=n(23477),j=n(44758),f=n(82558),v=n(57829),b={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function y(e){var t=e.order,n=e.orderBy,o=e.rowCount,s=void 0===o?0:o,l=e.headLabel,c=e.numSelected,d=void 0===c?0:c,h=e.onSort,x=e.onSelectAllRows,p=e.sx;return(0,a.jsx)(m.Z,{sx:p,children:(0,a.jsxs)(i.Z,{children:[x&&(0,a.jsx)(r.Z,{padding:"checkbox",children:(0,a.jsx)(j.Z,{indeterminate:d>0&&d<s,checked:s>0&&d===s,onChange:function(e){return x(e.target.checked)}})}),l.map((function(e){return(0,a.jsx)(r.Z,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:h?(0,a.jsxs)(f.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:function(){return h(e.id)},sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,a.jsx)(v.Z,{sx:(0,u.Z)({},b),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var w=n(45987),C=n(61113),k=["dense","actions","rowCount","numSelected","onSelectAllRows","sx"];function I(e){var t=e.dense,n=e.actions,i=e.rowCount,r=e.numSelected,o=e.onSelectAllRows,s=e.sx,l=(0,w.Z)(e,k);return(0,a.jsxs)(x.Z,(0,u.Z)((0,u.Z)({direction:"row",alignItems:"center",sx:(0,u.Z)((0,u.Z)({px:2,top:0,left:8,right:8,zIndex:9,height:58,borderRadius:1,position:"absolute",bgcolor:"primary.lighter"},t&&{pl:1,height:38}),s)},l),{},{children:[(0,a.jsx)(j.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return o(e.target.checked)}}),(0,a.jsxs)(C.Z,{variant:"subtitle1",sx:(0,u.Z)({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[r," selected"]}),n&&n]}))}},53135:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var i=n(19860),r=n(43265),o=n(9019),a=n(35898),s=n(11338),l=n(43465),c=n(71361),d=n(1413),h=n(45987),u=n(73428),x=n(54641),p=n(61689),Z=n(47131),g=n(63585),m=n(57829),j=n(61113),f=n(69099),v=n(42593),b=n(46417),y=["title","subheader","list"];function w(e){var t=e.title,n=e.subheader,i=e.list,r=(0,h.Z)(e,y);return(0,b.jsxs)(u.Z,(0,d.Z)((0,d.Z)({},r),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n,action:(0,b.jsx)(p.Z,{title:"Add Contact",children:(0,b.jsx)(Z.Z,{color:"primary",size:"large",children:(0,b.jsx)(v.Z,{icon:"eva:plus-fill",width:20,height:20})})})}),(0,b.jsxs)(a.Z,{spacing:3,sx:{p:3},children:[i.map((function(e){return(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,b.jsx)(g.Z,{src:e.avatar,sx:{width:48,height:48}}),(0,b.jsxs)(m.Z,{sx:{flexGrow:1,ml:2,minWidth:100},children:[(0,b.jsx)(j.Z,{variant:"subtitle2",sx:{mb:.5},noWrap:!0,children:e.name}),(0,b.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:e.email})]}),(0,b.jsx)(p.Z,{title:"Quick Transfer",children:(0,b.jsx)(Z.Z,{size:"small",children:(0,b.jsx)(v.Z,{icon:"eva:flash-fill",width:22,height:22})})})]},e.id)})),(0,b.jsx)(f.Z,{variant:"outlined",size:"large",color:"inherit",children:"View All"})]})]}))}var C=n(29439),k=n(44021),I=n(47313),S=n(47723),D=n(78887),P=n(56605),R=n(94469),z=n(33604),W=n(15082),A=n(4117),B=n(76221),N=n(40885),E=["title","subheader","list","sx"],T=["autoWidth","amount","onBlur","onChange","sx"],_=1e3;function F(e){var t=e.title,n=e.subheader,r=e.list,o=e.sx,s=(0,h.Z)(e,E),l=(0,i.Z)(),c=(0,I.useRef)(null),Z=(0,I.useState)(24),v=(0,C.Z)(Z,2),y=v[0],w=v[1],P=(0,I.useState)(!1),R=(0,C.Z)(P,2),z=R[0],W=R[1],A=(0,I.useState)(0),T=(0,C.Z)(A,2),F=T[0],L=T[1],V=(0,I.useState)(0),X=(0,C.Z)(V,2),G=X[0],q=X[1],$=r.find((function(e,t){return t===F})),H={dots:!1,arrows:!1,slidesToShow:7,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,centerPadding:"0px",rtl:Boolean("rtl"===l.direction),beforeChange:function(e,t){return L(t)},responsive:[{breakpoint:l.breakpoints.values.xl,settings:{slidesToShow:5}}]};(0,I.useEffect)((function(){G&&Y()}),[G]);var Y=function(){var e=G.toString().length;w(22*e)},J=function(e){q(""===e.target.value?"":Number(e.target.value))},U=function(){G<0?q(0):G>_&&q(_)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(u.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({boxShadow:0,bgcolor:"background.neutral"},o)},s),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n}),(0,b.jsxs)(m.Z,{sx:{p:3},children:[(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(j.Z,{variant:"overline",sx:{color:"text.secondary"},children:"Recent"}),(0,b.jsx)(S.Z,{sx:{typography:"button"},children:"View All"})]}),(0,b.jsx)(m.Z,{sx:{position:"relative"},children:(0,b.jsx)(N.i5,{filled:!0,onPrevious:function(){var e;null===(e=c.current)||void 0===e||e.slickPrev()},onNext:function(){var e;null===(e=c.current)||void 0===e||e.slickNext()},customIcon:"eva:arrow-ios-forward-fill",sx:{"& .arrow":{mt:"-14px","&.left":{left:-16},"&.right":{right:-16},"& button":{width:28,height:28,borderRadius:"50%",p:.75}}},children:(0,b.jsx)(k.Z,(0,d.Z)((0,d.Z)({ref:c},H),{},{children:r.map((function(e,t){return(0,b.jsx)(m.Z,{sx:{py:5},children:(0,b.jsx)(m.Z,{sx:{width:40,height:40},children:(0,b.jsx)(p.Z,{title:e.name,arrow:!0,placement:"top",children:(0,b.jsx)(g.Z,{src:e.avatar,sx:(0,d.Z)({opacity:.48,cursor:"pointer",transition:function(e){return e.transitions.create("all")}},F===t&&{opacity:1,transform:"scale(1.25)",boxShadow:"-4px 12px 24px 0 rgb(0,0,0,0.24)"})})},e.id)})},e.id)}))}))})}),(0,b.jsxs)(a.Z,{spacing:3,children:[(0,b.jsx)(j.Z,{variant:"overline",sx:{color:"text.secondary"},children:"insert amount"}),(0,b.jsx)(M,{onBlur:U,onChange:J,autoWidth:y,amount:G}),(0,b.jsx)(D.ZP,{value:"number"===typeof G?G:0,valueLabelDisplay:"auto",step:50,marks:!0,min:0,max:_,onChange:function(e,t){q(t)}}),(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(j.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:"Your Balance"}),(0,b.jsx)(j.Z,{variant:"subtitle1",children:(0,B.e_)(34212)})]}),(0,b.jsx)(f.Z,{variant:"contained",size:"large",disabled:0===G,onClick:function(){W(!0)},children:"Transfer Now"})]})]})]})),(0,b.jsx)(O,{open:z,autoWidth:y,amount:G,contactInfo:$,onClose:function(){W(!1)},onBlur:U,onChange:J})]})}function M(e){var t=e.autoWidth,n=e.amount,i=e.onBlur,r=e.onChange,o=e.sx,s=(0,h.Z)(e,T);return(0,b.jsxs)(a.Z,{direction:"row",justifyContent:"center",spacing:1,sx:o,children:[(0,b.jsx)(j.Z,{variant:"h5",children:"$"}),(0,b.jsx)(P.Z,(0,d.Z)({disableUnderline:!0,size:"small",value:n,onChange:r,onBlur:i,inputProps:{step:50,min:0,max:_,type:"number"},sx:{typography:"h3","& input":{p:0,textAlign:"center",width:t}}},s))]})}function O(e){var t=e.open,n=e.amount,i=e.autoWidth,r=e.contactInfo,o=e.onClose,s=e.onBlur,l=e.onChange;return(0,b.jsxs)(R.Z,{open:t,fullWidth:!0,maxWidth:"xs",onClose:o,children:[(0,b.jsx)(z.Z,{children:"Transfer to"}),(0,b.jsxs)(a.Z,{spacing:3,sx:{p:3,pb:0},children:[(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,b.jsx)(g.Z,{src:null===r||void 0===r?void 0:r.avatar,sx:{width:48,height:48}}),(0,b.jsxs)("div",{children:[(0,b.jsx)(j.Z,{variant:"subtitle2",children:null===r||void 0===r?void 0:r.name}),(0,b.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},children:null===r||void 0===r?void 0:r.email})]})]}),(0,b.jsx)(M,{onBlur:s,onChange:l,autoWidth:i,amount:n,disableUnderline:!1,sx:{justifyContent:"flex-end"}}),(0,b.jsx)(W.Z,{fullWidth:!0,multiline:!0,rows:2,placeholder:"Write a message..."})]}),(0,b.jsxs)(A.Z,{children:[(0,b.jsx)(f.Z,{variant:"contained",disabled:0===n,onClick:o,children:"Confirm & Transfer"}),(0,b.jsx)(f.Z,{onClick:o,children:"Cancel"})]})]})}var L=n(88564),V=n(17551),X=n(49914),G=n(3484),q=["img","price","title","description"],$=(0,L.ZP)("div")((function(e){var t=e.theme;return{marginTop:-120,padding:t.spacing(16,5,5,5),color:t.palette.common.white,borderRadius:2*Number(t.shape.borderRadius),backgroundImage:"linear-gradient(135deg,\n    ".concat(t.palette.primary.main," 0%,\n    ").concat(t.palette.primary.dark," 100%)")}}));function H(e){var t=e.img,n=e.price,i=e.title,r=e.description,o=(0,h.Z)(e,q);return(0,b.jsxs)(m.Z,(0,d.Z)((0,d.Z)({},o),{},{children:[(0,b.jsx)(G.Z,{visibleByDefault:!0,disabledEffect:!0,src:t,sx:{left:40,zIndex:9,width:140,position:"relative",filter:"drop-shadow(0 12px 24px rgba(0,0,0,0.24))"}}),(0,b.jsxs)($,{children:[(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(j.Z,{variant:"h4",sx:{whiteSpace:"pre-line"},children:i}),(0,b.jsxs)(j.Z,{variant:"h2",children:[" ",n," "]})]}),(0,b.jsx)(j.Z,{variant:"body2",sx:{mt:2,mb:3},children:r}),(0,b.jsxs)(a.Z,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",children:[(0,b.jsx)(X.Z,{size:"small",placeholder:"Email",sx:{width:1,color:"common.white",fontWeight:"fontWeightMedium",bgcolor:function(e){return(0,V.Fq)(e.palette.common.black,.16)},"& input::placeholder":{color:function(e){return(0,V.Fq)(e.palette.common.white,.48)}},"& fieldset":{display:"none"}}}),(0,b.jsx)(f.Z,{color:"warning",variant:"contained",children:"Invite"})]})]})]}))}var Y=n(19118),J=n.n(Y),U=n(58446),K=n(48999),Q=["title","total","icon","percent","color","chartData","sx"],ee=(0,L.ZP)("div")((function(e){var t=e.theme;return{width:48,height:48,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",top:t.spacing(3),right:t.spacing(3),justifyContent:"center"}}));function te(e){var t=e.title,n=e.total,r=e.icon,o=e.percent,s=e.color,l=void 0===s?"primary":s,c=e.chartData,x=e.sx,p=(0,h.Z)(e,Q),Z=(0,i.Z)(),g=J()((0,K.F)(),{colors:[Z.palette[l].main],chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},stroke:{width:4},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:function(e){return(0,B.e_)(e)},title:{formatter:function(){return""}}}},fill:{gradient:{opacityFrom:.56,opacityTo:.56}}});return(0,b.jsxs)(u.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({width:1,boxShadow:0,color:function(e){return e.palette[l].darker},bgcolor:function(e){return e.palette[l].lighter}},x)},p),{},{children:[(0,b.jsx)(ee,{sx:{color:function(e){return e.palette[l].lighter},bgcolor:function(e){return e.palette[l].dark}},children:(0,b.jsx)(v.Z,{icon:r,width:24,height:24})}),(0,b.jsxs)(a.Z,{spacing:1,sx:{p:3},children:[(0,b.jsx)(j.Z,{sx:{typography:"subtitle2"},children:t}),(0,b.jsx)(j.Z,{sx:{typography:"h3"},children:(0,B.e_)(n)}),(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",flexWrap:"wrap",children:[(0,b.jsx)(v.Z,{width:20,height:20,icon:o>=0?"eva:trending-up-fill":"eva:trending-down-fill"}),(0,b.jsxs)(j.Z,{variant:"subtitle2",component:"span",sx:{ml:.5},children:[o>0&&"+",(0,B.f2)(o)]}),(0,b.jsx)(j.Z,{variant:"body2",component:"span",sx:{opacity:.72},children:"\xa0than last month"})]})]}),(0,b.jsx)(U.Z,{type:"area",series:[{data:c}],options:g,height:120})]}))}var ne=n(51405),ie=n(28100),re=(0,L.ZP)("div")((function(e){var t=e.theme;return{position:"relative",height:276,"& .slick-list":{borderRadius:2*Number(t.shape.borderRadius)}}})),oe=(0,L.ZP)("div")((function(e){var t=e.theme;return{position:"relative",height:260,backgroundSize:"cover",padding:t.spacing(3),backgroundRepeat:"no-repeat",color:t.palette.common.white,backgroundImage:'url("/assets/bg_card.png")',display:"flex",flexDirection:"column",justifyContent:"space-between"}})),ae={mx:"auto",width:"calc(100% - 16px)",borderRadius:2,position:"absolute",height:200,zIndex:8,bottom:8,left:0,right:0,bgcolor:"grey.500",opacity:.32};function se(e){var t=e.list,n=e.sx,r=(0,i.Z)(),o=(0,d.Z)({dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===r.direction)},(0,N.A0)({position:"absolute",right:16,bottom:16}));return(0,b.jsxs)(re,{sx:n,children:[(0,b.jsx)(m.Z,{sx:{position:"relative",zIndex:9},children:(0,b.jsx)(k.Z,(0,d.Z)((0,d.Z)({},o),{},{children:t.map((function(e){return(0,b.jsx)(le,{card:e},e.id)}))}))}),(0,b.jsx)(m.Z,{sx:(0,d.Z)({},ae)}),(0,b.jsx)(m.Z,{sx:(0,d.Z)((0,d.Z)({},ae),{},{opacity:.16,bottom:0,zIndex:7,width:"calc(100% - 40px)"})})]})}function le(e){var t=e.card,n=t.id,i=t.cardType,r=t.balance,o=t.cardHolder,s=t.cardNumber,l=t.cardValid,c=(0,I.useState)(null),d=(0,C.Z)(c,2),h=d[0],u=d[1],x=(0,I.useState)(!0),p=(0,C.Z)(x,2),g=p[0],f=p[1],y=function(){u(null)};return(0,b.jsxs)(oe,{children:[(0,b.jsx)(m.Z,{sx:{position:"absolute",top:16,right:16,zIndex:9},children:(0,b.jsx)(ce,{open:h,onOpen:function(e){u(e.currentTarget)},onClose:y,actions:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(ne.Z,{onClick:function(){y(),console.log("DELETE",n)},sx:{color:"error.main"},children:[(0,b.jsx)(v.Z,{icon:"eva:trash-2-outline"}),"Delete card"]}),(0,b.jsxs)(ne.Z,{onClick:function(){y(),console.log("EDIT",n)},children:[(0,b.jsx)(v.Z,{icon:"eva:edit-fill"}),"Edit card"]})]})})}),(0,b.jsxs)("div",{children:[(0,b.jsx)(j.Z,{sx:{mb:2,typography:"subtitle2",opacity:.72},children:"Current Balance"}),(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,b.jsx)(j.Z,{sx:{typography:"h3"},children:g?"********":(0,B.e_)(r)}),(0,b.jsx)(Z.Z,{color:"inherit",onClick:function(){f((function(e){return!e}))},sx:{opacity:.48},children:(0,b.jsx)(v.Z,{icon:g?"eva:eye-fill":"eva:eye-off-fill"})})]})]}),(0,b.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",spacing:1,children:[(0,b.jsx)(G.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"credit-card",src:"https://minimal-assets-api-dev.vercel.app/assets/icons/ic_".concat("mastercard"===i?"mastercard":"visa",".svg"),sx:{height:24}}),(0,b.jsx)(j.Z,{sx:{typography:"subtitle1",textAlign:"right"},children:s})]}),(0,b.jsxs)(a.Z,{direction:"row",spacing:5,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(j.Z,{sx:{mb:1,typography:"caption",opacity:.48},children:"Card Holder"}),(0,b.jsx)(j.Z,{sx:{typography:"subtitle1"},children:o})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(j.Z,{sx:{mb:1,typography:"caption",opacity:.48},children:"Valid Dates"}),(0,b.jsx)(j.Z,{sx:{typography:"subtitle1"},children:l})]})]})]})}function ce(e){var t=e.actions,n=e.open,i=e.onOpen,r=e.onClose;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z.Z,{size:"large",color:"inherit",sx:{opacity:.48},onClick:i,children:(0,b.jsx)(v.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,b.jsx)(ie.Z,{open:Boolean(n),anchorEl:n,onClose:r,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-.5,width:"auto","& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:t})]})}var de=["title","subheader","chartLabels","chartData"];function he(e){var t=e.title,n=e.subheader,i=e.chartLabels,r=e.chartData,o=(0,h.Z)(e,de),a=(0,I.useState)("Year"),s=(0,C.Z)(a,2),l=s[0],c=s[1],p=J()((0,K.F)(),{stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:i},tooltip:{y:{formatter:function(e){return"$".concat(e)}}}});return(0,b.jsxs)(u.Z,(0,d.Z)((0,d.Z)({},o),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n,action:(0,b.jsx)(W.Z,{select:!0,fullWidth:!0,value:l,SelectProps:{native:!0},onChange:function(e){c(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:r.map((function(e){return(0,b.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),r.map((function(e){return(0,b.jsx)(m.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===l&&(0,b.jsx)(U.Z,{type:"bar",series:e.data,options:p,height:364})},e.year)}))]}))}var ue=n(89600),xe=n(13305),pe=n(51629),Ze=n(66835),ge=n(57861),me=n(19536),je=n(24076),fe=n(67478),ve=n(86853),be=n(62677),ye=n(55844),we=["title","subheader","tableLabels","tableData"];function Ce(e){var t=e.title,n=e.subheader,i=e.tableLabels,r=e.tableData,o=(0,h.Z)(e,we);return(0,b.jsxs)(u.Z,(0,d.Z)((0,d.Z)({},o),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n,sx:{mb:3}}),(0,b.jsx)(be.Z,{children:(0,b.jsx)(pe.Z,{sx:{minWidth:720},children:(0,b.jsxs)(Ze.Z,{children:[(0,b.jsx)(ye.K,{headLabel:i}),(0,b.jsx)(ge.Z,{children:r.map((function(e){return(0,b.jsx)(ke,{row:e},e.id)}))})]})})}),(0,b.jsx)(me.Z,{}),(0,b.jsx)(m.Z,{sx:{p:2,textAlign:"right"},children:(0,b.jsx)(f.Z,{size:"small",color:"inherit",endIcon:(0,b.jsx)(v.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]}))}function ke(e){var t=e.row,n="light"===(0,i.Z)().palette.mode,r=(0,I.useState)(null),o=(0,C.Z)(r,2),a=o[0],s=o[1],l=function(){s(null)};return(0,b.jsxs)(je.Z,{children:[(0,b.jsx)(fe.Z,{children:(0,b.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsxs)(m.Z,{sx:{position:"relative"},children:[Se(t.category,t.avatar),(0,b.jsx)(m.Z,{sx:(0,d.Z)({right:0,bottom:0,width:18,height:18,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",color:"common.white",bgcolor:"error.main",justifyContent:"center"},"Income"===t.type&&{bgcolor:"success.main"}),children:(0,b.jsx)(v.Z,{icon:"Income"===t.type?"eva:diagonal-arrow-left-down-fill":"eva:diagonal-arrow-right-up-fill",width:16,height:16})})]}),(0,b.jsxs)(m.Z,{sx:{ml:2},children:[(0,b.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},children:t.message}),(0,b.jsxs)(j.Z,{variant:"subtitle2",children:[" ",t.category]})]})]})}),(0,b.jsxs)(fe.Z,{children:[(0,b.jsx)(j.Z,{variant:"subtitle2",children:(0,ue.Z)(new Date(t.date),"dd MMM yyyy")}),(0,b.jsx)(j.Z,{variant:"body2",sx:{color:"text.secondary"},children:(0,ue.Z)(new Date(t.date),"p")})]}),(0,b.jsx)(fe.Z,{children:(0,B.e_)(t.amount)}),(0,b.jsx)(fe.Z,{children:(0,b.jsx)(ve.Z,{variant:n?"ghost":"filled",color:("completed"===t.status?"success":"in_progress"===t.status&&"warning")||"error",children:(0,xe.G)(t.status)})}),(0,b.jsx)(fe.Z,{align:"right",children:(0,b.jsx)(ye.V7,{open:a,onOpen:function(e){s(e.currentTarget)},onClose:l,actions:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(ne.Z,{onClick:function(){l(),console.log("DOWNLOAD",t.id)},children:[(0,b.jsx)(v.Z,{icon:"eva:download-fill"}),"Download"]}),(0,b.jsxs)(ne.Z,{onClick:function(){l(),console.log("PRINT",t.id)},children:[(0,b.jsx)(v.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,b.jsxs)(ne.Z,{onClick:function(){l(),console.log("SHARE",t.id)},children:[(0,b.jsx)(v.Z,{icon:"eva:share-fill"}),"Share"]}),(0,b.jsx)(me.Z,{sx:{borderStyle:"dashed"}}),(0,b.jsxs)(ne.Z,{onClick:function(){l(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,b.jsx)(v.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})})})]})}function Ie(e){var t=e.icon;return(0,b.jsx)(g.Z,{sx:{width:48,height:48,color:"text.secondary",bgcolor:"background.neutral"},children:(0,b.jsx)(v.Z,{icon:t,width:24,height:24})})}function Se(e,t){return"Books"===e?(0,b.jsx)(Ie,{icon:"eva:book-fill"}):"Beauty & Health"===e?(0,b.jsx)(Ie,{icon:"eva:heart-fill"}):t?(0,b.jsx)(g.Z,{alt:e,src:t,sx:{width:48,height:48,boxShadow:function(e){return e.customShadows.z8}}}):null}var De=n(4942),Pe=n(66281),Re=["title","subheader","chartColors","chartData"],ze=(0,L.ZP)(u.Z)((function(e){var t=e.theme;return{"& .apexcharts-legend":(0,De.Z)({width:240,margin:"auto"},t.breakpoints.up("sm"),{flexWrap:"wrap",height:160,width:"50%"}),"& .apexcharts-datalabels-group":{display:"none"}}}));function We(e){var t=e.title,n=e.subheader,r=e.chartColors,o=e.chartData,s=(0,h.Z)(e,Re),l=(0,i.Z)(),c=(0,Pe.Z)("up","sm"),u=o.map((function(e){return e.label})),p=o.map((function(e){return e.value})),Z=J()((0,K.F)(),{labels:u,colors:r,stroke:{colors:[l.palette.background.paper]},fill:{opacity:.8},legend:{position:"right",itemMargin:{horizontal:10,vertical:5}},responsive:[{breakpoint:l.breakpoints.values.sm,options:{legend:{position:"bottom",horizontalAlign:"left"}}}]});return(0,b.jsxs)(ze,(0,d.Z)((0,d.Z)({},s),{},{children:[(0,b.jsx)(x.Z,{title:t,subheader:n}),(0,b.jsx)(m.Z,{sx:{my:5},dir:"ltr",children:(0,b.jsx)(U.Z,{type:"polarArea",series:p,options:Z,height:c?240:360})}),(0,b.jsx)(me.Z,{}),(0,b.jsxs)(a.Z,{direction:"row",divider:(0,b.jsx)(me.Z,{orientation:"vertical",flexItem:!0}),children:[(0,b.jsxs)(m.Z,{sx:{py:2,width:1,textAlign:"center"},children:[(0,b.jsx)(j.Z,{sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),(0,b.jsx)(j.Z,{sx:{typography:"h4"},children:"9"})]}),(0,b.jsxs)(m.Z,{sx:{py:2,width:1,textAlign:"center"},children:[(0,b.jsx)(j.Z,{sx:{mb:1,typography:"body2",color:"text.secondary"},children:"Categories"}),(0,b.jsx)(j.Z,{sx:{typography:"h4"},children:"$18,765"})]})]})]}))}function Ae(){var e=(0,i.Z)(),t=(0,s.Z)().themeStretch;return(0,b.jsx)(c.Z,{title:"General: Banking",children:(0,b.jsx)(r.Z,{maxWidth:!t&&"xl",children:(0,b.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,b.jsx)(o.ZP,{item:!0,xs:12,md:7,children:(0,b.jsxs)(a.Z,{direction:{xs:"column",sm:"row"},spacing:3,children:[(0,b.jsx)(te,{title:"Income",icon:"eva:diagonal-arrow-left-down-fill",percent:2.6,total:18765,chartData:[111,136,76,108,74,54,57,84]}),(0,b.jsx)(te,{title:"Expenses",color:"warning",icon:"eva:diagonal-arrow-right-up-fill",percent:-.5,total:8938,chartData:[111,136,76,108,74,54,57,84]})]})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:5,children:(0,b.jsx)(se,{list:l.x6})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,b.jsxs)(a.Z,{spacing:3,children:[(0,b.jsx)(he,{title:"Balance Statistics",subheader:"(+43% Income | +12% Expense) than last year",chartLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],chartData:[{year:"Week",data:[{name:"Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{year:"Month",data:[{name:"Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Expenses",data:[45,77,99,88,77,56,13,34,10]}]},{year:"Year",data:[{name:"Income",data:[76,42,29,41,27,138,117,86,63]},{name:"Expenses",data:[80,55,34,114,80,130,15,28,55]}]}]}),(0,b.jsx)(We,{title:"Expenses Categories",chartData:[{label:"Category 1",value:14},{label:"Category 2",value:23},{label:"Category 3",value:21},{label:"Category 4",value:17},{label:"Category 5",value:15},{label:"Category 6",value:10},{label:"Category 7",value:12},{label:"Category 8",value:17},{label:"Category 9",value:21}],chartColors:[e.palette.primary.main,e.palette.info.darker,e.palette.chart.yellow[0],e.palette.chart.blue[0],e.palette.chart.red[0],e.palette.chart.violet[2],e.palette.chart.violet[0],e.palette.success.darker,e.palette.chart.green[0]]}),(0,b.jsx)(Ce,{title:"Recent Transitions",tableData:l.DX,tableLabels:[{id:"description",label:"Description"},{id:"date",label:"Date"},{id:"amount",label:"Amount"},{id:"status",label:"Status"},{id:""}]})]})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,b.jsxs)(a.Z,{spacing:3,children:[(0,b.jsx)(F,{title:"Quick Transfer",list:l.Gz}),(0,b.jsx)(w,{title:"Contacts",subheader:"You have 122 contacts",list:l.Gz.slice(-5)}),(0,b.jsx)(H,{price:"$50",title:"Invite friends \n and earn",description:"Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam.",img:"/assets/illustrations/illustration_invite.png"})]})})]})})})}}}]);