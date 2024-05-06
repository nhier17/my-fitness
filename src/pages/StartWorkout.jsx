import React from 'react';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../utils/api';
import { useScrollAnime } from '../animation'

const StartWorkout = ({ location }) => {
    const navigate = useNavigate();
    useScrollAnime();
    
  const selectedExercises = location.state?.exercises || [];

  const startWorkoutHandler = () => {
        navigate('/begin-workout',{ state: {exercises: selectedExercises } })

    };
    

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Workouts of the day</h1>
        {selectedExercises.length > 0 ? (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedExercises.map((exercise, index) => (
                        <div key={index} className="border rounded overflow-hidden shadow-lg animate-on-scroll">
                            <img className="w-full transition duration-300 transform hover:scale-105" src={base_url + exercise.image} alt={exercise.name} />
                            <h3 className="font-bold text-lg mb-2 text-center px-6 py-4">{exercise.name}</h3>
                        </div>
                    ))}
                </div> 
                <button className="mt-4 bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-4 rounded" onClick={startWorkoutHandler}>
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
