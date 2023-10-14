const mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const StudentSchema= mongoose.Schema({
    name:{
        type: "string",
        require: "true"
    },
    username:{
        type: "string",
        require: "true",
        unique: "true",
    },
    
    email:{
        type: "string",
        require: "true",
        unique: "true",
    },
   password:{
        type:"string",
        require: "true"
    }
    
});
StudentSchema.plugin(uniqueValidator);
module.exports=StudentSchema;