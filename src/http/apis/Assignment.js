import {
  get,
  post,
  put,
  remove,
  fetchget
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
  post: (aid, sid, paramObj) => {
    return post(`/asgmt/evaluate/${aid}/${sid}`, paramObj);
  },
};

export const ApiGetVoice = {
  get: (vid) => {
    return fetchget(`/asgmt/play/voice/${vid}`);
  },
};

export const ApiSetSpeakScore = {
  get: (aid, amid, sid, score) => {
    return get(`/asgmt/score/${aid}/${amid}/${sid}/${score}`);
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
    return get(`/asgmt/search/${aid}/${type}/${keyword}`);
  },
};

// export const ApiDeleteAssignment = {
//   get: (aid) => {
//     return get(`/asgmt/delete/${aid}`)
//   }
// }

export const ApiDeleteAssignment = {
  getAxiosAll: (aid) => {
    return Promise.all(aid.map(aidObj => {
      return get(`/asgmt/delete/${aidObj}`)    
    }))
}
}