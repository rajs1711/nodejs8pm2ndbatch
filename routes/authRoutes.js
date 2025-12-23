const express =require('express');
const router=express.Router();
const authController= require('../controller/authController');
const {validate}=require("express-validation"); // validate function use to call your data validation rule
const { signupvalidate,loginvalidate,profileFunction} = require('../validation');// here in validation folder index file by defualt requyired

router.post('/signup',validate(signupvalidate.signupvalidattion),authController.signupFunction);

router.post('/login',validate(loginvalidate.loginvalidattion),authController.loginFunction);

router.post('/profile',authController.profileFunction);

module.exports=router