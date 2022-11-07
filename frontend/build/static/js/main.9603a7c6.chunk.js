(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(19),c=n.n(a),s=n(7),i=n(37),o=n(64),l=n(63),d=n(34),u="USER_LOGIN_REQUEST",j="USER_LOGIN_SUCCESS",p="USER_LOGIN_FAIL",b="USER_LOGOUT",h="USER_REGISTER_REQUEST",O="USER_REGISTER_SUCCESS",f="USER_REGISTER_FAIL",x="USER_DETAILS_REQUEST",g="USER_DETAILS_SUCCESS",m="USER_DETAILS_FAIL",v="USER_DETAILS_RESET",y="USER_UPDATE_PROFILE_REQUEST",E="USER_UPDATE_PROFILE_SUCCESS",S="USER_UPDATE_PROFILE_FAIL",I="USER_UPDATE_PROFILE_RESET",L="USER_LIST_REQUEST",C="USER_LIST_SUCCESS",_="USER_LIST_FAIL",w="USER_LIST_RESET",U="USER_DELETE_REQUEST",k="USER_DELETE_SUCCESS",R="USER_DELETE_FAIL",A="USER_UPDATE_REQUEST",T="USER_UPDATE_SUCCESS",P="USER_UPDATE_FAIL",N="USER_UPDATE_RESET",D=Object(i.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loading:!0};case j:return{loading:!1,userInfo:t.payload};case p:return{loading:!1,error:t.payload};case b:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0};case O:return{loading:!1,userInfo:t.payload};case f:return{loading:!1,error:t.payload};case b:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case g:return{loading:!1,user:t.payload};case m:return{loading:!1,error:t.payload};case v:return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case E:return{loading:!1,success:!0,userInfo:t.payload};case S:return{loading:!1,error:t.payload};case I:return{};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loading:!0};case C:return{loading:!1,users:t.payload};case _:return{loading:!1,error:t.payload};case w:return{users:[]};default:return e}},userDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{loading:!0};case k:return{loading:!1,success:!0};case R:return{loading:!1,error:t.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case T:return{loading:!1,success:!0};case P:return{loading:!1,error:t.payload};case N:return{user:{}};default:return e}}}),G={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},F=[o.a],B=Object(i.createStore)(D,G,Object(l.composeWithDevTools)(i.applyMiddleware.apply(void 0,F))),Q=(n(77),n(78),n(113)),q=n(18),J=n(8),z=n(119),M=n(120),H=n(117),K=n(24),W=n(13),Y=n(29),V=n(30),X=n.n(V),Z=function(e){return function(){var t=Object(Y.a)(Object(W.a)().mark((function t(n,r){var a,c,s,i,o;return Object(W.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:x}),a=r(),c=a.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,X.a.get("/api/users/".concat(e,"/"),s);case 6:i=t.sent,o=i.data,n({type:g,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:m,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},$=n(1);var ee=function(){var e=Object(s.c)((function(e){return e.userLogin})).userInfo,t=Object(s.b)();return Object($.jsx)("header",{children:Object($.jsx)(z.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object($.jsxs)(Q.a,{children:[Object($.jsx)(K.LinkContainer,{to:"/",children:Object($.jsx)(z.a.Brand,{children:"Fanatika"})}),Object($.jsx)(z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object($.jsx)(z.a.Collapse,{id:"basic-navbar-nav",children:Object($.jsxs)(M.a,{className:"ml-auto",children:[e?Object($.jsxs)(H.a,{title:e.name,id:"username",children:[Object($.jsx)(K.LinkContainer,{to:"/profile",children:Object($.jsx)(H.a.Item,{children:"Profile"})}),Object($.jsx)(H.a.Item,{onClick:function(){t((function(e){localStorage.removeItem("userInfo"),e({type:b}),e({type:v}),e({type:w})}))},children:"Logout"})]}):Object($.jsx)(K.LinkContainer,{to:"/login",children:Object($.jsxs)(M.a.Link,{children:[Object($.jsx)("i",{className:"fas fa-user"}),"Login"]})}),e&&e.isAdmin&&Object($.jsx)(H.a,{title:"Admin",id:"adminmenue",children:Object($.jsx)(K.LinkContainer,{to:"/admin/userlist",children:Object($.jsx)(H.a.Item,{children:"Users"})})})]})})]})})})},te=n(114),ne=n(68);var re=function(){return Object($.jsx)("footer",{children:Object($.jsx)(Q.a,{children:Object($.jsx)(te.a,{children:Object($.jsx)(ne.a,{className:"text-center py-3",children:"\xa9 2022 Fanatika,Inc. Her hakk\u0131 sakl\u0131d\u0131r"})})})})},ae=n(115);var ce=function(){return Object($.jsx)(ae.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",margin:"auto",display:"block"},children:Object($.jsx)("span",{className:"sr-only",children:"Loading..."})})},se=n(121);var ie=function(e){var t=e.variant,n=e.children;return Object($.jsx)(se.a,{variant:t,children:n})},oe=n(69),le=n(122);var de=function(e){var t=e.pages,n=e.page,r=e.keyword,a=void 0===r?"":r,c=e.isAdmin,s=void 0!==c&&c;return a&&(a=a.split("?keyword=")[1].split("&")[0]),t>1&&Object($.jsx)(le.a,{children:Object(oe.a)(Array(t).keys()).map((function(e){return Object($.jsx)(K.LinkContainer,{to:s?"/admin/productlist/?keyword=".concat(a,"&page=").concat(e+1):"/?keyword=".concat(a,"&page=").concat(e+1),children:Object($.jsx)(le.a.Item,{active:e+1===n,children:e+1})},e+1)}))})};var ue=function(e){var t=e.history,n=Object(s.b)(),a=Object(s.c)((function(e){return e})),c=a.error,i=a.loading,o=a.page,l=a.pages,d=t.location.search;return Object(r.useEffect)((function(){}),[n,d]),Object($.jsxs)("div",{children:[Object($.jsx)("h1",{style:{position:"absolute",left:800},children:"Futbolun Kalbinde Sen de Yer Al"}),i?Object($.jsx)(ce,{}):c?Object($.jsx)(ie,{variant:"danger",children:c}):Object($.jsxs)("div",{children:[Object($.jsx)(te.a,{}),Object($.jsx)(de,{page:o,pages:l,keyword:d})]})]})},je=n(10),pe=n(118),be=n(67);var he=function(e){var t=e.children;return Object($.jsx)(Q.a,{children:Object($.jsx)(te.a,{className:"justify-content-md-center",children:Object($.jsx)(ne.a,{xs:12,md:6,children:t})})})};var Oe=function(e){var t=e.location,n=e.history,a=Object(r.useState)(""),c=Object(je.a)(a,2),i=c[0],o=c[1],l=Object(r.useState)(""),d=Object(je.a)(l,2),b=d[0],h=d[1],O=Object(s.b)(),f=t.search?t.search.split("=")[1]:"/profile",x=Object(s.c)((function(e){return e.userLogin})),g=x.error,m=x.loading,v=x.userInfo;return Object(r.useEffect)((function(){v&&n.push(f)}),[n,v,f]),Object($.jsxs)(he,{children:[Object($.jsx)("h1",{children:"Sign In"}),g&&Object($.jsx)(ie,{variant:"danger",children:g}),m&&Object($.jsx)(ce,{}),Object($.jsxs)(pe.a,{onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var n=Object(Y.a)(Object(W.a)().mark((function n(r){var a,c,s;return Object(W.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:u}),a={headers:{"Content-type":"application/json"}},n.next=5,X.a.post("/api/users/login/",{username:e,password:t},a);case 5:c=n.sent,s=c.data,r({type:j,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),r({type:p,payload:n.t0.response&&n.t0.response.data.detail?n.t0.response.data.detail:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(i,b))},children:[Object($.jsxs)(pe.a.Group,{controlId:"email",children:[Object($.jsx)(pe.a.Label,{children:"Email Address"}),Object($.jsx)(pe.a.Control,{type:"email",placeholder:"Enter Email",value:i,onChange:function(e){return o(e.target.value)}})]}),Object($.jsxs)(pe.a.Group,{controlId:"password",children:[Object($.jsx)(pe.a.Label,{children:"Password"}),Object($.jsx)(pe.a.Control,{type:"password",placeholder:"Enter Password",value:b,onChange:function(e){return h(e.target.value)}})]}),Object($.jsx)(be.a,{type:"submit",variant:"primary",children:"Sign In"})]}),Object($.jsx)(te.a,{className:"py-3",children:Object($.jsxs)(ne.a,{children:["New Customer? ",Object($.jsx)(q.Link,{to:f?"/register?redirect=".concat(f):"/register",children:"Register"})]})})]})};var fe=function(e){var t=e.location,n=e.history,a=Object(r.useState)(""),c=Object(je.a)(a,2),i=c[0],o=c[1],l=Object(r.useState)(""),d=Object(je.a)(l,2),u=d[0],p=d[1],b=Object(r.useState)(""),x=Object(je.a)(b,2),g=x[0],m=x[1],v=Object(r.useState)(""),y=Object(je.a)(v,2),E=y[0],S=y[1],I=Object(r.useState)(""),L=Object(je.a)(I,2),C=L[0],_=L[1],w=Object(s.b)(),U=t.search?t.search.split("=")[1]:"/",k=Object(s.c)((function(e){return e.userRegister})),R=k.error,A=k.loading,T=k.userInfo;return Object(r.useEffect)((function(){T&&n.push(U)}),[n,T,U]),Object($.jsxs)(he,{children:[Object($.jsx)("h1",{children:"Sign In"}),C&&Object($.jsx)(ie,{variant:"danger",children:C}),R&&Object($.jsx)(ie,{variant:"danger",children:R}),A&&Object($.jsx)(ce,{}),Object($.jsxs)(pe.a,{onSubmit:function(e){e.preventDefault(),g!=E?_("Passwords do not match"):w(function(e,t,n){return function(){var r=Object(Y.a)(Object(W.a)().mark((function r(a){var c,s,i;return Object(W.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:h}),c={headers:{"Content-type":"application/json"}},r.next=5,X.a.post("/api/users/register/",{name:e,email:t,password:n},c);case 5:s=r.sent,i=s.data,a({type:O,payload:i}),a({type:j,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),a({type:f,payload:r.t0.response&&r.t0.response.data.detail?r.t0.response.data.detail:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(i,u,g))},children:[Object($.jsxs)(pe.a.Group,{controlId:"name",children:[Object($.jsx)(pe.a.Label,{children:"Name"}),Object($.jsx)(pe.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:i,onChange:function(e){return o(e.target.value)}})]}),Object($.jsxs)(pe.a.Group,{controlId:"email",children:[Object($.jsx)(pe.a.Label,{children:"Email Address"}),Object($.jsx)(pe.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:u,onChange:function(e){return p(e.target.value)}})]}),Object($.jsxs)(pe.a.Group,{controlId:"password",children:[Object($.jsx)(pe.a.Label,{children:"Password"}),Object($.jsx)(pe.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:g,onChange:function(e){return m(e.target.value)}})]}),Object($.jsxs)(pe.a.Group,{controlId:"passwordConfirm",children:[Object($.jsx)(pe.a.Label,{children:"Confirm Password"}),Object($.jsx)(pe.a.Control,{required:!0,type:"password",placeholder:"Confirm Password",value:E,onChange:function(e){return S(e.target.value)}})]}),Object($.jsx)(be.a,{type:"submit",variant:"primary",children:"Register"})]}),Object($.jsx)(te.a,{className:"py-3",children:Object($.jsxs)(ne.a,{children:["Have an Account? ",Object($.jsx)(q.Link,{to:U?"/login?redirect=".concat(U):"/login",children:"Sign In"})]})})]})};var xe=function(e){var t=e.history,n=Object(r.useState)(""),a=Object(je.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(""),l=Object(je.a)(o,2),d=l[0],u=l[1],p=Object(r.useState)(""),b=Object(je.a)(p,2),h=b[0],O=b[1],f=Object(r.useState)(""),x=Object(je.a)(f,2),g=x[0],m=x[1],v=Object(r.useState)(""),L=Object(je.a)(v,2),C=L[0],_=L[1],w=Object(s.b)(),U=Object(s.c)((function(e){return e.userDetails})),k=U.error,R=U.loading,A=U.user,T=Object(s.c)((function(e){return e.userLogin})).userInfo,P=Object(s.c)((function(e){return e.userUpdateProfile})).success;return Object(r.useEffect)((function(){T?A&&A.name&&!P&&T._id===A._id?(i(A.name),u(A.email)):(w({type:I}),w(Z("profile"))):t.push("/login")}),[w,t,T,A,P]),Object($.jsx)(te.a,{children:Object($.jsxs)(ne.a,{md:3,children:[Object($.jsx)("h2",{children:"User Profile"}),C&&Object($.jsx)(ie,{variant:"danger",children:C}),k&&Object($.jsx)(ie,{variant:"danger",children:k}),R&&Object($.jsx)(ce,{}),Object($.jsxs)(pe.a,{onSubmit:function(e){e.preventDefault(),h!==g?_("Passwords do not match"):(w(function(e){return function(){var t=Object(Y.a)(Object(W.a)().mark((function t(n,r){var a,c,s,i,o;return Object(W.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:y}),a=r(),c=a.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,X.a.put("/api/users/profile/update/",e,s);case 6:i=t.sent,o=i.data,n({type:E,payload:o}),n({type:j,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n({type:S,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()}({id:A._id,name:c,email:d,password:h})),_(""))},children:[Object($.jsxs)(pe.a.Group,{controlId:"name",children:[Object($.jsx)(pe.a.Label,{children:"Name"}),Object($.jsx)(pe.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:c,onChange:function(e){return i(e.target.value)}})]}),Object($.jsxs)(pe.a.Group,{controlId:"email",children:[Object($.jsx)(pe.a.Label,{children:"Email Address"}),Object($.jsx)(pe.a.Control,{required:!0,type:"email",placeholder:"Enter Email",value:d,onChange:function(e){return u(e.target.value)}})]}),Object($.jsxs)(pe.a.Group,{controlId:"password",children:[Object($.jsx)(pe.a.Label,{children:"Password"}),Object($.jsx)(pe.a.Control,{type:"password",placeholder:"Enter Password",value:h,onChange:function(e){return O(e.target.value)}})]}),Object($.jsxs)(pe.a.Group,{controlId:"passwordConfirm",children:[Object($.jsx)(pe.a.Label,{children:"Confirm Password"}),Object($.jsx)(pe.a.Control,{type:"password",placeholder:"Confirm Password",value:g,onChange:function(e){return m(e.target.value)}})]}),Object($.jsx)(be.a,{type:"submit",variant:"primary",children:"Update"})]})]})})},ge=n(116);var me=function(e){var t=e.history,n=Object(s.b)(),a=Object(s.c)((function(e){return e.userList})),c=a.loading,i=a.error,o=a.users,l=Object(s.c)((function(e){return e.userLogin})).userInfo,d=Object(s.c)((function(e){return e.userDelete})).success;Object(r.useEffect)((function(){l&&l.isAdmin?n(function(){var e=Object(Y.a)(Object(W.a)().mark((function e(t,n){var r,a,c,s,i;return Object(W.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:L}),r=n(),a=r.userLogin.userInfo,c={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(a.token)}},e.next=6,X.a.get("/api/users/",c);case 6:s=e.sent,i=s.data,t({type:C,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:_,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()):t.push("/login")}),[n,t,d,l]);var u=function(e){window.confirm("Are you sure you want to delete this user?")&&n(function(e){return function(){var t=Object(Y.a)(Object(W.a)().mark((function t(n,r){var a,c,s,i,o;return Object(W.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:U}),a=r(),c=a.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,X.a.delete("/api/users/delete/".concat(e,"/"),s);case 6:i=t.sent,o=i.data,n({type:k,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:R,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(e))};return Object($.jsxs)("div",{children:[Object($.jsx)("h1",{children:"Users"}),c?Object($.jsx)(ce,{}):i?Object($.jsx)(ie,{variant:"danger",children:i}):Object($.jsxs)(ge.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",children:[Object($.jsx)("thead",{children:Object($.jsxs)("tr",{children:[Object($.jsx)("th",{children:"ID"}),Object($.jsx)("th",{children:"NAME"}),Object($.jsx)("th",{children:"EMAIL"}),Object($.jsx)("th",{children:"ADMIN"}),Object($.jsx)("th",{})]})}),Object($.jsx)("tbody",{children:o.map((function(e){return Object($.jsxs)("tr",{children:[Object($.jsx)("td",{children:e._id}),Object($.jsx)("td",{children:e.name}),Object($.jsx)("td",{children:e.email}),Object($.jsx)("td",{children:e.isAdmin?Object($.jsx)("i",{className:"fas fa-check",style:{color:"green"}}):Object($.jsx)("i",{className:"fas fa-check",style:{color:"red"}})}),Object($.jsxs)("td",{children:[Object($.jsx)(K.LinkContainer,{to:"/admin/user/".concat(e._id,"/edit"),children:Object($.jsx)(be.a,{variant:"light",className:"btn-sm",children:Object($.jsx)("i",{className:"fas fa-edit"})})}),Object($.jsx)(be.a,{variant:"danger",className:"btn-sm",onClick:function(){return u(e._id)},children:Object($.jsx)("i",{className:"fas fa-trash"})})]})]},e._id)}))})]})]})};var ve=function(e){var t=e.match,n=e.history,a=t.params.id,c=Object(r.useState)(""),i=Object(je.a)(c,2),o=i[0],l=i[1],d=Object(r.useState)(""),u=Object(je.a)(d,2),j=u[0],p=u[1],b=Object(r.useState)(!1),h=Object(je.a)(b,2),O=h[0],f=h[1],x=Object(s.b)(),m=Object(s.c)((function(e){return e.userDetails})),v=m.error,y=m.loading,E=m.user,S=Object(s.c)((function(e){return e.userUpdate})),I=S.error,L=S.loading,C=S.success;return Object(r.useEffect)((function(){C?(x({type:N}),n.push("/admin/userlist")):E.name&&E._id===Number(a)?(l(E.name),p(E.email),f(E.isAdmin)):x(Z(a))}),[E,a,C,n]),Object($.jsxs)("div",{children:[Object($.jsx)(q.Link,{to:"/admin/userlist",children:"Go Back"}),Object($.jsxs)(he,{children:[Object($.jsx)("h1",{children:"Edit User"}),L&&Object($.jsx)(ce,{}),I&&Object($.jsx)(ie,{variant:"danger",children:I}),y?Object($.jsx)(ce,{}):v?Object($.jsx)(ie,{variant:"danger",children:v}):Object($.jsxs)(pe.a,{onSubmit:function(e){e.preventDefault(),x(function(e){return function(){var t=Object(Y.a)(Object(W.a)().mark((function t(n,r){var a,c,s,i,o;return Object(W.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:A}),a=r(),c=a.userLogin.userInfo,s={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,X.a.put("/api/users/update/".concat(e._id,"/"),e,s);case 6:i=t.sent,o=i.data,n({type:T}),n({type:g,payload:o}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:P,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}({_id:E._id,name:o,email:j,isAdmin:O}))},children:[Object($.jsxs)(pe.a.Group,{controlId:"name",children:[Object($.jsx)(pe.a.Label,{children:"Name"}),Object($.jsx)(pe.a.Control,{type:"name",placeholder:"Enter name",value:o,onChange:function(e){return l(e.target.value)}})]}),Object($.jsxs)(pe.a.Group,{controlId:"email",children:[Object($.jsx)(pe.a.Label,{children:"Email Address"}),Object($.jsx)(pe.a.Control,{type:"email",placeholder:"Enter Email",value:j,onChange:function(e){return p(e.target.value)}})]}),Object($.jsx)(pe.a.Group,{controlId:"isadmin",children:Object($.jsx)(pe.a.Check,{type:"checkbox",label:"Is Admin",checked:O,onChange:function(e){return f(e.target.checked)}})}),Object($.jsx)(be.a,{type:"submit",variant:"primary",children:"Update"})]})]})]})};var ye=function(){return Object($.jsxs)(q.HashRouter,{children:[Object($.jsx)(ee,{}),Object($.jsx)("main",{className:"py-3",children:Object($.jsxs)(Q.a,{children:[Object($.jsx)(J.d,{path:"/",component:ue,exact:!0}),Object($.jsx)(J.d,{path:"/login",component:Oe}),Object($.jsx)(J.d,{path:"/register",component:fe}),Object($.jsx)(J.d,{path:"/profile",component:xe}),Object($.jsx)(J.d,{path:"/admin/userlist",component:me}),Object($.jsx)(J.d,{path:"/admin/user/:id/edit",component:ve})]})}),Object($.jsx)(re,{})]})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};c.a.render(Object($.jsx)(s.a,{store:B,children:Object($.jsx)(ye,{})}),document.getElementById("root")),Ee()},77:function(e,t,n){},78:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.9603a7c6.chunk.js.map