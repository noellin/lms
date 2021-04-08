// utils/mixins.js

import Vue from 'vue'
import _ from "lodash";
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
            // console.log(filterLevelList);
          // if(filterLevelList.length!==0){
          //   filterLevelList.forEach(singleLevel => {
          //     temp = temp.concat(_.filter(ma,function(o) {return o.level.includes(singleLevel)}))
          //   });
          // }
          // else{
          //   temp = [...materialArray];
          // }
          temp = [...materialArray];
        //  let temp =  _.filter(ma,function(o) {return o.level.includes(filterLevelList)})
            // let temp = [...materialArray];
            // let levelList= []
            // temp.forEach(element => {
            //   if(element.level!==undefined && !levelList.includes(element.level)){
            //     levelList.push(element.level)
            //   }
            // });

            if (sortType === "title_asc") {
              temp = _.sortBy(temp, [(obj) => obj.resource_name], ["asc"]);
              // temp = _.sortBy(temp, [(obj) => parseInt(obj.unit, 10)], ["asc"]);
              // return filter include level 
              return temp
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
            else if (sortType === "unit_asc") {
              temp = _.sortBy(temp, [(obj) => parseInt(obj.unit,10)], ["asc"]);
              return temp;
            }
            else if (sortType === "unit_desc") {
              temp = _.sortBy(temp, [(obj) => parseInt(obj.unit,10)], ["asc"]);
              return temp.reverse();
            }
            
          },
    }
})