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
                          value="First grage"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>Default Select</label>
                        <select class="form-control" id="s2_demo2" disabled>
                          <optgroup label="select package">
                            <option selected>First grage</option>
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
                        101 English、102 English、103 English、104 English、105
                        English、106 English、107 English、108 English、109
                        English、110 English、111 English、112 English
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
                    style="max-height: 600px;"
                    data-scroll="dark"
                    class="collection-scroll"
                  >
                    <ul class="sequence">
                      <li class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                          <button class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </button>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i class="fas fa-video"></i
                            ></span>
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
                            <span class="badge badge-pill badge-secondary mt-2"
                              >Category</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              Unit5 Conversation
                            </h4>
                          </div>
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                          <button class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </button>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i class="fas fa-book-open"></i
                            ></span>
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
                              class="badge badge-pill badge-secondary mt-2 mr-2"
                              >Lavel J</span
                            ><span class="badge badge-pill badge-secondary mt-2"
                              >Topic A</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              A Pocket Park for Tiny
                            </h4>
                          </div>
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                          <button class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </button>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i class="fas fa-video"></i
                            ></span>
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
                            <span class="badge badge-pill badge-secondary mt-2"
                              >Category</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              Unit5 Conversation
                            </h4>
                          </div>
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                          <button class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </button>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i class="fas fa-book-open"></i
                            ></span>
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
                              class="badge badge-pill badge-secondary mt-2 mr-2"
                              >Lavel J</span
                            ><span class="badge badge-pill badge-secondary mt-2"
                              >Topic A</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              A Pocket Park for Tiny
                            </h4>
                          </div>
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                          <button class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </button>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i class="fas fa-video"></i
                            ></span>
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
                            <span class="badge badge-pill badge-secondary mt-2"
                              >Category</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              Unit5 Conversation
                            </h4>
                          </div>
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                          <button class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </button>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i class="fas fa-book-open"></i
                            ></span>
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
                              class="badge badge-pill badge-secondary mt-2 mr-2"
                              >Lavel J</span
                            ><span class="badge badge-pill badge-secondary mt-2"
                              >Topic A</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              A Pocket Park for Tiny
                            </h4>
                          </div>
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                          <button class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </button>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i class="fas fa-video"></i
                            ></span>
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
                            <span class="badge badge-pill badge-secondary mt-2"
                              >Category</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              Unit5 Conversation
                            </h4>
                          </div>
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start">
                          <button class="btn btn-nostyle btn-move mr-3">
                            <i class="la la-ellipsis-v"></i
                            ><i class="la la-ellipsis-v"></i>
                          </button>
                          <div
                            class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                          >
                            <span class="overlay-icon"
                              ><i class="fas fa-book-open"></i
                            ></span>
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
                              class="badge badge-pill badge-secondary mt-2 mr-2"
                              >Lavel J</span
                            ><span class="badge badge-pill badge-secondary mt-2"
                              >Topic A</span
                            >
                            <h4 class="d-flex align-self-center mt-2">
                              A Pocket Park for Tiny
                            </h4>
                          </div>
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                    </ul>
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
              <strong>First grage</strong>
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
            <div class="custom-control custom-checkbox form-check pb-2">
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
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck3"
              />
              <label class="custom-control-label" for="customCheck3"
                >Unit 10 FAVORITE SPORT</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck4"
              />
              <label class="custom-control-label" for="customCheck4"
                >Alistair's Night</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck5"
              />
              <label class="custom-control-label" for="customCheck5"
                >The Three Little Pigs</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck6"
              />
              <label class="custom-control-label" for="customCheck6"
                >Broken Arm Blues</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck7"
              />
              <label class="custom-control-label" for="customCheck7"
                >A Pocket Park for Tiny</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
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
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck3"
              />
              <label class="custom-control-label" for="customCheck3"
                >Unit 10 FAVORITE SPORT</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck4"
              />
              <label class="custom-control-label" for="customCheck4"
                >Alistair's Night</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck5"
              />
              <label class="custom-control-label" for="customCheck5"
                >The Three Little Pigs</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck6"
              />
              <label class="custom-control-label" for="customCheck6"
                >Broken Arm Blues</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck7"
              />
              <label class="custom-control-label" for="customCheck7"
                >A Pocket Park for Tiny</label
              >
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
            <button type="button" class="btn btn-primary btn-rounded">
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
// import Menu
export default {
  name: "CollectionDetail",
  components: {
    CustomHeader,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="scss">
// a:not([href]):not([tabindex]) {
//   color: rgba(255, 255, 255, 0.9) !important;
// }
//@import '../assets/css/igroup.css';
</style>