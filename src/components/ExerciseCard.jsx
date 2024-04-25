import React from 'react'
import { base_url } from '../utils/api'

const ExerciseCard = ({ addToWorkout, exercise }) => {
  return (
    <div className="border rounded overflow-hidden shadow-lg animate-on-scroll">
         <img className="w-full transition duration-300 transform hover:scale-105" src={base_url+exercise.image} alt={exercise.name} />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{exercise.name}</h2>
                <button onClick={() => addToWorkout(exercise)} className="bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-4 rounded">
                    Add to Workout
                </button>
            </div>
    </div>
  )
}

export default ExerciseCard
