import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';
import ExerciseCard from './ExerciseCard';
import { useScrollAnime } from '../animation'
import { getExerciseData, proceedToWorkoutData } from '../utils/api';
import { useStateContext } from '../contexts/ContextProvider';

const Exercise = ({ selectedCategory}) => {
    const navigate = useNavigate();
    const {exercises, setExercises, selectedExercises, setSelectedExercises} = useStateContext();

    useScrollAnime();

    useEffect(() => {
        const fetchData = async () => {
          const data = await getExerciseData(selectedCategory)

          setExercises(data.exercises)
        }
        fetchData();
    }, [selectedCategory,setExercises]);

    //add to workout 
    const addToWorkout = (exercise) => {
        setSelectedExercises((prevSelectedExercises) => [...prevSelectedExercises, exercise])
        toast.success(`${exercise.name} added to workout`)
    };

    //remove from workout
    const removeFromWorkout = (exercise) => {
        setSelectedExercises((prevSelectedExercises) => prevSelectedExercises.filter((e) => e._id!== exercise._id))
        toast.success(`${exercise.name} removed from workout`)
    };

    //proceed to workout
    const proceedToWorkout = async () => {
       try {
        const success = await proceedToWorkoutData(selectedExercises)
        if (success) {
            navigate('/start-workout' , { state: { exercises: selectedExercises } })
        } else {
            toast.error('Failed to start workout')
        }
       } catch (error) {
        console.error('Error starting workout',error)
       } 
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
              addToWorkout={addToWorkout}
              removeFromWorkout={removeFromWorkout}
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
