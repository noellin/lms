<template>
  <div id="app2">
    <div class="main-content">
      <!-- END MENU SIDEBAR WRAPPER -->
      <div class="content-wrapper">
        <!-- TOP TOOLBAR WRAPPER -->
        <!-- END TOP TOOLBAR WRAPPER -->

        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="d-flex pb-3 col-sm-12 justify-content-between px-0">
              <div class="text-right">
                <button
                  class="btn btn-primary btn-outline btn-rounded"
                  @click="setWQStatus()"
                >
                  <span v-if="wqStatus === 'true'">Close Weekly Quiz</span>
                  <span v-else>Open Weekly Quiz</span>
                </button>
              </div>
              <div class="text-right">
                <button
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                  @click="gotoGreateWQuiz()"
                >
                  Create Quiz
                  <span class="badge badge-primary">{{ wqQuota }}</span>
                </button>
                <button
                  data-toggle="modal"
                  class="btn btn-primary btn-outline btn-rounded"
                  data-target="#DeleteModal"
                  :disabled="selectedWQ.length <= 0 ? true : false"
                >
                  Delete Quiz
                  <span
                    class="badge badge-danger"
                    v-if="selectedWQ.length !== 0"
                    >{{ selectedWQ.length }}</span
                  >
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
                                  v-model="selectAllWQ"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck"
                                ></label>
                              </div>
                            </th>
                            <th>Publish</th>
                            <th>Due</th>
                            <th>Author</th>
                            <th>Completed ／Total students</th>
                            <!-- <th>Action</th> -->
                            <th>Check progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="wq in wqList" :key="wq.echovalleyid">
                            <td>
                              <div
                                class="custom-control custom-checkbox form-check"
                              >
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  :id="wq.echovalleyid"
                                  v-model="selectedWQ"
                                  :value="wq.echovalleyid"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="wq.echovalleyid"
                                ></label>
                              </div>
                            </td>
                            <td>{{ wq.start_date | dateConversion }}</td>
                            <td>{{ wq.expiry_date | dateConversion }}</td>
                            <td>
                              <span
                                v-if="wq.designator === 'system'"
                                class="badge badge-pill badge-secondary mt-2"
                                >Extra</span
                              >
                              <span v-else>{{ wq.username }}</span>
                            </td>
                            <td>{{ wq.completed_student }} ／{{ stuQuota }}</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-primary btn-sm btn-rounded"
                                @click="gotoWQProgress(wq.echovalleyid)"
                              >
                                Progress view
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
          </section>
        </div>
      </div>
    </div>
    <!-- END CONTENT WRAPPER -->
    <!-- Extra quiz MODAL -->
    <div
      class="modal fade"
      id="ExtraquizModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Extra quiz</h5>
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
                <label class="col-form-label text-right col-sm-3"
                  >Question</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="Her favourite colour is pink and her superpower is data processing."
                    disabled
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-right"
                  >Publish</label
                >
                <div class="col">
                  <input
                    type="text"
                    class="form-control date-picker-input"
                    placeholder="Select Date"
                    value="2020.08.24"
                    disabled
                  />
                </div>
                <div class="col-2 pt-2 pl-0">06:00:00</div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-right">Due</label>
                <div class="col">
                  <input
                    type="text"
                    class="form-control date-picker-input"
                    placeholder="Select Date"
                    value="2020.08.28"
                    disabled
                  />
                </div>
                <div class="col-2 pt-2 pl-0">23:59:59</div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Insufficient Quota Modal -->
    <!-- <div
      class="modal fade"
      id="InsufficientQuotaModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Insufficient quota</h5>
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
              Extra Quiz quota is based on the package contract. If you need to
              use Extra Quiz, please purchase separately?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Edit Quota Modal -->
    <!-- <div
      class="modal fade"
      id="EditModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <span class="text-secondary">Publish</span>
              <strong>2020.09.07</strong> 06:00:00 -
              <span class="text-secondary">Due</span>
              <strong>2020.09.11</strong> 23:59:59
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
            <p>
              The questions of the weekly quiz are selected by the system based
              on material. You can also enter the question yourself.
            </p>
            <div class="custom-control custom-radio form-check">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1"
                >She likes maths and science.</label
              >
            </div>
            <div class="custom-control custom-radio form-check">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="custom-control-input"
                checked
              />
              <label
                class="custom-control-label"
                for="customRadio2"
                style="display: block; height: auto"
              >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Please enter a question of the weekly quiz..."
                  rows="3"
                ></textarea>
              </label>
            </div>
            <p class="text-muted text-right"><small>0/100</small></p>
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
              data-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Preview Modal -->
    <!-- <div
      class="modal fade"
      id="PreviewModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <span class="text-secondary">Publish</span>
              <strong>2020.09.07</strong> 06:00:00 -
              <span class="text-secondary">Due</span>
              <strong>2020.09.11</strong> 23:59:59
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
            <p>
              The questions of the weekly quiz are selected by the system based
              on material. You can also enter the question yourself.
            </p>
            <div class="custom-control custom-radio form-check">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1"
                >She likes maths and science.</label
              >
            </div>
            <div class="custom-control custom-radio form-check">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="custom-control-input"
                checked
              />
              <label
                class="custom-control-label"
                for="customRadio2"
                style="display: block; height: auto"
              >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Please enter a question of the weekly quiz..."
                  rows="3"
                >
