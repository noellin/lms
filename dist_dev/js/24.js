(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/SpeakingQuiz.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SpeakingQuiz.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http_apis_Quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/apis/Quiz */ \"./src/http/apis/Quiz.js\");\n/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/sortBy */ \"./node_modules/lodash/sortBy.js\");\n/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n// import CourseHeader from \"../components/CourseHeader\";\r\n\r\n// import _ from \"lodash\";\r\n\r\n// import Menu\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: \"SpeakingQuiz\",\r\n  components: {\r\n    CourseHeader: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/components/CourseHeader.vue */ \"./src/components/CourseHeader.vue\")),\r\n  },\r\n  data() {\r\n    return {\r\n      quizShow: \"home\",\r\n      quizList: [],\r\n      rid: this.$route.params.rid,\r\n      mid: this.$route.params.mid,\r\n      SList: [],\r\n      tempSname: \"\",\r\n      tempStime: new Date(),\r\n      tempQid: \"\",\r\n      courseid: this.$route.params.courseid,\r\n    };\r\n  },\r\n  mounted() {\r\n    this.getQuitList();\r\n  },\r\n  watch: {\r\n    tempAIDList() {\r\n      this.getQuitList();\r\n    },\r\n  },\r\n  computed: {\r\n    sortSlist() {\r\n      let temp = lodash_sortBy__WEBPACK_IMPORTED_MODULE_1___default()(this.SList, function (obj) {\r\n        return parseInt(obj.seq, 10);\r\n      });\r\n      return temp;\r\n    },\r\n    tempAIDList() {\r\n      if (\r\n        this.$store.state.courseInfo.tempAIDList[this.courseid] === undefined\r\n      ) {\r\n        return [];\r\n      }\r\n      return this.$store.state.courseInfo.tempAIDList[this.courseid];\r\n    },\r\n    tempAList() {\r\n      if (this.$store.state.courseInfo.tempAList[this.courseid] === undefined) {\r\n        return [];\r\n      }\r\n      return this.$store.state.courseInfo.tempAList[this.courseid];\r\n    },\r\n  },\r\n  methods: {\r\n    async getQuitList() {\r\n      let getQstatus = await _http_apis_Quiz__WEBPACK_IMPORTED_MODULE_0__[\"ApiGetQuizList\"].get(\r\n        this.rid,\r\n        this.mid,\r\n        this.$route.params.note\r\n      )\r\n        .then((response) => {\r\n          this.quizList = response.record;\r\n          if (response.status === \"success\") {\r\n            return true;\r\n          }\r\n        })\r\n        .catch((err) => {});\r\n      if (getQstatus) {\r\n        this.quizList.forEach((element) => {\r\n          if (this.tempAIDList.indexOf(element.quizid) !== -1) {\r\n            this.$set(element, \"added\", true);\r\n          } else {\r\n            this.$set(element, \"added\", false);\r\n          }\r\n          this.$set(element, \"resource_name\", this.$route.params.rname);\r\n          this.$set(element, \"material_name\", this.$route.params.mname);\r\n        });\r\n      }\r\n    },\r\n    addtoAssignment(q) {\r\n      q.resourceid = this.rid;\r\n      this.$store.dispatch(\"courseInfo/setAssignment\", {\r\n        assignment: q,\r\n        id: q.quizid,\r\n      });\r\n    },\r\n    removeAssignment(qid) {\r\n      this.$store.dispatch(\"courseInfo/removeAssignment\", {\r\n        id: qid,\r\n      });\r\n    },\r\n    getSList(qid) {\r\n      console.log(qid);\r\n      _http_apis_Quiz__WEBPACK_IMPORTED_MODULE_0__[\"ApiGetSList\"].get(qid)\r\n        .then((response) => {\r\n          this.SList = response.record;\r\n        })\r\n        .catch((err) => {});\r\n    },\r\n    gotoQuitCreate() {\r\n      let url = `/quizcreate/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.$route.params.courseid}/${this.$route.params.note}/${this.$route.params.rid}/${this.$route.params.mid}`;\r\n      url = url.replaceAll(\"?\", \"%3F\");\r\n\r\n      this.$router.push({\r\n        path: url,\r\n      });\r\n    },\r\n    saveQuiz() {\r\n      this.quizShow = \"home\";\r\n    },\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/views/SpeakingQuiz.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"05bd015c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/SpeakingQuiz.vue?vue&type=template&id=cfabb802&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"05bd015c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SpeakingQuiz.vue?vue&type=template&id=cfabb802&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app2\" } }, [\n    _c(\"div\", { staticClass: \"main-content\" }, [\n      _c(\"div\", { staticClass: \"content page-aside-left\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"main-content\" },\n          [\n            _c(\"course-header\"),\n            _c(\"section\", { staticClass: \"page-content container-fluid\" }, [\n              _c(\"div\", { staticClass: \"row pb-3\" }, [\n                _c(\"div\", { staticClass: \"col-12 text-right\" }, [\n                  _vm.quizShow === \"home\"\n                    ? _c(\n                        \"a\",\n                        {\n                          staticClass:\n                            \"btn btn-primary btn-outline btn-rounded\",\n                          on: {\n                            click: function($event) {\n                              return _vm.gotoQuitCreate()\n                            }\n                          }\n                        },\n                        [\n                          _c(\"i\", { staticClass: \"zmdi zmdi-plus zmdi-hc-fw\" }),\n                          _vm._v(_vm._s(_vm.$t(\"create-a-new-quiz\")) + \" \")\n                        ]\n                      )\n                    : _vm._e()\n                ])\n              ]),\n              _vm.quizShow === \"home\"\n                ? _c(\"div\", { staticClass: \"row\" }, [\n                    _c(\"div\", { staticClass: \"col-12\" }, [\n                      _c(\"div\", { staticClass: \"card\" }, [\n                        _c(\"div\", { staticClass: \"card-body\" }, [\n                          _c(\"div\", { staticClass: \"table-responsive\" }, [\n                            _c(\n                              \"table\",\n                              { staticClass: \"table table-striped\" },\n                              [\n                                _c(\"thead\", [\n                                  _c(\"tr\", [\n                                    _c(\"th\", [\n                                      _vm._v(_vm._s(_vm.$t(\"creation-date\")))\n                                    ]),\n                                    _c(\"th\", [\n                                      _vm._v(_vm._s(_vm.$t(\"author\")))\n                                    ]),\n                                    _c(\"th\", [\n                                      _vm._v(\n                                        _vm._s(_vm.$t(\"number-of-questions\"))\n                                      )\n                                    ]),\n                                    _c(\"th\", [\n                                      _vm._v(_vm._s(_vm.$t(\"preview\")))\n                                    ]),\n                                    _c(\"th\", [\n                                      _vm._v(\n                                        _vm._s(_vm.$t(\"add-to-assignment\"))\n                                      )\n                                    ])\n                                  ])\n                                ]),\n                                _c(\n                                  \"tbody\",\n                                  [\n                                    _vm._l(_vm.quizList, function(q) {\n                                      return _c(\"tr\", { key: q.quizid }, [\n                                        _c(\"td\", [\n                                          _vm._v(\n                                            _vm._s(\n                                              _vm._f(\"dateConversion\")(\n                                                q.create_date\n                                              )\n                                            )\n                                          )\n                                        ]),\n                                        _c(\"td\", [_vm._v(_vm._s(q.username))]),\n                                        _c(\"td\", [_vm._v(_vm._s(q.count))]),\n                                        _c(\"td\", [\n                                          _c(\n                                            \"button\",\n                                            {\n                                              staticClass: \"btn btn-nostyle\",\n                                              attrs: {\n                                                type: \"\",\n                                                \"data-toggle\": \"modal\",\n                                                \"data-target\":\n                                                  \"#SpeakingQuizPreviewModal\"\n                                              },\n                                              on: {\n                                                click: function($event) {\n                                                  _vm.getSList(q.quizid)\n                                                  _vm.tempSname = q.username\n                                                  _vm.tempStime = q.create_date\n                                                }\n                                              }\n                                            },\n                                            [\n                                              _c(\"i\", {\n                                                staticClass:\n                                                  \"la la-eye display-6\"\n                                              })\n                                            ]\n                                          )\n                                        ]),\n                                        _c(\"td\", [\n                                          !q.added\n                                            ? _c(\n                                                \"button\",\n                                                {\n                                                  staticClass:\n                                                    \"btn btn-primary btn-sm btn-rounded\",\n                                                  attrs: {\n                                                    type: \"\",\n                                                    \"data-toggle\": \"modal\",\n                                                    \"data-target\": \"#AddModal\",\n                                                    \"data-dismiss\": \"modal\"\n                                                  },\n                                                  on: {\n                                                    click: function($event) {\n                                                      return _vm.addtoAssignment(\n                                                        q\n                                                      )\n                                                    }\n                                                  }\n                                                },\n                                                [\n                                                  _vm._v(\n                                                    \" \" +\n                                                      _vm._s(_vm.$t(\"add\")) +\n                                                      \" \"\n                                                  )\n                                                ]\n                                              )\n                                            : _c(\n                                                \"button\",\n                                                {\n                                                  staticClass:\n                                                    \"btn btn-secondary btn-sm btn-rounded\",\n                                                  attrs: {\n                                                    type: \"\",\n                                                    \"data-toggle\": \"modal\",\n                                                    \"data-target\": \"#AddedModal\"\n                                                  },\n                                                  on: {\n                                                    click: function($event) {\n                                                      _vm.tempQid = q.quizid\n                                                    }\n                                                  }\n                                                },\n                                                [\n                                                  _vm._v(\n                                                    \" \" +\n                                                      _vm._s(_vm.$t(\"added\")) +\n                                                      \" \"\n                                                  )\n                                                ]\n                                              )\n                                        ])\n                                      ])\n                                    }),\n                                    _vm.quizList.length === 0\n                                      ? _c(\"tr\", [\n                                          _c(\n                                            \"td\",\n                                            {\n                                              staticClass: \"text-center\",\n                                              attrs: { colspan: \"5\" }\n                                            },\n                                            [\n                                              _c(\"h5\", [\n                                                _vm._v(\n                                                  \" \" +\n                                                    _vm._s(\n                                                      _vm.$t(\n                                                        \"no-quiz-found-please-create-a-quiz\"\n                                                      )\n                                                    ) +\n                                                    \" \"\n                                                )\n                                              ])\n                                            ]\n                                          )\n                                        ])\n                                      : _vm._e()\n                                  ],\n                                  2\n                                )\n                              ]\n                            )\n                          ])\n                        ])\n                      ])\n                    ])\n                  ])\n                : _vm._e()\n            ])\n          ],\n          1\n        )\n      ])\n    ]),\n    _c(\n      \"div\",\n      {\n        staticClass: \"modal fade\",\n        attrs: {\n          id: \"SpeakingQuizPreviewModal\",\n          tabindex: \"-1\",\n          role: \"dialog\",\n          \"aria-hidden\": \"true\",\n          \"data-modal\": \"scroll\"\n        }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticClass: \"modal-dialog modal-dialog-centered\",\n            attrs: { role: \"document\" }\n          },\n          [\n            _c(\"div\", { staticClass: \"modal-content\" }, [\n              _c(\"div\", { staticClass: \"modal-header\" }, [\n                _c(\"h5\", { staticClass: \"modal-title\" }, [\n                  _vm._v(_vm._s(_vm.tempSname))\n                ]),\n                _c(\"span\", { staticClass: \"ml-3 text-muted\" }, [\n                  _c(\"small\", [\n                    _vm._v(_vm._s(_vm._f(\"dateConversion\")(_vm.tempStime)))\n                  ])\n                ]),\n                _vm._m(0)\n              ]),\n              _c(\"div\", { staticClass: \"modal-body\" }, [\n                _c(\n                  \"ul\",\n                  { staticClass: \"quiz-list\" },\n                  _vm._l(_vm.sortSlist, function(s) {\n                    return _c(\"li\", { key: s.sentenceID }, [\n                      _c(\"strong\", { staticClass: \"text-primary mr-2\" }, [\n                        _vm._v(\"Q\" + _vm._s(s.seq) + \".\")\n                      ]),\n                      _vm._v(_vm._s(s.content) + \" \")\n                    ])\n                  }),\n                  0\n                )\n              ]),\n              _c(\"div\", { staticClass: \"modal-footer\" }, [\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"btn btn-primary btn-outline\",\n                    attrs: { type: \"button\", \"data-dismiss\": \"modal\" }\n                  },\n                  [_vm._v(\" \" + _vm._s(_vm.$t(\"close\")) + \" \")]\n                )\n              ])\n            ])\n          ]\n        )\n      ]\n    ),\n    _c(\n      \"div\",\n      {\n        staticClass: \"modal modal-top-frame fade\",\n        attrs: {\n          id: \"AddModal\",\n          tabindex: \"-1\",\n          role: \"dialog\",\n          \"aria-hidden\": \"true\"\n        }\n      },\n      [\n        _c(\n          \"div\",\n          { staticClass: \"modal-dialog\", attrs: { role: \"document\" } },\n          [\n            _c(\n              \"div\",\n              {\n                staticClass: \"alert alert-success alert-dismissible fade show\",\n                attrs: { role: \"alert\" }\n              },\n              [\n                _vm._v(\n                  \" \" + _vm._s(_vm.$t(\"adding-to-the-assignment-list\")) + \" \"\n                ),\n                _vm._m(1)\n              ]\n            )\n          ]\n        )\n      ]\n    ),\n    _c(\n      \"div\",\n      {\n        staticClass: \"modal fade\",\n        attrs: {\n          id: \"AddedModal\",\n          tabindex: \"-1\",\n          role: \"dialog\",\n          \"aria-hidden\": \"true\"\n        }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticClass: \"modal-dialog modal-dialog-centered\",\n            attrs: { role: \"document\" }\n          },\n          [\n            _c(\"div\", { staticClass: \"modal-content\" }, [\n              _c(\"div\", { staticClass: \"modal-header\" }, [\n                _c(\"h5\", { staticClass: \"modal-title\" }, [\n                  _vm._v(_vm._s(_vm.$t(\"remove\")))\n                ]),\n                _vm._m(2)\n              ]),\n              _c(\"div\", { staticClass: \"modal-body\" }, [\n                _c(\"p\", [\n                  _vm._v(\n                    _vm._s(\n                      _vm.$t(\"does-it-cancel-an-assignment-that-has-been-added\")\n                    ) + \"?\"\n                  )\n                ])\n              ]),\n              _c(\"div\", { staticClass: \"modal-footer\" }, [\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"btn btn-secondary btn-rounded btn-outline\",\n                    attrs: { type: \"button\", \"data-dismiss\": \"modal\" }\n                  },\n                  [_vm._v(\" \" + _vm._s(_vm.$t(\"cancel\")) + \" \")]\n                ),\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"btn btn-primary btn-rounded\",\n                    attrs: { type: \"button\", \"data-dismiss\": \"modal\" },\n                    on: {\n                      click: function($event) {\n                        return _vm.removeAssignment(_vm.tempQid)\n                      }\n                    }\n                  },\n                  [_vm._v(\" \" + _vm._s(_vm.$t(\"confirm\")) + \" \")]\n                )\n              ])\n            ])\n          ]\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"button\",\n      {\n        staticClass: \"close\",\n        attrs: {\n          type: \"button\",\n          \"data-dismiss\": \"modal\",\n          \"aria-label\": \"Close\"\n        }\n      },\n      [\n        _c(\"span\", {\n          staticClass: \"zmdi zmdi-Cancel\",\n          attrs: { \"aria-hidden\": \"true\" }\n        })\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"button\",\n      {\n        staticClass: \"close\",\n        attrs: {\n          type: \"button\",\n          \"data-dismiss\": \"alert\",\n          \"aria-label\": \"Close\"\n        }\n      },\n      [\n        _c(\"span\", {\n          staticClass: \"la la-close\",\n          attrs: { \"aria-hidden\": \"true\" }\n        })\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"button\",\n      {\n        staticClass: \"close\",\n        attrs: {\n          type: \"button\",\n          \"data-dismiss\": \"modal\",\n          \"aria-label\": \"Close\"\n        }\n      },\n      [\n        _c(\"span\", {\n          staticClass: \"zmdi zmdi-close\",\n          attrs: { \"aria-hidden\": \"true\" }\n        })\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/SpeakingQuiz.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2205bd015c-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/http/apis/Quiz.js":
/*!*******************************!*\
  !*** ./src/http/apis/Quiz.js ***!
  \*******************************/
/*! exports provided: ApiGetQuizByVideo, ApiGetQuizByBook, ApiGetQuizList, ApiGetSubtitileByVideo, ApiGetSubtitleByBook, ApiSetSByVideo, ApiSetSByBook, ApiGetSList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetQuizByVideo\", function() { return ApiGetQuizByVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetQuizByBook\", function() { return ApiGetQuizByBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetQuizList\", function() { return ApiGetQuizList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetSubtitileByVideo\", function() { return ApiGetSubtitileByVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetSubtitleByBook\", function() { return ApiGetSubtitleByBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiSetSByVideo\", function() { return ApiSetSByVideo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiSetSByBook\", function() { return ApiSetSByBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiGetSList\", function() { return ApiGetSList; });\n/* harmony import */ var _https_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../https.js */ \"./src/http/https.js\");\n\r\n\r\nconst ApiGetQuizByVideo = {\r\n    get: (rid, mid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/quiz/list/video/${rid}/${mid}`)\r\n    }\r\n};\r\n\r\nconst ApiGetQuizByBook = {\r\n    get: (rid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/quiz/list/book/${rid}`)\r\n    }\r\n};\r\n\r\nconst ApiGetQuizList = {\r\n    get: (rid, mid, type) => {\r\n        if (type === 'video') {\r\n            return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/quiz/list/video/${rid}/${mid}`)\r\n        } else {\r\n            return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/quiz/list/book/${rid}`)\r\n        }\r\n    }\r\n\r\n};\r\n\r\nconst ApiGetSubtitileByVideo = {\r\n    get: (pkgid, colid, rid, mid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/cms/resdl/subtitle/${pkgid}/${colid}/${rid}/${mid}`)\r\n    }\r\n};\r\n\r\nconst ApiGetSubtitleByBook = {\r\n    get: (pkgid, colid, rid) => {\r\n        console.log(`/cms/resdl/subtitlebyres/${pkgid}/${colid}/${rid}`);\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/cms/resdl/subtitlebyres/${pkgid}/${colid}/${rid}`)\r\n    }\r\n};\r\n\r\nconst ApiSetSByVideo = {\r\n    post: (rid, mid, courseid, paramObj) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"post\"])(`/quiz/create/video/${rid}/${mid}/${courseid}`, paramObj)\r\n    }\r\n};\r\n\r\nconst ApiSetSByBook = {\r\n    post: (rid, courseid, paramObj) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"post\"])(`/quiz/create/book/${rid}/${courseid}`, paramObj)\r\n    }\r\n};\r\n\r\nconst ApiGetSList = {\r\n    get: (qid) => {\r\n        return Object(_https_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(`/quiz/list/sentence/${qid}`)\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/http/apis/Quiz.js?");

