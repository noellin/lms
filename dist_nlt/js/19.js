(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Collection.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Collection.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http_apis_Collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/apis/Collection */ \"./src/http/apis/Collection.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n// import CustomHeader from \"../components/CustomHeader\";\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: \"Collection\",\r\n  components: {\r\n    CustomHeader: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/CustomHeader.vue */ \"./src/components/CustomHeader.vue\")),\r\n  },\r\n  data() {\r\n    return {\r\n      collectionList: [],\r\n      collectionName: \"\",\r\n      tempCname: \"\",\r\n      tempCid: \"\",\r\n    };\r\n  },\r\n  created() {},\r\n  mounted() {\r\n    this.getCollection();\r\n  },\r\n  computed: {\r\n    userid() {\r\n      return this.$store.state.auth.userid;\r\n    },\r\n  },\r\n  methods: {\r\n    getCollection() {\r\n      console.log(this.userid);\r\n      _http_apis_Collection__WEBPACK_IMPORTED_MODULE_0__[\"ApiGetCollection\"].get(this.userid).then((response) => {\r\n        this.collectionList = response.record;\r\n      });\r\n    },\r\n    searchCollection() {\r\n      let keyword = this.collectionName;\r\n      if (this.collectionName === \"\") {\r\n        keyword = \"*\";\r\n      }\r\n      _http_apis_Collection__WEBPACK_IMPORTED_MODULE_0__[\"ApiSearchCollection\"].get(this.userid, keyword).then((response) => {\r\n        this.collectionList = response.record;\r\n      });\r\n    },\r\n    gotoCollectionDeatail(pid, cname, cid) {\r\n      this.$router.push({\r\n        path: `/collection/${pid}/${cname}/${cid}/`,\r\n      });\r\n    },\r\n    gotoCollectionCreate() {\r\n      this.$router.push({\r\n        path: `/collection/create`,\r\n      });\r\n    },\r\n    async deleteCollection(cid) {\r\n      const result = await _http_apis_Collection__WEBPACK_IMPORTED_MODULE_0__[\"ApiDeleteCollection\"].get(cid)\r\n        .then((resonse) => {\r\n          return resonse.status;\r\n        })\r\n        .catch((err) => {});\r\n      if (result) {\r\n        this.getCollection();\r\n      }\r\n    },\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/views/Collection.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"8d9ec918-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Collection.vue?vue&type=template&id=55026158&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8d9ec918-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Collection.vue?vue&type=template&id=55026158&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app3\" } }, [\n    _c(\n      \"div\",\n      { staticClass: \"content-wrapper\" },\n      [\n        _c(\"custom-header\"),\n        _c(\"div\", { staticClass: \"content\" }, [\n          _c(\"header\", { staticClass: \"page-header\" }, [\n            _c(\"div\", { staticClass: \"d-flex align-items-start\" }, [\n              _c(\"div\", { staticClass: \"mr-auto\" }, [\n                _c(\"h1\", [_vm._v(_vm._s(_vm.$t(\"my-library\")))])\n              ])\n            ])\n          ]),\n          _c(\"section\", { staticClass: \"page-content container-fluid\" }, [\n            _c(\"div\", { staticClass: \"d-flex justify-content-between mb-3\" }, [\n              _c(\"div\", { staticClass: \"form-group form-rounded mb-0\" }, [\n                _c(\"div\", { staticClass: \"input-group\" }, [\n                  _c(\"input\", {\n                    directives: [\n                      {\n                        name: \"model\",\n                        rawName: \"v-model\",\n                        value: _vm.collectionName,\n                        expression: \"collectionName\"\n                      }\n                    ],\n                    staticClass: \"form-control\",\n                    attrs: { type: \"text\", placeholder: \"Search...\" },\n                    domProps: { value: _vm.collectionName },\n                    on: {\n                      keyup: function($event) {\n                        if (\n                          !$event.type.indexOf(\"key\") &&\n                          _vm._k(\n                            $event.keyCode,\n                            \"enter\",\n                            13,\n                            $event.key,\n                            \"Enter\"\n                          )\n                        ) {\n                          return null\n                        }\n                        return _vm.searchCollection()\n                      },\n                      input: function($event) {\n                        if ($event.target.composing) {\n                          return\n                        }\n                        _vm.collectionName = $event.target.value\n                      }\n                    }\n                  }),\n                  _c(\"div\", { staticClass: \"input-group-append\" }, [\n                    _c(\n                      \"div\",\n                      {\n                        staticClass:\n                          \"btn btn-secondary btn-outline btn-icon btn-rounded\",\n                        attrs: { type: \"button\" },\n                        on: {\n                          click: function($event) {\n                            return _vm.searchCollection()\n                          }\n                        }\n                      },\n                      [\n                        _c(\"i\", {\n                          staticClass: \"zmdi zmdi-search text-secondary\"\n                        })\n                      ]\n                    )\n                  ])\n                ])\n              ]),\n              _c(\"div\", { staticClass: \"text-right\" }, [\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"btn btn-primary btn-outline btn-rounded\",\n                    on: {\n                      click: function($event) {\n                        return _vm.gotoCollectionCreate()\n                      }\n                    }\n                  },\n                  [\n                    _c(\"i\", { staticClass: \"la la-plus\" }),\n                    _vm._v(_vm._s(_vm.$t(\"create-new-my-library\")) + \" \")\n                  ]\n                )\n              ])\n            ]),\n            _c(\"div\", { staticClass: \"row\" }, [\n              _c(\"div\", { staticClass: \"col-12\" }, [\n                _c(\"div\", { staticClass: \"card\" }, [\n                  _c(\"div\", { staticClass: \"card-body\" }, [\n                    _c(\n                      \"table\",\n                      {\n                        staticClass: \"table table-striped\",\n                        staticStyle: { width: \"100%\" }\n                      },\n                      [\n                        _c(\"thead\", [\n                          _c(\"tr\", [\n                            _c(\"th\", { staticStyle: { width: \"30%\" } }, [\n                              _vm._v(_vm._s(_vm.$t(\"my-library-name\")))\n                            ]),\n                            _c(\"th\", { staticStyle: { width: \"30%\" } }, [\n                              _vm._v(_vm._s(_vm.$t(\"library\")))\n                            ]),\n                            _c(\"th\", { staticStyle: { width: \"30%\" } }, [\n                              _vm._v(\" \" + _vm._s(_vm.$t(\"classes\")) + \" \")\n                            ]),\n                            _c(\n                              \"th\",\n                              {\n                                staticStyle: {\n                                  width: \"10%\",\n                                  \"text-align\": \"center\"\n                                }\n                              },\n                              [_vm._v(\" \" + _vm._s(_vm.$t(\"action\")) + \" \")]\n                            )\n                          ])\n                        ]),\n                        _c(\n                          \"tbody\",\n                          _vm._l(_vm.collectionList, function(collection) {\n                            return _c(\"tr\", { key: collection.collectionid }, [\n                              _c(\n                                \"td\",\n                                {\n                                  staticClass: \"pointer\",\n                                  on: {\n                                    click: function($event) {\n                                      return _vm.gotoCollectionDeatail(\n                                        collection.pkgid,\n                                        collection.collection_name,\n                                        collection.collectionid\n                                      )\n                                    }\n                                  }\n                                },\n                                [\n                                  _c(\"a\", [\n                                    _vm._v(_vm._s(collection.collection_name))\n                                  ])\n                                ]\n                              ),\n                              _c(\"td\", [_vm._v(_vm._s(collection.pkg_name))]),\n                              _c(\n                                \"td\",\n                                _vm._l(collection.courseInfo, function(\n                                  course,\n                                  index\n                                ) {\n                                  return _c(\"span\", { key: course.courseid }, [\n                                    _vm._v(_vm._s(course.course_name) + \" \"),\n                                    index + 1 < collection.courseInfo.length\n                                      ? _c(\"span\", [_vm._v(\", \")])\n                                      : _vm._e()\n                                  ])\n                                }),\n                                0\n                              ),\n                              _c(\n                                \"td\",\n                                { staticStyle: { \"text-align\": \"center\" } },\n                                [\n                                  _c(\n                                    \"button\",\n                                    {\n                                      staticClass: \"btn btn-nostyle\",\n                                      attrs: {\n                                        \"data-toggle\": \"modal\",\n                                        \"data-target\": \"#deleteModal\"\n                                      },\n                                      on: {\n                                        click: function($event) {\n                                          _vm.tempCname =\n                                            collection.collection_name\n                                          _vm.tempCid = collection.collectionid\n                                        }\n                                      }\n                                    },\n                                    [_c(\"i\", { staticClass: \"la la-trash\" })]\n                                  )\n                                ]\n                              )\n                            ])\n                          }),\n                          0\n                        )\n                      ]\n                    )\n                  ])\n                ])\n              ])\n            ])\n          ])\n        ])\n      ],\n      1\n    ),\n    _c(\n      \"div\",\n      {\n        staticClass: \"modal fade\",\n        attrs: {\n          id: \"deleteModal\",\n          tabindex: \"-1\",\n          role: \"dialog\",\n          \"aria-hidden\": \"true\"\n        }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticClass: \"modal-dialog modal-dialog-centered\",\n            attrs: { role: \"document\" }\n          },\n          [\n            _c(\"div\", { staticClass: \"modal-content\" }, [\n              _c(\"div\", { staticClass: \"modal-header\" }, [\n                _c(\"h5\", { staticClass: \"modal-title\" }, [\n                  _vm._v(_vm._s(_vm.$t(\"delete\")))\n                ]),\n                _vm._m(0)\n              ]),\n              _c(\"div\", { staticClass: \"modal-body\" }, [\n                _c(\"p\", [\n                  _vm._v(\n                    \" \" + _vm._s(_vm.$t(\"confirm-to-delete-library\")) + \"：\"\n                  ),\n                  _c(\"strong\", [_vm._v(_vm._s(_vm.tempCname))]),\n                  _vm._v(\"? \")\n                ])\n              ]),\n              _c(\"div\", { staticClass: \"modal-footer\" }, [\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"btn btn-secondary btn-rounded btn-outline\",\n                    attrs: { type: \"button\", \"data-dismiss\": \"modal\" }\n                  },\n                  [_vm._v(\" \" + _vm._s(_vm.$t(\"cancel\")) + \" \")]\n                ),\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"btn btn-primary btn-rounded\",\n                    attrs: { type: \"button\", \"data-dismiss\": \"modal\" },\n                    on: {\n                      click: function($event) {\n                        return _vm.deleteCollection(_vm.tempCid)\n                      }\n                    }\n                  },\n                  [_vm._v(\" \" + _vm._s(_vm.$t(\"confirm\")) + \" \")]\n                )\n              ])\n            ])\n          ]\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"button\",\n      {\n        staticClass: \"close\",\n        attrs: {\n          type: \"button\",\n          \"data-dismiss\": \"modal\",\n          \"aria-label\": \"Close\"\n        }\n      },\n      [\n        _c(\"span\", {\n          staticClass: \"zmdi zmdi-close\",\n          attrs: { \"aria-hidden\": \"true\" }\n        })\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Collection.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%228d9ec918-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Collection.vue?vue&type=style&index=0&id=55026158&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Collection.vue?vue&type=style&index=0&id=55026158&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/views/Collection.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/http/apis/Collection.js":
/*!*************************************!*\
  !*** ./src/http/apis/Collection.js ***!
  \*************************************/
/*! exports provided: ApiGetCollection, ApiSearchCollection, ApiSearchCollectionResource, ApiGetCollectionContent, ApiGetPkgList, ApiSetCollection, ApiGetPkgMaterial, ApiDeleteResource, ApiDeleteCollection, ApiGetCollectionInfo, ApiGetAvailableCourse, ApiGetCollectionList, ApiGetResource, ApiAddResource, ApideleteResource, ApiUpdateCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetCollection\", function() { return ApiGetCollection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiSearchCollection\", function() { return ApiSearchCollection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiSearchCollectionResource\", function() { return ApiSearchCollectionResource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetCollectionContent\", function() { return ApiGetCollectionContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetPkgList\", function() { return ApiGetPkgList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiSetCollection\", function() { return ApiSetCollection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetPkgMaterial\", function() { return ApiGetPkgMaterial; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiDeleteResource\", function() { return ApiDeleteResource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiDeleteCollection\", function() { return ApiDeleteCollection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetCollectionInfo\", function() { return ApiGetCollectionInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetAvailableCourse\", function() { return ApiGetAvailableCourse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetCollectionList\", function() { return ApiGetCollectionList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetResource\", function() { return ApiGetResource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiAddResource\", function() { return ApiAddResource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApideleteResource\", function() { return ApideleteResource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiUpdateCollection\", function() { return ApiUpdateCollection; });\n/* harmony import */ var _https_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../https.js */ \"./src/http/https.js\");\n\r\n\r\n\r\n//CourseList相關 api\r\n\r\nconst ApiGetCollection = {\r\n    get: (userid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/byteacher/${userid}`);\r\n    },\r\n};\r\nconst ApiSearchCollection = {\r\n    get: (userid, keyword) => {\r\n\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/search/${userid}/${keyword}`);\r\n    },\r\n};\r\nconst ApiSearchCollectionResource = {\r\n    get: (userid, cid, keyword, type) => {\r\n        console.log(`/collection/searchresource/${userid}/${cid}/${keyword}/${type}`);\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/searchresource/${userid}/${cid}/${keyword}/${type}`);\r\n    },\r\n};\r\nconst ApiGetCollectionContent = {\r\n    get: (userid, cid) => {\r\n        console.log('get col content');\r\n        console.log(userid);\r\n        console.log(cid);\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/content/${userid}/${cid}`);\r\n    },\r\n};\r\nconst ApiGetPkgList = {\r\n    get: (userid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/listpkgbyteacher/${userid}`);\r\n    }\r\n}\r\n\r\nconst ApiSetCollection = {\r\n    post: (paramObj) => {\r\n        console.log('save collection');\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"post\"])(`/collection/create`, paramObj);\r\n    }\r\n}\r\n\r\nconst ApiGetPkgMaterial = {\r\n    get: (pkgid) => {\r\n        console.log(pkgid);\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/pkgresource/${pkgid}`);\r\n    }\r\n}\r\n\r\nconst ApiDeleteResource = {\r\n    get: (uid, cid, rid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/deleteresource/${uid}/${cid}/${rid}`);\r\n    }\r\n}\r\n\r\nconst ApiDeleteCollection = {\r\n    get: (cid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/delete/${cid}`);\r\n    }\r\n}\r\n\r\nconst ApiGetCollectionInfo = {\r\n    get: (cid, pid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/pkgmapcurs/${cid}/${pid}`)\r\n    }\r\n}\r\n\r\nconst ApiGetAvailableCourse = {\r\n    get: (uid, cid, rid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/availablecourse/${uid}/${cid}/${rid}`)\r\n    }\r\n}\r\n\r\n//course material use\r\nconst ApiGetCollectionList = {\r\n    get: (uid, rid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/exist/${uid}/${rid}`)\r\n    }\r\n};\r\n\r\nconst ApiGetResource = {\r\n    get: (uid, colid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/getresource/${uid}/${colid}`)\r\n    }\r\n};\r\n\r\nconst ApiAddResource = {\r\n    get: (colid, rid) => {\r\n        console.log(`/collection/addresource/${colid}/${rid}`);\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/addresource/${colid}/${rid}`)\r\n    }\r\n};\r\n\r\nconst ApideleteResource = {\r\n    get: (uid, colid, rid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/collection/deleteresource/${uid}/${colid}/${rid}`)\r\n    }\r\n};\r\n\r\nconst ApiUpdateCollection = {\r\n    put: (colid, paramObj) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(`/collection/update/${colid}`, paramObj)\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/http/apis/Collection.js?");

