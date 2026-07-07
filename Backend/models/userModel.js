var mongoose=require("mongoose");
function getUserModel()
{
    var userScheema=mongoose.Schema;

var userColSchema={
    uid:{type:String,required:true,index:true,unique:true},
    pwd:String,
    dos:{type:Date,default:Date.now},
    picpath:String
}
var ver={
    versionKey: false, // to avoid __v field in table come by default
  }
var UserColShema=new userScheema(userColSchema,ver);
var UserColRef=mongoose.model("userCollection",UserColShema);//create collection in mongodb database
return UserColRef;
}
module.exports ={getUserModel}