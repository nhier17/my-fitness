import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Nutrition from './Nutrition'
import {  Signup, Login, Dashboard,UserProfile } from '../components'
import Home from './Home';
import Recipe from "./Recipe"
import Community from './Community';
import StartWorkout from './StartWorkout';
import BeginWorkout from './BeginWorkout';
import About from './About';
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
       <Route path="/user-profile" element={<UserProfile/>} /> 
       <Route path="/about" element={<About/>} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/recipe/:name" element={<Recipe/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/workouts" element={<Workout/>} />
      <Route path="/start-workout" element={<StartWorkout location={location}/>} />
      <Route path="/begin-workout" element={<BeginWorkout location={location}/>} />
      </Routes>
      </AnimatePresence>
    </motion.div>
  )
}

export default Pages
