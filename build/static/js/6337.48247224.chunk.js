"use strict";(self.webpackChunkastroscore=self.webpackChunkastroscore||[]).push([[6337],{18456:function(e,n,a){a.d(n,{Z:function(){return h}});var s=a(1413),r=a(45987),i=a(64554),t=a(20890),o=a(23060),l=a(43504),d=a(93517),c=a(80184),u=["links","activeLast"];function m(e){var n=e.links,a=e.activeLast,o=void 0!==a&&a,l=(0,r.Z)(e,u),m=n[n.length-1].name,p=n.map((function(e){return(0,c.jsx)(x,{link:e},e.name)})),h=n.map((function(e){return(0,c.jsx)("div",{children:e.name!==m?(0,c.jsx)(x,{link:e}):(0,c.jsx)(t.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:m})},e.name)}));return(0,c.jsx)(d.Z,(0,s.Z)((0,s.Z)({separator:(0,c.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{},{children:o?p:h}))}function x(e){var n=e.link,a=n.href,s=n.name,r=n.icon;return(0,c.jsxs)(o.Z,{variant:"body2",component:l.rU,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[r&&(0,c.jsx)(i.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:r}),s]},s)}var p=["links","action","heading","moreLink","sx"];function h(e){var n=e.links,a=e.action,l=e.heading,d=e.moreLink,u=void 0===d?[]:d,x=e.sx,h=(0,r.Z)(e,p);return(0,c.jsxs)(i.Z,{sx:(0,s.Z)({mb:5},x),children:[(0,c.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,c.jsx)(t.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,c.jsx)(m,(0,s.Z)({links:n},h))]}),a&&(0,c.jsx)(i.Z,{sx:{flexShrink:0},children:a})]}),(0,c.jsx)(i.Z,{sx:{mt:2},children:"string"===typeof u?(0,c.jsx)(o.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,c.jsx)(o.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},73024:function(e,n,a){a.d(n,{Z:function(){return i}});var s=a(29439),r=a(72791);function i(e){var n=(0,r.useState)(e||""),a=(0,s.Z)(n,2),i=a[0],t=a[1];return{currentTab:i,onChangeTab:function(e,n){t(n)},setCurrentTab:t}}},96337:function(e,n,a){a.r(n),a.d(n,{default:function(){return _}});var s=a(75952),r=a(72791),i=a(26445),t=a(2101),o=a(43896),l=a(64554),d=a(38072),c=a(73024),u=a(85703),m=a(23434),x=a(25212),p=a(53026),h=a(18456),v=a(80184);a(5977);var b=a(7870);var f=a(15861),j=a(64687),Z=a.n(j),w=a(62797),g=a(98246),y=a(61265),k=a(61134),P=a(57621),N=a(53767),S=a(39709),C=a(77353);function R(){var e=(0,g.Ds)().enqueueSnackbar,n=w.Ry().shape({oldPassword:w.Z_().required("Old Password is required"),newPassword:w.Z_().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:w.Z_().oneOf([w.iH("newPassword"),null],"Passwords must match")}),a=(0,k.cI)({resolver:(0,y.X)(n),defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""}}),s=a.reset,r=a.handleSubmit,i=a.formState.isSubmitting,t=function(){var n=(0,f.Z)(Z().mark((function n(){return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:s(),e("Update success!"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,v.jsx)(P.Z,{sx:{p:3},children:(0,v.jsx)(C.RV,{methods:a,onSubmit:r(t),children:(0,v.jsxs)(N.Z,{spacing:3,alignItems:"flex-end",children:[(0,v.jsx)(C.au,{name:"oldPassword",type:"password",label:"Old Password"}),(0,v.jsx)(C.au,{name:"newPassword",type:"password",label:"New Password"}),(0,v.jsx)(C.au,{name:"confirmNewPassword",type:"password",label:"Confirm New Password"}),(0,v.jsx)(S.Z,{type:"submit",variant:"contained",loading:i,children:"Save Changes"})]})})})}var L=a(61889),A=a(20890),U=a(17834),q=a(89731);a(77103);function T(){var e=(0,g.Ds)().enqueueSnackbar,n=(0,U.Z)().user,a=w.Ry().shape({displayName:w.Z_().required("Name is required")}),s={displayName:(null===n||void 0===n?void 0:n.displayName)||"",email:(null===n||void 0===n?void 0:n.email)||"",firstName:(null===n||void 0===n?void 0:n.firstName)||"",lastName:(null===n||void 0===n?void 0:n.lastName)||"",photoURL:(null===n||void 0===n?void 0:n.photoURL)||"",mobileNo:(null===n||void 0===n?void 0:n.mobileNo)||"",country:(null===n||void 0===n?void 0:n.country)||"",address:(null===n||void 0===n?void 0:n.address)||"",state:(null===n||void 0===n?void 0:n.state)||"",city:(null===n||void 0===n?void 0:n.city)||"",zipCode:(null===n||void 0===n?void 0:n.zipCode)||"",skill:(null===n||void 0===n?void 0:n.skill)||"",bio:(null===n||void 0===n?void 0:n.bio)||"",isPublic:(null===n||void 0===n?void 0:n.isPublic)||!1},i=(0,k.cI)({resolver:(0,y.X)(a),defaultValues:s}),t=i.setValue,o=i.handleSubmit,d=i.formState.isSubmitting,c=function(){var a=(0,f.Z)(Z().mark((function a(s){return Z().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q.Z.put("/adminupdate/".concat(null===n||void 0===n?void 0:n.id),s);case 3:e("Update success!"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.error(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}(),u=(0,r.useCallback)((function(e){var n=e[0];n&&t("photoURL",Object.assign(n,{preview:URL.createObjectURL(n)}))}),[t]);return(0,v.jsx)(C.RV,{methods:i,onSubmit:o(c),children:(0,v.jsxs)(L.ZP,{container:!0,spacing:3,children:[(0,v.jsx)(L.ZP,{item:!0,xs:12,md:4,children:(0,v.jsxs)(P.Z,{sx:{py:10,px:3,textAlign:"center"},children:[(0,v.jsx)(C.sX,{name:"photoURL",accept:"image/*",maxSize:3145728,onDrop:u,helperText:(0,v.jsxs)(A.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,v.jsx)("br",{})," max size of ",(0,b.oe)(3145728)]})}),(0,v.jsx)(C._e,{name:"isPublic",labelPlacement:"start",label:"Public Profile",sx:{mt:5}})]})}),(0,v.jsx)(L.ZP,{item:!0,xs:12,md:8,children:(0,v.jsxs)(P.Z,{sx:{p:3},children:[(0,v.jsxs)(l.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,v.jsx)(C.au,{name:"firstName",label:"First Name"}),(0,v.jsx)(C.au,{name:"lastName",label:"Last Name"}),(0,v.jsx)(C.au,{name:"displayName",label:"Full Name"}),(0,v.jsx)(C.au,{name:"email",label:"Email Address"}),(0,v.jsx)(C.au,{name:"mobileNo",label:"Phone Number"}),(0,v.jsx)(C.au,{name:"address",label:"Address"}),(0,v.jsxs)(C.Cc,{name:"country",label:"Country",placeholder:"Country",children:[(0,v.jsx)("option",{value:""}),m.hW.map((function(e){return(0,v.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),(0,v.jsx)(C.au,{name:"state",label:"State/Region"}),(0,v.jsx)(C.au,{name:"city",label:"City"}),(0,v.jsx)(C.au,{name:"zipCode",label:"Zip/Code"})]}),(0,v.jsx)(N.Z,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:(0,v.jsx)(S.Z,{type:"submit",variant:"contained",loading:d,children:"Save Changes"})})]})})]})})}p.Z,p.Z,p.Z,p.Z;function _(){var e=(0,u.Z)().themeStretch,n=(0,c.Z)("general"),a=n.currentTab,r=n.onChangeTab,m=[{value:"general",icon:(0,v.jsx)(p.Z,{icon:"ic:round-account-box",width:20,height:20}),component:(0,v.jsx)(T,{})},{value:"change_password",icon:(0,v.jsx)(p.Z,{icon:"ic:round-vpn-key",width:20,height:20}),component:(0,v.jsx)(R,{})}];return(0,v.jsx)(x.Z,{title:"Admin: Account Settings",children:(0,v.jsxs)(i.Z,{maxWidth:!e&&"lg",children:[(0,v.jsx)(h.Z,{heading:"Account",links:[{name:"Dashboard",href:d.vB.root},{name:"Admin",href:d.vB.user.root},{name:"Account Settings"}]}),(0,v.jsx)(t.Z,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:a,onChange:r,children:m.map((function(e){return(0,v.jsx)(o.Z,{disableRipple:!0,label:(0,s.I)(e.value),icon:e.icon,value:e.value},e.value)}))}),(0,v.jsx)(l.Z,{sx:{mb:5}}),m.map((function(e){return e.value===a&&(0,v.jsx)(l.Z,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=6337.48247224.chunk.js.map