import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from "./Components/Collection";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
export default function App() {
  
  return (
    <div className="w-full">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/collection"  element={<Collection/>}/>
      </Routes>
      </BrowserRouter>
    </div>    
    )}