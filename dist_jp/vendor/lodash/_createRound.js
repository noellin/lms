var toInteger=require("./toInteger"),toNumber=require("./toNumber"),toString=require("./toString"),nativeMin=Math.min;function createRound(e){var i=Math[e];return function(e,t){if(e=toNumber(e),t=null==t?0:nativeMin(toInteger(t),292)){var r=(toString(e)+"e").split("e"),n=i(r[0]+"e"+(+r[1]+t));return+((r=(toString(n)+"e").split("e"))[0]+"e"+(+r[1]-t))}return i(e)}}module.exports=createRound;