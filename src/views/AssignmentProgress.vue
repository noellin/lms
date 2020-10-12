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
            <div class="d-flex justify-content-start">
              <div class="mt-2 mr-3">
                <a @click="$back" class="btn-rounded-icon btn-primary ml-2"
                  ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
                ></a>
              </div>
              <div class="mr-auto">
                <h1>201 ENGLISH</h1>
                <p class="second-title">Assigned 2020.07.01 - Due 2020.07.07</p>
              </div>
            </div>
          </header>
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
                    <select class="form-control" id="s2_demo2">
                      <option>All students</option>
                      <option>Incomplete</option>
                      <option>Unchecked</option>
                      <option>Checked</option>
                      } option
                    </select>
                  </div>
                  <div class="form-group form-rounded mb-0">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-secondary btn-outline btn-icon btn-rounded"
                          type="button"
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
                  disabled
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
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck"
                                ></label>
                              </div>
                            </th>
                            <th>Student name</th>
                            <th>Progress</th>
                            <th>Complete time</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div
                                class="custom-control custom-checkbox form-check"
                              >
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck2"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck2"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                              >
                                Aaron
                              </button>
                            </td>
                            <td>3/3</td>
                            <td>2020.07.03</td>
                            <td><span class="text-danger">Unchecked</span></td>
                          </tr>
                          <tr>
                            <td>
                              <div
                                class="custom-control custom-checkbox form-check"
                              >
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck3"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck3"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                              >
                                Alexander
                              </button>
                            </td>
                            <td>3/3</td>
                            <td>2020.07.03</td>
                            <td><span class="text-danger">Unchecked</span></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                              >
                                Aurora
                              </button>
                            </td>
                            <td>3/3</td>
                            <td>2020.07.03</td>
                            <td>
                              <span class="text-warning">Incomplete</span>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                              >
                                Bennett
                              </button>
                            </td>
                            <td>3/3</td>
                            <td>2020.07.03</td>
                            <td>
                              <span class="text-warning">Incomplete</span>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                              >
                                Bonnie
                              </button>
                            </td>
                            <td>3/3</td>
                            <td>2020.07.03</td>
                            <td>checked</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                              >
                                Brook
                              </button>
                            </td>
                            <td>3/3</td>
                            <td>2020.07.03</td>
                            <td>checked</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                              >
                                Christopher
                              </button>
                            </td>
                            <td>3/3</td>
                            <td>2020.07.02</td>
                            <td>checked</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <button
                                class="btn btn-nostyle text-primary"
                                data-toggle="modal"
                                data-target="#CheckedModal"
                              >
                                Constance
                              </button>
                            </td>
                            <td>3/3</td>
                            <td>2020.07.02</td>
                            <td>checked</td>
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
      <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">201 English</h5>
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
            <h2 class="pl-2">Aaron</h2>
            <div class="row">
              <div
                class="col-9"
                style="max-height: calc(100vh - 200px)"
                data-scroll="dark"
              >
                <div class="mr-2">
                  <div class="card">
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
                          <span class="badge badge-pill badge-primary"
                            >Reading</span
                          >
                          <p class="mb-0 mt-1">A Pocket Park for Tiny</p>
                        </div>
                      </div>
                      <div class="border-top pt-2">
                        <p>
                          Total number of incorrect answers
                          <strong class="text-danger display-6">5</strong>
                        </p>
                        <ul class="d-flex justify-content-start mb-0">
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              1
                            </div>
                            <p class="text-center text-danger pb-0">
                              <strong>1</strong>
                            </p>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              2
                            </div>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              3
                            </div>
                            <p class="text-center text-danger pb-0">
                              <strong>1</strong>
                            </p>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              4
                            </div>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              5
                            </div>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              6
                            </div>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              7
                            </div>
                            <p class="text-center text-danger pb-0">
                              <strong>2</strong>
                            </p>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              8
                            </div>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              9
                            </div>
                          </li>
                          <li class="mr-3">
                            <div
                              class="number-block bg-primary text-white rounded-circle"
                            >
                              10
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card">
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
                          <span class="badge badge-pill badge-primary"
                            >Reading</span
                          >
                          <p class="mb-0 mt-1">A Pocket Park for Tiny</p>
                        </div>
                      </div>
                      <div class="border-top pt-2">
                        <p>
                          Total number of incorrect answers
                          <strong class="text-success display-6">0</strong>
                        </p>
                        <h5 class="text-success">
                          <span
                            class="btn-rounded-icon btn-success rounded mr-2"
                            ><i
                              class="zmdi zmdi-check zmdi-hc-fw text-white"
                            ></i></span
                          >Perfact!
                        </h5>
                      </div>
                      <div class="border-top pt-3">
                        <h5 class="text-danger">
                          <span class="btn-rounded-icon btn-danger rounded mr-2"
                            ><i
                              class="zmdi zmdi-close zmdi-hc-fw text-white"
                            ></i></span
                          >incomplete
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="card">
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
                          <span class="badge badge-pill badge-warning"
                            >Watching</span
                          >
                          <p class="mb-0 mt-1">Unit4 NUMBER RUMBA SONG</p>
                        </div>
                      </div>
                      <div class="border-top pt-3">
                        <h5 class="text-success">
                          <span
                            class="btn-rounded-icon btn-success rounded mr-2"
                            ><i
                              class="zmdi zmdi-check zmdi-hc-fw text-white"
                            ></i></span
                          >complete
                        </h5>
                      </div>
                      <div class="border-top pt-3">
                        <h5 class="text-danger">
                          <span class="btn-rounded-icon btn-danger rounded mr-2"
                            ><i
                              class="zmdi zmdi-close zmdi-hc-fw text-white"
                            ></i></span
                          >incomplete
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div class="media rounded p-2">
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
                          <span class="badge badge-pill badge-accent"
                            >Speaking Quiz</span
                          >
                          <p class="mb-0 mt-1">Unit4 NUMBER RUMBA SONG</p>
                        </div>
                      </div>
                      <div class="border-top pt-2">
                        <ul class="quiz-list">
                          <li>
                            <strong class="text-primary mr-2">Q1.</strong>She
                            likes maths and science.<i
                              class="zmdi zmdi-volume-up zmdi-hc-fw ml-2"
                            ></i>
                          </li>
                          <li>
                            <strong class="text-primary mr-2">Q2.</strong>Her
                            favourite colour is pink and her superpower is data
                            processing.<i
                              class="zmdi zmdi-volume-up zmdi-hc-fw ml-2"
                            ></i>
                          </li>
                          <li>
                            <strong class="text-primary mr-2">Q3.</strong>How
                            old are you?<i
                              class="zmdi zmdi-volume-up zmdi-hc-fw ml-2 text-primary"
                            ></i>
                          </li>
                          <li>
                            <strong class="text-primary mr-2">Q4.</strong>I'm
                            10.<i
                              class="zmdi zmdi-volume-up zmdi-hc-fw ml-2"
                            ></i>
                          </li>
                          <li>
                            <strong class="text-primary mr-2">Q5.</strong>10 is
                            a great number.<i
                              class="zmdi zmdi-volume-up zmdi-hc-fw ml-2"
                            ></i>
                          </li>
                        </ul>
                        <h6 class="mt-4">
                          Speaking quiz score
                          <small class="text-muted">(optional)</small>
                        </h6>
                        <div class="row mb-4">
                          <div class="col">
                            <div class="progress mt-2" style="height: 12px">
                              <div
                                class="progress-bar bg-primary"
                                role="progressbar"
                                style="width: 25%"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div class="w-50 text-left text-primary">25</div>
                        </div>
                      </div>
                      <div class="border-top pt-3">
                        <h5 class="text-danger">
                          <span class="btn-rounded-icon btn-danger rounded mr-2"
                            ><i
                              class="zmdi zmdi-close zmdi-hc-fw text-white"
                            ></i></span
                          >incomplete
                        </h5>
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
                      <a href="" title="" class="bonus"
                        ><i class="la la-gift mr-1 display-6 active"></i>
                        <i class="la la-gift mr-1 display-6 active"></i>
                        <i class="la la-gift mr-1 display-6"></i
                      ></a>
                    </div>
                    <h6 class="mt-4">
                      Comments <small class="text-muted">(optional)</small>
                    </h6>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Leave a message to student..."
                    ></textarea>
                    <div class="pt-2">
                      <button
                        class="btn btn-secondary btn-outline btn-rounded btn-sm mb-1"
                      >
                        Good Job!
                      </button>
                      <button
                        class="btn btn-secondary btn-outline btn-rounded btn-sm mb-1"
                      >
                        Awesome!
                      </button>
                      <button
                        class="btn btn-secondary btn-outline btn-rounded btn-sm mb-1"
                      >
                        Go for it!
                      </button>
                      <button
                        class="btn btn-secondary btn-outline btn-rounded btn-sm mb-1"
                      >
                        You nailed it!
                      </button>
                      <button
                        class="btn btn-secondary btn-outline btn-rounded btn-sm mb-1"
                      >
                        You are almost there!
                      </button>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button
                      type="button"
                      class="btn btn-secondary btn-outline btn-rounded"
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
                    >
                      Check
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomHeader from "../components/CustomHeader";
import MenuLeft from "../components/MenuLeft";
export default {
  name: "AssignmentProgress",
  components: {
    CustomHeader,
    MenuLeft,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>