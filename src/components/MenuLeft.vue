<template>
  <aside class="aside-left">
    <nav class="main-menu">
      <!-- class="metismenu" -->
      <ul class="nav metismenu">
        <li class="sidebar-header"><span>Active</span></li>
        <li
          class="nav-dropdown"
          v-for="(course, coursename, index) in classList"
          :key="index"
        >
          <!-- class="has-arrow" -->
          <a
            class="has-arrow"
            aria-expanded="false"
            :href="'#course' + index"
            @click.prevent=""
            data-toggle="collapse"
            ><span>{{ coursename }}</span></a
          >
          <ul
            class="nav-sub collapse"
            :id="'course' + index"
            :class="coursePage === coursename ? 'show' : ''"
          >
            <li v-for="type in course" :key="type + index">
              <a
                ><span
                  :class="
                    courseType === type && coursePage === coursename
                      ? 'color-lightblue'
                      : ''
                  "
                  class="pointer"
                  @click="changePage(coursename, type)"
                  >{{ type }}</span
                ></a
              >
            </li>
            <!-- <li>
              <a href="assignments-list.html"><span>Assignment</span></a>
            </li>
            <li>
              <a href="course-student-list.html"><span>Student</span></a>
            </li>
            <li>
              <a href="dashboard.html"><span>Dashboard</span></a>
            </li> -->
          </ul>
        </li>
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
      classList: {
        "301 English": ["Material", "Assignment", "Student", "Dashboard"],
        "302 English": ["Material", "Assignment", "Student", "Dashboard"],
      },
      coursePage: this.$route.params.course,
      courseType: this.$route.params.type,
    };
  },
  mounted() {
    console.log(this.$route.params.course);
    // document.getElementById("tt").setAttribute("aria-expanded", false);
  },
  computed: {
    showPage() {
      return this.$route.name;
    },
  },
  methods: {
    changePage(course, type) {
      switch (type) {
        case "Material":
          this.$router
            .push({
              path: `/course_material/course=${course}/type=${type}`,
            })
            .catch((err) => err);
          break;
        case "Assignment":
          this.$router
            .push({
              path: `/course_assignment/course=${course}/type=${type}`,
            })
            .catch((err) => err);
          break;
        case "Student":
          this.$router
            .push({
              path: `/course_student/course=${course}/type=${type}`,
            })
            .catch((err) => err);
          break;
        case "Dashboard":
          this.$router
            .push({
              path: `/course_dashboard/course=${course}/type=${type}`,
            })
            .catch((err) => err);
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>