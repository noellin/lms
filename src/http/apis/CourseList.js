import {
    get,
    post,
    put,
    remove
} from "../https.js";


//CourseList相關 api

export const ApiGetActiveCourseList = {
    get: (permit, userid, paramObj) => {
        if (permit === "admin") {
            if (paramObj === undefined || paramObj === '') {
                return get(`/course/list/active/${userid}`);
            }
            return get(`/course/list/active/${userid}?filter=${paramObj}`);
        }
        return get(`/course/list/active/${paramObj}`);
    },
};
export const ApiGetExpiredCourseList = {
    get: (permit, userid, paramObj) => {
        if (permit === "admin") {
            if (paramObj === undefined || paramObj === '') {
                return get(`/course/list/expired/${userid}`);
            }
            return get(`/course/list/expired/${userid}?filter=${paramObj}`);
        } else {
            return get(`/course/list/expired/${paramObj}`);
        }
    },
};
export const ApiGetTeacherList = {
    get: () => {
        return get(`/course/teacherlist`);
    },
};

export const ApiSearchCourse = {

    post: (id, paramObj) => {
        return post(`/course/search/${id}`, paramObj);
    },
};

export const ApiSetCourse = {
    put: (id, paramObj) => {
        return put(`/course/setinfo/${id}`, paramObj);
    },
};