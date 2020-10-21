// import axios from 'axios'
import {
    ApiGetCourseDatail
} from "../../http/apis/CourseDetail"
import {
    ApiGetStudentList
} from '../../http/apis/Student';
const courseInfo = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        courseInfo: {},
        textbookList: [],
        studentList: [],
        forSelectStudentList: [],
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
        SET_STUDENT(state, data) {
            state.studentList = data

            state.forSelectStudentList = data.map((o) => {
                return {
                    id: o.stuid,
                    text: o.username
                };
            });
            //為了select寫的現在沒有用
            // let allS = {
            //     id: "*",
            //     text: "All Students"
            // };
            // state.forSelectStudentList.unshift(allS);
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

        },
        CLEAR_ALL_ASSIGNMENT(state) {
            state.tempAIDList = []
            state.tempAList = []
        }
    },
    actions: {
        getCouseInfo(context, data) {
            //courseInfo Material
            ApiGetCourseDatail.get(data).then((response) => {
                context.commit('SET_COURSEINFO', response.csrInfo)
                context.commit('SET_TEXTBOOKLIST', response.record)
            });
            //student
            ApiGetStudentList.get(data)
                .then((response) => {
                    context.commit('SET_STUDENT', response.record)
                })
                .catch((err) => {});

        },
        updateStudent(context, data) {
            ApiGetStudentList.get(data)
                .then((response) => {
                    context.commit('SET_STUDENT', response.record)
                })
                .catch((err) => {});
        },
        setAssignment(context, data) {
            context.commit('SET_ASSIGNMENT', data)
        },
        removeAssignment(context, data) {
            context.commit('REMOVE_ASSIGNMENT', data)
        },
        clearAllAssignment(context) {
            context.commit('CLEAR_ALL_ASSIGNMENT')
        }

    },
    // getters: {
    //     List: state => state.List,
    //     count: state => state.count,
    //     number: state => state.number
    // }
}
export default courseInfo;