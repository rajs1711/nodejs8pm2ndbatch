
const signupFunction= async (req,res)=>{
     

       // fetch user data
       const { mobile,name ,email ,address}=req.body
       
       // verify weather given email,mobile already exists in your database or not 
       // if email and mobile already exists it means user try to duplicate
       // that is not allowed
       // Beacuse one email and mobile can create single account


       // generate new password
       const rand_num = Math.floor(10000 + Math.random() * 90000);
       const newpassword= rand_num +'$pwd';

       // encrypt your password
       // save your above data in database
       // return response 

       // data fetch from your request body
       const yourDetails={
        "mobile":req.body.mobile,
        "name":req.body.name,
        "username":"user1"+req.body.mobile,
        "temppassword":"90ehjdud"

       }
       res.json({"msg":"your account created successfully","data":yourDetails});
}

module.exports={
    signupFunction
}