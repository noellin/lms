<template>
  <aside class="aside-left">
    <nav class="main-menu">
      <!-- class="metismenu" -->
      <ul class="nav metismenu">
        <li class="sidebar-header"><span>Active</span></li>
        <li
          id="accordionExample"
          class="nav-dropdown accordion"
          v-for="course in course.activeCourseList"
          :key="course.courseid"
          :class="coursePage === course.course_name ? 'active' : ''"
        >
          <!-- class="has-arrow" -->
          <a
            class="has-arrow"
            :aria-expanded="coursePage === course.course_name ? true : false"
            :href="'#course' + course.courseid"
            :data-target="'#course' + course.courseid"
            @click.prevent=""
            data-toggle="collapse"
            :aria-controls="'course' + course.courseid"
            @click="changePageStatus(course.course_name)"
            :class="coursePage === course.course_name ? '' : 'collapsed'"
            ><i class="ig-notice" v-if="coursePage === course.course_name"></i>
            <span>
              {{ course.course_name }}
              <!-- <i
                class="la la-angle-down color-lightblue"
                v-if="iconStatus === coursename"
              ></i>
              <i class="la la-angle-right color-lightblue" v-else></i> -->
            </span></a
          >
          <ul
            class="nav-sub collapse"
            :id="'course' + course.courseid"
            :class="coursePage === course.course_name ? 'show' : ''"
            data-parent="#accordionExample"
            :aria-labelledby="course.courseid"
          >
            <li v-for="type in typeList" :key="type + course.courseid">
              <a
                ><span
                  :class="
                    courseType === type && coursePage === course.course_name
                      ? 'color-lightblue'
                      : ''
                  "
                  class="pointer"
                  @click="changePage(course.course_name, type, course.courseid)"
                  >{{ type }}</span
                >
                <span
                  class="badge badge-pill badge-danger"
                  v-if="type === 'Assignment'"
                  >4</span
                >
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<script>
import { ApiGetActiveCourseList } from "../http/apis/CourseList";
import dayjs from "dayjs";
export default {
  name: "MenuLeft",
  data() {
    return {
      // userInfo: {
      //   name: "Amanda",
      //   email: "support@authenticgoods.co",
      // },
      typeList: ["Material", "Assignment", "Student", "Dashboard"],
      coursePage: this.$route.params.course,
      courseType: this.$route.params.type,
      iconStatus: this.$route.params.course,
      courseID: this.$route.params.courseid,
      course: {
        activeCourseList: [],
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
    if (this.permit === "admin") {
      this.getActiveCourseList("");
    } else {
      this.getActiveCourseList(this.userid);
    }
    this.$store.dispatch("courseInfo/getCouseInfo", this.courseID);
  },
  mounted() {},
  computed: {
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
  methods: {
    getActiveCourseList(teacherid = "") {
      // this.course.activeCourseList = [];
      ApiGetActiveCourseList.get(this.permit, this.userid, teacherid).then(
        (response) => {
          this.course.activeCourseList = response.record;
          this.course.activeCourseList.forEach((item) => {
            item.expiry = dayjs
              .unix(item.expiry_date)
              .add(1, "month")
              .isBefore(dayjs.unix(this.todayTimestamp));
          });
        }
      );
    },
    changePageStatus(courseName) {
      if (this.iconStatus === courseName) {
        this.iconStatus = "null";
      } else {
        this.iconStatus = courseName;
      }
    },
    changePage(course, type, id) {
      if (id !== this.courseID) {
        this.$store.dispatch("courseInfo/getCouseInfo", id);
      }
      switch (type) {
        case "Material":
          this.$router
            .push({
              path: `/course_material/course=${course}/type=${type}/${id}`,
            })
            .catch((err) => err);
          break;
        case "Assignment":
          this.$router
            .push({
              path: `/course_assignment/course=${course}/type=${type}/${id}`,
            })
            .catch((err) => err);
          break;
        case "Student":
          this.$router
            .push({
              path: `/course_student/course=${course}/type=${type}/${id}`,
            })
            .catch((err) => err);
          break;
        case "Dashboard":
          this.$router
            .push({
              path: `/course_dashboard/course=${course}/type=${type}/${id}`,
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
//@import '../assets/css/igroup.css';
</style>