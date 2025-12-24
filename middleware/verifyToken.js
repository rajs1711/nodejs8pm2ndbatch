const jwt =require('jsonwebtoken');

const authenticateToken= async (req,res,next)=>{
  
    try{
        const {email}=req.body
      const token=req.header('Authorization')?.replace('Bearer ','');
      let data=null;

      if(!token){
        data={"msg":"Access Denied"}
        res.json({"status":500,"data":data});
      }
    const decoded = jwt.verify(token, 'yduh*&yhs56sghTHH');
    console.log(decoded, 'decoded token');
    if(decoded.email == email){
        req.user = decoded;
        next();
    }else{
         res.json({"msg":"Error in Token verification","error":err})
    }

    }catch(err){
      res.json({"msg":"Error in Token verification","error":err})
    }
}

module.exports={authenticateToken}