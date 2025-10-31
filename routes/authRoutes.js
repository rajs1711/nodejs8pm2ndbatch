const express =require('express');
const router=express.Router();
const authController= require('../controller/authController')

router.post('/signup',verifydatavalidation,authController.signupFunction);

router.post('/login',(req,res)=>{
    console.log(req.body);
    res.json({"msg":"your account created successfully","dummyPassword":"Abvsh7shsh"});
});

module.exports=router