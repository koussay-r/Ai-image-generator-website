const express=require("express")
const mongoose=require("mongoose")
const { Configuration, Configuration } = require("openai")
const {OpenAIApi} =require("openai")
const route=express.Router()

const Configuration=new Configuration({
    apikey:process.env.OPENAI_API_KEY
})
const openai=new OpenAIApi(Configuration);

route.route("/").post(async(req,res)=>{
    const prompt=req.body.prompt
    try{
        const response=await openai.createImage({
            prompt:prompt,
            n:1,
            size:"1024x1024",
            response_format:
        })
    }
})