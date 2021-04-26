import Vue from "vue";
import Router from "vue-router";
// import CourseList from "../views/CourseList";
// import CourseMaterial from "../views/CourseMaterial.vue";
// import CourseAssignment from "../views/CourseAssignment.vue";
// import AssignmentProgress from "../views/AssignmentProgress.vue";
// import CourseDashboard from "../views/CourseDashboard.vue";
// import CourseStudent from "../views/CourseStudent.vue";
// import Login from "../views/Login.vue";
// import Account from "../views/Account.vue";
// import AccountDetail from "../views/AccountDetail.vue";
// import SpeakingQuiz from "../views/SpeakingQuiz.vue";
// import QuizCreate from "../views/SpeakingQuitCreate.vue";
// import Collection from "../views/Collection.vue";
// import CollectionCreate from "../views/CollectionCreate.vue";
// import CollectionDetail from "../views/CollectionDetail.vue";
// import CollectionEdit from "../views/CollectionEdit.vue";
// import ErrorPage from "../views/error.vue";
// import Layout from "../views/CourseLayout.vue";
// import WeeklyList from '../views/WeeklyList.vue';
// import WeeklyProgress from '../views/WeeklyProgress.vue';
// import WeeklyCreate from '../views/WeeklyCreate.vue';

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes : [{
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "Login",
    component:resolve => require(['@/views/Login'], resolve),
    meta: {
      status: "login",
    },
  },
  {
    path: "/resetpassword/id=:id/email=:email",
    name: "ResetPassword",
    component: resolve => require(['@/views/Login'], resolve),
    meta: {
      status: "reset",
    },
  },
  {
    path: "/course",
    name: "Course",
    component: resolve => require(['@/views/CourseList'], resolve),
    meta: {
      header: "course",
    },
  },
  {
    path: "/browse",
    name: "Layout",
    component: resolve => require(['@/views/CourseLayout'], resolve),
    meta: {
      header: "course",
    },
    children: [
      {
        path: "/course_material/course=:course/type=:type/:courseid",
        name: "Library",
        component: resolve => require(['@/views/CourseMaterial'], resolve),
        meta: {
          header: "course",
          backtag: false,
        },
      },
      {
        path: "/course_assignment/course=:course/type=:type/:courseid",
        name: "Assignments",
        component: resolve => require(['@/views/CourseAssignment'], resolve),
        meta: {
          header: "course",
          backtag: false,
        },
      },
      {
        path: "/course_assignment/create/course=:course/type=:type/:courseid",
        name: "Assignment_Create",
        component: resolve => require(['@/views/AssignmentCreate.vue'], resolve),
        meta: {
          header: "course",
          backtag: true,
        },
      },
      {
        path: "/check_assignment/course=:course/type=:type/:courseid/:aid",
        name: "Assignment_Progress",
        component: resolve => require(['@/views/AssignmentProgress'], resolve),
        meta: {
          header: "course",
          backtag: true,
        },
      },
      {
        path: "/course_student/course=:course/type=:type/:courseid",
        name: "Student_Roster",
        component:resolve => require(['@/views/CourseStudent'], resolve) ,
        meta: {
          header: "course",
        },
      },
      {
        path: "/course_dashboard/course=:course/type=:type/:courseid",
        name: "Dashboard",
        component: resolve => require(['@/views/CourseDashboard'], resolve),
        meta: {
          header: "course",
        },
      },
      {
        path: "/quiz/:course/:type/:rname/:mname/:courseid/:note/:rid/:mid",
        name: "Speaking_task",
        component: resolve => require(['@/views/SpeakingQuiz'], resolve),
        meta: {
          header: "course",
        },
      },
      {
        path: "/quizcreate/:course/:type/:rname/:mname/:courseid/:note/:rid/:mid",
        name: "Quiz_Create",
        component: resolve => require(['@/views/SpeakingQuitCreate'], resolve),
        meta: {
          header: "course",
          backtag: true,
        },
      },
      {
        path: "/course_weekly_quiz/course=:course/type=:type/:courseid",
        name: "Echo_Valley_Quiz",
        component: resolve => require(['@/views/WeeklyList'], resolve),
        meta: {
          header: "course",
        },
      },
      {
        path: "/course_weekly_quiz/create/course=:course/type=:type/:courseid",
        name: "Create_Echo_Valley_Oral_Quiz",
        component: resolve => require(['@/views/WeeklyCreate'], resolve),
        meta: {
          header: "course",
          backtag: true,
        },
      },
      {
        path: "/course_weekly_quiz/progress/course=:course/type=:type/:courseid/:echoid",
        name: "Echo_Valley_Quiz_Progress",
        component: resolve => require(['@/views/WeeklyProgress'], resolve),
        meta: {
          header: "course",
          backtag: true,
        },
      },

      // expired
      {
        path: "/course_material/course=:course/type=:type/:courseid/:expired",
        name: "Expired_Library",
        component: resolve => require(['@/views/CourseMaterial'], resolve),
        meta: {
          header: "course",
          backtag: false,
        },
      },
      {
        path: "/course_assignment/course=:course/type=:type/:courseid/:expired",
        name: "Expired_Assignments",
        component: resolve => require(['@/views/CourseAssignment'], resolve),
        meta: {
          header: "course",
          backtag: false,
        },
      },
      // {
      //   path: "/course_assignment/create/course=:course/type=:type/:courseid",
      //   name: "Assignment_Create",
      //   component: resolve => require(['@/views/AssignmentCreate.vue'], resolve),
      //   meta: {
      //     header: "course",
      //     backtag: true,
      //   },
      // },
      {
        path: "/check_assignment/course=:course/type=:type/:courseid/:aid/:expired",
        name: "Expired_Assignment_Progress",
        component: resolve => require(['@/views/AssignmentProgress'], resolve),
        meta: {
          header: "course",
          backtag: true,
        },
      },
      {
        path: "/course_student/course=:course/type=:type/:courseid/:expired",
        name: "Expired_Student_Roster",
        component:resolve => require(['@/views/CourseStudent'], resolve) ,
        meta: {
          header: "course",
        },
      },
      {
        path: "/course_dashboard/course=:course/type=:type/:courseid/:expired",
        name: "Expired_Dashboard",
        component: resolve => require(['@/views/CourseDashboard'], resolve),
        meta: {
          header: "course",
        },
      },
      // {
      //   path: "/quiz/:course/:type/:rname/:mname/:courseid/:note/:rid/:mid",
      //   name: "Speaking_task",
      //   component: resolve => require(['@/views/SpeakingQuiz'], resolve),
      //   meta: {
      //     header: "course",
      //   },
      // },
      // {
      //   path: "/quizcreate/:course/:type/:rname/:mname/:courseid/:note/:rid/:mid",
      //   name: "Quiz_Create",
      //   component: resolve => require(['@/views/SpeakingQuitCreate'], resolve),
      //   meta: {
      //     header: "course",
      //     backtag: true,
      //   },
      // },
      {
        path: "/course_weekly_quiz/course=:course/type=:type/:courseid/:expired",
        name: "Expired_Echo_Valley_Quiz",
        component: resolve => require(['@/views/WeeklyList'], resolve),
        meta: {
          header: "course",
        },
      },
      // {
      //   path: "/course_weekly_quiz/create/course=:course/type=:type/:courseid",
      //   name: "Create_Echo_Valley_Oral_Quiz",
      //   component: resolve => require(['@/views/WeeklyCreate'], resolve),
      //   meta: {
      //     header: "course",
      //     backtag: true,
      //   },
      // },
      {
        path: "/course_weekly_quiz/progress/course=:course/type=:type/:courseid/:echoid/:expired",
        name: "Expired_Echo_Valley_Quiz_Progress",
        component: resolve => require(['@/views/WeeklyProgress'], resolve),
        meta: {
          header: "course",
          backtag: true,
        },
      }
    ],
  },
// OTHER
  {
    path: "/collection",
    name: "Collection",
    component: resolve => require(['@/views/Collection'], resolve),
    meta: {
      header: "collection",
    },
  },
  {
    path: "/collection/create/",
    name: "CollectionCreate",
    component: resolve => require(['@/views/CollectionCreate'], resolve),
    meta: {
      header: "collection",
    },
  },
  {
    path: "/collection/create/:pkgid",
    name: "CollectionCreateByID",
    component: resolve => require(['@/views/CollectionCreate'], resolve),
    meta: {
      header: "collection",
    },
  },
  {
    path: "/collection/:pid/:cname/:cid",
    name: "CollectionDetail",
    component: resolve => require(['@/views/CollectionDetail'], resolve),
    meta: {
      header: "collection",
    },
  },
  {
    path: "/collection/edit/:pid/:cname/:cid/",
    name: "CollectionEdit",
    component: resolve => require(['@/views/CollectionEdit'], resolve),
    meta: {
      header: "collection",
    },
  },
  {
    path: "/account",
    name: "Account",
    component: resolve => require(['@/views/Account'], resolve),
    meta: {
      header: "account",
    },
  },
  {
    path: "/account/:uid",
    name: "AccountDetail",
    component: resolve => require(['@/views/AccountDetail'], resolve),
    meta: {
      header: "account",
    },
  },
  {
    path: "/404",
    name: "404",
    component: resolve => require(['@/views/error.vue'], resolve),
  },

]
})



export default router;