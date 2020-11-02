import {
  get,
  post,
  put,
  remove
} from "../https.js";

export const ApiGetAList = {
  get: (courseid, uid) => {
    return get(`/asgmt/getlist/${courseid}/${uid}`);
  },
};

export const ApiGetAMaterial = {
  get: (aid) => {
    return get(`/asgmt/material/${aid}`);
  },
};

export const ApiGetAProgress = {
  get: (aid) => {
    return get(`/asgmt/progress/${aid}`);
  },
};

export const ApiSetEvaluate = {
  post: (aid, sid) => {
    return post(`/asgmt/evaluate/${aid}/${sid}`);
  },
};

export const ApiGetVoice = {
  get: (vid) => {
    return get(`/asgmt/play/voice/${vid}`);
  },
};

export const ApiGetSpeakScore = {
  get: (aid, sid) => {
    return get(`/asgmt/score/speaking/${aid}/${sid}`);
  },
};

export const ApiCheckAllA = {
  post: (aid, paramObj) => {
    return post(`/asgmt/checkall/${aid}`, paramObj);
  },
};

export const ApiGetADetail = {
  get: (aid, sid) => {
    return get(`/asgmt/detail/${aid}/${sid}`);
  },
};

export const ApiSearchStudent = {
  get: (aid, type, keyword) => {
    return get(`/asgmt/search/${aid}/${type}/${keyword}`)
  }
};