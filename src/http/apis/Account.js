import {
    get,
    post,
    put,
    remove
} from "../https.js";

export const ApiGetAccoutList = {
    get: () => {
        return get(`/tchr/list`);
    }
};

export const ApiSearchAccount = {
    get: (keyword) => {
        return get(`/tchr/search/${keyword}`)
    }
};

export const ApiSendInviteMail = {
    post: (obj) => {
        return post(`/tchr/invite`, obj)
    }
}

export const ApiGetAccountInfo = {
    get: (uid) => {
        return get(`/tchr/profile/${uid}`)
    }
}

export const ApiSetAccountStatus = {
    get: (uid, status) => {
        return get(`/tchr/setstatus/${uid}/${status}`)
    }
}

export const ApiSetAccountInfo = {
    post: (uid, paramObj) => {
        return post(`/tchr/modify/${uid}`, paramObj)
    }
}

export const ApiSetAccountPWD = {
    post: (uid, paramObj) => {
        return post(`/tchr/resetpw/${uid}`, paramObj)
    }
}

export const ApiChangeAvatar = {
    get:(paramObj) => {
        return get(`/tchr/avatar/${paramObj}`)
    }
}