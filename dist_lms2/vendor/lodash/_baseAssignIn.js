var copyObject=require("./_copyObject"),keysIn=require("./keysIn");function baseAssignIn(e,n){return e&&copyObject(n,keysIn(n),e)}module.exports=baseAssignIn;