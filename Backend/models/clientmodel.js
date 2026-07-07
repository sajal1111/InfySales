var mongoose=require("mongoose");
function clientmodel()
{
    var userScheema=mongoose.Schema;

var userColSchema={

  totalsales: { type: Number, default: null,required: true},
  date: { type: Date, default: null,required: true , unique: true, index: true }, // Stored as a Date object
  totalcustomers: { type: Number, default: null,required: true }, // Now stored as a number
}
var ver={
    versionKey: false, // to avoid __v field in table come by default
  }
var UserColShema=new userScheema(userColSchema,ver);
var UserColRef=mongoose.model("clientmodels",UserColShema);//create collection in mongodb database
return UserColRef;
}
module.exports ={clientmodel}