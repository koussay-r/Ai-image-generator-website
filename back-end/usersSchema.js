const mongoose=require("mongoose")
const usersSchema=mongoose.Schema({
    name:String,
    pfp:String,
    email:String
})
const modelUsers=mongoose.model("users",usersSchema,"users")
module.exports= modelUsers

