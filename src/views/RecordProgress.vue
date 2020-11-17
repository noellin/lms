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
              <div class="d-flex justify-content-between">
                <div class="pb-3">
                  <div class="form-row">
                    <div class="form-group form-rounded mb-0 mr-3">
                      <select class="form-control" id="s2_demo2">
                        <option>All students</option>
                        <option>Incomplete</option>
                        <option>Conplete</option>
                      </select>
                    </div>
                    <div class="form-group form-rounded mb-0">
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
              <!--  -->
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <p>
                        The questions of the weekly quiz are selected by the
                        system based on material. You can also enter the
                        question yourself.
                      </p>
                      <div class="custom-control p-0">
                        <!-- <input
                          type="radio"
                          id="customRadio2"
                          name="customRadio"
                          class="custom-control-input"
                          checked
                        /> -->
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Please enter a question of the weekly quiz..."
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>Student name</th>
                              <th>Score</th>
                              <th>Record</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Aaron</td>
                              <td>89</td>
                              <td>
                                <button class="btn btn-nostyle">
                                  <i
                                    class="zmdi zmdi-volume-up zmdi-hc-fw ml-2 text-primary"
                                  ></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Alexander</td>
                              <td></td>
                              <td>Incomplete</td>
                            </tr>
                            <tr>
                              <td>Alice</td>
                              <td>78</td>
                              <td>
                                <button class="btn btn-nostyle">
                                  <i
                                    class="zmdi zmdi-volume-up zmdi-hc-fw ml-2 text-secondary"
                                  ></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Aurora</td>
                              <td></td>
                              <td>Incomplete</td>
                            </tr>
                            <tr>
                              <td>Aurora</td>
                              <td>Rating...</td>
                              <td>
                                <button class="btn btn-nostyle">
                                  <i
                                    class="zmdi zmdi-volume-up zmdi-hc-fw ml-2 text-secondary"
                                  ></i>
                                </button>
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
};
</script>

<style lang="scss" scoped>
</style>