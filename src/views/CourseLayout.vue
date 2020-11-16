<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <alert></alert>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <menu-left></menu-left>
        <div class="main-content">
          <!-- //利用KEY 在同Components但URL改變時重新渲染 -->
          <router-view :key="$route.params.courseid"></router-view>
        </div>
      </div>
      <!-- <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer> -->
      <lms-footer></lms-footer>
    </div>
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
//@import '../assets/css/igroup.css';
</style>