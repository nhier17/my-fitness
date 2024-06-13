import React,{ useState } from 'react'
import { base_url } from '../utils/api'
import { FaPlus,FaMinus } from "react-icons/fa";
import { useStateContext } from '../contexts/ContextProvider';

const ExerciseCard = ({  exercise }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWorkout, removeFromWorkout } = useStateContext();
  
  return (
    <div className="container mx-auto my-4 overflow-hidden max-w-sm rounded-md animate-on-scroll">
      <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-zoom-in max-w-screen-md overflow-hidden">
         <img 
         className="w-full h-[360px] object-cover transition-transform duration-300 ease-in-out"
          src={base_url+exercise.image}
          alt={exercise.name}
          loading="lazy"
           />
         {isHovered && (
          <div className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50">
            <div className="flex items-center justify-between">
            <button onClick={() => removeFromWorkout(exercise)} className="bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    <FaMinus />
                </button>
                <button 
                onClick={() => addToWorkout(exercise)}
                 className="bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    <FaPlus />
                </button>
            </div>
          </div>
         )}
         </div>
            <div className="px-6 py-4 bg-violet-700 capitalize7">
                <h2 className="font-bold text-lg mb-2">{exercise.name}</h2>
            </div>
    </div>
  )
}

export default ExerciseCard
