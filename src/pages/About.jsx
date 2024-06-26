import React from 'react'
import { aboutContents } from '../constants';
import { FaUser, FaHeart, FaDumbbell } from 'react-icons/fa';
import { FaBowlFood } from "react-icons/fa6";
import { apple, google, fitness2, fitness, fitness1,fitness3, fitness4, fitness5 } from '../assets';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { useTitleAnime, useScrollAnime } from '../animation';
import { Testimonials } from '../components';

const About = () => {
  useTitleAnime();
  useScrollAnime();

  const splideOptions = {
    type: 'loop',
    autoplay: true,
    interval: 4000, 
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    perPage: 3, 
    gap: '1rem', 
    focus: 'center',
    breakpoints: {
      640: {
        perPage: 1, 
      },
    },
  };
  
  const images = [fitness2, fitness, fitness1,fitness3, fitness4, fitness5];

  return (
    <div className="container mx-auto px-4 py-8 animate-on-scroll overflow-x-hidden">
      <h1 id="title" className="md:text-3xl text-2xl font-bold mb-8 md:text-center text-start text-purple-700 opacity-0 translate-y-20">
        Welcome to MyFitness: <br /> Your Ultimate Fitness Companion
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
      {aboutContents.map((content) => (
        <div key={content.id} className="block mb-4 p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition duration-300 hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            {content.icon === FaDumbbell && (
              <FaDumbbell className="text-4xl text-blue-500" />
            )}
            {content.icon === FaBowlFood && (
              <FaBowlFood className="text-4xl text-yellow-500" />
            )}
            {content.icon === FaHeart && (
              <FaHeart className="text-4xl text-red-500" />
            )}
            {content.icon === FaUser && (
              <FaUser className="text-4xl text-green-500" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-purple-700">{content.title}</h2>
          <p className="text-lg leading-relaxed text-black">{content.description}</p>
        </div>
      ))}
      </div>
      <div className="animate-on-scroll mt-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Meet the Team</h2>
        <p className="text-lg leading-relaxed mb-8">
          At MyFitness, we're passionate about health and fitness. Our team is
          comprised of dedicated professionals who are committed to helping you
          reach your full potential.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          Join MyFitness Community
        </h2>
        <p className="md:text-lg text-base leading-relaxed mb-8">
          Fitness is more fun when you do it together. Join our vibrant
          community of fitness enthusiasts from around the world.
        </p>
        </div>
          <div className="animate-on-scroll">
            <Splide options={splideOptions}>
            {images.map((image, i) => (
              <SplideSlide key={i}>
                <img src={image} alt="fitnessfusion" className="w-[400px] h-[400px] rounded-lg object-cover mb-8 overflow-hidden" />
                </SplideSlide>
            ))}
            </Splide>
          </div>
          <div className="mx-auto my-8 animate-on-scroll">
            <div>
              <Testimonials />
            </div>
          </div>
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Ready to Get Started?</h2>
        <p className="md:text-lg text-base leading-relaxed mb-8">
          It's time to take the first step towards a healthier, happier you.
          Download the FitFusion app today and start your fitness journey with
          us.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="Download on the App Store" />
          <img src={google} alt="Get it on Google Play" />
        </div>
      
    </div>
  )
}

export default About
