<template>
  <!-- <div id="app2">  20200720 SPWang 如果加入 id="app2" 會跑版-->
  <div id="app">
    <alert></alert>
    <!-- <custom-header class="col-sm-12 px-0"></custom-header> -->
    <!-- <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading> -->
    <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div> -->
    <router-view />
    <!-- <lms-footer class="col-sm-12"></lms-footer> -->
  </div>
</template>
<script>
import CustomHeader from "../src/components/CustomHeader";
import LmsFooter from "../src/components/Footer";
import Alert from "./components/AlertMessage";
import $ from "jquery";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("common/setLoading", true);
    setTimeout(() => {
      this.$store.dispatch("common/setLoading", false);
    }, 400);
    //test2
    //
    //網頁跳轉自動關閉MODAL
    // $(document).ready(function () {
    //   $("div.modal").on("show.bs.modal", function () {
    //     var modal = this;
    //     var hash = modal.id;
    //     window.location.hash = hash;
    //     window.onhashchange = function () {
    //       if (!location.hash) {
    //         $(modal).modal("hide");
    //       }
    //     };
    //   });
    //   $("div.modal").on("hidden.bs.modal", function () {
    //     var hash = this.id;
    //     history.replaceState("", document.title, window.location.href);
    //   });
    //   // when close button clicked simulate back
    //   $("div.modal button.close").on("click", function () {
    //     window.location.hash = "";
    //     // window.history.back();
    //   });
    //   // when esc pressed when modal open simulate back
    //   $("div.modal").keyup(function (e) {
    //     if (e.keyCode == 27) {
    //       window.location.hash = "";
    //       // window.history.back();
    //     }
    //   });
    // });
    //
  },
  components: {
    Alert,
    LmsFooter,
    CustomHeader,
  },
  computed: {
    // isLoading() {
    //   return this.$store.state.common.isLoading;
    // },
  },
  created() {},
  methods: {
    // doAjax() {
    //   this.isLoading = true;
    //   // simulate AJAX
    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 5000);
    // },
    // onCancel() {
    //   console.log("User cancelled the loader.");
    // },
  },
};
</script>
<style rel="preload" src="./assets/css/icons/material-design-iconic-font.min.css"></style>
<style rel="preload" src="./assets/css/vendor/bootstrap.css"></style>
<style rel="preload" src="./assets/vendor/switchery-npm/index.css"></style>
<style rel="preload" src="./assets/css/icons/line-awesome.min.css"></style>
<style rel="preload" src="./assets/css/icons/dripicons.min.css"></style>
<style rel="preload" src="./assets/css/layouts/vertical/core/main.css"></style>
<style rel="preload" src="./assets/css/layouts/vertical/menu-type/default.css"></style>
<style rel="preload" src="./assets/css/layouts/vertical/themes/theme-n.css"></style>
<style rel="preload" src="./assets/css/igroup.css"></style>
<style rel="preload" src="./assets/vendor/select2/select2.min.css"></style>
<style rel="preload" src="./assets/css/common/main.bundle.css"></style>
<style lang="scss">
// @import "./assets/css/vendor/bootstrap.css";
// @import "./assets/vendor/switchery-npm/index.css";
// @import "./assets/css/icons/line-awesome.min.css";
// @import "./assets/css/icons/dripicons.min.css";
// @import "./assets/css/icons/material-design-iconic-font.min.css";
// @import "./assets/css/layouts/vertical/core/main.css";
// @import "./assets/css/layouts/vertical/menu-type/default.css";
// @import "./assets/css/layouts/vertical/themes/theme-n.css";
// @import "./assets/css/igroup.css";
// @import "./assets/vendor/select2/select2.min.css";
// @import "./assets/css/common/main.bundle.css";
@import "./assets/styles/all.scss";
// @import "../src/assets/styles/all.scss";
</style>
