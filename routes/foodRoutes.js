const express =require('express');
const router=express.Router();
const foodController= require('../controller/foodController');
const {authenticateToken}=require('../middleware/verifyToken');

router.post('/createitem',authenticateToken,foodController.createItem);

module.exports=router