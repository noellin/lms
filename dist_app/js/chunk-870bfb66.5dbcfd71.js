(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-870bfb66"],{2755:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"j",(function(){return l})),a.d(e,"k",(function(){return o})),a.d(e,"e",(function(){return c})),a.d(e,"h",(function(){return n})),a.d(e,"l",(function(){return r})),a.d(e,"i",(function(){return d})),a.d(e,"b",(function(){return m})),a.d(e,"f",(function(){return u})),a.d(e,"c",(function(){return p})),a.d(e,"g",(function(){return g})),a.d(e,"a",(function(){return b})),a.d(e,"m",(function(){return v}));var s=a("a95a");const i={get:t=>Object(s.b)("/collection/byteacher/"+t)},l={get:(t,e)=>Object(s.b)(`/collection/search/${t}/${e}`)},o={get:(t,e,a,i)=>Object(s.b)(`/collection/searchresource/${t}/${e}/${a}/${i}`)},c={get:(t,e)=>(console.log("get col content"),console.log(t),console.log(e),Object(s.b)(`/collection/content/${t}/${e}`))},n={get:t=>Object(s.b)("/collection/listpkgbyteacher/"+t)},r={post:t=>(console.log("save collection"),Object(s.c)("/collection/create",t))},d={get:t=>(console.log(t),Object(s.b)("/collection/pkgresource/"+t))},m={get:t=>Object(s.b)("/collection/delete/"+t)},u={get:(t,e)=>Object(s.b)(`/collection/pkgmapcurs/${t}/${e}`)},p={get:(t,e,a)=>Object(s.b)(`/collection/availablecourse/${t}/${e}/${a}`)},g={get:(t,e)=>Object(s.b)(`/collection/exist/${t}/${e}`)},b={get:(t,e)=>(console.log(`/collection/addresource/${t}/${e}`),Object(s.b)(`/collection/addresource/${t}/${e}`))},v={put:(t,e)=>Object(s.d)("/collection/update/"+t,e)}},9600:function(t,e,a){"use strict";a.r(e);var s=a("b76a"),i=a.n(s),l=a("1157"),o=a.n(l),c=a("3f5b"),n=a("2755"),r=(a("2ef0"),{name:"CollectionCreate",components:{CustomHeader:()=>Promise.resolve().then(a.bind(null,"339c")),Select2:c.a,Alert:()=>Promise.resolve().then(a.bind(null,"56a6")),draggable:i.a},data:()=>({pkgList:[],selectPkgList:[],selectAllPM:"",pkgMaterialList:[],pkgid:"",pkgname:"",collectionName:"",tempMaterial:[],materialSequence:[],typeList:[{text:"All type",id:"all"},{text:"Picture Book",id:"book"},{text:"Video",id:"video"}],seleceType:"all",tempSearch:"",searchRName:"",tempPkgName:"",defaultPkgName:"",tempCollectionName:"",drag:!1,selectSortType:"title_asc"}),created(){this.getPkgList()},computed:{resourceFilter(){let t=[];return t="all"!==this.seleceType?this.pkgMaterialList.filter(t=>t.type===this.seleceType&&-1!==t.resource_name.toLowerCase().indexOf(this.searchRName.toLowerCase())):this.pkgMaterialList.filter(t=>-1!==t.resource_name.toLowerCase().indexOf(this.searchRName.toLowerCase())),t},sortMList(){return this.$_sortMaterial(this.resourceFilter,this.selectSortType)},sortTypeList(){return this.$store.state.common.sortTypeList},dragOptions:()=>({animation:200,group:"description",disabled:!1,ghostClass:"ghost"}),userid(){return this.$store.state.auth.userid}},methods:{selectAll(t){const e=this;t.currentTarget.checked?(e.tempMaterial=[],e.sortMList.forEach((function(t,a){e.tempMaterial.push(t)}))):e.tempMaterial=[]},clearSequence(){this.materialSequence=[],this.tempMaterial=[],this.tempPkgName=this.pkgname,o()("#ClearTipsModal").modal("hide"),o()("#addMaterial").modal("show")},getPkgList(){let t=this;n.h.get(this.userid).then(e=>{this.pkgList=e.record,this.pkgid=e.record[0].pkgid,void 0!==this.$route.params.pkgid&&(t.pkgid=t.$route.params.pkgid),this.selectPkgList=e.record.map((t,e)=>(0===e&&(this.pkgname=t.pkg_name,this.tempPkgName=t.pkg_name,this.defaultPkgName=t.pkg_name),{id:t.pkgid,text:t.pkg_name}))})},getPkgMaterial(){console.log(this.pkgid),n.i.get(this.pkgid).then(t=>{t.record.forEach(t=>{void 0===t.unit&&(t.unit="")}),this.pkgMaterialList=t.record}).catch(t=>{})},mySelectEvent({id:t,text:e}){0===this.materialSequence.length&&(this.tempPkgName=e),this.pkgname=e},addtoSequence(){console.log(this.tempMaterial),this.materialSequence=[...this.tempMaterial]},removeFromSequence(t){this.materialSequence.splice(t,1)},setCollection(){if(""===this.collectionName||void 0===this.collectionName||null===this.collectionName)return this.$bus.$emit("messsage:push","Collection name cannot be a null value.","danger"),void o()("#SaveChangeModal").modal("hide");let t={};t.collection_name=this.collectionName,t.pkgid=this.pkgid,t.list=[],this.materialSequence.forEach(e=>{t.list.push(e.resourceid)}),t.resource=t.list.join(";"),t.userid=this.userid,n.l.post(t).then(t=>{"success"===t.status?this.$bus.$emit("messsage:push","New Collection Success.","success"):"duplicate collection name"===t.record?this.$bus.$emit("messsage:push","The collection name already exists, if you want to edit it, please go to the edit page.","danger"):this.$bus.$emit("messsage:push","Unknown error.","danger")}).catch(t=>{}),o()("#SaveChangeModal").modal("hide")}}}),d=(a("a209"),a("2877")),m=Object(d.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app3"}},[a("custom-header"),a("alert"),a("div",{},[a("header",{staticClass:"page-header"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"mr-auto"},[a("a",{staticClass:"btn-rounded-icon btn-primary mr-2 pointer",on:{click:t.$back}},[a("i",{staticClass:"zmdi zmdi-arrow-left zmdi-hc-fw text-white"})]),a("h1",{staticClass:"separator"},[t._v(t._s(t.$t("collection")))]),a("span",[t._v(t._s(t.$t("create")))])])])]),a("section",{staticClass:"page-content container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("collection-name")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionName,expression:"collectionName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter collection name",id:""},domProps:{value:t.collectionName},on:{input:function(e){e.target.composing||(t.collectionName=e.target.value)}}})])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v(t._s(t.$t("available-packages"))+" "),""===t.pkgid?a("span",{staticClass:"text-danger"},[t._v("No Available Packages")]):t._e()]),a("select2",{attrs:{id:"s2_demo2",options:t.selectPkgList},on:{select:function(e){return t.mySelectEvent(e)}},model:{value:t.pkgid,callback:function(e){t.pkgid=e},expression:"pkgid"}})],1)])])])])]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"text-right pb-3"},[a("button",{staticClass:"btn btn-primary btn-rounded btn-outline",attrs:{type:"button","data-toggle":"modal","data-target":t.tempPkgName!==t.pkgname?"#ClearTipsModal":"#addMaterial",disabled:""===t.collectionName||""===t.pkgid||void 0===t.pkgid},on:{click:function(e){return t.getPkgMaterial()}}},[a("i",{staticClass:"la la-plus"}),t._v(t._s(t.$t("material"))+" ")])]),a("div",{staticClass:"card"},[a("h5",{staticClass:"card-header"},[t._v(t._s(t.$t("sequence")))]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"collection-scroll custom-scroll",staticStyle:{"max-height":"380px"},attrs:{"data-scroll":"dark"}},[a("ul",{staticClass:"sequence"},[a("draggable",t._b({staticClass:"list-group",attrs:{tag:"ul"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.materialSequence,callback:function(e){t.materialSequence=e},expression:"materialSequence"}},"draggable",t.dragOptions,!1),t._l(t.materialSequence,(function(e,s){return a("li",{key:e.id,staticClass:"d-flex justify-content-between mb-2"},[a("div",{staticClass:"d-flex justify-content-start align-items-center"},[a("div",{staticClass:"btn btn-nostyle btn-move mr-3"},[a("i",{staticClass:"la la-ellipsis-v"}),a("i",{staticClass:"la la-ellipsis-v"})]),a("div",{staticClass:"align-self-center overlay-wrap mr-4 w-150 h-150 border"},[a("span",{staticClass:"overlay-icon"},["video"===e.type?a("i",{staticClass:"fas fa-video"}):a("i",{staticClass:"fas fa-book-open"})]),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://lms.mangosteems.com/cms/resdl/cover/"+e.resourceid,expression:"\n                              'https://lms.mangosteems.com/cms/resdl/cover/' +\n                              m.resourceid\n                            "}],staticClass:"overlay-img cus-img",attrs:{alt:"course image"}})]),a("div",[""!==e.level&&null!==e.level&&void 0!==e.level?a("span",{staticClass:"badge badge-pill badge-secondary mt-2"},[t._v(t._s(t.$t("level"))+" "+t._s(e.level))]):t._e(),""!==e.unit&&void 0!==e.unit?a("span",{staticClass:"badge badge-pill badge-secondary ml-2"},[t._v(t._s(t.$t("unit"))+" "+t._s(e.unit))]):t._e(),a("h4",{staticClass:"d-flex align-self-center mt-2"},[t._v(" "+t._s(e.resource_name)+" ")])])]),a("button",{staticClass:"btn btn-nostyle btn-remove",on:{click:function(e){return t.removeFromSequence(s)}}},[a("i",{staticClass:"zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"})])])})),0)],1)])])])]),a("div",{staticClass:"col-12 text-right"},[a("button",{staticClass:"btn btn-secondary btn-rounded btn-outline mr-2",attrs:{type:"button","data-toggle":"modal","data-target":"#ClearAndBackModal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-toggle":"modal","data-target":"#SaveChangeModal"}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"SaveChangeModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("save-change")))]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("p",[t._v(t._s(t.$t("would-you-like-to-save-your-collection"))+"?")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.setCollection()}}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"ClearAndBackModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("message")))]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("p",[t._v(" "+t._s(t.$t("want-to-clear-the-list-and-go-back-to-the-previous-page"))+"? ")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.$back}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"ClearTipsModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("message")))]),t._m(2)]),a("div",{staticClass:"modal-body"},[a("p",[t._v(" "+t._s(t.$t("change-packages-will-clear-the-current-collection-list"))+". ")]),a("p",[t._v(t._s(t.$t("would-you-like-to-save-your-changes"))+"?")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),a("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-target":"#addMaterial"},on:{click:function(e){return t.clearSequence()}}},[t._v(" "+t._s(t.$t("save"))+" ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"addMaterial",tabindex:"-1",role:"dialog","aria-hidden":"true","data-modal":"scroll"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"ModalTitle1"}},[a("i",{staticClass:"zmdi zmdi-plus zmdi-hc-fw"}),t._v(t._s(t.$t("material"))+" ")]),t._m(3)]),a("div",{staticClass:"modal-body"},[a("h6",{staticClass:"pb-2"},[a("span",{staticClass:"text-muted"},[t._v(t._s(t.$t("package")))]),a("strong",{staticClass:"ml-1"},[t._v(t._s(t.pkgname))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group form-rounded"},[a("select2",{attrs:{id:"s2_demo1",options:t.typeList},model:{value:t.seleceType,callback:function(e){t.seleceType=e},expression:"seleceType"}})],1)]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group form-rounded"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempSearch,expression:"tempSearch"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.tempSearch},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.searchRName=t.tempSearch},input:function(e){e.target.composing||(t.tempSearch=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){t.searchRName=t.tempSearch}}},[a("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"form-group form-rounded"},[a("select2",{attrs:{id:"s2_demo3",options:t.sortTypeList},model:{value:t.selectSortType,callback:function(e){t.selectSortType=e},expression:"selectSortType"}})],1)])])]),a("div",{staticClass:"modal-body",attrs:{"data-scroll":"dark"}},[a("div",{staticClass:"custom-control custom-checkbox form-check pb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAllPM,expression:"selectAllPM"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"selectPM"},domProps:{checked:Array.isArray(t.selectAllPM)?t._i(t.selectAllPM,null)>-1:t.selectAllPM},on:{click:t.selectAll,change:function(e){var a=t.selectAllPM,s=e.target,i=!!s.checked;if(Array.isArray(a)){var l=t._i(a,null);s.checked?l<0&&(t.selectAllPM=a.concat([null])):l>-1&&(t.selectAllPM=a.slice(0,l).concat(a.slice(l+1)))}else t.selectAllPM=i}}}),a("label",{staticClass:"custom-control-label text-primary",attrs:{for:"selectPM"}},[t._v(t._s(t.$t("select-all")))])]),t._l(t.sortMList,(function(e){return a("div",{key:e.resourceid,staticClass:"custom-control custom-checkbox form-check pb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempMaterial,expression:"tempMaterial"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:e.resourceid},domProps:{value:e,checked:Array.isArray(t.tempMaterial)?t._i(t.tempMaterial,e)>-1:t.tempMaterial},on:{change:function(a){var s=t.tempMaterial,i=a.target,l=!!i.checked;if(Array.isArray(s)){var o=e,c=t._i(s,o);i.checked?c<0&&(t.tempMaterial=s.concat([o])):c>-1&&(t.tempMaterial=s.slice(0,c).concat(s.slice(c+1)))}else t.tempMaterial=l}}}),a("label",{staticClass:"custom-control-label",attrs:{for:e.resourceid}},[""!==e.level?a("span",{staticClass:"badge badge-pill badge-secondary"},[t._v(t._s(t.$t("level"))+" "+t._s(e.level))]):t._e(),""!==e.unit?a("span",{staticClass:"badge badge-pill badge-secondary ml-2"},[t._v(t._s(t.$t("unit"))+" "+t._s(e.unit))]):t._e(),t._v(" "+t._s(e.resource_name))])])}))],2),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary btn-outline btn-rounded",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("close"))+" ")]),a("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.addtoSequence(),t.tempPkgName=t.pkgname}}},[a("i",{staticClass:"la la-plus"}),t._v(t._s(t.$t("material"))+" ")])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],!1,null,"3dec3316",null);e.default=m.exports},a209:function(t,e,a){"use strict";var s=a("daca");a.n(s).a},daca:function(t,e,a){}}]);
//# sourceMappingURL=chunk-870bfb66.5dbcfd71.js.map