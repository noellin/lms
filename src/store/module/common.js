// import axios from 'axios'
const common = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        isLoading: false,
        fullPage: true,
        sortTypeList:[
            { text: "Sort by title Asc", id: "title_asc" },
            { text: "Sort by title Desc", id: "title_desc" },
            { text: "Sort by level Asc", id: "level_asc" },
            { text: "Sort by level Desc", id: "level_desc" },
          ],

    },
    mutations: {
        SET_LOADING(state, data) {
            state.isLoading = data
        }
    },
    actions: {
        setLoading(context, data) {
            context.commit('SET_LOADING', data)
        },

    },
    // getters: {
    //     List: state => state.List,
    //     count: state => state.count,
    //     number: state => state.number
    // }
}
export default common;