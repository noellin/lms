<template>
  <div id="app2">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content">
      <!-- TOP TOOLBAR WRAPPER -->
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row">
              <!-- <div class="col-sm-3">
                <div class="card bg-primary" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      {{ $t("active-student") }}
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="37">{{
                          courseStudentInfo.active
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- <div class="col-sm-3">
                <div class="card bg-danger" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      {{ $t("non-active-student") }}
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="2">{{
                          courseStudentInfo.suspend
                        }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="col-sm-3">
                <div class="card bg-success" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      {{ $t("available-seats") }}
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="50"
                          >{{ courseStudentInfo.active }}/{{
                            courseStudentInfo.quota
                          }}</span
                        >
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
                    <div
                      class="btn btn-secondary btn-outline btn-icon btn-rounded"
                      type="button"
                      @click="searchStudent()"
                    >
                      <i class="zmdi zmdi-search text-secondary"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <!-- <button
                  type="button"
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                >
                  <i class="la la-print"></i>{{ $t("print-notice") }}
                </button> -->
                <button
                  type="button"
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                  @click="exportSList()"
                >
                  <i class="zmdi zmdi-open-in-new zmdi-hc-fw"></i
                  >{{ $t("export-student-list") }}
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                  data-toggle="modal"
                  data-target="#AddStudentModal"
                  @click="resetStdTemp()"
                >
                  <i class="la la-plus"></i>{{ $t("add-student") }}
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-outline btn-rounded"
                  data-toggle="modal"
                  data-target="#DeleteSModal"
                >
                  <i class="la la-trash"></i>
                  {{ $t("delete-student") }}
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
                            <th>
                              <div
                                class="custom-control custom-checkbox form-check"
                              >
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck"
                                  @click="selectAll"
                                  v-model="selectAllS"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck"
                                ></label>
                              </div>
                            </th>
                            <th>{{ $t("student-name") }}</th>
                            <th>{{ $t("parent-account") }}</th>
                            <th>{{ $t("remarks") }}</th>
                            <th>{{ $t("status") }}</th>
                            <th>{{ $t("edit") }}</th>
                            <th>{{ $t("reset-password") }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="s in studentList" :key="s.stuid">
                            <td>
                              <div
                                class="custom-control custom-checkbox form-check"
                              >
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  :id="s.stuid"
                                  v-model="selectedStudents"
                                  :value="s.stuid"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="s.stuid"
                                ></label>
                              </div>
                            </td>
                            <td>{{ s.username }}</td>
                            <td>{{ s.parents }}</td>
                            <td>{{ s.remark }}</td>
                            <td>
                              <span
                                class="text-success"
                                v-if="s.status === 'true'"
                                >{{ $t("active") }}</span
                              >
                              <span class="text-danger" v-else>{{
                                $t("non-active")
                              }}</span>
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
                                  selectEmoji = [];
                                "
                              >
                                {{ $t("reset") }}
                              </button>
                            </td>
                          </tr>
                          <tr v-if="studentList.length === 0">
                            <td colspan="9" class="text-center">
                              <h5>
                                {{ $t("no-students") }}
                              </h5>
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
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("setting") }}</h5>
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
              <ValidationObserver ref="editStdForm">
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="Studend name"
                >
                  <div class="form-group row">
                    <label for="" class="col-sm-4 col-form-label text-right">{{
                      $t("student-name")
                    }}</label>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        value="Constance"
                        v-model="tempStudent.username"
                      />
                      <span v-if="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="Unique number"
                >
                  <div class="form-group row">
                    <label for="" class="col-sm-4 col-form-label text-right">{{
                      $t("parents-phone-number")
                    }}</label>
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        value=""
                        v-model="tempStudent.uni_info"
                      />
                      <span v-if="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>
                  </div>
                </ValidationProvider>
                <div class="form-group row">
                  <label for="" class="col-sm-4 col-form-label text-right">{{
                    $t("remarks")
                  }}</label>
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
                    >{{ $t("status") }}</label
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
                    <span class="text-success mt-1" v-if="tempStudent.status">{{
                      $t("active")
                    }}</span>
                    <span class="text-danger mt-1" v-else>{{
                      $t("non-active")
                    }}</span>
                  </div>
                </div>
                <!-- <p class="text-danger">
                The number of students has reached the upper limit.
              </p> -->
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
              @click="modifyStudent()"
            >
              {{ $t("save") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <add-student
      id="studentdrop"
      ref="addstudent"
      :courseid="courseid"
    ></add-student>
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
            <h5 class="modal-title">{{ $t("reset-password") }}</h5>
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
            <p>{{ $t("choose-2-pictures-to-reset-password") }}</p>
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
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="resetPWD()"
            >
              {{ $t("reset") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- DeleteStudentModal MODAL-->
    <div
      class="modal fade"
      id="DeleteSModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              {{ $t("delete-student") }}
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
            <p>{{ $t("do-you-want-to-delete-a-checked-students") }}?</p>
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
              data-dismiss="modal"
              @click="deleteStudentAll()"
            >
              {{ $t("confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CourseHeader from "../components/CourseHeader";
// import AddStudent from "../components/AddStudent";
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
  ApiDeleteStudent,
} from "../http/apis/Student";
import $ from "jquery";
export default {
  name: "CourseStudent",
  components: {
    CourseHeader: () => import("@/components/CourseHeader.vue"),
    AddStudent: () => import("@/components/AddStudent.vue"),
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
      studentList: [],
      tempStudent: {
        name: "",
        status: "",
        remark: "",
        uni_info: "",
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
      selectAllS: "",
      selectedStudents: [],
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
    init() {},
    selectAll(event) {
      const vm = this;

      if (!event.currentTarget.checked) {
        vm.selectedStudents = [];
      } else {
        //實現全選
        vm.selectedStudents = [];
        vm.studentList.forEach(function (item, i) {
          vm.selectedStudents.push(item.stuid);
        });
      }
    },
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
      obj.uniinfo = this.tempStudent.uni_info;
      let check = await this.$refs.editStdForm.validate().then((success) => {
        if (success) {
          $("#SettingModal").modal("hide");
          return true;
        }
      });
      if (check) {
        let result = await ApiModifyStudent.post(
          this.courseid,
          this.tempStudent.stuid,
          obj
        )
          .then((response) => {
            console.log(response);
            if (response.status === "success") {
              return true;
            } else {
              this.$bus.$emit("messsage:push", response.record, "danger");
            }
          })
          .catch((err) => {});
        if (result) {
          this.$bus.$emit("messsage:push", "Edit completed.", "success");
          this.$store.dispatch("courseInfo/updateStudent", this.courseid);
        }
      }
    },
    resetPWD() {
      let pwd = { imgpw: this.selectEmoji.toString().replace(",", "") };
      ApiResetPWD.post(this.tempSid, pwd)
        .then((response) => {
          console.log(response);
        })
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
    async deleteStudentAll() {
      ApiDeleteStudent.getAxiosAll(this.courseid, this.selectedStudents)
        .then((response) => {
          console.log(response);
          this.selectedStudents = [];
          this.$store.dispatch("courseInfo/updateStudent", this.courseid);
          this.$bus.$emit("messsage:push", "Delete completed.", "success");
        })
        .catch((err) => {
          return err;
        });
      // for await (let sid of this.selectedStudents) {
      //   this.deleteStudent(sid);
      // }
      // await this.$store.dispatch("courseInfo/updateStudent", this.courseid);
    },
  },
};
</script>

<style scoped lang="scss">
</style>