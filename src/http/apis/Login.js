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