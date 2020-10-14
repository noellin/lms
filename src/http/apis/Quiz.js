import {
    get,
    post,
    put,
    remove
} from "../https.js";

export const ApiGetQuizByVideo = {
    get: (rid, mid) => {
        return get(`/quiz/list/video/${rid}/${mid}`)
    }
};

export const ApiGetQuizByBook = {
    get: (rid) => {
        return get(`/quiz/list/book/${rid}`)
    }
};

export const ApiGetSubtitileByVideo = {
    get: (pkgid, colid, rid, mid) => {
        return get(`/cms/resdl/subtitle/${pkgid}/${colid}/${rid}/${mid}`)
    }
};

export const ApiGetSubtitleByBook = {
    get: (pkgid, colid, rid) => {
        return get(`/cms/resdl/subtitlebyres/${pkgid}/${colid}/${rid}`)
    }
};

export const ApiSetSByVideo = {
    post: (rid, mid, courseid) => {
        return post(`/quiz/create/video/${rid}/${mid}/${courseid}`)
    }
};

export const ApiSetSByBook = {
    post: (rid, courseid) => {
        return post(`/quiz/create/book/${rid}/${courseid}`)
    }
};

export const ApiGetSList = {
    get: (qid) => {
        return get(`/quiz/list/sentence/${qid}`)
    }
};