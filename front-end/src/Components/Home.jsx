import React, { useState } from 'react'
import initImage from "./../assets/preview.png"
export default function Home() {
    const [imageGenrated,setImageGenerated]=useState(initImage)
  return (
    <div className='mt-28 pb-5 block mx-auto w-[85%]'>
        <div className=' xl:w-[40%]'>

        <p className='text-4xl text-black/80 font-bold'>
            Create
        </p>
        <p className='mt-2 font-[600] text-gray-500/80'>
            Generate an imaginative throught DALL-E and share it with the community
        </p>
        </div>
        <div className='mt-20'>
            <p className='font-bold text-sm font-Montserrat text-gray-600/80'>
                Your Name
            </p>
            <input type="text" className='w-full font-WorkSans font-bold mt-2 py-1 pl-2 border border-gray-400/50 rounded-md h-8 '/>
            <p className='mt-6 font-bold text-sm font-Montserrat text-gray-600/80'>
                Prompt <button className='bg-gray-400/30 rounded-md ml-2 p-1 text-bold text-black/80'>Surprise Me</button>
            </p>
            <input type="text" className='w-full font-WorkSans font-bold mt-2 py-1 pl-2 border border-gray-400/50 rounded-md h-8 '/>
        </div>
        <div>
            <div className='rounded-xl w-fit h-fit mt-10 p-2 overflow-hidden border'>

            <img src={imageGenrated} alt="" className=' w-[300px] h-[300px]  rounded bg-slate-400/20' />
            </div>
            <button className=' bg-green-700 block xs:mx-0 mx-auto text-lg mt-6 text-white font-[600] px-3 py-1 rounded-md '>Generate</button>
        </div>
        <div className='mt-12 '>
            <p className='font-[600] text-center xs:text-start text-gray-500/90 font-quicksand'>
                ** Once you have created the image you want,you can share it with others in the community**
            </p>
            <button className='block xs:mx-0 mx-auto  text-white font-[600] xs:mr-5 bg-gradient-to-r font-WorkSans mt-4 text-md from-blue-600 to-blue-700 rounded-lg px-4 py-2'>Share</button>
        </div>
    </div>
  )
}