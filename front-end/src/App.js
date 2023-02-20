import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from "./Components/Collection";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
export const PostingLoadingContext=createContext()
export default function App() {
  const [PostingLoading,setPostingLoading]=useState(false)
  return (
    <div className="w-full">
        <PostingLoadingContext.Provider value={[PostingLoading,setPostingLoading]}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/collection"  element={<Collection/>}/>
      </Routes>
      </BrowserRouter>
        </PostingLoadingContext.Provider>
    </div>    
    )}