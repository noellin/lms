<template>
  <div id="app3">
    <!-- END MENU SIDEBAR WRAPPER -->
    <!-- TOP TOOLBAR WRAPPER -->
    <custom-header></custom-header>
    <!-- END TOP TOOLBAR WRAPPER -->
    <div class="content py-0">
      <header class="page-header">
        <div class="d-flex align-items-start">
          <div class="mt-2 mr-3">
            <a @click="$back" class="btn-rounded-icon btn-primary ml-2 pointer"
              ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
            ></a>
          </div>
          <div class="mr-auto">
            <h1 class="separator">{{ $t("collection") }}</h1>
            <span>{{ $t("edit") }}</span>
            <p class="second-title">{{ cname }}</p>
          </div>
        </div>
      </header>
      <section class="page-content container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row cardsContainer" id="cards-container">
                  <div class="col-6">
                    <div class="form-group">
                      <label>{{ $t("collection-name") }}</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter collection name"
                        v-model="cname"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>{{ $t("available-packages") }}</label>
                      <select class="form-control" id="s2_demo2" disabled>
                        <optgroup label="select package">
                          <option selected>{{ pName }}</option>
                          <option>{{ $t("second-grade") }}</option>
                          <option>{{ $t("third-grade") }}</option>
                          <option>{{ $t("fourth-grade") }}</option>
                          <option>{{ $t("summer-class-special") }}</option>
                          <option>{{ $t("winter-class-special") }}</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <h6>{{ $t("applicable-course") }}</h6>
                    <span>
                      <span
                        v-for="(course, index) in courseList"
                        :key="index + course"
                        >{{ course }}
                        <span v-if="index + 1 < courseList.length">、</span>
                      </span>
                      <!-- 101 English、102 English、103 English、104 English、105
                        English、106 English、107 English、108 English、109
                        English、110 English、111 English、112 English -->
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="d-flex justify-content-end pb-3">
              <!-- <div class="">
                  <div class="form-row">
                    <div class="form-group form-rounded form-custom mb-0 mr-3">
                      <select2
                        id="s2_demo1"
                        class=""
                        :options="typeList"
                        v-model="seleceType"
                      >
                      </select2>
                    </div>
                    <div class="form-group form-rounded mb-0">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search..."
                          v-model="searchRname"
                          @keyup.enter="searchCollectionResource()"
                        />
                        <div class="input-group-append">
                          <div
                            class="btn btn-secondary btn-outline btn-icon btn-rounded"
                            type="button"
                            @click="searchCollectionResource()"
                          >
                            <i class="zmdi zmdi-search text-secondary"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-primary btn-rounded btn-outline"
                  data-toggle="modal"
                  data-target="#addMaterial"
                  @click="resetSelect()"
                >
                  <!-- <i class="la la-plus"></i> -->
                  {{ $t("selection-and-management") }}
                </button>
              </div>
            </div>
            <div class="card">
              <h5 class="card-header">{{ $t("sequence") }}</h5>
              <div class="card-body">
                <div
                  style="max-height: 320px"
                  data-scroll="dark"
                  class="collection-scroll"
                >
                  <ul class="sequence">
                    <draggable
                      class="list-group"
                      tag="ul"
                      v-model="materialSequence"
                      v-bind="dragOptions"
                      @start="drag = true"
                      @end="drag = false"
                    >
                      <li
                        class="d-flex justify-content-between"
                        v-for="(m, index) in materialSequence"
                        :key="m.resourceid"
                      >
                        <div
                          class="d-flex justify-content-start align-items-center"
                        >
                          <div class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </div>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-100 h-100 border"
                          >
                            <span class="overlay-icon">
                              <i
                                class="fas fa-video"
                                v-if="m.note === 'video'"
                              ></i
                              ><i class="fas fa-book-open" v-else></i>
                            </span>
                            <img
                              v-lazy="
                                'https://lms.mangosteems.com/cms/resdl/cover/' +
                                m.resourceid
                              "
                              class="overlay-img cus-img"
                              alt="course image"
                            />
                          </div>
                          <div>
                            <span
                              class="badge badge-pill badge-secondary mt-2"
                              v-if="
                                m.level !== '' &&
                                m.level !== null &&
                                m.level !== undefined
                              "
                              >{{ $t("level") }} {{ m.level }}</span
                            >
                            <span
                              class="badge badge-pill badge-secondary ml-2"
                              v-if="m.unit !== '' && m.unit !== undefined"
                              >{{ $t("unit") }} {{ m.unit }}</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              <!-- <span v-if="m.unit !== ''">{{ m.unit }} - </span> -->
                              {{ m.resource_name }}
                            </h4>
                          </div>
                        </div>
                        <button
                          class="btn btn-nostyle btn-remove"
                          data-toggle="modal"
                          data-target="#deleteModal"
                          @click="
                            tempRname = m.resource_name;
                            tempRid = m.resourceid;
                            tempIndex = index;
                          "
                        >
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                    </draggable>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 text-right">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline mr-2"
              data-toggle="modal"
              data-target="#SaveChangeModal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-toggle="modal"
              data-target="#SaveChangeModal"
            >
              {{ $t("save") }}
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- <footer class="bg-secondary bg-dk d-flex justify-content-center footer">
      <p class="text-light mt-2 mb-2">© iGroup LMS</p>
    </footer> -->
    <!-- END CONTENT WRAPPER -->
    <!-- SaveChange MODAL -->
    <div
      class="modal fade"
      id="SaveChangeModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("save-change") }}</h5>
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
            <p>{{ $t("would-you-like-to-save-your-changes") }}?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="updateCollection()"
            >
              {{ $t("save") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- NoCourse MODAL -->
    <div
      class="modal fade"
      id="NoCourseModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("no-course") }}</h5>
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
            <p>
              {{
                $t(
                  "courses-that-can-use-this-collection-have-expired-less-than-br-greater-than-if-you-want-to-continue-using-you-must-renew-the-contract"
                )
              }}.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline mr-2"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button type="button" class="btn btn-primary btn-rounded">
              {{ $t("save") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addMaterial modal-->
    <div
      class="modal fade"
      id="addMaterial"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              <i class="zmdi zmdi-plus zmdi-hc-fw"></i>{{ $t("material") }}
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
            <h6 class="pb-2">
              <span class="text-muted">{{ $t("package") }}</span>
              <strong class="ml-1">{{ pName }}</strong>
            </h6>
            <div class="row">
              <div class="col-4">
                <div class="form-group form-rounded">
                  <select2
                    id="s2_demo1"
                    :options="typeList"
                    v-model="seleceType"
                  >
                  </select2>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group form-rounded">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                      v-model="tempSearch"
                      @keyup.enter="searchRName = tempSearch"
                    />
                    <div class="input-group-append">
                      <div
                        class="btn btn-secondary btn-outline btn-icon btn-rounded"
                        type="button"
                        @click="searchRName = tempSearch"
                      >
                        <i class="zmdi zmdi-search text-secondary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group form-rounded">
                  <select2
                    id="s2_demo3"
                    :options="sortTypeList"
                    v-model="selectSortType"
                  >
                  </select2>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body" data-scroll="dark">
            <div class="custom-control custom-checkbox form-check pb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id="selectPM"
                @click="selectAll"
                v-model="selectAllPM"
              />
              <label class="custom-control-label text-primary" for="selectPM">{{
                $t("select-all")
              }}</label>
            </div>
            <div
              class="custom-control custom-checkbox form-check pb-3"
              v-for="pkgm in sortMList"
              :key="pkgm.resourceid"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                :value="pkgm.resourceid"
                :id="pkgm.resourceid"
                v-model="tempMidList"
              />
              <!-- @click="mySelectEvent(pkgm)" -->
              <label class="custom-control-label" :for="pkgm.resourceid">
                <span
                  class="badge badge-pill badge-secondary"
                  v-if="pkgm.level !== ''"
                  >{{ $t("level") }} {{ pkgm.level }}</span
                >
                <span
                  class="badge badge-pill badge-secondary ml-2"
                  v-if="pkgm.unit !== ''"
                  >{{ $t("unit") }} {{ pkgm.unit }}</span
                >
                <!-- <span v-if="pkgm.unit !== ''">{{ pkgm.unit }} - </span> -->
                {{ pkgm.resource_name }}</label
              >
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
              data-dismiss="modal"
              @click="addtoSequence()"
            >
              <!-- <i class="la la-plus"></i> -->
              {{ $t("confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- DELETE MODAL -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("delete") }}</h5>
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
            <p>
              {{ $t("confirm-to-delete-resource") }}：<strong>{{
                tempRname
              }}</strong
              >?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="removeFromSequence(tempIndex)"
            >
              {{ $t("confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
// import CustomHeader from "../components/CustomHeader";
import {
  ApiGetCollectionContent,
  ApiDeleteResource,
  ApiGetCollectionInfo,
  ApiGetPkgMaterial,
  ApiUpdateCollection,
} from "../http/apis/Collection";
import _ from "lodash";
// import Menu
export default {
  name: "CollectionDetail",
  components: {
    CustomHeader: () => import("@/components/CustomHeader.vue"),
    draggable,
  },
  data() {
    return {
      cname: "",
      pName: "",
      tempRname: "",
      tempRid: "",
      tempIndex: 0,
      pkgMaterialList: [],
      selectAllPM: "",
      typeList: [
        { text: "All type", id: "all" },
        { text: "Picture Book", id: "book" },
        { text: "Video", id: "video" },
      ],
      seleceType: "all",
      tempSearch: "",
      searchRName: "",
      materialSequence: [],
      tempMidList: [],
      tempMaterialList: [],
      courseList: [],
      pkgid: this.$route.params.pid,
      colid: this.$route.params.cid,
      //
      drag: false,
      selectSortType: "title_asc",
    };
  },
  computed: {
    resourceFilter() {
      let result = [];
      if (this.seleceType !== "all") {
        result = this.pkgMaterialList.filter((item) => {
          return (
            item.type === this.seleceType &&
            item.resource_name
              .toLowerCase()
              .indexOf(this.searchRName.toLowerCase()) !== -1
          );
        });
      } else {
        result = this.pkgMaterialList.filter((item) => {
          return (
            item.resource_name
              .toLowerCase()
              .indexOf(this.searchRName.toLowerCase()) !== -1
          );
        });
      }
      return result;
    },
    sortMList() {
      //utils mixins
      return this.$_sortMaterial(this.resourceFilter, this.selectSortType);
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
    //
    sortTypeList() {
      return this.$store.state.common.sortTypeList;
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
    userid() {
      return this.$store.state.auth.userid;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    selectAll(event) {
      const vm = this;
      if (!event.currentTarget.checked) {
        vm.tempMaterial = [];
      } else {
        //實現全選
        vm.tempMaterial = [];
        vm.sortMList.forEach(function (item, i) {
          vm.tempMaterial.push(item);
        });
      }
    },
    init() {
      this.axios
        .all([
          this.getCollectionContent(),
          this.getCollectionInfo(),
          this.getPkgMaterial(),
        ])
        .then(this.axios.spread((func1, func2) => {}))
        .catch((err) => {});
      this.cname = this.$route.params.cname;
    },
    getCollectionContent() {
      return ApiGetCollectionContent.get(this.userid, this.$route.params.cid)
        .then((response) => {
          response.record.forEach((item) => {
            if (item.unit === undefined) {
              item.unit = "";
            }
          });
          this.materialSequence = response.record;
          response.record.forEach((msi) => {
            this.tempMidList.push(msi.resourceid);
          });
        })
        .catch((err) => {});
    },
    getCollectionInfo() {
      this.courseList = [];
      ApiGetCollectionInfo.get(this.userid, this.$route.params.pid)
        .then((response) => {
          response.forEach((element) => {
            this.courseList.push(element.course_name);
            this.pName = element.pkg_name;
          });
        })
        .catch((err) => {});
    },
    // deleteResource(pid) {
    //   ApiDeleteResource.get(this.userid, this.$route.params.cid, pid)
    //     .then((response) => {})
    //     .catch((err) => {});
    // },
    getPkgMaterial() {
      ApiGetPkgMaterial.get(this.$route.params.pid)
        .then((response) => {
          response.record.forEach((item) => {
            if (item.unit === undefined) {
              item.unit = "";
            }
          });
          this.pkgMaterialList = response.record;
        })
        .catch((err) => {});
    },
    removeFromSequence(index) {
      this.materialSequence.splice(index, 1);
    },
    resetSelect() {},
    addtoSequence() {
      // this.materialSequence = [];
      let ml = [];
      this.tempMidList.forEach((id) => {
        this.pkgMaterialList.forEach((pkg) => {
          if (pkg.resourceid === id) {
            ml.push(pkg);
          }
        });
      });
      this.materialSequence = ml;
      // ml.forEach((currentItem) => {
      //   this.materialSequence.forEach((item) => {
      //     console.log(currentItem);
      //     console.log(item);
      //   });
      // });
    },
    async updateCollection() {
      let obj = {};
      let resourceList = [];
      obj.collection_name = this.cname;
      obj.pkgid = this.pkgid;
      obj.list = [];
      this.materialSequence.forEach((item) => {
        obj.list.push(item.resourceid);
      });
      obj.resource = obj.list.join(";");
      obj.userid = this.userid;
      console.log(obj);
      let result = await ApiUpdateCollection.put(this.colid, obj)
        .then((response) => {
          console.log(response);
          if (response.status === "success") {
            return true;
          } else {
            this.$bus.$emit("messsage:push", response.record, "danger");
          }
        })
        .catch((err) => {});
      if (result) {
        this.$bus.$emit(
          "messsage:push",
          "Update Collection Success.",
          "success"
        );
        $("#SaveChangeModal").modal("hide");
      }
    },
  },
};
</script>

<style scoped lang="scss">
// a:not([href]):not([tabindex]) {
//   color: rgba(255, 255, 255, 0.9) !important;
// }
//@import '../assets/css/igroup.css';

.content-wrapper {
  padding-bottom: 40px;
}
</style>