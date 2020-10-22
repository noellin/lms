<template>
  <div>
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
    <!-- Student Profile Already Exists Modal-->
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
                    <td>{{ newStudent.name }}</td>
                    <td>{{ newStudent.phone }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <p class="text-danger">Would you like to combine datasets?</p> -->
          </div>
          <div class="modal-footer">
            <!-- <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Cancel
            </button> -->
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
            >
              OK
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
            <p class="text-center" @click="downloadSample()">
              <a class="download-text pointer">Download sample files</a>
            </p>
            <vue-dropzone
              ref="myVueDropzone"
              id="dropzone"
              :options="dropzoneOptions"
              :useCustomSlot="true"
              @vdropzone-complete="uploadComplete"
            >
              <!-- @vdropzone-sending="importStdFile" -->
              <i class="icon dripicons-cloud-upload"></i>
              <h6 class="text-center">Select or drag-and-drop a CSV file.</h6>
              <div class="d-block text-center">
                <button
                  type="button"
                  class="btn btn-primary btn-rounded btn-floating"
                >
                  Upload
                </button>
              </div>
            </vue-dropzone>
            <div
              class="border border-danger rounded mt-4"
              v-if="showAlreadyExist"
            >
              <p class="text-danger ml-3 mt-3 mb-0">
                You import students that already exist in else course
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
                    <tr v-for="aes in alreadyStudendList" :key="aes.phone">
                      <td>{{ aes.name }}</td>
                      <td>{{ aes.phone }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- <p class="mb-0"><span class="text-primary">10</span> students</p> -->
            <p class="text-danger" v-if="showErrorMessage">
              {{ errorMessage }}
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
              data-toggle="modal"
              @click="importStdFile()"
            >
              Import
            </button>
            <!-- data-dismiss="modal" -->
            <!-- data-target="#StudentExistedModal" -->
          </div>
        </div>
      </div>
    </div>
    <!-- StudentExisted Modal-->
    <!-- <div
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
  </div>
</template>



<script>
import {
  ApiAddStudent,
  ApiDownloadSample,
  ApiImportStudent,
} from "../http/apis/Student";
import { ApiGetAllCourse } from "../http/apis/CourseList";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import $ from "jquery";
export default {
  name: "AddStudent",
  data() {
    return {
      newStudent: { name: "", phone: "" },
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        addRemoveLinks: true,
        maxFilesize: 5, // MB
        maxFiles: 1,
        chunking: true,
        chunkSize: 400, // Bytes
      },
      files: {},
      courseList: [],
      showErrorMessage: false,
      errorMessage: "",
      showAlreadyExist: false,
      alreadyStudendList: [],
    };
  },
  props: ["courseid"],
  components: {
    vueDropzone: vue2Dropzone,
  },
  mounted() {
    this.getAllCourse();
  },
  methods: {
    getAllCourse() {
      ApiGetAllCourse.get()
        .then((response) => {
          this.courseList = response.record.map((o) => {
            return { id: o.courseid, text: o.course_name };
          });
        })
        .catch((err) => {});
    },
    resetStdTemp() {
      this.newStudent = { name: "", phone: "" };
      this.filles = {};
      this.showErrorMessage = false;
      this.errorMessage = "";
      this.showAlreadyExist = false;
      this.alreadyStudendList = [];
    },
    async addStudent() {
      let result = await ApiAddStudent.post(this.courseid, this.newStudent)
        .then((response) => {
          if (response.record === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.$store.dispatch("courseInfo/updateStudent", this.courseid);
      } else {
        $("#AlreadyExistsModal").modal("show");
      }
    },
    downloadSample() {
      ApiDownloadSample.get()
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response]));
          var fileLink = document.createElement("a");

          fileLink.href = fileURL;
          fileLink.setAttribute("target", "_blank");
          fileLink.setAttribute("download", "Sample.csv");
          document.body.appendChild(fileLink);

          fileLink.click();
        })
        .catch((err) => {});
    },
    uploadComplete(file) {
      this.files = file;
      // console.log(this.courseid);
    },
    async importStdFile() {
      // console.log("sent file");
      // console.log(this.courseid);
      const formData = new FormData();
      formData.append("stulist", this.files);
      let result = await ApiImportStudent.post(this.courseid, formData)
        .then((response) => {
          if (response.record.error.length > 0) {
            this.showAlreadyExist = true;
            this.alreadyStudendList = response.record.error;
          }
          if (response.status === "success") {
            return true;
          } else {
            this.errorMessage = response.record;
          }
        })
        .catch((err) => {});

      if (result) {
        if (this.showAlreadyExist) {
        } else {
          this.showErrorMessage = false;
          this.errorMessage = "";
          this.$refs.myVueDropzone.removeAllFiles();
          this.alreadyStudendList = [];
          this.$bus.$emit("messsage:push", "New Student Success.", "success");
          $("#ImportCSVModal").hide();
        }
      } else {
        this.showErrorMessage = true;
      }
    },
  },
};
</script>

<style>
</style>