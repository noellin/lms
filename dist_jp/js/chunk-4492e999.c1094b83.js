(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4492e999"],{"4aaf":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app2"}},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content page-aside-left"},[s("div",{staticClass:"main-content"},[s("course-header"),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"pb-3"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_student",options:t.search.options},model:{value:t.selectOption,callback:function(e){t.selectOption=e},expression:"selectOption"}})],1),s("div",{staticClass:"form-group form-rounded mb-0"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search.keyword,expression:"search.keyword"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search Student name"},domProps:{value:t.search.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchWQStudent()},input:function(e){e.target.composing||t.$set(t.search,"keyword",e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchWQStudent()}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body row col-sm-12"},[s("div",{staticClass:"col-sm-12"},[s("p",[t._v(" "+t._s(t.$t("the-questions-of-the-echo-valley-are-selected-by-the-system-based-on-material-you-can-also-enter-the-question-yourself"))+". ")])]),s("div",{staticClass:"col-sm-12"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.weeklyQuiz.sentence,expression:"weeklyQuiz.sentence"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea2",placeholder:"Please enter a question of the Echo Valley...",rows:"6",disabled:""},domProps:{value:t.weeklyQuiz.sentence},on:{input:function(e){e.target.composing||t.$set(t.weeklyQuiz,"sentence",e.target.value)}}}),s("span",{staticClass:"text-muted"},[s("small",[t._v(t._s(t.weeklyQuiz.sentence.length)+"/500")])]),s("div",{staticClass:"col-sm-12 px-0 mt-2"},[s("label",{staticClass:"col-form-label col-sm-12 px-0"},[t._v(t._s(t.$t("date-of-publication")))]),s("span",{staticClass:"mr-2"},[t._v(t._s(t._f("arrayToString")(t.weeklyQuiz.publishTime)))])]),s("div",{staticClass:"col-sm-12 d-flex justify-content-start px-0 mt-4"},[t.allowEdit?s("button",{staticClass:"btn btn-primary btn-outline btn-rounded",attrs:{type:"button","data-toggle":"modal","data-target":"#ModifyModal"}},[t._v(" "+t._s(t.$t("modify"))+" ")]):t._e()])])])])])]),0!==t.wqStudentList.length?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.$t("student-name")))]),s("th",[t._v(t._s(t.$t("score")))]),s("th",[t._v(t._s(t.$t("record")))])])]),s("tbody",t._l(t.wqStudentList,(function(e){return s("tr",{key:e.userid},[s("td",[t._v(t._s(e.username))]),s("td",[0!==t.wqStudentList.length&&e.stu_info.length>0?s("span",[t._v(" "+t._s(e.stu_info[1])+" ")]):s("span")]),0!==t.wqStudentList.length&&e.stu_info.length>0?s("td",[s("button",{staticClass:"btn btn-nostyle"},[s("i",{staticClass:"zmdi zmdi-volume-up zmdi-hc-fw ml-2 text-primary",class:t.playVoiceStatus===e.stu_info[1]?"text-success":"",on:{click:function(s){t.getVoice(e.stu_info[0]),t.playVoiceStatus=e.stu_info[1]}}})])]):s("td",[t._v(t._s(t.$t("incomplete")))])])})),0)])])])])])]):t._e()])],1)])])]),s("div",{staticClass:"modal fade",attrs:{id:"ModifyModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"ModalTitle1"}},[t._v(" "+t._s(t.$t("modify-echo-valley"))+" ")]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.weeklyQuiz.sentence,expression:"weeklyQuiz.sentence"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",placeholder:"Please enter a question of the Echo Valley...",rows:"6",maxlength:"500"},domProps:{value:t.weeklyQuiz.sentence},on:{input:function(e){e.target.composing||t.$set(t.weeklyQuiz,"sentence",e.target.value)}}}),s("span",{staticClass:"text-muted"},[s("small",[t._v(t._s(t.weeklyQuiz.sentence.length)+"/500")])]),s("label",{staticClass:"col-form-label col-sm-12 px-0"},[t._v(t._s(t.$t("date-of-publication")))]),s("date-picker",{attrs:{type:"date",valueType:"format",range:"",placeholder:"Select date range","disabled-date":t.disabledBeforeToday},model:{value:t.weeklyQuiz.publishTime,callback:function(e){t.$set(t.weeklyQuiz,"publishTime",e)},expression:"weeklyQuiz.publishTime"}})],1),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal",disabled:""===t.weeklyQuiz.sentence||2!==t.weeklyQuiz.publishTime.length},on:{click:function(e){return t.modifyWQ()}}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],o=s("3ed2"),n=s("ca8e"),l=s("83cb"),c=s("5a0c"),r=s.n(c),d=s("ec45"),u=(s("411c"),{components:{CourseHeader:o["a"],DatePicker:d["a"]},data(){return{search:{options:[{text:"All students",id:"*"},{text:"Completed",id:"finish"},{text:"Incomplete",id:"ongoing"}],keyword:""},selectOption:"*",courseid:this.$route.params.courseid,echoid:this.$route.params.echoid,wqStudentList:[],weeklyQuiz:{sentence:"",publishTime:[]},publishDay:"",playVoiceStatus:""}},mounted(){this.getDetail()},computed:{allowEdit(){if(""!==this.publishDay){let t=new Date;return t.setHours(0,0,0,0),console.log(this.publishDay),console.log(r()(t).isBefore(r()(this.publishDay))),r()(t).isBefore(r()(this.publishDay))}}},methods:{getVoice(t){let e=this;l["g"].get(t).then(t=>{if("image/jpeg"==t.type||"image/png"==t.type){var s=URL.createObjectURL(t);$("#showImg").attr("src",s)}else if("audio/mpeg"==t.type||"audio/wav"==t.type||"audio/x-wav"==t.type){s=URL.createObjectURL(t);const a=new Audio(s);console.log(a),a.play(),a.onended=function(){e.playVoiceStatus=""}}else console.log(t)}).catch(t=>{console.log(t)})},disabledBeforeToday(t){let e=new Date;return e.setHours(0,0,0,0),t<e},getDetail(){n["d"].get(this.echoid).then(t=>{let e=t.EchoValleyInfo;e.publishTime=[r.a.unix(t.EchoValleyInfo.start_date).format("YYYY-MM-DD"),r.a.unix(t.EchoValleyInfo.expiry_date).format("YYYY-MM-DD")],this.weeklyQuiz=Object.assign({},e),this.wqStudentList=t.record,this.weeklyQuiz.time=r.a.unix(t.EchoValleyInfo.start_date).format("YYYY-MM-DD")+" ~ "+r.a.unix(t.EchoValleyInfo.expiry_date).format("YYYY-MM-DD"),this.$store.dispatch("courseInfo/setWQTime",{pubDate:t.EchoValleyInfo.start_date,expDate:t.EchoValleyInfo.expiry_date}),this.publishDay=r.a.unix(t.EchoValleyInfo.start_date).format("YYYY-MM-DD")}).catch(t=>{})},modifyWQ(){let t={sentence:this.weeklyQuiz.sentence,start_date:r()(this.weeklyQuiz.publishTime[0]).unix(),expiry_date:r()(this.weeklyQuiz.publishTime[1]).unix()};n["e"].post(this.echoid,t).then(t=>{console.log(t),"success"===t.status?(this.$bus.$emit("messsage:push","Editing Success","success"),this.getDetail()):(this.$bus.$emit("messsage:push",t.record,"danger"),this.getDetail())}).catch(t=>{})},searchWQStudent(){let t="*";""!==this.search.keyword&&(t=this.search.keyword),n["f"].get(this.echoid,t,this.selectOption).then(t=>{"success"===t.status&&(this.wqStudentList=t.record)}).catch(t=>{})}}}),m=u,p=s("2877"),h=Object(p["a"])(m,a,i,!1,null,"2e0b3140",null);e["default"]=h.exports},"83cb":function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"e",(function(){return o})),s.d(e,"f",(function(){return n})),s.d(e,"j",(function(){return l})),s.d(e,"g",(function(){return c})),s.d(e,"k",(function(){return r})),s.d(e,"a",(function(){return d})),s.d(e,"l",(function(){return u})),s.d(e,"c",(function(){return m})),s.d(e,"i",(function(){return p})),s.d(e,"b",(function(){return h})),s.d(e,"h",(function(){return b}));var a=s("a95a");const i={get:(t,e)=>Object(a["b"])(`/asgmt/getlist/${t}/${e}`)},o={get:t=>Object(a["b"])("/asgmt/material/"+t)},n={get:t=>Object(a["b"])("/asgmt/progress/"+t)},l={post:(t,e,s)=>Object(a["c"])(`/asgmt/evaluate/${t}/${e}`,s)},c={get:t=>Object(a["a"])("/asgmt/play/voice/"+t)},r={get:(t,e,s,i)=>Object(a["b"])(`/asgmt/score/${t}/${e}/${s}/${i}`)},d={post:(t,e)=>Object(a["c"])("/asgmt/checkall/"+t,e)},u={getAxiosAll:(t,e)=>Promise.all(e.map(e=>Object(a["b"])(`/asgmt/uncheck/${t}/${e}`)))},m={get:(t,e)=>(console.log("std = ",e),Object(a["b"])(`/asgmt/detail/${t}/${e}`))},p={get:(t,e,s)=>Object(a["b"])(`/asgmt/search/${t}/${e}/${s}`)},h={getAxiosAll:t=>Promise.all(t.map(t=>Object(a["b"])("/asgmt/delete/"+t)))},b={post:(t,e)=>Object(a["c"])("/asgmt/modify/"+t,e)}},ca8e:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"e",(function(){return o})),s.d(e,"c",(function(){return n})),s.d(e,"g",(function(){return l})),s.d(e,"d",(function(){return c})),s.d(e,"f",(function(){return r})),s.d(e,"b",(function(){return d}));var a=s("a95a");const i={post:(t,e,s)=>Object(a["c"])(`/quiz/echovalley/create/${t}/${e}`,s)},o={post:(t,e)=>Object(a["c"])("/quiz/echovalley/modify/"+t,e)},n={get:t=>Object(a["b"])("/quiz/echovalley/list/"+t)},l={get:(t,e)=>Object(a["b"])(`/quiz/echovalley/set/${t}/${e}`)},c={get:t=>Object(a["b"])("/quiz/echovalley/list/detail/"+t)},r={get:(t,e,s)=>Object(a["b"])(`/quiz/echovalley/list/searchdetail/${t}/${e}/${s}`)},d={getAxiosAll:t=>Promise.all(t.map(t=>Object(a["b"])("/quiz/echovalley/delete/"+t)))}}}]);
//# sourceMappingURL=chunk-4492e999.c1094b83.js.map