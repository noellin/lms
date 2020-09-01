import axios from 'axios';

var myaxios = axios.create({
    baseURL: process.env.VUE_APP_DOMAIN,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
});
var tokenaxios = axios.create({
    baseURL: process.env.VUE_APP_DOMAIN,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
});
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