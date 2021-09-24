import {
    get,
    post,
    put,
    remove
} from "../https.js";

export const ApiGetDashboard = {
    get: (courseid) => {
        return get(`/dash/crsstatus/${courseid}`)
    },
};

export const ApiDownloadReport = {
    post:(courseid,obj) => {
        console.log(`/dash/requestreport/${courseid}`,obj);
        return post(`/dash/requestreport/${courseid}`,obj)
    }
}