(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9c505784"],{"13a0":function(t,e,o){"use strict";o.r(e);var n=o("2755"),c={name:"Collection",components:{CustomHeader:()=>Promise.resolve().then(o.bind(null,"339c"))},data:()=>({collectionList:[],collectionName:"",tempCname:"",tempCid:""}),created(){},mounted(){this.getCollection()},computed:{userid(){return this.$store.state.auth.userid}},methods:{getCollection(){console.log(this.userid),n.d.get(this.userid).then(t=>{this.collectionList=t.record})},searchCollection(){let t=this.collectionName;""===this.collectionName&&(t="*"),n.j.get(this.userid,t).then(t=>{this.collectionList=t.record})},gotoCollectionDeatail(t,e,o){this.$router.push({path:`/collection/${t}/${e}/${o}/`})},gotoCollectionCreate(){this.$router.push({path:"/collection/create"})},async deleteCollection(t){await n.b.get(t).then(t=>t.status).catch(t=>{})&&this.getCollection()}}},a=(o("1a99"),o("2877")),i=Object(a.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app3"}},[o("div",{staticClass:"content-wrapper"},[o("custom-header"),o("div",{staticClass:"content"},[o("header",{staticClass:"page-header"},[o("div",{staticClass:"d-flex align-items-start"},[o("div",{staticClass:"mr-auto"},[o("h1",[t._v(t._s(t.$t("my-library")))])])])]),o("section",{staticClass:"page-content container-fluid"},[o("div",{staticClass:"d-flex justify-content-between mb-3"},[o("div",{staticClass:"form-group form-rounded mb-0"},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionName,expression:"collectionName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.collectionName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchCollection()},input:function(e){e.target.composing||(t.collectionName=e.target.value)}}}),o("div",{staticClass:"input-group-append"},[o("div",{staticClass:"btn btn-secondary btn-outline btn-icon btn-rounded",attrs:{type:"button"},on:{click:function(e){return t.searchCollection()}}},[o("i",{staticClass:"zmdi zmdi-search text-secondary"})])])])]),o("div",{staticClass:"text-right"},[o("button",{staticClass:"btn btn-primary btn-outline btn-rounded",on:{click:function(e){return t.gotoCollectionCreate()}}},[o("i",{staticClass:"la la-plus"}),t._v(t._s(t.$t("create-new-my-library"))+" ")])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("table",{staticClass:"table table-striped",staticStyle:{width:"100%"}},[o("thead",[o("tr",[o("th",{staticStyle:{width:"30%"}},[t._v(t._s(t.$t("my-library-name")))]),o("th",{staticStyle:{width:"30%"}},[t._v(t._s(t.$t("library")))]),o("th",{staticStyle:{width:"30%"}},[t._v(" "+t._s(t.$t("classes"))+" ")]),o("th",{staticStyle:{width:"10%","text-align":"center"}},[t._v(" "+t._s(t.$t("action"))+" ")])])]),o("tbody",t._l(t.collectionList,(function(e){return o("tr",{key:e.collectionid},[o("td",{staticClass:"pointer",on:{click:function(o){return t.gotoCollectionDeatail(e.pkgid,e.collection_name,e.collectionid)}}},[o("a",[t._v(t._s(e.collection_name))])]),o("td",[t._v(t._s(e.pkg_name))]),o("td",t._l(e.courseInfo,(function(n,c){return o("span",{key:n.courseid},[t._v(t._s(n.course_name)+" "),c+1<e.courseInfo.length?o("span",[t._v(", ")]):t._e()])})),0),o("td",{staticStyle:{"text-align":"center"}},[o("button",{staticClass:"btn btn-nostyle",attrs:{"data-toggle":"modal","data-target":"#deleteModal"},on:{click:function(o){t.tempCname=e.collection_name,t.tempCid=e.collectionid}}},[o("i",{staticClass:"la la-trash"})])])])})),0)])])])])])])])],1),o("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("delete")))]),t._m(0)]),o("div",{staticClass:"modal-body"},[o("p",[t._v(" "+t._s(t.$t("confirm-to-delete-collection"))+"："),o("strong",[t._v(t._s(t.tempCname))]),t._v("? ")])]),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary btn-rounded btn-outline",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" "+t._s(t.$t("cancel"))+" ")]),o("button",{staticClass:"btn btn-primary btn-rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.deleteCollection(t.tempCid)}}},[t._v(" "+t._s(t.$t("confirm"))+" ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{staticClass:"zmdi zmdi-close",attrs:{"aria-hidden":"true"}})])}],!1,null,"db757ada",null);e.default=i.exports},"1a99":function(t,e,o){"use strict";var n=o("a621");o.n(n).a},2755:function(t,e,o){"use strict";o.d(e,"d",(function(){return c})),o.d(e,"j",(function(){return a})),o.d(e,"k",(function(){return i})),o.d(e,"e",(function(){return l})),o.d(e,"h",(function(){return s})),o.d(e,"l",(function(){return r})),o.d(e,"i",(function(){return d})),o.d(e,"b",(function(){return u})),o.d(e,"f",(function(){return b})),o.d(e,"c",(function(){return m})),o.d(e,"g",(function(){return p})),o.d(e,"a",(function(){return h})),o.d(e,"m",(function(){return C}));var n=o("a95a");const c={get:t=>Object(n.b)("/collection/byteacher/"+t)},a={get:(t,e)=>Object(n.b)(`/collection/search/${t}/${e}`)},i={get:(t,e,o,c)=>(console.log(`/collection/searchresource/${t}/${e}/${o}/${c}`),Object(n.b)(`/collection/searchresource/${t}/${e}/${o}/${c}`))},l={get:(t,e)=>(console.log("get col content"),console.log(t),console.log(e),Object(n.b)(`/collection/content/${t}/${e}`))},s={get:t=>Object(n.b)("/collection/listpkgbyteacher/"+t)},r={post:t=>(console.log("save collection"),Object(n.d)("/collection/create",t))},d={get:t=>(console.log(t),Object(n.b)("/collection/pkgresource/"+t))},u={get:t=>Object(n.b)("/collection/delete/"+t)},b={get:(t,e)=>Object(n.b)(`/collection/pkgmapcurs/${t}/${e}`)},m={get:(t,e,o)=>Object(n.b)(`/collection/availablecourse/${t}/${e}/${o}`)},p={get:(t,e)=>Object(n.b)(`/collection/exist/${t}/${e}`)},h={get:(t,e)=>(console.log(`/collection/addresource/${t}/${e}`),Object(n.b)(`/collection/addresource/${t}/${e}`))},C={put:(t,e)=>Object(n.e)("/collection/update/"+t,e)}},a621:function(t,e,o){}}]);
//# sourceMappingURL=chunk-9c505784.3d897470.js.map