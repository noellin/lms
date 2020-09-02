//現在沒使用
//現在沒使用
//現在沒使用
import axios from 'axios';

var myaxios = axios.create({
    baseURL: process.env.VUE_APP_DOMAIN,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
});
// request interceptor  请求之前的拦截器
myaxios.interceptors.request.use(config => {
    // Do something before request is sent
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone interceptor 请求之后异常状态拦截
myaxios.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.statusCode === 404) {
            return Promise.reject('error');
        } else {
            return response.data;
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default myaxios
// var tokenaxios = axios.create({
//     baseURL: process.env.VUE_APP_DOMAIN,
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//     }
// });
axios.defaults.withCredentials = false;
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
export default {
    myaxios,
    tokenaxios
}

// 登入 相關的 api
// export const login = data => api.post('/info/login', data);
// export const apiUserLogout = data => api.post('/signOut', data);
// export const apiUserSignUp = data => api.post('/signUp', data);

// // 文章相關的 api
// export const apiArticleItem = () => articleRequest.get('/ArticleItem');
// export const apiArticleMsg = data => articleRequest.post('/ArticleMsg', data);
// export const apiArticleLink = data => articleRequest.post('/ArticleLink', data);

// // 搜尋相關的 api
// export const apiSearch = data => searchRequest.get(`/Search?searchdata=${data}`);
// export const apiSearchType = () => searchRequest.get(`/SearchType`);