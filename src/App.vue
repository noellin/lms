<template>
  <!-- <div id="app">  20200720 SPWang 如果加入 id="app" 會跑版-->
  <div id="vueapp">
    <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/css/vendor/bootstrap.css";
@import "./assets/vendor/switchery-npm/index.css";
@import "./assets/css/icons/line-awesome.min.css";
@import "./assets/css/icons/dripicons.min.css";
@import "./assets/css/icons/material-design-iconic-font.min.css";

@import "./assets/css/layouts/vertical/core/main.css";
@import "./assets/css/layouts/vertical/menu-type/default.css";
@import "./assets/css/layouts/vertical/themes/theme-n.css";
@import "./assets/css/igroup.css";
@import "./assets/vendor/select2/select2.min.css";
@import "./assets/css/common/main.bundle.css";
@import "./assets/styles/all.scss";
// @import "../src/assets/styles/all.scss";
</style>
