require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose")
require("./Db/Connection")
const employees =require("./models/empSchema")
const cors = require("cors");

const port = 8003;

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log("Server is listening to the port");
})