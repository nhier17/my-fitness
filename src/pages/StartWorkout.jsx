import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnime } from '../animation';
import { ExerciseCard } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const StartWorkout = () => {
    const navigate = useNavigate();
    useScrollAnime();
    
  const { selectedExercises } = useStateContext();
//proceed to start your workout
  const proceedToWorkout = () => {
        navigate('/begin-workout',{exercises: selectedExercises } )

    };
    

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Workouts of the day</h1>
        {selectedExercises.length > 0 ? (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedExercises.map((exercise) => (
                         <ExerciseCard 
                         key={exercise._id} 
                         exercise={exercise} 
                          /> 
                    ))}
                </div> 
                <button className="mt-4 bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-4 rounded" onClick={proceedToWorkout}>
                    Start Workout
                </button>
            </div>
        ) : (
            <p>No exercises selected for the workout.</p>
        )}
    </div>
    );
};

export default StartWorkout;
