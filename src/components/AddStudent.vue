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
            <h5 class="modal-title">{{ $t("add-student") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="errorMessage = ''"
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
                  <div class="mt-3">{{ $t("add-a-new-student") }}</div>
                </button>
              </div>
              <div>
                <button
                  class="btn btn-primary text-center"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#ImportCSVModal"
                  @click="errorMessage = ''"
                >
                  <div>
                    <i class="zmdi zmdi-accounts-list zmdi-hc-fw display-5"></i>
                  </div>
                  <div class="mt-3">{{ $t("import-csv") }}</div>
                </button>
              </div>
              <!-- <div>
                <button
                  class="btn btn-primary text-center"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#CopyModal"
                  @click="errorMessage = ''"
                >
                  <div>
                    <i class="zmdi zmdi-copy zmdi-hc-fw display-5"></i>
                  </div>
                  <div class="mt-3">{{ $t("copy") }}</div>
                </button>
              </div> -->
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
            <h5 class="modal-title">{{ $t("add-student") }}</h5>
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
            <h4 class="text-center mb-4 mt-2">
              {{ $t("add-a-new-student") }}
            </h4>
            <form>
              <ValidationObserver ref="addStdForm">
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="Studend name"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-sm-4">{{
                      $t("student-name")
                    }}</label>
                    <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter student name"
                        value=""
                        v-model="newStudent.name"
                      />
                      <span v-show="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>
                    <div class="invalid-feedback">
                      {{ $t("the-student-is-already-exists") }}.
                    </div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="Parents'phone number"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-sm-4">{{
                      $t("parents-phone-number")
                    }}</label>
                    <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter unique number"
                        value=""
                        v-model="newStudent.phone"
                      />
                      <span v-show="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>

                    <div class="invalid-feedback">
                      {{ $t("the-phone-number-is-already-exists") }}.
                    </div>
                  </div>
                </ValidationProvider>
              </ValidationObserver>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="addStudent()"
            >
              {{ $t("add") }}
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
              {{ $t("student-profile-already-exists") }}
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
                    <th>{{ $t("student-name") }}</th>
                    <th>{{ $t("parentsphone-number") }}</th>
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
              {{ $t("ok") }}
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
            <h5 class="modal-title" id="ModalTitle1">
              {{ $t("add-student") }}
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
            <h4 class="text-center mb-4 mt-2">{{ $t("copy") }}</h4>
            <p>{{ $t("copy-student-from-other-classes") }}.</p>
            <form>
              <div class="form-group">
                <select2
                  id="s2_course"
                  :options="courseList"
                  v-model="seleceCourse"
                  @select="getStudentInfo(seleceCourse)"
                >
                </select2>
              </div>
            </form>
            <div
              class="table-responsive border rounded p-10 mb-2"
              style="max-height: 200px"
              data-scroll="dark"
              v-if="courseStudentList.length > 0"
            >
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>{{ $t("student-name") }}</th>
                    <th>{{ $t("parentsphone-number") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="cs in courseStudentList"
                    :key="cs.username + cs.star_uni_info"
                  >
                    <td>{{ cs.username }}</td>
                    <td>{{ cs.star_uni_info }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mb-0" v-if="courseStudentList.length > 0">
              <span class="text-primary">{{ courseStudentList.length }}</span>
              {{ $t("all-students") }}
            </p>
            <!-- <p class="text-danger">
              The number of students has reached the upper limit.
            </p> -->
            <div
              class="border border-danger rounded mt-4"
              v-if="dupStudentList.length > 0"
            >
              <p class="text-danger ml-3 mt-3 mb-0">
                {{ $t("these-students-already-exist-in-the-classes") }}.
              </p>
              <div
                class="table-responsive p-10 mb-2"
                style="max-height: 200px"
                data-scroll="dark"
              >
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>{{ $t("student-name") }}</th>
                      <!-- <th>Unique Number</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="dups in dupStudentList" :key="dups.stuid">
                      <td>{{ dups.username }}</td>
                      <!-- <td>{{ aes.phone }}</td> -->
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
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="copySList(seleceCourse)"
            >
              {{ $t("copy") }}
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
            <h5 class="modal-title" id="ModalTitle1">
              {{ $t("add-student") }}
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
            <h4 class="text-center mb-4 mt-2">{{ $t("import-csv") }}</h4>
            <p class="text-center mb-0">
              {{ $t("how-to-make-a-csv-file-to-import-students-list") }}?
            </p>
            <p class="text-center" @click="downloadSample()">
              <a class="download-text pointer">{{
                $t("download-sample-files")
              }}</a>
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
              <h6 class="text-center">
                {{ $t("select-or-drag-and-drop-a-csv-file") }}.
              </h6>
              <div class="d-block text-center">
                <button
                  type="button"
                  class="btn btn-primary btn-rounded btn-floating"
                >
                  {{ $t("upload") }}
                </button>
              </div>
            </vue-dropzone>
            <div
              class="border border-danger rounded mt-4"
              v-if="showAlreadyExist"
            >
              <p class="text-danger ml-3 mt-3 mb-0">
                {{ $t("these-students-already-exist-in-the-course") }}.
              </p>
              <div
                class="table-responsive p-10 mb-2"
                style="max-height: 200px"
                data-scroll="dark"
              >
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>{{ $t("student-name") }}</th>
                      <th>{{ $t("parentsphone-number") }}</th>
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
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-toggle="modal"
              @click="importStdFile()"
            >
              {{ $t("import") }}
            </button>
            <!-- data-dismiss="modal" -->
            <!-- data-target="#StudentExistedModal" -->
          </div>
        </div>
      </div>
    </div>
    <!-- StudentExisted Modal-->
  </div>
</template>



<script>
import {
  ApiAddStudent,
  ApiDownloadSample,
  ApiImportStudent,
  ApiGetStudentInfo,
  ApiCopySList,
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
      seleceCourse: "",
      courseStudentList: [],
      dupStudentList: [],
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
    async copySList(srcCourseid) {
      let result = await ApiCopySList.get(srcCourseid, this.courseid)
        .then((response) => {
          this.dupStudentList = response.duplicateList;
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result && this.dupStudentList.length === 0) {
        $("#CopyModal").modal("hide");
        this.$bus.$emit("messsage:push", "Copy Student Success.", "success");
        this.$emit("childemit");
      }
    },
    getStudentInfo(courseid) {
      ApiGetStudentInfo.get(courseid)
        .then((response) => {
          this.courseStudentList = response.record;
        })
        .catch((err) => {});
    },
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
      this.dupStudentList = [];
      this.$nextTick(() => this.$refs.addStdForm.reset());
    },
    async addStudent() {
      let check = await this.$refs.addStdForm.validate().then((success) => {
        console.log(success);
        if (success) {
          $("#SingleStudentModal").modal("hide");
          return true;
        }
      });
      if (check) {
        let result = await ApiAddStudent.post(this.courseid, this.newStudent)
          .then((response) => {
            if (response.status === "success") {
              return true;
            }
          })
          .catch((err) => {
            console.log(err);
          });
        if (result) {
          this.$bus.$emit("messsage:push", "Add Student Success.", "success");
          this.$store.dispatch("courseInfo/updateStudent", this.courseid);
          //call 父組件更新
          this.$emit("childemit");
        } else {
          $("#AlreadyExistsModal").modal("show");
        }
        // this.resetStdTemp();
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
          // console.log(response);
          if (response.record.error !== undefined) {
            if (response.record.error.length > 0) {
              this.showAlreadyExist = true;
              this.alreadyStudendList = response.record.error;
            }
          }
          if (response.status === "success") {
            return true;
          }
          if (response.status === "failed") {
            this.showErrorMessage = true;
            this.errorMessage = response.record;
          }
        })
        .catch((err) => {
          console.log(err);
        });

      if (result) {
        if (this.showAlreadyExist) {
        } else {
          this.$store.dispatch("courseInfo/updateStudent", this.courseid);
          this.showErrorMessage = false;
          this.errorMessage = "";
          this.$refs.myVueDropzone.removeAllFiles();
          this.alreadyStudendList = [];
          $("#ImportCSVModal").modal("hide");
          this.$bus.$emit("messsage:push", "New Student Success.", "success");
          this.$emit("childemit");
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