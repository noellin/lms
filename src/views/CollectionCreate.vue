
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
                  <div class="bg-secondary text-center p-15 text-light rounded">
                    You can add materials in this list.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 text-right">
              <button
                type="button"
                class="btn btn-secondary btn-rounded btn-outline"
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
              <strong class="ml-1">{{ pkgname }}</strong>
            </h6>
            <div class="row">
              <div class="col-6">
                <div class="form-group form-rounded">
                  <select class="form-control" id="s2_demo1">
                    <option>All type</option>
                    <option>Picture Book</option>
                    <option>Video</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group form-rounded">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-secondary btn-outline btn-icon btn-rounded"
                        type="button"
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
              v-for="pkgm in pkgMaterialList"
              :key="pkgm.resourceid"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                :id="pkgm.resourceid"
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
import CustomHeader from "../components/CustomHeader";
import Select2 from "v-select2-component";
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
  },
  data() {
    return {
      pkgList: [],
      selectPkgList: [],
      pkgMaterialList: [],
      pkgid: "",
      pkgname: "",
    };
  },
  created() {
    this.getPkgList();
  },
  computed: {
    userid() {
      return this.$store.state.auth.userid;
    },
  },

  methods: {
    getPkgList() {
      ApiGetPkgList.get(this.userid).then((response) => {
        this.pkgList = response.record;
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
    addtoSequence() {},
  },
};
</script>

<style lang="scss" scoped>
</style>