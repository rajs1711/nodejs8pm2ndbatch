const mongoose=require('mongoose');

const connectdb=async()=>{
    try{
         // db connection code 
         const con = await mongoose.connect('mongodb+srv://rajsrv171195_db_user:EKiI6rizfYQuTC1k@cluster0.nfxo8w9.mongodb.net/Nodejs8PMDB'

)
         if(con){
            console.log('database connected successfully');
         }else{
            console.log('database Not connected');
         }
    }catch(error){
        console.log(error)
    }
}

module.exports=connectdb