"use strict";(self.webpackChunkastroscore=self.webpackChunkastroscore||[]).push([[6337],{18456:function(e,n,a){a.d(n,{Z:function(){return h}});var i=a(1413),s=a(45987),r=a(64554),t=a(20890),o=a(23060),l=a(43504),d=a(93517),u=a(80184),c=["links","activeLast"];function x(e){var n=e.links,a=e.activeLast,o=void 0!==a&&a,l=(0,s.Z)(e,c),x=n[n.length-1].name,m=n.map((function(e){return(0,u.jsx)(v,{link:e},e.name)})),h=n.map((function(e){return(0,u.jsx)("div",{children:e.name!==x?(0,u.jsx)(v,{link:e}):(0,u.jsx)(t.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return(0,u.jsx)(d.Z,(0,i.Z)((0,i.Z)({separator:(0,u.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l),{},{children:o?m:h}))}function v(e){var n=e.link,a=n.href,i=n.name,s=n.icon;return(0,u.jsxs)(o.Z,{variant:"body2",component:l.rU,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,u.jsx)(r.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),i]},i)}var m=["links","action","heading","moreLink","sx"];function h(e){var n=e.links,a=e.action,l=e.heading,d=e.moreLink,c=void 0===d?[]:d,v=e.sx,h=(0,s.Z)(e,m);return(0,u.jsxs)(r.Z,{sx:(0,i.Z)({mb:5},v),children:[(0,u.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,u.jsxs)(r.Z,{sx:{flexGrow:1},children:[(0,u.jsx)(t.Z,{variant:"h4",gutterBottom:!0,children:l}),(0,u.jsx)(x,(0,i.Z)({links:n},h))]}),a&&(0,u.jsx)(r.Z,{sx:{flexShrink:0},children:a})]}),(0,u.jsx)(r.Z,{sx:{mt:2},children:"string"===typeof c?(0,u.jsx)(o.Z,{href:c,target:"_blank",rel:"noopener",variant:"body2",children:c}):c.map((function(e){return(0,u.jsx)(o.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},73024:function(e,n,a){a.d(n,{Z:function(){return r}});var i=a(29439),s=a(72791);function r(e){var n=(0,s.useState)(e||""),a=(0,i.Z)(n,2),r=a[0],t=a[1];return{currentTab:r,onChangeTab:function(e,n){t(n)},setCurrentTab:t}}},96337:function(e,n,a){a.r(n),a.d(n,{default:function(){return O}});var i=a(15861),s=a(29439),r=a(64687),t=a.n(r),o=a(75952),l=a(72791),d=a(26445),u=a(2101),c=a(43896),x=a(64554),v=a(38072),m=a(73024),h=a(85703),p=a(50098),f=a(25212),b=a(53026),j=a(18456),Z=a(80184);a(5977);var g=a(7870);var w=a(62797),y=a(98246),k=a(61265),P=a(61134),S=a(57621),C=a(53767),N=a(39709),R=a(65390);function A(){var e=(0,y.Ds)().enqueueSnackbar,n=w.Ry().shape({oldPassword:w.Z_().required("Old Password is required"),newPassword:w.Z_().min(6,"Password must be at least 6 characters").required("New Password is required"),confirmNewPassword:w.Z_().oneOf([w.iH("newPassword"),null],"Passwords must match")}),a=(0,P.cI)({resolver:(0,k.X)(n),defaultValues:{oldPassword:"",newPassword:"",confirmNewPassword:""}}),s=a.reset,r=a.handleSubmit,o=a.formState.isSubmitting,l=function(){var n=(0,i.Z)(t().mark((function n(){return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:s(),e("Update success!"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,Z.jsx)(S.Z,{sx:{p:3},children:(0,Z.jsx)(R.RV,{methods:a,onSubmit:r(l),children:(0,Z.jsxs)(C.Z,{spacing:3,alignItems:"flex-end",children:[(0,Z.jsx)(R.au,{name:"oldPassword",type:"password",label:"Old Password"}),(0,Z.jsx)(R.au,{name:"newPassword",type:"password",label:"New Password"}),(0,Z.jsx)(R.au,{name:"confirmNewPassword",type:"password",label:"Confirm New Password"}),(0,Z.jsx)(N.Z,{type:"submit",variant:"contained",loading:o,children:"Save Changes"})]})})})}var L=a(1413),U=a(61889),I=a(20890),T=a(27760),_=a(17834),q=a(89731),z=a(77103);function B(e){var n=e.user,a=((0,y.Ds)().enqueueSnackbar,(0,l.useState)()),r=(0,s.Z)(a,2),o=r[0],d=r[1];(0,l.useEffect)((function(){d({displayName:(null===n||void 0===n?void 0:n.displayName)||"",email:(null===n||void 0===n?void 0:n.email)||"",photoURL:(null===n||void 0===n?void 0:n.photoURL)||"",mobileNo:(null===n||void 0===n?void 0:n.mobileNo)||"",country:(null===n||void 0===n?void 0:n.country)||"",address:(null===n||void 0===n?void 0:n.address)||"",state:(null===n||void 0===n?void 0:n.state)||"",city:(null===n||void 0===n?void 0:n.city)||"",zipCode:(null===n||void 0===n?void 0:n.zipCode)||"",bio:(null===n||void 0===n?void 0:n.bio)||"",skill:(null===n||void 0===n?void 0:n.skill)||"",isPublic:(null===n||void 0===n?void 0:n.isPublic)||!0})}),[n.expertId]),console.log("defaultValues",o);var u=(0,P.cI)({defaultValues:o}),c=u.setValue,v=u.handleSubmit,m=u.formState.isSubmitting,h=function(){var e=(0,i.Z)(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("update Data",n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=(0,l.useCallback)((function(e){var n=e[0];n&&c("photoURL",Object.assign(n,{preview:URL.createObjectURL(n)}))}),[c]);return(0,Z.jsx)(R.RV,{methods:u,onSubmit:v(h),children:(0,Z.jsxs)(U.ZP,{container:!0,spacing:3,children:[(0,Z.jsx)(U.ZP,{item:!0,xs:12,md:4,children:(0,Z.jsxs)(S.Z,{sx:{py:10,px:3,textAlign:"center"},children:[(0,Z.jsx)(R.sX,{name:"photoURL",accept:"image/*",maxSize:3145728,onDrop:f,helperText:(0,Z.jsxs)(I.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,Z.jsx)("br",{})," max size of ",(0,g.oe)(3145728)]})}),(0,Z.jsx)(R._e,{name:"isPublic",labelPlacement:"start",value:null===o||void 0===o?void 0:o.isPublic,label:"Public Profile",sx:{mt:5}})]})}),(0,Z.jsx)(U.ZP,{item:!0,xs:12,md:8,children:(0,Z.jsxs)(S.Z,{sx:{p:3},children:[(0,Z.jsxs)(x.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,Z.jsx)(T.Z,{name:"displayName",label:"Name",value:null===o||void 0===o?void 0:o.displayName,onChange:function(e){return c("displayName",e.target.value)}}),(0,Z.jsx)(R.au,{name:"email",label:"Email Address",value:null===o||void 0===o?void 0:o.email}),(0,Z.jsx)(R.au,{name:"mobileNo",label:"Phone Number",value:null===o||void 0===o?void 0:o.mobileNo}),(0,Z.jsx)(R.au,{name:"address",label:"Address",value:null===o||void 0===o?void 0:o.address}),(0,Z.jsx)(P.Qr,{name:"country",render:function(e){var n=e.field;return(0,Z.jsxs)(T.Z,(0,L.Z)((0,L.Z)({},n),{},{label:"Country",select:!0,fullWidth:!0,SelectProps:{native:!0},children:[(0,Z.jsx)("option",{value:""}),p.hW.map((function(e){return(0,Z.jsx)("option",{value:e.label,children:e.label},e.code)}))]}))}}),(0,Z.jsx)(R.au,{name:"state",label:"State/Region",value:null===o||void 0===o?void 0:o.state}),(0,Z.jsx)(R.au,{name:"city",label:"City",value:null===o||void 0===o?void 0:o.city}),(0,Z.jsx)(R.au,{name:"zipCode",label:"Zip/Code",value:null===o||void 0===o?void 0:o.zipCode})]}),(0,Z.jsxs)(C.Z,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:["Admin"!==n.role?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(R.au,{name:"skill",multiline:!0,rows:4,label:"Skill"}),(0,Z.jsx)(R.au,{name:"bio",multiline:!0,rows:4,label:"Bio"})]}):null,(0,Z.jsx)(N.Z,{type:"submit",variant:"contained",loading:m,children:"Save Changes"})]})]})})]})})}b.Z,b.Z,b.Z,b.Z;function O(){var e=(0,h.Z)().themeStretch,n=(0,_.Z)().user,a=(0,l.useState)({}),r=(0,s.Z)(a,2),p=r[0],g=r[1],w=(0,l.useState)([{value:"general",icon:(0,Z.jsx)(b.Z,{icon:"ic:round-account-box",width:20,height:20}),component:(0,Z.jsx)(B,{user:"Admin"===n.role?n:p})},{value:"change_password",icon:(0,Z.jsx)(b.Z,{icon:"ic:round-vpn-key",width:20,height:20}),component:(0,Z.jsx)(A,{})}]),y=(0,s.Z)(w,2),k=y[0],P=y[1];(0,l.useEffect)((0,i.Z)(t().mark((function e(){var a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("accessToken"))||!(0,z.w)(a)){e.next=8;break}return(0,z.K)(a),e.next=5,q.Z.get("/expert/".concat(n.id));case 5:i=e.sent,console.log("res1",i),g(i.data.user);case 8:case"end":return e.stop()}}),e)}))),[n.id]),(0,l.useEffect)((function(){P([{value:"general",icon:(0,Z.jsx)(b.Z,{icon:"ic:round-account-box",width:20,height:20}),component:(0,Z.jsx)(B,{user:p})},{value:"change_password",icon:(0,Z.jsx)(b.Z,{icon:"ic:round-vpn-key",width:20,height:20}),component:(0,Z.jsx)(A,{})}])}),[p]);var S=(0,m.Z)("general"),C=S.currentTab,N=S.onChangeTab;b.Z,n.role,b.Z;return(0,Z.jsx)(f.Z,{title:"User: Account Settings",children:(0,Z.jsxs)(d.Z,{maxWidth:!e&&"lg",children:[(0,Z.jsx)(j.Z,{heading:"Account",links:[{name:"Dashboard",href:v.vB.root},{name:"User",href:v.vB.user.root},{name:"Account Settings"}]}),(0,Z.jsx)(u.Z,{allowScrollButtonsMobile:!0,variant:"scrollable",scrollButtons:"auto",value:C,onChange:N,children:k.map((function(e){return(0,Z.jsx)(c.Z,{disableRipple:!0,label:(0,o.I)(e.value),icon:e.icon,value:e.value},e.value)}))}),(0,Z.jsx)(x.Z,{sx:{mb:5}}),k.map((function(e){return e.value===C&&(0,Z.jsx)(x.Z,{children:e.component},e.value)}))]})})}}}]);
//# sourceMappingURL=6337.e60ad0db.chunk.js.map