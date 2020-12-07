<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-center">
            <div class="mr-auto">
              <h1 class="separator">Collection</h1>
              <span>Edit</span>
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
                        <label>Collection name</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Enter collection name"
                          v-model="cName"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>Default Select</label>
                        <select class="form-control" id="s2_demo2" disabled>
                          <optgroup label="select package">
                            <option selected>{{ pName }}</option>
                            <option>Second grage</option>
                            <option>Third grage</option>
                            <option>Fourth grage</option>
                            <option>Summer class special</option>
                            <option>Winter class special</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <h6>Applicable course</h6>
                      <p>
                        <span
                          v-for="(course, index) in courseList"
                          :key="index + course"
                          >{{ course }}
                          <span v-if="index + 1 < courseList.length">、</span>
                        </span>
                        <!-- 101 English、102 English、103 English、104 English、105
                        English、106 English、107 English、108 English、109
                        English、110 English、111 English、112 English -->
                      </p>
                    </div>
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
                  data-target="#addMaterial"
                >
                  <i class="la la-plus"></i>Material
                </button>
              </div>
              <div class="card">
                <h5 class="card-header">Sequence</h5>
                <div class="card-body">
                  <div
                    style="max-height: 600px"
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
                          v-for="(cr, index) in materialSequence"
                          :key="cr.resourceid"
                        >
                          <div class="d-flex justify-content-start">
                            <div class="btn btn-nostyle btn-move mr-3">
                              <i class="la la-ellipsis-v"></i
                              ><i class="la la-ellipsis-v"></i>
                            </div>
                            <div
                              class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                            >
                              <span class="overlay-icon">
                                <i
                                  class="fas fa-video"
                                  v-if="cr.note === 'video'"
                                ></i
                                ><i class="fas fa-book-open" v-else></i>
                              </span>
                              <div
                                href="#"
                                title=""
                                class="overlay-img"
                                style="
                                  background-image: url(../assets/img/avatars/3.jpg);
                                "
                              ></div>
                            </div>
                            <div>
                              <span
                                class="badge badge-pill badge-secondary mt-2"
                              ></span>
                              <h4 class="d-flex align-self-center mt-2">
                                {{ cr.resource_name }}
                              </h4>
                            </div>
                          </div>
                          <button
                            class="btn btn-nostyle btn-remove"
                            data-toggle="modal"
                            data-target="#deleteModal"
                            @click="
                              tempRname = cr.resource_name;
                              tempRid = cr.resourceid;
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
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary btn-rounded"
                data-toggle="modal"
                data-target="#SaveChangeModal"
              >
                Save
              </button>
            </div>
          </div>
        </section>
      </div>
      <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer>
    </div>

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
            <h5 class="modal-title">Save change</h5>
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
            <p>Would you like to save your changes?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="updateCollection()"
            >
              Save
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
            <h5 class="modal-title">No course</h5>
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
              Courses that can use this collection have expired.<br />
              If you want to continue using, you must renew the contract.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline mr-2"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary btn-rounded">
              Save
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
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Material
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
              <span class="text-muted">package</span>
              <strong class="ml-1">{{ pName }}</strong>
            </h6>
            <div class="row">
              <div class="col-6">
                <div class="form-group form-rounded">
                  <select2
                    id="s2_demo1"
                    :options="typeList"
                    v-model="seleceType"
                  >
                  </select2>
                </div>
              </div>
              <div class="col-6">
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
                      <button
                        class="btn btn-secondary btn-outline btn-icon btn-rounded"
                        type="button"
                        @click="searchRName = tempSearch"
                      >
                        <i class="zmdi zmdi-search text-secondary"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body" data-scroll="dark">
            <div
              class="custom-control custom-checkbox form-check pb-2"
              v-for="pkgm in resourceFilter"
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
              <label class="custom-control-label" :for="pkgm.resourceid">{{
                pkgm.resource_name
              }}</label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="addtoSequence()"
            >
              <i class="la la-plus"></i>Material
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
            <h5 class="modal-title">Delete</h5>
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
              Confirm to delete Resource：<strong>{{ tempRname }}</strong
              >?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="removeFromSequence(tempIndex)"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import CustomHeader from "../components/CustomHeader";
import {
  ApiGetCollectionContent,
  ApiDeleteResource,
  ApiGetCollectionInfo,
  ApiGetPkgMaterial,
  ApiUpdateCollection,
} from "../http/apis/Collection";
// import Menu
export default {
  name: "CollectionDetail",
  components: {
    CustomHeader,
    draggable,
  },
  data() {
    return {
      cName: "",
      pName: "",
      tempRname: "",
      tempRid: "",
      tempIndex: 0,
      pkgMaterialList: [],
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
    };
  },
  computed: {
    //
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
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .all([
          this.getCollectionContent(),
          this.getCollectionInfo(),
          this.getPkgMaterial(),
        ])
        .then(this.axios.spread((func1, func2) => {}))
        .catch((err) => {});
      this.cName = this.$route.params.cname;
    },
    getCollectionContent() {
      return ApiGetCollectionContent.get(this.userid, this.$route.params.cid)
        .then((response) => {
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
          this.pkgMaterialList = response.record;
        })
        .catch((err) => {});
    },
    removeFromSequence(index) {
      this.materialSequence.splice(index, 1);
    },
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
      obj.collection_name = this.cName;
      obj.pkgid = this.pkgid;
      obj.list = [];
      this.materialSequence.forEach((item) => {
        obj.list.push(item.resourceid);
      });
      obj.resource = obj.list.join(";");
      obj.userid = this.userid;
      let result = await ApiUpdateCollection.put(this.colid, obj)
        .then((response) => {
          if (response.status === "success") {
            return true;
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
</style>