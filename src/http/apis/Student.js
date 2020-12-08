import {
    get,
    post,
    put,
    remove,
    fetchget
} from "../https.js";


export const ApiImportStudent = {
    post: (courseid, paramObj) => {
        return post(`/stu/importfromfile/${courseid}`, paramObj)
    }
};

export const ApiGetStudentList = {
    get: (courseid, keyword) => {
        return get(`/stu/list/${courseid}`)
    }
};

export const ApiSearchStudent = {
    get: (courseid, keyword) => {
        return get(`/stu/search/${courseid}/${keyword}`)
    }
};


export const ApiAddStudent = {
    post: (courseid, paramObj) => {
        return post(`/stu/adduser/${courseid}`, paramObj)
    }
};

export const ApiGetStudentInfo = {
    get: (courseid) => {
        return get(`/stu/listbrief/${courseid}`)
    }
}

export const ApiModifyStudent = {
    post: (courseid, sid, paramObj) => {
        return post(`/stu/modify/${courseid}/${sid}`, paramObj)
    }
};

export const ApiResetPWD = {
    post: (sid, paramObj) => {
        return post(`/stu/resetimgpw/${sid}`, paramObj)
    }
};

export const ApiDownloadSample = {
    get: (paramObj) => {
        return get(`/stu/importsample`, paramObj)
    }
};

export const ApiExportSList = {
    get: (courseid) => {
        return get(`/stu/export/${courseid}`)
    }
};
export const ApiCopySList = {
    get: (srcCourseid, courseid) => {
        return get(`/stu/copylist/${srcCourseid}/${courseid}`)
    }
};
export const ApiDeleteStudent = {
    get: (sid) => {
        return get(`/stu/delete/${sid}`)
    }
}