import Vue from "vue";
import VueRouter from "vue-router";
import CourseList from "../views/CourseList";
import CourseMaterial from "../views/CourseMaterial.vue";
import CourseAssignment from "../views/CourseAssignment.vue";
import AssignmentProgress from "../views/AssignmentProgress.vue"
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
import Layout from "../views/CourseLayout.vue"
Vue.use(VueRouter);
const routes = [

  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      status: 'login'
    }
  },
  {
    path: "/resetpassword/id=:id",
    name: "ResetPassword",
    component: Login,
    meta: {
      status: 'reset'
    }
  },
  {
    path: "/course",
    name: "Course",
    component: CourseList,
    meta: {
      header: 'course'
    }
  },
  {
    path: "/browse",
    name: "Layout",
    component: Layout,
    meta: {
      header: 'course'
    },
    children: [{
        path: "/course_material/course=:course/type=:type/:courseid",
        name: "CourseMaterial",
        component: CourseMaterial,
        meta: {
          header: 'course'
        }
      },
      {
        path: "/course_assignment/course=:course/type=:type/:courseid",
        name: "CourseAssignment",
        component: CourseAssignment,
        meta: {
          header: 'course'
        }
      },
      {
        path: "/course_assignment/course=:course/type=:type/assignment=:id",
        name: "AssignmentProgress",
        component: AssignmentProgress,
        meta: {
          header: 'course'
        }
      },
      {
        path: "/course_student/course=:course/type=:type/:courseid",
        name: "CourseStudent",
        component: CourseStudent,
        meta: {
          header: 'course'
        }
      },
      {
        path: "/course_dashboard/course=:course/type=:type/:courseid",
        name: "CourseDashboard",
        component: CourseDashboard,
        meta: {
          header: 'course'
        }
      },
      {
        path: "/speaking_quiz/course=:course/type=:type",
        name: "SpeakingQuiz",
        component: SpeakingQuiz,
        meta: {
          header: 'course'
        }
      },
    ]
  },
  // {
  //   path: "/course_material/course=:course/type=:type",
  //   name: "CourseMaterial",
  //   component: CourseMaterial,
  //   meta: {
  //     header: 'course'
  //   }
  // },
  // {
  //   path: "/course_assignment/course=:course/type=:type",
  //   name: "CourseAssignment",
  //   component: CourseAssignment,
  //   meta: {
  //     header: 'course'
  //   }
  // },
  // {
  //   path: "/course_assignment/course=:course/type=:type/assignment=:id",
  //   name: "AssignmentProgress",
  //   component: AssignmentProgress,
  //   meta: {
  //     header: 'course'
  //   }
  // },
  // {
  //   path: "/course_student/course=:course/type=:type",
  //   name: "CourseStudent",
  //   component: CourseStudent,
  //   meta: {
  //     header: 'course'
  //   }
  // },
  // {
  //   path: "/course_dashboard/course=:course/type=:type",
  //   name: "CourseDashboard",
  //   component: CourseDashboard,
  //   meta: {
  //     header: 'course'
  //   }
  // },
  // {
  //   path: "/speaking_quiz/course=:course/type=:type",
  //   name: "SpeakingQuiz",
  //   component: SpeakingQuiz,
  //   meta: {
  //     header: 'course'
  //   }
  // },
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
    meta: {
      header: 'collection'
    }
  },
  {
    path: "/collection/collection=:collection",
    name: "CollectionDetail",
    component: CollectionDetail,
    meta: {
      header: 'collection'
    }
  },
  {
    path: "/collection/collection=:collection/edit",
    name: "CollectionEdit",
    component: CollectionEdit,
    meta: {
      header: 'collection'
    }
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
    meta: {
      header: 'account'
    }
  },
  {
    path: "/account/:id",
    name: "AccountDetail",
    component: AccountDetail,
    meta: {
      header: 'account'
    }
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
  mode: 'history',
  routes,
});

export default router;