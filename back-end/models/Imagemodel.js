const mongoose=require("mongoose")

const imageSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    prompt:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("images",imageSchema);