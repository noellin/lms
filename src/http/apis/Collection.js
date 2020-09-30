import {
    get,
    post,
    put,
    remove
} from "../https.js";


//CourseList相關 api

export const ApiGetCollection = {
    get: (userid) => {
        return get(`/collection/byteacher/${userid}`);
    },
};
export const ApiSearchCollection = {
    get: (userid, keyword) => {

        return get(`/collection/searchresource/${userid}/${keyword}`);
    },
};

export const ApiGetCollectionContent = {
    get: (userid, cid) => {

        return get(`/collection/byteacher/${userid}/${cid}`);
    },
};

export const ApiGetPkgList = {
    get: (userid) => {
        return get(`/collection/listpkgbyteacher/${userid}`);
    }
}

export const ApiSetCollection = {
    post: (paramObj) => {
        return post(`/collection/create`, paramObj);
    }
}

export const ApiGetPkgMaterial = {
    get: (pkgid) => {
        return get(`/collection/pkgresource/${pkgid}`);
    }
}