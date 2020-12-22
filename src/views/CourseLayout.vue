<template>
  <div class="row col-sm-12 px-0 mx-0">
    <!-- END MENU SIDEBAR WRAPPER -->
    <!-- <div class="content-wrapper layout-wrapper"> -->
    <!-- TOP TOOLBAR WRAPPER -->
    <custom-header class="col-sm-12 px-0"></custom-header>
    <alert></alert>
    <!-- END TOP TOOLBAR WRAPPER -->
    <!-- class="content page-aside-left" -->
    <div class="col-sm-12 mx-auto p-0 d-flex">
      <menu-left class="col-sm-2 bg-white sidebar"></menu-left>

      <!-- //利用KEY 在同Components但URL改變時重新渲染 -->
      <div class="col-sm-10 cusmain px-0">
        <router-view :key="$route.params.courseid"></router-view>
      </div>
    </div>
    <lms-footer class="col-sm-12"></lms-footer>
    <!-- <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer> -->
    <!-- </div> -->
    <!-- <lms-footer></lms-footer> -->
    <!-- END CONTENT WRAPPER -->
    <!-- Open material MODAL -->
  </div>
</template>
<script>
import CustomHeader from "../components/CustomHeader";
import MenuLeft from "../components/MenuLeft";
import Alert from "../components/AlertMessage";
import LmsFooter from "../components/Footer";
// import Menu
export default {
  name: "CourseMaterial",
  components: {
    CustomHeader,
    MenuLeft,
    Alert,
    LmsFooter,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.sidebar {
  flex-grow: 0;
}
.cusmain {
  flex-grow: 1;
}
//@import '../assets/css/igroup.css';
</style>