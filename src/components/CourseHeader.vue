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
        <span>{{ page }}</span>
        <p class="second-title" v-if="page !== 'Speaking Quiz'">
          {{ courseInfo.pkg_name }}
        </p>
        <p class="second-title" v-else>{{ rname }} / {{ mname }}</p>
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
      page: this.$route.params.type,
      rname: this.$route.params.rname,
      mname: this.$route.params.mname,
      course_name: this.$route.params.course,
    };
  },
  created() {
    if (this.$route.params.mname === "undefined") {
      this.mname = "";
    }
  },
  computed: {
    courseInfo() {
      return this.$store.state.courseInfo.courseInfo;
    },
  },
  methods: {},
};
</script>