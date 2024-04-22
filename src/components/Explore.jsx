import React from 'react'
import { useTitleAnime, useCardAnime } from '../animation'
import { services } from '../constants';


const Explore = () => {
useTitleAnime();
useCardAnime();
  return (
    <div className="explore-container mt-20">
    <h2 id="title" className="md:mb-8 mb-4 md:text-[5rem] text-4xl md:text-center text-start text-gray-50 opacity-0 translate-y-20">Programs for <span className="text-purple-700">You</span></h2>
    <div id="workout" className="flex flex-wrap justify-center md:gap-4 gap-1">
      {services.map((service, index) => (
        <div key={index} className="service-item bg-gray-800">
          <div className="p-7 text-center">
            <img src={service.icon} alt={service.alt} className="w-14 h-14 object-cover m-auto" />
            <h3 className="text-2xl p-4 text-purple-700 font-bold">{service.title}</h3>
            <p className="text-lg text-[#ccc]">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Explore