<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <menu-left></menu-left>
        <div class="main-content">
          <router-view></router-view>
        </div>
      </div>
      <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer>
    </div>
    <!-- END CONTENT WRAPPER -->
    <!-- Open material MODAL -->
  </div>
</template>
<script>
import CustomHeader from "../components/CustomHeader";
import MenuLeft from "../components/MenuLeft";
// import Menu
export default {
  name: "CourseMaterial",
  components: {
    CustomHeader,
    MenuLeft,
  },
  data() {
    return {};
  },

  computed: {},
  methods: {},
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>