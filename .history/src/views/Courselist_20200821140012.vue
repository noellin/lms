<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <Header></Header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-start">
            <div class="mr-auto">
              <h1>Course</h1>
            </div>
          </div>
        </header>
        <section class="page-content container-fluid">
          <div class="row pb-3">
            <div class="col-12">
              <div class="form-row">
                <div class="form-group form-rounded mb-0 mr-3">
                  <select class="form-control" id="s2_demo1" v-model="selectedTeacher">
                    <option v-for="teacher in teacherList" :key="teacher">{{teacher}</option>
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
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <ul class="nav nav-tabs">
                    <li class="nav-item" role="presentation">
                      <a
                        href="#tab-1"
                        class="nav-link active show"
                        data-toggle="tab"
                        aria-expanded="true"
                        >Active</a
                      >
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        href="#tab-2"
                        class="nav-link"
                        data-toggle="tab"
                        aria-expanded="true"
                        >Expired</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fadeIn active" id="tab-1">
                      <!-- No courses -->
                      <!--   <div class="bg-secondary text-center p-15 text-light rounded">
                                             No courses
                                        </div> -->
                      <!-- end No courses -->
                      <table
                        id="bs4-table"
                        class="table table-striped"
                        style="width: 100%;"
                      >
                        <thead>
                          <tr>
                            <th>Course name</th>
                            <th>Teacher</th>
                            <th>Active student／Limit</th>
                            <th>Package</th>
                            <th>Expiry date</th>
                            <th>Edit</th>
                            <th>Checking assignment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="1" class="text-left">
                              <button
                                type=""
                                class="btn btn-primary btn-rounded btn-sm"
                                data-toggle="modal"
                                data-target="#editModal"
                              >
                                Setting
                              </button>
                            </td>
                            <td colspan="1" class="text-left">
                              <button
                                type=""
                                class="btn btn-primary btn-rounded btn-sm"
                                data-toggle="modal"
                                data-target="#editModal"
                              >
                                Setting
                              </button>
                            </td>
                            <td>
                              <span class="text-muted"
                                ><button
                                  type=""
                                  class="btn btn-primary btn-rounded btn-sm"
                                  data-toggle="modal"
                                  data-target="#AddStudentModal"
                                >
                                  Add student
                                </button></span
                              >／50
                            </td>
                            <td>Third grage</td>
                            <td>2020/10/30</td>
                            <td>
                              <button
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#editModal"
                              >
                                <i class="la la-edit"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                href="assignments-progress.html"
                                class="btn btn-primary btn-rounded btn-sm"
                                disabled
                                >Checking</a
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="course-material-list.html">301 中文課</a>
                            </td>
                            <td>王小明</td>
                            <td>47／50</td>
                            <td>中文三</td>
                            <td>2020/08/30</td>
                            <td>
                              <button
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#editModal"
                              >
                                <i class="la la-edit"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                href="assignments-progress.html"
                                class="btn btn-primary btn-rounded btn-sm btn-message"
                                >Checking</a
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="course-material-list.html"
                                >302 English</a
                              >
                            </td>
                            <td>Amanda</td>
                            <td>43／50</td>
                            <td>Third grage</td>
                            <td>
                              <span class="text-danger">2020/07/30 </span
                              ><span class="badge badge-pill badge-secondary"
                                >expiring</span
                              >
                            </td>
                            <td>
                              <button
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#editModal"
                              >
                                <i class="la la-edit"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                href="assignments-progress.html"
                                class="btn btn-primary btn-rounded btn-sm"
                                >Checking</a
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="course-material-list.html">302 中文課</a>
                            </td>
                            <td>王小明</td>
                            <td>43／50</td>
                            <td>中文三</td>
                            <td>
                              <span class="text-danger">2020/07/30 </span
                              ><span class="badge badge-pill badge-secondary"
                                >expiring</span
                              >
                            </td>
                            <td>
                              <button
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#editModal"
                              >
                                <i class="la la-edit"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                href="assignments-progress.html"
                                class="btn btn-primary btn-rounded btn-sm"
                                >Checking</a
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
                    <div class="tab-pane fadeIn" id="tab-2">
                      <table
                        id="bs4-table"
                        class="table table-striped table-bordered"
                        style="width: 100%;"
                      >
                        <thead>
                          <tr>
                            <th>Course name</th>
                            <th>Teacher</th>
                            <th>Active student／Limit</th>
                            <th>Package</th>
                            <th>Expiry date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="">301 中文課</a></td>
                            <td>王小明</td>
                            <td>47／50</td>
                            <td>中文三</td>
                            <td>2022/06/30</td>
                          </tr>
                          <tr>
                            <td><a href="">302 English</a></td>
                            <td>Amanda</td>
                            <td>43／50</td>
                            <td>Third grage</td>
                            <td>2022/06/30</td>
                          </tr>
                          <tr>
                            <td><a href="">302 中文課</a></td>
                            <td>王小明</td>
                            <td>43／50</td>
                            <td>中文三</td>
                            <td>2022/06/30</td>
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
          </div>
        </section>
      </div>
      <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer>
    </div>

    <!-- END CONTENT WRAPPER -->
    <!-- EDIT MODAL -->
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit</h5>
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
                <label class="control-label text-right col-sm-4"
                  >Course Name</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="102 English"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label text-right col-sm-4"
                  >Multi Select</label
                >
                <div class="col-sm-8">
                  <select
                    class="form-control"
                    id="s2_demo3"
                    multiple="multiple"
                  >
                    <optgroup label="title">
                      <option>Amanda</option>
                      <option>Brandon</option>
                      <option>Claude</option>
                      <option selected>Diana</option>
                      <option selected>Edward</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </form>
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
              data-toggle="modal"
              data-target="#editChangeModal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- EDIT-CHANGE MODAL -->
    <div
      class="modal fade"
      id="editChangeModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit</h5>
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
              Confirm to change the teacher to <strong>Diana</strong> and
              <strong>Edward</strong>.
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
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- AddStudent modal -->
    <div
      class="modal fade"
      id="AddStudentModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add student</h5>
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
            <div class="addstudent d-flex justify-content-center">
              <div>
                <button
                  class="btn btn-primary text-center"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#SingleStudentModal"
                >
                  <div>
                    <i class="zmdi zmdi-account-add zmdi-hc-fw display-5"></i>
                  </div>
                  <div class="mt-3">
                    Add a single student
                  </div>
                </button>
              </div>
              <div>
                <button
                  class="btn btn-primary text-center"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#ImportCSVModal"
                >
                  <div>
                    <i class="zmdi zmdi-accounts-list zmdi-hc-fw display-5"></i>
                  </div>
                  <div class="mt-3">
                    Import a CSV
                  </div>
                </button>
              </div>
              <div>
                <button
                  class="btn btn-primary text-center"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#CopyModal"
                >
                  <div>
                    <i class="zmdi zmdi-copy zmdi-hc-fw display-5"></i>
                  </div>
                  <div class="mt-3">
                    Copy
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add a single student Modal-->
    <div
      class="modal fade"
      id="SingleStudentModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Student</h5>
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
            <h4 class="text-center mb-4 mt-2">Add a single student</h4>
            <form>
              <div class="form-group row">
                <label class="control-label text-right col-sm-4"
                  >Student name</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter student name"
                    value=""
                  />
                </div>
                <div class="invalid-feedback">
                  The student is already exists.
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label text-right col-sm-4"
                  >Unique number</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control is-invalid"
                    placeholder="Enter unique number"
                    value=""
                  />
                </div>
                <div class="invalid-feedback">
                  The number is already exists.
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary btn-rounded">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Copy Modal-->
    <div
      class="modal fade"
      id="CopyModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">Add student</h5>
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
            <h4 class="text-center mb-4 mt-2">Copy</h4>
            <p>Copy the list of students in other course.</p>
            <form>
              <div class="form-group">
                <select class="form-control" id="s2_demo2">
                  <optgroup label="Select course">
                    <option>101 ENGLISH</option>
                    <option>102 ENGLISH</option>
                    <option>201 ENGLISH</option>
                    <option>202 ENGLISH</option>
                  </optgroup>
                </select>
              </div>
            </form>
            <div
              class="table-responsive border rounded p-10 mb-2"
              style="max-height: 200px;"
              data-scroll="dark"
            >
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Student name</th>
                    <th>Unique Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bach</td>
                    <td>123456789***</td>
                  </tr>
                  <tr>
                    <td>Ravel</td>
                    <td>369659633***</td>
                  </tr>
                  <tr>
                    <td>Schubert</td>
                    <td>865742131***</td>
                  </tr>
                  <tr>
                    <td>Vivaldi</td>
                    <td>395631453***</td>
                  </tr>
                  <tr>
                    <td>Handel</td>
                    <td>165894253***</td>
                  </tr>
                  <tr>
                    <td>Bach</td>
                    <td>123456789***</td>
                  </tr>
                  <tr>
                    <td>Ravel</td>
                    <td>369659633***</td>
                  </tr>
                  <tr>
                    <td>Schubert</td>
                    <td>865742131***</td>
                  </tr>
                  <tr>
                    <td>Vivaldi</td>
                    <td>395631453***</td>
                  </tr>
                  <tr>
                    <td>Handel</td>
                    <td>165894253***</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mb-0"><span class="text-primary">10</span> students</p>
            <p class="text-danger">
              The number of students has reached the upper limit.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary btn-rounded">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Import CSV Modal-->
    <div
      class="modal fade"
      id="ImportCSVModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">Add student</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body" data-widget="dropzone">
            <h4 class="text-center mb-4 mt-2">Import a CSV</h4>
            <p class="text-center mb-0">
              How to make a csv file to import students list？
            </p>
            <p class="text-center">
              <a href="" title="">Download sample files</a>
            </p>
            <div class="">
              <form
                action="../assets/file-upload"
                class="dropzone"
                id="singleFileUpload"
              >
                <div class="dz-message needsclick singleFileUpload">
                  <i class="icon dripicons-cloud-upload"></i>
                  <h6 class="text-center">
                    Select or drag-and-drop a CSV file.
                  </h6>
                  <div class="d-block text-center">
                    <button
                      type="button"
                      class="btn btn-primary btn-rounded btn-floating"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="table-responsive border rounded p-10 mb-2"
              style="max-height: 200px;"
              data-scroll="dark"
            >
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Student name</th>
                    <th>Unique Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bach</td>
                    <td>123456789***</td>
                  </tr>
                  <tr>
                    <td>Ravel</td>
                    <td>369659633***</td>
                  </tr>
                  <tr>
                    <td>Schubert</td>
                    <td>865742131***</td>
                  </tr>
                  <tr>
                    <td>Vivaldi</td>
                    <td>395631453***</td>
                  </tr>
                  <tr>
                    <td>Handel</td>
                    <td>165894253***</td>
                  </tr>
                  <tr>
                    <td>Bach</td>
                    <td>123456789***</td>
                  </tr>
                  <tr>
                    <td>Ravel</td>
                    <td>369659633***</td>
                  </tr>
                  <tr>
                    <td>Schubert</td>
                    <td>865742131***</td>
                  </tr>
                  <tr>
                    <td>Vivaldi</td>
                    <td>395631453***</td>
                  </tr>
                  <tr>
                    <td>Handel</td>
                    <td>165894253***</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mb-0"><span class="text-primary">10</span> students</p>
            <p class="text-danger">
              The number of students has reached the upper limit.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#StudentExistedModal"
            >
              Import
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- StudentExisted Modal-->
    <div
      class="modal fade"
      id="StudentExistedModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              Student profile already exists
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
            <h6>7 students have been added to this course.</h6>
            <div class="border border-danger rounded mt-4">
              <p class="text-danger ml-3 mt-3 mb-0">
                You import students that already exist in else course,<br />Would
                you like to combine datasets?
              </p>
              <div
                class="table-responsive p-10 mb-2"
                style="max-height: 200px;"
                data-scroll="dark"
              >
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Student name</th>
                      <th>Unique Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bach</td>
                      <td>123456789***</td>
                    </tr>
                    <tr>
                      <td>Ravel</td>
                      <td>369659633***</td>
                    </tr>
                    <tr>
                      <td>Schubert</td>
                      <td>865742131***</td>
                    </tr>
                    <tr>
                      <td>Vivaldi</td>
                      <td>395631453***</td>
                    </tr>
                    <tr>
                      <td>Handel</td>
                      <td>165894253***</td>
                    </tr>
                    <tr>
                      <td>Bach</td>
                      <td>123456789***</td>
                    </tr>
                    <tr>
                      <td>Ravel</td>
                      <td>369659633***</td>
                    </tr>
                    <tr>
                      <td>Schubert</td>
                      <td>865742131***</td>
                    </tr>
                    <tr>
                      <td>Vivaldi</td>
                      <td>395631453***</td>
                    </tr>
                    <tr>
                      <td>Handel</td>
                      <td>165894253***</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary btn-rounded">
              Combine
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Course",
  components: {
    Header,
  },
  data() {
    return {
      userInfo: {
        name: "Amanda",
        email: "support@authenticgoods.co",
      },
    };
  },

  methods: {},
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>