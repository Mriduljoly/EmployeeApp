const express =require("express");
const router = express.Router();
const employees = require("../models/empSchema")

//create employeedata
router.post("/empform", async(req,res)=>{
    console.log(req.body);
const {name,designation,salary} =req.body;

if(!name || !designation || !salary){
    res.status(404).json("plz fill the data");
}
try{
 const preemploy =await employees.findOme({name:name})
  if(preemploy){
    res.status(404).send("this user is already present")
}else{
    const addemployee = new employees({
        name,designation,salary
    })
    await addemployee.save();
     res.status(201).json()
}
}catch(error){
    res.status(404).json(error)
}
}) 

// get employee data
router.get("/getdata",async(req,res)=>{
    try{
        const employeedata =await users.find();
        res.status(201).json(employeedata)
    }catch(error){
        res.status(404).json(error) 
    }

})
module.exports = router;