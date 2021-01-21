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

        return get(`/collection/search/${userid}/${keyword}`);
    },
};
export const ApiSearchCollectionResource = {
    get: (userid, cid, keyword, type) => {
        return get(`/collection/searchresource/${userid}/${cid}/${keyword}/${type}`);
    },
};
export const ApiGetCollectionContent = {
    get: (userid, cid) => {

        return get(`/collection/content/${userid}/${cid}`);
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
        console.log(pkgid);
        return get(`/collection/pkgresource/${pkgid}`);
    }
}

export const ApiDeleteResource = {
    get: (uid, cid, rid) => {
        return get(`/collection/deleteresource/${uid}/${cid}/${rid}`);
    }
}

export const ApiDeleteCollection = {
    get: (cid) => {
        return get(`/collection/delete/${cid}`);
    }
}

export const ApiGetCollectionInfo = {
    get: (cid, pid) => {
        return get(`/collection/pkgmapcurs/${cid}/${pid}`)
    }
}

export const ApiGetAvailableCourse = {
    get: (uid, cid, rid) => {
        return get(`/collection/availablecourse/${uid}/${cid}/${rid}`)
    }
}

//course material use
export const ApiGetCollectionList = {
    get: (uid, rid) => {
        return get(`/collection/exist/${uid}/${rid}`)
    }
};

export const ApiGetResource = {
    get: (uid, colid) => {
        return get(`/collection/getresource/${uid}/${colid}`)
    }
};

export const ApiAddResource = {
    get: (colid, rid) => {
        console.log(`/collection/addresource/${colid}/${rid}`);
        return get(`/collection/addresource/${colid}/${rid}`)
    }
};

export const ApideleteResource = {
    get: (uid, colid, rid) => {
        return get(`/collection/deleteresource/${uid}/${colid}/${rid}`)
    }
};

export const ApiUpdateCollection = {
    put: (colid, paramObj) => {
        return put(`/collection/update/${colid}`, paramObj)
    }
};