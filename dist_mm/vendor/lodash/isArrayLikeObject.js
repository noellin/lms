var isArrayLike=require("./isArrayLike"),isObjectLike=require("./isObjectLike");function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}module.exports=isArrayLikeObject;