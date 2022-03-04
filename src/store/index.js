import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from "vuex-persistedstate"
import auth from "./module/auth"
import common from "./module/common"
import courseInfo from "./module/courseInfo"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        common,
        courseInfo
    },
    //引用vuex-persistedstate对state数据持久化
    plugins: [
        persistedState({
            paths: ["auth", "courseInfo","common"]
            // reducer(val) {
            //     return {
            //         token: val.token
            //     }
            // }
        })
    ],

})