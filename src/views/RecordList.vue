<template>
  <div>
    <div id="app">
      <!-- END MENU SIDEBAR WRAPPER -->
      <div class="content-wrapper">
        <!-- TOP TOOLBAR WRAPPER -->
        <!-- END TOP TOOLBAR WRAPPER -->
        <div class="content page-aside-left">
          <div class="main-content">
            <course-header></course-header>
            <section class="page-content container-fluid">
              <div class="row pb-3">
                <div class="col-12 text-right">
                  <a
                    data-toggle="modal"
                    data-target="#InsufficientQuotaModal"
                    class="btn btn-primary btn-outline btn-rounded"
                    @click="gotoGreateWQuiz()"
                    >Create Extra Quiz
                    <span class="badge badge-primary">52</span></a
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Publish</th>
                              <th>Due</th>
                              <th>Author</th>
                              <th>Completed ／Total students</th>
                              <th>Action</th>
                              <th>Check progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td>2020.09.07</td>
                              <td>2020.09.11</td>
                              <td>System</td>
                              <td>0 ／50</td>
                              <td>
                                <button
                                  class="btn btn-nostyle"
                                  data-toggle="modal"
                                  data-target="#EditModal"
                                >
                                  <i class="la la-edit"></i>
                                </button>
                              </td>
                              <td>
                                <button
                                  type=""
                                  class="btn btn-primary btn-sm btn-rounded"
                                  onclick="location.href='speaking-record-progress.html'"
                                  disabled
                                >
                                  Progress view
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span
                                  class="badge badge-pill badge-secondary mt-2"
                                  >Extra</span
                                >
                              </td>
                              <td>2020.09.04</td>
                              <td>2020.09.06</td>
                              <td>Diana</td>
                              <td>0 ／50</td>
                              <td>
                                <button
                                  class="btn btn-nostyle"
                                  data-toggle="modal"
                                  data-target="#EditModal"
                                >
                                  <i class="la la-edit"></i>
                                </button>
                              </td>
                              <td>
                                <button
                                  type=""
                                  class="btn btn-primary btn-sm btn-rounded"
                                  onclick="location.href='speaking-record-progress.html'"
                                  disabled
                                >
                                  Progress view
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>2020.08.31</td>
                              <td>2020.09.04</td>
                              <td>Diana</td>
                              <td>50 ／50</td>
                              <td>
                                <button
                                  type=""
                                  class="btn btn-nostyle"
                                  data-toggle="modal"
                                  data-target="#PreviewModal"
                                >
                                  <i class="la la-eye display-6"></i>
                                </button>
                              </td>
                              <td>
                                <button
                                  type=""
                                  class="btn btn-primary btn-sm btn-rounded"
                                  @click="gotoWQProgress()"
                                >
                                  Progress view
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span
                                  class="badge badge-pill badge-secondary mt-2"
                                  >Extra</span
                                >
                              </td>
                              <td>2020.08.28</td>
                              <td>2020.08.30</td>
                              <td>Diana</td>
                              <td>50 ／50</td>
                              <td>
                                <button
                                  type=""
                                  class="btn btn-nostyle"
                                  data-toggle="modal"
                                  data-target="#ExtraquizModal"
                                >
                                  <i class="la la-eye display-6"></i>
                                </button>
                              </td>
                              <td>
                                <button
                                  type=""
                                  class="btn btn-primary btn-sm btn-rounded"
                                  onclick="location.href='speaking-record-progress.html'"
                                >
                                  Progress view
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer class="bg-secondary bg-dk d-flex justify-content-center">
          <p class="text-light mt-2 mb-2">© iGroup LMS</p>
        </footer>
      </div>
    </div>
    <!-- END CONTENT WRAPPER -->
    <!-- Extra quiz MODAL -->
    <div
      class="modal fade"
      id="ExtraquizModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Extra quiz</h5>
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
                <label class="col-form-label text-right col-sm-3"
                  >Question</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="Her favourite colour is pink and her superpower is data processing."
                    disabled
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-right"
                  >Publish</label
                >
                <div class="col">
                  <input
                    type="text"
                    class="form-control date-picker-input"
                    placeholder="Select Date"
                    value="2020.08.24"
                    disabled
                  />
                </div>
                <div class="col-2 pt-2 pl-0">06:00:00</div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-right">Due</label>
                <div class="col">
                  <input
                    type="text"
                    class="form-control date-picker-input"
                    placeholder="Select Date"
                    value="2020.08.28"
                    disabled
                  />
                </div>
                <div class="col-2 pt-2 pl-0">23:59:59</div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Insufficient Quota Modal -->
    <div
      class="modal fade"
      id="InsufficientQuotaModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Insufficient quota</h5>
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
              Extra Quiz quota is based on the package contract. If you need to
              use Extra Quiz, please purchase separately?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Edit Quota Modal -->
    <div
      class="modal fade"
      id="EditModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <span class="text-secondary">Publish</span>
              <strong>2020.09.07</strong> 06:00:00 -
              <span class="text-secondary">Due</span>
              <strong>2020.09.11</strong> 23:59:59
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
            <p>
              The questions of the weekly quiz are selected by the system based
              on material. You can also enter the question yourself.
            </p>
            <div class="custom-control custom-radio form-check">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1"
                >She likes maths and science.</label
              >
            </div>
            <div class="custom-control custom-radio form-check">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="custom-control-input"
                checked
              />
              <label
                class="custom-control-label"
                for="customRadio2"
                style="display: block; height: auto"
              >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Please enter a question of the weekly quiz..."
                  rows="3"
                ></textarea>
              </label>
            </div>
            <p class="text-muted text-right"><small>0/100</small></p>
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
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Preview Modal -->
    <div
      class="modal fade"
      id="PreviewModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <span class="text-secondary">Publish</span>
              <strong>2020.09.07</strong> 06:00:00 -
              <span class="text-secondary">Due</span>
              <strong>2020.09.11</strong> 23:59:59
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
            <p>
              The questions of the weekly quiz are selected by the system based
              on material. You can also enter the question yourself.
            </p>
            <div class="custom-control custom-radio form-check">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1"
                >She likes maths and science.</label
              >
            </div>
            <div class="custom-control custom-radio form-check">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="custom-control-input"
                checked
              />
              <label
                class="custom-control-label"
                for="customRadio2"
                style="display: block; height: auto"
              >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Please enter a question of the weekly quiz..."
                  rows="3"
                >
Her favourite colour is pink and her superpower is data processing.</textarea
                >
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseHeader from "../components/CourseHeader";
export default {
  components: {
    CourseHeader,
  },
  data() {
    return {};
  },
  methods: {
    gotoGreateWQuiz() {
      this.$router.push({
        path: "/course_weekly_quiz/create/course=BBC/type=Weekly quiz/123456",
      });
    },
    gotoWQProgress() {
      this.$router.push({
        path: "/course_weekly_quiz/progress/course=BBC/type=Weekly quiz/123456",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>