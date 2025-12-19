const signupModel= require('../model/signupModel');
const signupFunction= async (req,res)=>{
     
       // exception handling 
       try{
        // fetch user data
        const { mobile,name ,email ,address}=req.body
        // verify weather given email,mobile already exists in your database or not 
        // if email and mobile already exists it means user try to duplicate
        // that is not allowed
        // Beacuse one email and mobile can create single account

        const user= await signupModel.find({email:email}); // if found user.length =1

        if(user.length >0){
            return res.json({"msg":"ERROR: Username/email should be unique","data":req.body});
        }else{
            const user_mobile= await signupModel.find({mobile:mobile});
            if(user_mobile.length >0){
             return res.json({"msg":"ERROR: Mobile should be unique","data":req.body});
            }
        }

        // generate new password
        const rand_num = Math.floor(10000 + Math.random() * 90000);
        const newpassword= rand_num +'$pwd';


        // encrypt your password
        // save your above data in database

         const result= await signupModel.insertOne({
            name:name,
            email:email,
            mobile:mobile,
            address:address,
            password:newpassword
         });

         
        return res.json({"msg":"your account created successfully","data":result});
    }catch(err){
        return res .json({"msg":"Internal Server Error","status":500,"err":err})
    }
}

module.exports={
    signupFunction
}