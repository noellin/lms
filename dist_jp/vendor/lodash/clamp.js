var baseClamp=require("./_baseClamp"),toNumber=require("./toNumber");function clamp(e,r,o){return void 0===o&&(o=r,r=void 0),void 0!==o&&(o=(o=toNumber(o))==o?o:0),void 0!==r&&(r=(r=toNumber(r))==r?r:0),baseClamp(toNumber(e),r,o)}module.exports=clamp;