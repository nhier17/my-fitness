import React,{ useState } from 'react'
import { base_url } from '../utils/api'
import { FaPlus,FaMinus } from "react-icons/fa";

const ExerciseCard = ({ addToWorkout,removeFromWorkout,  exercise }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="container border rounded overflow-hidden shadow-lg animate-on-scroll">
      <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-zoom-in w-auto overflow-hidden transition-all duration-500 ease-in-out">
         <img className="w-full" src={base_url+exercise.image} alt={exercise.name} />
         {isHovered && (
          <div className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50">
            <div className="flex items-center justify-between">
            <button onClick={() => removeFromWorkout(exercise)} className="bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-2 rounded">
                    <FaMinus />
                </button>
                <button onClick={() => addToWorkout(exercise)} className="bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-2 rounded">
                    <FaPlus />
                </button>
            </div>
          </div>
         )}
         </div>
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{exercise.name}</h2>
               
            </div>
    </div>
  )
}

export default ExerciseCard
