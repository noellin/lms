<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <!-- <custom-header></custom-header> -->
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <!-- <menu-left></menu-left> -->
        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row pb-3">
              <div class="col-12 text-right">
                <a
                  class="btn btn-primary btn-outline btn-rounded"
                  v-if="quizShow === 'home'"
                  @click="gotoQuitCreate()"
                  ><i class="zmdi zmdi-plus zmdi-hc-fw"></i>Create New Quiz</a
                >
              </div>
            </div>
            <!-- preview quiz end-->
            <!-- spaking quiz -->
            <div class="row" v-if="quizShow === 'home'">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Creation date</th>
                            <th>Author</th>
                            <th>Number of questions</th>
                            <!-- <th>Assignment times</th>
                            <th>Student number</th>
                            <th>Completion rate</th> -->
                            <th>Preview</th>
                            <th>Add to assignment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="q in quizList" :key="q.quizid">
                            <td>{{ q.create_date | dateConversion }}</td>
                            <td>{{ q.username }}</td>
                            <td>{{ q.count }}</td>
                            <!-- <td>10</td>
                            <td>470</td>
                            <td>90%</td> -->
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#SpeakingQuizPreviewModal"
                                @click="
                                  getSList(q.quizid);
                                  tempSname = q.username;
                                  tempStime = q.create_date;
                                "
                              >
                                <i class="la la-eye display-6"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                type=""
                                class="btn btn-primary btn-sm btn-rounded"
                                data-toggle="modal"
                                data-target="#AddModal"
                                data-dismiss="modal"
                                v-if="!q.added"
                                @click="addtoAssignment(q)"
                              >
                                Add
                              </button>
                              <button
                                type=""
                                class="btn btn-secondary btn-sm btn-rounded"
                                data-toggle="modal"
                                data-target="#AddedModal"
                                v-else
                                @click="tempQid = q.quizid"
                              >
                                Added
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
            <!-- spaking quiz end-->
          </section>
        </div>
      </div>
    </div>
    <!-- END CONTENT WRAPPER -->
    <!-- SpeakingQuizPreview MODAL -->
    <div
      class="modal fade"
      id="SpeakingQuizPreviewModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ tempSname }}</h5>
            <span class="ml-3 text-muted"
              ><small>{{ tempStime | dateConversion }}</small></span
            >
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
            <ul class="quiz-list">
              <li v-for="s in SList" :key="s.sentenceID">
                <strong class="text-primary mr-2">Q{{ s.seq }}.</strong
                >{{ s.content }}
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-outline"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Modal -->
    <div
      class="modal modal-top-frame fade"
      id="AddModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          已加入
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true" class="la la-close"></span>
          </button>
        </div>
      </div>
    </div>
    <!-- Added Modal -->
    <div
      class="modal fade"
      id="AddedModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Remove</h5>
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
            <p>Does it cancel an assignment that has been added?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="removeAssignment(tempQid)"
              data-dismiss="modal"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CourseHeader from "../components/CourseHeader";
import {
  ApiGetQuizByVideo,
  ApiGetQuizByBook,
  ApiGetSList,
  ApiGetQuizList,
} from "../http/apis/Quiz";
// import Menu
export default {
  name: "SpeakingQuiz",
  components: {
    CourseHeader,
  },
  data() {
    return {
      quizShow: "home",
      quizList: [],
      rid: this.$route.params.rid,
      mid: this.$route.params.mid,
      SList: [],
      tempSname: "",
      tempStime: new Date(),
      tempQid: "",
    };
  },
  mounted() {
    this.getQuitList();
  },
  watch: {
    tempAIDList() {
      this.getQuitList();
    },
  },
  computed: {
    tempAIDList() {
      return this.$store.state.courseInfo.tempAIDList;
    },
    tempAList() {
      return this.$store.state.courseInfo.tempAList;
    },
  },
  methods: {
    async getQuitList() {
      let getQstatus = await ApiGetQuizList.get(
        this.rid,
        this.mid,
        this.$route.params.note
      )
        .then((response) => {
          this.quizList = response.record;
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (getQstatus) {
        this.quizList.forEach((element) => {
          if (this.tempAIDList.indexOf(element.quizid) !== -1) {
            this.$set(element, "added", true);
          } else {
            this.$set(element, "added", false);
          }
          this.$set(element, "resource_name", this.$route.params.rname);
          this.$set(element, "material_name", this.$route.params.mname);
        });
      }
    },
    addtoAssignment(q) {
      this.$store.dispatch("courseInfo/setAssignment", {
        assignment: q,
        id: q.quizid,
      });
    },
    removeAssignment(qid) {
      this.$store.dispatch("courseInfo/removeAssignment", {
        id: qid,
      });
    },
    getSList(qid) {
      ApiGetSList.get(qid)
        .then((response) => {
          this.SList = response.record;
        })
        .catch((err) => {});
    },
    gotoQuitCreate() {
      this.$router.push({
        path: `/quizcreate/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.$route.params.courseid}/${this.$route.params.note}/${this.$route.params.rid}/${this.$route.params.mid}`,
      });
    },
    saveQuiz() {
      this.quizShow = "home";
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>