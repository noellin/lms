<template>
  <!-- class="aside-left" -->
  <aside class="px-0">
    <nav class="main-menu">
      <!-- class="metismenu" -->

      <ul class="nav metismenu content-maxheight">
        <li class="sidebar-header" v-if="expired === 'expired'">
          <span>{{ $t("expired-classes") }}</span>
        </li>
        <li class="sidebar-header" v-else>
          <span>{{ $t("active") }}</span>
        </li>
        <li
          id="accordionExample"
          class="nav-dropdown accordion"
          v-for="course in activeCourse"
          :key="course.courseid"
          :class="
            coursePage === course.course_name && courseID === course.courseid
              ? 'active'
              : ''
          "
        >
          <!-- class="has-arrow" -->
          <a
            class="has-arrow"
            :aria-expanded="
              coursePage === course.course_name && courseID === course.courseid
                ? true
                : false
            "
            :href="'#course' + course.courseid"
            :data-target="'#course' + course.courseid"
            @click.prevent=""
            data-toggle="collapse"
            :aria-controls="'course' + course.courseid"
            @click="changePageStatus(course.course_name)"
            :class="
              coursePage === course.course_name && courseID === course.courseid
                ? ''
                : 'collapsed'
            "
            ><i class="ig-notice" v-if="courseID === course.courseid"></i>
            <span class="course-title">
              {{ course.course_name }}
            </span>
            <i
              class="fas fa-exclamation-triangle text-danger"
              v-if="expired === 'expired'"
              type="button"
              data-toggle="tooltip"
              data-placement="right"
              title="This class has expired"
            ></i>
          </a>
          <ul
            class="nav-sub collapse"
            :id="'course' + course.courseid"
            :class="
              coursePage === course.course_name && courseID === course.courseid
                ? 'show'
                : ''
            "
            data-parent="#accordionExample"
            :aria-labelledby="course.courseid"
          >
            <li v-for="type in typeList" :key="type + course.courseid">
              <a
                ><span
                  :class="
                    courseType === type && courseID === course.courseid
                      ? 'color-lightblue'
                      : ''
                  "
                  class="pointer"
                  @click="
                    changePage(
                      course.course_name,
                      type,
                      course.courseid,
                      expired
                    )
                  "
                  >{{ type }}</span
                >
                <!-- <span
                  class="badge badge-pill badge-danger"
                  v-if="type === 'Assignment'"
                  >4</span
                > -->
              </a>
            </li>
          </ul>
        </li>
        <!-- 123 -->

        <!-- 123 -->
      </ul>
    </nav>
  </aside>
