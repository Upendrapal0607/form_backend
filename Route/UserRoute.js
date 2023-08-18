const express = require("express");
const { UserModel } = require("../Model/UserModel");
const userRoute = express.Router();

userRoute.get("/",async(req,res)=>{
try {
    const allForm= await UserModel.find();

    if(allForm.length>0){
        res.status(200).send(allForm)
    }
    else{
        res.status(200).send({msg:"No Data found"})
    }
    
} catch (error) {
    res.status(404).send(error)
}

})

userRoute.post("/fillform", async(req, res) => {
  try {
    const formData = req.body;
    if(formData){
        const resisterUser = UserModel(formData);
        await resisterUser.save();
        res.status(200).send({"message":"Your response have been submited"});
    }    
  } catch (error) {
    res.status(200).send({"message":"Sumthing went wrong please try again later"});
  }
})

module.exports={
    userRoute
}