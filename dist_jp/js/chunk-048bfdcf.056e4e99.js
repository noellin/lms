(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-048bfdcf"],{"3ed2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"page-header"},[s("div",{staticClass:"d-flex align-items-start"},[!0===t.backtag?s("div",{staticClass:"mt-2 mr-3"},[s("a",{staticClass:"btn-rounded-icon btn-primary ml-2 pointer",on:{click:t.$back}},[s("i",{staticClass:"zmdi zmdi-arrow-left zmdi-hc-fw text-white"})])]):t._e(),s("div",{staticClass:"mr-auto"},[s("h1",{staticClass:"separator"},[t._v(t._s(t.course_name))]),s("span",[t._v(t._s(t.page))]),"Dashboard"===t.type?s("span",{staticClass:"pointer",on:{click:function(e){return t.print()}}},[s("i",{staticClass:"zmdi zmdi-print"})]):t._e(),"Echo_Valley_Quiz"===t.$route.name?s("span",{staticClass:"ml-1 pointer",attrs:{"data-toggle":"modal","data-target":"#infoModal"}},[s("i",{staticClass:"fas fa-info-circle fa-sm mfilter-icon"})]):t._e(),"Speaking_Quiz"!==t.page?s("p",{staticClass:"second-title"},[t._v(" "+t._s(t.courseInfo.pkg_name)+" ")]):s("p",{staticClass:"second-title"},[t._v(t._s(t.rname)+" / "+t._s(t.mname))]),"Assignment_Progress"===t.$route.name?s("p",{staticClass:"second-title"},[t._v(" "+t._s(t.$t("assigned"))+" "+t._s(t._f("dateConversion")(t.assignmentDL.pubDate))+" - "+t._s(t.$t("due"))+" "+t._s(t._f("dateConversion")(t.assignmentDL.expDate))+" ")]):t._e(),"Weekly_Quiz_Progress"===t.$route.name?s("p",{staticClass:"second-title"},[t._v(" "+t._s(t.$t("echo-valley"))+" "+t._s(t._f("dateConversion")(t.weeklyQuizDL.pubDate))+" - "+t._s(t.$t("due"))+" "+t._s(t._f("dateConversion")(t.weeklyQuizDL.expDate))+" ")]):t._e()])]),s("div",{staticClass:"modal fade",attrs:{id:"infoModal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("echo-valley")))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(" "+t._s(t.$t("echo-valley-offers-weekly-oral-assignments-or-users-can-create-their-own-oral-assignments-which-will-be-automatically-scored-by-the-system-and-provide-relevant-information"))+". ")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-Cancel",attrs:{"aria-hidden":"true"}})])}],n=s("1157"),o=s.n(n),d={name:"CourseHeader",data(){return{backtag:this.$route.meta.backtag,page:"",rname:this.$route.params.rname,mname:this.$route.params.mname,course_name:this.$route.params.course,type:this.$route.params.type,courseInfo:{}}},created(){this.page=this.$route.name.replaceAll("_"," "),"undefined"===this.$route.params.mname&&(this.mname=""),this.courseInfo=this.courseInfos},mounted(){o()((function(){o()('[data-toggle="tooltip"]').tooltip()}))},watch:{courseInfos(){this.courseInfo=this.courseInfos}},computed:{courseInfos(){return this.$store.state.courseInfo.courseInfo},assignmentDL(){return this.$store.state.courseInfo.assignmentDL},weeklyQuizDL(){return this.$store.state.courseInfo.weeklyQuizDL}},methods:{print(){this.$print(this.$parent.$refs.print)}}},r=d,l=s("2877"),c=Object(l["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},8692:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app2"}},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"content page-aside-left"},[s("div",{staticClass:"main-content"},[s("course-header"),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"card bg-primary",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(" "+t._s(t.$t("active-student"))+" ")]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"37"}},[t._v(t._s(t.courseStudentInfo.active))])])])])])]),s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"card bg-danger",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(" "+t._s(t.$t("non-active-student"))+" ")]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"2"}},[t._v(t._s(t.courseStudentInfo.suspend))])])])])])]),s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"card bg-success",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(t._s(t.$t("limit")))]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"50"}},[t._v(t._s(t.courseStudentInfo.quota))])])])])])])]),s("div",{staticClass:"d-flex justify-content-between mb-3"},[s("div",{staticClass:"form-group form-rounded mb-0"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchStudentName,expression:"searchStudentName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchStudentName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchStudent()},input:function(e){e.target.composing||(t.searchStudentName=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchStudent()}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary btn-outline btn-rounded mr-2",attrs:{type:"button"},on:{click:function(e){return t.exportSList()}}},[s("i",{staticClass:"zmdi zmdi-open-in-new zmdi-hc-fw"}),t._v(t._s(t.$t("export-student-list"))+" ")]),s("button",{staticClass:"btn btn-primary btn-outline btn-rounded mr-2",attrs:{type:"button","data-toggle":"modal","data-target":"#AddStudentModal"},on:{click:function(e){return t.resetStdTemp()}}},[s("i",{staticClass:"la la-plus"}),t._v(t._s(t.$t("add-student"))+" ")]),s("button",{staticClass:"btn btn-primary btn-outline btn-rounded",attrs:{type:"button","data-toggle":"modal","data-target":"#DeleteSModal"}},[s("i",{staticClass:"la la-trash"}),t._v(" "+t._s(t.$t("delete-student"))+" ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped"},[s("thead",[s("tr",[s("th",[s("div",{staticClass:"custom-control custom-checkbox form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllS,expression:"selectAllS"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck"},domProps:{checked:Array.isArray(t.selectAllS)?t._i(t.selectAllS,null)>-1:t.selectAllS},on:{click:t.selectAll,change:function(e){var s=t.selectAllS,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=null,o=t._i(s,n);a.checked?o<0&&(t.selectAllS=s.concat([n])):o>-1&&(t.selectAllS=s.slice(0,o).concat(s.slice(o+1)))}else t.selectAllS=i}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customCheck"}})])]),s("th",[t._v(t._s(t.$t("student-name")))]),s("th",[t._v(t._s(t.$t("parent-account")))]),s("th",[t._v(t._s(t.$t("remarks")))]),s("th",[t._v(t._s(t.$t("status")))]),s("th",[t._v(t._s(t.$t("edit")))]),s("th",[t._v(t._s(t.$t("reset-password")))])])]),s("tbody",[t._l(t.studentList,(function(e){return s("tr",{key:e.stuid},[s("td",[s("div",{staticClass:"custom-control custom-checkbox form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedStudents,expression:"selectedStudents"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.stuid},domProps:{value:e.stuid,checked:Array.isArray(t.selectedStudents)?t._i(t.selectedStudents,e.stuid)>-1:t.selectedStudents},on:{change:function(s){var a=t.selectedStudents,i=s.target,n=!!i.checked;if(Array.isArray(a)){var o=e.stuid,d=t._i(a,o);i.checked?d<0&&(t.selectedStudents=a.concat([o])):d>-1&&(t.selectedStudents=a.slice(0,d).concat(a.slice(d+1)))}else t.selectedStudents=n}}}),s("label",{staticClass:"custom-control-label",attrs:{for:e.stuid}})])]),s("td",[t._v(t._s(e.username))]),s("td",[t._v(t._s(e.parents))]),s("td",[t._v(t._s(e.remark))]),s("td",["true"===e.status?s("span",{staticClass:"text-success"},[t._v(t._s(t.$t("active")))]):s("span",{staticClass:"text-danger"},[t._v(t._s(t.$t("non-active")))])]),s("td",[s("button",{staticClass:"btn btn-nostyle",attrs:{type:"","data-toggle":"modal","data-target":"#SettingModal"},on:{click:function(s){return t.setTempStudent(e)}}},[s("i",{staticClass:"la la-edit"})])]),s("td",[s("button",{staticClass:"btn btn-primary btn-sm btn-rounded",attrs:{type:"","data-toggle":"modal","data-target":"#ResetPasswordModal"},on:{click:function(s){t.tempSid=e.stuid,t.tempSname=e.username,t.selectEmoji=[]}}},[t._v(" "+t._s(t.$t("reset"))+" ")])])])})),0===t.studentList.length?s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"9"}},[s("h5",[t._v(" "+t._s(t.$t("no-students"))+" ")])])]):t._e()],2)])])])])])])])],1)])]),s("div",{staticClass:"modal fade",attrs:{id:"SettingModal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("setting")))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("form",[s("ValidationObserver",{ref:"editStdForm"},[s("ValidationProvider",{attrs:{rules:"required",name:"Studend name"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.failed,i=e.errors;return[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label text-right",attrs:{for:""}},[t._v(t._s(t.$t("student-name")))]),s("div",{staticClass:"col-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempStudent.username,expression:"tempStudent.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"Constance"},domProps:{value:t.tempStudent.username},on:{input:function(e){e.target.composing||t.$set(t.tempStudent,"username",e.target.value)}}}),a?s("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))]):t._e()])])]}}])}),s("ValidationProvider",{attrs:{rules:"required",name:"Unique number"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.failed,i=e.errors;return[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label text-right",attrs:{for:""}},[t._v(t._s(t.$t("parents-phone-number")))]),s("div",{staticClass:"col-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempStudent.uni_info,expression:"tempStudent.uni_info"}],staticClass:"form-control",attrs:{type:"text",placeholder:"",value:""},domProps:{value:t.tempStudent.uni_info},on:{input:function(e){e.target.composing||t.$set(t.tempStudent,"uni_info",e.target.value)}}}),a?s("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))]):t._e()])])]}}])}),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label text-right",attrs:{for:""}},[t._v(t._s(t.$t("remarks")))]),s("div",{staticClass:"col-8"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempStudent.remark,expression:"tempStudent.remark"}],staticClass:"form-control",attrs:{name:""},domProps:{value:t.tempStudent.remark},on:{input:function(e){e.target.composing||t.$set(t.tempStudent,"remark",e.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label col-form-label-sm text-right"},[t._v(t._s(t.$t("status")))]),s("div",{staticClass:"switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempStudent.status,expression:"tempStudent.status"}],staticClass:"tgl tgl-light tgl-success",attrs:{id:"cb8",type:"checkbox",checked:""},domProps:{checked:Array.isArray(t.tempStudent.status)?t._i(t.tempStudent.status,null)>-1:t.tempStudent.status},on:{change:function(e){var s=t.tempStudent.status,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=null,o=t._i(s,n);a.checked?o<0&&t.$set(t.tempStudent,"status",s.concat([n])):o>-1&&t.$set(t.tempStudent,"status",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.tempStudent,"status",i)}}}),s("label",{staticClass:"tgl-btn",attrs:{for:"cb8"}})]),s("div",{staticClass:"col"},[t.tempStudent.status?s("span",{staticClass:"text-success mt-1"},[t._v(t._s(t.$t("active")))]):s("span",{staticClass:"text-danger mt-1"},[t._v(t._s(t.$t("non-active")))])])])],1)],1)]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.modifyStudent()}}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),s("add-student",{ref:"addstudent",attrs:{id:"studentdrop",courseid:t.courseid}}),s("div",{staticClass:"modal fade",attrs:{id:"ResetPasswordModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("reset-password")))]),t._m(1)]),s("div",{staticClass:"modal-body"},[s("h4",{staticClass:"mb-4 mt-2"},[t._v(t._s(t.tempSname))]),s("p",[t._v(t._s(t.$t("choose-2-pictures-to-reset-password")))]),s("ul",{staticClass:"reset-password d-flex justify-content-start flex-wrap p-20"},t._l(t.emojiList,(function(e){return s("li",{key:e},[s("a",{staticClass:"pointer",class:{active:t.selectEmoji.includes(e)},attrs:{title:""},domProps:{innerHTML:t._s(e)},on:{click:function(s){return t.setPassword(e)}}})])})),0)]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.resetPWD()}}},[t._v(" "+t._s(t.$t("reset"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"DeleteSModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"ModalTitle1"}},[t._v(" "+t._s(t.$t("delete-student"))+" ")]),t._m(2)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(t._s(t.$t("want-to-delete-a-checked-students"))+"?")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.deleteStudentAll()}}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-Cancel",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],n=s("3ed2"),o=s("b349"),d=s("3ed9"),r=s("1157"),l=s.n(r),c={name:"CourseStudent",components:{CourseHeader:n["a"],AddStudent:o["a"]},data(){return{courseid:this.$route.params.courseid,studentList:[],tempStudent:{name:"",status:"",remark:"",uni_info:""},tempSid:"",tempSname:"",searchStudentName:"",courseid:this.$route.params.courseid,emojiList:["🌳","🔑","🔥","🍦","🌼","🍭","🎀","📗","🥕","🌛","🍎","🐘","🍔","🕜","📺","🚗","🏀","🏠","🐄","👒"],selectEmoji:[],courseStudentInfo:{},selectAllS:"",selectedStudents:[]}},created(){},mounted(){this.studentList=this.studentLists,this.courseStudentInfo=this.courseStudentInfos},watch:{studentLists(){this.studentList=this.studentLists},courseStudentInfos(){this.courseStudentInfo=this.courseStudentInfos}},computed:{studentLists(){return this.$store.state.courseInfo.studentList},courseStudentInfos(){return this.$store.state.courseInfo.courseStudentInfo[0]}},methods:{init(){},selectAll(t){const e=this;t.currentTarget.checked?(e.selectedStudents=[],e.studentList.forEach((function(t,s){e.selectedStudents.push(t.stuid)}))):e.selectedStudents=[]},resetStdTemp(){this.$refs.addstudent.resetStdTemp()},setPassword(t){this.selectEmoji.length<2||this.selectEmoji.shift(),this.selectEmoji.push(t)},searchStudent(){let t=this.searchStudentName;""===this.searchStudentName&&(t="*"),d["k"].get(this.courseid,t).then(t=>{this.studentList=t.record}).catch(t=>{})},exportSList(){d["e"].get(this.courseid).then(t=>{var e=window.URL.createObjectURL(new Blob([t])),s=document.createElement("a");s.href=e,s.setAttribute("target","_blank"),s.setAttribute("download","Student.csv"),document.body.appendChild(s),s.click()}).catch(t=>{})},async modifyStudent(){let t={};t.name=this.tempStudent.username,t.status=this.tempStudent.status.toString(),t.remark=this.tempStudent.remark,t.uniinfo=this.tempStudent.uni_info;let e=await this.$refs.editStdForm.validate().then(t=>{if(t)return l()("#SettingModal").modal("hide"),!0});if(e){let e=await d["i"].post(this.courseid,this.tempStudent.stuid,t).then(t=>{if(console.log(t),"success"===t.status)return!0;this.$bus.$emit("messsage:push",t.record,"danger")}).catch(t=>{});e&&(this.$bus.$emit("messsage:push","Edit completed.","success"),this.$store.dispatch("courseInfo/updateStudent",this.courseid))}},resetPWD(){let t={imgpw:this.selectEmoji.toString().replace(",","")};d["j"].post(this.tempSid,t).then(t=>{console.log(t)}).catch(t=>{})},setTempStudent(t){this.tempStudent=Object.assign({},t),"true"===t.status?this.tempStudent.status=!0:this.tempStudent.status=!1},async deleteStudentAll(){d["c"].getAxiosAll(this.courseid,this.selectedStudents).then(t=>{console.log(t),this.selectedStudents=[],this.$store.dispatch("courseInfo/updateStudent",this.courseid),this.$bus.$emit("messsage:push","Delete completed.","success")}).catch(t=>t)}}},u=c,m=(s("f984"),s("2877")),p=Object(m["a"])(u,a,i,!1,null,"0ae9c202",null);e["default"]=p.exports},d55c:function(t,e,s){},f984:function(t,e,s){"use strict";var a=s("d55c"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-048bfdcf.056e4e99.js.map