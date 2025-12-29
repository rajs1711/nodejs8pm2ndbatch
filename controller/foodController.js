const foodModel= require('../model/foodModel');
const jwt=require("jsonwebtoken");

const createItem= async (req,res)=>{
     
       try{
            //code to insert data in foods table
            const { name, price,cateogry,description}=req.body;

            const result= await foodModel.insertOne({
                name:name,
                price:price,
                cateogry:cateogry,
                description:description,
                createdBy:req.user.email
            });

            return res.json({"msg":"your Iteam created successfully","data":result});
            
        }catch(err){
            return res .json({"msg":"Internal Server Error","status":500,"err":err})
        }
}



module.exports={
    createItem
}