import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Exercise = ({ selectedCategory}) => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const getExercises = async () => {
          const response = await axios.get('https://my-fitness-api.onrender.com/api/exercise', {
            params: {
              category: selectedCategory
            }
          }) ;
          setExercises(response.data.exercises)
        }
        getExercises()
    }, [selectedCategory]);

    const image_url = 'https://my-fitness-api.onrender.com';

    //filter exercises based on category
    const filteredExercises = selectedCategory
     ? exercises.filter((exercise) => exercise.category === selectedCategory)
      : exercises;
  return (
    <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredExercises.map((exercise) => (
                    <div key={exercise._id} className="border rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={image_url+exercise.image} alt={exercise.name} />
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
