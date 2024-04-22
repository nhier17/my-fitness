import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from "react-router-dom";
import hero from "../assets/hero2.jpg";
import db from "../assets/db.jpeg";


const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero', {
      delay: 1.5,
      opacity: 1,
    })
  }, [])
  return (
    <div className="relative w-full  overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center z-0 w-full"
      style={{
        backgroundImage: `url(${db})`,
        opacity: 0.9
        }}
    ></div>
    <div className="relative z-20 mx-auto px-4 py-8 flex items-center">
      <div className="flex-1 md:pr-8">
        <h2 id="hero" className="hero-title text-3xl md:text-4xl lg:text-7xl font-bold leading-tight mb-4 ">
          Yeah <span className="text-purple-700">Buddy!</span>
        </h2>
        <p className="text-white font-medium text-lg md:text-2xl mb-8">
          Either you run the day <br />
          Or The day runs you!
        </p> 
        <div className="flex gap-2">
          <Link to="/signup" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-block transition duration-300">
            Signup
          </Link>
          <Link className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-block transition duration-300">
            Explore
          </Link>
        </div>
      </div>
      <div className="clip-triangle flex-1 pl-8 overflow-hidden">
        <img src={hero} alt="Hero" className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-contain md:object-cover rounded-md overflow-hidden transition duration-300 transform hover:scale-105" />
      </div>
    </div>
  </div>
  );
};

export default Hero;
