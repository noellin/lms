<template>
  <div id="app2">
    <div class="main-content">
      <!-- END MENU SIDEBAR WRAPPER -->
      <div class="content-wrapper">
        <!-- TOP TOOLBAR WRAPPER -->

        <!-- END TOP TOOLBAR WRAPPER -->
        <div class="content page-aside-left">
          <div class="main-content">
            <course-header></course-header>
            <section class="page-content container-fluid">
              <div class="pb-3">
                <div class="d-flex">
                  <div class="form-group form-rounded mb-0 mr-3">
                    <select2
                      id="s2_student"
                      :options="search.options"
                      v-model="selectOption"
                    >
                    </select2>
                  </div>
                  <div class="form-group form-rounded mb-0">
                    <div class="input-group">
                      <input
                        v-model="search.keyword"
                        type="text"
                        class="form-control"
                        placeholder="Search Student name"
                        @keyup.enter="searchWQStudent()"
                      />
                      <div class="input-group-append">
                        <div
                          class="btn btn-secondary btn-outline btn-icon btn-rounded"
                          type="button"
                          @click="searchWQStudent()"
                        >
                          <i class="zmdi zmdi-search text-secondary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--  -->
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body row col-sm-12">
                      <div class="col-sm-12">
                        <p>
                          The questions of the weekly quiz are selected by the
                          system based on material. You can also enter the
                          question yourself.
                        </p>
                      </div>

                      <div class="col-sm-12">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea2"
                          placeholder="Please enter a question of the weekly quiz..."
                          rows="6"
                          v-model="weeklyQuiz.sentence"
                          disabled
                        ></textarea>
                        <span class="text-muted"
                          ><small
                            >{{ weeklyQuiz.sentence.length }}/500</small
                          ></span
                        >
                        <div class="col-sm-12 px-0 mt-2">
                          <label class="col-form-label col-sm-12 px-0"
                            >Date of publication</label
                          >

                          <!-- <date-picker
                            v-model="weeklyQuiz.publishTime"
                            type="date"
                            valueType="format"
                            range
                            placeholder="Select date range"
                          ></date-picker> -->
                          <span class="mr-2">{{
                            weeklyQuiz.publishTime | arrayToString
                          }}</span>
                          <!-- <i class="zmdi zmdi-calendar-alt"></i> -->
                        </div>
                        <div
                          class="col-sm-12 d-flex justify-content-start px-0 mt-4"
                        >
                          <button
                            v-if="allowEdit"
                            type="button"
                            class="btn btn-primary btn-outline btn-rounded"
                            data-toggle="modal"
                            data-target="#ModifyModal"
                          >
                            Modify
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
              <div class="row" v-if="wqStudentList.length !== 0">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>Student name</th>
                              <th>Score</th>
                              <th>Record</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="wqitem in wqStudentList"
                              :key="wqitem.userid"
                            >
                              <td>{{ wqitem.username }}</td>
                              <td>
                                <span
                                  v-if="
                                    wqStudentList.length !== 0 &&
                                    wqitem.stu_info.length > 0
                                  "
                                >
                                  {{ wqitem.stu_info[1] }}
                                </span>
                                <span v-else></span>
                              </td>
                              <td
                                v-if="
                                  wqStudentList.length !== 0 &&
                                  wqitem.stu_info.length > 0
                                "
                              >
                                <button class="btn btn-nostyle">
                                  <i
                                    class="zmdi zmdi-volume-up zmdi-hc-fw ml-2 text-primary"
                                  ></i>
                                </button>
                              </td>
                              <td v-else>Incomplete</td>
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- DeleteAModal MODAL-->
    <div
      class="modal fade"
      id="ModifyModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">Modify Weekly Quiz</h5>
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
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Please enter a question of the weekly quiz..."
              rows="6"
              v-model="weeklyQuiz.sentence"
              maxlength="500"
            ></textarea>
            <span class="text-muted"
              ><small>{{ weeklyQuiz.sentence.length }}/500</small></span
            >

            <label class="col-form-label col-sm-12 px-0"
              >Date of publication</label
            >

            <date-picker
              v-model="weeklyQuiz.publishTime"
              type="date"
              valueType="format"
              range
              placeholder="Select date range"
              :disabled-date="disabledBeforeToday"
            ></date-picker>
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
              @click="modifyWQ()"
              :disabled="
                weeklyQuiz.sentence !== '' &&
                weeklyQuiz.publishTime.length === 2
                  ? false
                  : true
              "
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
  ApiGetSentenceDetail,
  ApiModifySentence,
  ApiSearchWQStudent,
} from "../http/apis/WeeklyQuiz";
import dayjs from "dayjs";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: {
    CourseHeader,
    DatePicker,
  },
  data() {
    return {
      search: {
        options: [
          { text: "All students", id: "*" },
          { text: "Completed", id: "finish" },
          { text: "Incomplete", id: "ongoing" },
        ],
        keyword: "",
      },

      selectOption: "*",
      courseid: this.$route.params.courseid,
      echoid: this.$route.params.echoid,
      wqStudentList: [],
      weeklyQuiz: {
        sentence: "",
        publishTime: [],
      },
      // publishSentence: "",
      // publishDay: "",
    };
  },
  mounted() {
    this.getDetail();
  },
  computed: {
    allowEdit() {
      if (this.publishDay !== "") {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        return dayjs(today).isBefore(dayjs(this.publishDay));
      }
    },
  },
  methods: {
    disabledBeforeToday(date) {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      let tomorrow = today.setTime(today.getTime() + 24 * 60 * 60 * 1000);

      return date < tomorrow;
    },
    getDetail() {
      ApiGetSentenceDetail.get(this.echoid)
        .then((response) => {
          let temp = response.EchoValleyInfo;
          temp.publishTime = [
            dayjs.unix(response.EchoValleyInfo.start_date).format("YYYY-MM-DD"),
            dayjs
              .unix(response.EchoValleyInfo.expiry_date)
              .format("YYYY-MM-DD"),
          ];
          console.log(response);
          this.weeklyQuiz = Object.assign({}, temp);
          this.wqStudentList = response.record;
          // this.$set(this.weeklyQuiz, publishTime, [
          //   dayjs.unix(response.EchoValleyInfo.start_date).format("YYYY-MM-DD"),
          //   dayjs
          //     .unix(response.EchoValleyInfo.expiry_date)
          //     .format("YYYY-MM-DD"),
          // ]);
          this.weeklyQuiz.time =
            dayjs
              .unix(response.EchoValleyInfo.start_date)
              .format("YYYY-MM-DD") +
            " ~ " +
            dayjs
              .unix(response.EchoValleyInfo.expiry_date)
              .format("YYYY-MM-DD");
          this.$store.dispatch("courseInfo/setWQTime", {
            pubDate: response.EchoValleyInfo.start_date,
            expDate: response.EchoValleyInfo.expiry_date,
          });
          this.publishDay = dayjs
            .unix(response.EchoValleyInfo.start_date)
            .format("YYYY-MM-DD");
          console.log(this.weeklyQuiz);
        })
        .catch((err) => {});
    },
    modifyWQ() {
      let wq = {
        sentence: this.weeklyQuiz.sentence,
        start_date: dayjs(this.weeklyQuiz.publishTime[0]).unix(),
        expiry_date: dayjs(this.weeklyQuiz.publishTime[1]).unix(),
      };
      ApiModifySentence.post(this.echoid, wq)
        .then((response) => {
          console.log(response);
          if (response.status === "success") {
            this.$bus.$emit("messsage:push", "Editing Success", "success");
            this.getDetail();
          } else {
            this.$bus.$emit("messsage:push", response.record, "danger");
            this.getDetail();
          }
        })
        .catch((err) => {});
    },
    searchWQStudent() {
      let keyword = "*";
      if (this.search.keyword !== "") {
        keyword = this.search.keyword;
      }
      ApiSearchWQStudent.get(this.echoid, keyword, this.selectOption)
        .then((response) => {
          if (response.status === "success") {
            this.wqStudentList = response.record;
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>