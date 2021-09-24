// utils/mixins.js

import Vue from 'vue'
// import _ from "lodash";
import filter from "lodash/filter";
import sortBy from "lodash/sortBy";
// 全站共用的 function，會注入每個 component 當中
Vue.mixin({
    methods: {
        // 標註千分位
        // levelLists(){
        //   let levelList= []
        //   this.sortMList.forEach(element => {
        //     if(element.level!==undefined && !levelList.includes(element.level)){
        //       levelList.push(element.level)
        //     }
        //   });
        //   return levelList
        // },
        $_sortMaterial(materialArray,sortType,filterLevelList) {
          let ma = [...materialArray]
            let temp = [];
          if(filterLevelList.length!==0){
            filterLevelList.forEach(singleLevel => {
              temp = temp.concat(filter(ma,function(o) {return o.level.includes(singleLevel)}))
            });
          }
          else{
            temp = [...materialArray];
          }
          // console.log('final list = ',temp);
          // console.log(sortType);
            if (sortType === "title_asc") {
              temp = sortBy(temp, [(obj) => obj.resource_name], ["asc"]);
              return temp
            } else if (sortType === "title_desc") {
              temp = sortBy(temp, [(obj) => obj.resource_name], ["asc"]);
              // temp = _.sortBy(temp, [(obj) => parseInt(obj.unit, 10)], ["asc"]);
              return temp.reverse();
            } else if (sortType === "level_asc") {
              let tempLevel = temp.filter(item => {
                return item.level!=='' && item.level!==null && item.level!==undefined
              })
              let tempUnit = temp.filter(item => {
                return item.unit!=='' && item.unit!==null && item.unit!==undefined
              })
              // console.log(tempLevel);
              // console.log(tempUnit);
              temp = sortBy(tempLevel, [(obj) => obj.level], ["asc"]).concat(sortBy(tempUnit, [(obj) => obj.unit], ["asc"]));
              // temp = sortBy(temp, [(obj) => obj.level], ["asc"]);
              // console.log(temp);
              return temp;
            } else if (sortType === "level_desc") {
              temp = sortBy(temp, [(obj) => obj.level], ["asc"]);
              return temp.reverse();
            }
            else if (sortType === "unit_asc") {
              temp = sortBy(temp, [(obj) => parseInt(obj.unit,10)], ["asc"]);
              return temp;
            }
            else if (sortType === "unit_desc") {
              temp = sortBy(temp, [(obj) => parseInt(obj.unit,10)], ["asc"]);
              return temp.reverse();
            }
            
          },
    }
})