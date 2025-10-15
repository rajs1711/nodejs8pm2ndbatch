const express =require('express');
const router=express.Router();

router.post('/signup',(req,res)=>{
    console.log(req.body);
    res.json({"msg":"your account created successfully","dummyPassword":"Abvsh7shsh"});
});

router.post('/login',(req,res)=>{
    console.log(req.body);
    res.json({"msg":"your account created successfully","dummyPassword":"Abvsh7shsh"});
});

module.exports=router