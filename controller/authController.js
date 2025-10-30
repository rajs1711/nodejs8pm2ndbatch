
const signupFunction= async (req,res)=>{
     


    // data save logic  - pending
    
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