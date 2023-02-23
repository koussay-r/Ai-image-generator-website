import React, { useContext, useState } from "react";
import initImage from "./../assets/preview.png";
import loadingGif from "./../assets/Infinity-1s-200px.gif";
import axios from "axios";
import { surpriseMePrompts } from "./Contsants";
import { PostingLoadingContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate()
    // loading while posting the generated image
  const [PostingLoading,setPostingLoading]=useContext(PostingLoadingContext)

  // the data of the generated image and the user will be in this state
  const [inputvalue, setInputValue] = useState({
    name: "",
    prompt: "",
    image: initImage,
  });
  // this function handles the prompt value
  const handlePrompt = (e) => {
    setInputValue({ ...inputvalue, prompt: e.target.value });
  };
  // hanldes the name of user
  const handleName = (e) => {
    setInputValue({ ...inputvalue, name: e.target.value });
  };
  const [loadingGenarate, setLoadingGenerate] = useState(false);
  const handleGenerate = async () => {
    if (inputvalue.name && inputvalue.prompt) {
      try {
        setLoadingGenerate(true);
        await axios
          .post("https://easy-ruby-peacock-vest.cyclic.app/handleimage", {
            prompt: inputvalue.prompt,
          })
          .then((res) => {
            setInputValue({
              ...inputvalue,
              image: `data:image/jpeg;base64,${res.data.photo}`,
            });
            setLoadingGenerate(false);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("ayo");
    }
  };

  const handleSurprise = () => {
    setInputValue({
      ...inputvalue,
      prompt:
        surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)],
    });
  };
  const handlesPosting=async()=>{
    try{
      setPostingLoading(true)
      await axios.post("https://easy-ruby-peacock-vest.cyclic.app/handleposting",inputvalue)
      setPostingLoading(false)
      navigate('/collection')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="mt-28 pb-5 block mx-auto w-[85%]">
      <div className=" lg:w-[40%]">
        <p className="text-4xl text-black/80 font-bold">Create</p>
        <p className="mt-2 font-[600] text-gray-500/80">
          Generate an imaginative throught DALL-E and share it with the
          community
        </p>
      </div>
      <div className="mt-20">
        <p className="font-bold text-sm font-Montserrat text-gray-600/80">
          Your Name
        </p>
        <input
          type="text"
          value={inputvalue.name}
          onChange={handleName}
          className="w-full font-WorkSans font-bold mt-2 py-1 pl-2 border border-gray-400/50 rounded-md h-8 "
        />
        <p className="mt-6 font-bold text-sm font-Montserrat text-gray-600/80">
          Prompt{" "}
          <button
            onClick={handleSurprise}
            className="bg-gray-400/30 rounded-md ml-2 p-1 text-bold text-black/80"
          >
            Surprise Me
          </button>
        </p>
        <input
          type="text"
          value={inputvalue.prompt}
          onChange={handlePrompt}
          className="w-full font-WorkSans font-bold mt-2 py-1 pl-2 border border-gray-400/50 rounded-md h-8 "
        />
      </div>
      <div>
        <div className="rounded-xl relative w-fit h-fit mt-10 p-2 overflow-hidden border">
          {loadingGenarate && (
            <img
              src={loadingGif}
              alt="loading"
              className="absolute w-[90px] z-10 h-[90px] left-[34%] top-[37%]"
            />
          )}
          <img
            src={inputvalue.image}
            alt=""
            className={` w-[300px] h-[300px] ${
              loadingGenarate && "brightness-50"
            } rounded bg-slate-400/20`}
          />
        </div>
        <button
          onClick={handleGenerate}
          className=" bg-green-700 block xs:mx-0 mx-auto text-lg mt-6 text-white font-[600] px-3 py-1 rounded-md "
        >
          {
            loadingGenarate?
            <>Generating...</>
            :
            <>Generate</>
          }
          
        </button>
      </div>
      <div className="mt-12 ">
        <p className="font-[600] text-center xs:text-start text-gray-500/90 font-quicksand">
          ** Once you have created the image you want,you can share it with
          others in the community**
        </p>
        <button onClick={handlesPosting} className="block xs:mx-0 mx-auto  text-white font-[600] xs:mr-5 bg-gradient-to-r font-WorkSans mt-4 text-md from-blue-600 to-blue-700 rounded-lg px-4 py-2">
          
          {
            PostingLoading?
            <>Sharing...</>
            :
            <>Share</>
          }
        </button>
      </div>
    </div>
  );
}
