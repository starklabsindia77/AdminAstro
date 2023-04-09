"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[8285],{48285:function(e,t,r){r.r(t),r.d(t,{default:function(){return ge}});var i=r(93433),n=r(19860),a=r(43265),l=r(61113),s=r(9019),o=r(11338),c=r(43465),d=r(71361),h=r(29439),u=r(1413),x=r(45987),p=r(47313),m=r(75627),Z=r(73428),f=r(54641),j=r(35898),g=r(83929),b=r(44758),v=r(51405),y=r(19536),C=r(47131),k=r(42593),w=r(28100),S=r(46417),D=["title","subheader","list"];function M(e){var t=e.title,r=e.subheader,n=e.list,a=(0,x.Z)(e,D),l=(0,m.cI)({defaultValues:{taskCompleted:["2"]}}).control;return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({},a),{},{children:[(0,S.jsx)(f.Z,{title:t,subheader:r}),(0,S.jsx)(m.Qr,{name:"taskCompleted",control:l,render:function(e){var t=e.field;return(0,S.jsx)(S.Fragment,{children:n.map((function(e){return(0,S.jsx)(P,{task:e,checked:t.value.includes(e.id),onChange:function(){return t.onChange(function(e){return t.value.includes(e)?t.value.filter((function(t){return t!==e})):[].concat((0,i.Z)(t.value),[e])}(e.id))}},e.id)}))})}})]}))}function P(e){var t=e.task,r=e.checked,i=e.onChange,n=(0,p.useState)(null),a=(0,h.Z)(n,2),l=a[0],s=a[1],o=function(){s(null)};return(0,S.jsxs)(j.Z,{direction:"row",sx:(0,u.Z)({px:2,py:.75},r&&{color:"text.disabled",textDecoration:"line-through"}),children:[(0,S.jsx)(g.Z,{control:(0,S.jsx)(b.Z,{checked:r,onChange:i}),label:t.label,sx:{flexGrow:1,m:0}}),(0,S.jsx)(T,{open:l,onClose:o,onOpen:function(e){s(e.currentTarget)},actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(v.Z,{onClick:function(){o(),console.log("MARK COMPLETE",t.id)},children:[(0,S.jsx)(k.Z,{icon:"eva:checkmark-circle-2-fill"}),"Mark Complete"]}),(0,S.jsxs)(v.Z,{onClick:function(){o(),console.log("EDIT",t.id)},children:[(0,S.jsx)(k.Z,{icon:"eva:edit-fill"}),"Edit"]}),(0,S.jsxs)(v.Z,{onClick:function(){o(),console.log("SHARE",t.id)},children:[(0,S.jsx)(k.Z,{icon:"eva:share-fill"}),"Share"]}),(0,S.jsx)(y.Z,{sx:{borderStyle:"dashed"}}),(0,S.jsxs)(v.Z,{onClick:function(){o(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,S.jsx)(k.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})})]})}function T(e){var t=e.actions,r=e.open,i=e.onOpen,n=e.onClose;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(C.Z,{size:"large",color:"inherit",sx:{opacity:.48},onClick:i,children:(0,S.jsx)(k.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,S.jsx)(w.Z,{open:Boolean(r),anchorEl:r,onClose:n,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-.5,width:"auto","& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:t})]})}var A=r(57829),F=r(69099),O=r(47723),E=r(75868),L=r(3484),I=r(62677),z=["title","subheader","list"];function R(e){var t=e.title,r=e.subheader,i=e.list,n=(0,x.Z)(e,z);return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({},n),{},{children:[(0,S.jsx)(f.Z,{title:t,subheader:r}),(0,S.jsx)(I.Z,{children:(0,S.jsx)(j.Z,{spacing:3,sx:{p:3,pr:0},children:i.map((function(e){return(0,S.jsx)(W,{news:e},e.id)}))})}),(0,S.jsx)(y.Z,{}),(0,S.jsx)(A.Z,{sx:{p:2,textAlign:"right"},children:(0,S.jsx)(F.Z,{size:"small",color:"inherit",endIcon:(0,S.jsx)(k.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View all"})})]}))}function W(e){var t=e.news,r=t.image,i=t.title,n=t.description,a=t.postedAt;return(0,S.jsxs)(j.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,S.jsx)(L.Z,{alt:i,src:r,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),(0,S.jsxs)(A.Z,{sx:{minWidth:240},children:[(0,S.jsx)(O.Z,{color:"inherit",variant:"subtitle2",noWrap:!0,children:i}),(0,S.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:n})]}),(0,S.jsx)(l.Z,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:(0,E.DY)(a)})]})}var _=r(19118),H=r.n(_),K=r(58446),B=r(88564),G=r(76221),U=r(48999),V=["title","subheader","chartColors","chartData"],q=(0,B.ZP)("div")((function(e){var t=e.theme;return{height:372,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:372},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(300,"px) !important")}}}));function N(e){var t=e.title,r=e.subheader,i=e.chartColors,a=e.chartData,l=(0,x.Z)(e,V),s=(0,n.Z)(),o=a.map((function(e){return e.label})),c=a.map((function(e){return e.value})),d=H()((0,U.F)(),{colors:i,labels:o,stroke:{colors:[s.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,G.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({},l),{},{children:[(0,S.jsx)(f.Z,{title:t,subheader:r}),(0,S.jsx)(q,{dir:"ltr",children:(0,S.jsx)(K.Z,{type:"pie",series:c,options:d,height:280})})]}))}var J=r(93405),Y=r(48571),Q=r(56445),$=r(83922),X=r(61414),ee=r(17945),te=r(88221),re=["title","subheader","list"];function ie(e){var t=e.title,r=e.subheader,i=e.list,n=(0,x.Z)(e,re);return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({},n),{},{children:[(0,S.jsx)(f.Z,{title:t,subheader:r}),(0,S.jsx)(J.Z,{sx:{"& .MuiTimelineItem-missingOppositeContent:before":{display:"none"}},children:(0,S.jsx)(Y.Z,{children:i.map((function(e,t){return(0,S.jsx)(ne,{item:e,isLast:t===i.length-1},e.id)}))})})]}))}function ne(e){var t=e.item,r=e.isLast,i=t.type,n=t.title,a=t.time;return(0,S.jsxs)(Q.Z,{children:[(0,S.jsxs)($.Z,{children:[(0,S.jsx)(X.Z,{color:("order1"===i?"primary":"order2"===i&&"success")||"order3"===i&&"info"||"order4"===i&&"warning"||"error"}),r?null:(0,S.jsx)(ee.Z,{})]}),(0,S.jsxs)(te.Z,{children:[(0,S.jsx)(l.Z,{variant:"subtitle2",children:n}),(0,S.jsx)(l.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,E.zM)(a)})]})]})}var ae=r(82295),le=["title","subheader","list"];function se(e){var t=e.title,r=e.subheader,i=e.list,n=(0,x.Z)(e,le);return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({},n),{},{children:[(0,S.jsx)(f.Z,{title:t,subheader:r}),(0,S.jsx)(J.Z,{children:(0,S.jsx)(A.Z,{sx:{display:"grid",gap:2,gridTemplateColumns:"repeat(2, 1fr)"},children:i.map((function(e){return(0,S.jsxs)(ae.Z,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[(0,S.jsx)(A.Z,{sx:{mb:.5},children:e.icon}),(0,S.jsx)(l.Z,{variant:"h6",children:(0,G.v1)(e.value)}),(0,S.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.name})]},e.name)}))})})]}))}var oe=["title","subheader","chartLabels","chartData"];function ce(e){var t=e.title,r=e.subheader,i=e.chartLabels,n=e.chartData,a=(0,x.Z)(e,oe),l=H()((0,U.F)(),{plotOptions:{bar:{columnWidth:"16%"}},fill:{type:n.map((function(e){return e.fill}))},labels:i,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," visits"):e}}}});return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({},a),{},{children:[(0,S.jsx)(f.Z,{title:t,subheader:r}),(0,S.jsx)(A.Z,{sx:{p:3,pb:1},dir:"ltr",children:(0,S.jsx)(K.Z,{type:"line",series:n,options:l,height:364})})]}))}var de=r(17551),he=["title","total","icon","color","sx"],ue=(0,B.ZP)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3)}}));function xe(e){var t=e.title,r=e.total,i=e.icon,n=e.color,a=void 0===n?"primary":n,s=e.sx,o=(0,x.Z)(e,he);return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({sx:(0,u.Z)({py:5,boxShadow:0,textAlign:"center",color:function(e){return e.palette[a].darker},bgcolor:function(e){return e.palette[a].lighter}},s)},o),{},{children:[(0,S.jsx)(ue,{sx:{color:function(e){return e.palette[a].dark},backgroundImage:function(e){return"linear-gradient(135deg, ".concat((0,de.Fq)(e.palette[a].dark,0)," 0%, ").concat((0,de.Fq)(e.palette[a].dark,.24)," 100%)")}},children:(0,S.jsx)(k.Z,{icon:i,width:24,height:24})}),(0,S.jsx)(l.Z,{variant:"h3",children:(0,G.v1)(r)}),(0,S.jsx)(l.Z,{variant:"subtitle2",sx:{opacity:.72},children:t})]}))}var pe=["title","subheader","chartData","chartColors","chartLabels"],me=(0,B.ZP)("div")((function(e){var t=e.theme;return{height:392,marginTop:t.spacing(2),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(320,"px) !important")}}}));function Ze(e){var t=e.title,r=e.subheader,i=e.chartData,n=e.chartColors,a=e.chartLabels,l=(0,x.Z)(e,pe),s=H()((0,U.F)(),{stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,horizontalAlign:"center"},xaxis:{categories:a,labels:{style:{colors:n}}}});return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({},l),{},{children:[(0,S.jsx)(f.Z,{title:t,subheader:r}),(0,S.jsx)(me,{dir:"ltr",children:(0,S.jsx)(K.Z,{type:"radar",series:i,options:s,height:340})})]}))}var fe=["title","subheader","chartData"];function je(e){var t=e.title,r=e.subheader,i=e.chartData,n=(0,x.Z)(e,fe),a=i.map((function(e){return e.label})),l=i.map((function(e){return e.value})),s=H()((0,U.F)(),{tooltip:{marker:{show:!1},y:{formatter:function(e){return(0,G.FK)(e)},title:{formatter:function(){return""}}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:a}});return(0,S.jsxs)(Z.Z,(0,u.Z)((0,u.Z)({},n),{},{children:[(0,S.jsx)(f.Z,{title:t,subheader:r}),(0,S.jsx)(A.Z,{sx:{mx:3},dir:"ltr",children:(0,S.jsx)(K.Z,{type:"bar",series:[{data:l}],options:s,height:364})})]}))}function ge(){var e=(0,n.Z)(),t=(0,o.Z)().themeStretch;return(0,S.jsx)(d.Z,{title:"General: Analytics",children:(0,S.jsxs)(a.Z,{maxWidth:!t&&"xl",children:[(0,S.jsx)(l.Z,{variant:"h4",sx:{mb:5},children:"Hi, Welcome back"}),(0,S.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,S.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,S.jsx)(xe,{title:"Weekly Sales",total:714e3,icon:"ant-design:android-filled"})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,S.jsx)(xe,{title:"New Users",total:1352831,color:"info",icon:"ant-design:apple-filled"})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,S.jsx)(xe,{title:"Item Orders",total:1723315,color:"warning",icon:"ant-design:windows-filled"})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,S.jsx)(xe,{title:"Bug Reports",total:234,color:"error",icon:"ant-design:bug-filled"})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,S.jsx)(ce,{title:"Website Visits",subheader:"(+43%) than last year",chartLabels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],chartData:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,S.jsx)(N,{title:"Current Visits",chartData:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}],chartColors:[e.palette.primary.main,e.palette.chart.blue[0],e.palette.chart.violet[0],e.palette.chart.yellow[0]]})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,S.jsx)(je,{title:"Conversion Rates",subheader:"(+43%) than last year",chartData:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,S.jsx)(Ze,{title:"Current Subject",chartLabels:["English","History","Physics","Geography","Chinese","Math"],chartData:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}],chartColors:(0,i.Z)(Array(6)).map((function(){return e.palette.text.secondary}))})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,S.jsx)(R,{title:"News Update",list:c.SH})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,S.jsx)(ie,{title:"Order Timeline",list:c.ZP})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,S.jsx)(se,{title:"Traffic by Site",list:c.$O})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,S.jsx)(M,{title:"Tasks",list:[{id:"1",label:"Create FireStone Logo"},{id:"2",label:"Add SCSS and JS files if required"},{id:"3",label:"Stakeholder Meeting"},{id:"4",label:"Scoping & Estimations"},{id:"5",label:"Sprint Showcase"}]})})]})]})})}},75868:function(e,t,r){r.d(t,{Mu:function(){return a},zM:function(){return l},Pp:function(){return s},DY:function(){return o}});var i=r(89600),n=r(98495);function a(e){return(0,i.Z)(new Date(e),"dd MMMM yyyy")}function l(e){return(0,i.Z)(new Date(e),"dd MMM yyyy HH:mm")}function s(e){return(0,i.Z)(new Date(e),"dd/MM/yyyy hh:mm p")}function o(e){return(0,n.Z)(new Date(e),{addSuffix:!0})}}}]);