const mongoose=require("mongoose")

const userlist=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"todocluster1"
    }
})
