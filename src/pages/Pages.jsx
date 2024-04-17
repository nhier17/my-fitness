import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nutrition from './Nutrition'
import {  Signup, Login, Dashboard} from '../components'
import Home from './Home';
import Recipe from "./Recipe"
import Community from './Community';

const Pages = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />   
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/recipe/:name" element={<Recipe/>} />
      <Route path="/community" element={<Community/>} />
      </Routes>
    </div>
  )
}

export default Pages
