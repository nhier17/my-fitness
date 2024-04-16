import React from 'react'
import { services } from '../constants';


const Explore = () => {
  return (
    <div className="explore-container mt-10">
    <h2 className="mb-8 md:text-[5rem] text-4xl text-center">Programs for <span className="text-red-500">You</span></h2>
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-item bg-gray-800">
          <div className="service-content">
            <img src={service.icon} alt={service.alt} className="service-icon" />
            <h3 className="text-2xl p-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Explore