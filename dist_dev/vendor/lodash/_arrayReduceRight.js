function arrayReduceRight(r,e,t,u){var a=null==r?0:r.length;for(u&&a&&(t=r[--a]);a--;)t=e(t,r[a],a,r);return t}module.exports=arrayReduceRight;