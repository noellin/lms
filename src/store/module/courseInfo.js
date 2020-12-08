// import axios from 'axios'
import {
    ApiGetCourseDatail
} from "../../http/apis/CourseDetail"
import {
    ApiGetStudentList
} from '../../http/apis/Student';
import Vue from 'vue';

const courseInfo = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        courseInfo: {},
        textbookList: [],
        openedTextbookList: [],
        studentList: [],
        courseStudentInfo: {},
        forSelectStudentList: [],
        tempAList: {},
        tempAIDList: {},
        courseid: '',
        caList: [],
        caidList: [],
        aKeyList: [],
        assignmentDL: {},

    },
    mutations: {
        SET_COURSEINFO(state, data) {
            state.courseInfo = data
            state.courseid = data.courseid

            if (state.aKeyList.includes(data.courseid) === false) {
                //初始 course KEY
                Vue.set(state.tempAIDList, data.courseid, []);
                Vue.set(state.tempAList, data.courseid, []);
                state.aKeyList.push(data.courseid)
            }
            //由於無法監聽object變化
            //額外拷貝一個陣列
            state.caList = [...state.tempAList[data.courseid]]
            state.caidList = [...state.tempAIDList[data.courseid]]
        },
        SET_TEXTBOOKLIST(state, data) {
            state.openedTextbookList = []
            state.textbookList = data
            data.forEach(item => {

                if (item.openflag === 'true') {
                    state.openedTextbookList.push(item.colid.toString() + '_' + item.resourceid.toString())
                }
            })
        },
        SET_STUDENT(state, data) {
            state.studentList = []
            state.studentList = data.record
            state.forSelectStudentList = []
            state.forSelectStudentList = data.record.map((o) => {
                return {
                    id: o.stuid,
                    text: o.username
                };
            });
            //上方資訊列
            state.courseStudentInfo = Object.assign({}, data.info);

        },
        SET_ASSIGNMENT(state, data) {
            // state.tempAIDList = []
            // state.tempAList = []

            if (state.tempAIDList[state.courseid].includes(data.id) === false) {
                let tempa = [...state.tempAList[state.courseid]]
                tempa.push(data.assignment)
                Vue.set(state.tempAList, state.courseid, tempa);

                let tempaid = [...state.tempAIDList[state.courseid]]
                tempaid.push(data.id)
                Vue.set(state.tempAIDList, state.courseid, tempaid);

                //額外拷貝
                state.caList.push(data.assignment)
                state.caidList.push(data.id)
            }

        },
        REMOVE_ASSIGNMENT(state, data) {
            if (state.tempAIDList[state.courseid].indexOf(data.id) !== -1) {

                let index = state.tempAIDList[state.courseid].indexOf(data.id)
                state.tempAIDList[state.courseid].splice(index, 1)
                state.tempAList[state.courseid].splice(index, 1)
                state.caList.splice(index, 1)
                state.caidList.splice(index, 1)
            }

        },
        CLEAR_ALL_ASSIGNMENT(state) {
            state.tempAIDList = {}
            state.tempAList = {}
            state.aKeyList = []
        },
        CLERAR_COURSE_TEMP_ASSIGNMENT(state, courseid) {
            state.aKeyList.splice(state.aKeyList.indexOf(courseid), 1)
        },
        SET_ASSIGNMENT_TIME(state, data) {
            state.assignmentDL = data
        }
    },
    actions: {
        setAssignmentTime(context, data) {
            context.commit('SET_ASSIGNMENT_TIME', data)
        },
        getCouseInfo(context, data) {
            //courseInfo Material
            ApiGetCourseDatail.get(data).then((response) => {
                context.commit('SET_COURSEINFO', response.csrInfo)
                context.commit('SET_TEXTBOOKLIST', response.record)
            });
            //student
            ApiGetStudentList.get(data)
                .then((response) => {
                    context.commit('SET_STUDENT', response)
                })
                .catch((err) => {});

        },
        updateTextbookList(context, data) {
            ApiGetCourseDatail.get(data).then((response) => {
                context.commit('SET_COURSEINFO', response.csrInfo)
                context.commit('SET_TEXTBOOKLIST', response.record)
            });
        },
        updateStudent(context, data) {
            ApiGetStudentList.get(data)
                .then((response) => {
                    context.commit('SET_STUDENT', response)
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
        },
        clearCourseTempAssignment(context, courseid) {
            context.commit('CLERAR_COURSE_TEMP_ASSIGNMENT', courseid)
        }

    },
    // getters: {
    //     List: state => state.List,
    //     count: state => state.count,
    //     number: state => state.number
    // }
}
export default courseInfo;