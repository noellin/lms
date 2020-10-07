// import axios from 'axios'
const auth = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        token: '40666888',
        isLogin: false,
        userid: '',
        username: '',
        email: '',
        permit: '',
        todayTimestamp: 0
    },
    mutations: {
        SET_AUTH(state, data) {
            state.token = data.token;
            state.isLogin = data.isLogin
            state.userid = data.userid,
                state.username = data.username,
                state.email = data.email,
                state.permit = data.permit
            state.todayTimestamp = data.todayTimestamp
        },
    },
    actions: {
        setAuth(context, data) {
            context.commit('SET_AUTH', {
                token: data.token,
                isLogin: data.isLogin,
                userid: data.userid,
                username: data.username,
                email: data.email,
                permit: data.permit,
                todayTimestamp: data.todayTimestamp
            })
        },

    },
    // getters: {
    //     List: state => state.List,
    //     count: state => state.count,
    //     number: state => state.number
    // }
}
export default auth;