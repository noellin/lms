(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-681e31fe"],{"5d67":function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"c",(function(){return o})),s.d(e,"b",(function(){return r})),s.d(e,"a",(function(){return n})),s.d(e,"e",(function(){return l}));var a=s("a95a");const i={post:t=>Object(a.c)("/info/login",t)},o={get:t=>Object(a.b)("/info/forgotpw/"+t)},r={post:(t,e)=>Object(a.c)("/info/confirmpw/"+t,e)},n={get:t=>Object(a.b)("/info/activate/"+t)},l={get:t=>Object(a.b)("/stu/log/setlogin/"+t)}},"75e5":function(t,e,s){"use strict";var a=s("b009");s.n(a).a},a55b:function(t,e,s){"use strict";s.r(e);s("5a0c");var a,i,o,r=s("5d67");a=window,i=document,o=function(){var t=i.createElement("script"),e=i.getElementsByTagName("script")[0];t.src="https://cdn.iubenda.com/iubenda.js",e.parentNode.insertBefore(t,e)},a.addEventListener?a.addEventListener("load",o,!1):a.attachEvent?a.attachEvent("onload",o):a.onload=o;var n={name:"Login",data:()=>({showErrorMessage:!1,loginShow:"login",remember:!1,loginForm:{email:"",password:"",confirmpw:""},userEmail:"",ErrorMessage:"Your email or password is incorrect. please try again."}),created(){console.log("app"),localStorage.clear();var t=document.cookie.match(/[^ =;]+(?=\=)/g);if(t)for(var e=t.length;e--;)document.cookie=t[e]+"=0;expires="+new Date(0).toUTCString();this.$store.dispatch("auth/setAuth",{token:"",isLogin:!1,userid:""})},mounted(){void 0!==this.$route.params.id&&(this.activateUser(this.$route.params.id),this.loginShow="resetPassword",this.userEmail=this.$route.params.email)},computed:{token(){return this.$store.state.auth.token}},methods:{async forgotPassword(){await r.c.get(this.loginForm.email).then(t=>{if(console.log(t),"Done"===t.record)return this.$bus.$emit("messsage:push","Password reset information has been sent to your email, please check your email!","success"),!0})&&(this.loginShow="sendEmail")},sendEmailResetPWD(){this.loginShow="sendEmail"},login(){const t=Math.floor(Date.now()/1e3);r.d.post(this.loginForm).then(e=>{console.log(e),window.localStorage.setItem("token",e.record),this.$store.dispatch("auth/setAuth",{token:e.record,isLogin:"success"===e.status,userid:e.userID,username:e.username,email:e.email,permit:e.permit,todayTimestamp:t,image:e.image}),this.$store.dispatch("courseInfo/clearAllAssignment"),"success"===e.status?this.$router.push({path:"/course"}):this.$bus.$emit("messsage:push","Oh snap ! Your email or password is incorrect. please try again.","danger")}).catch(t=>{console.log(t)})},resetPassword(){let t=this;console.log(this.loginForm),this.$refs.resetForm.validate().then(e=>{if(e){let e={password:this.loginForm.password};r.b.post(this.$route.params.id,e).then(e=>{console.log(e),this.loginShow="resetPasswordSuccess",t.loginForm={email:"",password:"",confirmpw:""}}).catch(t=>{})}})},activateUser(t){r.a.get(t).then(t=>{console.log(t),this.loginForm.email=t.record.email}).catch(t=>{console.log(t)})}}},l=(s("75e5"),s("2877")),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login d-flex justify-content-center align-items-center col-sm-12 loginbg"},[a("div",{staticClass:"loginpage row justify-content-center align-items-center col-sm-12"},["login"===t.loginShow?a("div",[a("div",{staticClass:"sign-in-form col-sm-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body login-bg-s"},[t._m(0),a("p",{staticClass:"my-4 text-center text-white"},[t._v("iGroup LMS")]),a("ValidationObserver",{ref:"loginForm"},[a("div",{attrs:{id:"login-Page"}},[a("h5",{staticClass:"sign-in-heading text-white"},[t._v(" "+t._s(t.$t("log-in-to-your-account"))+" ")]),a("ValidationProvider",{attrs:{rules:"required",name:"Account"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,i=e.errors;return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v(t._s(t.$t("email-address")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.email,expression:"loginForm.email"}],staticClass:"form-control form-control-lg",class:{"is-invalid":s},attrs:{type:"email",id:"inputEmail",placeholder:"Enter your Email address",required:"",autocomplete:!0===t.remember?"":"new-password"},domProps:{value:t.loginForm.email},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"email",e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))]):t._e()])]}}],null,!1,2492161073)}),a("ValidationProvider",{attrs:{rules:"required",name:"Password"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,i=e.errors;return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v(t._s(t.$t("password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"form-control form-control-lg",class:{"is-invalid":s},attrs:{type:"password",id:"inputPassword",placeholder:"Enter your password",required:"",autocomplete:!0===t.remember?"":"new-password"},domProps:{value:t.loginForm.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login()},input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))]):t._e()])]}}],null,!1,3598363264)}),a("div",{staticClass:"checkbox m-t-20"},[a("div",{staticClass:"custom-control custom-checkbox checkbox-primary"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.remember,expression:"remember"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"stateCheck1",checked:""},domProps:{checked:Array.isArray(t.remember)?t._i(t.remember,null)>-1:t.remember},on:{change:function(e){var s=t.remember,a=e.target,i=!!a.checked;if(Array.isArray(s)){var o=t._i(s,null);a.checked?o<0&&(t.remember=s.concat([null])):o>-1&&(t.remember=s.slice(0,o).concat(s.slice(o+1)))}else t.remember=i}}}),a("label",{staticClass:"custom-control-label text-white",attrs:{for:"stateCheck1"}},[t._v(" "+t._s(t.$t("remember-me")))])]),a("a",{staticClass:"float-right blue pointer",on:{click:function(e){t.loginShow="forgetPassword"}}},[t._v(t._s(t.$t("forgot-password"))+"?")])]),a("button",{staticClass:"btn btn-primary btn-rounded btn-floating btn-md btn-block m-t-40 m-b-20",on:{click:function(e){return t.login()}}},[t._v(" "+t._s(t.$t("log-in"))+" ")])],1)]),a("div",{staticClass:"d-flex justify-content-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("ff45"),expression:"require('../assets/img/avatars/temp_logo.png')"}],attrs:{alt:"Logo"}})])],1)])])]):t._e(),"resetPasswordSuccess"===t.loginShow?a("div",[a("div",{staticClass:"sign-in-form"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body login-bg-s"},[t._m(1),t._m(2),a("h5",{staticClass:"sign-in-heading text-center text-success"},[t._v(" "+t._s(t.$t("password-reset-success"))+" ")]),a("p",{staticClass:"text-center text-white"},[t._v(" "+t._s(t.$t("your-password-has-now-been-successfully-reset-please-use-this-new-password-to-log-in"))+". ")]),a("button",{staticClass:"btn btn-primary btn-rounded btn-floating btn-md btn-block m-t-40 m-b-20",on:{click:function(e){t.loginShow="login"}}},[t._v(" "+t._s(t.$t("return-to-login"))+" ")]),a("div",{staticClass:"d-flex justify-content-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("ff45"),expression:"require('../assets/img/avatars/temp_logo.png')"}],attrs:{alt:"Logo"}})])])])])]):t._e(),"forgetPassword"===t.loginShow?a("div",[a("div",{staticClass:"sign-in-form"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body login-bg-s"},[t._m(3),a("div",{attrs:{id:"forget-password-page"}},[a("h5",{staticClass:"sign-in-heading text-white"},[t._v(" "+t._s(t.$t("forgotten-password"))+"? ")]),a("p",{staticClass:"text-white"},[t._v(" "+t._s(t.$t("will-send-you-an-email-with-link-to-reset-your-password"))+". ")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v(t._s(t.$t("email-address")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.email,expression:"loginForm.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",id:"inputEmail",placeholder:"Enter your Email address",required:""},domProps:{value:t.loginForm.email},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"email",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary btn-rounded btn-floating btn-md btn-block m-t-40 m-b-20",on:{click:function(e){return t.forgotPassword()}}},[t._v(" "+t._s(t.$t("send"))+" ")]),a("div",{staticClass:"d-flex justify-content-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("ff45"),expression:"require('../assets/img/avatars/temp_logo.png')"}],attrs:{alt:"Logo"}})])])])])])]):t._e(),"resetPassword"===t.loginShow?a("div",{},[a("div",{staticClass:"sign-in-form"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body login-bg-s"},[a("ValidationObserver",{ref:"resetForm"},[a("a",{staticClass:"brand text-center d-block m-b-20 m-t-20"},[a("div",{staticClass:"text-white",staticStyle:{"text-shadow":"rgba(0, 0, 0, 0.7) 0px 2px 4px","font-size":"36px","font-weight":"500"},attrs:{"data-v-653f1d32":""}},[t._v(" Teacher ")])]),a("p",{staticClass:"text-white text-center"},[t._v(" "+t._s(t.$t("e-mail"))+": "+t._s(t.userEmail)+" ")]),a("h5",{staticClass:"sign-in-heading text-white"},[t._v(" "+t._s(t.$t("confirm-your-password"))+" ")]),a("ValidationProvider",{attrs:{rules:"required|min:6",name:"password",vid:"confirmation"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,i=e.errors;return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v(t._s(t.$t("password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"inputPassword",placeholder:"Password must be at least 6 characters",required:""},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))]):t._e()])]}}],null,!1,1506498558)}),a("ValidationProvider",{attrs:{rules:"required|confirmed:confirmation",name:"confirm password"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,i=e.errors;return[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v(t._s(t.$t("password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.confirmpw,expression:"loginForm.confirmpw"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"inputPassword",placeholder:"Enter your password again",required:""},domProps:{value:t.loginForm.confirmpw},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"confirmpw",e.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:s,expression:"failed"}],staticClass:"text-danger"},[t._v(t._s(i[0]))])])]}}],null,!1,1169887964)}),a("button",{staticClass:"btn btn-primary btn-rounded btn-floating btn-md btn-block m-t-40 m-b-20",on:{click:function(e){return t.resetPassword()}}},[t._v(" "+t._s(t.$t("confirm-password"))+" ")])],1),a("div",{staticClass:"d-flex justify-content-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("ff45"),expression:"require('../assets/img/avatars/temp_logo.png')"}],attrs:{alt:"Logo"}})])],1)])])]):t._e(),"sendEmail"===t.loginShow?a("div",{},[a("div",{staticClass:"sign-in-form"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body login-bg-s"},[t._m(4),t._m(5),a("h5",{staticClass:"sign-in-heading text-center text-success"},[t._v(" "+t._s(t.$t("password-reset-email-sent"))+" ")]),a("p",{staticClass:"text-center text-white"},[t._v(" "+t._s(t.$t("an-email-has-been-sent-to-your-email-please-follow-the-directions-in-the-email-to-reset-your-password"))+". ")]),a("button",{staticClass:"btn btn-primary btn-rounded btn-floating btn-md btn-block m-t-40 m-b-20",on:{click:function(e){t.loginShow="login"}}},[t._v(" "+t._s(t.$t("ok"))+" ")]),a("div",{staticClass:"d-flex justify-content-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("ff45"),expression:"require('../assets/img/avatars/temp_logo.png')"}],attrs:{alt:"Logo"}})])])])])]):t._e(),a("div",{staticClass:"col-sm-12 row justify-content-end"},[a("a",{staticClass:"iubenda-nostyle no-brand iubenda-embed mr-4",attrs:{href:"https://www.iubenda.com/privacy-policy/32601846",title:"Privacy Policy "}},[a("small",[t._v(t._s(t.$t("privacy-policy")))])]),a("a",{staticClass:"iubenda-nostyle no-brand iubenda-embed mr-4",attrs:{href:"https://www.iubenda.com/privacy-policy/32601846/cookie-policy",title:"Cookie Policy "}},[a("small",[t._v(t._s(t.$t("cookie-policy")))])]),a("a",{staticClass:"iubenda-nostyle no-brand iubenda-embed",attrs:{href:"https://www.iubenda.com/terms-and-conditions/32601846",title:"Terms and Conditions "}},[a("small",[t._v(t._s(t.$t("terms-and-conditions")))])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"brand text-center d-block m-b-20 m-t-20"},[e("div",{staticClass:"text-white",staticStyle:{"text-shadow":"rgba(0, 0, 0, 0.7) 0px 2px 4px","font-size":"36px","font-weight":"500"},attrs:{"data-v-653f1d32":""}},[this._v(" Teacher ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"brand text-center d-block m-b-20 m-t-20"},[e("div",{staticClass:"text-white",staticStyle:{"text-shadow":"rgba(0, 0, 0, 0.7) 0px 2px 4px","font-size":"36px","font-weight":"500"},attrs:{"data-v-653f1d32":""}},[this._v(" Teacher ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"display-4 text-center"},[e("i",{staticClass:"zmdi zmdi-check-circle zmdi-hc-fw text-success"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"brand text-center d-block m-b-20 m-t-20"},[e("div",{staticClass:"text-white",staticStyle:{"text-shadow":"rgba(0, 0, 0, 0.7) 0px 2px 4px","font-size":"36px","font-weight":"500"},attrs:{"data-v-653f1d32":""}},[this._v(" Teacher ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"brand text-center d-block m-b-20 m-t-20"},[e("div",{staticClass:"text-white",staticStyle:{"text-shadow":"rgba(0, 0, 0, 0.7) 0px 2px 4px","font-size":"36px","font-weight":"500"},attrs:{"data-v-653f1d32":""}},[this._v(" Teacher ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"display-4 text-center"},[e("i",{staticClass:"zmdi zmdi-mail-send zmdi-hc-fw text-success"})])}],!1,null,"0cbf96e6",null);e.default=c.exports},b009:function(t,e,s){}}]);
//# sourceMappingURL=chunk-681e31fe.ab4bed20.js.map