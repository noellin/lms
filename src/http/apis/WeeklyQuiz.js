import {
    get,
    post,
    put,
    remove,
} from "../https.js";

export const ApiCreateEchoSentence = {
    post: (courseid, uid,paramObj) => {
        return post(`/quiz/echovalley/create/${courseid}/${uid}`,paramObj)
    }
};

export const ApiModifySentence = {
    post:(echoid,paramObj) => {
        return post(`/quiz/echovalley/modify/${echoid}`,paramObj)
    }
}

export const ApiDeleteSentence = {
    get:(echoid) => {
        return get(`/quiz/echovalley/delete/${echoid}`)
    }
};

export const ApiGetSentence = {
    get:(courseid) => {
        return get(`/quiz/echovalley/list/${courseid}`)
    }
};
export const ApiSetEchoStatus = {
    get:(courseid,status) => {
        return get(`/quiz/echovalley/set/${courseid}/${status}`)
    }
};
