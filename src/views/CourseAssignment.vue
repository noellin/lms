<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <nav class="top-toolbar navbar navbar-mobile navbar-tablet">
        <ul class="navbar-nav nav-left">
          <li class="nav-item">
            <a href="javascript:void(0)" data-toggle-state="aside-left-open">
              <i class="icon dripicons-align-left"></i>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav nav-center site-logo">
          <li>
            <a href="course-list.html">
              <span class="brand-text">School Name</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav nav-right">
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              data-toggle-state="mobile-topbar-toggle"
            >
              <i class="icon dripicons-dots-3 rotate-90"></i>
            </a>
          </li>
        </ul>
      </nav>
      <nav class="top-toolbar navbar navbar-desktop flex-nowrap">
        <ul class="navbar-nav nav-left">
          <div class="">
            <ul class="site-logo">
              <!-- <li class="nav-item">
                                <a href="course-list.html">
                                    <div class="logo">
                                        <img src="../assets/img/avatars/logo_light.png" alt="" style="max-height:35px; max-width: 190px;">
                                    </div>
                                </a>
                            </li> -->
              <li class="nav-item">
                <a href="course-list.html" title=""
                  ><span class="brand-text">School Name</span></a
                >
              </li>
            </ul>
            <ul class="navbar-nav nav-left">
              <li class="nav-item nav-text active">
                <a href="course-list.html">
                  Course
                </a>
              </li>
              <li class="nav-item nav-text">
                <a href="collection-list.html">
                  Collection
                </a>
              </li>
              <li class="nav-item nav-text">
                <a href="teacher-account-list.html">
                  Account
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <ul class="navbar-nav nav-right">
          <li class="nav-item dropdown">
            <a
              class="nav-link nav-pill user-avatar"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="../assets/img/avatars/user.png"
                class="w-40 rounded-circle"
                alt="Albert Einstein"
              />
              <!-- <span class="text-white">Amanda</span> -->
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-accout">
              <div class="dropdown-header pb-3">
                <h5 class="mt-0 mb-0">Amanda</h5>
                <span>support@authenticgoods.co</span>
              </div>
              <a class="dropdown-item" href="teacher-account-personal.html"
                ><i class="icon dripicons-user"></i> My account</a
              >
              <a class="dropdown-item" href="#"
                ><i class="icon dripicons-lock-open"></i> Log Out</a
              >
            </div>
          </li>
        </ul>
      </nav>
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
                            <th>
                              Assigned date
                            </th>
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
                                href="assignments-progress.html"
                                class="btn btn-primary btn-sm btn-rounded"
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
                <div class="col-9">
                  2020.05.25
                </div>
              </div>
              <div class="row pb-2">
                <h6 class="col-3 text-right">Students</h6>
                <div class="col-9">
                  Anna、Tom、Vivien...
                </div>
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

  methods: {},
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>