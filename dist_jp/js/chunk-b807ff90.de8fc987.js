(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b807ff90"],{8125:function(t,e,s){"use strict";s.r(e);var a=s("ca8e"),i=s("5a0c"),l=s.n(i),c=s("2ef0"),o=s.n(c),r={components:{CourseHeader:()=>s.e("chunk-2d0c5756").then(s.bind(null,"3ed2"))},data(){return{courseid:this.$route.params.courseid,selectAllWQ:"",selectedWQ:[],wqList:[],wqQuota:null,wqStatus:"true",stuQuota:0,sortStatus:!1,tempSortItem:"",tempSentence:"",expired:this.$route.params.expired}},mounted(){this.getWeeklyQuiz()},computed:{},methods:{sortTable(t){(""===this.tempSortItem||this.tempSortItem!==t)&&(this.tempSortItem=t,this.sortStatus=!1),this.sortStatus=!this.sortStatus,this.sortStatus?this.wqList=o.a.sortBy(this.wqList,[t],["asc"]):this.wqList=this.wqList.reverse()},calexpired(t){let e=new Date;e.setHours(0,0,0,0);let s=l()(e).subtract(1,"day");return l()(l()(s).format("YYYY-MM-DD")).isBefore(l()(l.a.unix(t).format("YYYY-MM-DD")))?"":"text-danger"},pubStatus(t,e){const s=Date.now(),a=Math.floor(s/1e3);return a<t?"Not yet published":a>=t&&a<e?"Executing":"Finish"},setWQStatus(){let t="true";"true"===this.wqStatus&&(t="false"),a.h.get(this.courseid,t).then(t=>{console.log(t),"success"===t.status&&this.getWeeklyQuiz()}).catch(t=>{})},selectAll(t){const e=this;t.currentTarget.checked?(e.selectedWQ=[],e.wqList.forEach((function(t,s){t.canDelete||e.selectedWQ.push(t.echovalleyid)}))):e.selectedWQ=[]},deleteWQ(){a.b.getAxiosAll(this.selectedWQ).then(t=>{this.selectedWQ=[],this.getWeeklyQuiz(),this.$bus.$emit("messsage:push","Delete completed.","success")}).catch(t=>{})},getWeeklyQuiz(){this.wqList=[],a.c.get(this.courseid).then(t=>{var e=new Date;let s=l()(e).format("YYYY-MM-DD");t.record.forEach(t=>{l()(s).isBefore(l()(l.a.unix(t.start_date).format("YYYY-MM-DD"))),t.canDelete=!l()(s).isBefore(l()(l.a.unix(t.start_date).format("YYYY-MM-DD")))}),this.wqList=t.record,this.wqQuota=t.course_info.echovalley_quota,this.wqStatus=t.course_info.echovalley_flag,this.stuQuota=t.course_info.quota}).catch(t=>{})},gotoGreateWQuiz(){this.$router.push({path:`/course_weekly_quiz/create/course=${this.$route.params.course}/type=${this.$route.params.type}/${this.$route.params.courseid}`})},gotoWQProgress(t,e=""){this.$router.push({path:`/course_weekly_quiz/progress/course=${this.$route.params.course}/type=${this.$route.params.type}/${this.$route.params.courseid}/${t}/${e}`})}}},d=s("2877"),n=Object(d.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app2"}},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"content page-aside-left"},[s("div",{staticClass:"main-content"},[s("course-header"),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"d-flex pb-3 col-sm-12 justify-content-between px-0"},["expired"!==t.$route.params.expired?s("div",{staticClass:"text-right"},["true"===t.wqStatus?s("button",{staticClass:"btn btn-danger btn-rounded",on:{click:function(e){return t.setWQStatus()}}},[t._v(" "+t._s(t.$t("disable-auto-assigned-oral-quizzes"))+" ")]):s("button",{staticClass:"btn btn-primary btn-rounded",on:{click:function(e){return t.setWQStatus()}}},[t._v(" "+t._s(t.$t("enable-auto-assigned-oral-quizzes"))+" ")])]):t._e(),"expired"!==t.$route.params.expired?s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary btn-outline btn-rounded mr-2",attrs:{disabled:0===t.wqQuota},on:{click:function(e){return t.gotoGreateWQuiz()}}},[t._v(" "+t._s(t.$t("create-quiz"))+" "),s("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.wqQuota))])]),s("button",{staticClass:"btn btn-primary btn-outline btn-rounded",attrs:{"data-toggle":"modal","data-target":"#DeleteModal",disabled:t.selectedWQ.length<=0}},[t._v(" "+t._s(t.$t("delete-quiz"))+" "),0!==t.selectedWQ.length?s("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.selectedWQ.length))]):t._e()])]):t._e()]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped"},[s("thead",[s("tr",["expired"!==t.$route.params.expired?s("th",[s("div",{staticClass:"custom-control custom-checkbox form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllWQ,expression:"selectAllWQ"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck"},domProps:{checked:Array.isArray(t.selectAllWQ)?t._i(t.selectAllWQ,null)>-1:t.selectAllWQ},on:{click:t.selectAll,change:function(e){var s=t.selectAllWQ,a=e.target,i=!!a.checked;if(Array.isArray(s)){var l=t._i(s,null);a.checked?l<0&&(t.selectAllWQ=s.concat([null])):l>-1&&(t.selectAllWQ=s.slice(0,l).concat(s.slice(l+1)))}else t.selectAllWQ=i}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"customCheck"}})])]):t._e(),s("th",{staticClass:"pointer",on:{click:function(e){return t.sortTable("description")}}},[t._v(" "+t._s(t.$t("description"))+" "),s("i",{staticClass:"zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"})]),s("th",{staticClass:"pointer",on:{click:function(e){return t.sortTable("start_date")}}},[t._v(" "+t._s(t.$t("start-date"))+" "),s("i",{staticClass:"zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"})]),s("th",{staticClass:"pointer",on:{click:function(e){return t.sortTable("expiry_date")}}},[t._v(" "+t._s(t.$t("end-date"))+" "),s("i",{staticClass:"zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"})]),s("th",[t._v(t._s(t.$t("teachers")))]),s("th",[t._v(" "+t._s(t.$t("students-completed"))+" ")]),s("th",[t._v(t._s(t.$t("status")))]),s("th",[t._v(t._s(t.$t("preview")))]),s("th",[t._v(t._s(t.$t("check-progress")))])])]),s("tbody",[t._l(t.wqList,(function(e){return s("tr",{key:e.echovalleyid},["expired"!==t.$route.params.expired?s("td",[e.canDelete?t._e():s("div",{staticClass:"custom-control custom-checkbox form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedWQ,expression:"selectedWQ"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.echovalleyid},domProps:{value:e.echovalleyid,checked:Array.isArray(t.selectedWQ)?t._i(t.selectedWQ,e.echovalleyid)>-1:t.selectedWQ},on:{change:function(s){var a=t.selectedWQ,i=s.target,l=!!i.checked;if(Array.isArray(a)){var c=e.echovalleyid,o=t._i(a,c);i.checked?o<0&&(t.selectedWQ=a.concat([c])):o>-1&&(t.selectedWQ=a.slice(0,o).concat(a.slice(o+1)))}else t.selectedWQ=l}}}),s("label",{staticClass:"custom-control-label",attrs:{for:e.echovalleyid}})])]):t._e(),s("td",[e.description!==e.start_date?s("span",[t._v(t._s(e.description))]):s("span",[t._v("System auto-assigned")])]),s("td",[t._v(t._s(t._f("dateConversion")(e.start_date)))]),s("td",{class:t.calexpired(e.expiry_date)},[t._v(" "+t._s(t._f("dateConversion")(e.expiry_date))+" ")]),s("td",["system"===e.designator?s("span",{staticClass:"badge badge-pill badge-secondary mt-2"},[t._v(t._s(t.$t("extra")))]):s("span",[t._v(t._s(e.username))])]),s("td",[t._v(t._s(e.completed_student)+" ／"+t._s(t.stuQuota))]),s("td",[s("span",[t._v(t._s(t.pubStatus(e.start_date,e.expiry_date)))])]),s("td",[s("button",{staticClass:"btn btn-nostyle",attrs:{type:"","data-toggle":"modal","data-target":"#PreviewModal"},on:{click:function(s){t.tempSentence=e.sentence}}},[s("i",{staticClass:"la la-eye"})])]),s("td",[s("button",{staticClass:"btn btn-primary btn-sm btn-rounded",attrs:{type:""},on:{click:function(s){return t.gotoWQProgress(e.echovalleyid,t.expired)}}},[t._v(" "+t._s(t.$t("view"))+" ")])])])})),0===t.wqList.length?s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"9"}},[s("h5",[t._v(" "+t._s(t.$t("no-echo-valley-quiz"))+" ")])])]):t._e()],2)])])])])])])])],1)])]),s("div",{staticClass:"modal fade",attrs:{id:"ExtraquizModal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("extra-quiz")))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label text-right col-sm-3"},[t._v(t._s(t.$t("question")))]),t._m(1)]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-sm-3 text-right"},[t._v(t._s(t.$t("publish")))]),t._m(2),s("div",{staticClass:"col-2 pt-2 pl-0"},[t._v("06:00:00")])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-form-label col-sm-3 text-right"},[t._v(t._s(t.$t("due")))]),t._m(3),s("div",{staticClass:"col-2 pt-2 pl-0"},[t._v("23:59:59")])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"DeleteModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"ModalTitle1"}},[t._v(" "+t._s(t.$t("delete-echo-valley"))+" ")]),t._m(4)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(t._s(t.$t("want-to-delete-a-checked-quiz"))+"?")]),s("p",{staticClass:"text-danger"},[t._v(" "+t._s(t.$t("the-published-quiz-cannot-be-deleted"))+" ")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.deleteWQ()}}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"PreviewModal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("sentence")))]),t._m(5)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(t._s(t.tempSentence))])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-8"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"Her favourite colour is pink and her superpower is data processing.",disabled:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("input",{staticClass:"form-control date-picker-input",attrs:{type:"text",placeholder:"Select Date",value:"2020.08.24",disabled:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("input",{staticClass:"form-control date-picker-input",attrs:{type:"text",placeholder:"Select Date",value:"2020.08.28",disabled:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-Cancel",attrs:{"aria-hidden":"true"}})])}],!1,null,"6c82909c",null);e.default=n.exports},ca8e:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"f",(function(){return l})),s.d(e,"c",(function(){return c})),s.d(e,"h",(function(){return o})),s.d(e,"d",(function(){return r})),s.d(e,"g",(function(){return d})),s.d(e,"b",(function(){return n})),s.d(e,"e",(function(){return u}));var a=s("a95a");const i={post:(t,e,s)=>Object(a.c)(`/quiz/echovalley/create/${t}/${e}`,s)},l={post:(t,e)=>Object(a.c)("/quiz/echovalley/modify/"+t,e)},c={get:t=>Object(a.b)("/quiz/echovalley/list/"+t)},o={get:(t,e)=>Object(a.b)(`/quiz/echovalley/set/${t}/${e}`)},r={get:t=>Object(a.b)("/quiz/echovalley/list/detail/"+t)},d={get:(t,e,s)=>Object(a.b)(`/quiz/echovalley/list/searchdetail/${t}/${e}/${s}`)},n={getAxiosAll:t=>Promise.all(t.map(t=>Object(a.b)("/quiz/echovalley/delete/"+t)))},u={post:(t,e)=>Object(a.c)("/quiz/echovalley/modifydes/"+t,e)}}}]);
//# sourceMappingURL=chunk-b807ff90.de8fc987.js.map