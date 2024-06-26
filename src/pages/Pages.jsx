import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import {  Signup, Login, UserProfile } from '../components'
import { Home, About, Nutrition, Workout, StartWorkout, BeginWorkout, Community, Recipe, Settings } from '.';
import { motion, AnimatePresence } from 'framer-motion';


const Pages = () => {
  const location = useLocation();
  return (
    <motion.div>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} /> 
       <Route path="/profile" element={<UserProfile/>} /> 
       <Route path="/about" element={<About/>} /> 
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/recipe/:name" element={<Recipe/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/workouts" element={<Workout/>} />
      <Route path="/start-workout" element={<StartWorkout/>} />
      <Route path="/begin-workout" element={<BeginWorkout/>} />
      <Route path="/settings" element={<Settings />} />
      </Routes>
      </AnimatePresence>
    </motion.div>
  )
}

export default Pages
