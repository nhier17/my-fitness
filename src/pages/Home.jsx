import React from 'react'
import { Hero, SearchExercises, Explore } from "../components";
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
      <SearchExercises />
      <Explore />
    </motion.div>
  )
}

export default Home