import axios from "axios";
import store from "../store";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN; // 域名
// axios.defaults.headers.common['Content-Type'] = '~'
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded; charset=UTF-8";
// http request 欄截

axios.interceptors.request.use(
    (config) => {
        let token = store.state.token;
        // let token = window.localStorage.getItem("token");
        // token && (config.headers.Authorization = 'Bearer' + token)
        config.headers = {
            // 如果沒有cors的問題則可以都不加
            "Authorization": "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 異常處理
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        if (err && err.response) {
            switch (err.response.status) {
                case 401:
                    if (this.$router.currentRoute === 'Login') {

                    } else {
                        store.dispatch('setAuth', {
                            "token": '',
                            "isLogin": false
                        })
                        setTimeout(() => {
                            this.$router.push({
                                path: "/login",
                            });
                        }, 2000);
                    }
                    break;
                case 404:
                    console.log("找不到該頁面");
                    this.$router.push({
                        path: "/404",
                    });
                    break;
                case 500:
                    console.log("伺服器出錯");
                    break;
                case 503:
                    console.log("服務失效");
                    break;
                default:
                    console.log(`連接錯誤${err.response.status}`);
            }
        } else {
            console.log("連接到服務器失敗");
        }
        return Promise.resolve(err.response);
    }
);

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

export function remove(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}
// 將封裝的方法打包起來
//LOGIN PAGE
export const Login = {
    // get: function (paramObj) {
    //     return get("/info/login", paramObj);
    // },
    post: function (paramObj) {
        // const result = await post("/info/login", paramObj);
        // console.log(result)
        return post("/info/login", paramObj);
        // return post("/info/login", paramObj);
    },
    // put: function (paramObj) {
    //     return put("api/users", paramObj);
    // },
    // delete: function (paramObj) {
    //     return remove("api/users", paramObj);
    // },
};
export const ForgotPassword = {
    get: (paramObj) => {
        return get(`info/forgotpw/${paramObj}`);
    },
};
export const Loginverify = {
    get: (paramObj) => {
        return get(`verify`);
    }
}