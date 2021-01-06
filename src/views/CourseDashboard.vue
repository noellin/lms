<template>
  <div id="app2">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content" id="print" ref="print">
      <!-- TOP TOOLBAR WRAPPER -->

      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left" v-if="dbData !== undefined">
        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row">
              <div class="col">
                <div class="card bg-primary" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      Golden Zone
                      <!-- <button
                        type="button"
                        class="btn btn-nostyle ml-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="bottom"
                        data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                      >
                        <i
                          class="zmdi zmdi-alert-circle zmdi-hc-fw text-white"
                        ></i>
                      </button> -->
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="31">{{
                          dbData.goldenMaterial.record.length
                        }}</span>
                        <!-- <span class="d-none d-xl-inlineblock">/ 120</span> -->
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-success" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      Treasure Zone<button
                        type="button"
                        class="btn btn-nostyle ml-1"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="bottom"
                        data-content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                      >
                        <!-- <i
                          class="zmdi zmdi-alert-circle zmdi-hc-fw text-white"
                        ></i> -->
                      </button>
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="29">{{
                          dbData.treasureMaterial.record.length
                        }}</span>
                        <!-- <span class="d-none d-xl-inlineblock">/ 120</span> -->
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-warning" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      Assignment
                      <!-- Assignment completion rate<span class="text-light"
                        >Comulative</span
                      > -->
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="72">{{
                          dbData.assignmentNumber.record.length
                        }}</span>
                        <!-- % -->
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-danger" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      Assignment completion rate<span class="text-light"
                        >30-day comparison</span
                      >
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="87">{{
                          acRate
                        }}</span
                        >%
                        <!-- %<span class="badge badge-pill badge-light ml-1"
                          >+9%</span
                        > -->
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-9">
                <div class="card">
                  <h5 class="card-header">Assignments completion rate</h5>
                  <div class="card-body" style="height: 597px">
                    <p class="text-primary">last 6 records</p>
                    <h2 v-if="acRateChartData.rows.length === 0">
                      No relevant records
                    </h2>
                    <ve-histogram
                      v-else
                      height="540px"
                      :data="acRateChartData"
                      :settings="acRateSetting"
                    ></ve-histogram>
                    <!-- height="540px"
                      width="800px" -->
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card">
                  <h5 class="card-header">Missed assignments</h5>
                  <div class="card-body" style="height: 597px">
                    <p class="text-primary">last 30 days</p>
                    <div class="table-responsive">
                      <h2 v-if="missA.length === 0">No relevant records</h2>
                      <table class="table table-striped" v-else>
                        <thead>
                          <tr>
                            <th>Student name</th>
                            <th>Missed</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="ma in missA" :key="ma.username">
                            <td>{{ ma.username }}</td>
                            <td>{{ ma.cnt_no_submit_homework }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="card">
                  <h5 class="card-header border-none">Student login</h5>
                  <div class="card-body pt-0" style="height: 500px">
                    <p class="text-primary">last 30 days</p>
                    <h2 v-if="stdLoginchartData.rows.length === 0">
                      No relevant records
                    </h2>
                    <ve-line
                      v-else
                      :data="stdLoginchartData"
                      :settings="chartSettings"
                    ></ve-line>
                    <!-- <h4 class="card-title text-success p-t-10">
                      23<i class="zmdi zmdi-trending-up text-success ml-1"></i>
                    </h4> -->
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <h5 class="card-header border-none">Parent login</h5>
                  <div class="card-body pt-0" style="height: 500px">
                    <p class="text-primary">last 30 days</p>
                    <h2 v-if="pLoginchartData.rows.length === 0">
                      No relevant records
                    </h2>
                    <ve-line
                      v-else
                      :data="pLoginchartData"
                      :settings="chartSettings"
                    ></ve-line>
                    <!-- <h4 class="card-title text-success p-t-10">
                      12<i class="zmdi zmdi-trending-up text-success ml-1"></i>
                    </h4> -->
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <h5 class="card-header border-none">Complete materials</h5>
                  <div class="card-body pt-0" style="height: 500px">
                    <p class="text-primary">last 30 days</p>
                    <h2 v-if="mwchartData.rows.length === 0">
                      No relevant records
                    </h2>
                    <ve-line
                      v-else
                      :data="mwchartData"
                      :settings="chartSettings"
                    ></ve-line>
                    <!-- <h4 class="card-title text-danger p-t-10">
                      20<i class="zmdi zmdi-trending-down text-danger ml-1"></i>
                    </h4> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-5">
                <div class="card">
                  <h5 class="card-header">Golden Zone</h5>
                  <div class="card-body">
                    <!-- <p class="text-primary">
                      Reviewed more than 20 times in the past 7 days
                    </p> -->
                    <div class="table-responsive">
                      <h2 v-if="gzView.length === 0">No relevant records</h2>
                      <table class="table" v-else>
                        <thead>
                          <tr>
                            <th>Material</th>
                            <th>Review</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="gzv in gzView" :key="gzv.resourceid">
                            <td>
                              <i
                                class="fas fa-book-open mr-2"
                                v-if="gzv.note === 'book'"
                              ></i>
                              <i class="fas fa-video mr-2" v-else></i>
                              {{ gzv.resource_name }}
                            </td>
                            <td>{{ gzv.cnt_review }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <h5 class="card-header">Treasure Zone</h5>
                  <div class="card-body">
                    <!-- <p class="text-primary">
                      Have not been reviewed in the past 21 to 40 days
                    </p> -->
                    <div class="table-responsive">
                      <h2 v-if="tzDays.length === 0">No relevant records</h2>
                      <table class="table" v-else>
                        <thead>
                          <tr>
                            <th>Material</th>
                            <th>Days</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="tzd in tzDays"
                            :key="tzd.resourceid + 'tz'"
                          >
                            <td>
                              <i
                                class="fas fa-book-open mr-2"
                                v-if="tzd.note === 'book'"
                              ></i
                              ><i class="fas fa-video mr-2" v-else></i>
                              {{ tzd.resource_name }}
                            </td>
                            <td>{{ tzd.diff_days }}</td>
                          </tr>
                          <!-- <tr>
                            <td>
                              <i class="fas fa-book-open mr-2"></i>Getting Ready
                              for School
                            </td>
                            <td>46</td>
                          </tr> -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- <div class="card">
                  <h5 class="card-header">Forgotten map</h5>
                  <div class="card-body">
                    <p class="text-primary">
                      Have not been reviewed for more than 40 days
                    </p>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Material</th>
                            <th>Days</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="2">
                              <div
                                class="bg-secondary text-center p-15 text-light rounded"
                              >
                                No data
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> -->
              </div>
              <div class="col-7">
                <div class="card">
                  <div class="card-header">
                    <span class="m-t-10 d-inline-block"
                      >Student activity details</span
                    >
                    <!-- <ul class="actions top-right">
                      <li>
                        <a href="javascript:void(0)" data-q-action="card-expand" 
                          ><i class="icon dripicons-expand-2"></i
                        ></a>
                      </li>
                    </ul> -->
                  </div>
                  <div
                    class="card-body"
                    style="max-height: 800px"
                    data-scroll="dark"
                  >
                    <!-- <ul
                      class="nav nav-pills nav-pills-primary mb-3"
                      id="pills-demo-1"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="pills-1-tab"
                          data-toggle="pill"
                          href="#pills-1"
                          role="tab"
                          aria-controls="pills-1"
                          aria-selected="true"
                          >7 days</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="pills-2-tab"
                          data-toggle="pill"
                          href="#pills-2"
                          role="tab"
                          aria-controls="pills-2"
                          aria-selected="false"
                          >30 days</a
                        >
                      </li>
                    </ul> -->
                    <div class="tab-content" id="pills-tabContent-1">
                      <div
                        class="tab-pane fade show active"
                        id="pills-1"
                        role="tabpanel"
                        aria-labelledby="pills-1"
                      >
                        <div class="table-responsive">
                          <h2 v-if="stdRank.length === 0">
                            No relevant records
                          </h2>
                          <table
                            class="table table-striped v-align-middle"
                            v-else
                          >
                            <thead>
                              <tr>
                                <th>Student</th>
                                <th>Log in</th>
                                <th>Complete Assignments</th>
                                <th>Review</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="sr in stdRank" :key="sr.stuid">
                                <td>
                                  <!-- <img
                                    src="../assets/img/upload/user01.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  /> -->
                                  {{ sr.username }}
                                </td>
                                <td>{{ sr.cnt_checkin }}</td>
                                <td>
                                  {{ sr.asgmt_finish }}/{{ sr.asgmt_all }}
                                </td>
                                <td>{{ sr.cnt_res_review }}</td>
                              </tr>
                            </tbody>
                          </table>
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
  </div>
</template>
<script>
// import Menu
import CourseHeader from "../components/CourseHeader";
import { ApiGetDashboard } from "../http/apis/Dashboard";
import $ from "jquery";
import dayjs from "dayjs";
$(function () {
  $('[data-toggle="popover"]').popover();
});
export default {
  name: "CourseDashboard",
  components: {
    CourseHeader,
  },
  data() {
    // this.barextend = {
    //   xAxis: {
    //     axisTick: {
    //       alignWithLabel: true,
    //     },
    //     // axisLabel: {
    //     //   textStyle: {
    //     //     fontSize: 14,
    //     //   },

    //     //   // rotate: 5,
    //     // },
    //   },
    //   // yAxis: {
    //   //   axisLabel: {
    //   //     textStyle: {
    //   //       fontSize: 14,
    //   //     },
    //   //   },
    //   // },
    //   series: {
    //     // barWidth: 10,
    //     label: {
    //       // show: true,
    //       // position: "right",
    //       // textStyle: {
    //       //   fontSize: 14,
    //       // },
    //     },
    //   },
    // };

    this.acRateSetting = {
      // axisSite: { right: ["Completion_rate"] },
      // yAxisType: ["normal", "percent"],
      // yAxisName: ["Number", "Percent"],
    };
    return {
      courseid: this.$route.params.courseid,
      dbData: undefined,
      acRate: 0,
      chartSettings: {
        // stack: { 用户: ["Total", "Completed"] },
        legendName: {
          completionrate: "Completion rate",
          Student_Login: "Student Login",
          Parent_Login: "Parent Login",
          Complete_materials: "Complete Materials",
        },
      },
      acRateChartData: {
        columns: ["Date", "Students", "Completed", ""],
        // columns: ["Date", "Students", "Completed", "Completion_rate"],
        // rows: [
        //   { Date: "10/21", Total: 43, Completed: 33, completionrate: 100 },
        // ],
      },
      stdLoginchartData: {
        columns: ["Date", "Student_Login"],
        rows: [
          // { Date: "1/1", Student_Login: 20 },
        ],
      },
      pLoginchartData: {
        columns: ["Date", "Parent_Login"],
        rows: [],
        // { 日期: "1/1", Parent_Login: 13 },
      },
      mwchartData: {
        columns: ["Date", "Complete_materials"],
        rows: [
          // { 日期: "1/1", Complete_materials: 43 },
        ],
      },
      missA: [],
      gzView: [],
      tzDays: [],
      stdRank: [],
    };
  },
  created() {},
  mounted() {
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
    this.getDashboard();
    //   var output = document.getElementById("myP");
    // document.addEventListener("fullscreenchange", function() {
    //   output.innerHTML = "fullscreenchange event fired!";
    // });
    // document.addEventListener("mozfullscreenchange", function() {
    //   output.innerHTML = "mozfullscreenchange event fired!";
    // });
    // document.addEventListener("webkitfullscreenchange", function() {
    //   output.innerHTML = "webkitfullscreenchange event fired!";
    // });
    // document.addEventListener("msfullscreenchange", function() {
    //   output.innerHTML = "msfullscreenchange event fired!";
    // });
  },
  methods: {
    getDashboard() {
      let vm = this;
      ApiGetDashboard.get(this.courseid)
        .then((result) => {
          this.dbData = result.record;
          let ascount = 0;
          let asfinish = 0;
          let tempChart = [];
          //object不為空
          if (Object.keys(result.record.assignmentCompletedRate).length !== 0) {
            result.record.assignmentCompletedRate.record.forEach((element) => {
              ascount = ascount + element.stu_total;
              asfinish = asfinish + element.stu_finish;
            });
            vm.acRate = ((asfinish / ascount) * 100).toFixed(2);
          }
          //object不為空
          if (
            Object.keys(result.record.assignmentCompletionChart).length !== 0
          ) {
            tempChart = result.record.assignmentCompletionChart.record;
            //圖表日期轉換
            tempChart.forEach((item) => {
              this.$set(
                item,
                "Date",
                dayjs.unix(item.expiry_date).format("MM/DD")
              );
              this.$set(item, "Students", item.stu_total);
              this.$set(item, "Completed", item.stu_finish);
              this.$set(
                item,
                "Completion_rate",
                Number((item.stu_finish / item.stu_total).toFixed(2))
              );
            });
            this.$set(this.acRateChartData, "rows", tempChart);
          }
          if (Object.keys(result.record.loginTimesStudent).length !== 0) {
            let tempStdLogin = [];
            tempStdLogin = result.record.loginTimesStudent.record;
            tempStdLogin.forEach((el) => {
              this.$set(el, "Date", el.login_date);
              this.$set(el, "Student_Login", el.login_cnt);
            });
            this.$set(this.stdLoginchartData, "rows", tempStdLogin);
          }

          if (Object.keys(result.record.loginTimesParents).length !== 0) {
            let tempPLogin = [];
            tempPLogin = result.record.loginTimesParents.record;
            tempPLogin.forEach((el) => {
              this.$set(el, "Date", el.login_date);
              this.$set(el, "Parent_Login", el.login_cnt);
            });
            this.$set(this.pLoginchartData, "rows", tempPLogin);
          }
          if (Object.keys(result.record.materialWatchTimes).length !== 0) {
            let tempmwData = [];
            tempmwData = result.record.materialWatchTimes.record;
            tempmwData.forEach((el) => {
              this.$set(el, "Date", el.review_date);
              this.$set(el, "Complete_materials", el.cnt_review);
            });
            this.$set(this.mwchartData, "rows", tempmwData);
          }
          if (Object.keys(result.record.materialPopularRank).length !== 0) {
            this.gzView = result.record.materialPopularRank.record;
          }
          if (Object.keys(result.record.materialTreasureRank).length !== 0) {
            this.tzDays = result.record.materialTreasureRank.record;
          }

          if (Object.keys(result.record.studentRank).length !== 0) {
            this.stdRank = result.record.studentRank.record;
          }

          if (Object.keys(result.record.assignmentIncomplete).length !== 0) {
            this.missA = result.record.assignmentIncomplete.record;
          }
          // this.acRateChartData.rows = tempChart;
        })
        .catch((err) => {});
    },
    //   openFullscreen(){
    //         let elem = document.documentElement
    //       if (elem.requestFullscreen) {
    //   elem.requestFullscreen();
    // } else if (elem.mozRequestFullScreen) { /* Firefox */
    //   elem.mozRequestFullScreen();
    // } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    //   elem.webkitRequestFullscreen();
    // } else if (elem.msRequestFullscreen) { /* IE/Edge */
    //   elem = window.top.document.body; //To break out of frame in IE
    //   elem.msRequestFullscreen();
    // }
    //   },
    //   closeFullscreen(){
    //       if (document.exitFullscreen) {
    //   document.exitFullscreen();
    // } else if (document.mozCancelFullScreen) {
    //   document.mozCancelFullScreen();
    // } else if (document.webkitExitFullscreen) {
    //   document.webkitExitFullscreen();
    // } else if (document.msExitFullscreen) {
    //   window.top.document.msExitFullscreen();
    // }
    //   }
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>