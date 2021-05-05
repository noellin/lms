<template>
  <div id="app2">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div id="print" ref="print">
      <!-- TOP TOOLBAR WRAPPER -->

      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left" v-show="dbData !== undefined">
        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row">
              <div class="col">
                <div class="card bg-primary" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      {{ $t("golden-zone") }}
                      <i
                        data-toggle="modal"
                        data-target="#InformationModal"
                        class="zmdi-hc-lg pointer zmdi zmdi-alert-circle zmdi-hc-fw text-white"
                      ></i>
                    </h5>
                    <div class="w100 text-right">
                      <p
                        class="card-text text-white"
                        v-if="dbData.goldenMaterial.record !== undefined"
                      >
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
                      {{ $t("treasure-zone") }}
                      <i
                        data-toggle="modal"
                        data-target="#InformationModal"
                        class="zmdi-hc-lg pointer zmdi zmdi-alert-circle zmdi-hc-fw text-white"
                      ></i>
                    </h5>
                    <div class="w100 text-right">
                      <p
                        class="card-text text-white"
                        v-if="dbData.treasureMaterial.record !== undefined"
                      >
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
                      {{ $t("assignments") }}
                      <!-- Assignment completion rate<span class="text-light"
                        >Comulative</span
                      > -->
                    </h5>
                    <div class="w100 text-right">
                      <p
                        class="card-text text-white"
                        v-if="dbData.assignmentNumber.record !== undefined"
                      >
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
                      {{ $t("assignments-completion-rate") }}
                      <!-- <span class="text-light"
                        >30-day comparison</span
                      > -->
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
              <div class="col-5">
                <div class="card">
                  <h5 class="card-header">{{ $t("golden-zone") }}</h5>
                  <div class="card-body dashboard-scroll dashboard-zone-scroll">
                    <!-- <p class="text-primary">
                      Reviewed more than 20 times in the past 7 days
                    </p> -->
                    <div class="table-responsive">
                      <h2 v-if="gzView.length === 0">
                        {{ $t("no-relevant-records") }}
                      </h2>
                      <table class="table" v-else>
                        <thead>
                          <tr>
                            <th>{{ $t("material") }}</th>
                            <th>{{ $t("review") }}</th>
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
                  <h5 class="card-header">{{ $t("treasure-zone") }}</h5>
                  <div class="card-body dashboard-scroll dashboard-zone-scroll">
                    <!-- <p class="text-primary">
                      Have not been reviewed in the past 21 to 40 days
                    </p> -->
                    <div class="table-responsive">
                      <h2 v-if="tzDays.length === 0">
                        {{ $t("no-relevant-records") }}
                      </h2>
                      <table class="table" v-else>
                        <thead>
                          <tr>
                            <th>{{ $t("material") }}</th>
                            <th>{{ $t("days") }}</th>
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
                  <h5 class="card-header">
                    {{ $t("student-activity-details") }}
                    <!-- <ul class="actions top-right">
                      <li>
                        <a href="javascript:void(0)" data-q-action="card-expand" 
                          ><i class="icon dripicons-expand-2"></i
                        ></a>
                      </li>
                    </ul> -->
                  </h5>
                  <div
                    class="card-body dashboard-scroll dashboard-sd-scroll"
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
                            {{ $t("no-relevant-records") }}
                          </h2>
                          <table
                            class="table table-striped v-align-middle"
                            v-else
                          >
                            <thead>
                              <tr>
                                <th
                                  @click="sortTable('username')"
                                  class="pointer"
                                >
                                  {{ $t("student")
                                  }}<i
                                    class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                                  ></i>
                                </th>
                                <th
                                  @click="sortTable('cnt_login')"
                                  class="pointer"
                                >
                                  {{ $t("login")
                                  }}<i
                                    class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                                  ></i>
                                </th>
                                <th
                                  @click="sortTable('asgmt_finish')"
                                  class="pointer"
                                >
                                  {{ $t("completed-assignments")
                                  }}<i
                                    class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                                  ></i>
                                </th>
                                <th
                                  @click="sortTable('cnt_res_review')"
                                  class="pointer"
                                >
                                  {{ $t("review")
                                  }}<i
                                    class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                                  ></i>
                                </th>
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
                                <td>{{ sr.cnt_login }}</td>
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
            <div class="row">
              <div class="col-9">
                <div class="card">
                  <h5 class="card-header">
                    {{ $t("assignments-completion-rate") }}
                  </h5>
                  <div class="card-body" style="height: 597px">
                    <p class="text-primary">{{ $t("last-6-records") }}</p>
                    <h2 v-if="acRateChartData.rows.length === 0">
                      {{ $t("no-relevant-records") }}
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
                  <h5 class="card-header">{{ $t("missed-assignments") }}</h5>
                  <div
                    class="card-body dashboard-scroll dashboard-ma-scroll"
                    style="height: 597px"
                  >
                    <p class="text-primary">{{ $t("last-30-days") }}</p>
                    <div class="table-responsive">
                      <h2 v-if="missA.length === 0">
                        {{ $t("no-relevant-records") }}
                      </h2>
                      <table class="table table-striped" v-else>
                        <thead>
                          <tr>
                            <th>{{ $t("student-name") }}</th>
                            <th>{{ $t("missed") }}</th>
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
                  <h5 class="card-header border-none">
                    {{ $t("student-login") }}
                  </h5>
                  <div class="card-body pt-0" style="height: 500px">
                    <p class="text-primary">{{ $t("last-30-days") }}</p>
                    <h2 v-if="stdLoginchartData.rows.length === 0">
                      {{ $t("no-relevant-records") }}
                    </h2>
                    <ve-line
                      v-else
                      :data="stdLoginchartData"
                      :settings="loginchartSettings"
                    ></ve-line>
                    <!-- <h4 class="card-title text-success p-t-10">
                      23<i class="zmdi zmdi-trending-up text-success ml-1"></i>
                    </h4> -->
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <h5 class="card-header border-none">
                    {{ $t("parent-login") }}
                  </h5>
                  <div class="card-body pt-0" style="height: 500px">
                    <p class="text-primary">{{ $t("last-30-days") }}</p>
                    <h2 v-if="pLoginchartData.rows.length === 0">
                      {{ $t("no-relevant-records") }}
                    </h2>
                    <ve-line
                      v-else
                      :data="pLoginchartData"
                      :settings="loginchartSettings"
                    ></ve-line>
                    <!-- <h4 class="card-title text-success p-t-10">
                      12<i class="zmdi zmdi-trending-up text-success ml-1"></i>
                    </h4> -->
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <h5 class="card-header border-none">
                    {{ $t("watch-read-times") }}
                  </h5>
                  <div class="card-body pt-0" style="height: 500px">
                    <p class="text-primary">{{ $t("last-30-days") }}</p>
                    <h2 v-if="mwchartData.rows.length === 0">
                      {{ $t("no-relevant-records") }}
                    </h2>
                    <ve-line
                      v-else
                      :data="mwchartData"
                      :settings="mwchartSetting"
                    ></ve-line>
                    <!-- <h4 class="card-title text-danger p-t-10">
                      20<i class="zmdi zmdi-trending-down text-danger ml-1"></i>
                    </h4> -->
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="InformationModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              {{ $t("information") }}
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
            <div class="mb-2">
              <h5 class="text-primary">Golden zone</h5>
              <p>See the most popular books of the past 14 days.</p>
            </div>
            <div class="mb-2">
              <h5 class="text-primary">Treasure zone</h5>
              <p>
                See the hidden treasure books that have been overlooked for the
                past 14 days.
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("close") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Menu
// import CourseHeader from "../components/CourseHeader";
import { ApiGetDashboard } from "../http/apis/Dashboard";
import VeHistogram from "v-charts/lib/histogram.common";
import VeLine from "v-charts/lib/line.common";
// import pagination from "../components/Pagination"
import $ from "jquery";
import dayjs from "dayjs";
// import _ from "lodash";
import sortBy from "lodash/sortBy";
$(function () {
  $('[data-toggle="popover"]').popover();
});
export default {
  name: "CourseDashboard",
  components: {
    CourseHeader: () => import("@/components/CourseHeader.vue"),
    pagination: () => import("@/components/Pagination.vue"),
    VeHistogram,
    VeLine,
    // VeLine: () => import("../../node_modules/v-charts/lib/line.common"),
    // VeHistogrem: () =>
    //   import("../../node_modules/v-charts/lib/histogram.common"),
  },
  data() {
    this.acRateSetting = {
      // axisSite: { right: ["Completion_rate"] },
      // yAxisType: ["normal", "percent"],
      // yAxisName: ["Number", "Percent"],
      dataOrder: {
        label: "expiry_date",
        order: "desc",
      },
    };
    this.loginchartSettings = {
      dataOrder: {
        label: "Date",
        order: "desc",
      },
      yAxisType: ["integer", "normal"],
      // dataType: {
      //   Student_Login: "integer", //数字转为RMB(基本的数据格式)
      //   Parent_Login: "integer",
      // },
    };
    this.mwchartSetting = {
      dataOrder: {
        label: "review_date",
        order: "desc",
      },
    };
    return {
      courseid: this.$route.params.courseid,
      dbData: {
        assignmentNumber: { record: [undefined] },
        treasureMaterial: { record: undefined },
        goldenMaterial: { record: undefined },
        status: "success",
        record: "",
      },
      acRate: 0,
      // chartSettings: {
      //   legendName: {
      //     completionrate: "Completion rate",
      //     Student_Login: "Student Login",
      //     Parent_Login: "Parent Login",
      //     Complete_materials: "Watch/Read times",
      //   },
      //   dataOrder: {
      //     label: "expiry_date",
      //     order: "desc",
      //   },
      // },
      acRateChartData: {
        columns: ["Date", "Students", "Completed", ""],
        rows: [],
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
      tempSortItem: "",
      sortStatus: false,
    };
  },
  created() {
    this.$store.dispatch("common/setLoading", true);
  },
  mounted() {
    $(function () {
      $('[data-toggle="popover"]').popover();
    });
    this.getDashboard();
    this.$store.dispatch("common/setLoading", false);
  },
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
        this.stdRank = sortBy(this.stdRank, [sortItem], ["asc"]);
      } else {
        this.stdRank = this.stdRank.reverse();
      }

      // publish_date
    },
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
            console.log(tempChart);
            this.$set(this.acRateChartData, "rows", tempChart);
          }
          if (Object.keys(result.record.loginTimesStudent).length !== 0) {
            let tempStdLogin = [];
            tempStdLogin = result.record.loginTimesStudent.record;
            tempStdLogin = sortBy(tempStdLogin, ["login_date"], ["asc"]);
            tempStdLogin.forEach((el) => {
              this.$set(el, "Date", el.login_date);
              this.$set(el, "Student_Login", el.login_cnt);
            });
            console.log(tempStdLogin);
            this.$set(this.stdLoginchartData, "rows", tempStdLogin);
          }

          if (Object.keys(result.record.loginTimesParents).length !== 0) {
            let tempPLogin = [];
            tempPLogin = result.record.loginTimesParents.record;
            tempPLogin = sortBy(tempPLogin, ["login_date"], ["asc"]);
            tempPLogin.forEach((el) => {
              this.$set(el, "Date", el.login_date);

              this.$set(el, "Parent_Login", el.login_cnt);
            });
            this.$set(this.pLoginchartData, "rows", tempPLogin);
          }
          if (Object.keys(result.record.materialWatchTimes).length !== 0) {
            let tempmwData = [];
            tempmwData = result.record.materialWatchTimes.record;
            tempmwData = sortBy(tempmwData, ["review_date"], ["asc"]);
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
  },
};
</script>

<style scoped lang="scss">
</style>