const express =require('express');
const router=express.Router();
const authController= require('../controller/authController');
const {validate}=require("express-validation"); // validate function use to call your data validation rule
const { signupvalidate,loginvalidate,profileFunction} = require('../validation');// here in validation folder index file by defualt requyired
const {authenticateToken}=require('../middleware/verifyToken');
const uploadHandler = require('../middleware/uploadcloudinary');

router.post('/signup',validate(signupvalidate.signupvalidattion),authController.signupFunction);

router.post('/login',validate(loginvalidate.loginvalidattion),authController.loginFunction);

router.post('/profile',authenticateToken,authController.profileFunction);

router.post("/uploadprofile", authenticateToken, uploadHandler, authController.profileImage);

module.exports=router