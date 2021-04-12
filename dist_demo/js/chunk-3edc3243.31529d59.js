(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3edc3243"],{1945:function(t,s,e){"use strict";e.r(s);var a=e("1ff4"),i=e("2ef0"),d=e.n(i),o={name:"SpeakingQuiz",components:{CourseHeader:()=>e.e("chunk-2d0c5756").then(e.bind(null,"3ed2"))},data(){return{quizShow:"home",quizList:[],rid:this.$route.params.rid,mid:this.$route.params.mid,SList:[],tempSname:"",tempStime:new Date,tempQid:"",courseid:this.$route.params.courseid}},mounted(){this.getQuitList()},watch:{tempAIDList(){this.getQuitList()}},computed:{sortSlist(){return d.a.sortBy(this.SList,(function(t){return parseInt(t.seq,10)}))},tempAIDList(){return void 0===this.$store.state.courseInfo.tempAIDList[this.courseid]?[]:this.$store.state.courseInfo.tempAIDList[this.courseid]},tempAList(){return void 0===this.$store.state.courseInfo.tempAList[this.courseid]?[]:this.$store.state.courseInfo.tempAList[this.courseid]}},methods:{async getQuitList(){await a.a.get(this.rid,this.mid,this.$route.params.note).then(t=>{if(this.quizList=t.record,"success"===t.status)return!0}).catch(t=>{})&&this.quizList.forEach(t=>{-1!==this.tempAIDList.indexOf(t.quizid)?this.$set(t,"added",!0):this.$set(t,"added",!1),this.$set(t,"resource_name",this.$route.params.rname),this.$set(t,"material_name",this.$route.params.mname)})},addtoAssignment(t){t.resourceid=this.rid,this.$store.dispatch("courseInfo/setAssignment",{assignment:t,id:t.quizid})},removeAssignment(t){this.$store.dispatch("courseInfo/removeAssignment",{id:t})},getSList(t){console.log(t),a.b.get(t).then(t=>{this.SList=t.record}).catch(t=>{})},gotoQuitCreate(){let t=`/quizcreate/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.$route.params.courseid}/${this.$route.params.note}/${this.$route.params.rid}/${this.$route.params.mid}`;t=t.replaceAll("?","%3F"),this.$router.push({path:t})},saveQuiz(){this.quizShow="home"}}},n=e("2877"),r=Object(n.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app2"}},[e("div",{staticClass:"main-content"},[e("div",{staticClass:"content page-aside-left"},[e("div",{staticClass:"main-content"},[e("course-header"),e("section",{staticClass:"page-content container-fluid"},[e("div",{staticClass:"row pb-3"},[e("div",{staticClass:"col-12 text-right"},["home"===t.quizShow?e("a",{staticClass:"btn btn-primary btn-outline btn-rounded",on:{click:function(s){return t.gotoQuitCreate()}}},[e("i",{staticClass:"zmdi zmdi-plus zmdi-hc-fw"}),t._v(t._s(t.$t("create-a-new-quiz"))+" ")]):t._e()])]),"home"===t.quizShow?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$t("creation-date")))]),e("th",[t._v(t._s(t.$t("author")))]),e("th",[t._v(t._s(t.$t("number-of-questions")))]),e("th",[t._v(t._s(t.$t("preview")))]),e("th",[t._v(t._s(t.$t("add-to-assignment")))])])]),e("tbody",[t._l(t.quizList,(function(s){return e("tr",{key:s.quizid},[e("td",[t._v(t._s(t._f("dateConversion")(s.create_date)))]),e("td",[t._v(t._s(s.username))]),e("td",[t._v(t._s(s.count))]),e("td",[e("button",{staticClass:"btn btn-nostyle",attrs:{type:"","data-toggle":"modal","data-target":"#SpeakingQuizPreviewModal"},on:{click:function(e){t.getSList(s.quizid),t.tempSname=s.username,t.tempStime=s.create_date}}},[e("i",{staticClass:"la la-eye display-6"})])]),e("td",[s.added?e("button",{staticClass:"btn btn-secondary btn-sm btn-rounded",attrs:{type:"","data-toggle":"modal","data-target":"#AddedModal"},on:{click:function(e){t.tempQid=s.quizid}}},[t._v(" "+t._s(t.$t("added"))+" ")]):e("button",{staticClass:"btn btn-primary btn-sm btn-rounded",attrs:{type:"","data-toggle":"modal","data-target":"#AddModal","data-dismiss":"modal"},on:{click:function(e){return t.addtoAssignment(s)}}},[t._v(" "+t._s(t.$t("add"))+" ")])])])})),0===t.quizList.length?e("tr",[e("td",{staticClass:"text-center",attrs:{colspan:"5"}},[e("h5",[t._v(" "+t._s(t.$t("no-quiz-found-please-create-a-quiz"))+" ")])])]):t._e()],2)])])])])])]):t._e()])],1)])]),e("div",{staticClass:"modal fade",attrs:{id:"SpeakingQuizPreviewModal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(t._s(t.tempSname))]),e("span",{staticClass:"ml-3 text-muted"},[e("small",[t._v(t._s(t._f("dateConversion")(t.tempStime)))])]),t._m(0)]),e("div",{staticClass:"modal-body"},[e("ul",{staticClass:"quiz-list"},t._l(t.sortSlist,(function(s){return e("li",{key:s.sentenceID},[e("strong",{staticClass:"text-primary mr-2"},[t._v("Q"+t._s(s.seq)+".")]),t._v(t._s(s.content)+" ")])})),0)]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")])])])])]),e("div",{staticClass:"modal modal-top-frame fade",attrs:{id:"AddModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.$t("adding-to-the-assignment-list"))+" "),t._m(1)])])]),e("div",{staticClass:"modal fade",attrs:{id:"AddedModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("remove")))]),t._m(2)]),e("div",{staticClass:"modal-body"},[e("p",[t._v(t._s(t.$t("does-it-cancel-an-assignment-that-has-been-added"))+"?")])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),e("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(s){return t.removeAssignment(t.tempQid)}}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-Cancel",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[s("span",{staticClass:"la la-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],!1,null,"518d8cc0",null);s.default=r.exports},"1ff4":function(t,s,e){"use strict";e.d(s,"a",(function(){return i})),e.d(s,"c",(function(){return d})),e.d(s,"d",(function(){return o})),e.d(s,"f",(function(){return n})),e.d(s,"e",(function(){return r})),e.d(s,"b",(function(){return l}));var a=e("a95a");const i={get:(t,s,e)=>"video"===e?Object(a.b)(`/quiz/list/video/${t}/${s}`):Object(a.b)("/quiz/list/book/"+t)},d={get:(t,s,e,i)=>Object(a.b)(`/cms/resdl/subtitle/${t}/${s}/${e}/${i}`)},o={get:(t,s,e)=>(console.log(`/cms/resdl/subtitlebyres/${t}/${s}/${e}`),Object(a.b)(`/cms/resdl/subtitlebyres/${t}/${s}/${e}`))},n={post:(t,s,e,i)=>Object(a.c)(`/quiz/create/video/${t}/${s}/${e}`,i)},r={post:(t,s,e)=>Object(a.c)(`/quiz/create/book/${t}/${s}`,e)},l={get:t=>Object(a.b)("/quiz/list/sentence/"+t)}}}]);
//# sourceMappingURL=chunk-3edc3243.31529d59.js.map