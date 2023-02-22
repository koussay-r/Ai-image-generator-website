import React, { useContext, useEffect, useState } from 'react'
import {IoIosArrowBack,IoMdSend} from "react-icons/io";
import {BiDotsVerticalRounded} from "react-icons/bi"
import {AiFillLike} from "react-icons/ai"
import { messagesContext, showMessageSectionContext } from '../Home';
import { messangerContext } from '../../App';
import Pusher from "pusher-js"
import axios from 'axios';
export default function MessagesSection() {
    const [showMessageSection,setShowMessageSection]=useContext(showMessageSectionContext)
    // the cuurent user data
    const value=useContext(messangerContext)
    // delete button 
    const [showDeletebutton,setshowDeleteButton]=useState(false)
    // the messages from db will be stored in this array
    const [usersMessages,setUsersMessages]=useState([])
    // the two users of the current conversation 
    const [theTwoMessageUsers,setTheTwoMessageUsers]=useContext(messagesContext)
    useEffect(()=>{
        // gets the messages from the db
        var pusher = new Pusher('0d8cf22564509b818c0d', {
            cluster: 'eu'
          });
      
          var channel = pusher.subscribe('messages');
          channel.bind('inserted', function(data) {
            setUsersMessages([...usersMessages,data])
            
          });
          return ()=>{
            channel.unbind_all();
            channel.unsubscribe()
          }
    },[usersMessages])
    //gets the previous messages from db
    useEffect(()=>{
    },[])
    //show or not the messages section
    const handleMessagesShowSection=()=>{
        setShowMessageSection(false)
    }
    // the message value
    const [messageValue,setMessageValue]=useState("")
    // handles the apperance of the delete conversation button
    const handleDeleteButton=()=>{
        setshowDeleteButton(!showDeletebutton)
    }
    // gets the input value
    const handleMessageValue=(e)=>{
        setMessageValue(e.target.value)
    }
    //this function sends the message
    const handleSendingMsg=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="text-white absolute md:w-2/3 w-full top-0 bottom-0">
        <div className='w-full border border-transparent border-b-gray-800 pb-[11px] flex justify-between'>
            <div className='flex mt-5'>
                <IoIosArrowBack  color='white' onClick={handleMessagesShowSection} className='cursor-pointer mt-[3px] md:hidden block ' size={30}/>
                {<img src={theTwoMessageUsers[3]} className="rounded-full md:ml-7 w-[35px] h-[35px]" alt=""/>}
                {<p className='ml-1 mt-[6px] text-sm'>{theTwoMessageUsers[2]}</p>}
            </div>
            <div className='flex'>
            <button className={`text-black ${showDeletebutton? "block" : "hidden"} font-[600] text-sm bg-blue-600 rounded-b-lg rounded-l-lg py-1 mt-[18px] px-2`} >Delete Messages</button>
                <BiDotsVerticalRounded color='white' onClick={handleDeleteButton} className=' cursor-pointer mt-5' size={25}/>
            </div>
        </div>
        <div className='overflow-y-scroll absolute top-[66px] w-full bottom-16'>
            
        </div>
        <div className='flex absolute border border-transparent border-t-gray-800 pt-3 w-full justify-center bottom-0 mx-auto'>
                    <form className='w-full' onSubmit={handleSendingMsg} >
            <div className='flex mb-3 w-full'>
                <div className='bg-[#2c2c2c] ml-5 rounded-2xl w-[90%]'>
            <input type={"text"} value={messageValue} onChange={handleMessageValue} className=" w-[90%]  bg-transparent outline-none rounded-2xl pl-3 h-10 text-white" placeholder={"Message"}/></div><AiFillLike className={`${messageValue.length>0 ? "hidden" : "block mr-2 cursor-pointer mt-[5px] ml-2"}`} color="#2596be" size={30}/><IoMdSend onClick={handleSendingMsg} color="#2596be" className={`${messageValue.length>0 ? "block cursor-pointer mr-2 mt-[5px] ml-2" : "hidden"}`} size={30}/>
                    
            </div>
                    </form>

        </div>
    </div>
  )
  }