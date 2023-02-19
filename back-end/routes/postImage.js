const mongoose = require("mongoose");
const express = require("express");
const Image = require("./../models/Imagemodel.js");
const cloudinary = require("cloudinary").v2;
const route = express.Router();
route.get("/", async (req, res) => {
  try {
    const response = await Image.find();
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});
cloudinary.config({
  cloud_name: "dtgyjmjq5",
  api_key: "966583524469895",
  api_secret: "WnwiQJD6Lf1GR0jmt1ATHS9-pBY",
});

route.post("/", async (req, res) => {
  try {
    const { name, prompt, image } = req.body;
    const res = await cloudinary.uploader.upload(image);
    const createPost= await Image.create({
        name,
        prompt,
        image:res.url
    })
    res.status(201).send(createPost)
  } catch (err) {
    console.log(err)
  }
});
