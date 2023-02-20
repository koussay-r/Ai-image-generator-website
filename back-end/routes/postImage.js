const mongoose = require("mongoose");
const express = require("express");
const Image = require("./../models/Imagemodel.js");
const cloudinary = require("cloudinary").v2;
const dotenv=require("dotenv");
dotenv.config()
const route = express.Router();
route.get("/", async (req, res) => {
  try {
    const response = await Image.find({});
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY ,
  api_secret:process.env.CLOUDINARY_API_SECRET ,
});

route.post("/", async (req,res) => {
  try {
    const { name, prompt, image } = req.body;
    const result = await cloudinary.uploader.upload(image);
    const createPost= await Image.create({
        name,
        prompt,
        image:result.url
    })
    res.status(201).send(createPost)
  } catch (err) {
    console.log(err)
  }
});

module.exports=route
