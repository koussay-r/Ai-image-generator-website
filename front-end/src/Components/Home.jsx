import React, { useContext, useEffect, useState } from 'react'
import { messangerContext } from '../App'
import axios from "axios"
import { createContext } from 'react'
import messangerLogo from "./../assets/messangerLogo.png"
import ContactsSection from './contacts/ContactsSection'
import MessagesSection from './messages/MessagesSection'
export const messagesContext=createContext()
export const showMessageSectionContext=createContext()
export default function Home() {
  const value=useContext(messangerContext)
  const [showMessageSection,setShowMessageSection]=useState(false)
  const [theTwoMessageUsers,setTheTwoMessageUsers]=useState([])
  const values=value[0]
  const [users,setUsers]=useState([])
  useEffect(()=>{
      axios.post("http://localhost:9000/usersData",{name:values.displayName,pfp:values.photoURL,email:values.email}) 
},[values])
    useEffect(()=>{
      const handleUsersapi= async ()=>{
          try{
              const responseUsers=await axios.get("http://localhost:9000/users")
              setUsers(responseUsers.data)
          }catch(err){
              console.log(err)
          }
      }
      handleUsersapi();
  },[])
    return (
    <div className='flex'>
      <messagesContext.Provider value={[theTwoMessageUsers,setTheTwoMessageUsers]}>
        <showMessageSectionContext.Provider value={[showMessageSection,setShowMessageSection]}>
      <div className={`sm:w-1/3 ${showMessageSection ? "md:block hidden": "md:block"}`}>
        <ContactsSection user={users} />
      </div>
      {showMessageSection?
      <div className={`${showMessageSection ? "md:block block ": "hidden"}`}>
      <MessagesSection/>
    </div> 
      : 
      <div className='flex justify-center items-center'>
        <img src={messangerLogo} alt="" className='w-[200px] md:block hidden absolute left-[60%] top-[40%] h-[200px]'/>
      </div>
      }
      </showMessageSectionContext.Provider>
      
      </messagesContext.Provider>
    </div>
  )
}
