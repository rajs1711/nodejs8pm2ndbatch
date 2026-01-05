const jwt =require('jsonwebtoken');

const authenticateToken= async (req,res,next)=>{
  
    try{

      const token=req.header('Authorization')?.replace('Bearer ','');
      let data=null;

      if(!token){
        data={"msg":"Access Denied"}
        res.json({"status":500,"data":data});
      }
    const decoded = jwt.verify(token, 'yduh*&yhs56sghTHH');
    req.user = decoded;
    next();
    }catch(err){
      res.json({"msg":"Error in Token verification","error":err})
    }
}

module.exports={authenticateToken}