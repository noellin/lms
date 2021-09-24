<template>
  <header class="page-header">
    <div class="d-flex align-items-start justify-content-between">
      <div>
        <div class="mt-2 mr-3" v-if="backtag === true">
          <a @click="$back" class="btn-rounded-icon btn-primary ml-2 pointer"
            ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
          ></a>
        </div>
        <div
          class="mt-2 mr-3"
          v-if="backtag !== true && page == 'Speaking task'"
        >
          <a
            @click="backToMaterial()"
            class="btn-rounded-icon btn-primary ml-2 pointer"
            ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
          ></a>
        </div>
        <div class="mr-auto">
          <h1 class="separator">{{ course_name }}</h1>
          <span>{{ page }}</span
          ><span v-if="type === 'Dashboard'" class="pointer" @click="print()"
            ><i class="zmdi zmdi-print"></i
          ></span>
          <!-- echo descriptipn -->
          <span
            class="ml-1 pointer"
            v-if="$route.name === 'Echo_Valley_Quiz'"
            data-toggle="modal"
            data-target="#infoModal"
            ><i class="fas fa-info-circle fa-sm mfilter-icon"></i
          ></span>
          <p class="second-title" v-if="page !== 'Speaking Quiz'">
            {{ courseInfo.pkg_name }}
          </p>
          <p class="second-title" v-else>{{ rname }} / {{ mname }}</p>
          <p class="second-title" v-if="$route.name === 'Assignment_Progress'">
            {{ $t("assigned") }} {{ assignmentDL.pubDate | dateConversion }} -
            {{ $t("due") }}
            {{ assignmentDL.expDate | dateConversion }}
          </p>
          <p class="second-title" v-if="$route.name === 'Weekly_Quiz_Progress'">
            {{ $t("echo-valley") }}
            {{ weeklyQuizDL.pubDate | dateConversion }} -
            {{ $t("due") }}
            {{ weeklyQuizDL.expDate | dateConversion }}
          </p>
        </div>
      </div>
      <div>
        <button
          class="btn btn-primary"
          v-if="$route.name === 'Dashboard'"
          data-toggle="modal"
          data-target="#downloadModal"
        >
          Download report
        </button>
      </div>
    </div>
    <!--  -->
    <div
      class="modal fade"
      id="infoModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("echo-valley") }}</h5>
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
            <p>
              {{
                $t(
                  "echo-valley-offers-weekly-oral-assignments-or-users-can-create-their-own-oral-assignments-which-will-be-automatically-scored-by-the-system-and-provide-relevant-information"
                )
              }}.
            </p>
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
    <!-- modal -->
    <div
      class="modal fade"
      id="downloadModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Download report</h5>
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
            <ul class="list-reset text-left m-t-20 m-b-30">
              <li class="text-muted">
                <strong>{{ $t("name") }}:</strong>
                <span class="m-l-15">{{ username }}</span>
              </li>
              <li class="text-muted">
                <strong>{{ $t("email") }}:</strong>
                <span class="m-l-15">{{ email }}</span>
              </li>
              <li class="text-muted">
                <strong>Course name:</strong>
                <span class="m-l-15">
                  {{ course_name }}
                </span>
              </li>
              <li class="text-muted">
                <strong>{{ $t("due") }}:</strong>
                <span class="m-l-15">
                  <!-- {{ reportPeriod }} -->
                  <date-picker
                    v-model="reportPeriod"
                    valueType="format"
                    range
                  ></date-picker>
                </span>
              </li>
            </ul>
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
              @click="downloadReport()"
              :disabled="reportPeriod === null"
              data-dismiss="modal"
            >
              Download
              <!-- {{ $t("confirm-0") }} -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
import $ from "jquery";
import DatePicker from "vue2-datepicker";
import dayjs from "dayjs";
import "vue2-datepicker/index.css";
import { ApiGetAccountInfo } from "../http/apis/Account";
import { ApiDownloadReport } from "../http/apis/Dashboard";
export default {
  name: "CourseHeader",
  components: {
    DatePicker,
  },
  data() {
    return {
      backtag: this.$route.meta.backtag,
      page: "",
      rname: this.$route.params.rname,
      mname: this.$route.params.mname,
      course_name: this.$route.params.course,
      type: this.$route.params.type,
      courseInfo: {},
      cid: this.$route.params.courseid,
      accountInfo: {},
      reportPeriod: null,
    };
  },
  created() {
    this.page = this.$route.name.replaceAll("_", " ");
    if (this.$route.params.mname === "undefined") {
      this.mname = "";
    }
    this.courseInfo = this.courseInfos;
  },
  mounted() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    // this.getAccountInfo();
  },
  watch: {
    courseInfos() {
      this.courseInfo = this.courseInfos;
    },
  },
  computed: {
    username() {
      return this.$store.state.auth.username;
    },
    userid() {
      return this.$store.state.auth.userid;
    },
    email() {
      return this.$store.state.auth.email;
    },
    courseInfos() {
      return this.$store.state.courseInfo.courseInfo;
    },
    assignmentDL() {
      return this.$store.state.courseInfo.assignmentDL;
    },
    weeklyQuizDL() {
      return this.$store.state.courseInfo.weeklyQuizDL;
    },
  },
  methods: {
    // getAccountInfo() {
    //   console.log("get info");
    //   console.log(this.userid);
    //   ApiGetAccountInfo.get(this.userid)
    //     .then((response) => {
    //       // if (response.record.status === "enable") {
    //       //   this.accountStatus = true;
    //       // } else {
    //       //   this.accountStatus = false;
    //       // }
    //       this.accountInfo = response.record;
    //     })
    //     .catch((err) => {});
    // },
    downloadReport() {
      let vm = this;
      let obj = {
        email: this.email,
        startDate: dayjs(this.reportPeriod[0]).unix().toString(),
        endDate: dayjs(this.reportPeriod[1]).unix().toString(),
      };
      // console.log(obj);
      ApiDownloadReport.post(this.cid, obj).then((result) => {
        if (result.status === "success") {
          this.$bus.$emit(
            "messsage:push",
            "Please receive the report in the email.",
            "success"
          );
        } else {
          this.$bus.$emit("messsage:push", result.error, "danger");
        }
      });
    },
    print() {
      this.$print(this.$parent.$refs.print);
    },
    backToMaterial() {
      this.$router
        .push({
          path: `/course_material/course=${this.course_name}/type=${this.type}/${this.cid}`,
        })
        .catch((err) => err);
    },
  },
};
</script>