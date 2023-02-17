const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const {  Configuration } = require("openai")
const {OpenAIApi} =require("openai")
const route=express.Router()
dotenv.config()
const apikey=process.env.OPENAI_API_KEY
const configuration=new Configuration({
    apiKey:apikey
})
const openai=new OpenAIApi(configuration);

route.get("/",async(req,res)=>{
    const prompt="dog"
    console.log(prompt)
    try{
        const response=await openai.createImage({
            prompt,
            n:1,
            size:"1024x1024",
            response_format:"b64_json"
        });
        const image = response.data.data[0].b64_json;
        res.status(200).send(image)
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})
module.exports=route