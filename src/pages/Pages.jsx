import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Nutrition from './Nutrition'
import {  Signup, Login, Dashboard, Workout } from '../components'
import Home from './Home';
import Recipe from "./Recipe"
import Community from './Community';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />   
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/recipe/:name" element={<Recipe/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/workouts" element={<Workout/>} />
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages
