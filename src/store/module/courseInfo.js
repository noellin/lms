// import axios from 'axios'
import {
    ApiGetCourseDatail
} from "../../http/apis/CourseDetail"
const courseInfo = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        courseInfo: {},
        textbookList: [],
        tempAList: [],
        tempAIDList: []
    },
    mutations: {
        SET_COURSEINFO(state, data) {

            state.courseInfo = data
        },
        SET_TEXTBOOKLIST(state, data) {
            state.textbookList = data
        },
        SET_ASSIGNMENT(state, data) {
            // state.tempAIDList = []
            // state.tempAList = []
            if (state.tempAIDList.indexOf(data.id) === -1) {
                state.tempAList.push(data.assignment)
                state.tempAIDList.push(data.id)
            }


        },
        REMOVE_ASSIGNMENT(state, data) {
            if (state.tempAIDList.indexOf(data.id) !== -1) {
                let index = state.tempAIDList.indexOf(data.id)
                state.tempAIDList.splice(index, 1)
                state.tempAList.splice(index, 1)
            }

        }
    },
    actions: {
        getCouseInfo(context, data) {

            ApiGetCourseDatail.get(data).then((response) => {
                context.commit('SET_COURSEINFO', response.csrInfo)
                context.commit('SET_TEXTBOOKLIST', response.record)
            });
        },
        setAssignment(context, data) {
            context.commit('SET_ASSIGNMENT', data)
        },
        removeAssignment(context, data) {
            context.commit('REMOVE_ASSIGNMENT', data)
        }

    },
    // getters: {
    //     List: state => state.List,
    //     count: state => state.count,
    //     number: state => state.number
    // }
}
export default courseInfo;