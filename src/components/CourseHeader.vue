<template>
  <header class="page-header">
    <div class="d-flex align-items-start">
      <div class="mt-2 mr-3">
        <a @click="$back" class="btn-rounded-icon btn-primary ml-2"
          ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
        ></a>
      </div>
      <div class="mr-auto">
        <h1 class="separator">{{ courseInfo.course_name }}</h1>
        <span>Material</span>
        <p class="second-title">{{ courseInfo.pkg_name }}</p>
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
    return {};
  },
  computed: {
    courseInfo() {
      return this.$store.state.courseInfo.courseInfo;
    },
  },
  methods: {},
};
</script>