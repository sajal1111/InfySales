var mongoose=require("mongoose");
function getAppModel()
{
    var userScheema=mongoose.Schema;

var userColSchema={
  uid: { type: String, required: true, unique: true, index: true },
  name: { type: String,required: true, default: "" },
  contact: { type: Number, default: null }, // Now stored as a number
  address: { type: String, default: "" },
  business: { type: String, default: "" },
  date: { type: Date, default: null }, // Stored as a Date object
  cite: { type: String, default: "" },
  city: { type: String, default: "" },
  area: { type: String, default: "" },
  pincode: { type: Number, default: null }, // Now stored as a number
  ostatus: { type: String, default: "" }, // Ownership status: Owner or Rent
  istatus: {
    type: Number,
    default: 3,
    enum: [0, 1, 2, 3], // Only these values allowed (Pending, Accepted, Franchise, Declined
  },
}
var ver={
    versionKey: false, // to avoid __v field in table come by default
  }
var UserColShema=new userScheema(userColSchema,ver);
var UserColRef=mongoose.model("Applicantmodel",UserColShema);//create collection in mongodb database
return UserColRef;
}
module.exports ={getAppModel}