(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5690be1e"],{"1ff4":function(t,s,e){"use strict";e.d(s,"a",(function(){return a})),e.d(s,"c",(function(){return r})),e.d(s,"d",(function(){return o})),e.d(s,"f",(function(){return c})),e.d(s,"e",(function(){return n})),e.d(s,"b",(function(){return d}));var i=e("a95a");const a={get:(t,s,e)=>"video"===e?Object(i.b)(`/quiz/list/video/${t}/${s}`):Object(i.b)("/quiz/list/book/"+t)},r={get:(t,s,e,a)=>Object(i.b)(`/cms/resdl/subtitle/${t}/${s}/${e}/${a}`)},o={get:(t,s,e)=>(console.log(`/cms/resdl/subtitlebyres/${t}/${s}/${e}`),Object(i.b)(`/cms/resdl/subtitlebyres/${t}/${s}/${e}`))},c={post:(t,s,e,a)=>Object(i.c)(`/quiz/create/video/${t}/${s}/${e}`,a)},n={post:(t,s,e)=>Object(i.c)(`/quiz/create/book/${t}/${s}`,e)},d={get:t=>Object(i.b)("/quiz/list/sentence/"+t)}},7924:function(t,s,e){"use strict";var i=e("c413");e.n(i).a},b7a9:function(t,s,e){"use strict";e.r(s);var i=e("1ff4"),a=e("1157"),r=e.n(a),o={name:"SpeakingQuizCreate",components:{CourseHeader:()=>e.e("chunk-2d0c5756").then(e.bind(null,"3ed2"))},data(){return{quizShow:"edit",rid:this.$route.params.rid,mid:this.$route.params.mid,courseid:this.$route.params.courseid,sList:[],tempSList:[],finalS:[]}},created(){},mounted(){this.getSubtitleList()},computed:{pkgid(){return this.$store.state.courseInfo.courseInfo.pkgid},colid(){return this.$store.state.courseInfo.courseInfo.colid.split(";")[0]},userid(){return this.$store.state.auth.userid}},methods:{getSubtitleList(){let t=this;"video"===this.$route.params.note?i.c.get(this.pkgid,this.colid,this.rid,this.mid).then(s=>{console.log(s),"success"===s.status?t.sList=s.record:r()("#ErrorTipmodal").modal("show")}).catch(t=>{console.log("err = ",t)}):i.d.get(this.pkgid,this.colid,this.rid).then(s=>{"success"===s.status?t.sList=s.record:r()("#ErrorTipmodal").modal("show")}).catch(t=>{})},editQuiz(){this.quizShow="edit"},convertS(){this.finalS=[],this.tempSList.sort((t,s)=>Number(t.seq)>Number(s.seq)?1:-1),this.tempSList.forEach(t=>{this.finalS.push(t.sentence)})},setS(){let t={};t.userid=this.userid,t.sentence=this.finalS,"video"===this.$route.params.note?i.f.post(this.rid,this.mid,this.courseid,t).then(t=>{if("success"===t.status){console.log("video"),console.log(`/quiz/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`);let t=`/quiz/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`;t=t.replaceAll("?","%3F"),this.$router.push({path:t})}else console.log(t)}).catch(t=>{}):i.e.post(this.rid,this.courseid,t).then(t=>{if("success"===t.status){console.log("book"),console.log(`/quiz/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`);let t=`/quiz/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`;t=t.replaceAll("?","%3F"),this.$router.push({path:t})}else console.log(t)}).catch(t=>{})}}},c=(e("7924"),e("2877")),n=Object(c.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app2"}},[e("div",{staticClass:"main-content"},[e("div",{staticClass:"content page-aside-left"},[e("div",{staticClass:"main-content"},[e("course-header"),e("section",{staticClass:"page-content container-fluid"},[t._m(0),"edit"===t.quizShow?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},t._l(t.sList,(function(s){return e("div",{key:s.sentenceid,staticClass:"custom-control custom-checkbox form-check mb-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempSList,expression:"tempSList"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:s.sentenceid},domProps:{value:s,checked:Array.isArray(t.tempSList)?t._i(t.tempSList,s)>-1:t.tempSList},on:{change:function(e){var i=t.tempSList,a=e.target,r=!!a.checked;if(Array.isArray(i)){var o=s,c=t._i(i,o);a.checked?c<0&&(t.tempSList=i.concat([o])):c>-1&&(t.tempSList=i.slice(0,c).concat(i.slice(c+1)))}else t.tempSList=r}}}),e("label",{staticClass:"custom-control-label",attrs:{for:s.sentenceid}},[t._v(t._s(s.sentence)+" ")])])})),0)])]),e("div",{staticClass:"col-12 text-right"},[e("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:""},on:{click:function(s){t.quizShow="preview",t.convertS()}}},[t._v(" "+t._s(t.$t("next"))+" ")])])]):t._e(),"preview"===t.quizShow?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card mb-2"},[e("div",{staticClass:"card-body"},[e("ul",{staticClass:"quiz-list"},t._l(t.finalS,(function(s,i){return e("li",{key:s},[e("strong",{staticClass:"text-primary mr-2"},[t._v("Q"+t._s(i+1)+".")]),t._v(t._s(s)+" ")])})),0)])]),e("div",{staticClass:"custom-control custom-checkbox form-check ml-3"})]),e("div",{staticClass:"col-12 text-right"},[e("button",{staticClass:"btn btn-primary btn-outline btn-rounded mr-2",attrs:{type:""},on:{click:function(s){t.quizShow="edit"}}},[t._v(" "+t._s(t.$t("back"))+" ")]),e("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:""},on:{click:function(s){return t.setS()}}},[t._v(" "+t._s(t.$t("create"))+" ")])])]):t._e()])],1)])]),e("div",{staticClass:"modal fade",attrs:{id:"ErrorTipmodal",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("message")))]),t._m(1)]),e("div",{staticClass:"modal-body"},[e("h5",[t._v(t._s(t.$t("system-error-please-contact-your-administrator")))])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("ok"))+" ")])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row pb-3"},[s("div",{staticClass:"col-12 text-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-Cancel",attrs:{"aria-hidden":"true"}})])}],!1,null,"fafe95c0",null);s.default=n.exports},c413:function(t,s,e){}}]);
//# sourceMappingURL=chunk-5690be1e.d7ad70ba.js.map