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
// import VCharts from "v-charts";
import Print from "./plugins/print/print";
// import jQuery from "jquery/dist/jquery.slim";
import VueLazyload from 'vue-lazyload'
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "en-US", // 語言標識
  //this.$i18n.locale // 通過切換locale的值來實現語言切換

  messages: {
    "zh-TW": require("../src/lang/zh-tw"), // 繁體中文語言包

    "ja-JP": require("../src/lang/ja-JP"), // JP

    "en-US": require("../src/lang/en.json"), // 英文語言包

    "th-TH":require("../src/lang/th-TH.json"), // 泰文語言包
    'ko-KR': require('../src/lang/ko-KR.json'), //韓
  },
});
// console.log(store.state.commom)
if(localStorage.getItem('lang')!==undefined && localStorage.getItem('lang')!==null){
  i18n.locale = localStorage.getItem('lang')
  store.dispatch("auth/setLang", localStorage.getItem('lang'));
}else if(navigator.language==='en-US' 
|| navigator.language==='ja-JP'
|| navigator.language==='th-TH'||
navigator.language === 'ko-KR'){

  i18n.locale = navigator.language
  store.dispatch("auth/setLang", navigator.language);
}else{
  i18n.locale = "en-US"
  store.dispatch("auth/setLang", "en-US");
}

// LOGO
if (process.env.VUE_APP_LOGO !== undefined) {
  store.dispatch('common/setLOGO', `https://${process.env.VUE_APP_LOGO}.mangosteems.com/ores/getinslogo`)
} else {
  // store.dispatch('common/setLOGO', `https://honeybearkids.mangosteems.com/ores/getinslogo`)
  store.dispatch('common/setLOGO', `https://app.mangosteems.com/ores/getinslogo`)
}

const loadimage = require('./assets/img/images/Spinner-1s-200px (1).svg')
const errorimage = require('./assets/img/images/cross-1.1s-200px.png')
Vue.use(VueLazyload ,{
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
})

// global.jQuery = jQuery;
// global.$ = jQuery;

Vue.use(Print);
Vue.component("Loading", Loading);
// Vue.use(VCharts);
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
  i18n,
  
  data: () => ({
    value: "",
  }),
  
  mounted() {
    
  },
  
  render: function (h) {
    return h(App);
  },
}).$mount("#vueApp");