/***/ }),

/***/ "./src/views/SpeakingQuiz.vue":
/*!************************************!*\
  !*** ./src/views/SpeakingQuiz.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SpeakingQuiz_vue_vue_type_template_id_cfabb802_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeakingQuiz.vue?vue&type=template&id=cfabb802&scoped=true& */ \"./src/views/SpeakingQuiz.vue?vue&type=template&id=cfabb802&scoped=true&\");\n/* harmony import */ var _SpeakingQuiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakingQuiz.vue?vue&type=script&lang=js& */ \"./src/views/SpeakingQuiz.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _SpeakingQuiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SpeakingQuiz_vue_vue_type_template_id_cfabb802_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SpeakingQuiz_vue_vue_type_template_id_cfabb802_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"cfabb802\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/SpeakingQuiz.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/SpeakingQuiz.vue?");

/***/ }),

/***/ "./src/views/SpeakingQuiz.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/SpeakingQuiz.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeakingQuiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./SpeakingQuiz.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/SpeakingQuiz.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeakingQuiz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/SpeakingQuiz.vue?");

/***/ }),

/***/ "./src/views/SpeakingQuiz.vue?vue&type=template&id=cfabb802&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/views/SpeakingQuiz.vue?vue&type=template&id=cfabb802&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_05bd015c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeakingQuiz_vue_vue_type_template_id_cfabb802_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"05bd015c-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./SpeakingQuiz.vue?vue&type=template&id=cfabb802&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"05bd015c-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/SpeakingQuiz.vue?vue&type=template&id=cfabb802&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_05bd015c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeakingQuiz_vue_vue_type_template_id_cfabb802_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_05bd015c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpeakingQuiz_vue_vue_type_template_id_cfabb802_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/SpeakingQuiz.vue?");

/***/ })

}]);