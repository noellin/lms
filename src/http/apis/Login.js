import {
    get,
    post,
    put,
    remove
} from "../https.js";


//Login相關 api
export const ApiLogin = {
    post: (paramObj) => {
        return post("/info/login", paramObj);
    },
};
export const ApiForgotPassword = {
    get: (paramObj) => {
        return get(`/info/forgotpw/${paramObj}`);
    },
};
export const ApiConfirmPassword = {
    post: (uid, paramObj) => {
        return post(`/info/confirmpw/${uid}`, paramObj);
    },
};
export const ApiActivateUser = {
    get: (paramObj) => {
        return get(`/info/activate/${paramObj}`);
    },
};

export const ApiSaveLOG = {
    get:(uid) => {
        return get(`/stu/log/setlogin/${uid}`)
    }
}