</template>
<script>
// import {
//   ApiGetActiveCourseList,
//   ApiGetExpiredCourseList,
// } from "../http/apis/CourseList";
import dayjs from "dayjs";
export default {
  name: "MenuLeft",
  data() {
    return {
      // userInfo: {
      //   name: "Amanda",
      //   email: "support@authenticgoods.co",
      // },
      typeList: [
        "Library",
        "Assignments",
        "Student Roster",
        "Dashboard",
        "Echo Valley",
      ],
      coursePage: "",
      courseType: "",
      iconStatus: this.$route.params.course,
      courseID: this.$route.params.courseid,
      expired: this.$route.params.expired,
      notExpired: true,
      course: {
        activeCourseList: [],
        expiredCourseList: [],
        coursePagination: {
          total_pages: 1,
          current_page: 1,
          has_pre: false,
          has_next: false,
        },
      },
    };
  },
  created() {
    // if (this.expired === "expired") {
    //   this.typeList = [
    //     "Assignments",
    //     "Student Roster",
    //     "Dashboard",
    //     "Echo Valley",
    //   ];
    // }
    let vm = this;
    // if (this.permit === "admin") {
    //   // this.getActiveCourseList("");
    //   this.getExpiredCourseList("*");
    //   // this.getExpiredCourseList();
    // } else if (this.permit !== "admin") {
    //   this.getExpiredCourseList();
    //   // this.getActiveCourseList(this.userid);
    // }
    this.$store.dispatch(
      "courseInfo/getCouseInfo",
      this.$route.params.courseid
    );
  },
  async mounted() {
    let vm = this;
    this.course.activeCourseList = this.expiredClass;
    let result = await this.expiredClass.forEach((expiredC) => {
      if (expiredC.courseid === vm.courseID) {
        vm.updateURL();
        vm.notExpired = false;
        return true;
      }
    });
    if (!result) {
      if (this.permit === "admin" && vm.notExpired) {
        this.course.activeCourseList = this.activeClass;
      } else if (this.permit !== "admin" && vm.notExpired) {
        this.course.activeCourseList = this.activeClass;
      }
    }
  },
  computed: {
    activeCourse() {
      let temp = this.course.activeCourseList.filter((item) => {
        return item.course_name !== "";
      });
      return temp;
    },
    activeClass() {
      return this.$store.state.courseInfo.ActiveClassList;
    },
    expiredClass() {
      return this.$store.state.courseInfo.ExpiredClassList;
    },
    userid() {
      return this.$store.state.auth.userid;
    },
    permit() {
      return this.$store.state.auth.permit;
    },
    showPage() {
      return this.$route.name;
    },
  },
  watch: {
    "$route.params.course": {
      handler: function (course) {
        this.coursePage = course;
      },
      deep: true,
      immediate: true,
    },
    "$route.params.courseid": {
      handler: function (courseid) {
        this.courseID = courseid;
      },
      deep: true,
      immediate: true,
    },
    "$route.params.type": {
      handler: function (type) {
        this.courseType = type;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    updateURL() {
      console.log("xxxxxxxxxxxChange urlxxxxxxxxxxxx");
      if (
        this.$route.params.expired !== "expired" &&
        this.$route.path.split("").pop() === "/"
      ) {
        this.$router.push({
          path: `${this.$route.path}expired`,
        });
      } else if (
        this.$route.params.expired !== "expired" &&
        this.$route.path.split("").pop() !== "/"
      ) {
        this.$router.push({
          path: `${this.$route.path}/expired`,
        });
      }
      // history.pushState({}, null, "/#/detail/" + this.book.isbn13);
    },

    changePageStatus(courseName) {
      if (this.iconStatus === courseName) {
        this.iconStatus = "null";
      } else {
        this.iconStatus = courseName;
      }
    },
    changePage(course, type, id, expired = "") {
      // this.courseType = type;
      // this.coursePage = course;

      if (id !== this.courseID) {
        this.$store.dispatch("courseInfo/getCouseInfo", id);
      }
      switch (type) {
        case "Library":
          this.$router
            .push({
              path: `/course_material/course=${course}/type=${type}/${id}/${expired}`,
            })
            .catch((err) => err);
          break;
        case "Assignments":
          this.$router
            .push({
              path: `/course_assignment/course=${course}/type=${type}/${id}/${expired}`,
            })
            .catch((err) => err);
          break;
        case "Student Roster":
          this.$router
            .push({
              path: `/course_student/course=${course}/type=${type}/${id}/${expired}`,
            })
            .catch((err) => err);
          break;
        case "Dashboard":
          this.$router
            .push({
              path: `/course_dashboard/course=${course}/type=${type}/${id}/${expired}`,
            })
            .catch((err) => err);
          break;
        case "Echo Valley":
          this.$router
            .push({
              path: `/course_weekly_quiz/course=${course}/type=${type}/${id}/${expired}`,
            })
            .catch((err) => err);
          break;

        default:
          break;
      }
      (this.coursePage = this.$route.params.course),
        (this.courseType = this.$route.params.type),
        (this.iconStatus = this.$route.params.course),
        (this.courseID = this.$route.params.courseid);
    },
  },
};
</script>

<style scoped lang="scss">
#app2 {
  width: 100%;

  min-height: 100%;
}

.course-title {
  font-size: 14px;
}
</style>