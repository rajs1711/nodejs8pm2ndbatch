const signupModel= require('../model/signupModel');
const jwt=require("jsonwebtoken");

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

const loginFunction=async(req,res)=>{

    const {email,password}=req.body
    const user= await signupModel.find({email:email}); 
    if(user.length > 0 ){
            // email is correct now check password
            const result= await signupModel.find({email:email,password:password},{email:1}); 
            if(result.length > 0 ){
                // generate token

                const token= jwt.sign({
                    email:result[0].email
                },'yduh*&yhs56sghTHH',
                {expiresIn:"1h"}
               );
                // return token
                 return res.json({"msg":"Login Successfully","status":200,"token":token});
            }else{
                 return res.json({"msg":"Wrong password","status":400});
            }

    }else{
       return res.json({"msg":"Email Not Exist","status":400})
    }

}

const profileFunction=async(req,res)=>{

    const {email}=req.body
    const user= await signupModel.find({email:email},{name:1,mobile:1}); 
    console.log(user,'dddd');
    if(user.length > 0 ){
          const userDetail={
            name:user[0].name,
            mobile:user[0].mobile
          }
          const name=user[0].name;
          const mobile=user[0].mobile;
          return res.json({userDetail:userDetail,"msg":"User detail return successfully",status:200});

    }else{
       return res.json({"msg":"Email Not Exist","status":400})
    }

}

module.exports={
    signupFunction,loginFunction,profileFunction
}