// import axios from 'axios'
const auth = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        token: '99988',
        isLogin: false,
        userid: ''
    },
    mutations: {
        SET_AUTH(state, data) {
            console.log(data.userid)
            state.token = data.token;
            state.isLogin = data.isLogin
            state.userid = data.userid

        },
    },
    actions: {
        setAuth(context, data) {
            context.commit('SET_AUTH', {
                token: data.token,
                isLogin: data.isLogin,
                userid: data.userid
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