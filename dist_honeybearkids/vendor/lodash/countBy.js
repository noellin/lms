var baseAssignValue=require("./_baseAssignValue"),createAggregator=require("./_createAggregator"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,countBy=createAggregator(function(e,r,t){hasOwnProperty.call(e,t)?++e[t]:baseAssignValue(e,t,1)});module.exports=countBy;