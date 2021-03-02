// utils/mixins.js

import Vue from 'vue'

// 全站共用的 function，會注入每個 component 當中
Vue.mixin({
    methods: {
        // 標註千分位
        $_sortMaterial(materialArray,sortType) {
            let temp = [...materialArray];
            if (sortType === "title_asc") {
              temp = _.sortBy(temp, [(obj) => obj.resource_name], ["asc"]);
              // temp = _.sortBy(temp, [(obj) => parseInt(obj.unit, 10)], ["asc"]);
              return temp;
            } else if (sortType === "title_desc") {
              temp = _.sortBy(temp, [(obj) => obj.resource_name], ["asc"]);
              // temp = _.sortBy(temp, [(obj) => parseInt(obj.unit, 10)], ["asc"]);
              return temp.reverse();
            } else if (sortType === "level_asc") {
              temp = _.sortBy(temp, [(obj) => obj.level], ["asc"]);
              return temp;
            } else if (sortType === "level_desc") {
              temp = _.sortBy(temp, [(obj) => obj.level], ["asc"]);
              return temp.reverse();
            }
          },
    }
})