import {
    get,
    post,
    put,
    remove
} from "../https.js";

export const ApiGetAssignmentList = {
    get: (uid, cid) => {
        return get(`/asgmt/getlist/`)
    }
};