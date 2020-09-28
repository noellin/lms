import {
    get,
    post,
    put,
    remove
} from "../https.js";


//CourseList相關 api

export const ApiGetCourseDatail = {
    get: (paramObj) => {

        return get(`/course/detail/${paramObj}`);
    },
};