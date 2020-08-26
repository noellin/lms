import Vue from "vue";
import VueRouter from "vue-router";
import CourseList from "../views/CourseList";
import CourseMaterial from "../views/CourseMaterial.vue";
import CourseAssignment from "../views/CourseAssignment.vue";
import Login from "../views/Login.vue";
import Collection from "../views/Collection.vue";
import Account from "../views/Account.vue";
import SpeakingQuiz from "../views/SpeakingQuiz.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/",
  },
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
    path: "/course_assignment",
    name: "CourseAssignment",
    component: CourseAssignment,
  },
  {
    path: "/speaking_quiz",
    name: "SpeakingQuiz",
    component: SpeakingQuiz,
  },
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
