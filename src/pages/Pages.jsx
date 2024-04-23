import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Nutrition from './Nutrition'
import {  Signup, Login, Dashboard } from '../components'
import Home from './Home';
import Recipe from "./Recipe"
import Community from './Community';
import { motion, AnimatePresence } from 'framer-motion';
import Workout from './Workout';

const Pages = () => {
  const location = useLocation();
  return (
    <motion.div>
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
    </motion.div>
  )
}

export default Pages
