const mongoose = require("mongoose");

const db = "mongodb+srv://Mridul:Mridul123@cluster0.2khlvfl.mongodb.net/employeedbemployees?retryWrites=true&w=majority"

mongoose.connect(db,{
    useNewUrlparser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=>console.log(error.message))