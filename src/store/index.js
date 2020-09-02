import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
    //引用vuex-persistedstate对state数据持久化
    plugins: [
        persistedState({
            storage: window.sessionStorage
        })
    ],
    state: {
        token: '',
        isLogin: false
    },
    mutations: {
        SET_AUTH(state, data) {
            state.token = data.token;
            state.isLogin = data.isLogin
        }
    },
    actions: {
        setAuth(context, data) {
            context.commit('SET_AUTH', {
                token: data.token,
                isLogin: data.isLogin
            })
        }
    },
})