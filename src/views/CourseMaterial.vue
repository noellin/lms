<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content">
      <course-header></course-header>
      <section class="page-content container-fluid">
        <div class="row">
          <div class="col-4 col-md">
            <div class="card bg-secondary" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">Open Material</h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="151">151</span
                    ><span class="d-none d-xl-inlineblock">/ 400</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-md">
            <div class="card bg-primary" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">
                  Picture Book Views<span class="text-light">Teacher</span>
                </h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="13">13</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-md">
            <div class="card bg-success" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">
                  Video Views<span class="text-light">Teacher</span>
                </h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="29">29</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md">
            <div class="card bg-warning" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">
                  Picture Book Views<span class="text-light">Student</span>
                </h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="173">173</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md">
            <div class="card bg-danger" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">
                  Video Views<span class="text-light">Student</span>
                </h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="197">197</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="pb-3">
            <div class="form-row">
              <div class="form-group form-rounded mb-0 mr-3">
                <select2 id="s2_demo2" :options="typeList" v-model="seleceType">
                </select2>
                <!-- <select class="form-control">
                  <option>All type</option>
                  <option>Picture Book</option>
                  <option>Video</option>
                </select> -->
              </div>
              <div class="form-group form-rounded mb-0">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    v-model="searchRname"
                    @keyup.enter="searchCourseResource()"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-secondary btn-outline btn-icon btn-rounded"
                      type="button"
                      @click="searchCourseResource()"
                    >
                      <i class="zmdi zmdi-search text-secondary"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-right">
            <button
              type="button"
              class="btn btn-primary btn-rounded btn-outline"
              data-toggle="modal"
              data-target="#AssignmentModal"
            >
              <i class="la la-clipboard"></i>Assignment
              <span class="badge badge-primary">{{ tempAList.length }}</span>
            </button>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12"
            v-for="textbook in textbookList"
            :key="textbook.resourceid"
          >
            <div class="card">
              <div class="card-body">
                <div class="media">
                  <div
                    class="align-self-center overlay-wrap mr-4 w-150 h-150 border"
                  >
                    <span class="overlay-icon">
                      <i
                        class="fas fa-video"
                        v-if="textbook.note === 'video'"
                      ></i
                      ><i class="fas fa-book-open" v-else></i>
                    </span>
                    <a
                      href="#"
                      title=""
                      class="overlay-img"
                      style="background-image: url(../assets/img/avatars/3.jpg)"
                    ></a>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <!-- <span class="badge badge-pill badge-secondary mt-2 mr-2"
                          >Lavel J</span
                        ><span class="badge badge-pill badge-secondary mt-2"
                          >Topic A</span
                        > -->
                        <span
                          class="badge badge-pill badge-secondary mt-2"
                        ></span>
                        <h4
                          class="mb-0 mt-3 d-flex align-self-center text-primary"
                        >
                          <a href="" title="">{{ textbook.resource_name }}</a>
                        </h4>
                        <p class="text-muted mt-1">
                          <small class="fw300"
                            >Last played
                            <span>{{ textbook.last_access }}</span></small
                          >
                        </p>
                      </div>
                      <div
                        class="text-primary pointer"
                        @click="gotoWebsite(textbook)"
                      >
                        start<a
                          class="btn-rounded-icon btn-primary rounded ml-2"
                          ><i
                            class="zmdi zmdi-arrow-right zmdi-hc-fw text-white"
                          ></i
                        ></a>
                      </div>
                    </div>
                    <div class="border-top pt-3 d-flex justify-content-between">
                      <div>
                        <button
                          v-if="textbook.note === 'video'"
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline mr-2"
                          data-toggle="modal"
                          data-target="#addAssignment"
                          @click="
                            getVideoMaterial(
                              textbook.colid,
                              textbook.resourceid
                            );
                            tempRname = textbook.resource_name;
                            tempVMList = tempAIDList;
                          "
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Assignment
                        </button>
                        <button
                          :disabled="tempAIDList.includes(textbook.resourceid)"
                          v-else
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline mr-2"
                          data-toggle="modal"
                          @click="addToAssignmentList(textbook)"
                        >
                          <i
                            class="zmdi zmdi-plus zmdi-hc-fw"
                            v-if="!tempAIDList.includes(textbook.resourceid)"
                          ></i>
                          <i class="zmdi zmdi-assignment-check" v-else></i>
                          Assignment
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline mr-2"
                          data-toggle="modal"
                          data-target="#addSpeakingquiz"
                          v-if="textbook.note === 'video'"
                          @click="
                            getVideoMaterial(
                              textbook.colid,
                              textbook.resourceid
                            );
                            tempRname = textbook.resource_name;
                          "
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Speaking quiz
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline mr-2"
                          data-toggle="modal"
                          data-target="#addSpeakingquiz"
                          v-else
                          @click="
                            gotoSpeakingQuiz(textbook, textbook.resource_name)
                          "
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Speaking quiz
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#addtoColletion"
                          @click="
                            getCollectionList(textbook.resourceid, textbook)
                          "
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Collection
                        </button>
                      </div>
                      <div>
                        <button
                          v-if="textbook.openflag !== 'true'"
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#OpenMaterial"
                          @click="tempResource = textbook"
                        >
                          Open Material
                        </button>
                        <button
                          v-else
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#OpenMaterial"
                          @click="tempResource = textbook"
                        >
                          Close Material
                        </button>
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

    <!-- END CONTENT WRAPPER -->
    <!-- Open material MODAL -->
    <div
      class="modal fade"
      id="OpenMaterial"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-if="tempResource.openflag !== 'true'">
              Open material
            </h5>
            <h5 class="modal-title" v-else>Close material</h5>
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
            <p v-if="tempResource.openflag !== 'true'">
              Open this material and allow
              {{ tempResource.resource_name }} students to view it.
            </p>
            <p v-else>
              Close this material and do not allow
              {{ tempResource.resource_name }} students to view it.
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
              @click="
                getOpenResource(
                  tempResource.colid,
                  tempResource.resourceid,
                  tempResource.openflag
                )
              "
            >
              <span v-if="tempResource.openflag !== 'true'">Open</span>
              <span v-else>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addtoColletion MODAL -->
    <div
      class="modal fade"
      id="addtoColletion"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add to collection</h5>
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
                <label class="control-label text-right col-sm-3"
                  >Collection</label
                >
                <div class="col-sm-9">
                  <select2
                    id="s2_demo1"
                    :options="collectionList"
                    v-model="selectCol"
                    @select="tempcolid = $event.id"
                  >
                  </select2>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label text-right col-sm-3"
                  >Sequence</label
                >
                <div class="col-sm-9">
                  <div class="" style="max-height: 300px" data-scroll="dark">
                    <ul class="sequence border">
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i
                          >{{ tempResource.resource_name }}
                        </button>
                        <!-- <div
                          class="btn btn-nostyle btn-remove"
                          @click="deleteResource(r.colid, r.resourceid)"
                        >
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </div> -->
                      </li>
                    </ul>
                  </div>
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
              @click="addResource()"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addAssignment modal-->
    <div
      class="modal fade"
      id="addAssignment"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Assignment
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
            <p>{{ tempRname }}</p>
            <div
              class="custom-control custom-checkbox form-check pb-2"
              v-for="vm in videoMaterialList"
              :key="vm.materialid"
            >
              <input
                type="checkbox"
                class="custom-control-input"
                :value="vm.materialid"
                :id="vm.materialid"
                v-model="tempVMList"
              />
              <label class="custom-control-label" :for="vm.materialid">{{
                vm.material_name
              }}</label>
              <!-- <span>{{ vm.materialid }}</span> -->
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
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="addtoSequence()"
              data-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addSpeakingquiz MODAL -->
    <div
      class="modal fade"
      id="addSpeakingquiz"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">Speaking quiz</h5>
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
            <p>{{ tempRname }}</p>
            <div>
              <a
                v-for="m in videoMaterialList"
                :key="m.materialid"
                class="btn btn-primary btn-outline btn-block"
                @click="gotoSpeakingQuiz(m, tempRname)"
                >{{ m.material_name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Assignment MODAL -->
    <div
      class="modal fade"
      id="AssignmentModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      v-if="studentList.length > 0"
    >
      <div
        class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Assignment</h5>
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
                <label class="control-label text-right col-sm-3">title</label>
                <div class="col-sm-9">
                  <div class="bg-light rounded" data-scroll="dark">
                    <ul class="sequence a-sequence">
                      <li
                        v-for="(ta, index) in tempAList"
                        :key="index"
                        class="d-flex justify-content-between border bg-white rounded"
                      >
                        <div class="mr-3">
                          <span v-if="ta.note === 'book'">
                            <span class="badge badge-pill badge-primary mr-2"
                              >Reading</span
                            >{{ ta.resource_name }}</span
                          >
                          <span v-else-if="ta.note === 'video'">
                            <span class="badge badge-pill badge-warning mr-2"
                              >Watching</span
                            >{{ ta.resource_name + " - " + ta.material_name }}
                          </span>
                          <span v-else>
                            <span class="badge badge-pill badge-accent mr-2"
                              >Speaking Quiz</span
                            >
                            {{ ta.resource_name }} -
                            <span v-if="ta.material_name !== 'undefined'">{{
                              ta.material_name
                            }}</span>
                            <span v-else>Book</span>
                          </span>
                        </div>
                        <button
                          class="btn btn-nostyle btn-remove"
                          @click="removeAssignment(ta.note, ta)"
                        >
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-right">Due</label>
                <div class="col-sm-8">
                  <date-picker
                    v-model="AssignmentDue"
                    valueType="format"
                    range
                  ></date-picker>
                  <!-- <input
                    type="text"
                    class="form-control date-picker-input"
                    placeholder="Select Date"
                    v-model="AssignmentDue"
                  /> -->
                </div>
                <!-- <div class="col-2 pt-2 pl-0">{{ AssignmentDue }}</div> -->
              </div>
              <div
                class="form-group row align-items-start"
                :style="{
                  height: [parseInt(selectStudent.length / 3) + 1] * 25 + 'px',
                }"
              >
                <label class="control-label text-right col-sm-3">For</label>
                <div class="col-sm-7">
                  <select2
                    id="s2_student"
                    :options="studentList"
                    v-model="selectStudent"
                    :disabled="selectAllS"
                    :settings="{ multiple: true }"
                  >
                  </select2>
                </div>
                <div class="col-sm-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="std"
                    v-model="selectAllS"
                    name="std"
                  />
                  <label class="form-check-label" for="std">All Students</label>
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
              data-target="#AssignmentModal-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- AssignmentModal-2 MODAL-->
    <div
      class="modal fade"
      id="AssignmentModal-2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">Assignment</h5>
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
            <h5>How difficult is this assignment?</h5>
            <p>System will send more rewards to more difficult assignment.</p>
            <div class="text-center mt-4 mb-4">
              <div class="form-check form-check-inline text-primary">Easy</div>
              <div
                class="custom-control custom-radio custom-control-inline mx-2"
                v-for="d in difficultList"
                :key="d"
              >
                <input
                  type="radio"
                  :id="d"
                  name="RadioInline"
                  class="custom-control-input pointer"
                  v-model="difficult"
                  :value="d"
                />
                <label class="custom-control-label pointer" :for="d">{{
                  d
                }}</label>
              </div>

              <div class="form-check form-check-inline text-primary">
                Difficult
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
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="setAssignment()"
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CustomHeader from "../components/CustomHeader";
// import MenuLeft from "../components/MenuLeft";
import {
  ApiGetCourseDatail,
  ApiSearchCourseResource,
  ApiGetStudentList,
  ApiGetVideoMaterial,
  ApiSetAssignment,
  ApiGetOpenResource,
} from "../http/apis/CourseDetail";
import {
  ApiGetCollectionList,
  ApiGetResource,
  ApiAddResource,
  ApideleteResource,
} from "../http/apis/Collection";
import CourseHeader from "../components/CourseHeader";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import dayjs from "dayjs";
import $ from "jquery";
// import {mapGetters} from 'vuex';
// import Select2 from "v-select2-component";
$("#mySelect2").select2({
  dropdownParent: $("#s2_student"),
});
export default {
  name: "CourseMaterial",
  components: {
    CourseHeader,
    DatePicker,
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
      searchRname: "",
      typeList: [
        { text: "All type", id: "all" },
        { text: "Picture Book", id: "book" },
        { text: "Video", id: "video" },
      ],
      seleceType: "all",
      searchStatus: false,
      searchRList: [],
      courseid: this.$route.params.courseid,
      // tempAssignmentList: [],
      clicked: [],
      videoMaterialList: [],
      tempRname: "",
      tempVMList: [],
      collectionList: [],
      selectCol: "",
      tempResource: {},
      tempcolid: "",
      textbookList: [],
      studentList: [],
      selectStudent: [],
      selectAllS: false,
      AssignmentDue: null,
      difficult: "1",
      difficultList: ["1", "2", "3", "4", "5"],
      tempAIDList: [],
      tempAList: [],
    };
  },
  created() {
    //列表資訊從menulift call (為了重複使用)

    this.textbookList = this.textbookLists;
    this.studentList = this.studentLists;
    this.tempAIDList = this.tempAIDLists;
    this.tempAList = this.tempALists;
  },
  mounted() {
    // this.getStudentList();
  },
  watch: {
    // courseid(){
    //   this.reload()
    // },
    textbookLists() {
      this.textbookList = this.textbookLists;
    },
    studentLists() {
      this.studentList = this.studentLists;
    },
    selectAllS() {
      if (this.selectAllS) {
        this.selectStudent = ["*"];
      }
    },
    tempAIDLists() {
      this.tempAIDList = this.tempAIDLists;
    },
    tempALists() {
      this.tempAList = this.tempALists;
    },
    // tempALists:{
    //         deep: true,
    //               handler () {
    //           console.log("changed");
    //            this.tempAList = this.tempALists
    //         },
    // },
  },
  computed: {
    textbookLists() {
      return this.$store.state.courseInfo.textbookList;
    },
    studentLists() {
      return this.$store.state.courseInfo.forSelectStudentList;
    },
    courseInfo() {
      return this.$store.state.courseInfo.courseInfo;
    },
    userid() {
      return this.$store.state.auth.userid;
    },
    tempAIDLists() {
      return this.$store.state.courseInfo.caidList;
      // return this.$store.state.courseInfo.tempAIDList[this.courseid] === undefined ?  this.tempAIDList : this.$store.state.courseInfo.tempAIDList[this.courseid] ;
    },
    tempALists() {
      return this.$store.state.courseInfo.caList;
      //  return this.$store.state.courseInfo.tempAList[this.courseid] === undefined ?  this.tempAList : this.$store.state.courseInfo.tempAList[this.courseid] ;
      // return this.$store.state.courseInfo.tempAList[this.courseid];
    },
  },
  methods: {
    getCollectionList(rid, obj) {
      this.tempResource = obj;
      this.collectionList = [];
      ApiGetCollectionList.get(this.userid, rid)
        .then((response) => {
          this.collectionList = response.record.map((o) => {
            return { id: o.collectionid, text: o.collection_name };
          });
        })
        .catch((err) => {});
    },

    addResource() {
      ApiAddResource.get(this.tempcolid, this.tempResource.resourceid)
        .then((response) => {})
        .catch((err) => {});
    },
    async deleteResource(colid, rid) {
      let result = await ApideleteResource.get(this.userid, this.tempcolid, rid)
        .then((response) => {
          return response.status;
        })
        .catch((err) => {});
      if (result) {
        this.getResource(this.tempcolid);
      }
    },
    addToAssignmentList(m) {
      // this.clicked.push(m.resourceid);
      this.$store.dispatch("courseInfo/setAssignment", {
        assignment: m,
        id: m.resourceid,
      });
    },
    searchCourseResource() {
      let sType = this.seleceType;
      if (this.seleceType === "all") {
        sType = "*";
      }
      let searchObj = {
        type: sType,
        keyword: this.searchRname,
      };
      ApiSearchCourseResource.post(this.courseid, searchObj)
        .then((response) => {
          this.textbookList = response.record;
        })
        .catch((err) => {});
    },
    async getVideoMaterial(Ncolid, rid) {
      let colid = Ncolid.split(";")[0];
      let result = await ApiGetVideoMaterial.get(colid, this.courseid, rid)
        .then((response) => {
          this.videoMaterialList = response.record;
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.videoMaterialList.forEach((el) => {
          el.resource_name = this.tempRname;
        });
      }
    },
    addtoSequence() {
      let result = this.tempVMList
        .filter((e) => {
          return this.tempAIDList.indexOf(e) === -1;
        })
        .concat(
          this.tempAIDList.filter((f) => {
            return this.tempVMList.indexOf(f) === -1;
          })
        );
      //取絕對差集 補集
      // result = id array

      //從ID => GET OBJECT
      let vmList = [];
      this.videoMaterialList.forEach((element) => {
        if (result.includes(element.materialid)) {
          vmList.push(element);
        }
      });

      // result要排序
      vmList.sort((a, b) => {
        return ("" + a.material_name).localeCompare(b.material_name);
        // return Number(a.material_name.split(".")[0]) >
        //   Number(b.material_name.split(".")[0])
        //   ? 1
        //   : -1;
      });

      vmList.forEach((obj) => {
        if (this.tempAIDList.includes(obj.materialid)) {
          this.$store.dispatch("courseInfo/removeAssignment", {
            id: obj.materialid,
          });
        } else {
          this.$store.dispatch("courseInfo/setAssignment", {
            assignment: obj,
            id: obj.materialid,
          });
        }
      });
      // result.forEach((id) => {
      //   if (this.tempAIDList.includes(id)) {
      //     this.$store.dispatch("courseInfo/removeAssignment", {
      //       id: id,
      //     });
      //   } else {
      //     vmList.forEach((o) => {
      //       if (o.materialid === id) {
      //         this.$store.dispatch("courseInfo/setAssignment", {
      //           assignment: o,
      //           id: id,
      //         });
      //       }
      //     });
      //   }
      // });
    },
    removeAssignment(type, obj) {
      if (type === "book") {
        this.$store.dispatch("courseInfo/removeAssignment", {
          id: obj.resourceid,
        });
      } else if (type === "video") {
        this.$store.dispatch("courseInfo/removeAssignment", {
          id: obj.materialid,
        });
      } else {
        this.$store.dispatch("courseInfo/removeAssignment", {
          id: obj.quizid,
        });
      }
    },
    gotoWebsite(obj) {
      if (obj.note === "book") {
        window.open(`${process.env.VUE_APP_DOMAIN}/bktchr/?pkgid=${this.courseInfo.pkgid}
        &colid=${this.courseInfo.colid}&resid=${obj.resourceid}&mid=&lmsd=${process.env.VUE_APP_LMSD}
        &auth=${this.$store.state.auth.token}&crd=${this.courseInfo.courseid}`);
      } else {
        window.open(`${process.env.VUE_APP_DOMAIN}/vptchr/?pkgid=${this.courseInfo.pkgid}
        &colid=${this.courseInfo.colid}&resid=${obj.resourceid}&mid=&lmsd=${process.env.VUE_APP_LMSD}
        &auth=${this.$store.state.auth.token}&crd=${this.courseInfo.courseid}`);
      }
    },
    async setAssignment() {
      let obj = {};
      obj.userid = this.userid;
      obj.publish_date = dayjs(this.AssignmentDue[0]).unix();
      obj.expiry_date = dayjs(this.AssignmentDue[1]).unix();
      obj.difficult = this.difficult;
      if (
        this.selectStudent.includes("*") ||
        this.selectStudent.length === this.studentList
      ) {
        obj.student = "all";
      } else {
        obj.student = this.selectStudent.join(";");
      }
      this.tempAList.forEach((el) => {
        if (el.note === "video") {
          this.$set(el, "assignment_type", "watching");
        } else if (el.note === "book") {
          this.$set(el, "assignment_type", "reading");
        } else {
          this.$set(el, "assignment_type", "speaking");
        }
      });
      obj.content = this.tempAList;
      let result = await ApiSetAssignment.post(this.courseid, obj)
        .then((response) => {
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.$store.dispatch("courseInfo/clearAllAssignment");
        this.selectStudent = "";
        this.AssignmentDue = null;
        this.difficult = "";
      }
    },
    getOpenResource(colid, rid, status) {
      let openStatus = "true";
      if (status === "true") {
        openStatus = "false";
      }
      colid = colid.split(";")[0];
      ApiGetOpenResource.get(
        colid,
        this.$route.params.courseid,
        rid,
        openStatus
      )
        .then((response) => {
          // console.log(response);
        })
        .catch((err) => {});
    },
    gotoSpeakingQuiz(m, rname = "") {
      $("#addSpeakingquiz").modal("hide");
      let mType = "video";
      if (m.note === "book") {
        mType = "book";
      }
      this.$router.push({
        path: `/quiz/${this.$route.params.course}
        /Speaking Quiz/${rname}/${m.material_name}/${this.courseid}/${mType}/${m.resourceid}/${m.materialid}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';

.sequence {
  overflow-y: scroll !important;
}

.a-sequence {
  overflow-y: scroll !important;
}
</style>