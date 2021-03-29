<template>
  <header class="page-header">
    <div class="d-flex align-items-start">
      <div class="mt-2 mr-3" v-if="backtag === true">
        <a @click="$back" class="btn-rounded-icon btn-primary ml-2 pointer"
          ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
        ></a>
      </div>
      <div class="mt-2 mr-3" v-if="backtag !== true && page == 'Speaking task'">
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
          {{ $t("echo-valley") }} {{ weeklyQuizDL.pubDate | dateConversion }} -
          {{ $t("due") }}
          {{ weeklyQuizDL.expDate | dateConversion }}
        </p>
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
  </header>
</template>
<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
import $ from "jquery";
export default {
  name: "CourseHeader",
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
  },
  watch: {
    courseInfos() {
      this.courseInfo = this.courseInfos;
    },
  },
  computed: {
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