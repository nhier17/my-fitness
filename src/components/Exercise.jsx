import React, { useState, useEffect } from 'react'
import { useScrollAnime } from '../animation'
import { getExerciseData, base_url } from '../utils/api';

const Exercise = ({ selectedCategory}) => {
    const [exercises, setExercises] = useState([])
    useScrollAnime();

    useEffect(() => {
        const fetchData = async () => {
          const data = await getExerciseData(selectedCategory)

          setExercises(data.exercises)
        }
        fetchData();
    }, [selectedCategory]);

    //filter exercises based on category
    const filteredExercises = selectedCategory
     ? exercises.filter((exercise) => exercise.category === selectedCategory)
      : exercises;
  return (
    <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredExercises.map((exercise) => (
                    <div key={exercise._id} className="border rounded overflow-hidden shadow-lg animate-on-scroll">
                        <img className="w-full" src={base_url+exercise.image} alt={exercise.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{exercise.name}</div>
                            <p className="text-gray-700 text-base">{exercise.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Exercise
