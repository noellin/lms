<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <menu-left></menu-left>

        <div class="main-content">
          <header class="page-header">
            <div class="d-flex align-items-center">
              <div class="mr-auto">
                <h1 class="separator">201 ENGLISH</h1>
                <span>Assignment</span>
                <p class="second-title">Second grage</p>
              </div>
            </div>
          </header>
          <section class="page-content container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Assigned date</th>
                            <th>Due</th>
                            <th>For</th>
                            <th>Completed ／Total students</th>
                            <th>Degree of difficulty</th>
                            <th>Preview</th>
                            <th>Check progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="pl-5">
                              <i class="ig-notice"></i>2020.07.01
                            </td>
                            <td>2020.07.07</td>
                            <td>All students</td>
                            <td>47 ／50</td>
                            <td>5</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#PreviewModel"
                              >
                                <i class="la la-eye"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                @click="gotoProgress()"
                                class="btn btn-primary btn-sm btn-rounded text-white"
                                >Progress view</a
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="pl-5">
                              <i class="ig-notice"></i>2020.06.20
                            </td>
                            <td>2020.06.30</td>
                            <td>Anna、Tom...</td>
                            <td>2 ／3</td>
                            <td>2</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#PreviewModel"
                              >
                                <i class="la la-eye"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                href="assignments-progress.html"
                                class="btn btn-primary btn-sm btn-rounded"
                                >Progress view</a
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="pl-5">2020.06.24</td>
                            <td>2020.07.01</td>
                            <td>All students</td>
                            <td>47 ／50</td>
                            <td>5</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#PreviewModel"
                              >
                                <i class="la la-eye"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                href="assignments-progress.html"
                                class="btn btn-primary btn-outline btn-sm btn-rounded"
                                >Record view</a
                              >
                            </td>
                          </tr>
                          <tr>
                            <td class="pl-5">2020.06.17</td>
                            <td>2020.07.01</td>
                            <td>All students</td>
                            <td>50 ／50</td>
                            <td>4</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#PreviewModel"
                              >
                                <i class="la la-eye"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                href="assignments-progress.html"
                                class="btn btn-primary btn-outline btn-sm btn-rounded"
                                >Record view</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="col-12">
                        <div
                          class="dataTables_paginate paging_simple_numbers"
                          id="recent-transaction-table_paginate"
                        >
                          <ul class="pagination d-flex justify-content-end">
                            <li
                              class="paginate_button page-item previous disabled"
                              id="recent-transaction-table_previous"
                            >
                              <a
                                href="#"
                                aria-controls="recent-transaction-table"
                                data-dt-idx="0"
                                tabindex="0"
                                class="page-link"
                                >Prev</a
                              >
                            </li>
                            <li class="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="recent-transaction-table"
                                data-dt-idx="1"
                                tabindex="0"
                                class="page-link"
                                >1</a
                              >
                            </li>
                            <li class="paginate_button page-item">
                              <a
                                href="#"
                                aria-controls="recent-transaction-table"
                                data-dt-idx="2"
                                tabindex="0"
                                class="page-link"
                                >2</a
                              >
                            </li>
                            <li class="paginate_button page-item">
                              <a
                                href="#"
                                aria-controls="recent-transaction-table"
                                data-dt-idx="3"
                                tabindex="0"
                                class="page-link"
                                >3</a
                              >
                            </li>
                            <li
                              class="paginate_button page-item next"
                              id="recent-transaction-table_next"
                            >
                              <a
                                href="#"
                                aria-controls="recent-transaction-table"
                                data-dt-idx="4"
                                tabindex="0"
                                class="page-link"
                                >Next</a
                              >
                            </li>
                          </ul>
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
      <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer>
    </div>

    <!-- END CONTENT WRAPPER -->
    <!-- Setting MODAL -->
    <div
      class="modal fade"
      id="PreviewModel"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">List preview</h5>
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
            <div class="mb-3">
              <div class="row pb-2 pt-2">
                <h6 class="col-3 text-right">Date</h6>
                <div class="col-9">2020.05.25</div>
              </div>
              <div class="row pb-2">
                <h6 class="col-3 text-right">Students</h6>
                <div class="col-9">Anna、Tom、Vivien...</div>
              </div>
            </div>
            <div class="bg-light rounded">
              <ul class="sequence">
                <li class="border bg-white rounded">
                  <div class="mr-3">
                    <span class="badge badge-pill badge-primary">Reading</span>
                    A Pocket Park for Tiny
                  </div>
                </li>
                <li class="border bg-white rounded">
                  <div class="mr-3">
                    <span class="badge badge-pill badge-warning">Watching</span>
                    Unit4 NUMBER RUMBA SONG
                  </div>
                </li>
                <li class="border bg-white rounded">
                  <div class="mr-3">
                    <span class="badge badge-pill badge-accent"
                      >Speaking Quiz</span
                    >
                    Unit4 NUMBER RUMBA SONG
                  </div>
                </li>
              </ul>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomHeader from "../components/CustomHeader";
import MenuLeft from "../components/MenuLeft";
export default {
  name: "CourseAssignment",
  components: {
    CustomHeader,
    MenuLeft,
  },
  data() {
    return {};
  },

  methods: {
    gotoProgress() {
      this.$router.push({
        path:
          "/course_assignment/course=301 English/type=Assignment/assignment=1234567",
      });
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>