import React from 'react'
import { Hero, Explore, Membership, Trainers } from "../components";
import { motion } from 'framer-motion';

const Home = () => {
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
    </motion.div>
  )
}

export default Home