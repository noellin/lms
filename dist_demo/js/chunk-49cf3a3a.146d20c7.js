(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49cf3a3a"],{2018:function(t,e,s){},"22d6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app2"}},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content page-aside-left"},[s("div",{staticClass:"main-content"},[s("course-header"),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 col-md"},[s("div",{staticClass:"card bg-secondary",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(" "+t._s(t.$t("degree-of-difficulty"))+" ")]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"5"}},[t._v(t._s(t.asgmtInfo.level))])])])])])]),s("div",{staticClass:"col-4 col-md"},[s("div",{staticClass:"card bg-primary",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(t._s(t.$t("completed")))]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"47"}},[t._v(t._s(t.asgmtInfo.completed))])])])])])]),s("div",{staticClass:"col-4 col-md"},[s("div",{staticClass:"card bg-success",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(" "+t._s(t.$t("incompleted"))+" ")]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"2"}},[t._v(t._s(t.asgmtInfo.incompleted))])])])])])]),s("div",{staticClass:"col-6 col-md"},[s("div",{staticClass:"card bg-danger",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(t._s(t.$t("fastest")))]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[void 0!==t.asgmtInfo.fastest?s("span",{staticClass:"display-6"},[t._v(t._s(t.asgmtInfo.fastest.username))]):t._e()])])])])])]),s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"pb-3"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_student",options:t.statusList},model:{value:t.selectStatus,callback:function(e){t.selectStatus=e},expression:"selectStatus"}})],1),s("div",{staticClass:"form-group form-rounded mb-0"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchSname,expression:"searchSname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search student name"},domProps:{value:t.searchSname},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchStudent()},input:function(e){e.target.composing||(t.searchSname=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchStudent()}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])])])]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary btn-rounded btn-outline mr-2",attrs:{type:"button",disabled:0===t.selectedStudent.length},on:{click:function(e){return t.UncheckAllA()}}},[t._v(" "+t._s(t.$t("uncheck"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded btn-outline",attrs:{type:"button",disabled:0===t.selectedStudent.length},on:{click:function(e){return t.checkAllA()}}},[t._v(" "+t._s(t.$t("check"))+" ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped"},[s("thead",[s("tr",[s("th",[s("div",{staticClass:"custom-control custom-checkbox form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllS,expression:"selectAllS"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck"},domProps:{checked:Array.isArray(t.selectAllS)?t._i(t.selectAllS,null)>-1:t.selectAllS},on:{click:t.selectAll,change:function(e){var s=t.selectAllS,a=e.target,i=!!a.checked;if(Array.isArray(s)){var c=null,n=t._i(s,c);a.checked?n<0&&(t.selectAllS=s.concat([c])):n>-1&&(t.selectAllS=s.slice(0,n).concat(s.slice(n+1)))}else t.selectAllS=i}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customCheck"}})])]),s("th",[t._v(t._s(t.$t("student-name")))]),s("th",[t._v(t._s(t.$t("progress")))]),s("th",[t._v(t._s(t.$t("complete-status")))]),s("th",[t._v(t._s(t.$t("status")))])])]),s("tbody",t._l(t.aProgressList,(function(e){return s("tr",{key:e.stuid},[s("td",[s("div",{staticClass:"custom-control custom-checkbox form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedStudent,expression:"selectedStudent"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.stuid},domProps:{value:e.stuid,checked:Array.isArray(t.selectedStudent)?t._i(t.selectedStudent,e.stuid)>-1:t.selectedStudent},on:{change:function(s){var a=t.selectedStudent,i=s.target,c=!!i.checked;if(Array.isArray(a)){var n=e.stuid,l=t._i(a,n);i.checked?l<0&&(t.selectedStudent=a.concat([n])):l>-1&&(t.selectedStudent=a.slice(0,l).concat(a.slice(l+1)))}else t.selectedStudent=c}}}),s("label",{staticClass:"custom-control-label",attrs:{for:e.stuid}})])]),s("td",[s("button",{staticClass:"btn btn-nostyle text-primary",attrs:{"data-toggle":"modal","data-target":"#CheckedModal"},on:{click:function(s){t.getADetail(e.stuid),t.sid=e.stuid,t.tempSname=e.username,t.evaluate={comment:"",score:""}}}},[t._v(" "+t._s(e.username)+" ")])]),s("td",[t._v(t._s(e.completed)+"/"+t._s(e.totalq))]),s("td",["true"!==e.completedflag?s("span",{staticClass:"text-warning"},[t._v(t._s(t.$t("incomplete")))]):s("span",{staticClass:"text-success"},[t._v(t._s(t.$t("completed")))])]),s("td",["true"!==e.checked?s("span",{staticClass:"text-danger"},[t._v(t._s(t.$t("unchecked")))]):s("span",{staticClass:"text-success"},[t._v(t._s(t.$t("checked")))])])])})),0)])])])])])])])],1)])]),s("div",{staticClass:"modal fade modal-xl",attrs:{id:"CheckedModal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-full modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$route.params.course))]),t._m(0)]),s("div",{staticClass:"modal-body bg-light p-5"},[s("h2",{staticClass:"pl-2"},[t._v(t._s(t.tempSname))]),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"col-9",attrs:{"data-scroll":"dark"}},[s("div",{staticClass:"mr-2"},t._l(t.studendAssignmentList,(function(e){return s("div",{key:e.asgmt_mid,staticClass:"card p-5"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media rounded pb-2"},[s("div",{staticClass:"align-self-center overlay-wrap mr-4 w-100 h-100 border"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://lms.mangosteems.com/cms/resdl/cover/"+e.resourceid,expression:"\n                            'https://lms.mangosteems.com/cms/resdl/cover/' +\n                            sa.resourceid\n                          "}],staticClass:"overlay-img cus-img",attrs:{alt:"course image"}})]),s("div",{staticClass:"media-body mr-3 mt-3 h-75"},["reading"===e.type||"mcq"===e.type?s("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(t.$t("reading")))]):"watching"===e.type?s("span",{staticClass:"badge badge-pill badge-warning"},[t._v(t._s(t.$t("watching")))]):"speaking"===e.type?s("span",{staticClass:"badge badge-pill badge-accent"},[t._v(t._s(t.$t("speaking-quiz")))]):t._e(),s("p",{staticClass:"mb-0 mt-1"},[t._v(t._s(e.resource_name))])])]),s("div",{staticClass:"border-top pt-3"},["true"!==e.complete_time&&"speaking"===e.type||"reading"===e.type&&""===e.complete_time||"watching"===e.type&&""===e.complete_time?s("h5",{staticClass:"text-danger"},[t._m(1,!0),t._v(t._s(t.$t("incomplete"))+" ")]):s("h5",{staticClass:"text-success"},[t._m(2,!0),t._v(t._s(t.$t("complete"))+" ")])]),"mcq"===e.type?s("div",{staticClass:"border-top pt-2"},[s("p",[t._v(" "+t._s(t.$t("total-number-of-incorrect-answers"))+" "),s("strong",{staticClass:"text-danger display-6"},[t._v(t._s(e.supplement.errno))])]),void 0===e.supplement.error_status?s("h5",{staticClass:"text-success"},[t._m(3,!0),t._v(t._s(t.$t("perfact"))+"! ")]):t._e(),s("ul",{staticClass:"d-flex justify-content-start mb-0"},t._l(e.supplement.error_status,(function(e,a){return s("li",{key:a,staticClass:"mr-3"},[s("div",{staticClass:"number-block bg-primary text-white rounded-circle"},[t._v(" "+t._s(a)+" ")]),s("p",{staticClass:"text-center text-danger pb-0"},[s("strong",[t._v(t._s(e))])])])})),0)]):t._e(),"speaking"===e.type?s("div",{staticClass:"border-top pt-2"},[s("ul",{staticClass:"quiz-list"},t._l(e.sentenceInfo,(function(e){return s("li",{key:e.sentenceid},[s("strong",{staticClass:"text-primary mr-2"},[t._v("Q"+t._s(e.sentenceSeq)+". "),s("br")]),t._v(" "+t._s(e.sentenceContent)),""!==e.voiceID?s("i",{staticClass:"zmdi zmdi-volume-up zmdi-hc-fw ml-1 pointer fa-lg",class:t.playVoiceStatus===e.voiceID?"text-success":"",on:{click:function(s){t.getVoice(e.voiceID),t.playVoiceStatus=e.voiceID}}}):t._e()])})),0),s("h6",{staticClass:"mt-4"},[t._v(" "+t._s(t.$t("speaking-quiz-score"))+" "),s("small",{staticClass:"text-muted"},[t._v("("+t._s(t.$t("optional"))+")")])]),s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col"},[s("div",{staticClass:"slidecontainer"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.speakingList[e.asgmt_mid],expression:"speakingList[sa.asgmt_mid]"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"100",id:e.asgmt_mid+"myRange"},domProps:{value:t.speakingList[e.asgmt_mid]},on:{__r:function(s){return t.$set(t.speakingList,e.asgmt_mid,s.target.value)}}}),s("span",{staticClass:"w-50 text-left text-primary",attrs:{id:e.asgmt_mid+"demo"}},[t._v(" "+t._s(t.speakingList[e.asgmt_mid])+" ")])])])])]):t._e()])])})),0)]),s("div",{staticClass:"col-3"},[s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v(t._s(t.$t("teacher-feedback")))]),s("div",{staticClass:"card-body"},[s("h6",[t._v(" "+t._s(t.$t("extra-bonus"))+" "),s("small",{staticClass:"text-muted"},[t._v("("+t._s(t.$t("optional"))+")")])]),s("div",{staticClass:"mt-3"},[s("a",{staticClass:"bonus",attrs:{title:""}},t._l(3,(function(e){return s("i",{key:e,staticClass:"la la-gift mr-1 display-6 active pointer",style:{color:t.evaluate.score>=e?"orange":""},on:{click:function(s){return t.giveScore(e)}}})})),0)]),s("h6",{staticClass:"mt-4"},[t._v(" "+t._s(t.$t("comments"))+" "),s("small",{staticClass:"text-muted"},[t._v("("+t._s(t.$t("optional"))+")")])]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.evaluate.comment,expression:"evaluate.comment"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"6",placeholder:"Leave a message to student..."},domProps:{value:t.evaluate.comment},on:{input:function(e){e.target.composing||t.$set(t.evaluate,"comment",e.target.value)}}}),s("div",{staticClass:"pt-2"},t._l(t.quickComments,(function(e){return s("button",{key:e,staticClass:"btn btn-secondary btn-outline btn-rounded btn-sm mb-2 mr-2",on:{click:function(s){return t.quickNewComments(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded mr-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal","data-toggle":"modal","data-target":"#AssignmentModal-2"},on:{click:function(e){return t.setEvaluate()}}},[t._v(" "+t._s(t.$t("check"))+" ")])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-rounded-icon btn-danger rounded mr-2"},[s("i",{staticClass:"zmdi zmdi-close zmdi-hc-fw text-white"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-rounded-icon btn-success rounded mr-2"},[s("i",{staticClass:"zmdi zmdi-check zmdi-hc-fw text-white"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"btn-rounded-icon btn-success rounded mr-2"},[s("i",{staticClass:"zmdi zmdi-check zmdi-hc-fw text-white"})])}],c=s("3ed2"),n=s("83cb"),l=s("2ef0"),o=s.n(l),r={name:"AssignmentProgress",components:{CourseHeader:c["a"]},data(){return{aid:this.$route.params.aid,sid:"",aProgressList:[],studendAssignmentList:[],evaluate:{score:"",comment:""},tempSname:"",quickComments:["Good Job!","Awesome!","Go for it!","You nailed it!","You are almost there!"],selectedStudent:[],statusList:[{text:"All students",id:"*"},{text:"Completed",id:"complete"},{text:"Incomplete",id:"incomplete"},{text:"Checked",id:"checked"},{text:"Unchecked",id:"unchecked"}],selectStatus:"*",searchSname:"",selectAllS:"",playVoiceStatus:"",speakingList:{},sentence:{},asgmtInfo:{level:"",completed:0,incompleted:0,fastest:""}}},created(){this.getAProgress()},mounted(){},methods:{giveScore(t){""===this.evaluate.score||this.evaluate.score!==t?this.evaluate.score=t:this.evaluate.score=""},searchStudent(){let t="*";""!==this.searchSname&&void 0!==this.searchSname&&null!==this.searchSname&&(t=this.searchSname),n["i"].get(this.aid,this.selectStatus,t).then(t=>{this.aProgressList=t.record}).catch(t=>{})},selectAll(t){const e=this;t.currentTarget.checked?(e.selectedStudent=[],e.aProgressList.forEach((function(t,s){e.selectedStudent.push(t.stuid)}))):e.selectedStudent=[]},getAProgress(){this.asgmtInfo={level:"",completed:0,incompleted:0,fastest:""};let t=this;n["f"].get(t.aid).then(e=>{"success"===e.status?(t.aProgressList=e.record,t.$store.dispatch("courseInfo/setAssignmentTime",{pubDate:e.publish_date,expDate:e.expiry_date}),e.record.forEach(e=>{t.asgmtInfo.level=e.difficult_level,"true"===e.completedflag?t.asgmtInfo.completed=t.asgmtInfo.completed+1:t.asgmtInfo.incompleted=t.asgmtInfo.incompleted+1}),o.a.each(e.record,t=>t.complete_time=parseInt(t.complete_time,10)),t.asgmtInfo.fastest=o.a.minBy(e.record,"complete_time"),console.log(t.asgmtInfo)):console.log(e.record)}).catch(t=>{console.log(t)})},quickNewComments(t){this.evaluate.comment="",this.evaluate.comment=this.evaluate.comment+t},async UncheckAllA(){let t=[...this.selectedStudent];n["l"].getAxiosAll(this.aid,t).then(t=>{this.getAProgress()}).catch(t=>{})},async checkAllA(){let t=this.selectedStudent.join(";"),e=await n["a"].post(this.aid,t).then(t=>{if("success"===t.status)return!0}).catch(t=>{});e&&this.getAProgress()},getADetail(t){this.evaluate={score:"",comment:""},n["c"].get(this.aid,t).then(t=>{if("failed"!==t.status){let e=t.record;e.forEach(t=>{"speaking"===t.type&&(this.$set(t,"complete_time","true"),t.complete_time,t.sentenceInfo.forEach(e=>{""===e.voiceID&&this.$set(t,"complete_time","")}))}),this.studendAssignmentList=e,console.log(e),void 0!==t.score&&void 0!==t.comment&&(this.evaluate.score=t.score,this.evaluate.comment=t.comment),t.record.forEach(t=>{if("speaking"===t.type){""===t.score?this.$set(this.speakingList,t.asgmt_mid,0):this.$set(this.speakingList,t.asgmt_mid,t.score);document.getElementById(t.asgmt_mid+"myRange")}})}}).catch(t=>{})},getVoice(t){let e=this;n["g"].get(t).then(t=>{if("image/jpeg"==t.type||"image/png"==t.type){var s=URL.createObjectURL(t);$("#showImg").attr("src",s)}else if("audio/mpeg"==t.type||"audio/wav"==t.type||"audio/x-wav"==t.type){s=URL.createObjectURL(t);const a=new Audio(s);console.log(a),a.play(),a.onended=function(){e.playVoiceStatus=""}}else console.log(t)}).catch(t=>{console.log(t)})},async setEvaluate(){this.evaluate.score=this.evaluate.score.toString();let t=await n["j"].post(this.aid,this.sid,this.evaluate).then(t=>{if("success"===t.status)return this.$bus.$emit("messsage:push","Check success","success"),!0;console.log(t.record),this.$bus.$emit("messsage:push",t.record,"danger")}).catch(t=>{});if(t){for await(const[t,e]of Object.entries(this.speakingList))this.setSpeakScore(t,e);await this.getAProgress()}},setSpeakScore(t,e){n["k"].get(this.aid,t,this.sid,e).then(t=>{console.log(t)}).catch(t=>{})}}},d=r,m=(s("f195"),s("2877")),u=Object(m["a"])(d,a,i,!1,null,"25f35504",null);e["default"]=u.exports},"3ed2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"page-header"},[s("div",{staticClass:"d-flex align-items-start"},[!0===t.backtag?s("div",{staticClass:"mt-2 mr-3"},[s("a",{staticClass:"btn-rounded-icon btn-primary ml-2 pointer",on:{click:t.$back}},[s("i",{staticClass:"zmdi zmdi-arrow-left zmdi-hc-fw text-white"})])]):t._e(),s("div",{staticClass:"mr-auto"},[s("h1",{staticClass:"separator"},[t._v(t._s(t.course_name))]),s("span",[t._v(t._s(t.page))]),"Dashboard"===t.type?s("span",{staticClass:"pointer",on:{click:function(e){return t.print()}}},[s("i",{staticClass:"zmdi zmdi-print"})]):t._e(),"Echo_Valley_Quiz"===t.$route.name?s("span",{staticClass:"ml-1 pointer",attrs:{"data-toggle":"modal","data-target":"#infoModal"}},[s("i",{staticClass:"fas fa-info-circle fa-sm mfilter-icon"})]):t._e(),"Speaking_Quiz"!==t.page?s("p",{staticClass:"second-title"},[t._v(" "+t._s(t.courseInfo.pkg_name)+" ")]):s("p",{staticClass:"second-title"},[t._v(t._s(t.rname)+" / "+t._s(t.mname))]),"Assignment_Progress"===t.$route.name?s("p",{staticClass:"second-title"},[t._v(" "+t._s(t.$t("assigned"))+" "+t._s(t._f("dateConversion")(t.assignmentDL.pubDate))+" - "+t._s(t.$t("due"))+" "+t._s(t._f("dateConversion")(t.assignmentDL.expDate))+" ")]):t._e(),"Weekly_Quiz_Progress"===t.$route.name?s("p",{staticClass:"second-title"},[t._v(" "+t._s(t.$t("echo-valley"))+" "+t._s(t._f("dateConversion")(t.weeklyQuizDL.pubDate))+" - "+t._s(t.$t("due"))+" "+t._s(t._f("dateConversion")(t.weeklyQuizDL.expDate))+" ")]):t._e()])]),s("div",{staticClass:"modal fade",attrs:{id:"infoModal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("echo-valley")))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(" "+t._s(t.$t("echo-valley-offers-weekly-oral-assignments-or-users-can-create-their-own-oral-assignments-which-will-be-automatically-scored-by-the-system-and-provide-relevant-information"))+". ")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-Cancel",attrs:{"aria-hidden":"true"}})])}],c=s("1157"),n=s.n(c),l={name:"CourseHeader",data(){return{backtag:this.$route.meta.backtag,page:"",rname:this.$route.params.rname,mname:this.$route.params.mname,course_name:this.$route.params.course,type:this.$route.params.type,courseInfo:{}}},created(){this.page=this.$route.name.replaceAll("_"," "),"undefined"===this.$route.params.mname&&(this.mname=""),this.courseInfo=this.courseInfos},mounted(){n()((function(){n()('[data-toggle="tooltip"]').tooltip()}))},watch:{courseInfos(){this.courseInfo=this.courseInfos}},computed:{courseInfos(){return this.$store.state.courseInfo.courseInfo},assignmentDL(){return this.$store.state.courseInfo.assignmentDL},weeklyQuizDL(){return this.$store.state.courseInfo.weeklyQuizDL}},methods:{print(){this.$print(this.$parent.$refs.print)}}},o=l,r=s("2877"),d=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=d.exports},"83cb":function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"e",(function(){return c})),s.d(e,"f",(function(){return n})),s.d(e,"j",(function(){return l})),s.d(e,"g",(function(){return o})),s.d(e,"k",(function(){return r})),s.d(e,"a",(function(){return d})),s.d(e,"l",(function(){return m})),s.d(e,"c",(function(){return u})),s.d(e,"i",(function(){return p})),s.d(e,"b",(function(){return h})),s.d(e,"h",(function(){return g}));var a=s("a95a");const i={get:(t,e)=>Object(a["b"])(`/asgmt/getlist/${t}/${e}`)},c={get:t=>Object(a["b"])("/asgmt/material/"+t)},n={get:t=>Object(a["b"])("/asgmt/progress/"+t)},l={post:(t,e,s)=>Object(a["c"])(`/asgmt/evaluate/${t}/${e}`,s)},o={get:t=>Object(a["a"])("/asgmt/play/voice/"+t)},r={get:(t,e,s,i)=>Object(a["b"])(`/asgmt/score/${t}/${e}/${s}/${i}`)},d={post:(t,e)=>Object(a["c"])("/asgmt/checkall/"+t,e)},m={getAxiosAll:(t,e)=>Promise.all(e.map(e=>Object(a["b"])(`/asgmt/uncheck/${t}/${e}`)))},u={get:(t,e)=>(console.log("std = ",e),Object(a["b"])(`/asgmt/detail/${t}/${e}`))},p={get:(t,e,s)=>Object(a["b"])(`/asgmt/search/${t}/${e}/${s}`)},h={getAxiosAll:t=>Promise.all(t.map(t=>Object(a["b"])("/asgmt/delete/"+t)))},g={post:(t,e)=>Object(a["c"])("/asgmt/modify/"+t,e)}},f195:function(t,e,s){"use strict";var a=s("2018"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-49cf3a3a.146d20c7.js.map