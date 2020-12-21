<template>
  <div id="app2">
    <div class="main-content">
      <!-- END MENU SIDEBAR WRAPPER -->
      <div>
        <!-- TOP TOOLBAR WRAPPER -->

        <!-- END TOP TOOLBAR WRAPPER -->
        <div class="">
          <div class="">
            <course-header></course-header>
            <section class="page-content container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <form>
                        <div class="form-group row">
                          <label class="col-form-label text-right col-sm-3"
                            >Question</label
                          >
                          <div class="col-sm-8">
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              placeholder="Please enter a question of the extra quiz..."
                              rows="3"
                              v-model="newWeeklyQuiz.question"
                              maxlength="500"
                            ></textarea>
                            <span class="text-muted"
                              ><small
                                >{{ newWeeklyQuiz.question.length }}/500</small
                              ></span
                            >
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-form-label col-sm-3 text-right"
                            >Date of publication</label
                          >
                          <div class="col">
                            <date-picker
                              v-model="newWeeklyQuiz.publishTime"
                              type="date"
                              valueType="format"
                              range
                              placeholder="Select date range"
                              :disabled-date="disabledBeforeToday"
                            ></date-picker>
                            <!-- <input
                              type="text"
                              class="form-control date-picker-input"
                              placeholder="Select Date"
                              value=""
                            /> -->
                          </div>
                        </div>
                        <!-- <div class="form-group row">
                          <label class="col-form-label col-sm-3 text-right"
                            >Due</label
                          >
                          <div class="col">
                            <date-picker
                              v-model="newWeeklyQuiz.dueTime"
                              valueType="format"
                            ></date-picker>
                            <input
                              type="text"
                              class="form-control date-picker-input"
                              placeholder="Select Date"
                              value=""
                            /> 
                          </div>
                        </div> -->
                      </form>
                    </div>
                  </div>
                  <div class="text-right">
                    <button
                      type="button"
                      class="btn btn-secondary btn-outline btn-rounded mr-2"
                      data-dismiss="modal"
                      @click="back()"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-rounded"
                      data-dismiss="modal"
                      @click="setWeellyQuiz()"
                      :disabled="
                        newWeeklyQuiz.question !== '' &&
                        newWeeklyQuiz.publishTime.length === 2
                          ? false
                          : true
                      "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseHeader from "../components/CourseHeader";
import DatePicker from "vue2-datepicker";
import { ApiCreateEchoSentence } from "../http/apis/WeeklyQuiz.js";
import dayjs from "dayjs";
export default {
  components: {
    CourseHeader,
    DatePicker,
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
      newWeeklyQuiz: {
        question: "",
        publishTime: [],
      },
    };
  },
  mounted() {},
  computed: {
    userid() {
      return this.$store.state.auth.userid;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    disabledBeforeToday(date) {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      let tomorrow = today.setTime(today.getTime() + 24 * 60 * 60 * 1000);

      return date < tomorrow;
    },
    setWeellyQuiz() {
      let wq = {
        sentence: this.newWeeklyQuiz.question,
        start_date: dayjs(this.newWeeklyQuiz.publishTime[0]).unix(),
        expiry_date: dayjs(this.newWeeklyQuiz.publishTime[1]).unix(),
      };
      ApiCreateEchoSentence.post(this.courseid, this.userid, wq)
        .then((response) => {
          if (response.status === "success") {
            this.$bus.$emit("messsage:push", "QUIZ Setting Success", "success");
            this.newWeeklyQuiz = {
              question: "",
              publishTime: [],
            };
          } else {
            this.$bus.$emit("messsage:push", "Unknown error", "danger");
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>