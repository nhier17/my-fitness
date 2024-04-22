import React from 'react'
import { exercises } from '../constants';
import { useTitleAnime, useCardAnime } from '../animation';

const Workout = () => {
  useTitleAnime()
  useCardAnime()
  return (
    <div className="mt-20">
      <h2 id="title" className="text-3xl md:text-4xl text-purple-700 text-start md:text-center p-2 md:p-4 opacity-0 translate-y-20">
        Our Training Programs
        </h2>
      <div  id="workout" className="flex overflow-x-auto overflow-y-hidden  opacity-0"
       style={{'scrollbarWidth': 'none','::WebkitScrollbar': { 'display': 'none' }}}>
      {exercises.map((exercise) =>(
        <div  className="flex-shrink-0 mx-4" key={exercise.id}>
        <div className="rounded-md overflow-hidden shadow-md text-center transition duration-300 transform hover:scale-105" 
        style={{ width: '300px', height: '400px' }}>
          <img className="w-full h-[200px] object-cover" src={exercise.img} alt={exercise.alt} />
          <div className="bg-gray-800 text-white p-4">
          <h3 className="text-white text-lg font-semibold">{exercise.title}</h3>
          <p className="text-white text-sm">{exercise.description}</p>  
          </div>
        </div>
        </div>
      ))}
      </div>
      <h2 id="title"
       className="text-3xl md:text-4xl text-purple-700 md:text-center text-start p-4 font-semibold opacity-0 translate-y-20 mt-2 md:mt-10">
        Time to Grind
        </h2>
    </div>
  )
}

export default Workout

