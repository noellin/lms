<template>
  <aside class="aside-left">
    <nav class="main-menu">
      <!-- class="metismenu" -->
      <ul class="nav metismenu">
        <li class="sidebar-header"><span>Active</span></li>
        <li class="nav-dropdown">
          <!-- class="has-arrow" -->
          <a
            class="has-arrow"
            aria-expanded="false"
            href="#tt"
            @click.prevent=""
            data-toggle="collapse"
            aria-controls="tt"
            ><span>301 ENGLISH</span></a
          >
          <ul class="nav-sub collapse" id="tt">
            <li>
              <a href="course-material-list.html"><span>Material</span></a>
            </li>
            <li>
              <a href="assignments-list.html"><span>Assignment</span></a>
            </li>
            <li>
              <a href="course-student-list.html"><span>Student</span></a>
            </li>
            <li>
              <a href="dashboard.html"><span>Dashboard</span></a>
            </li>
          </ul>
        </li>
        <!-- <li class="nav-dropdown active">
          <a class="has-arrow" href="#" @click.prevent="" aria-expanded="false"
            ><span>201 ENGLISH</span></a
          >
          <ul class="collapse nav-sub" aria-expanded="false">
            <li>
              <a href="course-material-list.html" class="active"
                ><span>Material</span></a
              >
            </li>
            <li>
              <a href="assignments-list.html"><span>Assignment</span></a>
            </li>
            <li>
              <a href="course-student-list.html"><span>Student</span></a>
            </li>
            <li>
              <a href="dashboard.html"><span>Dashboard</span></a>
            </li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <a class="has-arrow" href="#" @click.prevent="" aria-expanded="false"
            ><span>202 ENGLISH</span></a
          >
          <ul class="collapse nav-sub" aria-expanded="false">
            <li>
              <a href="course-material-list.html"><span>Material</span></a>
            </li>
            <li>
              <a href="assignments-list.html"><span>Assignment</span></a>
            </li>
            <li>
              <a href="course-student-list.html"><span>Student</span></a>
            </li>
            <li>
              <a href="dashboard.html"><span>Dashboard</span></a>
            </li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <a class="has-arrow" href="#" @click.prevent="" aria-expanded="false"
            ><span>101 ENGLISH</span></a
          >
          <ul class="collapse nav-sub" aria-expanded="false">
            <li>
              <a href="course-material-list.html"><span>Material</span></a>
            </li>
            <li>
              <a href="assignments-list.html"><span>Assignment</span></a>
            </li>
            <li>
              <a href="course-student-list.html"><span>Student</span></a>
            </li>
            <li>
              <a href="dashboard.html"><span>Dashboard</span></a>
            </li>
          </ul>
        </li> -->
      </ul>
    </nav>
  </aside>
</template>
<script>
export default {
  name: "MenuLeft",
  data() {
    return {
      userInfo: {
        name: "Amanda",
        email: "support@authenticgoods.co",
      },
    };
  },
  mounted() {
    // document.getElementById("tt").setAttribute("aria-expanded", false);
  },
  computed: {
    showPage() {
      return this.$route.name;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>