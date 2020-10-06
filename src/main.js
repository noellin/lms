import Vue from "vue";
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/index.js";
import {
  ValidationProvider,
  extend
} from "vee-validate";
import {
  required
} from "vee-validate/dist/rules";
import Vuex from "vuex";
import "bootstrap";
import Select2 from "v-select2-component";
import axios from "axios";
import VueAxios from "vue-axios";
import "@/utils/mixins";
import expiredDate from "./filter/ExpiredDate";
import Loading from "vue-loading-overlay"; //component
import "vue-loading-overlay/dist/vue-loading.css"; //style

Vue.component('Loading', Loading)
Vue.use(Loading, {
  color: 'red'
})
Vue.use(VueAxios, axios);
Vue.component("Select2", Select2);
Vue.use(Vuex);
Vue.filter("dateConversion", expiredDate);
extend("required", {
  ...required,
  message: "This field is required",
});
Vue.config.productionTip = false;
(Vue.prototype.$back = function (distance) {
  if (window.history.length <= 1) {
    router.push({
      path: "/",
    });
    return false
  } else {
    router.go(-1);
  }

}),
(Vue.prototype.$bus = new Vue());
new Vue({
  router,
  store,
  components: {
    ValidationProvider,
  },
  data: () => ({
    value: "",
  }),
  render: function (h) {
    return h(App);
  },
}).$mount("#vueapp");