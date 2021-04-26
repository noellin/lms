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
        todayTimestamp: 0,
        image:'',
        image_big:'',
        image_small:'',
        currentsLang:navigator.language
    },
    mutations: {
        SET_LANG(state, data){
            // this.$i18n.locale = data
            state.currentsLang = data
        },
        SET_AUTH(state, data) {
            state.token = data.token;
            state.isLogin = data.isLogin
            state.userid = data.userid,
                state.username = data.username,
                state.email = data.email,
                state.permit = data.permit,
            state.todayTimestamp = data.todayTimestamp
            if(data.image==='1'){
                state.image_big = "teacher_men"
                state.image_small="teacher_men_40"
            }else{
                state.image_big = "teacher_women"
                state.image_small="teacher_women_40"
            };
            state.image = data.image;
        },
        SET_USERINFO(state, data){
            state.username = data.username
            state.email = data.email
        },
        SET_IMG(state, data){
            if(data==='1'){
                state.image_big = "teacher_men"
                state.image_small="teacher_men_40"
            }else{
                state.image_big = "teacher_women"
                state.image_small="teacher_women_40"
            };
            state.image = data
        }
    },
    actions: {
        setLang(context, data){
            context.commit('SET_LANG', data)
        },
        setAuth(context, data) {
            context.commit('SET_AUTH', {
                token: data.token,
                isLogin: data.isLogin,
                userid: data.userid,
                username: data.username,
                email: data.email,
                permit: data.permit,
                todayTimestamp: data.todayTimestamp,
                image : data.image
            })
        },
        updateUserInfo(context,userinfo){
            context.commit('SET_USERINFO',userinfo)
        },
        setImg(context,imgNumber){
            context.commit('SET_IMG',imgNumber)
        }

    },
    // getters: {
    //     List: state => state.List,
    //     count: state => state.count,
    //     number: state => state.number
    // }
}
export default auth;