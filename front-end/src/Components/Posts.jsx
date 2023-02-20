import React from 'react'

export default function Posts(props) {
  return (
    <div className='group mb-10 relative w-[350px]'>
        <img src={props.image} alt="" className='w-[350px] rounded-md cursor-pointer  h-[300px]'/>
        <div className=' absolute bottom-0 cursor-pointer p-2 w-full group-hover:block hidden bg-black/70'>
            <p className='text-white font-Montserrat font-[600]'>{props.name}</p>
            <p className='text-white'>{props.prompt}</p>
        </div>
    </div>
  )
}
