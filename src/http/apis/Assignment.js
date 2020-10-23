import { get, post, put, remove } from "../https.js";

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
  get: (aid) => {
    return get(`/asgmt/checkall/${aid}`);
  },
};

export const ApiGetADetail = {
  get: (aid, sid) => {
    return get(`/asgmt/datail/${aid}/${sid}`);
  },
};
