<template>
  <header class="page-header">
    <div class="d-flex align-items-start">
      <div class="mt-2 mr-3" v-if="backtag === true">
        <a @click="$back" class="btn-rounded-icon btn-primary ml-2"
          ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
        ></a>
      </div>
      <div class="mr-auto">
        <h1 class="separator">{{ course_name }}</h1>
        <span>{{ page }}</span
        ><span v-if="type === 'Dashboard'" class="pointer" @click="print()"
          ><i class="zmdi zmdi-print"></i
        ></span>
        <p class="second-title" v-if="page !== 'Speaking_Quiz'">
          {{ courseInfo.pkg_name }}
        </p>
        <p class="second-title" v-else>{{ rname }} / {{ mname }}</p>
        <p class="second-title" v-if="$route.name === 'Assignment_Progress'">
          Assigned {{ assignmentDL.pubDate | dateConversion }} - Due
          {{ assignmentDL.expDate | dateConversion }}
        </p>
        <p class="second-title" v-if="$route.name === 'Weekly_Quiz_Progress'">
          Weekly Quiz {{ weeklyQuizDL.pubDate | dateConversion }} - Due
          {{ weeklyQuizDL.expDate | dateConversion }}
        </p>
        <span></span>
      </div>
    </div>
  </header>
</template>
<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
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
    };
  },
  created() {
    this.page = this.$route.name.replaceAll("_", " ");
    if (this.$route.params.mname === "undefined") {
      this.mname = "";
    }
    this.courseInfo = this.courseInfos;
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
  },
};
</script>