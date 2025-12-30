const foodModel= require('../model/foodModel');
const orderModel= require('../model/orderModel');
const jwt=require("jsonwebtoken");

const createItem= async (req,res)=>{
     
       try{
           let msg=null;
           let result =null;
            //code to insert data in foods table
            const { name, price,cateogry,description,itemId}=req.body;
            // check wheather itemId already available in db ?
            const rs=await foodModel.find({itemId:itemId});
            if(rs.length >0){
                result=await foodModel.updateOne(
                { itemId:itemId},          // filter
                { $set: 
                    
                    { 
                        name: name, 
                        price:price,
                        cateogry:cateogry,
                        description:description,
                        modifiedBy:req.user.email
                    
                    } 
                
                } // update
                );
                msg="your Item updated successfully"
            }else{
                    result= await foodModel.insertOne({
                    itemId:itemId,
                    name:name,
                    price:price,
                    cateogry:cateogry,
                    description:description,
                    createdBy:req.user.email,
                    modifiedBy:null
                });
                msg="your Item created successfully"
            }


            return res.json({"msg":msg,"data":result});
            
        }catch(err){
            console.log(err)
            return res .json({"msg":"Internal Server Errorrrrrr","status":500,"err":err})
        }
}

const orderItem=async(req,res)=>{

    try{
        
        const {itemId,count,itemPrice,address,paymentmode,orderType}=req.body
        
        let result=null;
        // generate order number
        const rand_num = Math.floor(10000 + Math.random() * 90000);
        const ordernumber= 'ORD001'+rand_num ;

        let orderTotal= Number(count) * Number(itemPrice) ;
            orderTotal= orderTotal + Number ((orderTotal * 18) / 100);

        result=await orderModel.insertOne({
            itemId:itemId
            ,count:count
            ,orderTotal:orderTotal
            ,address:address
            ,paymentmode:paymentmode
            ,orderType:orderType
            ,orderNumber:ordernumber
            ,createdBy:req.user.email 
            ,modifiedBy:null
        });

        msg="Your order Created Succesfully";
        return res.json({"msg":msg,"data":result});
    }catch(err){
        console.log(err)
        return res.json({"msg":"Internal Server Error","data":null});
    }
}


module.exports={
    createItem,orderItem
}