// utils/mixins.js

import Vue from 'vue'

// 全站共用的 function，會注入每個 component 當中
Vue.mixin({
    methods: {
        // 標註千分位
        formatComma(str) {
            return str ? str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : str
        }
    }
})