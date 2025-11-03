const express =require('express');
const router=express.Router();
const authController= require('../controller/authController');
const {validate}=require("express-validation"); // validate function use to call your data validation rule
const { signupvalidate } = require('../validation');// here in validation folder index file by defualt requyired

router.post('/signup',validate(signupvalidate.signupvalidattion),authController.signupFunction);

router.post('/login',(req,res)=>{
    console.log(req.body);
    res.json({"msg":"your account created successfully","dummyPassword":"Abvsh7shsh"});
});

module.exports=router