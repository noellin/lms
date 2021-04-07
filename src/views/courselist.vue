<template>
  <div id="app3">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-start">
            <div class="mr-auto">
              <h1>{{ $t("home") }}</h1>
            </div>
          </div>
        </header>
        <section class="page-content container-fluid">
          <div class="row pb-3">
            <div class="col-12">
              <div class="form-row">
                <div class="form-group form-rounded mb-0 mr-3">
                  <!-- <select
                    class="form-control"
                    v-model="selectedTeacher"
                    @change="
                      getActiveCourseList(selectedTeacher);
                      getExpiredCourseList(selectedTeacher);
                    "
                    :disabled="permit === 'teacher'"
                  >
                    <option
                      v-for="teacher in teacherList"
                      :key="teacher.userid"
                      :value="teacher.userid"
                    >
                      {{ teacher.username }}
                    </option>
                  </select> -->
                  <select2
                    class=""
                    multiple
                    :options="filterTeacherList"
                    @change="
                      getActiveCourseList(selectedTeacher);
                      getExpiredCourseList(selectedTeacher);
                    "
                    v-model="selectedTeacher"
                    :disabled="permit === 'teacher'"
                  >
                  </select2>
                </div>
                <div class="form-group form-rounded mb-0">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                      @keyup.enter="searchCourse(courseName)"
                      v-model="courseName"
                    />
                    <div class="input-group-append">
                      <div
                        @click="searchCourse(courseName)"
                        class="btn btn-secondary btn-outline btn-icon btn-rounded"
                        type="button"
                      >
                        <i class="zmdi zmdi-search text-secondary"></i>
                      </div>
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
                    <li
                      class="nav-item"
                      role="presentation"
                      @click="showTable = 'active'"
                    >
                      <a
                        href="#tab-1"
                        class="nav-link active show"
                        data-toggle="tab"
                        aria-expanded="true"
                        >{{ $t("active") }}</a
                      >
                    </li>
                    <li
                      class="nav-item"
                      role="presentation"
                      @click="showTable = 'expired'"
                    >
                      <a
                        href="#tab-2"
                        class="nav-link"
                        data-toggle="tab"
                        aria-expanded="true"
                        >{{ $t("expired") }}</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <loading
                      :active.sync="isLoading"
                      :can-cancel="true"
                      :is-full-page="false"
                      color="#32C1DB"
                      :width="100"
                      :height="100"
                    ></loading>
                    <div
                      class="tab-pane fadeIn active"
                      id="tab-1"
                      v-if="showTable === 'active'"
                    >
                      <!-- No courses -->
                      <!--   <div class="bg-secondary text-center p-15 text-light rounded">
                                             No courses
                                        </div> -->
                      <!-- end No courses -->
                      <!-- id="bs4-table" -->
                      <table class="table table-striped" style="width: 100%">
                        <thead>
                          <tr>
                            <th
                              style="width: 15%"
                              @click="sortActiveTable('course_name')"
                              class="pointer"
                            >
                              {{ $t("classes")
                              }}<i
                                class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                              ></i>
                            </th>
                            <th style="width: 15%">{{ $t("teachers") }}</th>
                            <th style="width: 15%">
                              {{ $t("available-seats") }}
                            </th>
                            <th style="width: 15%">{{ $t("library") }}</th>
                            <th style="width: 15%">{{ $t("expiry-date") }}</th>
                            <!-- <th>Edit</th> -->
                            <th style="width: 15%">
                              {{ $t("view-assignments") }}
                            </th>
                            <th
                              style="text-align: center; width: 10%"
                              v-if="permit === 'admin'"
                            >
                              {{ $t("action") }}
                            </th>
                          </tr>
                        </thead>
                        <tbody v-show="!isLoading">
                          <tr
                            v-for="course in course.activeCourseList"
                            :key="course.courseid"
                          >
                            <td>
                              <!-- <button
                                v-if="
                                  course.course_name === '' ||
                                  course.course_name === undefined
                                "
                                type=""
                                class="btn btn-primary btn-rounded btn-sm"
                                data-toggle="modal"
                                data-target="#editModal"
                                @click="
                                  setTempCourse(
                                    course.userid,
                                    course.username,
                                    course.course_name,
                                    course.courseid
                                  )
                                "
                              >
                                Setting
                              </button> -->
                              <a
                                @click="
                                  gotoCourseMaterial(
                                    course.course_name,
                                    course.courseid
                                  )
                                "
                                class="text-link pointer"
                                >{{ course.course_name }}</a
                              >
                            </td>
                            <td>
                              <span> {{ course.username }}</span>
                            </td>
                            <td>
                              <span class="tdwidth-sm text-right"
                                >{{ course.noOfStu }}／{{ course.quota }}</span
                              >

                              <button
                                type=""
                                class="btn btn-primary btn-rounded btn-sm ml-2"
                                data-toggle="modal"
                                data-target="#AddStudentModal"
                                @click="
                                  resetStdTemp();
                                  courseid = course.courseid;
                                "
                              >
                                {{ $t("add-student") }}
                              </button>
                            </td>
                            <td>{{ course.pkg_name }}</td>
                            <td>
                              <span
                                :class="{
                                  'text-danger': course.expiry === true,
                                }"
                                >{{ course.expiry_date | dateConversion }}</span
                              >
                              <span
                                class="badge badge-pill badge-secondary"
                                v-if="course.expiry"
                                >{{ $t("expiring") }}</span
                              >
                            </td>
                            <td>
                              <button
                                @click="
                                  gotoCourseAssignment(
                                    course.course_name,
                                    course.courseid
                                  )
                                "
                                class="btn btn-primary btn-rounded btn-sm"
                                :disabled="
                                  course.username === '' ? true : false
                                "
                              >
                                {{ $t("view") }}
                              </button>
                              <!-- btn-message btn-link -->
                            </td>
                            <td
                              style="text-align: center"
                              v-if="permit === 'admin'"
                            >
                              <button
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#editModal"
                                @click="
                                  setTempCourse(
                                    course.userid,
                                    course.username,
                                    course.course_name,
                                    course.courseid
                                  )
                                "
                              >
                                <i class="la la-edit"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="col-12"></div>
                    </div>
                    <!-- expired的table -->
                    <div
                      class="tab-pane fadeIn"
                      id="tab-2"
                      v-if="showTable === 'expired'"
                    >
                      <!-- id="bs4-table" -->
                      <!-- table-bordered -->
                      <table class="table table-striped" style="width: 100%">
                        <thead>
                          <tr>
                            <th
                              @click="sortExpiredTable('course_name')"
                              class="pointer"
                            >
                              {{ $t("course-name")
                              }}<i
                                class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                              ></i>
                            </th>
                            <th>{{ $t("teacher") }}</th>
                            <th>{{ $t("active-student-limit") }}</th>
                            <th>{{ $t("package") }}</th>
                            <th>{{ $t("expiry-date") }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="expiredCourse in course.expiredCourseList"
                            :key="expiredCourse.courseid"
                          >
                            <td>
                              <a
                                @click="
                                  gotoCourseMaterial(
                                    expiredCourse.course_name,
                                    course.courseid,
                                    'expired'
                                  )
                                "
                                class="text-link pointer"
                                >{{ expiredCourse.course_name }}</a
                              >
                            </td>
                            <!-- <td>{{ expiredCourse.course_name }}</td> -->
                            <td>{{ expiredCourse.username }}</td>
                            <td>
                              {{ expiredCourse.noOfStu }}/{{
                                expiredCourse.quota
                              }}
                            </td>
                            <td>{{ expiredCourse.pkg_name }}</td>
                            <td>
                              {{ expiredCourse.expiry_date | dateConversion }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!-- <div class="col-12">
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
                      </div> -->
                    </div>
                    <!-- expired的table -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
      <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("edit") }}</h5>
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
              <ValidationObserver ref="editcourseForm">
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="course name"
                >
                  <div class="form-group row">
                    <label
                      class="control-label text-right col-sm-4 text-height-form-control"
                      >{{ $t("course-name") }}</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Course Name"
                        v-model="tempCourse.course_name"
                      />
                      <span v-if="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>
                  </div>
                </ValidationProvider>
              </ValidationObserver>
              <div
                class="form-group row"
                :style="{
                  height: [parseInt(tempCourse.id.length) + 2] * 16.5 + 'px',
                }"
              >
                <label
                  class="control-label text-right col-sm-4 text-height-form-control"
                  >{{ $t("select-teacher") }}</label
                >
                <div class="col-sm-8">
                  <!-- <select
                    class="form-control"
                    id="s2_demo3"
                    multiple="multiple"
                    v-model="tempCourse.id"
                  >
                    <optgroup label="title">
                      <option
                        v-for="option in selectTeacherList"
                        :key="option.id"
                      >
                        {{ option.text }}
                      </option>
                    </optgroup>
                  </select> -->
                  <select2
                    class=""
                    multiple
                    :options="selectTeacherList"
                    @change="myChangeEvent($event)"
                    @select="mySelectEvent($event)"
                    :settings="{ multiple: true }"
                    v-model="tempCourse.id"
                  >
                  </select2>
                  <!-- <span>{{ tempCourse.teacher }}</span> -->
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
              {{ $t("close") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="openEdit()"
            >
              {{ $t("save-changes") }}
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
            <h5 class="modal-title">{{ $t("edit") }}</h5>
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
              {{ $t("confirm-to-change-the-teacher-to") }}
              <!-- <strong v-for="teacher in tempCourse.id" :key="teacher.id"
                >{{ teacher }} </strong
              >. -->
              <span
                v-for="(tempTeacher, index) in tempTeacherList"
                :key="tempTeacher"
              >
                {{ tempTeacher }}
                <span v-if="index + 1 !== tempTeacherList.length">,</span>
              </span>
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="setCourse(tempCourse)"
            >
              {{ $t("confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <add-student
      id="courseListdrop"
      ref="addstudent"
      :courseid="courseid"
      @childemit="init()"
    ></add-student>
    <!-- AddStudent modal -->

    <!-- Add a single student Modal-->

    <!-- Copy Modal-->

    <!-- Import CSV Modal-->

    <!-- StudentExisted Modal-->
  </div>
</template>

<script>
import $ from "jquery";
// import CustomHeader from "../components/CustomHeader";
// import pagination from "../components/Pagination";
import Select2 from "v-select2-component";
import dayjs from "dayjs";
import {
  ApiGetActiveCourseList,
  ApiGetExpiredCourseList,
  ApiGetTeacherList,
  ApiSearchCourse,
  ApiSetCourse,
} from "../http/apis/CourseList";
import { ApiSaveLOG } from "../http/apis/Login";
import AddStudent from "../components/AddStudent";
import _ from "lodash";
export default {
  name: "Course",
  components: {
    CustomHeader: () => import("@/components/CustomHeader.vue"),
    Select2,
    AddStudent: () => import("@/components/AddStudent.vue"),
  },
  mounted() {},
  data() {
    return {
      showTable: "active",
      courseName: "",
      userInfo: {
        name: "Amanda",
        email: "support@authenticgoods.co",
      },
      teacherList: [{ userid: "*", username: "All" }],
      selectTeacherList: [],
      tempCourse: {
        id: [],
        course_name: "",
      },
      tempTeacherList: [],
      tempCourseid: "",
      selectedTeacher: "*",
      course: {
        activeCourseList: [],
        expiredCourseList: [],
        coursePagination: {
          total_pages: 1,
          current_page: 1,
          has_pre: false,
          has_next: false,
        },
      },
      courseid: "",
      sortActiveStatus: false,
      tempActiveSortItem: "",
      sortExpiredStatus: false,
      tempExpiredSortItem: "",
    };
  },
  created() {
    if (this.permit === "admin") {
      this.selectedTeacher = "*";
    } else {
      this.selectedTeacher = this.userid;
    }
    this.init();
    // this.getActiveCourseList();
    // this.getExpiredCourseList();
    // this.getTeacherList();
  },
  mounted() {},
  computed: {
    filterTeacherList() {
      let temp = this.teacherList.map((o) => {
        return { id: o.userid, text: o.username };
      });
      return temp;
    },
    userid() {
      return this.$store.state.auth.userid;
    },
    permit() {
      return this.$store.state.auth.permit;
    },
    todayTimestamp() {
      return this.$store.state.auth.todayTimestamp;
    },
    isLoading() {
      return this.$store.state.common.isLoading;
    },
    // filterExpiredDate(value) {
    //   return dayjs.unix(value).format("YYYY/MM/DD");
    // },
  },
  methods: {
    saveLog(id) {
      ApiSaveLOG.get(id)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {});
    },
    openEdit() {
      this.$refs.editcourseForm.validate().then((success) => {
        if (success) {
          $("#editModal").modal("hide");
          $("#editChangeModal").modal("show");
        }
      });
    },
    sortActiveTable(sortItem) {
      if (this.tempActiveSortItem === "") {
        this.tempActiveSortItem = sortItem;
        this.sortActiveStatus = false;
      } else if (this.tempActiveSortItem !== sortItem) {
        this.tempActiveSortItem = sortItem;
        this.sortActiveStatus = false;
      } else {
      }
      this.sortActiveStatus = !this.sortActiveStatus;
      if (this.sortActiveStatus) {
        this.course.activeCourseList = _.sortBy(
          this.course.activeCourseList,
          [sortItem],
          ["asc"]
        );
      } else {
        this.course.activeCourseList = this.course.activeCourseList.reverse();
      }
    },
    sortExpiredTable(sortItem) {
      if (this.tempExpiredSortItem === "") {
        this.tempExpiredSortItem = sortItem;
        this.sortExpiredStatus = false;
      } else if (this.tempExpiredSortItem !== sortItem) {
        this.tempExpiredSortItem = sortItem;
        this.sortExpiredStatus = false;
      } else {
      }
      this.sortExpiredStatus = !this.sortExpiredStatus;
      if (this.sortExpiredStatus) {
        this.course.expiredCourseList = _.sortBy(
          this.course.expiredCourseList,
          [sortItem],
          ["asc"]
        );
      } else {
        this.course.expiredCourseList = this.course.expiredCourseList.reverse();
      }
    },
    init() {
      console.log(this.userid);
      this.$store.dispatch("common/setLoading", true);
      this.axios
        .all([
          this.getActiveCourseList(this.selectedTeacher),
          this.getExpiredCourseList(this.selectedTeacher),
          this.getTeacherList(),
          this.saveLog(this.userid),
        ])
        .then((response) => {
          setTimeout(() => {
            this.$store.dispatch("common/setLoading", false);
          }, 400);
        });
    },
    resetStdTemp() {
      this.$refs.addstudent.resetStdTemp();
    },
    getTeacherList() {
      ApiGetTeacherList.get().then((response) => {
        if (this.permit === "admin") {
          response.record.forEach((element) => {
            this.teacherList.push(element);
          });
          this.selectTeacherList = response.record.map((o) => {
            return { id: o.userid, text: o.username };
          });
        } else {
          this.teacherList = [];
          this.teacherList = response.record;
          this.selectTeacherList = response.record.map((o) => {
            return { id: o.userid, text: o.username };
          });
        }
      });
    },
    getActiveCourseList(teacherid = "") {
      // this.course.activeCourseList = [];
      let searchTid = "";
      if (teacherid !== "*") {
        searchTid = teacherid;
      }
      ApiGetActiveCourseList.get(this.permit, this.userid, searchTid).then(
        (response) => {
          this.course.activeCourseList = response.record;
          this.course.activeCourseList.forEach((item) => {
            item.expiry = dayjs
              .unix(item.expiry_date)
              .add(1, "month")
              .isBefore(dayjs.unix(this.todayTimestamp));
          });
        }
      );
    },
    getExpiredCourseList(teacherid = "") {
      // this.course.expiredCourseList = [];
      let searchTid = "";
      if (teacherid !== "*") {
        searchTid = teacherid;
      }
      ApiGetExpiredCourseList.get(this.permit, this.userid, searchTid).then(
        (response) => {
          this.course.expiredCourseList = response.record;
        }
      );
    },
    searchCourse(courseName) {
      this.$store.dispatch("common/setLoading", true);
      this.course.expiredCourseList = [];
      this.course.activeCourseList = [];
      let searchItem = {
        keyword: courseName,
      };
      ApiSearchCourse.post(this.userid, searchItem).then((response) => {
        response.record.forEach((item) => {
          if (item.status === "active") {
            this.course.activeCourseList.push(item);
          } else {
            this.course.expiredCourseList.push(item);
          }
        });
        setTimeout(() => {
          this.$store.dispatch("common/setLoading", false);
        }, 400);
      });
    },
    setTempCourse(userid, username, coursename, courseid) {
      if (userid === "") {
        this.tempCourse.id = [];
      } else {
        this.tempCourse.id = userid.split(";");
      }
      if (username === "") {
        this.tempTeacherList = [];
      } else {
        this.tempTeacherList = username.split(",");
      }
      this.tempCourse.course_name = coursename;
      this.tempCourseid = courseid;
    },
    async setCourse(tempCourse) {
      tempCourse.userID = tempCourse.id.join(";");
      const result = await ApiSetCourse.put(this.tempCourseid, tempCourse).then(
        (response) => {
          return response;
        }
      );
      if (result.status === "success") {
        this.getActiveCourseList(this.selectedTeacher);
      }
    },
    myChangeEvent(val) {},
    mySelectEvent({ id, text }) {
      let index = this.tempTeacherList.indexOf(text);
      if (index === -1) {
        this.tempTeacherList.push(text);
      } else {
        this.tempTeacherList.splice(index, 1);
      }
    },
    gotoCourseMaterial(coursename, courseid,status) {
      if(status!=='expired'){
      this.$router.push({
        path: `/course_material/course=${coursename}/type=Library/${courseid}`,
      });
      }else{
              this.$router.push({
        path: `/course_material/course=${coursename}/type=Library/${courseid}/expired`,
      });
      }

    },
    gotoCourseAssignment(coursename, courseid) {
      this.$router.push({
        path: `/course_assignment/course=${coursename}/type=Assignments/${courseid}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
// @import "../../public/css/common/main.bundle.css";
#s2_demo3 {
  height: 90px;
}

// .select2-container--default
//   .select2-selection--multiple
//   .select2-selection__choice,
// .select2-container--default.select2-container--disabled
//   .select2-selection--single {
//   border: 1px solid #dfe7f3;
//   background-color: #f0f6ff;
// }
</style>