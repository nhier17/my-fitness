import React from 'react'
import { Hero, Explore, Membership, Trainers, Clients } from "../components";
import { motion } from 'framer-motion';
import { useScrollAnime } from '../animation'

const Home = () => {
  useScrollAnime();
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.75}}
    >
      <Hero />
      <Explore />
      <Trainers />
      <Membership />
      <Clients />
    </motion.div>
  )
}

export default Home