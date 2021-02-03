<template>
  <div id="app2 ">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content">
      <!-- TOP TOOLBAR WRAPPER -->
      <!-- <custom-header></custom-header> -->
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <!-- <menu-left></menu-left> -->

        <div class="main-content">
          <course-header></course-header>
          <div class="page-content container-fluid">
            <div class="d-flex justify-content-end mb-3">
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-primary btn-outline btn-rounded"
                  data-toggle="modal"
                  data-target="#DeleteAModal"
                  :disabled="selectedAssignment.length === 0"
                >
                  <i class="la la-trash"></i>
                  {{ $t("delete-assignment") }}
                  <span
                    class="badge badge-danger"
                    v-if="selectedAssignment.length !== 0"
                    >{{ selectedAssignment.length }}</span
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
                                  v-model="selectAllA"
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
                              {{ $t("assigned-name")
                              }}<i
                                class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                              ></i>
                            </th>
                            <th
                              @click="sortTable('publish_date')"
                              class="pointer"
                            >
                              {{ $t("assigned-date")
                              }}<i
                                class="zmdi zmdi-swap-vertical ml-1 zmdi-hc-lg"
                              ></i>
                            </th>
                            <th
                              @click="sortTable('expiry_date')"
                              class="pointer"
                            >
                              {{ $t("due")
                              }}<i
                                class="zmdi zmdi-swap-vertical zmdi-hc-lg ml-1"
                              ></i>
                            </th>
                            <th>{{ $t("for") }}</th>
                            <th>{{ $t("completed-total-students") }}</th>
                            <th
                              @click="sortTable('difficult_level')"
                              class="pointer"
                            >
                              {{ $t("degree-of-difficulty")
                              }}<i
                                class="zmdi zmdi-swap-vertical zmdi-hc-lg ml-1"
                              ></i>
                            </th>
                            <th>{{ $t("preview") }}</th>
                            <th>{{ $t("check-progress") }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="a in aList" :key="a.asgmtid">
                            <td>
                              <div
                                class="custom-control custom-checkbox form-check"
                              >
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  :id="a.asgmtid"
                                  v-model="selectedAssignment"
                                  :value="a.asgmtid"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="a.asgmtid"
                                ></label>
                              </div>
                            </td>
                            <td class="">
                              {{ a.description }}
                            </td>
                            <td class="pl-5">
                              <i
                                class="ig-notice"
                                v-if="a.check_status !== 'true'"
                              ></i
                              >{{ a.publish_date | dateConversion }}
                            </td>
                            <td :class="expired(a.expiry_date)">
                              {{ a.expiry_date | dateConversion }}
                            </td>
                            <!-- <td>All students</td> -->
                            <td>{{ a.target }}</td>
                            <td>{{ a.completedStu }} ／{{ a.totalStu }}</td>
                            <td>{{ a.difficult_level }}</td>
                            <td>
                              <button
                                type=""
                                class="btn btn-nostyle"
                                data-toggle="modal"
                                data-target="#PreviewModel"
                                @click="
                                  getAMaterial(a.asgmtid);
                                  tempAM = a;
                                "
                              >
                                <i class="la la-eye"></i>
                              </button>
                            </td>
                            <td>
                              <a
                                @click="gotoProgress(a.asgmtid)"
                                class="btn btn-primary btn-sm btn-rounded text-white"
                                >{{ $t("progress-view") }}</a
                              >
                              <!-- <a
                                href="assignments-progress.html"
                                class="btn btn-primary btn-outline btn-sm btn-rounded"
                                >Record view</a
                              > -->
                            </td>
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
          </div>
        </div>
      </div>
    </div>

    <!-- END CONTENT WRAPPER -->
    <!-- Setting MODAL -->
    <div
      class="modal fade"
      id="PreviewModel"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("list-preview") }}</h5>
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
            <div class="mb-3">
              <div class="row pb-2 pt-2">
                <div class="col-3 text-right fw-400 fs-h6 xstitie-color">
                  {{ $t("date") }}
                </div>
                <div class="col-9">
                  {{ tempAM.publish_date | dateConversion }} -
                  {{ tempAM.expiry_date | dateConversion }}
                </div>
              </div>
              <div class="row pb-2">
                <div class="col-3 text-right fw-400 fs-h6 xstitie-color">
                  {{ $t("students") }}
                </div>
                <div class="col-9">{{ tempAM.target }}</div>
              </div>
            </div>
            <div class="bg-light rounded">
              <ul class="sequence">
                <li
                  class="border bg-white rounded"
                  v-for="am in aMaterial"
                  :key="am.publish_date + am.resource_name"
                >
                  <div class="mr-3">
                    <span
                      class="badge badge-pill badge-primary"
                      v-if="am.type === 'reading'"
                      >{{ $t("reading") }}</span
                    >
                    <span
                      class="badge badge-pill badge-accent"
                      v-else-if="am.type === 'speaking'"
                      >{{ $t("speaking-quiz") }}</span
                    >
                    <span class="badge badge-pill badge-warning" v-else>{{
                      $t("watching")
                    }}</span>

                    {{ am.resource_name
                    }}<span v-show="am.material_name !== ''">
                      - {{ am.material_name }}</span
                    >
                  </div>
                </li>
              </ul>
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
    <!-- DeleteAModal MODAL-->
    <div
      class="modal fade"
      id="DeleteAModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              {{ $t("delete-assignment") }}
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
            <p>{{ $t("want-to-delete-a-checked-assignment") }}?</p>
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
              @click="deleteAssignmentAll()"
            >
              {{ $t("confirm") }}
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
  ApiGetAList,
  ApiGetAMaterial,
  ApiDeleteAssignment,
} from "../http/apis/Assignment";
import dayjs from "dayjs";
import _ from "lodash";
export default {
  name: "CourseAssignment",
  components: {
    CourseHeader,
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
      aList: [],
      aMaterial: [],
      tempAM: {},
      selectAllA: "",
      selectedAssignment: [],
      sortStatus: false,
      tempSortItem: "",
    };
  },
  created() {
    this.getAList();
  },
  computed: {},
  watch: {
    courseid() {
      this.reload();
    },
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
        this.aList = _.sortBy(this.aList, [sortItem], ["asc"]);
      } else {
        this.aList = this.aList.reverse();
      }

      // publish_date
    },
    expired(date) {
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
    selectAll(event) {
      const vm = this;

      if (!event.currentTarget.checked) {
        vm.selectedAssignment = [];
      } else {
        //實現全選
        vm.selectedAssignment = [];
        vm.aList.forEach(function (item, i) {
          vm.selectedAssignment.push(item.asgmtid);
        });
      }
    },
    getAList() {
      this.aList = [];
      ApiGetAList.get(this.courseid, this.userid)
        .then((response) => {
          this.aList = response.record;
        })
        .catch((err) => {});
    },
    getAMaterial(aid) {
      console.log(aid);
      ApiGetAMaterial.get(aid)
        .then((response) => {
          console.log(response.record);
          this.aMaterial = response.record;
        })
        .catch((err) => {});
    },
    gotoProgress(aid) {
      this.$router.push({
        path: `/check_assignment/course=${this.$route.params.course}/type=${this.$route.params.type}/${this.$route.params.courseid}/${aid}`,
      });
    },
    deleteAssignmentAll() {
      ApiDeleteAssignment.getAxiosAll(this.selectedAssignment)
        .then((response) => {
          this.selectedAssignment = [];
          this.getAList();
          this.$bus.$emit("messsage:push", "Delete completed.", "success");
        })
        .catch((err) => {});
      // if (this.selectedAssignment.length !== 0) {
      //   this.selectedAssignment.forEach((aid, index) => {
      //     ApiDeleteAssignment.get(aid)
      //       .then((response) => {
      //         if (response.status === "success") {
      //           return true;
      //         }
      //       })
      //       .catch((err) => {});
      //     if (index + 1 === this.selectedAssignment.length) {
      //       this.$bus.$emit("messsage:push", "Delete completed.", "success");
      //       this.selectedAssignment = [];
      //       this.getAList();
      //     }
      //   });
      // }
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>