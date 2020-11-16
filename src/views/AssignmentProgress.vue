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
              <div class="col-4 col-md">
                <div class="card bg-secondary" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">Degree of difficulty</h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="5">5</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 col-md">
                <div class="card bg-primary" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">Completed</h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="47">47</span
                        ><span class="d-none d-xl-inlineblock">/ 50</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 col-md">
                <div class="card bg-success" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">Incomplete</h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="2">2</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md">
                <div class="card bg-warning" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">Perfect</h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="29">29</span
                        ><span class="d-none d-xl-inlineblock">/ 50</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md">
                <div class="card bg-danger" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">Fastest</h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-6">Christopher</span>
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
                    <select2
                      id="s2_student"
                      :options="statusList"
                      v-model="selectStatus"
                    >
                    </select2>
                    <!-- <select class="form-control" id="s2_demo2">
                      <option>All students</option>
                      <option>Incomplete</option>
                      <option>Unchecked</option>
                      <option>Checked</option>
                      } option
                    </select> -->
                  </div>
                  <div class="form-group form-rounded mb-0">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                        v-model="searchSname"
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
                </div>
              </div>
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-primary btn-rounded"
                  :disabled="selectedStudent.length === 0"
                  @click="checkAllA()"
                >
                  Check
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
                            <th>Student name</th>
                            <th>Progress</th>
                            <th>Complete status</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="ap in aProgressList" :key="ap.stuid">
                            <td>
                              <div
                                class="custom-control custom-checkbox form-check"
                                v-if="ap.checked !== 'true'"
                              >
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  :id="ap.stuid"
                                  v-model="selectedStudent"
                                  :value="ap.stuid"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="ap.stuid"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                                @click="
                                  getADetail(ap.stuid);
                                  sid = ap.stuid;
                                  tempSname = ap.username;
                                  evaluate = {
                                    comment: '',
                                    score: '',
                                  };
                                "
                              >
                                <!-- getSpeakScore(ap.stuid); -->
                                {{ ap.username }}
                              </button>
                            </td>
                            <td>{{ ap.completed }}/{{ ap.totalq }}</td>
                            <td>
                              <span
                                v-if="ap.completedflag !== 'true'"
                                class="text-warning"
                                >Incomplete</span
                              >
                              <span v-else class="text-success">Completed</span>
                            </td>
                            <td>
                              <span
                                class="text-danger"
                                v-if="ap.checked !== 'true'"
                                >Unchecked</span
                              >
                              <span v-else class="text-success">checked</span>
                            </td>
                            <!-- <span class="text-warning">Incomplete</span> -->
                            <!-- <td>checked</td> -->
                          </tr>
                        </tbody>
                      </table>
                      <div class="col-12">
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
                      </div>
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
    <!-- Unchecked MODAL -->
    <div
      class="modal fade modal-xl"
      id="CheckedModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-full modal-xl"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $route.params.course }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body bg-light pl-4 pr-4">
            <h2 class="pl-2">{{ tempSname }}</h2>
            <div class="row">
              <div
                class="col-9"
                style="max-height: calc(100vh - 200px)"
                data-scroll="dark"
              >
                <div class="mr-2">
                  <div
                    class="card"
                    v-for="sa in studendAssignmentList"
                    :key="sa.asgmt_mid"
                  >
                    <div class="card-body">
                      <div class="media rounded pb-2">
                        <div
                          class="align-self-center overlay-wrap mr-4 w-75 h-75 border"
                        >
                          <a
                            href="#"
                            title=""
                            class="overlay-img"
                            style="
                              background-image: url(../assets/img/avatars/3.jpg);
                            "
                          ></a>
                        </div>
                        <div class="media-body mr-3 mt-3 h-75">
                          <span
                            class="badge badge-pill badge-primary"
                            v-if="sa.type === 'reading' || sa.type === 'mcq'"
                            >Reading</span
                          >
                          <span
                            class="badge badge-pill badge-warning"
                            v-else-if="sa.type === 'video'"
                            >Watching</span
                          >
                          <span
                            class="badge badge-pill badge-accent"
                            v-else-if="sa.type === 'speaking'"
                            >Speaking Quiz</span
                          >
                          <p class="mb-0 mt-1">{{ sa.resource_name }}</p>
                        </div>
                      </div>
                      <!-- 完成與否 -->
                      <div class="border-top pt-3">
                        <h5 class="text-danger" v-if="sa.complete_time === ''">
                          <span class="btn-rounded-icon btn-danger rounded mr-2"
                            ><i
                              class="zmdi zmdi-close zmdi-hc-fw text-white"
                            ></i></span
                          >incomplete
                        </h5>
                        <h5 class="text-success" v-else>
                          <span
                            class="btn-rounded-icon btn-success rounded mr-2"
                            ><i
                              class="zmdi zmdi-check zmdi-hc-fw text-white"
                            ></i></span
                          >complete
                        </h5>
                      </div>

                      <!-- 完成與否 -->
                      <!-- 題目內容 -->
                      <div class="border-top pt-2" v-if="sa.type === 'mcq'">
                        <p>
                          Total number of incorrect answers
                          <strong class="text-danger display-6">{{
                            sa.supplement.errno
                          }}</strong>
                        </p>
                        <!-- 判定是全正確 -->
                        <h5
                          class="text-success"
                          v-if="sa.supplement.error_status === undefined"
                        >
                          <span
                            class="btn-rounded-icon btn-success rounded mr-2"
                            ><i
                              class="zmdi zmdi-check zmdi-hc-fw text-white"
                            ></i></span
                          >Perfact!
                        </h5>
                        <ul class="d-flex justify-content-start mb-0">
                          <li
                            class="mr-3"
                            v-for="(answerError, index) in sa.supplement
                              .error_status"
                            :key="index"
                          >
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              {{ index }}
                            </div>
                            <p class="text-center text-danger pb-0">
                              <strong>{{ answerError }}</strong>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="border-top pt-2"
                        v-if="sa.type === 'speaking'"
                      >
                        <ul class="quiz-list">
                          <li
                            v-for="se in sa.sentenceInfo"
                            :key="se.sentenceid"
                          >
                            <strong class="text-primary mr-2"
                              >Q{{ se.sentenceSeq }}.</strong
                            >
                            {{ se.sentenceContent
                            }}<i
                              class="zmdi zmdi-volume-up zmdi-hc-fw ml-2 pointer"
                              @click="
                                getVoice(se.voiceID);
                                playVoiceStatus = se.voiceID;
                              "
                              :class="
                                playVoiceStatus === se.voiceID
                                  ? 'text-success'
                                  : ''
                              "
                            ></i>
                          </li>
                        </ul>
                        <h6 class="mt-4">
                          Speaking quiz score
                          <small class="text-muted">(optional)</small>
                        </h6>
                        <div class="row mb-4">
                          <div class="col">
                            <div class="slidecontainer">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                class="slider"
                                :id="sa.asgmt_mid + 'myRange'"
                                v-model="speakingList[sa.asgmt_mid]"
                              />
                              <span
                                class="w-50 text-left text-primary"
                                :id="sa.asgmt_mid + 'demo'"
                              >
                                {{ speakingList[sa.asgmt_mid] }}
                              </span>
                            </div>
                            <!-- <div class="progress mt-2" style="height: 12px">
                              <div
                                class="progress-bar bg-primary"
                                role="progressbar"
                                style="width: 25%"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card">
                  <h5 class="card-header">Teacher feedback</h5>
                  <div class="card-body">
                    <h6>
                      Extra bonus <small class="text-muted">(optional)</small>
                    </h6>
                    <div class="mt-3">
                      <a title="" class="bonus">
                        <i
                          class="la la-gift mr-1 display-6 active pointer"
                          v-for="index in 3"
                          :key="index"
                          @click="evaluate.score = index"
                          :style="{
                            color: evaluate.score >= index ? 'orange' : '',
                          }"
                        ></i>
                        <!-- <i class="la la-gift mr-1 display-6 active pointer"></i>
                        <i
                          class="la la-gift mr-1 display-6 pointer"
                          style="color: orange"
                        ></i
                      > -->
                      </a>
                    </div>
                    <h6 class="mt-4">
                      Comments <small class="text-muted">(optional)</small>
                    </h6>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="6"
                      placeholder="Leave a message to student..."
                      v-model="evaluate.comment"
                    ></textarea>
                    <div class="pt-2">
                      <button
                        @click="quickNewComments(qc)"
                        v-for="qc in quickComments"
                        :key="qc"
                        class="btn btn-secondary btn-outline btn-rounded btn-sm mb-2 mr-2"
                      >
                        {{ qc }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded mr-2"
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
              @click="setEvaluate()"
            >
              Check
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
  ApiGetAProgress,
  ApiCheckAllA,
  ApiGetADetail,
  ApiGetVoice,
  ApiSetEvaluate,
  ApiSetSpeakScore,
  ApiSearchStudent,
} from "../http/apis/Assignment";
export default {
  name: "AssignmentProgress",
  components: { CourseHeader },
  data() {
    return {
      aid: this.$route.params.aid,
      sid: "",
      aProgressList: [],
      studendAssignmentList: [],
      evaluate: {
        score: "",
        comment: "",
      },
      tempSname: "",
      quickComments: [
        "Good Job!",
        "Awesome!",
        "Go for it!",
        "You nailed it!",
        "You are almost there!",
      ],
      selectedStudent: [],
      statusList: [
        { text: "All students", id: "*" },
        { text: "Completed", id: "complete" },
        { text: "Incomplete", id: "incomplete" },
        { text: "Checked", id: "checked" },
        { text: "Unchecked", id: "unchecked" },
      ],
      selectStatus: "*",
      searchSname: "",
      selectAllS: "",
      playVoiceStatus: "",
      speakingList: {},
    };
  },
  created() {
    this.getAProgress();
  },
  mounted() {},
  methods: {
    searchStudent() {
      let keyword = "*";
      if (
        this.searchSname !== "" &&
        this.searchSname !== undefined &&
        this.searchSname !== null
      ) {
        keyword = this.searchSname;
      }
      ApiSearchStudent.get(this.aid, this.selectStatus, keyword)
        .then((response) => {
          this.aProgressList = response.record;
        })
        .catch((err) => {});
    },
    selectAll(event) {
      const vm = this;

      if (!event.currentTarget.checked) {
        vm.selectedStudent = [];
      } else {
        //實現全選
        vm.selectedStudent = [];
        vm.aProgressList.forEach(function (item, i) {
          vm.selectedStudent.push(item.stuid);
        });
      }
    },
    getAProgress() {
      ApiGetAProgress.get(this.aid)
        .then((response) => {
          this.aProgressList = response.record;
          this.$store.dispatch("courseInfo/setAssignmentTime", {
            pubDate: response.publish_date,
            expDate: response.expiry_date,
          });
        })
        .catch((err) => {});
    },
    quickNewComments(c) {
      this.evaluate.comment = this.evaluate.comment + c;
      console.log(this.evaluate.comment);
    },
    async checkAllA() {
      // console.log(this.selectedStudent);
      let checkSList = this.selectedStudent.join(";");
      let result = await ApiCheckAllA.post(this.aid, checkSList)
        .then((response) => {
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.getAProgress();
      }
    },
    getADetail(sid) {
      ApiGetADetail.get(this.aid, sid)
        .then((response) => {
          // console.log(response.record);
          if (response.status !== "failed") {
            this.studendAssignmentList = response.record;
            if (
              response.score !== undefined &&
              response.comment !== undefined
            ) {
              this.evaluate.score = response.score;
              this.evaluate.comment = response.comment;
            }
            response.record.forEach((item) => {
              if (item.type === "speaking") {
                this.$set(this.speakingList, item.asgmt_mid, item.score);
                //
                var slider = document.getElementById(
                  `${item.asgmt_mid}myRange`
                );
                // var output = document.getElementById(`${item.asgmt_mid}demo`);
                // output.innerHTML = slider.value; // Display the default slider value

                // // Update the current slider value (each time you drag the slider handle)
                // slider.oninput = function () {
                //   output.innerHTML = this.value;
                // };
              }
            });
          }
        })
        .catch((err) => {});
    },
    getVoice(voiceid) {
      ApiGetVoice.get(voiceid)
        .then((response) => {
          console.log(object);
        })
        .catch((err) => {});
    },
    async setEvaluate() {
      let result = await ApiSetEvaluate.post(this.aid, this.sid, this.evaluate)
        .then((response) => {
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        for await (const [key, value] of Object.entries(this.speakingList)) {
          this.setSpeakScore(key, value);
        }
        await this.getAProgress();
      }
    },
    setSpeakScore(amid, score) {
      ApiSetSpeakScore.get(this.aid, amid, this.sid, score)
        .then((response) => {})
        .catch((err) => {});
    },
  },
};
</script>

<style scoped lang="scss">
#exampleFormControlTextarea1 {
  height: 100px;
}
.modal-dialog {
  max-width: 100%;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  display: flex;
  position: fixed;
  z-index: 100000;
}

.modal[data-modal="scroll"] .modal-body {
  max-height: 100vh;
  overflow-y: auto;
}
// .modal-full {
//   min-width: 100%;
//   margin: 0;
// }

// .modal-full .modal-content {
//   min-height: 100vh;
// }
// .main-content {
//   overflow-y: hidden !important;
// }
//@import '../assets/css/igroup.css';

.modal-footer {
  background: #fff;
  // display: flex;
  // align-items: flex-start;
  // justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  // -webkit-appearance: none; /* Override default CSS styles */
  // appearance: none;
  width: 60%; /* Full-width */
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px;
  border-radius: 50%;
  background: #4caf50; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px;
  border-radius: 50%;
  background: #4caf50; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
</style>