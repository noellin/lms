var arrayMap=require("./_arrayMap"),baseIntersection=require("./_baseIntersection"),baseRest=require("./_baseRest"),castArrayLikeObject=require("./_castArrayLikeObject"),last=require("./last"),intersectionWith=baseRest(function(e){var r=last(e),t=arrayMap(e,castArrayLikeObject);return(r="function"==typeof r?r:void 0)&&t.pop(),t.length&&t[0]===e[0]?baseIntersection(t,void 0,r):[]});module.exports=intersectionWith;