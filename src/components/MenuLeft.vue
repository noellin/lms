<template>
  <aside class="aside-left">
    <nav class="main-menu">
      <!-- class="metismenu" -->
      <ul class="nav metismenu">
        <li class="sidebar-header"><span>Active</span></li>
        <li
          id="accordionExample"
          class="nav-dropdown accordion"
          v-for="(course, coursename, index) in classList"
          :key="index"
          :class="coursePage === coursename ? 'active' : ''"
        >
          <!-- class="has-arrow" -->
          <a
            class="has-arrow"
            :aria-expanded="coursePage === coursename ? true : false"
            :href="'#course' + index"
            :data-target="'#course' + index"
            @click.prevent=""
            data-toggle="collapse"
            :aria-controls="'course' + index"
            @click="changePageStatus(coursename)"
            :class="coursePage === coursename ? '' : 'collapsed'"
            ><i class="ig-notice" v-if="coursePage === coursename"></i>
            <span>
              {{ coursename }}
              <!-- <i
                class="la la-angle-down color-lightblue"
                v-if="iconStatus === coursename"
              ></i>
              <i class="la la-angle-right color-lightblue" v-else></i> -->
            </span></a
          >
          <ul
            class="nav-sub collapse"
            :id="'course' + index"
            :class="coursePage === coursename ? 'show' : ''"
            data-parent="#accordionExample"
            :aria-labelledby="index"
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
                >
                <span
                  class="badge badge-pill badge-danger"
                  v-if="type === 'Assignment'"
                  >4</span
                >
              </a>
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
      iconStatus: this.$route.params.course,
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
    changePageStatus(courseName) {
      if (this.iconStatus === courseName) {
        this.iconStatus = "null";
      } else {
        this.iconStatus = courseName;
      }
    },
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