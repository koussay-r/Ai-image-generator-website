const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const  route  = require("./routes/generateImage.js")


//app config
dotenv.config()
const app=express()
const port=process.env.PORT||9000
const mongodbURl=`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.yde1grw.mongodb.net/AI-image-generator?retryWrites=true&w=majority`


//midleWares
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', true)
//db connection
mongoose.connect(mongodbURl,{
    useNewUrlParser:true
})
//api endpoints

app.get('/',(req,res)=>{
    res.send("works !")
})
app.use("/handleimage",route)



//listening
app.listen(port,()=>{
    console.log(`Starting server on port : ${port}`)
})