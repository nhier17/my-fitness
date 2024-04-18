import React from 'react'
import { services } from '../constants';
import { photoAnim } from '../animation';


const Explore = () => {
  return (
    <div className="explore-container mt-10">
    <h2 className="mb-8 md:text-[5rem] text-4xl text-center text-white">Programs for <span className="text-red-700">You</span></h2>
    <div className="flex flex-wrap md:gap-4 gap-1">
      {services.map((service, index) => (
        <div key={index} className="service-item bg-gray-800 ">
          <div className="p-7 text-center">
            <img src={service.icon} alt={service.alt} className="w-14 h-14 object-cover m-auto" />
            <h3 className="text-2xl p-4 text-white">{service.title}</h3>
            <p className="text-lg text-[#ccc]">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Explore