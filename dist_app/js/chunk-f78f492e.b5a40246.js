(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f78f492e"],{2755:function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"j",(function(){return l})),s.d(e,"k",(function(){return o})),s.d(e,"e",(function(){return c})),s.d(e,"h",(function(){return r})),s.d(e,"l",(function(){return n})),s.d(e,"i",(function(){return d})),s.d(e,"b",(function(){return u})),s.d(e,"f",(function(){return m})),s.d(e,"c",(function(){return p})),s.d(e,"g",(function(){return b})),s.d(e,"a",(function(){return v})),s.d(e,"m",(function(){return h}));var a=s("a95a");const i={get:t=>Object(a.b)("/collection/byteacher/"+t)},l={get:(t,e)=>Object(a.b)(`/collection/search/${t}/${e}`)},o={get:(t,e,s,i)=>(console.log(`/collection/searchresource/${t}/${e}/${s}/${i}`),Object(a.b)(`/collection/searchresource/${t}/${e}/${s}/${i}`))},c={get:(t,e)=>(console.log("get col content"),console.log(t),console.log(e),Object(a.b)(`/collection/content/${t}/${e}`))},r={get:t=>Object(a.b)("/collection/listpkgbyteacher/"+t)},n={post:t=>(console.log("save collection"),Object(a.d)("/collection/create",t))},d={get:t=>(console.log(t),Object(a.b)("/collection/pkgresource/"+t))},u={get:t=>Object(a.b)("/collection/delete/"+t)},m={get:(t,e)=>Object(a.b)(`/collection/pkgmapcurs/${t}/${e}`)},p={get:(t,e,s)=>Object(a.b)(`/collection/availablecourse/${t}/${e}/${s}`)},b={get:(t,e)=>Object(a.b)(`/collection/exist/${t}/${e}`)},v={get:(t,e)=>(console.log(`/collection/addresource/${t}/${e}`),Object(a.b)(`/collection/addresource/${t}/${e}`))},h={put:(t,e)=>Object(a.e)("/collection/update/"+t,e)}},"32a2":function(t,e,s){},accb:function(t,e,s){"use strict";s.r(e);var a=s("b76a"),i=s.n(a),l=s("2755"),o={name:"CollectionDetail",components:{CustomHeader:()=>Promise.resolve().then(s.bind(null,"339c")),draggable:i.a},data(){return{cname:"",pName:"",tempRname:"",tempRid:"",tempIndex:0,pkgMaterialList:[],selectAllPM:"",typeList:[{text:"All type",id:"all"},{text:"Picture Book",id:"book"},{text:"Video",id:"video"}],seleceType:"all",tempSearch:"",searchRName:"",materialSequence:[],tempMidList:[],tempMaterialList:[],courseList:[],pkgid:this.$route.params.pid,colid:this.$route.params.cid,drag:!1,selectSortType:"title_asc"}},computed:{resourceFilter(){let t=[];return t="all"!==this.seleceType?this.pkgMaterialList.filter(t=>t.type===this.seleceType&&-1!==t.resource_name.toLowerCase().indexOf(this.searchRName.toLowerCase())):this.pkgMaterialList.filter(t=>-1!==t.resource_name.toLowerCase().indexOf(this.searchRName.toLowerCase())),t},sortMList(){return this.$_sortMaterial(this.resourceFilter,this.selectSortType,[])},sortTypeList(){return this.$store.state.common.sortTypeList},dragOptions:()=>({animation:200,group:"description",disabled:!1,ghostClass:"ghost"}),userid(){return this.$store.state.auth.userid}},mounted(){this.init()},methods:{selectAll(t){const e=this;t.currentTarget.checked?(e.tempMaterial=[],e.sortMList.forEach((function(t,s){e.tempMaterial.push(t)}))):e.tempMaterial=[]},init(){this.axios.all([this.getCollectionContent(),this.getCollectionInfo(),this.getPkgMaterial()]).then(this.axios.spread((t,e)=>{})).catch(t=>{}),this.cname=this.$route.params.cname},getCollectionContent(){return l.e.get(this.userid,this.$route.params.cid).then(t=>{t.record.forEach(t=>{void 0===t.unit&&(t.unit="")}),this.materialSequence=t.record,t.record.forEach(t=>{this.tempMidList.push(t.resourceid)})}).catch(t=>{})},getCollectionInfo(){this.courseList=[],l.f.get(this.userid,this.$route.params.pid).then(t=>{t.forEach(t=>{this.courseList.push(t.course_name),this.pName=t.pkg_name})}).catch(t=>{})},getPkgMaterial(){l.i.get(this.$route.params.pid).then(t=>{t.record.forEach(t=>{void 0===t.unit&&(t.unit="")}),this.pkgMaterialList=t.record}).catch(t=>{})},removeFromSequence(t){this.materialSequence.splice(t,1)},resetSelect(){},addtoSequence(){let t=[];this.tempMidList.forEach(e=>{this.pkgMaterialList.forEach(s=>{s.resourceid===e&&t.push(s)})}),this.materialSequence=t},async updateCollection(){let t={};t.collection_name=this.cname,t.pkgid=this.pkgid,t.list=[],this.materialSequence.forEach(e=>{t.list.push(e.resourceid)}),t.resource=t.list.join(";"),t.userid=this.userid,console.log(t),await l.m.put(this.colid,t).then(t=>{if(console.log(t),"success"===t.status)return!0;this.$bus.$emit("messsage:push",t.record,"danger")}).catch(t=>{})&&(this.$bus.$emit("messsage:push","Update Collection Success.","success"),$("#SaveChangeModal").modal("hide"))}}},c=(s("b9c3"),s("2877")),r=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app3"}},[s("custom-header"),s("div",{staticClass:"content py-0"},[s("header",{staticClass:"page-header"},[s("div",{staticClass:"d-flex align-items-start"},[s("div",{staticClass:"mt-2 mr-3"},[s("a",{staticClass:"btn-rounded-icon btn-primary ml-2 pointer",on:{click:t.$back}},[s("i",{staticClass:"zmdi zmdi-arrow-left zmdi-hc-fw text-white"})])]),s("div",{staticClass:"mr-auto"},[s("h1",{staticClass:"separator"},[t._v(t._s(t.$t("my-library")))]),s("span",[t._v(t._s(t.$t("edit")))]),s("p",{staticClass:"second-title"},[t._v(t._s(t.cname))])])])]),s("section",{staticClass:"page-content container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row cardsContainer",attrs:{id:"cards-container"}},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v(t._s(t.$t("my-library-name")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.cname,expression:"cname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter collection name"},domProps:{value:t.cname},on:{input:function(e){e.target.composing||(t.cname=e.target.value)}}})])]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v(t._s(t.$t("available-library")))]),s("select",{staticClass:"form-control",attrs:{id:"s2_demo2",disabled:""}},[s("optgroup",{attrs:{label:"select package"}},[s("option",{attrs:{selected:""}},[t._v(t._s(t.pName))]),s("option",[t._v(t._s(t.$t("second-grade")))]),s("option",[t._v(t._s(t.$t("third-grade")))]),s("option",[t._v(t._s(t.$t("fourth-grade")))]),s("option",[t._v(t._s(t.$t("summer-class-special")))]),s("option",[t._v(t._s(t.$t("winter-class-special")))])])])])]),s("div",{staticClass:"col-12"},[s("h6",[t._v(t._s(t.$t("applicable-course")))]),s("span",t._l(t.courseList,(function(e,a){return s("span",{key:a+e},[t._v(t._s(e)+" "),a+1<t.courseList.length?s("span",[t._v("、")]):t._e()])})),0)])])])])]),s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"d-flex justify-content-end pb-3"},[s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-primary btn-rounded btn-outline",attrs:{type:"button","data-toggle":"modal","data-target":"#addMaterial",disabled:""===t.cname||""===t.pName||void 0===t.pName},on:{click:function(e){return t.resetSelect()}}},[t._v(" "+t._s(t.$t("selection-and-management"))+" ")])])]),s("div",{staticClass:"card"},[s("h5",{staticClass:"card-header"},[t._v(t._s(t.$t("sequence")))]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"collection-scroll",staticStyle:{"max-height":"320px"},attrs:{"data-scroll":"dark"}},[s("ul",{staticClass:"sequence"},[s("draggable",t._b({staticClass:"list-group",attrs:{tag:"ul"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.materialSequence,callback:function(e){t.materialSequence=e},expression:"materialSequence"}},"draggable",t.dragOptions,!1),t._l(t.materialSequence,(function(e,a){return s("li",{key:e.resourceid,staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"d-flex justify-content-start align-items-center"},[s("div",{staticClass:"btn btn-nostyle btn-move mr-3"},[s("i",{staticClass:"la la-ellipsis-v"}),s("i",{staticClass:"la la-ellipsis-v"})]),s("div",{staticClass:"align-self-center overlay-wrap mr-4 w-150 h-150 border"},[s("span",{staticClass:"overlay-icon"},["video"===e.note?s("i",{staticClass:"fas fa-video"}):s("i",{staticClass:"fas fa-book-open"})]),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://lms.mangosteems.com/cms/resdl/cover/"+e.resourceid,expression:"\n                              'https://lms.mangosteems.com/cms/resdl/cover/' +\n                              m.resourceid\n                            "}],staticClass:"overlay-img cus-img",attrs:{alt:"course image"}})]),s("div",[""!==e.level&&null!==e.level&&void 0!==e.level?s("span",{staticClass:"badge badge-pill badge-secondary mt-2"},[t._v(t._s(t.$t("level"))+" "+t._s(e.level))]):t._e(),""!==e.unit&&void 0!==e.unit?s("span",{staticClass:"badge badge-pill badge-secondary ml-2"},[t._v(t._s(t.$t("unit"))+" "+t._s(e.unit))]):t._e(),s("h4",{staticClass:"d-flex align-self-center mt-2"},[t._v(" "+t._s(e.resource_name)+" ")])])]),s("button",{staticClass:"btn btn-nostyle btn-remove",attrs:{"data-toggle":"modal","data-target":"#deleteModal"},on:{click:function(s){t.tempRname=e.resource_name,t.tempRid=e.resourceid,t.tempIndex=a}}},[s("i",{staticClass:"zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"})])])})),0)],1)])])])]),s("div",{staticClass:"col-12 text-right"},[s("button",{staticClass:"btn btn-secondary btn-rounded btn-outline mr-2",attrs:{type:"button","data-toggle":"modal","data-target":"#SaveChangeModal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-toggle":"modal","data-target":"#SaveChangeModal"}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"SaveChangeModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("save-change")))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(t._s(t.$t("would-you-like-to-save-your-changes"))+"?")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.updateCollection()}}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"NoCourseModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("no-course")))]),t._m(1)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(" "+t._s(t.$t("courses-that-can-use-this-collection-have-expired-less-than-br-greater-than-if-you-want-to-continue-using-you-must-renew-the-contract"))+". ")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-rounded btn-outline mr-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button"}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"addMaterial",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"ModalTitle1"}},[s("i",{staticClass:"zmdi zmdi-plus zmdi-hc-fw"}),t._v(t._s(t.$t("material"))+" ")]),t._m(2)]),s("div",{staticClass:"modal-body"},[s("h6",{staticClass:"pb-2"},[s("span",{staticClass:"text-muted"},[t._v(t._s(t.$t("library")))]),s("strong",{staticClass:"ml-1"},[t._v(t._s(t.pName))])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("div",{staticClass:"form-group form-rounded"},[s("select2",{attrs:{id:"s2_demo1",options:t.typeList},model:{value:t.seleceType,callback:function(e){t.seleceType=e},expression:"seleceType"}})],1)]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"form-group form-rounded"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempSearch,expression:"tempSearch"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.tempSearch},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.searchRName=t.tempSearch},input:function(e){e.target.composing||(t.tempSearch=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){t.searchRName=t.tempSearch}}},[s("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])])]),s("div",{staticClass:"col-4"},[s("div",{staticClass:"form-group form-rounded"},[s("select2",{attrs:{id:"s2_demo3",options:t.sortTypeList},model:{value:t.selectSortType,callback:function(e){t.selectSortType=e},expression:"selectSortType"}})],1)])])]),s("div",{staticClass:"modal-body",attrs:{"data-scroll":"dark"}},[s("div",{staticClass:"custom-control custom-checkbox form-check pb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllPM,expression:"selectAllPM"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"selectPM"},domProps:{checked:Array.isArray(t.selectAllPM)?t._i(t.selectAllPM,null)>-1:t.selectAllPM},on:{click:t.selectAll,change:function(e){var s=t.selectAllPM,a=e.target,i=!!a.checked;if(Array.isArray(s)){var l=t._i(s,null);a.checked?l<0&&(t.selectAllPM=s.concat([null])):l>-1&&(t.selectAllPM=s.slice(0,l).concat(s.slice(l+1)))}else t.selectAllPM=i}}}),s("label",{staticClass:"custom-control-label text-primary",attrs:{for:"selectPM"}},[t._v(t._s(t.$t("select-all")))])]),t._l(t.sortMList,(function(e){return s("div",{key:e.resourceid,staticClass:"custom-control custom-checkbox form-check pb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempMidList,expression:"tempMidList"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.resourceid},domProps:{value:e.resourceid,checked:Array.isArray(t.tempMidList)?t._i(t.tempMidList,e.resourceid)>-1:t.tempMidList},on:{change:function(s){var a=t.tempMidList,i=s.target,l=!!i.checked;if(Array.isArray(a)){var o=e.resourceid,c=t._i(a,o);i.checked?c<0&&(t.tempMidList=a.concat([o])):c>-1&&(t.tempMidList=a.slice(0,c).concat(a.slice(c+1)))}else t.tempMidList=l}}}),s("label",{staticClass:"custom-control-label",attrs:{for:e.resourceid}},[""!==e.level?s("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.$t("level"))+" "+t._s(e.level))]):t._e(),""!==e.unit?s("span",{staticClass:"badge badge-pill badge-secondary ml-2"},[t._v(t._s(t.$t("unit"))+" "+t._s(e.unit))]):t._e(),t._v(" "+t._s(e.resource_name))])])}))],2),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.addtoSequence()}}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("delete")))]),t._m(3)]),s("div",{staticClass:"modal-body"},[s("p",[t._v(" "+t._s(t.$t("confirm-to-delete-resource"))+"："),s("strong",[t._v(t._s(t.tempRname))]),t._v("? ")])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),s("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.removeFromSequence(t.tempIndex)}}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],!1,null,"b28b938a",null);e.default=r.exports},b9c3:function(t,e,s){"use strict";var a=s("32a2");s.n(a).a}}]);
//# sourceMappingURL=chunk-f78f492e.b5a40246.js.map