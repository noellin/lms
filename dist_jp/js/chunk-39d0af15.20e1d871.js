(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39d0af15"],{"0775":function(t,e,o){"use strict";var c=o("784e"),n=o.n(c);n.a},"13a0":function(t,e,o){"use strict";o.r(e);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app3"}},[o("div",{staticClass:"content-wrapper"},[o("custom-header"),o("div",{staticClass:"content"},[o("header",{staticClass:"page-header"},[o("div",{staticClass:"d-flex align-items-start"},[o("div",{staticClass:"mr-auto"},[o("h1",[t._v(t._s(t.$t("collection")))])])])]),o("section",{staticClass:"page-content container-fluid"},[o("div",{staticClass:"d-flex justify-content-between mb-3"},[o("div",{staticClass:"form-group form-rounded mb-0"},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionName,expression:"collectionName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.collectionName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchCollection()},input:function(e){e.target.composing||(t.collectionName=e.target.value)}}}),o("div",{staticClass:"input-group-append"},[o("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchCollection()}}},[o("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])]),o("div",{staticClass:"text-right"},[o("button",{staticClass:"btn btn-primary btn-outline btn-rounded",on:{click:function(e){return t.gotoCollectionCreate()}}},[o("i",{staticClass:"la la-plus"}),t._v(t._s(t.$t("create-new-collection"))+" ")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("table",{staticClass:"table table-striped",staticStyle:{width:"100%"}},[o("thead",[o("tr",[o("th",{staticStyle:{width:"30%"}},[t._v(t._s(t.$t("collection-name")))]),o("th",{staticStyle:{width:"30%"}},[t._v(t._s(t.$t("package")))]),o("th",{staticStyle:{width:"30%"}},[t._v(" "+t._s(t.$t("applicable-course"))+" ")]),o("th",{staticStyle:{width:"10%","text-align":"center"}},[t._v(" "+t._s(t.$t("action"))+" ")])])]),o("tbody",t._l(t.collectionList,(function(e){return o("tr",{key:e.collectionid},[o("td",{staticClass:"pointer",on:{click:function(o){return t.gotoCollectionDeatail(e.pkgid,e.collection_name,e.collectionid)}}},[o("a",[t._v(t._s(e.collection_name))])]),o("td",[t._v(t._s(e.pkg_name))]),o("td",t._l(e.courseInfo,(function(c,n){return o("span",{key:c.courseid},[t._v(t._s(c.course_name)+" "),n+1<e.courseInfo.length?o("span",[t._v(", ")]):t._e()])})),0),o("td",{staticStyle:{"text-align":"center"}},[o("button",{staticClass:"btn btn-nostyle",attrs:{"data-toggle":"modal","data-target":"#deleteModal"},on:{click:function(o){t.tempCname=e.collection_name,t.tempCid=e.collectionid}}},[o("i",{staticClass:"la la-trash"})])])])})),0)])])])])])])])],1),o("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("delete")))]),t._m(0)]),o("div",{staticClass:"modal-body"},[o("p",[t._v(" "+t._s(t.$t("confirm-to-delete-collection"))+"："),o("strong",[t._v(t._s(t.tempCname))]),t._v("? ")])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),o("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.deleteCollection(t.tempCid)}}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],i=o("339c"),a=o("2755"),s={name:"Collection",components:{CustomHeader:i["a"]},data(){return{collectionList:[],collectionName:"",tempCname:"",tempCid:""}},created(){},mounted(){this.getCollection()},computed:{userid(){return this.$store.state.auth.userid}},methods:{getCollection(){console.log(this.userid),a["d"].get(this.userid).then(t=>{this.collectionList=t.record})},searchCollection(){let t=this.collectionName;""===this.collectionName&&(t="*"),a["j"].get(this.userid,t).then(t=>{this.collectionList=t.record})},gotoCollectionDeatail(t,e,o){this.$router.push({path:`/collection/${t}/${e}/${o}/`})},gotoCollectionCreate(){this.$router.push({path:"/collection/create"})},async deleteCollection(t){const e=await a["b"].get(t).then(t=>t.status).catch(t=>{});e&&this.getCollection()}}},l=s,r=(o("0775"),o("2877")),d=Object(r["a"])(l,c,n,!1,null,"30aeb82e",null);e["default"]=d.exports},2755:function(t,e,o){"use strict";o.d(e,"d",(function(){return n})),o.d(e,"j",(function(){return i})),o.d(e,"k",(function(){return a})),o.d(e,"e",(function(){return s})),o.d(e,"h",(function(){return l})),o.d(e,"l",(function(){return r})),o.d(e,"i",(function(){return d})),o.d(e,"b",(function(){return u})),o.d(e,"f",(function(){return b})),o.d(e,"c",(function(){return m})),o.d(e,"g",(function(){return p})),o.d(e,"a",(function(){return C})),o.d(e,"m",(function(){return h}));var c=o("a95a");const n={get:t=>Object(c["b"])("/collection/byteacher/"+t)},i={get:(t,e)=>Object(c["b"])(`/collection/search/${t}/${e}`)},a={get:(t,e,o,n)=>Object(c["b"])(`/collection/searchresource/${t}/${e}/${o}/${n}`)},s={get:(t,e)=>Object(c["b"])(`/collection/content/${t}/${e}`)},l={get:t=>Object(c["b"])("/collection/listpkgbyteacher/"+t)},r={post:t=>Object(c["c"])("/collection/create",t)},d={get:t=>(console.log(t),Object(c["b"])("/collection/pkgresource/"+t))},u={get:t=>Object(c["b"])("/collection/delete/"+t)},b={get:(t,e)=>Object(c["b"])(`/collection/pkgmapcurs/${t}/${e}`)},m={get:(t,e,o)=>Object(c["b"])(`/collection/availablecourse/${t}/${e}/${o}`)},p={get:(t,e)=>Object(c["b"])(`/collection/exist/${t}/${e}`)},C={get:(t,e)=>(console.log(`/collection/addresource/${t}/${e}`),Object(c["b"])(`/collection/addresource/${t}/${e}`))},h={put:(t,e)=>Object(c["d"])("/collection/update/"+t,e)}},"784e":function(t,e,o){}}]);
//# sourceMappingURL=chunk-39d0af15.20e1d871.js.map