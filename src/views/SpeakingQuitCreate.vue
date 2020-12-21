<template>
  <div id="app2">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content">
      <!-- TOP TOOLBAR WRAPPER -->
      <!-- <custom-header></custom-header> -->
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="">
        <!-- <menu-left></menu-left> -->
        <div class="">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row pb-3">
              <div class="col-12 text-right"></div>
            </div>
            <!--edit quiz-->
            <div class="row" v-if="quizShow === 'edit'">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div
                      class="custom-control custom-checkbox form-check mb-4"
                      v-for="s in sList"
                      :key="s.sentenceid"
                    >
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        :id="s.sentenceid"
                        v-model="tempSList"
                        :value="s"
                      />
                      <label class="custom-control-label" :for="s.sentenceid"
                        >{{ s.sentence }}
                        <!-- <span class="text-danger ml-2"
                          >Hot!</span
                        > -->
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 text-right">
                <button
                  type=""
                  class="btn btn-primary btn-rounded"
                  @click="
                    quizShow = 'preview';
                    convertS();
                  "
                >
                  Next
                </button>
              </div>
            </div>
            <!--edit quiz end-->
            <!-- preview quiz-->
            <div class="row" v-if="quizShow === 'preview'">
              <div class="col-12">
                <div class="card mb-2">
                  <div class="card-body">
                    <ul class="quiz-list">
                      <li v-for="(ts, index) in finalS" :key="ts">
                        <strong class="text-primary mr-2"
                          >Q{{ index + 1 }}.</strong
                        >{{ ts }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="custom-control custom-checkbox form-check ml-3">
                  <!-- <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                    checked
                  />
                  <label class="custom-control-label" for="customCheck1"
                    >Add to Assignment</label
                  > -->
                </div>
              </div>
              <div class="col-12 text-right">
                <button
                  type=""
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                  @click="quizShow = 'edit'"
                >
                  Back
                </button>
                <button
                  type=""
                  class="btn btn-primary btn-rounded"
                  @click="setS()"
                >
                  Create
                </button>
              </div>
            </div>
            <!-- preview quiz end-->
            <!-- spaking quiz -->
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
            <h5 class="modal-title">Diana</h5>
            <span class="ml-3 text-muted"><small>2020.03.19</small></span>
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
              <li>
                <strong class="text-primary mr-2">Q1.</strong>She likes maths
                and science.
              </li>
              <li>
                <strong class="text-primary mr-2">Q2.</strong>Her favourite
                colour is pink and her superpower is data processing.
              </li>
              <li>
                <strong class="text-primary mr-2">Q3.</strong>How old are you?
              </li>
              <li><strong class="text-primary mr-2">Q4.</strong>I'm 10.</li>
              <li>
                <strong class="text-primary mr-2">Q5.</strong>10 is a great
                number.
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
            <h5 class="modal-title">取消加入assignment</h5>
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
            <p>是否取消已加入assignment?</p>
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
              取消加入
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
  ApiGetSubtitileByVideo,
  ApiGetSubtitleByBook,
  ApiSetSByVideo,
  ApiSetSByBook,
} from "../http/apis/Quiz";
// import Menu
export default {
  name: "SpeakingQuizCreate",
  components: {
    CourseHeader,
  },
  data() {
    return {
      quizShow: "edit",
      rid: this.$route.params.rid,
      mid: this.$route.params.mid,
      courseid: this.$route.params.courseid,
      sList: [],
      tempSList: [],
      finalS: [],
    };
  },
  created() {},
  mounted() {
    this.getSubtitleList();
  },
  computed: {
    pkgid() {
      return this.$store.state.courseInfo.courseInfo.pkgid;
    },
    colid() {
      return this.$store.state.courseInfo.courseInfo.colid.split(";")[0];
    },
    userid() {
      return this.$store.state.auth.userid;
    },
  },
  methods: {
    getSubtitleList() {
      //video
      if (this.$route.params.note === "video") {
        ApiGetSubtitileByVideo.get(this.pkgid, this.colid, this.rid, this.mid)
          .then((response) => {
            console.log(response);
            this.sList = response.record;
          })
          .catch((err) => {
            console.log("err = ", err);
          });
      } else {
        //book
        ApiGetSubtitleByBook.get(this.pkgid, this.colid, this.rid)
          .then((response) => {
            console.log(response);
            this.sList = response.record;
          })
          .catch((err) => {});
      }
    },
    editQuiz() {
      this.quizShow = "edit";
    },
    convertS() {
      this.finalS = [];
      this.tempSList.sort((a, b) => {
        return Number(a.seq) > Number(b.seq) ? 1 : -1;
      });
      this.tempSList.forEach((element) => {
        this.finalS.push(element.sentence);
      });
    },
    setS() {
      let obj = {};
      obj.userid = this.userid;
      obj.sentence = this.finalS;
      if (this.$route.params.note === "video") {
        ApiSetSByVideo.post(this.rid, this.mid, this.courseid, obj)
          .then((response) => {
            if (response.status === "success") {
              this.$router.push({
                path: `/quiz/${this.$route.params.course}
        /Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`,
              });
            }
          })
          .catch((err) => {});
      } else {
        ApiSetSByBook.post(this.rid, this.courseid, obj)
          .then((response) => {
            if (response.status === "success") {
              this.$router.push({
                path: `/quiz/${this.$route.params.course}
        /Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`,
              });
            }
          })
          .catch((err) => {});
      }
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>