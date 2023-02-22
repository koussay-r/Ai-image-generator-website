import axios from 'axios'
import React, { useContext } from 'react'
import { messangerContext } from '../../App'
import { messagesContext, showMessageSectionContext } from '../Home'

export default function UserMessage(props) {
  const [showMessageSection,setShowMessageSection]=useContext(showMessageSectionContext)
  const [theTwoMessageUsers,setTheTwoMessageUsers]=useContext(messagesContext)
  const value=useContext(messangerContext)
  const handleMessageUsersNames=()=>{
    setShowMessageSection(true)
    setTheTwoMessageUsers([props.name+value[0].displayName,value[0].displayName+props.name,props.name,props.pfp])
    axios.post("http://localhost:9000/makeMessages/Collection",{nameColl:(props.name+value[0].displayName).replace(/\s+/g,"")})
}
  return (
    <div key={props.key} onClick={handleMessageUsersNames} className=' active:bg-gray-500  active:bg-opacity-10  w-full h-16'>
        <div className='flex  w-fit mt-2 ml-2'>
            <img src={props.pfp} alt={props.name} className="w-[40px] mt-1 rounded-full text-white text-sm h-[40px]"/>
            <p className='text-white ml-3 text-md'>{props.name}</p>
        </div>
    </div>
  )
}
