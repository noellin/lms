(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81929058"],{"25f7":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app3"}},[s("div",{staticClass:"content-wrapper"},[s("custom-header"),s("div",{staticClass:"content"},[s("header",{staticClass:"page-header"},[s("div",{staticClass:"d-flex align-items-start"},[s("div",{staticClass:"mt-2 mr-3"},[s("a",{staticClass:"btn-rounded-icon btn-primary ml-2 pointer",on:{click:t.$back}},[s("i",{staticClass:"zmdi zmdi-arrow-left zmdi-hc-fw text-white"})])]),s("div",{staticClass:"mr-auto"},[s("h1",[t._v(t._s(t.$t("collection")))]),s("p",{staticClass:"second-title"},[t._v(t._s(t.cname))])])])]),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"d-flex justify-content-between"},[s("search-group",{attrs:{mfilter:"",page:"collection"},on:{getMColList:t.getMColList}}),s("div",{staticClass:"text-right"},[s("a",{staticClass:"btn btn-primary btn-rounded btn-outline",on:{click:function(e){return t.gotoCollectionEdit()}}},[s("i",{staticClass:"la la-edit"}),t._v(t._s(t.$t("edit")))])])],1),s("div",{staticClass:"row"},t._l(t.cResourceList,(function(e){return s("div",{key:e.resourceid,staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("div",{staticClass:"align-self-center overlay-wrap mr-4 w-150 h-150 border"},[s("span",{staticClass:"overlay-icon"},["video"===e.note?s("i",{staticClass:"fas fa-video"}):s("i",{staticClass:"fas fa-book-open"})]),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://lms.mangosteems.com/cms/resdl/cover/"+e.resourceid,expression:"\n                        'https://lms.mangosteems.com/cms/resdl/cover/' +\n                        cr.resourceid\n                      "}],staticClass:"overlay-img cus-img",attrs:{alt:"course image"}})]),s("div",{staticClass:"media-body"},[s("div",{staticClass:"d-flex justify-content-between"},[s("div",[""!==e.level&&void 0!==e.level&&null!==e.level?s("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.$t("level"))+" "+t._s(e.level))]):t._e(),""!==e.unit&&void 0!==e.unit?s("span",{staticClass:"badge badge-pill badge-secondary ml-2"},[t._v(t._s(t.$t("unit"))+" "+t._s(e.unit))]):t._e(),s("h4",{staticClass:"mb-0 mt-3 d-flex align-self-center text-primary"},[s("div",{attrs:{title:""}},[t._v(" "+t._s(e.resource_name)+" ")])]),s("p",{directives:[{name:"show",rawName:"v-show",value:0!==e.lastplay.length,expression:"cr.lastplay.length !== 0"}],staticClass:"text-muted mt-1"},[s("i",{staticClass:"zmdi zmdi-notifications mr-1"}),s("small",{staticClass:"fw300 pointer",on:{click:function(s){return t.showLastPlay(e.lastplay)}}},[t._v(t._s(t.$t("last-played"))+" ")])])]),s("div",{staticClass:"text-primary pointer",attrs:{"data-toggle":"modal","data-target":"#StartModal"},on:{click:function(s){t.getAvailableCourse(e.resourceid),t.tempNote=e.note}}},[t._v(" "+t._s(t.$t("start"))),t._m(0,!0)])])])])])])])})),0)])])],1),s("div",{staticClass:"modal fade",attrs:{id:"lastPlayModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[0!==t.lastPlayList.length?s("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("last-play-record-course-date"))+" ")]):s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("no-record")))]),t._m(1)]),0!==t.lastPlayList.length?s("div",{staticClass:"modal-body pb-4"},t._l(t.lastPlayList,(function(e){return s("div",{key:e.courseid},[s("span",[t._v(t._s(e.course_name)+" ： "+t._s(t._f("dateConversion")(e.last_access)))])])})),0):s("div",{staticClass:"modal-body pb-4"},[s("p",[t._v(t._s(t.$t("no-open-or-play-record"))+".")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"StartModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[0!==t.courseList.length?s("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("start"))+" ")]):s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("no-course")))]),t._m(2)]),0!==t.courseList.length?s("div",{staticClass:"modal-body pb-4"},[s("h5",[t._v(t._s(t.$t("what-is-your-ongoing-course"))+"?")]),s("p",[t._v(" "+t._s(t.$t("this-material-can-only-be-viewed-in-the-following-course"))+". ")]),t._l(t.courseList,(function(e){return s("a",{key:e.resourceid,staticClass:"btn btn-primary btn-outline btn-rounded mr-3 mb-3",attrs:{title:"","data-dismiss":"modal"},on:{click:function(s){return t.gotoCourse(e)}}},[t._v(t._s(e.course_name))])}))],2):s("div",{staticClass:"modal-body pb-4"},[s("p",[t._v(" "+t._s(t.$t("the-course-you-can-use-this-collection-has-expired-if-you-wish-to-continue-using-it-you-must-renew-your-contract"))+". ")])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"btn-rounded-icon btn-primary rounded ml-2"},[s("i",{staticClass:"zmdi zmdi-arrow-right zmdi-hc-fw text-white"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],i=s("339c"),r=s("2755"),c=(s("3f5b"),s("1157")),l=s.n(c),n=s("b712"),d={name:"CollectionDetail",components:{CustomHeader:i["a"],SearchGroup:n["a"]},data(){return{cname:"",cResourceList:[],typeList:[{text:"All type",id:"all"},{text:"Picture Book",id:"book"},{text:"Video",id:"video"}],selectType:"all",courseList:[],searchRname:"",lastPlayList:[],tempNote:"book"}},created(){},watch:{},mounted(){this.cname=this.$route.params.cname,this.getCollectionContent()},computed:{userid(){return this.$store.state.auth.userid},materialSort(){let t=[...this.cResourceList];return t.forEach(t=>{void 0===t.unit&&(t.unit="")}),t}},methods:{getMColList(t){console.log(t),this.cResourceList=[...t]},showLastPlay(t){this.lastPlayList=[],this.lastPlayList=t,l()("#lastPlayModal").modal("show")},searchCollectionResource(){let t=this.selectType,e=this.searchRname;"all"===this.selectType&&(t="*"),""===this.searchRname&&(e="*"),r["k"].get(this.userid,this.$route.params.cid,e,t).then(t=>{t.record.forEach(t=>{t.lastplay=[],t.last_access_all.forEach(e=>{"0"!==e.last_access&&t.lastplay.push(e)})}),t.record.forEach(t=>{}),this.cResourceList=t.record}).catch(t=>{})},getCollectionContent(){console.log(this.userid,this.$route.params.cid),r["e"].get(this.userid,this.$route.params.cid).then(t=>{t.record.forEach(t=>{t.lastplay=[],t.last_access_all.forEach(e=>{"0"!==e.last_access&&t.lastplay.push(e)})}),console.log(t.record),this.cResourceList=t.record}).catch(t=>{})},gotoCollectionEdit(){this.$router.push({path:`/collection/edit/${this.$route.params.pid}/${this.$route.params.cname}/${this.$route.params.cid}`})},gotoCourse(t){console.log(t),"book"===this.tempNote?window.open(`/bktchr/?pkgid=${t.pkgid}&colid=${t.colid}&resid=${t.resourceid}&mid=&lmsd=demo&auth=${this.$store.state.auth.token}&crsid=${t.courseid}&userid=${this.userid}`):window.open(`/vptchr/?pkgid=${t.pkgid}&colid=${t.colid}&resid=${t.resourceid}&mid=&lmsd=demo&auth=${this.$store.state.auth.token}&crsid=${t.courseid}&userid=${this.userid}`)},getAvailableCourse(t){console.log(this.userid,this.$route.params.cid,t),r["c"].get(this.userid,this.$route.params.cid,t).then(t=>{this.courseList=t.record,console.log(t.record)}).catch(t=>{})}}},u=d,h=(s("56ed"),s("2877")),m=Object(h["a"])(u,o,a,!1,null,"5a27ec36",null);e["default"]=m.exports},2755:function(t,e,s){"use strict";s.d(e,"d",(function(){return a})),s.d(e,"j",(function(){return i})),s.d(e,"k",(function(){return r})),s.d(e,"e",(function(){return c})),s.d(e,"h",(function(){return l})),s.d(e,"l",(function(){return n})),s.d(e,"i",(function(){return d})),s.d(e,"b",(function(){return u})),s.d(e,"f",(function(){return h})),s.d(e,"c",(function(){return m})),s.d(e,"g",(function(){return p})),s.d(e,"a",(function(){return b})),s.d(e,"m",(function(){return g}));var o=s("a95a");const a={get:t=>Object(o["b"])("/collection/byteacher/"+t)},i={get:(t,e)=>Object(o["b"])(`/collection/search/${t}/${e}`)},r={get:(t,e,s,a)=>Object(o["b"])(`/collection/searchresource/${t}/${e}/${s}/${a}`)},c={get:(t,e)=>(console.log("get col content"),console.log(t),console.log(e),Object(o["b"])(`/collection/content/${t}/${e}`))},l={get:t=>Object(o["b"])("/collection/listpkgbyteacher/"+t)},n={post:t=>(console.log("save collection"),Object(o["c"])("/collection/create",t))},d={get:t=>(console.log(t),Object(o["b"])("/collection/pkgresource/"+t))},u={get:t=>Object(o["b"])("/collection/delete/"+t)},h={get:(t,e)=>Object(o["b"])(`/collection/pkgmapcurs/${t}/${e}`)},m={get:(t,e,s)=>Object(o["b"])(`/collection/availablecourse/${t}/${e}/${s}`)},p={get:(t,e)=>Object(o["b"])(`/collection/exist/${t}/${e}`)},b={get:(t,e)=>(console.log(`/collection/addresource/${t}/${e}`),Object(o["b"])(`/collection/addresource/${t}/${e}`))},g={put:(t,e)=>Object(o["d"])("/collection/update/"+t,e)}},"355a":function(t,e,s){},"56ed":function(t,e,s){"use strict";var o=s("355a"),a=s.n(o);a.a},b712:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-3"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_demo2",options:t.typeList},model:{value:t.selectType,callback:function(e){t.selectType=e},expression:"selectType"}})],1),s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRname,expression:"searchRname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search material"},domProps:{value:t.searchRname},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchCourseResource()},input:function(e){e.target.composing||(t.searchRname=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchCourseResource()}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])]),s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_demo3",options:t.sortTypeList},model:{value:t.selectSortType,callback:function(e){t.selectSortType=e},expression:"selectSortType"}})],1),t.searchStatus?s("div",{staticClass:"form-group form-rounded mb-0 mr-3 d-flex align-items-center text-secondary"},[s("span",{staticClass:"mr-1"},[t._v(t._s(t.sortMList.length))]),t._v(" "+t._s(t.$t("listings-for"))+" “ "),s("span",[t._v(t._s(t.tempSearchName))]),t._v("” ")]):t._e()])])},a=[],i=s("8a49"),r=s("2755"),c={name:"SearchGroup",data(){return{typeList:[{text:"All type",id:"all"},{text:"Picture Book",id:"book"},{text:"Video",id:"video"}],selectType:"all",searchRname:"",selectSortType:"title_asc",searchStatus:!1,tempSearchName:"",textbookList:[],courseid:this.$route.params.courseid,colSortList:[]}},props:["mfilter","page"],methods:{async searchCourseResource(){console.log("get CourseResource list"),""!==this.searchRname?(this.searchStatus=!0,this.tempSearchName=this.searchRname):this.searchStatus=!1;let t=this.selectType;"all"===this.selectType&&(t="*");let e={type:t,keyword:this.searchRname},s=await i["d"].post(this.courseid,e).then(t=>{if(t.record.forEach(t=>{void 0===t.unit&&(t.unit=""),t.link=t.information.includes("http")}),this.textbookList=t.record,"success"===t.status)return!0}).catch(t=>{});s&&this.$emit("getMList",this.sortMList)},async searchCollectionResource(){console.log("get collection list");let t=this.selectType,e=this.searchRname;"all"===this.selectType&&(t="*"),""===this.searchRname&&(e="*"),""!==this.searchRname?(this.searchStatus=!0,this.tempSearchName=this.searchRname):this.searchStatus=!1;let s=await r["k"].get(this.userid,this.$route.params.cid,e,t).then(t=>{if(t.record.forEach(t=>{t.lastplay=[],t.last_access_all.forEach(e=>{"0"!==e.last_access&&t.lastplay.push(e)})}),this.textbookList=t.record,console.log("sortmlist = ",this.sortMList),"success"===t.status)return!0}).catch(t=>{});s&&this.$emit("getMColList",this.sortMList)}},created(){this.openedTextbookList=this.openedTextbookLists},computed:{userid(){return this.$store.state.auth.userid},sortMList(){let t=[];return t="openm"===this.mfilter?this.$_sortMaterial(this.openedMList,this.selectSortType):"openb"===this.mfilter?this.$_sortMaterial(this.openedBookList,this.selectSortType):"openv"===this.mfilter?this.$_sortMaterial(this.openedVideoList,this.selectSortType):this.$_sortMaterial(this.textbookList,this.selectSortType),t},sortTypeList(){return this.$store.state.common.sortTypeList},openedMList(){return this.textbookList.filter(t=>"true"===t.openflag)},openedBookList(){return this.textbookList.filter(t=>"true"===t.openflag&&"book"===t.note)},openedVideoList(){return this.textbookList.filter(t=>"true"===t.openflag&&"video"===t.note)},openedTextbookLists(){return this.$store.state.courseInfo.openedTextbookList}},watch:{mfilter(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},selectSortType(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},openedTextbookLists(){this.openedTextbookList=this.openedTextbookLists},searchRname(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},selectType(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()}}},l=c,n=s("2877"),d=Object(n["a"])(l,o,a,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-81929058.2c53c848.js.map