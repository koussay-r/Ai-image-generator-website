import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from './../assets/OpenAI_Logo.png'
export default function Navbar() {
    const loca=useLocation()
  return (
    <div className='flex z-[100] pt-3 border fixed top-0 bg-white right-0 left-0 border-transparent border-b-slate-300 pb-4 shadow-sm justify-between'>
        <img src={logo} alt="" className='w-[130px] ml-5  mt-[4px] h-[28px]'/>
        <button className='text-white font-[600] mr-5 bg-gradient-to-r text-md from-blue-600 to-blue-700 rounded-lg px-4 py-2'>{
            loca.pathname==="/collection"?
            
            <Link to="/">Create</Link>
            :
            
            <Link to="/collection">Accueil
            </Link>
        
        }</button>
    </div>
  )
}
