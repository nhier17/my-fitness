import React from 'react'
import { trainer } from '../assets';

const Trainers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg m-auto">
        <div className="p-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-4">Meet Our Trainers</h2>
          <p className="text-lg text-gray-300 mb-8">Get trained by experienced professionals</p>
          <div className="flex items-center">
            <img src={trainer} alt="trainer" className="w-[200px] h-[200px] rounded-lg object-cover mr-4 md:mr-1" />
            <div>
              <h3 className="text-xl md:text-sm font-semibold text-white text-center">John Doe</h3>
              <p className="text-gray-300 text-center">Specialty: Strength Training</p>
              <p className="text-gray-300 text-center">Experience: 10+ years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainers
