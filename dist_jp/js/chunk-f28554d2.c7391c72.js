(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f28554d2","chunk-2d2101ec"],{"25f7":function(t,e,s){"use strict";s.r(e);var i=s("2755"),o=(s("3f5b"),s("1157")),a=s.n(o),l={name:"CollectionDetail",components:{CustomHeader:()=>Promise.resolve().then(s.bind(null,"339c")),SearchGroup:s("b712").default},data:()=>({cname:"",cResourceList:[],typeList:[{text:"All type",id:"all"},{text:"Picture Book",id:"book"},{text:"Video",id:"video"}],selectType:"all",courseList:[],searchRname:"",lastPlayList:[],tempNote:"book"}),created(){},watch:{},mounted(){this.cname=this.$route.params.cname,this.getCollectionContent()},computed:{userid(){return this.$store.state.auth.userid},materialSort(){let t=[...this.cResourceList];return t.forEach(t=>{void 0===t.unit&&(t.unit="")}),t}},methods:{getMColList(t){console.log(t),this.cResourceList=[...t]},showLastPlay(t){this.lastPlayList=[],this.lastPlayList=t,a()("#lastPlayModal").modal("show")},searchCollectionResource(){let t=this.selectType,e=this.searchRname;"all"===this.selectType&&(t="*"),""===this.searchRname&&(e="*"),i.k.get(this.userid,this.$route.params.cid,e,t).then(t=>{t.record.forEach(t=>{t.lastplay=[],t.last_access_all.forEach(e=>{"0"!==e.last_access&&t.lastplay.push(e)})}),t.record.forEach(t=>{}),this.cResourceList=t.record}).catch(t=>{})},getCollectionContent(){console.log(this.userid,this.$route.params.cid),i.e.get(this.userid,this.$route.params.cid).then(t=>{t.record.forEach(t=>{t.lastplay=[],t.last_access_all.forEach(e=>{"0"!==e.last_access&&t.lastplay.push(e)})}),console.log(t.record),this.cResourceList=t.record}).catch(t=>{})},gotoCollectionEdit(){this.$router.push({path:`/collection/edit/${this.$route.params.pid}/${this.$route.params.cname}/${this.$route.params.cid}`})},gotoCourse(t){console.log(t),"book"===this.tempNote?window.open(`/bktchr/?pkgid=${t.pkgid}&colid=${t.colid}&resid=${t.resourceid}&mid=&lmsd=jp&auth=${this.$store.state.auth.token}&crsid=${t.courseid}&userid=${this.userid}`):window.open(`/vptchr/?pkgid=${t.pkgid}&colid=${t.colid}&resid=${t.resourceid}&mid=&lmsd=jp&auth=${this.$store.state.auth.token}&crsid=${t.courseid}&userid=${this.userid}`)},getAvailableCourse(t){console.log(this.userid,this.$route.params.cid,t),i.c.get(this.userid,this.$route.params.cid,t).then(t=>{this.courseList=t.record,console.log(t.record)}).catch(t=>{})}}},c=(s("5b90"),s("2877")),r=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app3"}},[s("div",{staticClass:"content-wrapper"},[s("custom-header"),s("div",{staticClass:"content"},[s("header",{staticClass:"page-header"},[s("div",{staticClass:"d-flex align-items-start"},[s("div",{staticClass:"mt-2 mr-3"},[s("a",{staticClass:"btn-rounded-icon btn-primary ml-2 pointer",on:{click:t.$back}},[s("i",{staticClass:"zmdi zmdi-arrow-left zmdi-hc-fw text-white"})])]),s("div",{staticClass:"mr-auto"},[s("h1",[t._v(t._s(t.$t("collection")))]),s("p",{staticClass:"second-title"},[t._v(t._s(t.cname))])])])]),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"d-flex justify-content-between"},[s("search-group",{attrs:{mfilter:"",page:"collection"},on:{getMColList:t.getMColList}}),s("div",{staticClass:"text-right"},[s("a",{staticClass:"btn btn-primary btn-rounded btn-outline",on:{click:function(e){return t.gotoCollectionEdit()}}},[s("i",{staticClass:"la la-edit"}),t._v(t._s(t.$t("edit")))])])],1),s("div",{staticClass:"row"},t._l(t.cResourceList,(function(e,i){return s("div",{key:e.resourceid+i,staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("div",{staticClass:"align-self-center overlay-wrap mr-4 w-150 h-150 border"},[s("span",{staticClass:"overlay-icon"},["video"===e.note?s("i",{staticClass:"fas fa-video"}):s("i",{staticClass:"fas fa-book-open"})]),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://lms.mangosteems.com/cms/resdl/cover/"+e.resourceid,expression:"\n                        'https://lms.mangosteems.com/cms/resdl/cover/' +\n                        cr.resourceid\n                      "}],staticClass:"overlay-img cus-img",attrs:{alt:"course image"}})]),s("div",{staticClass:"media-body"},[s("div",{staticClass:"d-flex justify-content-between"},[s("div",[""!==e.level&&void 0!==e.level&&null!==e.level?s("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.$t("level"))+" "+t._s(e.level))]):t._e(),""!==e.unit&&void 0!==e.unit?s("span",{staticClass:"badge badge-pill badge-secondary ml-2"},[t._v(t._s(t.$t("unit"))+" "+t._s(e.unit))]):t._e(),s("h4",{staticClass:"mb-0 mt-3 d-flex align-self-center text-primary"},[s("div",{attrs:{title:""}},[t._v(" "+t._s(e.resource_name)+" ")])]),s("p",{directives:[{name:"show",rawName:"v-show",value:0!==e.lastplay.length,expression:"cr.lastplay.length !== 0"}],staticClass:"text-muted mt-1"},[s("i",{staticClass:"zmdi zmdi-notifications mr-1"}),s("small",{staticClass:"fw300 pointer",on:{click:function(s){return t.showLastPlay(e.lastplay)}}},[t._v(t._s(t.$t("last-played"))+" ")])])]),s("div",{staticClass:"text-primary pointer",attrs:{"data-toggle":"modal","data-target":"#StartModal"},on:{click:function(s){t.getAvailableCourse(e.resourceid),t.tempNote=e.note}}},[t._v(" "+t._s(t.$t("start"))),t._m(0,!0)])])])])])])])})),0)])])],1),s("div",{staticClass:"modal fade",attrs:{id:"lastPlayModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[0!==t.lastPlayList.length?s("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("last-play-record-course-date"))+" ")]):s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("no-record")))]),t._m(1)]),0!==t.lastPlayList.length?s("div",{staticClass:"modal-body pb-4"},t._l(t.lastPlayList,(function(e){return s("div",{key:e.courseid+"lastplay"},[s("span",[t._v(t._s(e.course_name)+" ： "+t._s(t._f("dateConversion")(e.last_access)))])])})),0):s("div",{staticClass:"modal-body pb-4"},[s("p",[t._v(t._s(t.$t("no-open-or-play-record"))+".")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"StartModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[0!==t.courseList.length?s("h5",{staticClass:"modal-title"},[t._v(" "+t._s(t.$t("start"))+" ")]):s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("no-course")))]),t._m(2)]),0!==t.courseList.length?s("div",{staticClass:"modal-body pb-4"},[s("h5",[t._v(t._s(t.$t("what-is-your-ongoing-course"))+"?")]),s("p",[t._v(" "+t._s(t.$t("this-material-can-only-be-viewed-in-the-following-course"))+". ")]),t._l(t.courseList,(function(e){return s("a",{key:e.resourceid,staticClass:"btn btn-primary btn-outline btn-rounded mr-3 mb-3",attrs:{title:"","data-dismiss":"modal"},on:{click:function(s){return t.gotoCourse(e)}}},[t._v(t._s(e.course_name))])}))],2):s("div",{staticClass:"modal-body pb-4"},[s("p",[t._v(" "+t._s(t.$t("the-course-you-can-use-this-collection-has-expired-if-you-wish-to-continue-using-it-you-must-renew-your-contract"))+". ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn-rounded-icon btn-primary rounded ml-2"},[e("i",{staticClass:"zmdi zmdi-arrow-right zmdi-hc-fw text-white"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],!1,null,"3aa3ce38",null);e.default=r.exports},2755:function(t,e,s){"use strict";s.d(e,"d",(function(){return o})),s.d(e,"j",(function(){return a})),s.d(e,"k",(function(){return l})),s.d(e,"e",(function(){return c})),s.d(e,"h",(function(){return r})),s.d(e,"l",(function(){return n})),s.d(e,"i",(function(){return d})),s.d(e,"b",(function(){return u})),s.d(e,"f",(function(){return h})),s.d(e,"c",(function(){return m})),s.d(e,"g",(function(){return p})),s.d(e,"a",(function(){return v})),s.d(e,"m",(function(){return f}));var i=s("a95a");const o={get:t=>Object(i.b)("/collection/byteacher/"+t)},a={get:(t,e)=>Object(i.b)(`/collection/search/${t}/${e}`)},l={get:(t,e,s,o)=>(console.log(`/collection/searchresource/${t}/${e}/${s}/${o}`),Object(i.b)(`/collection/searchresource/${t}/${e}/${s}/${o}`))},c={get:(t,e)=>(console.log("get col content"),console.log(t),console.log(e),Object(i.b)(`/collection/content/${t}/${e}`))},r={get:t=>Object(i.b)("/collection/listpkgbyteacher/"+t)},n={post:t=>(console.log("save collection"),Object(i.d)("/collection/create",t))},d={get:t=>(console.log(t),Object(i.b)("/collection/pkgresource/"+t))},u={get:t=>Object(i.b)("/collection/delete/"+t)},h={get:(t,e)=>Object(i.b)(`/collection/pkgmapcurs/${t}/${e}`)},m={get:(t,e,s)=>Object(i.b)(`/collection/availablecourse/${t}/${e}/${s}`)},p={get:(t,e)=>Object(i.b)(`/collection/exist/${t}/${e}`)},v={get:(t,e)=>(console.log(`/collection/addresource/${t}/${e}`),Object(i.b)(`/collection/addresource/${t}/${e}`))},f={put:(t,e)=>Object(i.e)("/collection/update/"+t,e)}},"5b90":function(t,e,s){"use strict";var i=s("f5aa");s.n(i).a},b712:function(t,e,s){"use strict";s.r(e);var i=s("8a49"),o=s("2755"),a={name:"SearchGroup",data(){return{typeList:[{text:"All type",id:"all"},{text:"Picture Book",id:"book"},{text:"Video",id:"video"}],selectType:"all",searchRname:"",selectSortType:"",searchStatus:!1,tempSearchName:"",textbookList:[],courseid:this.$route.params.courseid,colSortList:[],setAlllevel:"",selectLevelList:[],levelLists:[],haveLevel:!1,courseInfo:{},collectionInfo:{}}},props:["mfilter","page"],methods:{clearLevelFilter(){this.selectLevelList=[]},removeLevel(t){let e=this,s=this.selectLevelList.indexOf(t);-1!==s&&e.selectLevelList.splice(s,1)},async searchCourseResource(){let t=this;""!==this.searchRname?(this.searchStatus=!0,this.tempSearchName=this.searchRname):this.searchStatus=!1;let e=this.selectType;"all"===this.selectType&&(e="*");let s={type:e,keyword:this.searchRname};await i.d.post(this.courseid,s).then(e=>{if(""===t.selectSortType&&(0!==e.csrInfo.cntLevel?(t.haveLevel=!0,t.selectSortType="level_asc"):(t.haveLevel=!1,t.selectSortType="unit_asc")),e.record.forEach(e=>{void 0===e.level||""===e.level||t.levelLists.includes(e.level)||t.levelLists.push(e.level),void 0===e.unit&&(e.unit=""),e.link=e.information.includes("http")}),this.levelLists.sort(),this.textbookList=e.record,"success"===e.status)return!0}).catch(t=>{})&&(console.log("get course"),this.$emit("getMList",this.sortMList))},async searchCollectionResource(){let t=this,e=this.selectType,s=this.searchRname;"all"===this.selectType&&(e="*"),""===this.searchRname&&(s="*"),""!==this.searchRname?(this.searchStatus=!0,this.tempSearchName=this.searchRname):this.searchStatus=!1,await o.k.get(this.userid,this.$route.params.cid,s,e).then(e=>{if(""===t.selectSortType&&(console.log("default"),console.log(e.moreInfo.cntLevel),0!==e.moreInfo.cntLevel?(t.haveLevel=!0,console.log("change default level_asc"),t.selectSortType="level_asc"):(t.haveLevel=!1,t.selectSortType="unit_asc")),e.record.forEach(e=>{void 0===e.level||""===e.level||t.levelLists.includes(e.level)||t.levelLists.push(e.level),e.lastplay=[],e.last_access_all.forEach(t=>{"0"!==t.last_access&&e.lastplay.push(t)})}),console.log(e.record),this.textbookList=e.record,0===e.moreInfo.cntLevel){let e=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by unit Smallest to Largest",id:"unit_asc"},{text:"Sort by unit Largest to Smallest",id:"unit_desc"}];t.$store.dispatch("common/setSortTypeList",e)}else if(0===e.moreInfo.cntUnit){let e=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by level A to Z",id:"level_asc"},{text:"Sort by level Z to A",id:"level_desc"}];t.$store.dispatch("common/setSortTypeList",e)}if("success"===e.status)return!0}).catch(t=>{})&&this.$emit("getMColList",this.sortMList)},selectAllLevel(t){const e=this;t.currentTarget.checked?(e.selectLevelList=[],e.levelLists.forEach((function(t,s){e.selectLevelList.push(t)}))):e.selectLevelList=[]}},created(){this.openedTextbookList=this.openedTextbookLists,"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource(),this.courseInfo=this.courseInfos},computed:{courseInfos(){return this.$store.state.courseInfo.courseInfo},userid(){return this.$store.state.auth.userid},sortMList(){let t=[];return t="openm"===this.mfilter?this.$_sortMaterial(this.openedMList,this.selectSortType,this.selectLevelList):"openb"===this.mfilter?this.$_sortMaterial(this.openedBookList,this.selectSortType,this.selectLevelList):"openv"===this.mfilter?this.$_sortMaterial(this.openedVideoList,this.selectSortType,this.selectLevelList):this.$_sortMaterial(this.textbookList,this.selectSortType,this.selectLevelList),t},sortTypeList(){return this.$store.state.common.sortTypeList},openedMList(){return this.textbookList.filter(t=>"true"===t.openflag)},openedBookList(){return this.textbookList.filter(t=>"true"===t.openflag&&"book"===t.note)},openedVideoList(){return this.textbookList.filter(t=>"true"===t.openflag&&"video"===t.note)},openedTextbookLists(){return this.$store.state.courseInfo.openedTextbookList}},watch:{courseInfo(){if("CollectionDetail"!==this.$route.name)if(0===this.courseInfo.cntLevel){let t=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by unit Smallest to Largest",id:"unit_asc"},{text:"Sort by unit Largest to Smallest",id:"unit_desc"}];this.$store.dispatch("common/setSortTypeList",t)}else if(0===this.courseInfo.cntUnit){let t=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by level A to Z",id:"level_asc"},{text:"Sort by level Z to A",id:"level_desc"}];this.$store.dispatch("common/setSortTypeList",t)}},courseInfos(){this.courseInfo=this.courseInfos},selectLevelList(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},mfilter(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},selectSortType(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},openedTextbookLists(){this.openedTextbookList=this.openedTextbookLists},searchRname(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},selectType(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()}}},l=s("2877"),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-3"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_demo2",options:t.typeList},model:{value:t.selectType,callback:function(e){t.selectType=e},expression:"selectType"}})],1),s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRname,expression:"searchRname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search materials"},domProps:{value:t.searchRname},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchCourseResource()},input:function(e){e.target.composing||(t.searchRname=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchCourseResource()}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])]),s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_demo3",options:t.sortTypeList},model:{value:t.selectSortType,callback:function(e){t.selectSortType=e},expression:"selectSortType"}})],1),t.haveLevel?s("div",{staticClass:"form-group form-rounded mb-0 text-secondary",attrs:{"data-dismiss":"modal","data-toggle":"modal","data-target":"#filterModal"},on:{click:function(e){t.setAlllevel=""}}},[t._m(0)]):t._e()]),t.searchStatus||0!==t.selectLevelList.length?s("div",{staticClass:"mb-0 mr-3 text-secondary mt-2"},[s("div",{staticClass:"row col-sm-12"},[s("strong",{staticClass:"col-sm-12"},[s("span",{staticClass:"mr-1"},[t._v(t._s(t.sortMList.length))]),t._v(" "+t._s(t.$t("listings-for"))),""!==t.tempSearchName?s("span",[t._v(" “ "+t._s(t.searchRname)+" ” ")]):t._e()]),0!==t.selectLevelList.length?s("div",{staticClass:"col-sm-12"},[t._l(t.selectLevelList,(function(e){return s("span",{key:e},[s("span",{staticClass:"badge badge-pill badge-secondary mr-2 mb-2 pointer",on:{click:function(s){return t.removeLevel(e)}}},[t._v("Level "+t._s(e)+" "),t._m(1,!0)])])})),s("span",{staticClass:"text-primary pointer",on:{click:function(e){return t.clearLevelFilter()}}},[t._v("Clear all")])],2):t._e()])]):t._e(),s("div",{staticClass:"modal fade",attrs:{id:"filterModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"ModalTitle1"}},[t._v(t._s(t.$t("filter")))]),t._m(2)]),s("div",{staticClass:"modal-body"},[s("p",[t._v("Filter by level")]),s("div",{staticClass:"col-sm-12 row"},t._l(t.levelLists,(function(e,i){return s("div",{key:e+i,staticClass:"px-3"},[s("div",{staticClass:"custom-control custom-checkbox mr-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectLevelList,expression:"selectLevelList"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e},domProps:{value:e,checked:Array.isArray(t.selectLevelList)?t._i(t.selectLevelList,e)>-1:t.selectLevelList},on:{change:function(s){var i=t.selectLevelList,o=s.target,a=!!o.checked;if(Array.isArray(i)){var l=e,c=t._i(i,l);o.checked?c<0&&(t.selectLevelList=i.concat([l])):c>-1&&(t.selectLevelList=i.slice(0,c).concat(i.slice(c+1)))}else t.selectLevelList=a}}}),s("label",{staticClass:"custom-control-label",attrs:{for:e}},[t._v("Level "+t._s(e))])])])})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded d-flex justify-content-center align-items-center"},[e("i",{staticClass:"zmdi zmdi-filter-list mx-0"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"ml-1"},[e("i",{staticClass:"zmdi zmdi-close"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=c.exports},f5aa:function(t,e,s){}}]);
//# sourceMappingURL=chunk-f28554d2.c7391c72.js.map