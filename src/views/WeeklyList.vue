<template>
  <div id="app2" v-if="pagaStatus">
    <div class="main-content">
      <!-- END MENU SIDEBAR WRAPPER -->
      <div class="content page-aside-left">
        <!-- TOP TOOLBAR WRAPPER -->
        <!-- END TOP TOOLBAR WRAPPER -->

        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="d-flex pb-3 col-sm-12 justify-content-between px-0">
              <div
                class="text-right"
                v-if="$route.params.expired !== 'expired'"
              >
                <button
                  v-if="wqStatus === 'true'"
                  class="btn btn-danger btn-rounded"
                  @click="setWQStatus()"
                >
                  {{ $t("disable-auto-assigned-oral-quizzes") }}
                </button>
                <button
                  v-else
                  class="btn btn-primary btn-rounded"
                  @click="setWQStatus()"
                >
                  {{ $t("enable-auto-assigned-oral-quizzes") }}
                </button>
              </div>
              <div
                class="text-right"
                v-if="$route.params.expired !== 'expired'"
              >
                <button
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                  @click="gotoGreateWQuiz()"
                  :disabled="wqQuota === 0"
                >
                  {{ $t("create-quiz") }}
                  <span class="badge badge-primary">{{ wqQuota }}</span>
                </button>
                <button
                  data-toggle="modal"
                  class="btn btn-primary btn-outline btn-rounded"
                  data-target="#DeleteModal"
                  :disabled="selectedWQ.length <= 0 ? true : false"
                >
                  {{ $t("delete-quiz") }}
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
                            <th v-if="$route.params.expired !== 'expired'">
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
                            <th
                              @click="sortTable('description')"
                              class="pointer"
                            >
                              {{ $t("description") }}
                              <i
                                class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                              ></i>
                            </th>
                            <th
                              @click="sortTable('start_date')"
                              class="pointer"
                            >
                              {{ $t("start-date") }}
                              <i
                                class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                              ></i>
                            </th>
                            <th
                              @click="sortTable('expiry_date')"
                              class="pointer"
                            >
                              {{ $t("end-date") }}
                              <i
                                class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                              ></i>
                            </th>
                            <th>{{ $t("teachers") }}</th>
                            <th>
                              {{ $t("students-completed") }}
                            </th>
                            <th>{{ $t("status") }}</th>
                            <th>{{ $t("preview") }}</th>
                            <th>{{ $t("check-progress") }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="wq in wqList" :key="wq.echovalleyid">
                            <td v-if="$route.params.expired !== 'expired'">
                              <div
                                class="custom-control custom-checkbox form-check"
                                v-if="!wq.canDelete"
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
                            <td>
                              <span v-if="wq.description !== wq.start_date">{{
                                wq.description
                              }}</span>
                              <span v-else>{{
                                $t("system-auto-assigned")
                              }}</span>
                            </td>
                            <td>{{ wq.start_date | dateConversion }}</td>
                            <td :class="calexpired(wq.expiry_date)">
                              {{ wq.expiry_date | dateConversion }}
                            </td>
                            <td>
                              <span
                                v-if="wq.designator === 'system'"
                                class="badge badge-pill badge-secondary mt-2"
                                >{{ $t("extra") }}</span
                              >
                              <span v-else>{{ wq.username }}</span>
                            </td>
                            <td>{{ wq.completed_student }} ／{{ stuQuota }}</td>
                            <td>
                              <span>{{
                                pubStatus(wq.start_date, wq.expiry_date)
                              }}</span>
                            </td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#PreviewModal"
                                @click="tempSentence = wq.sentence"
                              >
                                <i class="la la-eye"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                type=""
                                class="btn btn-primary btn-sm btn-rounded"
                                @click="
                                  gotoWQProgress(wq.echovalleyid, expired)
                                "
                              >
                                {{ $t("view") }}
                              </button>
                            </td>
                          </tr>
                          <tr v-if="wqList.length === 0">
                            <td colspan="9" class="text-center">
                              <h5>
                                {{ $t("no-echo-valley-quiz") }}
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
            <h5 class="modal-title">{{ $t("extra-quiz") }}</h5>
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
                <label class="col-form-label text-right col-sm-3">{{
                  $t("question")
                }}</label>
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
                <label class="col-form-label col-sm-3 text-right">{{
                  $t("publish")
                }}</label>
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
                <label class="col-form-label col-sm-3 text-right">{{
                  $t("due")
                }}</label>
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
              {{ $t("close") }}
            </button>
          </div>
        </div>
      </div>
    </div>

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
            <h5 class="modal-title" id="ModalTitle1">
              {{ $t("delete-quiz") }}
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
            <p>{{ $t("want-to-delete-a-checked-quiz") }}?</p>
            <p class="text-danger">
              {{ $t("the-published-quiz-cannot-be-deleted") }}
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
              data-dismiss="modal"
              @click="deleteWQ()"
            >
              {{ $t("confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- preview MODAL -->
    <div
      class="modal fade"
      id="PreviewModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("sentence") }}</h5>
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
            <p>{{ tempSentence }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-outline"
              data-dismiss="modal"
            >
              {{ $t("close") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
// import CourseHeader from "../components/CourseHeader";
import {
  ApiDeleteSentence,
  ApiGetSentence,
  ApiSetEchoStatus,
} from "../http/apis/WeeklyQuiz";
import dayjs from "dayjs";
// import _ from "lodash";
import sortBy from "lodash/sortBy";
export default {
  components: {
    CourseHeader: () => import("@/components/CourseHeader.vue"),
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
      selectAllWQ: "",
      selectedWQ: [],
      wqList: [],
      wqQuota: null,
      wqStatus: "true",
      stuQuota: 0,
      sortStatus: false,
      tempSortItem: "",
      tempSentence: "",
      expired: this.$route.params.expired,
      pagaStatus: false,
    };
  },
  created() {
    this.$store.dispatch("common/setLoading", true);
  },
  mounted() {
    this.getWeeklyQuiz();
    this.$store.dispatch("common/setLoading", false);
    this.pagaStatus = true;
  },
  computed: {},

  methods: {
    sortTable(sortItem) {
      if (this.tempSortItem === "") {
        this.tempSortItem = sortItem;
        this.sortStatus = false;
      } else if (this.tempSortItem !== sortItem) {
        this.tempSortItem = sortItem;
        this.sortStatus = false;
      } else {
      }
      this.sortStatus = !this.sortStatus;
      if (this.sortStatus) {
        this.wqList = sortBy(this.wqList, [sortItem], ["asc"]);
      } else {
        this.wqList = this.wqList.reverse();
      }

      // publish_date
    },
    calexpired(date) {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      let yestoday = dayjs(today).subtract(1, "day");
      if (
        dayjs(dayjs(yestoday).format("YYYY-MM-DD")).isBefore(
          dayjs(dayjs.unix(date).format("YYYY-MM-DD"))
        )
      ) {
        return "";
      } else {
        return "text-danger";
      }
    },
    pubStatus(start, end) {
      const dateTime = Date.now();
      const timestamp = Math.floor(dateTime / 1000);
      if (timestamp < start) {
        return "Not yet published";
      } else if (timestamp >= start && timestamp < end) {
        return "Executing";
      } else {
        return "Finish";
      }
    },
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
          if (!item.canDelete) {
            vm.selectedWQ.push(item.echovalleyid);
          }
        });
      }
    },
    deleteWQ() {
      ApiDeleteSentence.getAxiosAll(this.selectedWQ)
        .then((result) => {
          this.selectedWQ = [];
          this.getWeeklyQuiz();
          this.$bus.$emit("messsage:push", "Delete completed.", "success");
        })
        .catch((err) => {});
      // if (this.selectedWQ.length !== 0) {
      //   this.selectedWQ.forEach((wq, index) => {
      //     ApiDeleteSentence.get(wq)
      //       .then((response) => {
      //         console.log(response);
      //       })
      //       .catch((err) => {}).finally;
      //     if (index + 1 === this.selectedWQ.length) {
      //       this.selectedWQ = [];
      //       this.getWeeklyQuiz();
      //     }
      //   });
      // }
    },
    getWeeklyQuiz() {
      this.wqList = [];
      ApiGetSentence.get(this.courseid)
        .then((response) => {
          var rightNow = new Date();
          let today = dayjs(rightNow).format("YYYY-MM-DD");
          // console.log(today);
          response.record.forEach((item) => {
            dayjs(today).isBefore(
              dayjs(dayjs.unix(item.start_date).format("YYYY-MM-DD"))
            );
            item.canDelete = !dayjs(today).isBefore(
              dayjs(dayjs.unix(item.start_date).format("YYYY-MM-DD"))
            );
          });
          //           let today = new Date();
          // today.setHours(0, 0, 0, 0);
          // console.log(wqList.start_date);
          // console.log(today);
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
    gotoWQProgress(echoid, expired = "") {
      this.$router.push({
        path: `/course_weekly_quiz/progress/course=${this.$route.params.course}/type=${this.$route.params.type}/${this.$route.params.courseid}/${echoid}/${expired}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>