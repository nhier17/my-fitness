import React from 'react'
import { exercises } from '../constants';
import { Exercise } from '../components';

const Workout = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-purple-700 text-center p-4 uppercase">Our Training Programs</h2>
      <div className="flex overflow-x-auto" style={{'scrollbarWidth': 'none','::WebkitScrollbar': { 'display': 'none' }}}>
      {exercises.map((exercise) =>(
        <div className="flex-shrink-0 mx-4" key={exercise.id}>
        <div className="rounded-md overflow-hidden shadow-md text-center" style={{ width: '300px', height: '300px' }}>
          <img className="w-full h-[200px] object-cover" src={exercise.img} alt={exercise.alt} />
          <div className="bg-gray-400 text-white p-4">
          <h3 className="text-white text-lg font-semibold">{exercise.title}</h3>
          <p className="text-white p-2">{exercise.description}</p>  
          </div>
        </div>
        </div>
      ))}
      </div>
      <h2 className="text-3xl text-purple-700 text-center p-4 uppercase">time to grind</h2>
      <Exercise />
    </div>
  )
}

export default Workout

