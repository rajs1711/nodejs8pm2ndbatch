const mongoose=require('mongoose');

//order design 

const orderSchema = new mongoose.Schema({
    orderNumber:{
    type:String,
    required:true
    },
    itemId:{
        type:Number,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    orderTotal:{
        type:String,
        required:true 
    },
    address:{
        type:String,
        required:true
    },
    paymentmode:{
        type:String,
        required:true
    },
    orderType:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    modifiedBy:{
        type:String
    }

},
 {
    timestamps:true
 }
);

module.exports=mongoose.model("Orders",orderSchema)