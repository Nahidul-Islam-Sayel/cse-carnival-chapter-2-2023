const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
const CseDepartmentSchema = require('../Scheema/CseDepartmentSchema')
const DepartmentOfCSE= new mongoose.model("DepartmentOfCSE", CseDepartmentSchema);
const bcrypt = require("bcrypt");
const DepartmentSchema= require("../Scheema/DepartmentSchema")
const StudentScheema = require("../Scheema/StudentScheema");
const CourseScheema = require("../Scheema/CourseList");
const PaymentScheema= require("../Scheema/PaymentScheema"); 
const AssignCourseScheema = require("../Scheema/AssignCourseSchema");
const AssignRetakeReffredCourseScheema = require("../Scheema/AssignRetakeReffredSchema");
const TeacherScheema = require("../Scheema/TeacherScheema");
const Students= new mongoose.model("student", StudentScheema);
const Teachers= new mongoose.model("teacher", TeacherScheema);
const Payment= new mongoose.model("payment", PaymentScheema);
const CourseList= new mongoose.model("course", CourseScheema);
const AssignCourseModel= new mongoose.model("assigncourse", AssignCourseScheema);
const AssingRetakeReffredModel= new mongoose.model("assignretakereffredcourse", AssignRetakeReffredCourseScheema);
const jwt = require("jsonwebtoken");
const Department = new mongoose.model("CSE",DepartmentSchema);
const CheakLoginControler = require('../MiddleWears/CheakLoginControler')
const saltRounds = 10;
router.post("/StudentsRegistration",async(req,res)=>{
 
    const hashpassword =  await bcrypt.hash(req.body.password_1, saltRounds);
    // console.log(hashpassword);
    try {
    //    console.log(req.body)
        const newStudents = new Students({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashpassword,
        });
        await newStudents.save();
        res.status(200).json({
            message: "Signup was successful!",
        });
    } catch(error) {
 
        res.status(200).json({
            message: "username and email should be uniqe",
        });
    }
})


router.post("/login", async(req,res)=>{
    try {
       const user = await Students.find({ username: req.body.username });
   
       if (user&&user.length>0) {
             const isvalidPassword=  await bcrypt.compare(req.body.password_1, user[0].password);
        
             if(isvalidPassword) {
                 // generate token
 
                 const token = jwt.sign({
                     username: user[0].username,
                    
                     userId: user[0]._id,
                 }, process.env.JWT_SECRET, {
                     expiresIn: '1h'
                 });
 
                 res.status(200).json({
                     "access_token": token,
                     "message": "Login successful!"
                 });
             } else {
                 res.status(200).json({
                     "error": "Wrong Username and password"
                 });
             }
         } else {
             res.status(200).json({
                 "error": "Wrong Username and password"
             });
       }
    } catch (error) {
     res.status(200).json({
         "error": "Wrong Username and password"
     });
    }  
 })
 router.get("/Profile",CheakLoginControler,async(req,res)=>{
  //  console.log( req.query.Department);
    try {  
      
        const user = await Students.find({username: req.query.username  });
      
        if(user&&user.length>0){
            res.send(user)
           // console.log(user)
        }
        
    } catch (error) {
        res.status(200).json({
            "error": "Wrong Username and password"
        }); 
    }
  
     
 })
   
  router.post("/Payment", async (req, res) => {
   
    try {
      
        const newUser = new Payment({
            name: req.body.name,
            method: req.body.method,
            taka: req.body.taka
        });
        await newUser.save();
        res.status(200).json({
            message: "Signup was successful!",
        });
    } catch (error) {
    
        res.status(200).json({
            message: "username and email should be uniqe",
        });
    }
});
router.get("/PaymentShow", async(req,res)=>{
    console.log(req.query)
    try {  
      
        const user = await Payment.find({name: req.query.username  });
      
        if(user&&user.length>0){
            res.send(user)
           // console.log(user)
        }
        
    } catch (error) {
        res.status(200).json({
            "error": "Wrong Username and password"
        }); 
    }
 })

 module.exports = router;