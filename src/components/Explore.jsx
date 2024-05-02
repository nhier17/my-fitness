import React from 'react'
import { useTitleAnime, useCardAnime } from '../animation'
import { services } from '../constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

const Explore = () => {
useTitleAnime();
useCardAnime();

const splideOptions = {
  type: 'loop',
  autoplay: true,
  interval: 4000, 
  pauseOnHover: true,
  resetProgress: false,
  arrows: false,
  drag: 'free',
  perPage: 3, 
  gap: 20, 
  breakpoints: {
    640: {
      perPage: 1, 
    },
  },
};

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
    <h2 id="title" className="md:mb-8 mb-4 md:text-[5rem] text-4xl md:text-center text-start text-gray-50 opacity-0 translate-y-20">Programs for <span className="text-purple-700">You</span></h2>
    <div id="workout" className="services">
      <Splide options={splideOptions}>
      {services.map((service, index) => (
      <SplideSlide key={index}>
        <div  className="bg-gray-800 flex-1 text-center mb-10 mr-5 rounded-md overflow-hidden min-w-[300px] transition duration-300 hover:scale-105">
          <div className="p-7 text-center">
            <img src={service.icon} alt={service.alt} className="w-14 h-14 object-cover m-auto" />
            <h3 className="text-2xl p-4 text-purple-700 font-bold">{service.title}</h3>
            <p className="text-lg text-[#ccc]">{service.description}</p>
          </div>
        </div>
        </SplideSlide>
      ))}
      </Splide>
    </div>
  </div>
  )
}

export default Explore