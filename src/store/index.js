import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
    //引用vuex-persistedstate对state数据持久化
    plugins: [
        persistedState({
            reducer(val) {
                return {
                    token: val.token
                }
            }

            // storage: window.sessionStorage
        })
    ],
    state: {
        token: '99988',
        isLogin: false
    },
    mutations: {
        SET_AUTH(state, data) {
            state.token = data.token;
            state.isLogin = data.isLogin
            console.log('log save')
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