const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true 
    },
});

const employees = new mongoose.model("employees",empSchema);

module.exports = employees;