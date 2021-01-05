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
