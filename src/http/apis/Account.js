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
        return post(`tchr/invite`, obj)
    }
}

export const ApiGetAccountInfo = {
    get: (uid) => {
        return get(`/tchr/profile/${uid}`)
    }
}

export const ApiSetAccountStatus = {
    post: (uid) => {
        return post(`/tchr/setsatus/${uid}`)
    }
}

export const ApiSetAccountInfo = {
    post: (uid) => {
        return post(`/tchr/modify/${uid}`)
    }
}

export const ApiSetAccountPWD = {
    post: (uid) => {
        return post(`/tchr/resetpw/${uid}`)
    }
}