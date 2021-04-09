// import axios from 'axios'
const common = {
    namespaced: true, //注意 模組化管理資料請不要忘了名稱空間的開啟
    state: {
        isLoading: false,
        fullPage: true,
        sortTypeList:[
            { text: "Sort by title A to Z", id: "title_asc" },
            { text: "Sort by title Z to A", id: "title_desc" },
            { text: "Sort by level A to Z", id: "level_asc" },
            { text: "Sort by level Z to A", id: "level_desc" },
            { text: "Sort by unit Smallest to Largest", id: "unit_asc" },
            { text: "Sort by unit Largest to Smallest", id: "unit_desc" },
          ],

    },
    mutations: {
        SET_LOADING(state, data) {
            state.isLoading = data
        },
        SET_SORTTYPELIST(state, data){
            state.sortTypeList = data
        },
    },
    actions: {
        setSortTypeList(context, data){
            context.commit('SET_SORTTYPELIST', data)
        },
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