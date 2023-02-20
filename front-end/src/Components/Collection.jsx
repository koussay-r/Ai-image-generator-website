import axios from "axios";
import React, {  useEffect, useState } from "react";
import Posts from "./Posts"
export default function Collection() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const handlePosts=async()=>{
      try{
        const response=await axios.get("http://localhost:9000/handleposting");
        console.log(response.data);
        setPosts(response.data)
      }
      catch(err){
        console.log(err)
      }
    }
    handlePosts()
  },[])
  return (
    <div className="mt-28  pb-5 block mx-auto w-[85%]">
      <div className=" lg:w-[20%]">
        <p className="text-4xl text-black/80 font-bold">
          The community Showcase
        </p>
        <p className="mt-2 font-[600] text-gray-500/80">
          Browse through collection of imaginative and visually stunnig images
          generated by DALL-E AI
        </p>
      </div>
      <div className="grid grid-cols-3 mt-20">
        {
          posts.map(item=>{
            return <Posts key={item._id} image={item.image} name={item.name} prompt={item.prompt} />
          })
        }
      </div>
    </div>
  );
}
