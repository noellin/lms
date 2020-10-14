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
              <div class="col-12 text-right"></div>
            </div>
            <!--edit quiz-->
            <div class="row" v-if="quizShow === 'edit'">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1"
                        >Welcome to The Planet Pop Show!</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck2"
                      />
                      <label class="custom-control-label" for="customCheck2"
                        >Meet your host Alice.<span class="text-danger ml-2"
                          >Hot!</span
                        ></label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck3"
                      />
                      <label class="custom-control-label" for="customCheck3"
                        >And today's Planet Pop Superstar is Lily-Brainy
                        Kid.</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck4"
                        checked
                      />
                      <label class="custom-control-label" for="customCheck4"
                        >She likes maths and science.</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck5"
                        checked
                      />
                      <label class="custom-control-label" for="customCheck5"
                        >Her favourite colour is pink and her superpower is data
                        processing.</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck6"
                      />
                      <label class="custom-control-label" for="customCheck6"
                        >Hello. Conversation Practice.</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck7"
                      />
                      <label class="custom-control-label" for="customCheck7"
                        >Hi Lily.</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck8"
                      />
                      <label class="custom-control-label" for="customCheck8"
                        >Hi Alice</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck9"
                      />
                      <label class="custom-control-label" for="customCheck9"
                        >Welcome to The Planet Pop Show!</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck10"
                      />
                      <label class="custom-control-label" for="customCheck10"
                        >Let's learn about numbers today.</label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck11"
                        checked
                      />
                      <label class="custom-control-label" for="customCheck11"
                        >How old are you?<span class="text-danger ml-2"
                          >Hot!</span
                        ></label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck12"
                        checked
                      />
                      <label class="custom-control-label" for="customCheck12"
                        >I'm 10.<span class="text-danger ml-2"
                          >Hot!</span
                        ></label
                      >
                    </div>
                    <div class="custom-control custom-checkbox form-check">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck13"
                        checked
                      />
                      <label class="custom-control-label" for="customCheck13"
                        >10 is a great number.<span class="text-danger ml-2"
                          >Hot!</span
                        ></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 text-right">
                <button
                  type=""
                  class="btn btn-primary btn-rounded"
                  @click="quizShow = 'preview'"
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
                      <li>
                        <strong class="text-primary mr-2">Q1.</strong>She likes
                        maths and science.
                      </li>
                      <li>
                        <strong class="text-primary mr-2">Q2.</strong>Her
                        favourite colour is pink and her superpower is data
                        processing.
                      </li>
                      <li>
                        <strong class="text-primary mr-2">Q3.</strong>How old
                        are you?
                      </li>
                      <li>
                        <strong class="text-primary mr-2">Q4.</strong>I'm 10.
                      </li>
                      <li>
                        <strong class="text-primary mr-2">Q5.</strong>10 is a
                        great number.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="custom-control custom-checkbox form-check ml-3">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                    checked
                  />
                  <label class="custom-control-label" for="customCheck1"
                    >Add to Assignment</label
                  >
                </div>
              </div>
              <div class="col-12 text-right">
                <button
                  type=""
                  class="btn btn-primary btn-outline btn-rounded"
                  @click="quizShow === 'edit'"
                >
                  Back
                </button>
                <button
                  type=""
                  class="btn btn-primary btn-rounded"
                  @click="saveQuiz()"
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
    };
  },
  created() {},
  methods: {
    getSubtitleList() {
      if (this.$route.params.note === "video") {
      } else {
      }
    },
    editQuiz() {
      this.quizShow = "edit";
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