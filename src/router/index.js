import Vue from "vue";
import VueRouter from "vue-router";
import CourseList from "../views/CourseList";
import CourseMaterial from "../views/CourseMaterial.vue";
import CourseAssignment from "../views/CourseAssignment.vue";
import CourseDashboard from "../views/CourseDashboard.vue";
import CourseStudent from "../views/CourseStudent.vue";
import Login from "../views/Login.vue";
import Collection from "../views/Collection.vue";
import Account from "../views/Account.vue";
import AccountDetail from "../views/AccountDetail.vue";
import SpeakingQuiz from "../views/SpeakingQuiz.vue";
import CollectionDetail from "../views/CollectionDetail.vue";
import CollectionEdit from "../views/CollectionEdit.vue";
import ErrorPage from "../views/error.vue";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "*",
  //   redirect: "/",
  // },
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/resetpassword/id=:id",
    name: "ResetPassword",
    component: Login,
  },
  {
    path: "/course",
    name: "Course",
    component: CourseList,
  },
  {
    path: "/course_material/course=:course/type=:type",
    name: "CourseMaterial",
    component: CourseMaterial,
  },
  {
    path: "/course_assignment/course=:course/type=:type",
    name: "CourseAssignment",
    component: CourseAssignment,
  },
  {
    path: "/course_student/course=:course/type=:type",
    name: "CourseStudent",
    component: CourseStudent,
  },
  {
    path: "/course_dashboard/course=:course/type=:type",
    name: "CourseDashboard",
    component: CourseDashboard,
  },
  {
    path: "/speaking_quiz/course=:course/type=:type",
    name: "SpeakingQuiz",
    component: SpeakingQuiz,
  },
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/collection/collection=:collection",
    name: "CollectionDetail",
    component: CollectionDetail,
  },
  {
    path: "/collection/collection=:collection/edit",
    name: "CollectionEdit",
    component: CollectionEdit,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/account/:id",
    name: "AccountDetail",
    component: AccountDetail,
  },
  {
    path: "/404",
    name: "404",
    component: ErrorPage,
  },
  {
    path: "/about",
    name: "About",
    component: function () {
      return import( /* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;