import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "../public/vendor/modernizr/modernizr.custom.js"
import "../public/vendor/jquery/dist/jquery.min.js"
import "../public/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../public/vendor/js-storage/js.storage.js"
import "../public/vendor/js-cookie/src/js.cookie.js"
import "../public/vendor/pace/pace.js"
import "../public/vendor/metismenu/dist/metisMenu.js"
import "../public/vendor/switchery-npm/index.js"
import "../public/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"
import "../public/vendor/select2/select2.min.js"
import "../public/vendor/dropzone/dropzone.js"
import "../public/js/global/app.js"
import "../public/js/components/datatables-init.js"
import "../public/js/components/select2-init.js"
import "../public/js/components/dropzone-init.js"


// <
// script src = "../src/assets/vendor/modernizr/modernizr.custom.js" > < /script> <
//   script src = "../src/assets/vendor/jquery/dist/jquery.min.js" > < /script> <
//   script src = "../src/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" > < /script> <
//   script src = "../src/assets/vendor/js-storage/js.storage.js" > < /script> <
//   script src = "../src/assets/vendor/js-cookie/src/js.cookie.js" > < /script> <
//   script src = "../src/assets/vendor/pace/pace.js" > < /script> <
//   script src = "../src/assets/vendor/metismenu/dist/metisMenu.js" > < /script> <
//   script src = "../src/assets/vendor/switchery-npm/index.js" > < /script> <
//   script src = "../src/assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js" > < /script> <
//   !-- === === === === === === PAGE LEVL VENDOR SCRIPTS === === === === === === -- >
//   <
//   script src = "../src/assets/vendor/select2/select2.min.js" > < /script> <
//   script src = "../src/src/assets/vendor/dropzone/dropzone.js" > < /script> <
//   !-- === === === === === === GLOBAL APP SCRIPTS === === === === === === -- >
//   <
//   script src = "../src/assets/js/global/app.js" > < /script> <
//   script src = "../src/src/assets/js/components/datatables-init.js" > < /script> <
//   script src = "../src/assets/js/components/select2-init.js" > < /script> <
//   script src = "../src/assets/js/components/dropzone-init.js" > < /script>
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


// // Install BootstrapVue
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')