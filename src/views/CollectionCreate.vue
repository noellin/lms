
<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->

      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <alert></alert>
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-center">
            <div class="mr-auto">
              <h1 class="separator">Collection</h1>
              <span>Create</span>
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
                          id=""
                          v-model="collectionName"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>Default Select</label>
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
                  data-target="#addMaterial"
                  @click="getPkgMaterial()"
                >
                  <i class="la la-plus"></i>Material
                </button>
              </div>
              <div class="card">
                <h5 class="card-header">Sequence</h5>
                <div class="card-body">
                  <li
                    class="d-flex justify-content-between"
                    v-for="(m, index) in materialSequence"
                    :key="m.id"
                  >
                    <div class="d-flex justify-content-start">
                      <button class="btn btn-nostyle btn-move mr-3">
                        <i class="la la-ellipsis-v"></i
                        ><i class="la la-ellipsis-v"></i>
                      </button>
                      <div
                        class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                      >
                        <span class="overlay-icon"
                          ><i class="fas fa-video" v-if="m.type === 'video'"></i
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
              @click="setCollection()"
            >
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
              <strong class="ml-1">{{ pkgname }}</strong>
            </h6>
            <div class="row">
              <div class="col-6">
                <div class="form-group form-rounded">
                  <!-- <select
                    class="form-control"
                    id="s2_demo1"
                    v-model="seleceType"
                  >
                    <option
                      v-for="type in typeList"
                      :key="type.value"
                      :value="type.value"
                    >
                      {{ type.text }}
                    </option>
                  </select> -->
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
                :value="pkgm"
                :id="pkgm.resourceid"
                v-model="tempMaterial"
              />
              <label class="custom-control-label" :for="pkgm.resourceid">{{
                pkgm.resource_name
              }}</label>
            </div>
            <!-- <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1"
                >Unit 8 MY FRIENDS</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck2"
              />
              <label class="custom-control-label" for="customCheck2"
                >Unit 9 MY FAMILY</label
              >
            </div> -->
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
  </div>
</template>

<script>
import $ from "jquery";
import CustomHeader from "../components/CustomHeader";
import Select2 from "v-select2-component";
import Alert from "../components/AlertMessage";
import {
  ApiGetPkgList,
  ApiSetCollection,
  ApiGetPkgMaterial,
} from "../http/apis/Collection";
export default {
  name: "CollectionCreate",
  components: {
    CustomHeader,
    Select2,
    Alert,
  },
  data() {
    return {
      pkgList: [],
      selectPkgList: [],
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
    };
  },
  created() {
    this.getPkgList();
  },
  computed: {
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

  methods: {
    getPkgList() {
      ApiGetPkgList.get(this.userid).then((response) => {
        this.pkgList = response.record;
        this.pkgid = response.record[0].pkgid;

        this.selectPkgList = response.record.map((o) => {
          return { id: o.pkgid, text: o.pkg_name };
        });
      });
    },
    getPkgMaterial() {
      ApiGetPkgMaterial.get(this.pkgid)
        .then((response) => {
          this.pkgMaterialList = response.record;
        })
        .catch((err) => {});
    },
    mySelectEvent({ id, text }) {
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
      console.log("ff");
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
        .then((response) => {})
        .catch((err) => {});
      this.$bus.$emit("messsage:push", "New Collection Success.", "success");
      $("#SaveChangeModal").modal("hide");
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay-wrap .overlay-icon i {
  color: #fff !important;
}
</style>