import React from 'react'
import { aboutContents } from '../constants';
import { FaUser, FaHeart, FaDumbbell } from 'react-icons/fa';
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
    pagination: false,
    drag: 'free',
    perPage: 3, 
    gap: 20, 
    breakpoints: {
      640: {
        perPage: 1, 
      },
    },
  };
  
  const images = [fitness2, fitness, fitness1,fitness3, fitness4, fitness5];

  return (
    <div className="container mx-auto px-4 py-8 animate-on-scroll">
      <h1 id="title" className="md:text-3xl text-2xl font-bold mb-8 md:text-center text-start text-purple-700 opacity-0 translate-y-20">
        Welcome to FitFusion: <br /> Your Ultimate Fitness Companion
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
      {aboutContents.map((content) => (
        <div key={content.id} className="block mb-4 p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition duration-300 hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            {content.icon === FaDumbbell && (
              <FaDumbbell className="text-4xl text-blue-500" />
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
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <p className="text-lg leading-relaxed mb-8">
          At FitFusion, we're passionate about health and fitness. Our team is
          comprised of dedicated professionals who are committed to helping you
          reach your full potential.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Join the FitFusion Community
        </h2>
        <p className="md:text-lg text-base leading-relaxed mb-8">
          Fitness is more fun when you do it together. Join our vibrant
          community of fitness enthusiasts from around the world.
        </p>
        </div>
          <div className="mx-auto overflow-x-hidden">
            <Splide options={splideOptions}>
            {images.map((image, i) => (
              <SplideSlide key={i}>
                <div className="flex items-center justify-center overflow-hidden">
                <img src={image} alt="fitnessfusion" className="w-[400px] h-[400px] rounded-lg object-cover mb-8 overflow-hidden" />
                </div>
                </SplideSlide>
            ))}
            </Splide>
          </div>
          <div className="mx-auto my-8 animate-on-scroll">
            <h2 className="text-2xl font-bold">Testimonials</h2>
            <div>
              <Testimonials />
            </div>
          </div>
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
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
