import {
    get,
    post,
    put,
    remove,
    getPromiseAll
} from "../https.js";


//CourseList相關 api

export const ApiGetCourseDatail = {
    get: (paramObj) => {
        console.log(paramObj);
        return get(`/course/detail/${paramObj}`);
    },
};

export const ApiSearchCourseResource = {
    post: (courseid, paramObj) => {
        return post(`/course/detail/search/${courseid}`, paramObj)
    }
};

export const ApiGetStudentList = {
    get: (courseid) => {
        return get(`/course/studentlist/${courseid}`)
    }
};

export const ApiGetVideoMaterial = {
    get: (colid, courseid, rid) => {
        console.log(`/course/getvideomaterial/${colid}/${courseid}/${rid}`);
        return get(`/course/getvideomaterial/${colid}/${courseid}/${rid}`)
    }
}

export const ApiSetAssignment = {
    post: (courseid, paramObj) => {
        return post(`/course/asgmt/set/${courseid}`, paramObj)
    }
};

export const ApiGetOpenResource = {
    get: (colid, courseid, rid, status) => {
        console.log(`/course/openresource/${colid}/${courseid}/${rid}/${status}`);
        return get(`/course/openresource/${colid}/${courseid}/${rid}/${status}`)
    },
    getAll: (urlArray) => {
        return getPromiseAll(urlArray)
    }
};

export const ApiPostMultiOpenSetting = {
    post: (colid, courseid, ridObj, status) => {
        console.log(`/course/openresourcelist/${colid}/${courseid}/${status}`,ridObj);
        return post(`/course/openresourcelist/${colid}/${courseid}/${status}`,ridObj)
    }

}