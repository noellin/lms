(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f4befed"],{"046f":function(t,s,e){},"1f6c":function(t,s,e){"use strict";e.d(s,"b",(function(){return o})),e.d(s,"c",(function(){return c})),e.d(s,"d",(function(){return r})),e.d(s,"a",(function(){return i})),e.d(s,"g",(function(){return n})),e.d(s,"e",(function(){return l})),e.d(s,"f",(function(){return d}));var a=e("a95a");const o={get:()=>Object(a["b"])("/tchr/list")},c={get:t=>Object(a["b"])("/tchr/search/"+t)},r={post:t=>Object(a["c"])("/tchr/invite",t)},i={get:t=>Object(a["b"])("/tchr/profile/"+t)},n={get:(t,s)=>Object(a["b"])(`/tchr/setstatus/${t}/${s}`)},l={post:(t,s)=>Object(a["c"])("/tchr/modify/"+t,s)},d={post:(t,s)=>Object(a["c"])("/tchr/resetpw/"+t,s)}},"2ec6":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app3"}},[e("div",{},[e("custom-header"),e("div",{staticClass:"content"},[e("header",{staticClass:"page-header"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"mr-auto"},[e("h1",[t._v(t._s(t.$t("account")))])])])]),e("section",{staticClass:"page-content container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"profile-card"},[e("div",{staticClass:"row"},[t._m(0),"information"===t.accountShow?e("div",{staticClass:"col-8"},[e("h5",{staticClass:"m-b-4 p-t-30"},[t._v(" "+t._s(t.$t("account-information"))+" ")]),e("ul",{staticClass:"list-reset text-left m-t-20 m-b-30"},[e("li",{staticClass:"text-muted"},[e("strong",[t._v(t._s(t.$t("name"))+":")]),e("span",{staticClass:"m-l-15"},[t._v(t._s(t.accountInfo.username))])]),e("li",{staticClass:"text-muted"},[e("strong",[t._v(t._s(t.$t("email"))+":")]),e("span",{staticClass:"m-l-15"},[t._v(t._s(t.accountInfo.email))])]),e("li",{staticClass:"text-muted"},[e("strong",[t._v(t._s(t.$t("course"))+":")]),e("span",{staticClass:"m-l-15"},t._l(t.courseList,(function(s,a){return e("span",{key:s.courseid},[t._v(t._s(s.course_name)+" "),a+1!==t.courseList.length?e("span",[t._v(", ")]):t._e()])})),0)])]),"admin"===t.permit?e("div",{staticClass:"form-group row"},[e("div",{staticClass:"switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountStatus,expression:"accountStatus"}],staticClass:"tgl tgl-light tgl-success",attrs:{id:"cb8",type:"checkbox",checked:""},domProps:{checked:Array.isArray(t.accountStatus)?t._i(t.accountStatus,null)>-1:t.accountStatus},on:{click:t.setAccountStatus,change:function(s){var e=t.accountStatus,a=s.target,o=!!a.checked;if(Array.isArray(e)){var c=null,r=t._i(e,c);a.checked?r<0&&(t.accountStatus=e.concat([c])):r>-1&&(t.accountStatus=e.slice(0,r).concat(e.slice(r+1)))}else t.accountStatus=o}}}),e("label",{staticClass:"tgl-btn",attrs:{for:"cb8"}})]),e("div",{staticClass:"col"},[t.accountStatus?e("span",{staticClass:"text-success mt-1"},[t._v(t._s(t.$t("active")))]):e("span",{staticClass:"text-danger mt-1"},[t._v(t._s(t.$t("disable")))])])]):t._e(),"teacher"===t.permit?e("div",[e("a",{staticClass:"btn btn-primary btn-rounded mr-2",on:{click:function(s){t.accountShow="edit"}}},[t._v(t._s(t.$t("edit")))]),e("button",{staticClass:"btn btn-accent btn-rounded",attrs:{type:"button","data-toggle":"modal","data-target":"#ResetPasswordModal"}},[t._v(" "+t._s(t.$t("reset-password"))+" ")])]):t._e()]):t._e(),"edit"===t.accountShow?e("div",{staticClass:"col-8"},[e("h5",{staticClass:"m-b-4 p-t-30"},[t._v(" "+t._s(t.$t("account-information"))+" ")]),e("div",{staticClass:"form-group row m-t-20"},[e("label",{staticClass:"w-75 pl-3 col-form-label text-right"},[t._v(t._s(t.$t("name"))+"：")]),e("div",{staticClass:"col-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountInfo.username,expression:"accountInfo.username"}],staticClass:"form-control",attrs:{type:"email",placeholder:"",value:"Amanda"},domProps:{value:t.accountInfo.username},on:{input:function(s){s.target.composing||t.$set(t.accountInfo,"username",s.target.value)}}})])]),e("div",{staticClass:"form-group row m-b-30"},[e("label",{staticClass:"w-75 pl-3 col-form-label text-right"},[t._v(t._s(t.$t("email"))+"：")]),e("div",{staticClass:"col-10"},[e("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"",disabled:""},domProps:{value:t.accountInfo.email}})])]),e("button",{staticClass:"btn btn-secondary btn-outline btn-rounded mr-2",attrs:{type:"button"},on:{click:function(s){t.accountShow="information"}}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),e("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button"},on:{click:function(s){return t.setAccountInfo()}}},[t._v(" "+t._s(t.$t("save"))+" ")])]):t._e()])])])])])])])])],1),e("div",{staticClass:"modal fade",attrs:{id:"ResetPasswordModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("reset-password")))]),t._m(1)]),e("ValidationObserver",{ref:"resetForm"},[e("div",{staticClass:"modal-body"},[e("form",[e("ValidationProvider",{attrs:{rules:"required|min:6",name:"Current password"},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.failed,o=s.errors;return[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"control-label text-right col-4"},[t._v(t._s(t.$t("current-password")))]),e("div",{staticClass:"col-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempPwdInfo.oldpw,expression:"tempPwdInfo.oldpw"}],staticClass:"form-control",class:{"is-invalid":a},attrs:{type:"password",placeholder:"Enter your current password",value:""},domProps:{value:t.tempPwdInfo.oldpw},on:{input:function(s){s.target.composing||t.$set(t.tempPwdInfo,"oldpw",s.target.value)}}}),a?e("span",{staticClass:"text-danger"},[t._v(t._s(o[0]))]):t._e()]),e("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(t.$t("current-password-is-incorrect"))+" ")])])]}}])}),e("ValidationProvider",{attrs:{rules:"required",name:"New password",vid:"confirmation"},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.failed,o=s.errors;return[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"control-label text-right col-4"},[t._v(t._s(t.$t("new-password")))]),e("div",{staticClass:"col-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempPwdInfo.newpw,expression:"tempPwdInfo.newpw"}],staticClass:"form-control is-invalid",class:{"is-invalid":a},attrs:{type:"password",placeholder:"Password must be at least 6 characters",value:""},domProps:{value:t.tempPwdInfo.newpw},on:{input:function(s){s.target.composing||t.$set(t.tempPwdInfo,"newpw",s.target.value)}}}),a?e("span",{staticClass:"text-danger"},[t._v(t._s(o[0]))]):t._e()]),e("div",{staticClass:"invalid-feedback"},[t._v(" "+t._s(t.$t("passwords-are-inconsistent"))+". ")])])]}}])}),e("ValidationProvider",{attrs:{rules:"required|confirmed:confirmation",name:"Confirm password"},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.failed,o=s.errors;return[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"control-label text-right col-4"},[t._v(t._s(t.$t("confirm-password")))]),e("div",{staticClass:"col-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempPwdInfo.confirmpw,expression:"tempPwdInfo.confirmpw"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter your password again",value:""},domProps:{value:t.tempPwdInfo.confirmpw},on:{input:function(s){s.target.composing||t.$set(t.tempPwdInfo,"confirmpw",s.target.value)}}}),a?e("span",{staticClass:"text-danger"},[t._v(t._s(o[0]))]):t._e()])])]}}])})],1)]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),e("button",{staticClass:"btn btn-accent btn-rounded",attrs:{type:"submit"},on:{click:t.setAccountPWD}},[t._v(" "+t._s(t.$t("reset"))+" ")])])])],1)])]),e("div",{staticClass:"modal modal-top-frame fade",attrs:{id:"PasswordResetSuccessModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[t.resetpwStatus?e("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.$t("your-password-has-now-been-successfully-reset"))+" "),t._m(2)]):e("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[e("span",[t._v(t._s(t.$t("error"))+"：")]),t._v(t._s(t.errorMessage)+". "),t._m(3)])])])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-4 text-center"},[a("div",{staticClass:"thumb-lg member-thumb m-b-10 center-block"},[a("img",{staticClass:"w-200 rounded-circle img-thumbnail",attrs:{src:e("4335"),alt:"profile-image"}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{staticClass:"la la-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{staticClass:"la la-close",attrs:{"aria-hidden":"true"}})])}],c=e("339c"),r=e("1f6c"),i=e("58ba"),n=e("1157"),l=e.n(n),d={name:"SpeakingQuiz",components:{CustomHeader:c["a"]},data(){return{accountShow:"information",accountInfo:{},accountStatus:!1,tempPwdInfo:{oldpw:"",newpw:"",confirmpw:""},resetpwStatus:!1,errorMessage:"",courseList:[]}},mounted(){this.init()},computed:{userid(){return this.$store.state.auth.userid},permit(){return this.$store.state.auth.permit}},methods:{init(){this.$store.dispatch("common/setLoading",!0),this.axios.all([this.getAccountInfo(),this.getActiveCourseList()]).then(t=>{setTimeout(()=>{this.$store.dispatch("common/setLoading",!1)},400)})},getActiveCourseList(t=""){i["a"].get(this.permit,this.userid,this.$route.params.uid).then(t=>{this.courseList=t.record})},getAccountInfo(){r["a"].get(this.$route.params.uid).then(t=>{"enable"===t.record.status?this.accountStatus=!0:this.accountStatus=!1,this.accountInfo=t.record}).catch(t=>{})},setAccountInfo(){let t=this;r["e"].post(this.userid,this.accountInfo).then(s=>{"success"===s.status&&(t.$store.dispatch("auth/updateUserInfo",this.accountInfo),t.$bus.$emit("messsage:push","update success","success"),t.accountShow="information")}).catch(t=>{})},setAccountPWD(){this.$refs.resetForm.validate().then(t=>{t&&r["f"].post(this.userid,this.tempPwdInfo).then(t=>{console.log(t),"success"===t.status?(this.resetpwStatus=!0,l()("#ResetPasswordModal").modal("hide"),l()("#PasswordResetSuccessModal").modal("show")):(this.resetpwStatus=!1,this.errorMessage=t.record,l()("#ResetPasswordModal").modal("hide"),l()("#PasswordResetSuccessModal").modal("show"))}).catch(t=>{})})},setAccountStatus(){let t="disable";this.accountStatus&&(t="enable"),r["g"].get(this.userid,t).then(t=>{}).catch(t=>{})}}},u=d,m=(e("626d"),e("2877")),p=Object(m["a"])(u,a,o,!1,null,"8e9db6a2",null);s["default"]=p.exports},"58ba":function(t,s,e){"use strict";e.d(s,"a",(function(){return o})),e.d(s,"c",(function(){return c})),e.d(s,"d",(function(){return r})),e.d(s,"e",(function(){return i})),e.d(s,"f",(function(){return n})),e.d(s,"b",(function(){return l}));var a=e("a95a");const o={get:(t,s,e)=>"admin"===t?void 0===e||""===e?Object(a["b"])("/course/list/active/"+s):Object(a["b"])(`/course/list/active/${s}?filter=${e}`):(console.log("/course/list/active/"+e),Object(a["b"])("/course/list/active/"+e))},c={get:(t,s,e)=>"admin"===t?void 0===e||""===e?Object(a["b"])("/course/list/expired/"+s):Object(a["b"])(`/course/list/expired/${s}?filter=${e}`):Object(a["b"])("/course/list/expired/"+e)},r={get:()=>Object(a["b"])("/course/teacherlist")},i={post:(t,s)=>Object(a["c"])("/course/search/"+t,s)},n={put:(t,s)=>Object(a["d"])("/course/setinfo/"+t,s)},l={get:()=>Object(a["b"])("/course/list/all")}},"626d":function(t,s,e){"use strict";var a=e("046f"),o=e.n(a);o.a}}]);
//# sourceMappingURL=chunk-4f4befed.f3b968d9.js.map