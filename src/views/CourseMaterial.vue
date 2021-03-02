<template>
  <div id="app2">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content">
      <div class="content page-aside-left">
        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row">
              <div class="col-4 col-md">
                <div class="card bg-secondary" style="height: 150px">
                  <div
                    class="card-body d-flex align-content-between flex-wrap mfilter-board"
                    @click="changemfilter('om')"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click to switch filter"
                  >
                    <h5 class="card-title">
                      {{ $t("opened-material") }}
                      <i
                        class="far fa-lightbulb fa-lg mfilter-icon"
                        :class="mfilter === 'om' ? 'text-warning' : ''"
                      ></i>
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="151">{{
                          courseOverview.open
                        }}</span
                        ><span class="d-none d-xl-inlineblock"
                          >/ {{ courseOverview.all }}</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 col-md">
                <div class="card bg-primary" style="height: 150px">
                  <div
                    class="card-body d-flex align-content-between flex-wrap mfilter-board"
                    @click="changemfilter('ob')"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click to switch filter"
                  >
                    <h5 class="card-title">
                      {{ $t("opened-books") }}
                      <i
                        class="far fa-lightbulb fa-lg mfilter-icon"
                        :class="mfilter === 'ob' ? 'text-warning' : ''"
                      ></i>

                      <!-- Picture Book Views<span class="text-light">Teacher</span> -->
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="13">{{
                          courseOverview.book
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 col-md">
                <div class="card bg-success" style="height: 150px">
                  <div
                    class="card-body d-flex align-content-between flex-wrap mfilter-board"
                    @click="changemfilter('ov')"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Click to switch filter"
                  >
                    <h5 class="card-title">
                      {{ $t("opened-videos") }}
                      <i
                        class="far fa-lightbulb fa-lg mfilter-icon"
                        :class="mfilter === 'ov' ? 'text-warning' : ''"
                      ></i>
                      <!-- Video Views<span class="text-light">Teacher</span> -->
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="29">{{
                          courseOverview.video
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md">
                <div class="card bg-warning" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      {{ $t("picture-book-views")
                      }}<span class="text-light">{{ $t("student") }}</span>
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="173">{{
                          courseOverview.readBook
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md">
                <div class="card bg-danger" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      {{ $t("video-views")
                      }}<span class="text-light">{{ $t("student") }}</span>
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="197">{{
                          courseOverview.watchVideo
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="pb-3">
                <div class="form-row">
                  <div class="form-group form-rounded mb-0 mr-3">
                    <select2
                      id="s2_demo2"
                      :options="typeList"
                      v-model="selectType"
                    >
                    </select2>
                    <!-- <select class="form-control">
                  <option>All type</option>
                  <option>Picture Book</option>
                  <option>Video</option>
                </select> -->
                  </div>
                  <div class="form-group form-rounded mb-0 mr-3">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search material"
                        v-model="searchRname"
                        @keyup.enter="searchCourseResource()"
                      />
                      <div class="input-group-append">
                        <div
                          class="btn btn-secondary btn-outline btn-icon btn-rounded"
                          type="button"
                          @click="searchCourseResource()"
                        >
                          <i class="zmdi zmdi-search text-secondary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- what ? -->
                  <div class="form-group form-rounded mb-0 mr-3">
                    <select2
                      id="s2_demo3"
                      :options="sortTypeList"
                      v-model="selectSortType"
                    >
                    </select2>
                  </div>
                  <div
                    class="form-group form-rounded mb-0 mr-3 d-flex align-items-center text-secondary"
                    v-if="searchType"
                  >
                    <span class="mr-1">{{ sortMList.length }}</span>
                    {{ $t("listings-for") }} “ <span>{{ tempSearchName }}</span
                    >”
                  </div>
                </div>
              </div>
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-primary btn-rounded btn-outline mr-2"
                  data-toggle="modal"
                  data-target="#OpenSettingsModal"
                  @click="copyMArray()"
                >
                  <i class="la la-gear"></i>{{ $t("quick-open") }}
                </button>

                <button
                  type="button"
                  class="btn btn-primary btn-rounded btn-outline"
                  @click="openAssignmentModal()"
                  :disabled="tempAList.length === 0 ? true : false"
                >
                  <i class="la la-clipboard"></i>{{ $t("assignment") }}
                  <span class="badge badge-primary">{{
                    tempAList.length
                  }}</span>
                </button>
              </div>
            </div>
            <div class="row">
              <div
                class="col-12"
                v-for="textbook in sortMList"
                :key="textbook.resourceid"
              >
                <div class="card">
                  <div class="card-body">
                    <div class="media">
                      <div
                        class="align-self-center overlay-wrap mr-4 w-150 h-150 border"
                      >
                        <span class="overlay-icon">
                          <i
                            class="fas fa-video"
                            v-if="textbook.note === 'video'"
                          ></i
                          ><i class="fas fa-book-open" v-else></i>
                        </span>
                        <img
                          v-lazy="
                            'https://lms.mangosteems.com/cms/resdl/cover/' +
                            textbook.resourceid
                          "
                          class="overlay-img cus-img"
                          alt="course image"
                        />
                        <!-- <div
                      title=""
                      class="overlay-img"
                      style="background-image: url(../assets/img/avatars/3.jpg)"
                    ></div> -->
                      </div>
                      <div class="media-body">
                        <div class="d-flex justify-content-between">
                          <div>
                            <!-- <span class="badge badge-pill badge-secondary mt-2 mr-2"
                          >Lavel J</span
                        ><span class="badge badge-pill badge-secondary mt-2"
                          >Topic A</span
                        > -->
                            <span
                              class="badge badge-pill badge-secondary mt-2"
                              v-if="textbook.level !== ''"
                              >{{ $t("level") }} {{ textbook.level }}</span
                            >
                            <h4
                              class="mb-0 mt-3 d-flex align-self-center text-primary"
                            >
                              <div title="">
                                <!-- <span
                                  v-if="textbook.unit !== ''"
                                  style="font-size: 18px"
                                  >{{ textbook.unit }} -
                                </span> -->
                                {{ textbook.resource_name }}
                                <a
                                  target="_blank"
                                  :href="textbook.worksheet"
                                  v-if="textbook.link === true"
                                  ><i
                                    class="fas fa-file-download pointer fa-1x download-icon"
                                  ></i
                                ></a>
                              </div>
                            </h4>
                            <p class="text-muted mt-1">
                              <span class="fw300 text-xs"
                                >{{ $t("last-played") }}
                                <span v-if="textbook.last_access !== '0'">{{
                                  textbook.last_access | dateConversion
                                }}</span>
                                <span v-else>--</span>
                              </span>
                            </p>
                          </div>
                          <div
                            class="text-primary pointer"
                            @click="gotoWebsite(textbook)"
                          >
                            {{ $t("start")
                            }}<a
                              class="btn-rounded-icon btn-primary rounded ml-2"
                              ><i
                                class="zmdi zmdi-arrow-right zmdi-hc-fw text-white"
                              ></i
                            ></a>
                          </div>
                        </div>
                        <div
                          class="border-top pt-3 d-flex justify-content-between"
                        >
                          <div>
                            <button
                              v-if="textbook.note === 'video'"
                              type="button"
                              class="btn btn-sm btn-secondary btn-rounded btn-outline mr-2"
                              data-toggle="modal"
                              data-target="#addAssignment"
                              @click="
                                getVideoMaterial(
                                  textbook.colid,
                                  textbook.resourceid
                                );
                                tempRname = textbook.resource_name;
                                tempVMList = tempAIDList;
                              "
                            >
                              <i class="zmdi zmdi-plus zmdi-hc-fw"></i
                              >{{ $t("assignment") }}
                            </button>
                            <button
                              :disabled="
                                tempAIDList.includes(textbook.resourceid)
                              "
                              v-else
                              type="button"
                              class="btn btn-sm btn-secondary btn-rounded btn-outline mr-2"
                              data-toggle="modal"
                              @click="addToAssignmentList(textbook)"
                            >
                              <i
                                class="zmdi zmdi-plus zmdi-hc-fw"
                                v-if="
                                  !tempAIDList.includes(textbook.resourceid)
                                "
                              ></i>
                              <i class="zmdi zmdi-assignment-check" v-else></i>
                              {{ $t("assignment") }}
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-secondary btn-rounded btn-outline mr-2"
                              data-toggle="modal"
                              data-target="#addSpeakingquiz"
                              v-if="textbook.note === 'video'"
                              @click="
                                getVideoMaterial(
                                  textbook.colid,
                                  textbook.resourceid
                                );
                                tempRname = textbook.resource_name;
                              "
                            >
                              <i class="zmdi zmdi-plus zmdi-hc-fw"></i
                              >{{ $t("speaking-quiz") }}
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-secondary btn-rounded btn-outline mr-2"
                              v-else
                              @click="
                                gotoSpeakingQuiz(
                                  textbook,
                                  textbook.resource_name
                                )
                              "
                            >
                              <i class="zmdi zmdi-plus zmdi-hc-fw"></i
                              >{{ $t("speaking-quiz") }}
                            </button>
                            <button
                              type="button"
                              class="btn btn-sm btn-secondary btn-rounded btn-outline"
                              data-toggle="modal"
                              @click="
                                getCollectionList(textbook.resourceid, textbook)
                              "
                            >
                              <i class="zmdi zmdi-plus zmdi-hc-fw"></i
                              >{{ $t("collection") }}
                            </button>
                          </div>
                          <div>
                            <div
                              v-if="textbook.openflag !== 'true'"
                              class="badge badge-dark badge-pill fw300 mr-2 font-size-md"
                            >
                              {{ $t("closed") }}
                            </div>
                            <div
                              v-if="
                                textbook.openflag === 'true' &&
                                textbook.note === 'video'
                              "
                              class="badge badge-secondary badge-pill fw300 mr-2 font-size-md"
                            >
                              {{ $t("opened") }}
                              <i class="fas fa-video"></i>
                            </div>
                            <div
                              v-else-if="
                                textbook.openflag === 'true' &&
                                textbook.note === 'book'
                              "
                              class="badge badge-secondary badge-pill fw300 mr-2 font-size-md"
                            >
                              {{ $t("opened") }}
                              <i class="fas fa-book-open"></i>
                            </div>
                            <button
                              v-if="textbook.openflag !== 'true'"
                              type="button"
                              class="btn btn-sm btn-secondary btn-rounded btn-outline"
                              data-toggle="modal"
                              data-target="#OpenMaterial"
                              @click="tempResource = textbook"
                            >
                              {{ $t("open-material") }}
                            </button>
                            <button
                              v-else
                              type="button"
                              class="btn btn-sm btn-secondary btn-rounded btn-outline"
                              data-toggle="modal"
                              data-target="#OpenMaterial"
                              @click="tempResource = textbook"
                            >
                              {{ $t("close-material") }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- END CONTENT WRAPPER -->
    <!-- Open material MODAL -->
    <div
      class="modal fade"
      id="OpenMaterial"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-if="tempResource.openflag !== 'true'">
              {{ $t("open-material") }}
            </h5>
            <h5 class="modal-title" v-else>{{ $t("close-material") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-Cancel"></span>
            </button>
          </div>
          <div class="modal-body">
            <p v-if="tempResource.openflag !== 'true'">
              {{ $t("open-this-material-and-allow") }}
              <em>{{ tempResource.resource_name }}</em>
              {{ $t("students-to-view-it") }}.
            </p>
            <p v-else>
              {{ $t("close-this-material-and-do-not-allow") }}
              <em>{{ tempResource.resource_name }}</em>
              {{ $t("students-to-view-it") }}
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              v-if="tempResource.openflag === 'true'"
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="
                getOpenResource(
                  tempResource.colid.split(';')[0],
                  tempResource.resourceid,
                  'false'
                )
              "
            >
              {{ $t("close") }}
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="
                getOpenResource(
                  tempResource.colid.split(';')[0],
                  tempResource.resourceid,
                  'true'
                )
              "
            >
              {{ $t("open") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addtoColletion MODAL -->
    <div
      class="modal fade"
      id="addtoColletion"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("Add-to-collection") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <!-- 有已存在於collection -->
              <div
                class="form-group row"
                v-if="existCollectionName.length !== 0"
              >
                <label class="control-label text-right col-sm-3">{{
                  $t("existing-in-collection")
                }}</label>
                <span class="col-sm-9">
                  <span
                    class="badge badge-secondary badge-pill mr-1"
                    v-for="Cname in existCollectionName"
                    :key="Cname"
                    >{{ Cname }}</span
                  ></span
                >
              </div>
              <!-- 選擇要存在哪個collection -->

              <div
                class="form-group row"
                v-if="filterCollectionList.length !== 0"
              >
                <label class="control-label text-right col-sm-3">{{
                  $t("collection")
                }}</label>
                <div class="col-sm-9">
                  <select2
                    id="s2_demo1"
                    :options="filterCollectionList"
                    v-model="selectCol"
                    @select="tempcolid = $event.id"
                  >
                  </select2>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label text-right col-sm-3">{{
                  $t("sequence")
                }}</label>
                <div class="col-sm-9">
                  <div class="" style="max-height: 300px" data-scroll="dark">
                    <!-- <ul class="sequence border"> -->
                    <li class="d-flex justify-content-between">
                      <div class="btn btn-nostyle btn-move mr-3">
                        <!-- <i class="la la-ellipsis-v"></i
                        ><i class="la la-ellipsis-v"></i
                        > -->
                        {{ tempResource.resource_name }}
                      </div>
                    </li>
                    <!-- </ul> -->
                  </div>
                </div>
              </div>
              <!-- <div class="form-group">
                <div class="col-sm-3">
                  <button
                    type="button"
                    class="btn btn-primary btn-outline btn-rounded"
                    data-dismiss="modal"
                    @click="gotoCreateCol()"
                  >
                    {{ $t("create-collection") }}
                  </button>
                </div>
                <div class="col-sm-9"></div>
              </div> -->
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-outline btn-rounded"
              data-dismiss="modal"
              @click="gotoCreateCol()"
            >
              {{ $t("create-new-collection") }}
            </button>
            <!-- <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("close") }}
            </button> -->
            <button
              v-if="filterCollectionList.length !== 0"
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="addResource()"
              :disabled="selectCol === ''"
            >
              {{ $t("add-to-collection") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addAssignment modal-->
    <div
      class="modal fade"
      id="addAssignment"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              <i class="zmdi zmdi-plus zmdi-hc-fw"></i>{{ $t("assignment") }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ tempRname }}</p>
            <div
              class="custom-control custom-checkbox form-check pb-2"
              v-for="vm in videoMaterialList"
              :key="vm.materialid"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                :value="
                  vm.materialid.toString() + '_' + vm.resourceid.toString()
                "
                :id="vm.materialid.toString() + '_' + vm.resourceid.toString()"
                v-model="tempVMList"
              />
              <label
                class="custom-control-label"
                :for="vm.materialid.toString() + '_' + vm.resourceid.toString()"
                >{{ vm.material_name }}</label
              >
              <!-- <span>{{ vm.materialid }}</span> -->
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("close") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="addtoSequence()"
              data-dismiss="modal"
            >
              {{ $t("save-changes") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addSpeakingquiz MODAL -->
    <div
      class="modal fade"
      id="addSpeakingquiz"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              {{ $t("speaking-quiz") }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ tempRname }}</p>
            <div>
              <a
                v-for="m in videoMaterialList"
                :key="m.materialid"
                class="btn btn-primary btn-outline btn-block"
                @click="gotoSpeakingQuiz(m, tempRname)"
                >{{ m.material_name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- openSetting Modal -->
    <div
      class="modal fade"
      id="OpenSettingsModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              {{ $t("open-settings") }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              {{ $t("total-of") }}
              <span class="text-primary bold">{{ textbookList.length }}</span>
              {{ $t("materials") }}
            </div>
            <div>
              <span class="mr-4"
                >{{ $t("opened") }}：<span class="text-primary bold">{{
                  openedMList.length
                }}</span></span
              >
              <span class=""
                >{{ $t("closed") }}：<span class="bold">{{
                  closedMList.length
                }}</span></span
              >
            </div>
            <div class="mt-4">
              {{ $t("check-which-materials-you-want-to-open") }}
            </div>
            <div class="table-responsive">
              <h2 v-if="textbookList.length === 0">
                {{ $t("no-relevant-records") }}
              </h2>
              <table class="table table-striped" v-else>
                <thead>
                  <tr>
                    <th>
                      <div class="custom-control custom-checkbox form-check">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck2"
                          @click="selectAllTBft"
                          v-model="selectAllTB"
                        />
                        <label
                          class="custom-control-label"
                          for="customCheck2"
                        ></label>
                      </div>
                    </th>
                    <th @click="sortTable('level')" class="pointer">
                      {{ $t("level")
                      }}<i class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"></i>
                    </th>
                    <th @click="sortTable('resource_name')" class="pointer">
                      {{ $t("material") }}
                      <i class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"></i>
                      <!-- <i class="zmdi zmdi-swap-vertical ml-1"></i> -->
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(tb, index) in copyTextbookList"
                    :key="tb.resourceid + index"
                  >
                    <td>
                      <div class="custom-control custom-checkbox form-check">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          :id="tb.resourceid"
                          v-model="openedTextbookList"
                          :value="`${tb.colid}_${tb.resourceid}`"
                        />
                        <label
                          class="custom-control-label"
                          :for="tb.resourceid"
                        ></label>
                      </div>
                    </td>
                    <td>
                      <span v-if="tb.level !== ''"
                        >{{ $t("level") }} {{ tb.level }}</span
                      >
                      <span v-else></span>
                    </td>
                    <td>
                      <!-- <span v-if="tb.unit !== ''" style="font-size: 14px"
                        >{{ tb.unit }} -
                      </span> -->
                      {{ tb.resource_name }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="materialOpenSetting()"
            >
              {{ $t("save") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- Assignment MODAL -->
    <div
      class="modal fade"
      id="AssignmentModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      v-if="studentList.length > 0"
    >
      <div
        class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("assignment") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-right">{{
                  $t("assignment-name")
                }}</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    id="agtname"
                    class="form-control form-control-lg"
                    placeholder="Asignment name"
                    v-model="newAgtName"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label text-right col-sm-3">{{
                  $t("material")
                }}</label>
                <div class="col-sm-9">
                  <div class="bg-light rounded" data-scroll="dark">
                    <ul class="sequence a-sequence">
                      <draggable
                        class="list-group"
                        tag="ul"
                        v-model="tempAList"
                        v-bind="dragOptions"
                        @start="drag = true"
                        @end="drag = false"
                      >
                        <li
                          v-for="(ta, index) in tempAList"
                          :key="index"
                          class="d-flex justify-content-between border bg-white rounded"
                        >
                          <div class="d-flex justify-content-start">
                            <div class="btn btn-nostyle btn-move">
                              <i class="la la-ellipsis-v"></i
                              ><i class="la la-ellipsis-v"></i>
                            </div>
                            <span
                              v-if="ta.note === 'book'"
                              class="d-flex col-sm-11 px-0"
                            >
                              <span
                                class="badge badge-pill badge-primary fix-badge-height"
                                >{{ $t("reading") }}</span
                              >
                              <span
                                class="col-sm-10 d-flex align-items-center"
                                >{{ ta.resource_name }}</span
                              >
                            </span>
                            <div
                              v-else-if="ta.note === 'video'"
                              class="d-flex col-sm-11 px-0"
                            >
                              <div>
                                <span
                                  class="badge badge-pill badge-warning fix-badge-height"
                                  >{{ $t("watching") }}</span
                                >
                              </div>
                              <span class="col-sm-10 d-flex align-items-center">
                                {{
                                  ta.resource_name + " - " + ta.material_name
                                }}
                              </span>
                            </div>
                            <span v-else class="d-flex col-sm-11 px-0">
                              <span
                                class="badge badge-pill badge-accent fix-badge-height"
                                >{{ $t("speaking-quiz") }}</span
                              >
                              <span class="col-sm-10 d-flex align-items-center"
                                >{{ ta.resource_name }} -
                                <span v-if="ta.material_name !== 'undefined'">{{
                                  ta.material_name
                                }}</span>
                                <span v-else>{{ $t("book") }}</span></span
                              >
                            </span>
                          </div>
                          <!-- <button
                            class="btn btn-nostyle btn-remove"
                            @click="removeAssignment(ta.note, ta)"
                          > -->
                          <i
                            @click="removeAssignment(ta.note, ta)"
                            class="zmdi zmdi-minus-circle zmdi-hc-2x text-secondary pointer"
                          ></i>
                          <!-- </button> -->
                        </li>
                      </draggable>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-right">{{
                  $t("due")
                }}</label>
                <div class="col-sm-8">
                  <date-picker
                    v-model="AssignmentDue"
                    valueType="format"
                    range
                    :disabled-date="disabledBeforeToday"
                  ></date-picker>
                  <!-- <input
                    type="text"
                    class="form-control date-picker-input"
                    placeholder="Select Date"
                    v-model="AssignmentDue"
                  /> -->
                </div>
                <!-- <div class="col-2 pt-2 pl-0">{{ AssignmentDue }}</div> -->
              </div>
              <div class="form-group row align-items-start m-0">
                <label class="control-label text-right col-sm-3"></label>
                <small class="col-sm-7"
                  ><span class="text-danger">*</span>
                  {{
                    $t("press-and-hold-the-ctrl-key-for-multiple-selections")
                  }}.</small
                >
              </div>
              <div
                class="form-group row align-items-start"
                :style="{
                  height: [parseInt(selectStudent.length / 3) + 3] * 28 + 'px',
                }"
              >
                <label class="control-label text-right col-sm-3">{{
                  $t("for-students")
                }}</label>
                <div class="col-sm-6">
                  <select2
                    id="s2_student"
                    :options="studentList"
                    v-model="selectStudent"
                    :settings="{ multiple: true }"
                  >
                  </select2>
                  <!-- :disabled="selectAllS" -->

                  <!-- <multiselect v-model="selectStudent" tag-placeholder="Add this as new tag" 
                    placeholder="Add students" 
                    label="username"  :options="studentList.map((item) => item.id)" 
                    :custom-label="
                (opt) => studentList.find((x) => x.id == opt).text"
                    :multiple="true" :taggable="true" :closeOnSelect="false"
                    :disabled="selectAllS"
                    @tag="addTag"></multiselect> -->
                </div>

                <div
                  class="col-sm-2 px-0 align-items-center d-flex hover-expand"
                >
                  <i
                    v-if="showStuTable === false"
                    class="zmdi zmdi-unfold-more pointer hover-blue mr-1"
                    @click="showStuTable = !showStuTable"
                  ></i>
                  <i
                    v-else
                    class="zmdi zmdi-unfold-less pointer hover-blue mr-1"
                    @click="showStuTable = !showStuTable"
                  ></i>
                  <label
                    @click="showStuTable = !showStuTable"
                    class="form-check-label pointer hover-blue"
                    for="expand"
                  >
                    <span v-if="showStuTable === false">{{
                      $t("expand-list")
                    }}</span>
                    <span v-else>{{ $t("close-list") }}</span>
                  </label>
                </div>
                <!-- <div class="col-sm-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="std"
                    v-model="selectAllS"
                    name="std"
                  />
                  <label class="form-check-label" for="std">All Students</label>
                </div> -->
              </div>
              <div class="form-group row align-items-start" v-if="showStuTable">
                <label class="control-label text-right col-sm-3"></label>
                <div class="col-sm-9 row">
                  <div class="custom-control custom-checkbox col-sm-12 ml-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="std"
                      v-model="selectAllS"
                      name="std"
                    />
                    <label class="custom-control-label" for="std">
                      <strong>{{ $t("all-students") }}</strong>
                    </label>
                  </div>
                  <div
                    v-for="(stu, index) in studentList"
                    :key="stu.id + index"
                    class="px-3"
                  >
                    <div class="custom-control custom-checkbox mr-2">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        :id="stu.id"
                        :value="stu.id"
                        v-model="selectStudent"
                      />
                      <label class="custom-control-label" :for="stu.id">{{
                        stu.text
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("close") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#AssignmentModal-2"
              :disabled="AssignmentSetting"
            >
              {{ $t("next") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- AssignmentModal-2 MODAL-->
    <div
      class="modal fade"
      id="AssignmentModal-2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">{{ $t("assignment") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body">
            <h5>{{ $t("how-difficult-is-this-assignment") }}?</h5>
            <p>
              {{
                $t(
                  "system-will-send-more-rewards-to-more-difficult-assignment"
                )
              }}.
            </p>
            <p
              v-for="(reward, index) in rewardList"
              :key="reward.exp"
              class="mb-0 monospace"
            >
              {{ $t("level") }}
              <span :class="`yellow-${index + 1}`">{{ index + 1 }} </span>

              => {{ $t("exp") }}.
              <span style="font-weight: bold">{{ reward.exp }}</span>

              , {{ $t("lucky-draw-ticket") }}
              <span style="font-weight: bold">{{ reward.ticket }}</span>
            </p>
            <div class="text-center mt-4 mb-4">
              <div class="form-check form-check-inline text-primary">
                {{ $t("easy") }}
              </div>
              <div
                class="custom-control custom-radio custom-control-inline mx-2"
                v-for="(d, i) in difficultList"
                :key="d"
              >
                <input
                  type="radio"
                  :id="d"
                  name="RadioInline"
                  class="custom-control-input pointer"
                  v-model="difficult"
                  :value="d"
                />
                <label
                  class="custom-control-label pointer"
                  :class="`yellow-${i + 1}`"
                  :for="d"
                  >{{ d }}</label
                >
              </div>

              <div class="form-check form-check-inline text-primary">
                {{ $t("difficult") }}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="setAssignment()"
            >
              {{ $t("assign") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- AssignmentModal-2 MODAL-->
    <div
      class="modal fade"
      id="messageModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">{{ $t("message") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ $t("no-related-collection-can-be-added") }}.</p>
            <p>
              {{
                $t(
                  "please-create-a-collection-of-the-resource-before-adding-the-material"
                )
              }}
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("close") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-outline btn-rounded"
              data-dismiss="modal"
              @click="gotoCreateCol()"
            >
              {{ $t("create-collection") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  ApiGetCourseDatail,
  ApiSearchCourseResource,
  ApiGetStudentList,
  ApiGetVideoMaterial,
  ApiSetAssignment,
  ApiGetOpenResource,
} from "../http/apis/CourseDetail";
import {
  ApiGetCollectionList,
  ApiGetResource,
  ApiAddResource,
  ApideleteResource,
} from "../http/apis/Collection";
import CourseHeader from "../components/CourseHeader";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import dayjs from "dayjs";
import $ from "jquery";
import draggable from "vuedraggable";
import _ from "lodash";
// import Multiselect from 'vue-multiselect'
// $("#mySelect2").select2({
//   dropdownParent: $("#s2_student"),
// });
export default {
  name: "CourseMaterial",
  components: {
    CourseHeader,
    DatePicker,
    draggable,
    // Multiselect
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
      searchRname: "",
      typeList: [
        { text: "All type", id: "all" },
        { text: "Picture Book", id: "book" },
        { text: "Video", id: "video" },
      ],
      selectType: "all",
      // sortTypeList: [
      //   { text: "Sort by title Asc", id: "title_asc" },
      //   { text: "Sort by title Desc", id: "title_desc" },
      //   { text: "Sort by level Asc", id: "level_asc" },
      //   { text: "Sort by level Desc", id: "level_desc" },
      // ],
      selectSortType: "title_asc",
      searchStatus: false,
      searchRList: [],
      courseid: this.$route.params.courseid,
      // tempAssignmentList: [],
      clicked: [],
      videoMaterialList: [],
      tempRname: "",
      tempVMList: [],
      collectionList: [],
      selectCol: "",
      tempResource: {},
      tempcolid: "",
      textbookList: [],
      studentList: [],
      selectStudent: [],
      tempSelectStudent: [],
      selectAllS: false,
      AssignmentDue: null,
      difficult: "1",
      difficultList: ["1", "2", "3", "4", "5"],
      tempAIDList: [],
      tempAList: [],
      openedTextbookList: [],
      setStudent: false,
      existCollectionName: [],
      pkgid: {},
      showStuTable: false,
      courseInfo: {},
      selectAllTB: "",
      sortStatus: false,
      tempSortItem: "",
      copyTextbookList: [],
      courseOverview: [],
      newAgtName: "",
      mfilter: "",
      searchType: false,
      tempSearchName: "",
      rewardList: [
        { exp: "100", ticket: "1" },
        { exp: "150", ticket: "1" },
        { exp: "200", ticket: "2" },
        { exp: "250", ticket: "2" },
        { exp: "300", ticket: "3" },
      ],
    };
  },
  created() {
    //列表資訊從menulift call (為了重複使用)
    this.textbookList = this.textbookLists;
    this.openedTextbookList = this.openedTextbookLists;
    this.studentList = this.studentLists;
    this.tempAIDList = this.tempAIDLists;
    this.tempAList = this.tempALists;
    this.pkgid = this.pkgids;
    this.courseInfo = this.courseInfos;
    this.courseOverview = this.courseOverviews;
  },
  mounted() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
  watch: {
    courseOverviews() {
      this.courseOverview = this.courseOverviews;
    },
    courseInfos() {
      this.courseInfo = this.courseInfos;
    },
    pkgids() {
      this.pkgid = this.pkgids;
    },
    openedTextbookLists() {
      this.openedTextbookList = this.openedTextbookLists;
    },
    textbookLists() {
      this.textbookList = this.textbookLists;
    },
    studentLists() {
      this.studentList = this.studentLists;
    },
    selectAllS() {
      if (this.selectAllS) {
        // this.tempSelectStudent = this.selectStudent;
        this.selectStudent = [];
        this.studentList.forEach((std) => {
          this.selectStudent.push(std.id);
          std;
        });
        // this.selectStudent.push("*");
      } else {
        this.selectStudent = this.tempSelectStudent;
      }
    },
    tempAIDLists() {
      this.tempAIDList = this.tempAIDLists;
    },
    tempALists() {
      this.tempAList = this.tempALists;
    },
  },
  computed: {
    sortMList() {
      //doshboard filter
      if (this.mfilter === "om") {
        console.log(this.textbookList);
        return this.$_sortMaterial(this.openedMList, this.selectSortType);
      } else if (this.mfilter === "ob") {
        return this.$_sortMaterial(this.openedBookList, this.selectSortType);
      } else if (this.mfilter === "ov") {
        return this.$_sortMaterial(this.openedVideoList, this.selectSortType);
      } else {
        return this.$_sortMaterial(this.textbookList, this.selectSortType);
      }
      //utils mixins
      // return this.$_sortMaterial(this.textbookList, this.selectSortType);
      // let temp = [...this.textbookList];
      // if (this.selectSortType === "title_asc") {
      //   temp = _.sortBy(temp, [(obj) => obj.resource_name], ["asc"]);
      //   temp = _.sortBy(temp, [(obj) => parseInt(obj.unit, 10)], ["asc"]);
      //   return temp;
      // } else if (this.selectSortType === "title_desc") {
      //   temp = _.sortBy(temp, [(obj) => obj.resource_name], ["asc"]);
      //   temp = _.sortBy(temp, [(obj) => parseInt(obj.unit, 10)], ["asc"]);
      //   return temp.reverse();
      // } else if (this.selectSortType === "level_asc") {
      //   temp = _.sortBy(temp, [(obj) => obj.level], ["asc"]);
      //   return temp;
      // } else if (this.selectSortType === "level_desc") {
      //   temp = _.sortBy(temp, [(obj) => obj.level], ["asc"]);
      //   return temp.reverse();
      // }
    },
    sortTypeList() {
      return this.$store.state.common.sortTypeList;
    },
    courseOverviews() {
      return this.$store.state.courseInfo.courseOverview;
    },
    courseInfos() {
      return this.$store.state.courseInfo.courseInfo;
    },
    openedMList() {
      return this.textbookList.filter((item) => {
        return item.openflag === "true";
      });
    },
    openedBookList() {
      return this.textbookList.filter((item) => {
        return item.openflag === "true" && item.note === "book";
      });
    },
    openedVideoList() {
      return this.textbookList.filter((item) => {
        return item.openflag === "true" && item.note === "video";
      });
    },
    closedMList() {
      return this.textbookList.filter((item) => {
        return item.openflag !== "true";
      });
    },
    filterCollectionList() {
      this.existCollectionName = [];
      //有哪些collection可以加入這裡LIST
      return this.collectionList.filter((item) => {
        console.log(item);
        console.log(this.tempResource.resourceid);
        if (item.rid === this.tempResource.resourceid) {
          //排除已經被加入collection
          this.existCollectionName.push(item.text);
        }
        return item.rid !== this.tempResource.resourceid;
      });
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
    AssignmentSetting() {
      if (
        this.AssignmentDue === null ||
        this.selectStudent.length <= 0 ||
        this.newAgtName === ""
      ) {
        return true;
      } else {
        if (this.AssignmentDue.includes(null)) {
          return true;
        } else {
          return false;
        }
      }
    },
    pkgids() {
      return this.$store.state.courseInfo.courseInfo.pkgid;
    },
    openedTextbookLists() {
      return this.$store.state.courseInfo.openedTextbookList;
    },
    textbookLists() {
      return this.$store.state.courseInfo.textbookList;
    },
    studentLists() {
      return this.$store.state.courseInfo.forSelectStudentList;
    },
    userid() {
      return this.$store.state.auth.userid;
    },
    tempAIDLists() {
      return this.$store.state.courseInfo.caidList;
      // return this.$store.state.courseInfo.tempAIDList[this.courseid] === undefined ?  this.tempAIDList : this.$store.state.courseInfo.tempAIDList[this.courseid] ;
    },
    tempALists() {
      return this.$store.state.courseInfo.caList;
      //  return this.$store.state.courseInfo.tempAList[this.courseid] === undefined ?  this.tempAList : this.$store.state.courseInfo.tempAList[this.courseid] ;
      // return this.$store.state.courseInfo.tempAList[this.courseid];
    },
  },
  methods: {
    changemfilter(filterName) {
      if (filterName === this.mfilter) {
        this.mfilter = "";
      } else {
        this.mfilter = filterName;
      }
    },
    sortTable(sortItem) {
      if (this.tempSortItem === "") {
        this.tempSortItem = sortItem;
        this.sortStatus = false;
      } else if (this.tempSortItem !== sortItem) {
        this.tempSortItem = sortItem;
        this.sortStatus = false;
      } else {
      }
      this.sortStatus = !this.sortStatus;
      if (this.sortStatus) {
        this.copyTextbookList = _.sortBy(
          this.copyTextbookList,
          [sortItem],
          ["asc"]
        );
      } else {
        this.copyTextbookList = this.copyTextbookList.reverse();
      }

      // publish_date
    },
    disabledBeforeToday(date) {
      let today = new Date();
      today.setHours(0, 0, 0, 0);

      return date < today;
    },
    openAssignmentModal() {
      if (this.studentList.length <= 0) {
        this.$bus.$emit(
          "messsage:push",
          "Please add students to the course first.",
          "danger"
        );
      } else {
        $("#AssignmentModal").modal("show");
      }
    },
    // multiple select
    addTag(newTag) {
      const tag = {
        text: newTag,
        id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      // this.options.push(tag)
      // this.value.push(tag)
    },
    async getCollectionList(rid, obj) {
      let vm = this;
      this.tempResource = obj;
      this.collectionList = [];
      let result = await ApiGetCollectionList.get(this.userid, rid)
        .then((response) => {
          this.collectionList = response.record.map((o) => {
            return {
              id: o.collectionid,
              text: o.collection_name,
              rid: o.resourceid,
            };
          });
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        if (
          vm.existCollectionName.length !== 0 ||
          vm.filterCollectionList.length !== 0
        ) {
          $("#addtoColletion").modal("show");
        } else {
          $("#messageModal").modal("show");
        }
      }
    },

    addResource() {
      this.selectCol = this.selectCol.toString();
      this.tempResource.resourceid = this.tempResource.resourceid.toString();
      ApiAddResource.get(this.selectCol, this.tempResource.resourceid)
        .then((response) => {
          console.log(response);
          if (response.status === "success") {
            this.$bus.$emit(
              "messsage:push",
              "Successful addition to the collection.",
              "success"
            );
            this.selectCol = "";
          } else {
            this.$bus.$emit("messsage:push", "Unknown error.", "danger");
            this.selectCol = "";
          }
        })
        .catch((err) => {});
    },
    // async deleteResource(colid, rid) {
    //   let result = await ApideleteResource.get(this.userid, this.tempcolid, rid)
    //     .then((response) => {
    //       return response.status;
    //     })
    //     .catch((err) => {});
    //   if (result) {
    //     this.getResource(this.tempcolid);
    //   }
    // },
    addToAssignmentList(m) {
      // this.clicked.push(m.resourceid);
      console.log(m);
      this.$store.dispatch("courseInfo/setAssignment", {
        assignment: m,
        id: m.resourceid,
      });
    },
    searchCourseResource() {
      //判斷是否有搜尋值
      if (this.searchRname !== "") {
        this.searchType = true;
        this.tempSearchName = this.searchRname;
      } else {
        this.searchType = false;
      }
      let sType = this.selectType;
      if (this.selectType === "all") {
        sType = "*";
      }
      let searchObj = {
        type: sType,
        keyword: this.searchRname,
      };
      ApiSearchCourseResource.post(this.courseid, searchObj)
        .then((response) => {
          response.record.forEach((element) => {
            if (element.unit === undefined) {
              element.unit = "";
            }
            element.link = element.information.includes("http");
          });
          this.textbookList = response.record;
        })
        .catch((err) => {});
    },
    async getVideoMaterial(Ncolid, rid) {
      let colid = Ncolid.split(";")[0];
      let result = await ApiGetVideoMaterial.get(colid, this.courseid, rid)
        .then((response) => {
          this.videoMaterialList = response.record;
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.videoMaterialList.forEach((el) => {
          el.resource_name = this.tempRname;
        });
      }
    },
    addtoSequence() {
      //e現在的格式 => MID_RID
      //新增一個ASS +  本來就在系統暫存的

      let result = this.tempVMList
        .filter((e) => {
          return this.tempAIDList.indexOf(e) === -1;
        })
        .concat(
          this.tempAIDList.filter((f) => {
            return this.tempVMList.indexOf(f) === -1;
          })
        );

      //取絕對差集 補集
      // result = id array
      //SET的時候傳整個OBJECT 所以要從ID列表得到整個OBJET
      //從ID => GET OBJECT

      //只需要MIDLIST 格式轉換 MID_RID => MID
      let copyVMList = [];
      result.forEach((item) => {
        item = item.split("_")[0];
        copyVMList.push(item);
      });

      let vmList = [];
      this.videoMaterialList.forEach((element) => {
        if (copyVMList.includes(element.materialid)) {
          vmList.push(element);
        }
      });

      // result要排序
      vmList.sort((a, b) => {
        return ("" + a.material_name).localeCompare(b.material_name);
      });

      //如果變動的本就存在 從暫存移除 不存在則加入暫存
      vmList.forEach((obj) => {
        if (this.tempAIDList.includes(obj.materialid + "_" + obj.resourceid)) {
          this.$store.dispatch("courseInfo/removeAssignment", {
            id: obj.materialid + "_" + obj.resourceid,
          });
        } else {
          this.$store.dispatch("courseInfo/setAssignment", {
            assignment: obj,
            id: obj.materialid + "_" + obj.resourceid,
          });
        }
      });
      this.$bus.$emit(
        "messsage:push",
        "Add to the temporary assignment list",
        "success"
      );
    },
    removeAssignment(type, obj) {
      console.log("delete assignment");
      console.log("type = ", type);
      console.log("obj = ", obj);
      if (type === "book") {
        this.$store.dispatch("courseInfo/removeAssignment", {
          id: obj.resourceid,
        });
      } else if (type === "video") {
        this.$store.dispatch("courseInfo/removeAssignment", {
          id: obj.materialid + "_" + obj.resourceid,
        });
      } else {
        this.$store.dispatch("courseInfo/removeAssignment", {
          id: obj.quizid,
        });
      }
    },
    gotoWebsite(obj) {
      if (obj.note === "book") {
        window.open(
          `${process.env.VUE_APP_DOMAIN}/bktchr/?pkgid=${this.courseInfo.pkgid}&colid=${this.courseInfo.colid}&resid=${obj.resourceid}&mid=&lmsd=${process.env.VUE_APP_LMSD}&auth=${this.$store.state.auth.token}&crsid=${this.courseInfo.courseid}&userid=${this.userid}`
        );
      } else {
        window.open(
          `${process.env.VUE_APP_DOMAIN}/vptchr/?pkgid=${this.courseInfo.pkgid}&colid=${this.courseInfo.colid}&resid=${obj.resourceid}&mid=&lmsd=${process.env.VUE_APP_LMSD}&auth=${this.$store.state.auth.token}&crsid=${this.courseInfo.courseid}&userid=${this.userid}`
        );
      }
    },
    async setAssignment() {
      let obj = {};
      obj.userid = this.userid;
      obj.publish_date = dayjs(this.AssignmentDue[0]).unix();
      obj.expiry_date = dayjs(this.AssignmentDue[1]).unix();
      obj.difficult = this.difficult;
      obj.description = this.newAgtName;
      if (
        this.selectStudent.includes("*") ||
        this.selectStudent.length === this.studentList
      ) {
        obj.student = "all";
      } else {
        obj.student = this.selectStudent.join(";");
      }
      this.tempAList.forEach((el) => {
        if (el.note === "video") {
          this.$set(el, "assignment_type", "watching");
        } else if (el.note === "book") {
          this.$set(el, "assignment_type", "reading");
        } else {
          this.$set(el, "assignment_type", "speaking");
        }
      });
      obj.content = this.tempAList;
      let result = await ApiSetAssignment.post(this.courseid, obj)
        .then((response) => {
          if (response.status === "success") {
            this.$bus.$emit(
              "messsage:push",
              "New assignment success!",
              "success"
            );
            return true;
          } else {
            console.log(response);
            this.$bus.$emit("messsage:push", "Unknown error!!", "danger");
          }
        })
        .catch((err) => {});
      //新增作業成功
      if (result) {
        //移除INDEX
        this.$store.dispatch(
          "courseInfo/clearCourseTempAssignment",
          this.$route.params.courseid
        );
        //新增更新回去
        this.$store.dispatch(
          "courseInfo/updateTextbookList",
          this.$route.params.courseid
        );
        this.newAgtName = "";
        this.selectAllS = false;
        this.selectStudent = "";
        this.AssignmentDue = null;
        this.difficult = "";
        this.$bus.$emit("messsage:push", "New assignment success.", "success");
      }
    },
    async materialOpenSetting() {
      let result1 = null;
      let result2 = null;
      let promises = [];
      this.openedTextbookList.forEach((item, index) => {
        //如果新增OPEN
        //if NEW NOT INCLUEDS OLD
        if (!this.openedTextbookLists.includes(item)) {
          promises.push(
            this.getOpenResource(item.split(";")[0], item.split("_")[1], "true")
          );
        }
      });
      // 如果新增CLOSE
      // if OLD NOT INCLUEDS NEW
      this.openedTextbookLists.forEach((item, index) => {
        if (!this.openedTextbookList.includes(item)) {
          promises.push(
            this.getOpenResource(
              item.split(";")[0],
              item.split("_")[1],
              "false"
            )
          );
        }
      });

      this.axios
        .all(promises)
        .then(
          await this.axios.spread((func1) => {
            this.$store.dispatch(
              "courseInfo/updateTextbookList",
              this.$route.params.courseid
            );
          })
        )
        .catch((err) => {});
    },
    async getOpenResource(colid, rid, status) {
      // let openStatus = "true";
      // if (status === "true") {
      //   openStatus = "false";
      // }
      // colid = colid.split(";")[0];
      let result = await ApiGetOpenResource.get(
        colid,
        this.$route.params.courseid,
        rid,
        status
      )
        .then((response) => {
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});

      if (result) {
        this.$store.dispatch(
          "courseInfo/updateTextbookList",
          this.$route.params.courseid
        );
      }
      return result;
    },
    gotoSpeakingQuiz(m, rname = "") {
      $("#addSpeakingquiz").modal("hide");
      let mType = "video";
      if (m.note === "book") {
        mType = "book";
      }
      let url = `/quiz/${this.$route.params.course}/Speaking Quiz/${rname}/${m.material_name}/${this.courseid}/${mType}/${m.resourceid}/${m.materialid}`;
      url = url.replaceAll("?", "%3F");
      this.$router.push({
        path: url,
      });
    },
    gotoCreateCol() {
      this.$router.push({
        path: `/collection/create/${this.pkgid}`,
      });
    },
    copyMArray() {
      this.copyTextbookList = [...this.sortMList];
    },
    selectAllTBft(event) {
      const vm = this;

      if (!event.currentTarget.checked) {
        vm.openedTextbookList = [];
      } else {
        //實現全選
        vm.openedTextbookList = [];
        vm.textbookList.forEach(function (item, i) {
          vm.openedTextbookList.push(`${item.colid}_${item.resourceid}`);
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';

.sequence {
  overflow-y: scroll !important;
}

.a-sequence {
  overflow-y: scroll !important;
}

.font-size-md {
  font-size: 0.75rem;
}
.bold {
  font-weight: bold;
}

.cus-img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.overlay-icon {
  z-index: 99;
}
.hover-expand:hover {
  .hover-blue {
    color: #32c1db;
  }
}

.custom-control-label.text-xs {
  font-size: 16px !important;
}
.text-xs.fw300 {
  font-size: 14px !important;
}
.download-icon:hover {
  color: #32c1db;
}

.mfilter-board {
  .card-title {
    color: #ffffff;
  }
  .mfilter-icon {
    color: #ffffff;
  }
}

.mfilter-board:hover {
  cursor: pointer;
  .mfilter-icon {
    color: #ffce67;
  }
}

.tooltip {
  width: 602px !important;
  min-width: 602px !important;
}

.monospace {
  font-family: "Roboto", monospace;
}
.yellow-1 {
  color: #fad961;
}
.yellow-2 {
  color: #f9bc4f;
}
.yellow-3 {
  color: #f8a03d;
}
.yellow-4 {
  color: #f78c30;
}
.yellow-5 {
  color: #f76b1c;
}
</style>