Her favourite colour is pink and her superpower is data processing.</textarea
                >
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- DeleteAModal MODAL-->
    <div
      class="modal fade"
      id="DeleteModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">Delete Weekly Quiz</h5>
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
            <p>Want to delete a checked quiz?</p>
            <p class="text-danger">The published QUIZ cannot be deleted</p>
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
              @click="deleteWQ()"
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
  ApiDeleteSentence,
  ApiGetSentence,
  ApiSetEchoStatus,
} from "../http/apis/WeeklyQuiz";
export default {
  components: {
    CourseHeader,
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
      selectAllWQ: "",
      selectedWQ: [],
      wqList: [],
      wqQuota: "",
      wqStatus: "true",
      stuQuota: 0,
    };
  },
  mounted() {
    this.getWeeklyQuiz();
  },
  methods: {
    setWQStatus() {
      let status = "true";
      if (this.wqStatus === "true") {
        status = "false";
      }
      ApiSetEchoStatus.get(this.courseid, status)
        .then((response) => {
          console.log(response);
          if (response.status === "success") {
            this.getWeeklyQuiz();
          }
        })
        .catch((err) => {});
    },
    selectAll(event) {
      const vm = this;
      if (!event.currentTarget.checked) {
        vm.selectedWQ = [];
      } else {
        //實現全選
        vm.selectedWQ = [];
        vm.wqList.forEach(function (item, i) {
          vm.selectedWQ.push(item.echovalleyid);
        });
      }
    },
    deleteWQ() {
      if (this.selectedWQ.length !== 0) {
        this.selectedWQ.forEach((wq, index) => {
          ApiDeleteSentence.get(wq)
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {});
          if (index + 1 === this.selectedWQ.length) {
            this.selectedWQ = [];
            this.getWeeklyQuiz();
          }
        });
      }
    },
    getWeeklyQuiz() {
      ApiGetSentence.get(this.courseid)
        .then((response) => {
          this.wqList = response.record;
          this.wqQuota = response.course_info.echovalley_quota;
          this.wqStatus = response.course_info.echovalley_flag;
          this.stuQuota = response.course_info.quota;
        })
        .catch((err) => {});
    },
    gotoGreateWQuiz() {
      this.$router.push({
        path: `/course_weekly_quiz/create/course=${this.$route.params.course}/type=${this.$route.params.type}/${this.$route.params.courseid}`,
      });
    },
    gotoWQProgress(echoid) {
      this.$router.push({
        path: `/course_weekly_quiz/progress/course=${this.$route.params.course}/type=${this.$route.params.type}/${this.$route.params.courseid}/${echoid}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>