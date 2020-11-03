<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <!-- <custom-header></custom-header> -->
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <!-- <menu-left></menu-left> -->

        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Assigned date</th>
                            <th>Due</th>
                            <th>For</th>
                            <th>Completed ／Total students</th>
                            <th>Degree of difficulty</th>
                            <th>Preview</th>
                            <th>Check progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="a in aList" :key="a.asgmtid">
                            <td class="pl-5">
                              <i
                                class="ig-notice"
                                v-if="a.check_status !== 'true'"
                              ></i
                              >{{ a.publish_date | dateConversion }}
                            </td>
                            <td>{{ a.expiry_date | dateConversion }}</td>
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
                                >Progress view</a
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
            <h5 class="modal-title">List preview</h5>
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
                <h6 class="col-3 text-right">Date</h6>
                <div class="col-9">
                  {{ tempAM.publish_date | dateConversion }} -
                  {{ tempAM.expiry_date | dateConversion }}
                </div>
              </div>
              <div class="row pb-2">
                <h6 class="col-3 text-right">Students</h6>
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
                      >Reading</span
                    >
                    <span
                      class="badge badge-pill badge-accent"
                      v-else-if="am.type === 'speaking'"
                      >Speaking Quiz</span
                    >
                    <span class="badge badge-pill badge-warning" v-else
                      >Watching</span
                    >
                    {{ am.resource_name }}
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
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CourseHeader from "../components/CourseHeader";
import { ApiGetAList, ApiGetAMaterial } from "../http/apis/Assignment";
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
    getAList() {
      ApiGetAList.get(this.courseid, this.userid)
        .then((response) => {
          this.aList = response.record;
        })
        .catch((err) => {});
    },
    getAMaterial(aid) {
      ApiGetAMaterial.get(aid)
        .then((response) => {
          this.aMaterial = response.record;
        })
        .catch((err) => {});
    },
    gotoProgress(aid) {
      this.$router.push({
        path: `/check_assignment/course=${this.$route.params.course}/type=${this.$route.params.type}/${this.$route.params.courseid}/${aid}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>