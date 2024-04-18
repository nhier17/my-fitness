import React from 'react';
import { Link } from "react-router-dom";
import hero from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 h-screen">
      <img
        src={hero}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
      <div className="absolute inset-0 flex flex-col justify-end z-10">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Yeah <span className="text-purple-700">Buddy!</span>
          </h2>
        </div>
        <p className="text-white font-medium text-lg md:text-xl mb-8 text-center">
          Either you run the day or <br />
          The day runs you!
        </p>
        <div className="mt-4 mb-10 mx-auto flex flex-col md:flex-row gap-2 justify-center">
        <Link to="signup">
        <button className="bg-purple-700 text-white font-semibold text-lg uppercase w-48 h-16 rounded-lg border-none cursor-pointer overflow-hidden shadow-md mb-2 md:mb-0">
            Sign up
          </button>
        </Link>
        <button className="bg-purple-700 text-white font-semibold text-lg uppercase w-48 h-16 rounded-lg border-none cursor-pointer overflow-hidden shadow-md mb-2 md:mb-0">
            EXplore
          </button>
        </div>
      </div>
      </div>
  );
};

export default Hero;