/***/ }),

/***/ "./src/views/Collection.vue":
/*!**********************************!*\
  !*** ./src/views/Collection.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Collection_vue_vue_type_template_id_55026158_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection.vue?vue&type=template&id=55026158&scoped=true& */ \"./src/views/Collection.vue?vue&type=template&id=55026158&scoped=true&\");\n/* harmony import */ var _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.vue?vue&type=script&lang=js& */ \"./src/views/Collection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Collection_vue_vue_type_style_index_0_id_55026158_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collection.vue?vue&type=style&index=0&id=55026158&scoped=true&lang=scss& */ \"./src/views/Collection.vue?vue&type=style&index=0&id=55026158&scoped=true&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Collection_vue_vue_type_template_id_55026158_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Collection_vue_vue_type_template_id_55026158_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"55026158\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Collection.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Collection.vue?");

/***/ }),

/***/ "./src/views/Collection.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/Collection.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Collection.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Collection.vue?");

/***/ }),

/***/ "./src/views/Collection.vue?vue&type=style&index=0&id=55026158&scoped=true&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./src/views/Collection.vue?vue&type=style&index=0&id=55026158&scoped=true&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_55026158_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=55026158&scoped=true&lang=scss& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Collection.vue?vue&type=style&index=0&id=55026158&scoped=true&lang=scss&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_55026158_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_55026158_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_55026158_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_55026158_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_55026158_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/views/Collection.vue?");

/***/ }),

/***/ "./src/views/Collection.vue?vue&type=template&id=55026158&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/views/Collection.vue?vue&type=template&id=55026158&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_8d9ec918_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_55026158_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"8d9ec918-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=template&id=55026158&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"8d9ec918-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Collection.vue?vue&type=template&id=55026158&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_8d9ec918_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_55026158_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_8d9ec918_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_55026158_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Collection.vue?");

/***/ })

}]);