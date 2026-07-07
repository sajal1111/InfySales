var mongoose=require("mongoose");
function getfranModel()
{
    var userScheema=mongoose.Schema;

var userColSchema={
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String,required: true, default: "" },
}
var ver={
    versionKey: false, // to avoid __v field in table come by default
  }
var UserColShema=new userScheema(userColSchema,ver);
const Franchise = mongoose.models.Franchise || mongoose.model("Franchise", UserColShema);return Franchise;
}
module.exports ={getfranModel}