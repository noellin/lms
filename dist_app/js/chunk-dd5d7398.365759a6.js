(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dd5d7398","chunk-2d2101ec"],{2755:function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"j",(function(){return l})),s.d(e,"k",(function(){return o})),s.d(e,"e",(function(){return c})),s.d(e,"h",(function(){return r})),s.d(e,"l",(function(){return n})),s.d(e,"i",(function(){return d})),s.d(e,"b",(function(){return u})),s.d(e,"f",(function(){return m})),s.d(e,"c",(function(){return p})),s.d(e,"g",(function(){return h})),s.d(e,"a",(function(){return v})),s.d(e,"m",(function(){return b}));var a=s("a95a");const i={get:t=>Object(a.b)("/collection/byteacher/"+t)},l={get:(t,e)=>Object(a.b)(`/collection/search/${t}/${e}`)},o={get:(t,e,s,i)=>(console.log(`/collection/searchresource/${t}/${e}/${s}/${i}`),Object(a.b)(`/collection/searchresource/${t}/${e}/${s}/${i}`))},c={get:(t,e)=>(console.log("get col content"),console.log(t),console.log(e),Object(a.b)(`/collection/content/${t}/${e}`))},r={get:t=>Object(a.b)("/collection/listpkgbyteacher/"+t)},n={post:t=>(console.log("save collection"),Object(a.d)("/collection/create",t))},d={get:t=>(console.log(t),Object(a.b)("/collection/pkgresource/"+t))},u={get:t=>Object(a.b)("/collection/delete/"+t)},m={get:(t,e)=>Object(a.b)(`/collection/pkgmapcurs/${t}/${e}`)},p={get:(t,e,s)=>Object(a.b)(`/collection/availablecourse/${t}/${e}/${s}`)},h={get:(t,e)=>Object(a.b)(`/collection/exist/${t}/${e}`)},v={get:(t,e)=>(console.log(`/collection/addresource/${t}/${e}`),Object(a.b)(`/collection/addresource/${t}/${e}`))},b={put:(t,e)=>Object(a.e)("/collection/update/"+t,e)}},"51ed":function(t,e,s){},9600:function(t,e,s){"use strict";s.r(e);var a=s("b76a"),i=s.n(a),l=s("1157"),o=s.n(l),c=s("3f5b"),r=s("2755"),n=s("b712"),d={name:"CollectionCreate",components:{CustomHeader:()=>Promise.resolve().then(s.bind(null,"339c")),Select2:c.a,Alert:()=>Promise.resolve().then(s.bind(null,"56a6")),draggable:i.a,SearchGroup:n.default},data:()=>({pkgList:[],selectPkgList:[],selectAllPM:"",pkgMaterialList:[],pkgid:"",pkgname:"",collectionName:"",tempMaterial:[],materialSequence:[],typeList:[{text:"All type",id:"all"},{text:"Picture Book",id:"book"},{text:"Video",id:"video"}],seleceType:"all",tempSearch:"",searchRName:"",tempPkgName:"",defaultPkgName:"",tempCollectionName:"",drag:!1,selectSortType:"title_asc"}),created(){this.getPkgList()},computed:{resourceFilter(){let t=[];return t="all"!==this.seleceType?this.pkgMaterialList.filter(t=>t.type===this.seleceType&&-1!==t.resource_name.toLowerCase().indexOf(this.searchRName.toLowerCase())):this.pkgMaterialList.filter(t=>-1!==t.resource_name.toLowerCase().indexOf(this.searchRName.toLowerCase())),t},sortMList(){return this.$_sortMaterial(this.resourceFilter,this.selectSortType,[])},sortTypeList(){return this.$store.state.common.sortTypeList},dragOptions:()=>({animation:200,group:"description",disabled:!1,ghostClass:"ghost"}),userid(){return this.$store.state.auth.userid}},methods:{getMList(t){console.log("change select"),this.resourceFilter=t},selectAll(t){const e=this;t.currentTarget.checked?(e.tempMaterial=[],e.sortMList.forEach((function(t,s){e.tempMaterial.push(t)}))):e.tempMaterial=[]},clearSequence(){this.materialSequence=[],this.tempMaterial=[],this.tempPkgName=this.pkgname,o()("#ClearTipsModal").modal("hide"),o()("#addMaterial").modal("show")},getPkgList(){let t=this;r.h.get(this.userid).then(e=>{this.pkgList=e.record,this.pkgid=e.record[0].pkgid,void 0!==this.$route.params.pkgid&&(t.pkgid=t.$route.params.pkgid),this.selectPkgList=e.record.map((t,e)=>(0===e&&(this.pkgname=t.pkg_name,this.tempPkgName=t.pkg_name,this.defaultPkgName=t.pkg_name),{id:t.pkgid,text:t.pkg_name}))})},getPkgMaterial(){console.log(this.pkgid),r.i.get(this.pkgid).then(t=>{t.record.forEach(t=>{void 0===t.unit&&(t.unit="")}),this.pkgMaterialList=t.record}).catch(t=>{})},mySelectEvent({id:t,text:e}){0===this.materialSequence.length&&(this.tempPkgName=e),this.pkgname=e},addtoSequence(){console.log(this.tempMaterial),this.materialSequence=[...this.tempMaterial]},removeFromSequence(t){this.materialSequence.splice(t,1)},setCollection(){if(""===this.collectionName||void 0===this.collectionName||null===this.collectionName)return this.$bus.$emit("messsage:push","Collection name cannot be a null value.","danger"),void o()("#SaveChangeModal").modal("hide");let t={};t.collection_name=this.collectionName,t.pkgid=this.pkgid,t.list=[],this.materialSequence.forEach(e=>{t.list.push(e.resourceid)}),t.resource=t.list.join(";"),t.userid=this.userid,r.l.post(t).then(t=>{"success"===t.status?this.$bus.$emit("messsage:push","New Collection Success.","success"):"duplicate collection name"===t.record?this.$bus.$emit("messsage:push","The collection name already exists, if you want to edit it, please go to the edit page.","danger"):this.$bus.$emit("messsage:push","Unknown error.","danger")}).catch(t=>{}),o()("#SaveChangeModal").modal("hide")}}},u=(s("d080"),s("2877")),m=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app3"}},[s("custom-header"),s("alert"),s("div",{},[s("header",{staticClass:"page-header"},[s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"mr-auto"},[s("a",{staticClass:"btn-rounded-icon btn-primary mr-2 pointer",on:{click:t.$back}},[s("i",{staticClass:"zmdi zmdi-arrow-left zmdi-hc-fw text-white"})]),s("h1",{staticClass:"separator"},[t._v(t._s(t.$t("my-library")))]),s("span",[t._v(t._s(t.$t("create")))])])])]),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v(t._s(t.$t("my-library-name")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionName,expression:"collectionName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter collection name",id:""},domProps:{value:t.collectionName},on:{input:function(e){e.target.composing||(t.collectionName=e.target.value)}}})])]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v(t._s(t.$t("available-library"))+" "),""===t.pkgid?s("span",{staticClass:"text-danger"},[t._v("No Available Packages")]):t._e()]),s("select2",{attrs:{id:"s2_demo2",options:t.selectPkgList},on:{select:function(e){return t.mySelectEvent(e)}},model:{value:t.pkgid,callback:function(e){t.pkgid=e},expression:"pkgid"}})],1)])])])])]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"text-right pb-3"},[s("button",{staticClass:"btn btn-primary btn-rounded btn-outline",attrs:{type:"button","data-toggle":"modal","data-target":t.tempPkgName!==t.pkgname?"#ClearTipsModal":"#addMaterial",disabled:""===t.collectionName||""===t.pkgid||void 0===t.pkgid},on:{click:function(e){return t.getPkgMaterial()}}},[s("i",{staticClass:"la la-plus"}),t._v(t._s(t.$t("material"))+" ")])]),s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v(t._s(t.$t("sequence")))]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"collection-scroll custom-scroll",staticStyle:{"max-height":"380px"},attrs:{"data-scroll":"dark"}},[s("ul",{staticClass:"sequence"},[s("draggable",t._b({staticClass:"list-group",attrs:{tag:"ul"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.materialSequence,callback:function(e){t.materialSequence=e},expression:"materialSequence"}},"draggable",t.dragOptions,!1),t._l(t.materialSequence,(function(e,a){return s("li",{key:e.id,staticClass:"d-flex justify-content-between mb-2"},[s("div",{staticClass:"d-flex justify-content-start align-items-center"},[s("div",{staticClass:"btn btn-nostyle btn-move mr-3"},[s("i",{staticClass:"la la-ellipsis-v"}),s("i",{staticClass:"la la-ellipsis-v"})]),s("div",{staticClass:"align-self-center overlay-wrap mr-4 w-150 h-150 border"},[s("span",{staticClass:"overlay-icon"},["video"===e.type?s("i",{staticClass:"fas fa-video"}):s("i",{staticClass:"fas fa-book-open"})]),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://lms.mangosteems.com/cms/resdl/cover/"+e.resourceid,expression:"\n                              'https://lms.mangosteems.com/cms/resdl/cover/' +\n                              m.resourceid\n                            "}],staticClass:"overlay-img cus-img",attrs:{alt:"course image"}})]),s("div",[""!==e.level&&null!==e.level&&void 0!==e.level?s("span",{staticClass:"badge badge-pill badge-secondary mt-2"},[t._v(t._s(t.$t("level"))+" "+t._s(e.level))]):t._e(),""!==e.unit&&void 0!==e.unit?s("span",{staticClass:"badge badge-pill badge-secondary ml-2"},[t._v(t._s(t.$t("unit"))+" "+t._s(e.unit))]):t._e(),s("h4",{staticClass:"d-flex align-self-center mt-2"},[t._v(" "+t._s(e.resource_name)+" ")])])]),s("button",{staticClass:"btn btn-nostyle btn-remove",on:{click:function(e){return t.removeFromSequence(a)}}},[s("i",{staticClass:"zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"})])])})),0)],1)])])])]),s("div",{staticClass:"col-12 text-right"},[s("button",{staticClass:"btn btn-secondary btn-rounded btn-outline mr-2",attrs:{type:"button","data-toggle":"modal","data-target":"#ClearAndBackModal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-toggle":"modal","data-target":"#SaveChangeModal"}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"SaveChangeModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("save-change")))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(t._s(t.$t("would-you-like-to-save-your-library"))+"?")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.setCollection()}}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"ClearAndBackModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("message")))]),t._m(1)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(" "+t._s(t.$t("want-to-clear-the-list-and-go-back-to-the-previous-page"))+"? ")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.$back}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"ClearTipsModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("message")))]),t._m(2)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(" "+t._s(t.$t("change-library-will-clear-the-current-list"))+" ")]),s("p",[t._v(t._s(t.$t("would-you-like-to-save-your-changes"))+"?")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-target":"#addMaterial"},on:{click:function(e){return t.clearSequence()}}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"addMaterial",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"ModalTitle1"}},[s("i",{staticClass:"zmdi zmdi-plus zmdi-hc-fw"}),t._v(t._s(t.$t("material"))+" ")]),t._m(3)]),s("div",{staticClass:"modal-body"},[s("h6",{staticClass:"pb-2"},[s("span",{staticClass:"text-muted"},[t._v(t._s(t.$t("library")))]),s("strong",{staticClass:"ml-1"},[t._v(t._s(t.pkgname))])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("div",{staticClass:"form-group form-rounded"},[s("select2",{attrs:{id:"s2_demo1",options:t.typeList},model:{value:t.seleceType,callback:function(e){t.seleceType=e},expression:"seleceType"}})],1)]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"form-group form-rounded"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempSearch,expression:"tempSearch"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.tempSearch},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.searchRName=t.tempSearch},input:function(e){e.target.composing||(t.tempSearch=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){t.searchRName=t.tempSearch}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])])]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"form-group form-rounded"},[s("select2",{attrs:{id:"s2_demo3",options:t.sortTypeList},model:{value:t.selectSortType,callback:function(e){t.selectSortType=e},expression:"selectSortType"}})],1)])])]),s("div",{staticClass:"modal-body",attrs:{"data-scroll":"dark"}},[s("div",{staticClass:"custom-control custom-checkbox form-check pb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllPM,expression:"selectAllPM"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"selectPM"},domProps:{checked:Array.isArray(t.selectAllPM)?t._i(t.selectAllPM,null)>-1:t.selectAllPM},on:{click:t.selectAll,change:function(e){var s=t.selectAllPM,a=e.target,i=!!a.checked;if(Array.isArray(s)){var l=t._i(s,null);a.checked?l<0&&(t.selectAllPM=s.concat([null])):l>-1&&(t.selectAllPM=s.slice(0,l).concat(s.slice(l+1)))}else t.selectAllPM=i}}}),s("label",{staticClass:"custom-control-label text-primary",attrs:{for:"selectPM"}},[t._v(t._s(t.$t("select-all")))])]),t._l(t.sortMList,(function(e){return s("div",{key:e.resourceid,staticClass:"custom-control custom-checkbox form-check pb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempMaterial,expression:"tempMaterial"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.resourceid},domProps:{value:e,checked:Array.isArray(t.tempMaterial)?t._i(t.tempMaterial,e)>-1:t.tempMaterial},on:{change:function(s){var a=t.tempMaterial,i=s.target,l=!!i.checked;if(Array.isArray(a)){var o=e,c=t._i(a,o);i.checked?c<0&&(t.tempMaterial=a.concat([o])):c>-1&&(t.tempMaterial=a.slice(0,c).concat(a.slice(c+1)))}else t.tempMaterial=l}}}),s("label",{staticClass:"custom-control-label",attrs:{for:e.resourceid}},[""!==e.level?s("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.$t("level"))+" "+t._s(e.level))]):t._e(),""!==e.unit?s("span",{staticClass:"badge badge-pill badge-secondary ml-2"},[t._v(t._s(t.$t("unit"))+" "+t._s(e.unit))]):t._e(),t._v(" "+t._s(e.resource_name))])])}))],2),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.addtoSequence(),t.tempPkgName=t.pkgname}}},[s("i",{staticClass:"la la-plus"}),t._v(t._s(t.$t("material"))+" ")])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],!1,null,"14def186",null);e.default=m.exports},b712:function(t,e,s){"use strict";s.r(e);var a=s("8a49"),i=s("2755"),l={name:"SearchGroup",data(){return{typeList:[{text:"All type",id:"all"},{text:"Picture Book",id:"book"},{text:"Video",id:"video"}],selectType:"all",searchRname:"",selectSortType:"",searchStatus:!1,tempSearchName:"",textbookList:[],courseid:this.$route.params.courseid,colSortList:[],setAlllevel:"",selectLevelList:[],levelLists:[],haveLevel:!1,courseInfo:{},collectionInfo:{}}},props:["mfilter","page"],methods:{clearLevelFilter(){this.selectLevelList=[]},removeLevel(t){let e=this,s=this.selectLevelList.indexOf(t);-1!==s&&e.selectLevelList.splice(s,1)},async searchCourseResource(){let t=this;""!==this.searchRname?(this.searchStatus=!0,this.tempSearchName=this.searchRname):this.searchStatus=!1;let e=this.selectType;"all"===this.selectType&&(e="*");let s={type:e,keyword:this.searchRname};await a.d.post(this.courseid,s).then(e=>{if(""===t.selectSortType&&(0!==e.csrInfo.cntLevel?(t.haveLevel=!0,t.selectSortType="level_asc"):(t.haveLevel=!1,t.selectSortType="unit_asc")),e.record.forEach(e=>{void 0===e.level||""===e.level||t.levelLists.includes(e.level)||t.levelLists.push(e.level),void 0===e.unit&&(e.unit=""),e.link=e.information.includes("http")}),this.levelLists.sort(),this.textbookList=e.record,"success"===e.status)return!0}).catch(t=>{})&&(console.log("get course"),this.$emit("getMList",this.sortMList),this.$emit("getFilterInfo",this.selectLevelList,this.selectSortType))},async searchCollectionResource(){let t=this,e=this.selectType,s=this.searchRname;"all"===this.selectType&&(e="*"),""===this.searchRname&&(s="*"),""!==this.searchRname?(this.searchStatus=!0,this.tempSearchName=this.searchRname):this.searchStatus=!1,await i.k.get(this.userid,this.$route.params.cid,s,e).then(e=>{if(""===t.selectSortType&&(0!==e.moreInfo.cntLevel?(t.haveLevel=!0,t.selectSortType="level_asc"):(t.haveLevel=!1,t.selectSortType="unit_asc")),e.record.forEach(e=>{void 0===e.level||""===e.level||t.levelLists.includes(e.level)||t.levelLists.push(e.level),e.lastplay=[],e.last_access_all.forEach(t=>{"0"!==t.last_access&&e.lastplay.push(t)})}),this.textbookList=e.record,0===e.moreInfo.cntLevel){let e=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by unit Smallest to Largest",id:"unit_asc"},{text:"Sort by unit Largest to Smallest",id:"unit_desc"}];t.$store.dispatch("common/setSortTypeList",e)}else if(0===e.moreInfo.cntUnit){let e=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by level A to Z",id:"level_asc"},{text:"Sort by level Z to A",id:"level_desc"}];t.$store.dispatch("common/setSortTypeList",e)}if("success"===e.status)return!0}).catch(t=>{})&&this.$emit("getMColList",this.sortMList)},selectAllLevel(t){const e=this;t.currentTarget.checked?(e.selectLevelList=[],e.levelLists.forEach((function(t,s){e.selectLevelList.push(t)}))):e.selectLevelList=[]}},created(){this.openedTextbookList=this.openedTextbookLists,"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource(),this.courseInfo=this.courseInfos},computed:{courseInfos(){return this.$store.state.courseInfo.courseInfo},userid(){return this.$store.state.auth.userid},sortMList(){console.log("start sort");let t=[];return t="openm"===this.mfilter?this.$_sortMaterial(this.openedMList,this.selectSortType,this.selectLevelList):"openb"===this.mfilter?this.$_sortMaterial(this.openedBookList,this.selectSortType,this.selectLevelList):"openv"===this.mfilter?this.$_sortMaterial(this.openedVideoList,this.selectSortType,this.selectLevelList):this.$_sortMaterial(this.textbookList,this.selectSortType,this.selectLevelList),t},sortTypeList(){return this.$store.state.common.sortTypeList},openedMList(){return this.textbookList.filter(t=>"true"===t.openflag)},openedBookList(){return this.textbookList.filter(t=>"true"===t.openflag&&"book"===t.note)},openedVideoList(){return this.textbookList.filter(t=>"true"===t.openflag&&"video"===t.note)},openedTextbookLists(){return this.$store.state.courseInfo.openedTextbookList}},watch:{courseInfo(){if("CollectionDetail"!==this.$route.name)if(0===this.courseInfo.cntLevel){let t=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by unit Smallest to Largest",id:"unit_asc"},{text:"Sort by unit Largest to Smallest",id:"unit_desc"}];this.$store.dispatch("common/setSortTypeList",t)}else if(0===this.courseInfo.cntUnit){let t=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by level A to Z",id:"level_asc"},{text:"Sort by level Z to A",id:"level_desc"}];this.$store.dispatch("common/setSortTypeList",t)}else{let t=[{text:"Sort by title A to Z",id:"title_asc"},{text:"Sort by title Z to A",id:"title_desc"},{text:"Sort by level A to Z",id:"level_asc"},{text:"Sort by level Z to A",id:"level_desc"},{text:"Sort by unit Smallest to Largest",id:"unit_asc"},{text:"Sort by unit Largest to Smallest",id:"unit_desc"}];this.$store.dispatch("common/setSortTypeList",t)}},courseInfos(){this.courseInfo=this.courseInfos},selectLevelList(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},mfilter(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},selectSortType(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},openedTextbookLists(){this.openedTextbookList=this.openedTextbookLists},searchRname(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()},selectType(){"collection"!==this.page?this.searchCourseResource():this.searchCollectionResource()}}},o=s("2877"),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-3"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_demo2",options:t.typeList},model:{value:t.selectType,callback:function(e){t.selectType=e},expression:"selectType"}})],1),s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRname,expression:"searchRname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search materials"},domProps:{value:t.searchRname},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchCourseResource()},input:function(e){e.target.composing||(t.searchRname=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchCourseResource()}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])]),s("div",{staticClass:"form-group form-rounded mb-0 mr-3"},[s("select2",{attrs:{id:"s2_demo3",options:t.sortTypeList},model:{value:t.selectSortType,callback:function(e){t.selectSortType=e},expression:"selectSortType"}})],1),t.haveLevel?s("div",{staticClass:"form-group form-rounded mb-0 text-secondary",attrs:{"data-dismiss":"modal","data-toggle":"modal","data-target":"#filterModal"},on:{click:function(e){t.setAlllevel=""}}},[t._m(0)]):t._e()]),t.searchStatus||0!==t.selectLevelList.length?s("div",{staticClass:"mb-0 mr-3 text-secondary mt-2"},[s("div",{staticClass:"row col-sm-12"},[s("strong",{staticClass:"col-sm-12"},[s("span",{staticClass:"mr-1"},[t._v(t._s(t.sortMList.length))]),t._v(" "+t._s(t.$t("listings-for"))),""!==t.tempSearchName?s("span",[t._v(" “ "+t._s(t.searchRname)+" ” ")]):t._e()]),0!==t.selectLevelList.length?s("div",{staticClass:"col-sm-12"},[t._l(t.selectLevelList,(function(e){return s("span",{key:e},[s("span",{staticClass:"badge badge-pill badge-secondary mr-2 mb-2 pointer",on:{click:function(s){return t.removeLevel(e)}}},[t._v(t._s(t.$t("level"))+" "+t._s(e)+" "),t._m(1,!0)])])})),s("span",{staticClass:"text-primary pointer",on:{click:function(e){return t.clearLevelFilter()}}},[t._v(t._s(t.$t("clear-all")))])],2):t._e()])]):t._e(),s("div",{staticClass:"modal fade",attrs:{id:"filterModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"ModalTitle1"}},[t._v(t._s(t.$t("filter")))]),t._m(2)]),s("div",{staticClass:"modal-body"},[s("p",[t._v("Filter by level")]),s("div",{staticClass:"col-sm-12 row"},t._l(t.levelLists,(function(e,a){return s("div",{key:e+a,staticClass:"col-4"},[s("div",{staticClass:"custom-control custom-checkbox mr-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectLevelList,expression:"selectLevelList"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e},domProps:{value:e,checked:Array.isArray(t.selectLevelList)?t._i(t.selectLevelList,e)>-1:t.selectLevelList},on:{change:function(s){var a=t.selectLevelList,i=s.target,l=!!i.checked;if(Array.isArray(a)){var o=e,c=t._i(a,o);i.checked?c<0&&(t.selectLevelList=a.concat([o])):c>-1&&(t.selectLevelList=a.slice(0,c).concat(a.slice(c+1)))}else t.selectLevelList=l}}}),s("label",{staticClass:"custom-control-label",attrs:{for:e}},[t._v("Level "+t._s(e))])])])})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded d-flex justify-content-center align-items-center"},[e("i",{staticClass:"zmdi zmdi-filter-list mx-0"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"ml-1"},[e("i",{staticClass:"zmdi zmdi-close"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=c.exports},d080:function(t,e,s){"use strict";var a=s("51ed");s.n(a).a}}]);
//# sourceMappingURL=chunk-dd5d7398.365759a6.js.map