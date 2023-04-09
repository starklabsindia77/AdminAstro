"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[6404],{86404:function(e,r,n){n.r(r),n.d(r,{default:function(){return L}});var o=n(88564),t=n(43265),i=n(61113),s=n(57829),a=n(47723),c=n(33896),d=n(71361),l=n(1413),u=n(15861),m=n(29439),f=n(87757),x=n.n(f),p=n(28089),h=n(58908),v=n(97890),Z=n(47313),g=n(75627),j=n(1432),w=n(35898),q=n(49914),b=n(15480),y=n(41727),C=n(47131),_=n(32703),P=n(48175),k=n(42593),S=n(40844),E=n(46417);function D(){var e=(0,v.s0)(),r=(0,h.Ds)().enqueueSnackbar,n=(0,Z.useState)(!1),o=(0,m.Z)(n,2),t=o[0],i=o[1],s=sessionStorage.getItem("email-recovery"),a=p.Ry().shape({code1:p.Z_().required("Code is required"),code2:p.Z_().required("Code is required"),code3:p.Z_().required("Code is required"),code4:p.Z_().required("Code is required"),code5:p.Z_().required("Code is required"),code6:p.Z_().required("Code is required"),email:p.Z_().email("Email must be a valid email address").required("Email is required"),password:p.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:p.Z_().required("Confirm password is required").oneOf([p.iH("password"),null],"Passwords must match")}),c={code1:"",code2:"",code3:"",code4:"",code5:"",code6:"",email:s||"",password:"",confirmPassword:""},d=(0,g.cI)({mode:"all",resolver:(0,j.X)(a),defaultValues:c}),f=d.control,D=d.setValue,A=d.handleSubmit,I=d.formState,L=I.isSubmitting,N=I.errors;(0,Z.useEffect)((function(){var e=document.querySelector("input.field-code");return null===e||void 0===e||e.addEventListener("paste",R),function(){null===e||void 0===e||e.removeEventListener("paste",R)}}),[]);var R=function(e){var r=e.clipboardData.getData("text");r=r.split(""),[].forEach.call(document.querySelectorAll(".field-code"),(function(e,n){e.value=r[n];var o="code".concat(n+1);D(o,r[n])})),e.preventDefault()},V=function(){var n=(0,u.Z)(x().mark((function n(o){return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.log("data:",{email:o.email,code:"".concat(o.code1).concat(o.code2).concat(o.code3).concat(o.code4).concat(o.code5).concat(o.code6),password:o.password}),sessionStorage.removeItem("email-recovery"),r("Change password success!"),e(P.vB.root,{replace:!0}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,E.jsx)(S.RV,{methods:d,onSubmit:A(V),children:(0,E.jsxs)(w.Z,{spacing:3,children:[(0,E.jsx)(S.au,{name:"email",label:"Email",disabled:!!s}),(0,E.jsx)(w.Z,{direction:"row",spacing:2,justifyContent:"center",children:["code1","code2","code3","code4","code5","code6"].map((function(e,r){return(0,E.jsx)(g.Qr,{name:"code".concat(r+1),control:f,render:function(e){var n=e.field,o=e.fieldState.error;return(0,E.jsx)(q.Z,(0,l.Z)((0,l.Z)({},n),{},{error:!!o,autoFocus:0===r,placeholder:"-",onChange:function(e){return function(e,r){var n=e.target,o=n.maxLength,t=n.value,i=n.name.replace("code",""),s=Number(i);if(t.length>=o&&s<6){var a=document.querySelector("input[name=code".concat(s+1,"]"));null!==a&&a.focus()}r(e)}(e,n.onChange)},inputProps:{className:"field-code",maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}))}},e)}))}),(!!N.code1||!!N.code2||!!N.code3||!!N.code4||!!N.code5||!!N.code6)&&(0,E.jsx)(b.Z,{error:!0,sx:{px:2},children:"Code is required"}),(0,E.jsx)(S.au,{name:"password",label:"Password",type:t?"text":"password",InputProps:{endAdornment:(0,E.jsx)(y.Z,{position:"end",children:(0,E.jsx)(C.Z,{onClick:function(){return i(!t)},edge:"end",children:(0,E.jsx)(k.Z,{icon:t?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,E.jsx)(S.au,{name:"confirmPassword",label:"Confirm New Password",type:t?"text":"password",InputProps:{endAdornment:(0,E.jsx)(y.Z,{position:"end",children:(0,E.jsx)(C.Z,{onClick:function(){return i(!t)},edge:"end",children:(0,E.jsx)(k.Z,{icon:t?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,E.jsx)(_.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:L,sx:{mt:3},children:"Change password"})]})})}var A=n(64092),I=(0,o.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",minHeight:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",padding:e.theme.spacing(12,0)}}));function L(){return(0,E.jsxs)(d.Z,{title:"New Password",children:[(0,E.jsx)(c.Z,{}),(0,E.jsx)(t.Z,{children:(0,E.jsxs)(I,{sx:{textAlign:"center"},children:[(0,E.jsx)(A.Jg,{sx:{mb:5,mx:"auto",height:120}}),(0,E.jsx)(i.Z,{variant:"h3",gutterBottom:!0,children:"Request sent successfully!"}),(0,E.jsxs)(i.Z,{sx:{color:"text.secondary"},children:["We've sent a 6-digit confirmation email to your email.",(0,E.jsx)("br",{}),"Please enter the code in below box to verify your email."]}),(0,E.jsx)(s.Z,{sx:{mt:5,mb:3},children:(0,E.jsx)(D,{})}),(0,E.jsxs)(i.Z,{variant:"body2",children:["Don\u2019t have a code? \xa0",(0,E.jsx)(a.Z,{variant:"subtitle2",onClick:function(){},children:"Resend code"})]})]})})]})}}}]);