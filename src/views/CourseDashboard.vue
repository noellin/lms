<template>
  <div id="app2">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content" id="print" ref="print">
      <!-- TOP TOOLBAR WRAPPER -->

      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="">
        <div class="">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row">
              <div class="col">
                <div class="card bg-primary" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      Popular map<button
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
                      </button>
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="31">31</span
                        ><span class="d-none d-xl-inlineblock">/ 120</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-success" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      Deserted & forgotten map<button
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
                      </button>
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="29">29</span
                        ><span class="d-none d-xl-inlineblock">/ 120</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-warning" style="height: 150px">
                  <div class="card-body d-flex align-content-between flex-wrap">
                    <h5 class="card-title text-white">
                      Assignment completion rate<span class="text-light"
                        >Comulative</span
                      >
                    </h5>
                    <div class="w100 text-right">
                      <p class="card-text text-white">
                        <span class="display-4 counter" data-count="72">72</span
                        >%
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
                        <span class="display-4 counter" data-count="87">87</span
                        >%<span class="badge badge-pill badge-light ml-1"
                          >+9%</span
                        >
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
                    <p class="text-primary">last 30 days</p>
                    <ve-histogram
                      :data="chartData"
                      height="540px"
                      :settings="chartSettings"
                    ></ve-histogram>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card">
                  <h5 class="card-header">Missed assignments</h5>
                  <div class="card-body">
                    <p class="text-primary">last 30 days</p>
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Student name</th>
                            <th>Missed</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Dylan</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <td>Geoffrey</td>
                            <td>9</td>
                          </tr>
                          <tr>
                            <td>Annabelle</td>
                            <td>8</td>
                          </tr>
                          <tr>
                            <td>Wendy</td>
                            <td>7</td>
                          </tr>
                          <tr>
                            <td>Marlon</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>Nicky</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <td>Sampson</td>
                            <td>4</td>
                          </tr>
                          <tr>
                            <td>Victoria</td>
                            <td>3</td>
                          </tr>
                          <tr>
                            <td>William</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <td>Louise</td>
                            <td>1</td>
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
                  <div class="card-body pt-0">
                    <p class="text-primary">last 30 days</p>
                    <ve-line
                      :data="chartData1"
                      :settings="chartSettings"
                    ></ve-line>
                    <h4 class="card-title text-success p-t-10">
                      23<i class="zmdi zmdi-trending-up text-success ml-1"></i>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <h5 class="card-header border-none">Parent login</h5>
                  <div class="card-body pt-0">
                    <p class="text-primary">last 30 days</p>
                    <ve-line
                      :data="chartData2"
                      :settings="chartSettings"
                    ></ve-line>
                    <h4 class="card-title text-success p-t-10">
                      12<i class="zmdi zmdi-trending-up text-success ml-1"></i>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="card">
                  <h5 class="card-header border-none">Complete materials</h5>
                  <div class="card-body pt-0">
                    <p class="text-primary">last 30 days</p>
                    <ve-line
                      :data="chartData3"
                      :settings="chartSettings"
                    ></ve-line>
                    <h4 class="card-title text-danger p-t-10">
                      20<i class="zmdi zmdi-trending-down text-danger ml-1"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-5">
                <div class="card">
                  <h5 class="card-header">Popular map</h5>
                  <div class="card-body">
                    <p class="text-primary">
                      Reviewed more than 20 times in the past 7 days
                    </p>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Material</th>
                            <th>Review</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <i class="fas fa-video mr-2"></i>Unit5 THE COLOUR
                              WHEEL SONG
                            </td>
                            <td>46</td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fas fa-book-open mr-2"></i>A Pocket Park
                              for Tiny
                            </td>
                            <td>43</td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fas fa-book-open mr-2"></i>Broken Arm
                              Blues
                            </td>
                            <td>39</td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fas fa-video mr-2"></i>Unit9 MY FAMILY
                            </td>
                            <td>34</td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fas fa-book-open mr-2"></i>Alistair's
                              Night
                            </td>
                            <td>27</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <h5 class="card-header">Deserted map</h5>
                  <div class="card-body">
                    <p class="text-primary">
                      Have not been reviewed in the past 21 to 40 days
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
                            <td>
                              <i class="fas fa-book-open mr-2"></i>Getting Ready
                              for School
                            </td>
                            <td>46</td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fas fa-book-open mr-2"></i>Different
                              Kinds of Sharks
                            </td>
                            <td>43</td>
                          </tr>
                          <tr>
                            <td><i class="fas fa-book-open mr-2"></i>Four</td>
                            <td>39</td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fas fa-video mr-2"></i>Unit4 NUMBER
                              RUMBA SONG
                            </td>
                            <td>34</td>
                          </tr>
                          <tr>
                            <td>
                              <i class="fas fa-book-open mr-2"></i>Roots of Rap
                            </td>
                            <td>27</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="card">
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
                </div>
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
                    <ul
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
                    </ul>
                    <div class="tab-content" id="pills-tabContent-1">
                      <div
                        class="tab-pane fade show active"
                        id="pills-1"
                        role="tabpanel"
                        aria-labelledby="pills-1"
                      >
                        <div class="table-responsive">
                          <table class="table table-striped v-align-middle">
                            <thead>
                              <tr>
                                <th>Student</th>
                                <th>Log in</th>
                                <th>Complete Assignments</th>
                                <th>Review</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user01.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Alexander
                                </td>
                                <td>18</td>
                                <td>2/2</td>
                                <td>21</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user02.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Christopher
                                </td>
                                <td>17</td>
                                <td>2/2</td>
                                <td>19</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user03.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Emily
                                </td>
                                <td>19</td>
                                <td>2/2</td>
                                <td>13</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user04.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Alexander
                                </td>
                                <td>15</td>
                                <td>2/2</td>
                                <td>13</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user05.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Tony
                                </td>
                                <td>9</td>
                                <td>2/2</td>
                                <td>12</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user06.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Heloise
                                </td>
                                <td>11</td>
                                <td>1/2</td>
                                <td>11</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user07.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Grace
                                </td>
                                <td>8</td>
                                <td>1/2</td>
                                <td>10</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user08.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Clarence
                                </td>
                                <td>9</td>
                                <td>2/2</td>
                                <td>9</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user07.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Diana
                                </td>
                                <td>7</td>
                                <td>2/2</td>
                                <td>9</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/img/upload/user08.png"
                                    alt=""
                                    class="w-40 h-40 rounded-circle mr-2"
                                  />Brian
                                </td>
                                <td>7</td>
                                <td>2/2</td>
                                <td>8</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-2"
                        role="tabpanel"
                        aria-labelledby="pills-2"
                      >
                        <table class="table v-align-middle">
                          <thead>
                            <tr>
                              <th>Student</th>
                              <th>Log in</th>
                              <th>Complete Assignments</th>
                              <th>Review</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user01.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Alexander
                              </td>
                              <td>18</td>
                              <td>2/2</td>
                              <td>21</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user02.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Christopher
                              </td>
                              <td>17</td>
                              <td>2/2</td>
                              <td>19</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user03.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Emily
                              </td>
                              <td>19</td>
                              <td>2/2</td>
                              <td>13</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user04.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Alexander
                              </td>
                              <td>15</td>
                              <td>2/2</td>
                              <td>13</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user05.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Tony
                              </td>
                              <td>9</td>
                              <td>2/2</td>
                              <td>12</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user06.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Heloise
                              </td>
                              <td>11</td>
                              <td>1/2</td>
                              <td>11</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user07.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Grace
                              </td>
                              <td>8</td>
                              <td>1/2</td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user08.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Clarence
                              </td>
                              <td>9</td>
                              <td>2/2</td>
                              <td>9</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user07.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Diana
                              </td>
                              <td>7</td>
                              <td>2/2</td>
                              <td>9</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../assets/img/upload/user08.png"
                                  alt=""
                                  class="w-40 h-40 rounded-circle mr-2"
                                />Brian
                              </td>
                              <td>7</td>
                              <td>2/2</td>
                              <td>8</td>
                            </tr>
                          </tbody>
                        </table>
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
import $ from "jquery";
export default {
  name: "CourseDashboard",
  components: {
    CourseHeader,
  },
  data() {
    this.barextend = {
      xAxis: {
        axisTick: {
          alignWithLabel: true,
        },
        // axisLabel: {
        //   textStyle: {
        //     fontSize: 14,
        //   },

        //   // rotate: 5,
        // },
      },
      // yAxis: {
      //   axisLabel: {
      //     textStyle: {
      //       fontSize: 14,
      //     },
      //   },
      // },
      series: {
        // barWidth: 10,
        label: {
          // show: true,
          // position: "right",
          // textStyle: {
          //   fontSize: 14,
          // },
        },
      },
    };
    return {
      chartSettings: {
        // stack: { 用户: ["Total", "Completed"] },
        legendName: {
          completionrate: "Completion rate",
          Student_Login: "Student Login",
          Parent_Login: "Parent Login",
          Complete_materials: "Complete Materials",
        },
      },

      chartData: {
        columns: ["Date", "Total", "Completed", ""],
        rows: [
          { Date: "10/21", Total: 43, Completed: 33, completionrate: 100 },
          { Date: "10/22", Total: 30, Completed: 30, completionrate: 1 },
          { Date: "11/3", Total: 23, Completed: 23, completionrate: 1 },
          { Date: "11/4", Total: 23, Completed: 20, completionrate: 0.869 },
          { Date: "11/15", Total: 42, Completed: 2, completionrate: 0.0476 },
          { Date: "11/6", Total: 43, Completed: 43, completionrate: 1 },
        ],
      },
      chartData1: {
        columns: ["日期", "Student_Login"],
        rows: [
          { 日期: "1/1", Student_Login: 20 },
          { 日期: "1/2", Student_Login: 30 },
          { 日期: "1/3", Student_Login: 20 },
          { 日期: "1/4", Student_Login: 30 },
          { 日期: "1/5", Student_Login: 30 },
          { 日期: "1/6", Student_Login: 43 },
        ],
      },
      chartData2: {
        columns: ["日期", "Parent_Login"],
        rows: [
          { 日期: "1/1", Parent_Login: 13 },
          { 日期: "1/2", Parent_Login: 5 },
          { 日期: "1/3", Parent_Login: 5 },
          { 日期: "1/4", Parent_Login: 20 },
          { 日期: "1/5", Parent_Login: 25 },
          { 日期: "1/6", Parent_Login: 25 },
        ],
      },
      chartData3: {
        columns: ["日期", "Complete_materials"],
        rows: [
          { 日期: "1/1", Complete_materials: 43 },
          { 日期: "1/2", Complete_materials: 20 },
          { 日期: "1/3", Complete_materials: 23 },
          { 日期: "1/4", Complete_materials: 13 },
          { 日期: "1/5", Complete_materials: 32 },
          { 日期: "1/6", Complete_materials: 23 },
        ],
      },
    };
  },
  mounted() {
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