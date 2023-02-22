import React, { useState } from 'react'
import Login from './components/login'
import { createContext } from 'react'
import Home from './components/Home';
export const messangerContext=createContext();
export default function App() {
  const [value,setValue]=useState([])
  
  return (
    <div>
      <messangerContext.Provider value={[value,setValue]}>
        {value.length!==0?
        <Home />
        :<Login/>}
      </messangerContext.Provider>
      
    </div>
  )
}
