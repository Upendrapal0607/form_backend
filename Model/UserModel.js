const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    DOB:String,
    role:String,
   joinDate:String,
   question:String

},{versionKey:false})

const UserModel=mongoose.model("FormData",userSchema)

module.exports={
    UserModel
}