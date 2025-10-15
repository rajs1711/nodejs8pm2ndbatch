const express =require('express');
const router=express.Router();
// Routes
router.get('/testserver',(req,res)=>{
    res.json({"msg":"Hello your Server is UP"});
});

module.exports =router
