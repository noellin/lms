import Vue from "vue";
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Install BootstrapVue
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
extend("required", {
  ...required,
  message: "This field is required",
});
Vue.config.productionTip = false;

new Vue({
  router,
  components: {
    ValidationProvider,
  },
  data: () => ({
    value: "",
  }),
  render: function(h) {
    return h(App);
  },
}).$mount("#vueapp");
