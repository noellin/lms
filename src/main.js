import Vue from "vue";
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/index.js";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from "vee-validate";
// import {
//   required
// } from "vee-validate/dist/rules";
import * as rules from "vee-validate/dist/rules";
import Vuex from "vuex";
import "bootstrap";
import Select2 from "v-select2-component";
import axios from "axios";
import VueAxios from "vue-axios";
import "@/utils/mixins";
import expiredDate from "./filter/ExpiredDate";
import arrayToString from "./filter/arrayToString";
import Loading from "vue-loading-overlay"; //component
import "vue-loading-overlay/dist/vue-loading.css"; //style
import VCharts from "v-charts";
import Print from "./plugins/print/print";
// import jQuery from "jquery/dist/jquery.slim";
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
// global.jQuery = jQuery;
// global.$ = jQuery;

Vue.use(Print);
Vue.component("Loading", Loading);
Vue.use(VCharts);
//輸入驗證
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

// Vue.directive('tooltip', function(el, binding){
//   $(el).tooltip({
//            title: binding.value,
//            placement: binding.arg,
//            trigger: 'hover'             
//        })
// })
// extend("required", {
//   ...required,
//   message: "This field is required",
// });
//輸入驗證 END

Vue.use(Loading, {
  color: "red",
});
Vue.use(VueAxios, axios);
Vue.component("Select2", Select2);
Vue.use(Vuex);
Vue.filter("dateConversion", expiredDate);
Vue.filter("arrayToString", arrayToString);

Vue.config.productionTip = false;
(Vue.prototype.$back = function (distance) {
  if (window.history.length <= 1) {
    router.push({
      path: "/",
    });
    return false;
  } else {
    router.go(-1);
  }
}),

(Vue.prototype.$bus = new Vue());
new Vue({
  router,
  store,
  // components: {
  //   ValidationProvider,
  // },
  data: () => ({
    value: "",
  }),
  mounted() {
    
  },
  
  render: function (h) {
    return h(App);
  },
}).$mount("#app");