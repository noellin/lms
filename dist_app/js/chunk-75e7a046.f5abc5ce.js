(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-75e7a046"],{"22d6":function(t,e,s){"use strict";s.r(e);var a=s("83cb"),i=s("c641"),c=s.n(i),n=s("80f6"),l=s.n(n),o={name:"AssignmentProgress",components:{CourseHeader:()=>s.e("chunk-2d0c5756").then(s.bind(null,"3ed2"))},data(){return{aid:this.$route.params.aid,sid:"",aProgressList:[],studendAssignmentList:[],evaluate:{score:"",comment:""},tempSname:"",quickComments:["Good Job!","Awesome!","Go for it!","You nailed it!","You are almost there!"],selectedStudent:[],statusList:[{text:"All students",id:"*"},{text:"Completed",id:"complete"},{text:"Incompleted",id:"incomplete"},{text:"Checked",id:"checked"},{text:"Unchecked",id:"unchecked"}],selectStatus:"*",searchSname:"",selectAllS:"",playVoiceStatus:"",speakingList:{},sentence:{},asgmtInfo:{level:"",completed:0,incompleted:0,fastest:""},audio:void 0,havaPlayurl:!1}},created(){this.getAProgress()},mounted(){},methods:{stopVoice(){this.audio.pause(),this.playVoiceStatus=""},giveScore(t){""===this.evaluate.score||this.evaluate.score!==t?this.evaluate.score=t:this.evaluate.score=""},searchStudent(){let t="*";""!==this.searchSname&&void 0!==this.searchSname&&null!==this.searchSname&&(t=this.searchSname),a.i.get(this.aid,this.selectStatus,t).then(t=>{this.aProgressList=t.record}).catch(t=>{})},selectAll(t){const e=this;t.currentTarget.checked?(e.selectedStudent=[],e.aProgressList.forEach((function(t,s){e.selectedStudent.push(t.stuid)}))):e.selectedStudent=[]},getAProgress(){this.asgmtInfo={level:"",completed:0,incompleted:0,fastest:""};let t=this;a.f.get(t.aid).then(e=>{"success"===e.status?(t.aProgressList=e.record,t.$store.dispatch("courseInfo/setAssignmentTime",{pubDate:e.publish_date,expDate:e.expiry_date}),e.record.forEach(e=>{t.asgmtInfo.level=e.difficult_level,"true"===e.completedflag?t.asgmtInfo.completed=t.asgmtInfo.completed+1:t.asgmtInfo.incompleted=t.asgmtInfo.incompleted+1}),c()(e.record,t=>t.complete_time=parseInt(t.complete_time,10)),t.asgmtInfo.fastest=l()(e.record,"complete_time"),console.log(t.asgmtInfo)):console.log(e.record)}).catch(t=>{console.log(t)})},quickNewComments(t){this.evaluate.comment="",this.evaluate.comment=this.evaluate.comment+t},async UncheckAllA(){let t=[...this.selectedStudent];a.l.getAxiosAll(this.aid,t).then(t=>{this.getAProgress()}).catch(t=>{})},async checkAllA(){let t=this.selectedStudent.join(";");await a.a.post(this.aid,t).then(t=>{if("success"===t.status)return!0}).catch(t=>{})&&this.getAProgress()},getADetail(t){this.evaluate={score:"",comment:""},a.c.get(this.aid,t).then(t=>{if("failed"!==t.status){let e=t.record;e.forEach(t=>{"speaking"===t.type&&(this.$set(t,"complete_time","true"),t.complete_time,t.sentenceInfo.forEach(e=>{""===e.voiceID&&this.$set(t,"complete_time","")}))}),this.studendAssignmentList=e,console.log(e),void 0!==t.score&&void 0!==t.comment&&(this.evaluate.score=t.score,this.evaluate.comment=t.comment),t.record.forEach(t=>{if("speaking"===t.type){""===t.score?this.$set(this.speakingList,t.asgmt_mid,0):this.$set(this.speakingList,t.asgmt_mid,t.score);document.getElementById(t.asgmt_mid+"myRange")}})}}).catch(t=>{})},getVoice(t){this.havaPlayurl&&this.audio.pause();let e=this;a.g.get(t).then(t=>{if("image/jpeg"==t.type||"image/png"==t.type){var s=URL.createObjectURL(t);$("#showImg").attr("src",s)}else if("audio/mpeg"==t.type||"audio/wav"==t.type||"audio/x-wav"==t.type){s=URL.createObjectURL(t);this.audio=new Audio(s),console.log(this.audio),this.audio.play(),this.audio.onended=function(){e.playVoiceStatus=""},this.havaPlayurl=!0}else console.log(t)}).catch(t=>{console.log(t)})},async setEvaluate(){if(this.evaluate.score=this.evaluate.score.toString(),console.log("setEvaluate"),console.log(this.aid,this.sid,this.evaluate),await a.j.post(this.aid,this.sid,this.evaluate).then(t=>{if("success"===t.status)return this.$bus.$emit("messsage:push","Check success","success"),!0;console.log(t.record),this.$bus.$emit("messsage:push",t.record,"danger")}).catch(t=>{})){for await(const[t,e]of Object.entries(this.speakingList))this.setSpeakScore(t,e);await this.getAProgress()}},setSpeakScore(t,e){a.k.get(this.aid,t,this.sid,e).then(t=>{console.log(t)}).catch(t=>{})}}},r=(s("7032"),s("2877")),d=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app2"}},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content page-aside-left"},[s("div",{staticClass:"main-content"},[s("course-header"),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4 col-md"},[s("div",{staticClass:"card bg-secondary",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(" "+t._s(t.$t("degree-of-difficulty"))+" ")]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"5"}},[t._v(t._s(t.asgmtInfo.level))])])])])])]),s("div",{staticClass:"col-4 col-md"},[s("div",{staticClass:"card bg-primary",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(t._s(t.$t("completed")))]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"47"}},[t._v(t._s(t.asgmtInfo.completed))])])])])])]),s("div",{staticClass:"col-4 col-md"},[s("div",{staticClass:"card bg-success",staticStyle:{height:"150px"}},[s("div",{staticClass:"card-body d-flex align-content-between flex-wrap"},[s("h5",{staticClass:"card-title text-white"},[t._v(" "+t._s(t.$t("incompleted"))+" ")]),s("div",{staticClass:"w100 text-right"},[s("p",{staticClass:"card-text text-white"},[s("span",{staticClass:"display-4 counter",attrs:{"data-count":"2"}},[t._v(t._s(t.asgmtInfo.incompleted))])])])])])])]),s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"pb-3"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_student",options:t.statusList},model:{value:t.selectStatus,callback:function(e){t.selectStatus=e},expression:"selectStatus"}})],1),s("div",{staticClass:"form-group form-rounded mb-0"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchSname,expression:"searchSname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search student name"},domProps:{value:t.searchSname},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchStudent()},input:function(e){e.target.composing||(t.searchSname=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchStudent()}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])])])]),"expired"!==t.$route.params.expired?s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary btn-rounded btn-outline mr-2",attrs:{type:"button",disabled:0===t.selectedStudent.length},on:{click:function(e){return t.UncheckAllA()}}},[t._v(" "+t._s(t.$t("uncheck"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded btn-outline",attrs:{type:"button",disabled:0===t.selectedStudent.length},on:{click:function(e){return t.checkAllA()}}},[t._v(" "+t._s(t.$t("check"))+" ")])]):t._e()]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped"},[s("thead",[s("tr",["expired"!==t.$route.params.expired?s("th",[s("div",{staticClass:"custom-control custom-checkbox form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllS,expression:"selectAllS"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck"},domProps:{checked:Array.isArray(t.selectAllS)?t._i(t.selectAllS,null)>-1:t.selectAllS},on:{click:t.selectAll,change:function(e){var s=t.selectAllS,a=e.target,i=!!a.checked;if(Array.isArray(s)){var c=t._i(s,null);a.checked?c<0&&(t.selectAllS=s.concat([null])):c>-1&&(t.selectAllS=s.slice(0,c).concat(s.slice(c+1)))}else t.selectAllS=i}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customCheck"}})])]):t._e(),s("th",[t._v(t._s(t.$t("student-name")))]),s("th",[t._v(t._s(t.$t("progress")))]),s("th",[t._v(t._s(t.$t("complete-status")))]),s("th",[t._v(t._s(t.$t("status")))])])]),s("tbody",t._l(t.aProgressList,(function(e){return s("tr",{key:e.stuid},["expired"!==t.$route.params.expired?s("td",[s("div",{staticClass:"custom-control custom-checkbox form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedStudent,expression:"selectedStudent"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.stuid},domProps:{value:e.stuid,checked:Array.isArray(t.selectedStudent)?t._i(t.selectedStudent,e.stuid)>-1:t.selectedStudent},on:{change:function(s){var a=t.selectedStudent,i=s.target,c=!!i.checked;if(Array.isArray(a)){var n=e.stuid,l=t._i(a,n);i.checked?l<0&&(t.selectedStudent=a.concat([n])):l>-1&&(t.selectedStudent=a.slice(0,l).concat(a.slice(l+1)))}else t.selectedStudent=c}}}),s("label",{staticClass:"custom-control-label",attrs:{for:e.stuid}})])]):t._e(),s("td",["expired"!==t.$route.params.expired?s("button",{staticClass:"btn btn-nostyle text-primary",attrs:{"data-toggle":"modal","data-target":"#CheckedModal"},on:{click:function(s){t.getADetail(e.stuid),t.sid=e.stuid,t.tempSname=e.username,t.evaluate={comment:"",score:""}}}},[t._v(" "+t._s(e.username)+" ")]):s("span",[t._v(t._s(e.username))])]),s("td",[t._v(t._s(e.completed)+"/"+t._s(e.totalq))]),s("td",["true"!==e.completedflag?s("span",{staticClass:"text-warning"},[t._v(t._s(t.$t("incompleted")))]):s("span",{staticClass:"text-success"},[t._v(t._s(t.$t("completed")))])]),s("td",["true"!==e.checked?s("span",{staticClass:"text-danger"},[t._v(t._s(t.$t("unchecked")))]):s("span",{staticClass:"text-success"},[t._v(t._s(t.$t("checked")))])])])})),0)])])])])])])])],1)])]),s("div",{staticClass:"modal fade modal-xl",attrs:{id:"CheckedModal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-full modal-xl",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$route.params.course))]),t._m(0)]),s("div",{staticClass:"modal-body bg-light p-5"},[s("h2",{staticClass:"pl-2"},[t._v(t._s(t.tempSname))]),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"col-9",attrs:{"data-scroll":"dark"}},[s("div",{staticClass:"mr-2"},t._l(t.studendAssignmentList,(function(e){return s("div",{key:e.asgmt_mid,staticClass:"card p-5"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media rounded pb-2"},[s("div",{staticClass:"align-self-center overlay-wrap mr-4 w-100 h-100 border"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://lms.mangosteems.com/cms/resdl/cover/"+e.resourceid,expression:"\n                            'https://lms.mangosteems.com/cms/resdl/cover/' +\n                            sa.resourceid\n                          "}],staticClass:"overlay-img cus-img",attrs:{alt:"course image"}})]),s("div",{staticClass:"media-body mr-3 mt-3 h-75"},["reading"===e.type||"mcq"===e.type?s("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(t.$t("reading")))]):"watching"===e.type?s("span",{staticClass:"badge badge-pill badge-warning"},[t._v(t._s(t.$t("watching")))]):"speaking"===e.type?s("span",{staticClass:"badge badge-pill badge-accent"},[t._v(t._s(t.$t("speaking-quiz")))]):t._e(),s("p",{staticClass:"mb-0 mt-1"},[t._v(t._s(e.resource_name))])])]),s("div",{staticClass:"border-top pt-3"},["true"!==e.complete_time&&"speaking"===e.type||"reading"===e.type&&""===e.complete_time||"watching"===e.type&&""===e.complete_time?s("h5",{staticClass:"text-danger"},[t._m(1,!0),t._v(t._s(t.$t("incompleted"))+" ")]):s("h5",{staticClass:"text-success"},[t._m(2,!0),t._v(t._s(t.$t("completed"))+" ")])]),"mcq"===e.type?s("div",{staticClass:"border-top pt-2"},[s("p",[t._v(" "+t._s(t.$t("total-number-of-incorrect-answers"))+" "),s("strong",{staticClass:"text-danger display-6"},[t._v(t._s(e.supplement.errno))])]),void 0===e.supplement.error_status?s("h5",{staticClass:"text-success"},[t._m(3,!0),t._v(t._s(t.$t("perfact"))+"! ")]):t._e(),s("ul",{staticClass:"d-flex justify-content-start mb-0"},t._l(e.supplement.error_status,(function(e,a){return s("li",{key:a,staticClass:"mr-3"},[s("div",{staticClass:"number-block bg-primary text-white rounded-circle"},[t._v(" "+t._s(a)+" ")]),s("p",{staticClass:"text-center text-danger pb-0"},[s("strong",[t._v(t._s(e))])])])})),0)]):t._e(),"speaking"===e.type?s("div",{staticClass:"border-top pt-2"},[s("ul",{staticClass:"quiz-list"},t._l(e.sentenceInfo,(function(e){return s("li",{key:e.sentenceid},[s("strong",{staticClass:"text-primary mr-2"},[t._v("Q"+t._s(e.sentenceSeq)+". "),s("br")]),t._v(" "+t._s(e.sentenceContent)),""!==e.voiceID?s("i",{staticClass:"zmdi zmdi-volume-up zmdi-hc-fw mx-1 pointer zmdi-hc-2x",class:t.playVoiceStatus===e.voiceID?"text-success":"",on:{click:function(s){t.getVoice(e.voiceID),t.playVoiceStatus=e.voiceID}}}):t._e(),t.playVoiceStatus===e.voiceID&&""!==e.voiceID?s("i",{staticClass:"zmdi zmdi-stop pointer zmdi-hc-2x text-danger",on:{click:function(e){return t.stopVoice()}}}):t._e()])})),0),s("h6",{staticClass:"mt-4"},[t._v(" "+t._s(t.$t("speaking-quiz-score"))+" "),s("small",{staticClass:"text-muted"},[t._v("("+t._s(t.$t("optional"))+")")])]),s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col"},[s("div",{staticClass:"slidecontainer"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.speakingList[e.asgmt_mid],expression:"speakingList[sa.asgmt_mid]"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"100",id:e.asgmt_mid+"myRange"},domProps:{value:t.speakingList[e.asgmt_mid]},on:{__r:function(s){return t.$set(t.speakingList,e.asgmt_mid,s.target.value)}}}),s("span",{staticClass:"w-50 text-left text-primary",attrs:{id:e.asgmt_mid+"demo"}},[t._v(" "+t._s(t.speakingList[e.asgmt_mid])+" ")])])])])]):t._e()])])})),0)]),s("div",{staticClass:"col-3"},[s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v(t._s(t.$t("teacher-feedback")))]),s("div",{staticClass:"card-body"},[s("h6",[t._v(" "+t._s(t.$t("extra-bonus"))+" "),s("small",{staticClass:"text-muted"},[t._v("("+t._s(t.$t("optional"))+")")])]),s("div",{staticClass:"mt-3"},[s("a",{staticClass:"bonus",attrs:{title:""}},t._l(3,(function(e){return s("i",{key:e,staticClass:"la la-gift mr-1 display-6 active pointer",style:{color:t.evaluate.score>=e?"orange":""},on:{click:function(s){return t.giveScore(e)}}})})),0)]),s("h6",{staticClass:"mt-4"},[t._v(" "+t._s(t.$t("comments"))+" "),s("small",{staticClass:"text-muted"},[t._v("("+t._s(t.$t("optional"))+")")])]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.evaluate.comment,expression:"evaluate.comment"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"6",placeholder:"Leave a message to student..."},domProps:{value:t.evaluate.comment},on:{input:function(e){e.target.composing||t.$set(t.evaluate,"comment",e.target.value)}}}),s("div",{staticClass:"pt-2"},t._l(t.quickComments,(function(e){return s("button",{key:e,staticClass:"btn btn-secondary btn-outline btn-rounded btn-sm mb-2 mr-2",on:{click:function(s){return t.quickNewComments(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded mr-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal","data-toggle":"modal","data-target":"#AssignmentModal-2"},on:{click:function(e){return t.setEvaluate()}}},[t._v(" "+t._s(t.$t("check"))+" ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"btn-rounded-icon btn-danger rounded mr-2"},[e("i",{staticClass:"zmdi zmdi-close zmdi-hc-fw text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"btn-rounded-icon btn-success rounded mr-2"},[e("i",{staticClass:"zmdi zmdi-check zmdi-hc-fw text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"btn-rounded-icon btn-success rounded mr-2"},[e("i",{staticClass:"zmdi zmdi-check zmdi-hc-fw text-white"})])}],!1,null,"47b5b084",null);e.default=d.exports},7032:function(t,e,s){"use strict";var a=s("a9e6");s.n(a).a},"83cb":function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"e",(function(){return c})),s.d(e,"f",(function(){return n})),s.d(e,"j",(function(){return l})),s.d(e,"g",(function(){return o})),s.d(e,"k",(function(){return r})),s.d(e,"a",(function(){return d})),s.d(e,"l",(function(){return m})),s.d(e,"c",(function(){return u})),s.d(e,"i",(function(){return p})),s.d(e,"b",(function(){return h})),s.d(e,"h",(function(){return g}));var a=s("a95a");const i={get:(t,e)=>Object(a.b)(`/asgmt/getlist/${t}/${e}`)},c={get:t=>(console.log(t),Object(a.b)("/asgmt/material/"+t))},n={get:t=>Object(a.b)("/asgmt/progress/"+t)},l={post:(t,e,s)=>Object(a.d)(`/asgmt/evaluate/${t}/${e}`,s)},o={get:t=>Object(a.a)("/asgmt/play/voice/"+t)},r={get:(t,e,s,i)=>Object(a.b)(`/asgmt/score/${t}/${e}/${s}/${i}`)},d={post:(t,e)=>Object(a.d)("/asgmt/checkall/"+t,e)},m={getAxiosAll:(t,e)=>Promise.all(e.map(e=>Object(a.b)(`/asgmt/uncheck/${t}/${e}`)))},u={get:(t,e)=>(console.log("std = ",e),Object(a.b)(`/asgmt/detail/${t}/${e}`))},p={get:(t,e,s)=>Object(a.b)(`/asgmt/search/${t}/${e}/${s}`)},h={getAxiosAll:t=>Promise.all(t.map(t=>Object(a.b)("/asgmt/delete/"+t)))},g={post:(t,e)=>Object(a.d)("/asgmt/modify/"+t,e)}},a9e6:function(t,e,s){}}]);
//# sourceMappingURL=chunk-75e7a046.f5abc5ce.js.map