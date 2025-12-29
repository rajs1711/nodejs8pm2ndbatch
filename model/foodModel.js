const mongoose=require('mongoose');

//food design 

const foodSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true 
    },
    cateogry:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    createdBy:{
        type:String,
        required:true
    }

},
 {
    timestamps:true
 }
);

module.exports=mongoose.model("Foods",foodSchema)