
<template>
  <div id="app3">
    <!-- END MENU SIDEBAR WRAPPER -->
    <!-- TOP TOOLBAR WRAPPER -->

    <custom-header></custom-header>
    <!-- END TOP TOOLBAR WRAPPER -->
    <alert></alert>
    <div class="">
      <header class="page-header">
        <div class="d-flex align-items-center">
          <div class="mr-auto">
            <a @click="$back" class="btn-rounded-icon btn-primary mr-2 pointer"
              ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
            ></a>
            <h1 class="separator">{{ $t("collection") }}</h1>
            <span>{{ $t("create") }}</span>
          </div>
        </div>
      </header>
      <section class="page-content container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label>{{ $t("collection-name") }}</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter collection name"
                        id=""
                        v-model="collectionName"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>{{ $t("available-packages") }}</label>
                      <!-- <select
                          class="form-control"
                          id="s2_demo2"
                          v-model="pkgid"
                        >
                          <optgroup label="select package">
                            <option
                              v-for="pkg in pkgList"
                              :key="pkg.pkgid"
                              :value="pkg.pkgid"
                            >
                              {{ pkg.pkg_name }}
                            </option>
                          </optgroup>
                        </select> -->
                      <select2
                        id="s2_demo2"
                        class=""
                        :options="selectPkgList"
                        v-model="pkgid"
                        @select="mySelectEvent($event)"
                      >
                      </select2>
                      <!-- @select="mySelectEvent($event)" -->
                    </div>
                  </div>
                  <!-- <div class="col-12">
                                            <h6>Applicable course</h6>
                                            <p>
                                                101 English、102 English、103 English、104 English、105 English、106 English、107 English、108 English、109 English、110 English、111 English、112 English
                                            </p>
                                        </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="text-right pb-3">
              <button
                type="button"
                class="btn btn-primary btn-rounded btn-outline"
                data-toggle="modal"
                :data-target="
                  tempPkgName !== pkgname ? '#ClearTipsModal' : '#addMaterial'
                "
                @click="getPkgMaterial()"
              >
                <i class="la la-plus"></i>{{ $t("material") }}
              </button>
            </div>
            <div class="card">
              <h5 class="card-header">{{ $t("sequence") }}</h5>
              <div class="card-body">
                <div
                  style="max-height: 380px"
                  data-scroll="dark"
                  class="collection-scroll custom-scroll"
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
                        class="d-flex justify-content-between mb-2"
                        v-for="(m, index) in materialSequence"
                        :key="m.id"
                      >
                        <div
                          class="d-flex justify-content-start align-items-center"
                        >
                          <div class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </div>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i
                                class="fas fa-video"
                                v-if="m.type === 'video'"
                              ></i
                              ><i class="fas fa-book-open" v-else></i>
                            </span>
                            <img
                              v-lazy="
                                'https://lms.mangosteems.com/cms/resdl/cover/' +
                                m.resourceid
                              "
                              class="overlay-img"
                              alt="course image"
                            />
                          </div>
                          <div>
                            <span
                              class="badge badge-pill badge-secondary mt-2"
                              v-if="m.level !== ''"
                              >{{ $t("level") }} {{ m.level }}</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              <span v-if="m.unit !== ''">{{ m.unit }} - </span>
                              {{ m.resource_name }}
                            </h4>
                          </div>
                        </div>
                        <button
                          class="btn btn-nostyle btn-remove"
                          @click="removeFromSequence(index)"
                        >
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <!-- </transition-group> -->
                    </draggable>
                  </ul>
                </div>

                <!-- <div
                    class="bg-secondary text-center p-15 text-light rounded mb-2"
                  >
                    You can add materials in this list.
                  </div> -->
              </div>
            </div>
          </div>
          <div class="col-12 text-right">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline mr-2"
              data-toggle="modal"
              data-target="#ClearAndBackModal"
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
    <!-- <footer class="bg-secondary bg-dk d-flex justify-content-center">
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
            <p>{{ $t("would-you-like-to-save-your-collection") }}?</p>
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
              @click="setCollection()"
            >
              {{ $t("save") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 提示清空並返回上一頁 -->
    <div
      class="modal fade"
      id="ClearAndBackModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("message") }}</h5>
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
                $t("want-to-clear-the-list-and-go-back-to-the-previous-page")
              }}?
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
              @click="$back"
            >
              {{ $t("confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 提示清空 -->
    <div
      class="modal fade"
      id="ClearTipsModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("message") }}</h5>
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
                $t("change-packages-will-clear-the-current-collection-list")
              }}.
            </p>
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
              data-target="#addMaterial"
              @click="clearSequence()"
            >
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
              <strong class="ml-1">{{ pkgname }}</strong>
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
                :value="pkgm"
                :id="pkgm.resourceid"
                v-model="tempMaterial"
              />
              <label class="custom-control-label" :for="pkgm.resourceid">
                <span
                  class="badge badge-pill badge-secondary"
                  v-if="pkgm.level !== ''"
                  >{{ $t("level") }} {{ pkgm.level }}</span
                >
                <span v-if="pkgm.unit !== ''">{{ pkgm.unit }} - </span>
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
              @click="
                addtoSequence();
                tempPkgName = pkgname;
              "
            >
              <i class="la la-plus"></i>{{ $t("material") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import $ from "jquery";
import CustomHeader from "../components/CustomHeader";
import Select2 from "v-select2-component";
import Alert from "../components/AlertMessage";
import {
  ApiGetPkgList,
  ApiSetCollection,
  ApiGetPkgMaterial,
} from "../http/apis/Collection";
import _ from "lodash";
export default {
  name: "CollectionCreate",
  components: {
    CustomHeader,
    Select2,
    Alert,
    draggable,
  },
  data() {
    return {
      pkgList: [],
      selectPkgList: [],
      selectAllPM: "",
      pkgMaterialList: [],
      pkgid: "",
      pkgname: "",
      collectionName: "",
      tempMaterial: [],
      materialSequence: [],
      typeList: [
        { text: "All type", id: "all" },
        { text: "Picture Book", id: "book" },
        { text: "Video", id: "video" },
      ],
      seleceType: "all",
      tempSearch: "",
      searchRName: "",
      tempPkgName: "",
      defaultPkgName: "",
      tempCollectionName: "",
      //
      drag: false,
      selectSortType: "title_asc",
    };
  },
  created() {
    this.getPkgList();
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

  methods: {
    selectAll(event) {
      const vm = this;
      if (!event.currentTarget.checked) {
        vm.tempMaterial = [];
      } else {
        //實現全選
        vm.tempMaterial = [];
        vm.resourceFilter.forEach(function (item, i) {
          vm.tempMaterial.push(item);
        });
      }
    },
    clearSequence() {
      this.materialSequence = [];
      this.tempMaterial = [];
      this.tempPkgName = this.pkgname;
      $("#ClearTipsModal").modal("hide");
      $("#addMaterial").modal("show");
    },
    getPkgList() {
      let vm = this;
      ApiGetPkgList.get(this.userid).then((response) => {
        this.pkgList = response.record;
        this.pkgid = response.record[0].pkgid;
        if (this.$route.params.pkgid !== undefined) {
          vm.pkgid = vm.$route.params.pkgid;
        }
        this.selectPkgList = response.record.map((o, index) => {
          if (index === 0) {
            this.pkgname = o.pkg_name;
            this.tempPkgName = o.pkg_name;
            this.defaultPkgName = o.pkg_name;
          }
          return { id: o.pkgid, text: o.pkg_name };
        });
      });
    },
    getPkgMaterial() {
      console.log(this.pkgid);
      ApiGetPkgMaterial.get(this.pkgid)
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
    mySelectEvent({ id, text }) {
      if (this.materialSequence.length === 0) {
        this.tempPkgName = text;
      }
      this.pkgname = text;
    },
    addtoSequence() {
      this.materialSequence = this.tempMaterial;
    },
    removeFromSequence(index) {
      this.materialSequence.splice(index, 1);
    },
    setCollection() {
      if (
        this.collectionName === "" ||
        this.collectionName === undefined ||
        this.collectionName === null
      ) {
        this.$bus.$emit(
          "messsage:push",
          "Collection name cannot be a null value.",
          "danger"
        );
        $("#SaveChangeModal").modal("hide");
        return;
      }
      let obj = {};
      let resourceList = [];
      obj.collection_name = this.collectionName;
      obj.pkgid = this.pkgid;
      obj.list = [];
      this.materialSequence.forEach((item) => {
        obj.list.push(item.resourceid);
      });
      obj.resource = obj.list.join(";");
      obj.userid = this.userid;
      ApiSetCollection.post(obj)
        .then((response) => {
          if (response.status === "success") {
            this.$bus.$emit(
              "messsage:push",
              "New Collection Success.",
              "success"
            );
          } else {
            if (response.record === "duplicate collection name") {
              this.$bus.$emit(
                "messsage:push",
                "The collection name already exists, if you want to edit it, please go to the edit page.",
                "danger"
              );
            } else {
              this.$bus.$emit("messsage:push", "Unknown error.", "danger");
            }
          }
        })
        .catch((err) => {});
      $("#SaveChangeModal").modal("hide");
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay-wrap .overlay-icon i {
  color: #fff !important;
}

.cus-img {
  max-height: 90%;
  max-width: 90%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>