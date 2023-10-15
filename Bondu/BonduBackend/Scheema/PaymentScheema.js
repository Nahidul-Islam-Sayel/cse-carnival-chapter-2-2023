const mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const DoctorSchema= mongoose.Schema({
    name:{
        type: "string",
        require: "true",
        unique: "true"
    },
  
    method:{
        type:"string",
        require: "true"
    },
    taka:{
        type:"string",
        require: "true"
    },

});
DoctorSchema.plugin(uniqueValidator);
module.exports=DoctorSchema;