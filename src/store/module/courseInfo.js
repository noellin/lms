// import axios from 'axios'
import {
    ApiGetCourseDatail
} from "../../http/apis/CourseDetail"
import {
    ApiGetStudentList
} from '../../http/apis/Student';
import Vue from 'vue';
import { setInteractionMode } from "vee-validate";

const courseInfo = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        courseInfo: {},
        textbookList: [],
        courseOverview:[],
        openedTextbookList: [],
        studentList: [],
        courseStudentInfo: {},
        forSelectStudentList: [],
        tempAList: {},
        tempAIDList: {},
        courseid: '',
        colid:'',
        caList: [],
        caidList: [],
        aKeyList: [],
        assignmentDL: {},
        weeklyQuizDL:{},
        openAgt:false,
        ActiveClassList:[],
        ExpiredClassList:[]

    },
    mutations: {
        SET_CLASS(state, data){
       
            if(data.status==='active'){
                state.ActiveClassList = data.class
          
            }else{
                state.ExpiredClassList = data.class
              
            }
        },
        SET_OPENAGT(state, data){
            state.openAgt = data
        },
        SET_COURSEINFO(state, data) {
            console.log('course info =', data); 
            state.courseInfo = data
            state.courseid = data.courseid
            state.colid = data.colid

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

            data.forEach(element => {
                if(element.unit===undefined){
                    element.unit = ''
                }
                element.link = element.information.includes('http')

 
            });
            state.openedTextbookList = []
            state.textbookList = data
            data.forEach(item => {

                if (item.openflag === 'true') {
                    state.openedTextbookList.push(item.colid.toString() + '_' + item.resourceid.toString())
                }
            })
        },
        SET_COURSEOVERVIEW(state, data){
            console.log(data);
         state.courseOverview  = data 
        },
        SET_STUDENT(state, data) {
            console.log("student Info");
            console.log(data);
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
            console.log(data);
            if (state.tempAIDList[state.courseid].includes(data.id) === false) {
                let tempa = [...state.tempAList[state.courseid]]
                tempa.push(data.assignment)
                Vue.set(state.tempAList, state.courseid, tempa);

                let tempaid = [...state.tempAIDList[state.courseid]]
                tempaid.push(data.id)
                Vue.set(state.tempAIDList, state.courseid, tempaid);

                //額外拷貝 先忽略
                state.caList.push(data.assignment)
                state.caidList.push(data.id)
            }

        },
        REMOVE_ASSIGNMENT(state, data) {
            console.log(data.id);
            console.log(state.tempAIDList);
            if (state.tempAIDList[state.courseid].indexOf(data.id) !== -1) {
                console.log('delete');

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
        }, 
        SET_WQ_TIME(state, data) {
            state.weeklyQuizDL = data
        }
    },
    actions: {
        
        setClass(context, data){
            context.commit('SET_CLASS', data)
        },
        setOpenAgt(context, data){
            context.commit('SET_OPENAGT', data)
        },
        setWQTime(context, data) {
            context.commit('SET_WQ_TIME', data)
        },
        setAssignmentTime(context, data) {
            context.commit('SET_ASSIGNMENT_TIME', data)
        },
        getCouseInfo(context, data) {
            //courseInfo Material
            ApiGetCourseDatail.get(data).then((response) => {
                context.commit('SET_COURSEINFO', response.csrInfo)
                context.commit('SET_TEXTBOOKLIST', response.record)
                context.commit('SET_COURSEOVERVIEW',response.courseOverview.record)
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
                context.commit('SET_COURSEOVERVIEW',response.courseOverview.record)
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