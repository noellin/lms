import { get, post, put, remove } from "./https";
//我就寫同一支啦想拆再拆

//Components相關

//Page相關
//Login相關 api
export const ApiLogin = {
  post: (paramObj) => {
    return post("/info/login", paramObj);
  },
};
export const ApiForgotPassword = {
  get: (paramObj) => {
    return get(`info/forgotpw/${paramObj}`);
  },
};
export const ApiResetPassword = {
  post: (paramObj) => {
    return post(`info/confirmpw/${paramObj}`);
  },
};
export const ApiActivateUser = {
  get: (paramObj) => {
    console.log("dd");
    return post(`info/activate/${paramObj}`);
  },
};

//CourseList相關 api
export const ApiGetActiveCourseList = {
  get: (permit, userid, paramObj) => {
    if (permit === "admin") {
      return get(`/course/list/active/${userid}?filter=${paramObj}`);
    }
    return get(`/course/list/active/${paramObj}`);
  },
};
export const ApiGetExpiredCourseList = {
  get: (permit, userid, paramObj) => {
    if (permit === "admin") {
      return get(`/course/list/expired/${userid}?filter=${paramObj}`);
    } else {
      return get(`/course/list/expired/${paramObj}`);
    }
  },
};
export const ApiGetTeacherList = {
  get: () => {
    return get(`/course/teacherlist`);
  },
};

export const ApiSearchCourse = {
  post: (id, paramObj) => {
    return post(`/course/search/${id}`, paramObj);
  },
};

export const ApiSetCourse = {
  put: (id, paramObj) => {
    return put(`/course/search/${id}`, paramObj);
  },
};
