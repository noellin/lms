var arrayEach=require("./_arrayEach"),arrayPush=require("./_arrayPush"),baseFunctions=require("./_baseFunctions"),copyArray=require("./_copyArray"),isFunction=require("./isFunction"),isObject=require("./isObject"),keys=require("./keys");function mixin(e,i,r){var a=keys(i),n=baseFunctions(i,a),s=!(isObject(r)&&"chain"in r&&!r.chain),u=isFunction(e);return arrayEach(n,function(r){var a=i[r];e[r]=a,u&&(e.prototype[r]=function(){var r=this.__chain__;if(s||r){var i=e(this.__wrapped__);return(i.__actions__=copyArray(this.__actions__)).push({func:a,args:arguments,thisArg:e}),i.__chain__=r,i}return a.apply(e,arrayPush([this.value()],arguments))})}),e}module.exports=mixin;