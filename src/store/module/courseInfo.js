// import axios from 'axios'
import {
    ApiGetCourseDatail
} from "../../http/apis/CourseDetail"
const courseInfo = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        courseInfo: {},
        textbookList: []
    },
    mutations: {
        SET_COURSEINFO(state, data) {
            state.courseInfo = data
        },
        SET_TEXTBOOKLIST(state, data) {
            console.log(data)
            state.textbookList = data
        }
    },
    actions: {
        getCouseInfo(context, data) {
            ApiGetCourseDatail.get(data).then((response) => {
                context.commit('SET_COURSEINFO', response.csrInfo)
                context.commit('SET_TEXTBOOKLIST', response.record)
            });
        },

    },
    // getters: {
    //     List: state => state.List,
    //     count: state => state.count,
    //     number: state => state.number
    // }
}
export default courseInfo;