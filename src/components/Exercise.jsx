import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ExerciseCard from './ExerciseCard';
import { useScrollAnime } from '../animation'
import { getExerciseData } from '../utils/api';
import { useStateContext } from '../contexts/ContextProvider';

const Exercise = ({ selectedCategory}) => {
    const navigate = useNavigate();
    const {exercises, setExercises, selectedExercises} = useStateContext();

    useScrollAnime();

    useEffect(() => {
        const fetchData = async () => {
          const data = await getExerciseData(selectedCategory)
          setExercises(data.exercises)
        }
        fetchData();
    }, [selectedCategory,setExercises]);


    //proceed to workout
    const proceedToWorkout = async () => {
      navigate('/start-workout' ,  { exercises: selectedExercises })
    }
    //filter exercises based on category
    const filteredExercises = selectedCategory
     ? exercises.filter((exercise) => exercise.category === selectedCategory)
      : exercises;

  return (
    <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredExercises.map((exercise) => (
              <ExerciseCard 
              key={exercise._id} 
              exercise={exercise} 
               />
                ))}
            </div>
            {selectedExercises.length > 0 && (
                <button onClick={proceedToWorkout} className="mt-4 bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-4 rounded">
                    Proceed to Workout
                </button>
            )}
        </div>
  )
}

export default Exercise
