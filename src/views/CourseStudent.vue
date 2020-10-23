<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row">
              <div class="col-sm-3">
                <div class="card bg-primary" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">Active student</h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="37">{{
                          courseStudentInfo.active
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card bg-danger" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">Suspended student</h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="2">{{
                          courseStudentInfo.suspend
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card bg-success" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">Limit</h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="50">{{
                          courseStudentInfo.quota
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <div class="form-group form-rounded mb-0">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    v-model="searchStudentName"
                    @keyup.enter="searchStudent()"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-secondary btn-outline btn-icon btn-rounded"
                      type="button"
                      @click="searchStudent()"
                    >
                      <i class="zmdi zmdi-search text-secondary"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                >
                  <i class="la la-print"></i>Print notice
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                  @click="exportSList()"
                >
                  <i class="zmdi zmdi-open-in-new zmdi-hc-fw"></i>Export student
                  list
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-outline btn-rounded"
                  data-toggle="modal"
                  data-target="#AddStudentModal"
                  @click="resetStdTemp()"
                >
                  <i class="la la-plus"></i>Add student
                </button>
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
                            <th>Student name</th>
                            <th>Parent account</th>
                            <th>Remarks</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Reset password</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="s in studentList" :key="s.stuid">
                            <td>{{ s.username }}</td>
                            <td>{{ s.parents }}</td>
                            <td>{{ s.remark }}</td>
                            <td>
                              <span
                                class="text-success"
                                v-if="s.status === 'true'"
                                >Active</span
                              >
                              <span class="text-danger" v-else>Suspended</span>
                            </td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#SettingModal"
                                @click="setTempStudent(s)"
                              >
                                <i class="la la-edit"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                type=""
                                class="btn btn-primary btn-sm btn-rounded"
                                data-toggle="modal"
                                data-target="#ResetPasswordModal"
                                @click="
                                  tempSid = s.stuid;
                                  tempSname = s.username;
                                "
                              >
                                Reset
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
    </div>

    <!-- END CONTENT WRAPPER -->
    <!-- Setting MODAL -->
    <div
      class="modal fade"
      id="SettingModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Setting</h5>
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
            <form>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-right"
                  >Student Name</label
                >
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="Constance"
                    v-model="tempStudent.username"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label text-right"
                  >Remarks</label
                >
                <div class="col-8">
                  <textarea
                    class="form-control"
                    name=""
                    v-model="tempStudent.remark"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label
                  class="col-sm-4 col-form-label col-form-label-sm text-right"
                  >Status</label
                >
                <div class="switch">
                  <input
                    class="tgl tgl-light tgl-success"
                    id="cb8"
                    type="checkbox"
                    checked
                    v-model="tempStudent.status"
                  />
                  <label class="tgl-btn" for="cb8"></label>
                </div>
                <div class="col">
                  <span class="text-success mt-1" v-if="tempStudent.status"
                    >Active</span
                  >
                  <span class="text-danger mt-1" v-else>Suspended</span>
                </div>
              </div>
              <!-- <p class="text-danger">
                The number of students has reached the upper limit.
              </p> -->
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
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="modifyStudent()"
              data-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- AddStudent modal -->
    <!-- <div
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
                  <div class="mt-3">Add a single student</div>
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
                  <div class="mt-3">Import a CSV</div>
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
                  <div class="mt-3">Copy</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add a single student Modal
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
                    v-model="newStudent.name"
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
                    v-model="newStudent.phone"
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
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              data-toggle="modal"
              @click="addStudent()"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Student Profile Already Exists Modal
    <div
      class="modal fade"
      id="AlreadyExistsModal"
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
          <div class="modal-body" data-widget="dropzone">
            <div class="table-responsive border rounded p-10 mb-2">
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
                </tbody>
              </table>
            </div>
            <p class="text-danger">Would you like to combine datasets?</p>
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
    <!-- Copy Modal
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
              style="max-height: 200px"
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
    <!-- Import CSV Modal
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
              style="max-height: 200px"
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
    <!-- StudentExisted Modal
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
                style="max-height: 200px"
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
    </div> -->
    <add-student ref="addstudent" :courseid="courseid"></add-student>
    <!-- Reset Password Modal-->
    <div
      class="modal fade"
      id="ResetPasswordModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Reset Password</h5>
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
            <h4 class="mb-4 mt-2">{{ tempSname }}</h4>
            <p>Choose 2 pictures to reset password</p>
            <ul
              class="reset-password d-flex justify-content-start flex-wrap p-20"
            >
              <li v-for="emoji in emojiList" :key="emoji">
                <a
                  title=""
                  v-html="emoji"
                  class="pointer"
                  :class="{ active: selectEmoji.includes(emoji) }"
                  @click="setPassword(emoji)"
                ></a>
              </li>
            </ul>
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
              @click="resetPWD()"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CourseHeader from "../components/CourseHeader";
import AddStudent from "../components/AddStudent";
import {
  ApiImportStudent,
  ApiGetStudentList,
  ApiSearchStudent,
  // ApiAddStudent,
  ApiGetStudentInfo,
  ApiModifyStudent,
  ApiResetPWD,
  // ApiDownloadSample,
  ApiExportSList,
  ApiCopySList,
} from "../http/apis/Student";
import $ from "jquery";
export default {
  name: "CourseStudent",
  components: {
    CourseHeader,
    AddStudent,
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
      studentList: [],
      tempStudent: {
        name: "",
        status: "",
        remark: "",
      },
      tempSid: "",
      tempSname: "",
      // newStudent: { name: "", phone: "" },
      searchStudentName: "",
      courseid: this.$route.params.courseid,
      emojiList: [
        "🌳",
        "🔑",
        "🔥",
        "🍦",
        "🌼",
        "🍭",
        "🎀",
        "📗",
        "🥕",
        "🌛",
        "🍎",
        "🐘",
        "🍔",
        "🕜",
        "📺",
        "🚗",
        "🏀",
        "🏠",
        "🐄",
        "👒",
      ],
      selectEmoji: [],
      courseStudentInfo: {},
    };
  },
  created() {},
  mounted() {
    this.studentList = this.studentLists;
    this.courseStudentInfo = this.courseStudentInfos;
  },
  watch: {
    studentLists() {
      this.studentList = this.studentLists;
    },
    courseStudentInfos() {
      this.courseStudentInfo = this.courseStudentInfos;
    },
  },
  computed: {
    studentLists() {
      return this.$store.state.courseInfo.studentList;
    },
    courseStudentInfos() {
      return this.$store.state.courseInfo.courseStudentInfo[0];
    },
  },
  methods: {
    resetStdTemp() {
      this.$refs.addstudent.resetStdTemp();
    },
    setPassword(emoji) {
      if (this.selectEmoji.length < 2) {
        this.selectEmoji.push(emoji);
      } else {
        this.selectEmoji.shift();
        this.selectEmoji.push(emoji);
      }
    },
    searchStudent() {
      let keyword = this.searchStudentName;
      if (this.searchStudentName === "") {
        keyword = "*";
      }
      ApiSearchStudent.get(this.courseid, keyword)
        .then((response) => {
          this.studentList = response.record;
        })
        .catch((err) => {});
    },
    exportSList() {
      ApiExportSList.get(this.courseid)
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("target", "_blank");
          fileLink.setAttribute("download", "Student.csv");
          document.body.appendChild(fileLink);

          fileLink.click();
        })
        .catch((err) => {});
    },
    async modifyStudent() {
      let obj = {};
      obj.name = this.tempStudent.username;
      obj.status = this.tempStudent.status.toString();
      obj.remark = this.tempStudent.remark;
      let result = await ApiModifyStudent.post(
        this.courseid,
        this.tempStudent.stuid,
        obj
      )
        .then((response) => {
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.$store.dispatch("courseInfo/updateStudent", this.courseid);
      }
    },
    resetPWD() {
      let pwd = { imgpw: this.selectEmoji.toString().replace(",", "") };
      ApiResetPWD.post(this.tempSid)
        .then((response) => {})
        .catch((err) => {});
    },
    setTempStudent(s) {
      this.tempStudent = Object.assign({}, s);
      if (s.status === "true") {
        this.tempStudent.status = true;
      } else {
        this.tempStudent.status = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>