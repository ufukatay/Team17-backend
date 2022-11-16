(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(20),c=r.n(n),s=r(7),o=r(37),i=r(64),l=r(63),u=r(29),d="USER_LOGIN_REQUEST",j="USER_LOGIN_SUCCESS",p="USER_LOGIN_FAIL",b="USER_LOGOUT",h="USER_REGISTER_REQUEST",O="USER_REGISTER_SUCCESS",f="USER_REGISTER_FAIL",x="USER_DETAILS_REQUEST",g="USER_DETAILS_SUCCESS",y="USER_DETAILS_FAIL",m="USER_DETAILS_RESET",v="USER_UPDATE_PROFILE_REQUEST",E="USER_UPDATE_PROFILE_SUCCESS",S="USER_UPDATE_PROFILE_FAIL",I="USER_UPDATE_PROFILE_RESET",_="USER_LIST_REQUEST",L="USER_LIST_SUCCESS",C="USER_LIST_FAIL",U="USER_LIST_RESET",R="USER_DELETE_REQUEST",w="USER_DELETE_SUCCESS",k="USER_DELETE_FAIL",T="USER_UPDATE_REQUEST",A="USER_UPDATE_SUCCESS",P="USER_UPDATE_FAIL",D="USER_UPDATE_RESET",N="USER_MYDETAILS_REQUEST",G="USER_MYDETAILS_SUCCESS",F="USER_MYDETAILS_FAIL",M="USER_MYDETAILS_RESET",Y="USER_UPDATE_MYPROFILE_REQUEST",B="USER_UPDATE_MYPROFILE_SUCCESS",q="USER_UPDATE_MYPROFILE_FAIL",Q="USER_UPDATE_MYPROFILE_RESET",z="USER_MYLIST_REQUEST",J="USER_MYLIST_SUCCESS",H="USER_MYLIST_FAIL",K="USER_MYLIST_RESET",W=Object(o.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{loading:!0};case j:return{loading:!1,userInfo:t.payload};case p:return{loading:!1,error:t.payload};case b:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0};case O:return{loading:!1,userInfo:t.payload};case f:return{loading:!1,error:t.payload};case b:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case g:return{loading:!1,user:t.payload};case y:return{loading:!1,error:t.payload};case m:return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case E:return{loading:!1,success:!0,userInfo:t.payload};case S:return{loading:!1,error:t.payload};case I:return{};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{loading:!0};case L:return{loading:!1,users:t.payload};case C:return{loading:!1,error:t.payload};case U:return{users:[]};default:return e}},userDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return{loading:!0};case w:return{loading:!1,success:!0};case k:return{loading:!1,error:t.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case A:return{loading:!1,success:!0};case P:return{loading:!1,error:t.payload};case D:return{user:{}};default:return e}},usermyDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{Myuser:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case G:return{loading:!1,Myuser:t.payload};case F:return{loading:!1,error:t.payload};case M:return{Myuser:{}};default:return e}},usermyUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{Myuser:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case B:return{loading:!1,success:!0};case q:return{loading:!1,error:t.payload};case Q:return{Myuser:{}};default:return e}},usermyList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{Myusers:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{loading:!0};case J:return{loading:!1,users:t.payload};case H:return{loading:!1,error:t.payload};case K:return{Myusers:[]};default:return e}}}),V={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},X=[i.a],Z=Object(o.createStore)(W,V,Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,X))),$=(r(77),r(78),r(113)),ee=r(18),te=r(9),re=r(119),ae=r(120),ne=r(117),ce=r(19),se=r(10),oe=r(22),ie=r(23),le=r.n(ie),ue=function(e){return function(){var t=Object(oe.a)(Object(se.a)().mark((function t(r,a){var n,c,s,o,i;return Object(se.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:x}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,le.a.get("/api/users/".concat(e,"/"),s);case 6:o=t.sent,i=o.data,r({type:g,payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:y,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()},de=r(1);var je=function(){var e=Object(s.c)((function(e){return e.userLogin})).userInfo,t=Object(s.b)();return Object(de.jsx)("header",{children:Object(de.jsx)(re.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(de.jsxs)($.a,{children:[Object(de.jsx)(ce.LinkContainer,{to:"/",children:Object(de.jsx)(re.a.Brand,{children:"Fanatika"})}),Object(de.jsx)(re.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(de.jsx)(re.a.Collapse,{id:"basic-navbar-nav",children:Object(de.jsxs)(ae.a,{className:"ml-auto",children:[e?Object(de.jsxs)(ne.a,{title:e.name,id:"username",children:[Object(de.jsx)(ce.LinkContainer,{to:"/profile",children:Object(de.jsx)(ne.a.Item,{children:"Account Profile"})}),Object(de.jsx)(ce.LinkContainer,{to:"/my/profile",children:Object(de.jsx)(ne.a.Item,{children:"My Profile"})}),Object(de.jsx)(ne.a.Item,{onClick:function(){t((function(e){localStorage.removeItem("userInfo"),e({type:b}),e({type:m}),e({type:U}),e({type:M})}))},children:"Logout"})]}):Object(de.jsx)(ce.LinkContainer,{to:"/login",children:Object(de.jsxs)(ae.a.Link,{children:[Object(de.jsx)("i",{className:"fas fa-user"}),"Login"]})}),e&&e.isAdmin&&Object(de.jsx)(ne.a,{title:"Admin",id:"adminmenue",children:Object(de.jsx)(ce.LinkContainer,{to:"/admin/userlist",children:Object(de.jsx)(ne.a.Item,{children:"Users"})})})]})})]})})})},pe=r(114),be=r(68);var he=function(){return Object(de.jsx)("footer",{children:Object(de.jsx)($.a,{children:Object(de.jsx)(pe.a,{children:Object(de.jsx)(be.a,{className:"text-center py-3",children:"\xa9 2022 Fanatika,Inc. Her hakk\u0131 sakl\u0131d\u0131r"})})})})},Oe=r(115);var fe=function(){return Object(de.jsx)(Oe.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",margin:"auto",display:"block"},children:Object(de.jsx)("span",{className:"sr-only",children:"Loading..."})})},xe=r(121);var ge=function(e){var t=e.variant,r=e.children;return Object(de.jsx)(xe.a,{variant:t,children:r})},ye=r(69),me=r(122);var ve=function(e){var t=e.pages,r=e.page,a=e.keyword,n=void 0===a?"":a,c=e.isAdmin,s=void 0!==c&&c;return n&&(n=n.split("?keyword=")[1].split("&")[0]),t>1&&Object(de.jsx)(me.a,{children:Object(ye.a)(Array(t).keys()).map((function(e){return Object(de.jsx)(ce.LinkContainer,{to:s?"/admin/productlist/?keyword=".concat(n,"&page=").concat(e+1):"/?keyword=".concat(n,"&page=").concat(e+1),children:Object(de.jsx)(me.a.Item,{active:e+1===r,children:e+1})},e+1)}))})};var Ee=function(e){var t=e.history,r=Object(s.b)(),n=Object(s.c)((function(e){return e})),c=n.error,o=n.loading,i=n.page,l=n.pages,u=t.location.search;return Object(a.useEffect)((function(){}),[r,u]),Object(de.jsxs)("div",{children:[Object(de.jsx)("h1",{style:{position:"absolute",left:800},children:"Futbolun Kalbinde Sen de Yer Al"}),o?Object(de.jsx)(fe,{}):c?Object(de.jsx)(ge,{variant:"danger",children:c}):Object(de.jsxs)("div",{children:[Object(de.jsx)(pe.a,{}),Object(de.jsx)(ve,{page:i,pages:l,keyword:u})]})]})},Se=r(8),Ie=r(118),_e=r(67);var Le=function(e){var t=e.children;return Object(de.jsx)($.a,{children:Object(de.jsx)(pe.a,{className:"justify-content-md-center",children:Object(de.jsx)(be.a,{xs:12,md:6,children:t})})})};var Ce=function(e){var t=e.location,r=e.history,n=Object(a.useState)(""),c=Object(Se.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(""),u=Object(Se.a)(l,2),b=u[0],h=u[1],O=Object(s.b)(),f=t.search?t.search.split("=")[1]:"/profile",x=Object(s.c)((function(e){return e.userLogin})),g=x.error,y=x.loading,m=x.userInfo;return Object(a.useEffect)((function(){m&&r.push(f)}),[r,m,f]),Object(de.jsxs)(Le,{children:[Object(de.jsx)("h1",{children:"Sign In"}),g&&Object(de.jsx)(ge,{variant:"danger",children:g}),y&&Object(de.jsx)(fe,{}),Object(de.jsxs)(Ie.a,{onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var r=Object(oe.a)(Object(se.a)().mark((function r(a){var n,c,s;return Object(se.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:d}),n={headers:{"Content-type":"application/json"}},r.next=5,le.a.post("/api/users/login/",{username:e,password:t},n);case 5:c=r.sent,s=c.data,a({type:j,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),a({type:p,payload:r.t0.response&&r.t0.response.data.detail?r.t0.response.data.detail:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(o,b))},children:[Object(de.jsxs)(Ie.a.Group,{controlId:"email",children:[Object(de.jsx)(Ie.a.Label,{children:"Email Address"}),Object(de.jsx)(Ie.a.Control,{type:"email",placeholder:"Enter Email",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"password",children:[Object(de.jsx)(Ie.a.Label,{children:"Password"}),Object(de.jsx)(Ie.a.Control,{type:"password",placeholder:"Enter Password",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(de.jsx)(_e.a,{type:"submit",variant:"primary",children:"Sign In"})]}),Object(de.jsx)(pe.a,{className:"py-3",children:Object(de.jsxs)(be.a,{children:["New Customer? ",Object(de.jsx)(ee.Link,{to:f?"/register?redirect=".concat(f):"/register",children:"Register"})]})})]})};var Ue=function(e){var t=e.location,r=e.history,n=Object(a.useState)(""),c=Object(Se.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(""),u=Object(Se.a)(l,2),d=u[0],p=u[1],b=Object(a.useState)(""),x=Object(Se.a)(b,2),g=x[0],y=x[1],m=Object(a.useState)(""),v=Object(Se.a)(m,2),E=v[0],S=v[1],I=Object(a.useState)(""),_=Object(Se.a)(I,2),L=_[0],C=_[1],U=Object(a.useState)(""),R=Object(Se.a)(U,2),w=R[0],k=R[1],T=Object(s.b)(),A=t.search?t.search.split("=")[1]:"/",P=Object(s.c)((function(e){return e.userRegister})),D=P.error,N=P.loading,G=P.userInfo;return Object(a.useEffect)((function(){G&&r.push(A)}),[r,G,A]),Object(de.jsxs)(Le,{children:[Object(de.jsx)("h1",{children:"Sign In"}),w&&Object(de.jsx)(ge,{variant:"danger",children:w}),D&&Object(de.jsx)(ge,{variant:"danger",children:D}),N&&Object(de.jsx)(fe,{}),Object(de.jsxs)(Ie.a,{onSubmit:function(e){e.preventDefault(),E!=L?k("Passwords do not match"):T(function(e,t,r,a){return function(){var n=Object(oe.a)(Object(se.a)().mark((function n(c){var s,o,i;return Object(se.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c({type:h}),s={headers:{"Content-type":"application/json"}},n.next=5,le.a.post("/api/users/register/",{name:e,email:t,team:r,password:a},s);case 5:o=n.sent,i=o.data,c({type:O,payload:i}),c({type:j,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),c({type:f,payload:n.t0.response&&n.t0.response.data.detail?n.t0.response.data.detail:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(o,d,g,E))},children:[Object(de.jsxs)(Ie.a.Group,{controlId:"name",children:[Object(de.jsx)(Ie.a.Label,{children:"Name"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"email",children:[Object(de.jsx)(Ie.a.Label,{children:"Email Address"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:d,onChange:function(e){return p(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"team",children:[Object(de.jsx)(Ie.a.Label,{children:"Your Team"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"team",placeholder:"Enter team",value:g,onChange:function(e){return y(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"password",children:[Object(de.jsx)(Ie.a.Label,{children:"Password"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:E,onChange:function(e){return S(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"passwordConfirm",children:[Object(de.jsx)(Ie.a.Label,{children:"Confirm Password"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"password",placeholder:"Confirm Password",value:L,onChange:function(e){return C(e.target.value)}})]}),Object(de.jsx)(_e.a,{type:"submit",variant:"primary",children:"Register"})]}),Object(de.jsx)(pe.a,{className:"py-3",children:Object(de.jsxs)(be.a,{children:["Have an Account? ",Object(de.jsx)(ee.Link,{to:A?"/login?redirect=".concat(A):"/login",children:"Sign In"})]})})]})};var Re=function(e){var t=e.history,r=Object(a.useState)(""),n=Object(Se.a)(r,2),c=n[0],o=n[1],i=Object(a.useState)(""),l=Object(Se.a)(i,2),u=l[0],d=l[1],p=Object(a.useState)(""),b=Object(Se.a)(p,2),h=b[0],O=b[1],f=Object(a.useState)(""),x=Object(Se.a)(f,2),g=x[0],y=x[1],m=Object(a.useState)(""),_=Object(Se.a)(m,2),L=_[0],C=_[1],U=Object(s.b)(),R=Object(s.c)((function(e){return e.userDetails})),w=R.error,k=R.loading,T=R.user,A=Object(s.c)((function(e){return e.userLogin})).userInfo,P=Object(s.c)((function(e){return e.userUpdateProfile})).success;return Object(a.useEffect)((function(){A?T&&T.name&&!P&&A._id===T._id?(o(T.name),d(T.email)):(U({type:I}),U(ue("profile"))):t.push("/login")}),[U,t,A,T,P]),Object(de.jsx)(pe.a,{children:Object(de.jsxs)(be.a,{md:3,children:[Object(de.jsx)("h2",{children:"User Profile"}),L&&Object(de.jsx)(ge,{variant:"danger",children:L}),w&&Object(de.jsx)(ge,{variant:"danger",children:w}),k&&Object(de.jsx)(fe,{}),Object(de.jsxs)(Ie.a,{onSubmit:function(e){e.preventDefault(),h!==g?C("Passwords do not match"):(U(function(e){return function(){var t=Object(oe.a)(Object(se.a)().mark((function t(r,a){var n,c,s,o,i;return Object(se.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:v}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,le.a.put("/api/users/profile/update/",e,s);case 6:o=t.sent,i=o.data,r({type:E,payload:i}),r({type:j,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),r({type:S,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,r){return t.apply(this,arguments)}}()}({id:T._id,name:c,email:u,password:h})),C(""))},children:[Object(de.jsxs)(Ie.a.Group,{controlId:"name",children:[Object(de.jsx)(Ie.a.Label,{children:"Name"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"email",children:[Object(de.jsx)(Ie.a.Label,{children:"Email Address"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"password",children:[Object(de.jsx)(Ie.a.Label,{children:"Password"}),Object(de.jsx)(Ie.a.Control,{type:"password",placeholder:"Enter Password",value:h,onChange:function(e){return O(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"passwordConfirm",children:[Object(de.jsx)(Ie.a.Label,{children:"Confirm Password"}),Object(de.jsx)(Ie.a.Control,{type:"password",placeholder:"Confirm Password",value:g,onChange:function(e){return y(e.target.value)}})]}),Object(de.jsx)(_e.a,{type:"submit",variant:"primary",children:"Update"})]})]})})},we=r(116);var ke=function(e){var t=e.history,r=Object(s.b)(),n=Object(s.c)((function(e){return e.userList})),c=n.loading,o=n.error,i=n.users,l=Object(s.c)((function(e){return e.userLogin})).userInfo,u=Object(s.c)((function(e){return e.userDelete})).success;Object(a.useEffect)((function(){l&&l.isAdmin?r(function(){var e=Object(oe.a)(Object(se.a)().mark((function e(t,r){var a,n,c,s,o;return Object(se.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:_}),a=r(),n=a.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n.token)}},e.next=6,le.a.get("/api/users/",c);case 6:s=e.sent,o=s.data,t({type:L,payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:C,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()):t.push("/login")}),[r,t,u,l]);var d=function(e){window.confirm("Are you sure you want to delete this user?")&&r(function(e){return function(){var t=Object(oe.a)(Object(se.a)().mark((function t(r,a){var n,c,s,o,i;return Object(se.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:R}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,le.a.delete("/api/users/delete/".concat(e,"/"),s);case 6:o=t.sent,i=o.data,r({type:w,payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:k,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}(e))};return Object(de.jsxs)("div",{children:[Object(de.jsx)("h1",{children:"Users"}),c?Object(de.jsx)(fe,{}):o?Object(de.jsx)(ge,{variant:"danger",children:o}):Object(de.jsxs)(we.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",children:[Object(de.jsx)("thead",{children:Object(de.jsxs)("tr",{children:[Object(de.jsx)("th",{children:"ID"}),Object(de.jsx)("th",{children:"NAME"}),Object(de.jsx)("th",{children:"EMAIL"}),Object(de.jsx)("th",{children:"ADMIN"}),Object(de.jsx)("th",{})]})}),Object(de.jsx)("tbody",{children:i.map((function(e){return Object(de.jsxs)("tr",{children:[Object(de.jsx)("td",{children:e._id}),Object(de.jsx)("td",{children:e.name}),Object(de.jsx)("td",{children:e.email}),Object(de.jsx)("td",{children:e.isAdmin?Object(de.jsx)("i",{className:"fas fa-check",style:{color:"green"}}):Object(de.jsx)("i",{className:"fas fa-check",style:{color:"red"}})}),Object(de.jsxs)("td",{children:[Object(de.jsx)(ce.LinkContainer,{to:"/admin/user/".concat(e._id,"/edit"),children:Object(de.jsx)(_e.a,{variant:"light",className:"btn-sm",children:Object(de.jsx)("i",{className:"fas fa-edit"})})}),Object(de.jsx)(_e.a,{variant:"danger",className:"btn-sm",onClick:function(){return d(e._id)},children:Object(de.jsx)("i",{className:"fas fa-trash"})})]})]},e._id)}))})]})]})};var Te=function(e){var t=e.match,r=e.history,n=t.params.id,c=Object(a.useState)(""),o=Object(Se.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(""),d=Object(Se.a)(u,2),j=d[0],p=d[1],b=Object(a.useState)(!1),h=Object(Se.a)(b,2),O=h[0],f=h[1],x=Object(s.b)(),y=Object(s.c)((function(e){return e.userDetails})),m=y.error,v=y.loading,E=y.user,S=Object(s.c)((function(e){return e.userUpdate})),I=S.error,_=S.loading,L=S.success;return Object(a.useEffect)((function(){L?(x({type:D}),r.push("/admin/userlist")):E.name&&E._id===Number(n)?(l(E.name),p(E.email),f(E.isAdmin)):x(ue(n))}),[E,n,L,r]),Object(de.jsxs)("div",{children:[Object(de.jsx)(ee.Link,{to:"/admin/userlist",children:"Go Back"}),Object(de.jsxs)(Le,{children:[Object(de.jsx)("h1",{children:"Edit User"}),_&&Object(de.jsx)(fe,{}),I&&Object(de.jsx)(ge,{variant:"danger",children:I}),v?Object(de.jsx)(fe,{}):m?Object(de.jsx)(ge,{variant:"danger",children:m}):Object(de.jsxs)(Ie.a,{onSubmit:function(e){e.preventDefault(),x(function(e){return function(){var t=Object(oe.a)(Object(se.a)().mark((function t(r,a){var n,c,s,o,i;return Object(se.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:T}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,le.a.put("/api/users/update/".concat(e._id,"/"),e,s);case 6:o=t.sent,i=o.data,r({type:A}),r({type:g,payload:i}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:P,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()}({_id:E._id,name:i,email:j,isAdmin:O}))},children:[Object(de.jsxs)(Ie.a.Group,{controlId:"name",children:[Object(de.jsx)(Ie.a.Label,{children:"Name"}),Object(de.jsx)(Ie.a.Control,{type:"name",placeholder:"Enter name",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"email",children:[Object(de.jsx)(Ie.a.Label,{children:"Email Address"}),Object(de.jsx)(Ie.a.Control,{type:"email",placeholder:"Enter Email",value:j,onChange:function(e){return p(e.target.value)}})]}),Object(de.jsx)(Ie.a.Group,{controlId:"isadmin",children:Object(de.jsx)(Ie.a.Check,{type:"checkbox",label:"Is Admin",checked:O,onChange:function(e){return f(e.target.checked)}})}),Object(de.jsx)(_e.a,{type:"submit",variant:"primary",children:"Update"})]})]})]})};var Ae=function(e){var t=e.history,r=Object(a.useState)(""),n=Object(Se.a)(r,2),c=n[0],o=n[1],i=Object(a.useState)(""),l=Object(Se.a)(i,2),u=l[0],d=l[1],j=Object(a.useState)(""),p=Object(Se.a)(j,2),b=p[0],h=p[1],O=Object(a.useState)(""),f=Object(Se.a)(O,2),x=f[0],g=f[1],y=Object(a.useState)(""),m=Object(Se.a)(y,2),v=m[0],E=m[1],S=Object(s.b)(),I=Object(s.c)((function(e){return e.usermyDetails})),_=I.error,L=I.loading,C=I.Myuser,U=Object(s.c)((function(e){return e.userLogin})).userInfo,R=Object(s.c)((function(e){return e.usermyUpdateProfile})).success;return Object(a.useEffect)((function(){var e;U||t.push("/login"),C.team&&C&&!R&&U._id===C.id?(d(C.team),o(C.bio),h(C.rating),g(C.birth_date)):(S({type:Q}),S((e="profile/".concat(U._id),function(){var t=Object(oe.a)(Object(se.a)().mark((function t(r,a){var n,c,s,o,i;return Object(se.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:N}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,le.a.get("/api/users/my/".concat(e,"/"),s);case 6:o=t.sent,i=o.data,r({type:G,payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:F,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}())))}),[S,t,U,C,R]),Object(de.jsx)(pe.a,{children:Object(de.jsxs)(be.a,{md:4,children:[Object(de.jsxs)("h2",{children:[U.name," Detail Profile"]}),v&&Object(de.jsx)(ge,{variant:"danger",children:v}),_&&Object(de.jsx)(ge,{variant:"danger",children:_}),L&&Object(de.jsx)(fe,{}),Object(de.jsxs)(Ie.a,{onSubmit:function(e){var t;e.preventDefault(),S((t={id:C.id,user:C.user,team:u,bio:c,birth_date:x,rating:b},function(){var e=Object(oe.a)(Object(se.a)().mark((function e(r,a){var n,c,s,o,i;return Object(se.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:Y}),n=a(),c=n.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,le.a.put("/api/users/my/profile/".concat(t.id,"/"),t,s);case 6:o=e.sent,i=o.data,r({type:B}),r({type:G,payload:i}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r({type:q,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}())),E("")},children:[Object(de.jsxs)(Ie.a.Group,{controlId:"team",children:[Object(de.jsx)(Ie.a.Label,{children:"Your Team"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"team",placeholder:"Enter your team",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"bio",children:[Object(de.jsx)(Ie.a.Label,{children:"Your Bio"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"bio",placeholder:"Enter bio",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"rating",children:[Object(de.jsx)(Ie.a.Label,{children:"Your rating"}),Object(de.jsx)(Ie.a.Control,{required:!0,type:"rating",placeholder:"Your Ream",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(de.jsxs)(Ie.a.Group,{controlId:"birth_date",children:[Object(de.jsx)(Ie.a.Label,{children:"Your birth date"}),Object(de.jsx)(Ie.a.Control,{type:"birth_date",placeholder:"change your birth_date",value:x,onChange:function(e){return g(e.target.value)}})]}),Object(de.jsx)(_e.a,{type:"submit",variant:"primary",children:"Update"})]})]})})};var Pe=function(){return Object(de.jsxs)(ee.HashRouter,{children:[Object(de.jsx)(je,{}),Object(de.jsx)("main",{className:"py-3",children:Object(de.jsxs)($.a,{children:[Object(de.jsx)(te.d,{path:"/",component:Ee,exact:!0}),Object(de.jsx)(te.d,{path:"/login",component:Ce}),Object(de.jsx)(te.d,{path:"/register",component:Ue}),Object(de.jsx)(te.d,{path:"/profile",component:Re}),Object(de.jsx)(te.d,{path:"/my/profile",component:Ae}),Object(de.jsx)(te.d,{path:"/admin/userlist",component:ke}),Object(de.jsx)(te.d,{path:"/admin/user/:id/edit",component:Te})]})}),Object(de.jsx)(he,{})]})},De=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,123)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};c.a.render(Object(de.jsx)(s.a,{store:Z,children:Object(de.jsx)(Pe,{})}),document.getElementById("root")),De()},77:function(e,t,r){},78:function(e,t,r){}},[[108,1,2]]]);
//# sourceMappingURL=main.60c35a87.chunk.js.map