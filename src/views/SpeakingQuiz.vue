<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <menu-left></menu-left>
        <div class="main-content">
          <header class="page-header">
            <div class="d-flex align-items-start">
              <div class="mt-2 mr-3">
                <a @click="$back" class="btn-rounded-icon btn-primary ml-2"
                  ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
                ></a>
              </div>
              <div class="mr-auto">
                <h1>Speaking Quiz</h1>
                <p class="second-title">Unit9 MY FAMILY / Lesson 3 PRONOUNCE</p>
              </div>
            </div>
          </header>
          <section class="page-content container-fluid">
            <div class="row pb-3">
              <div class="col-12 text-right">
                <a
                  class="btn btn-primary btn-outline btn-rounded"
                  v-if="quizShow === 'home'"
                  @click="editQuiz()"
                  ><i class="zmdi zmdi-plus zmdi-hc-fw"></i>Create New Quiz</a
                >
              </div>
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
                            <th>Assignment times</th>
                            <th>Student number</th>
                            <th>Completion rate</th>
                            <th>Preview</th>
                            <th>Add to assignment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2020.01.12</td>
                            <td>Amanda</td>
                            <td>10</td>
                            <td>10</td>
                            <td>470</td>
                            <td>90%</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#SpeakingQuizPreviewModal"
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
                              >
                                Add
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2020.01.23</td>
                            <td>Geoffrey</td>
                            <td>6</td>
                            <td>8</td>
                            <td>256</td>
                            <td>100%</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#SpeakingQuizPreviewModal"
                              >
                                <i class="la la-eye display-6"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                type=""
                                class="btn btn-secondary btn-sm btn-rounded"
                                data-toggle="modal"
                                data-target="#AddedModal"
                              >
                                Added
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2020.02.08</td>
                            <td>Jim</td>
                            <td>10</td>
                            <td>4</td>
                            <td>125</td>
                            <td>92%</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#SpeakingQuizPreviewModal"
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
                              >
                                Add
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2020.02.16</td>
                            <td>Mark</td>
                            <td>8</td>
                            <td>1</td>
                            <td>41</td>
                            <td>89%</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#SpeakingQuizPreviewModal"
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
                              >
                                Add
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>2020.02.16</td>
                            <td>Diana</td>
                            <td>5</td>
                            <td>1</td>
                            <td>37</td>
                            <td>95%</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#SpeakingQuizPreviewModal"
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
                              >
                                Add
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
      <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer>
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
import CustomHeader from "../components/CustomHeader";
import MenuLeft from "../components/MenuLeft";
// import Menu
export default {
  name: "SpeakingQuiz",
  components: {
    CustomHeader,
    MenuLeft,
  },
  data() {
    return {
      quizShow: "home",
    };
  },

  methods: {
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