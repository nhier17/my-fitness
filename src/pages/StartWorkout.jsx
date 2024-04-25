import React from 'react';
import { base_url } from '../utils/api';
import { useScrollAnime } from '../animation'

const StartWorkout = ({ location }) => {
    useScrollAnime();
    
  const selectedExercises = location.state?.exercises || [];

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Start Workout</h1>
        {selectedExercises.length > 0 ? (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedExercises.map((exercise, index) => (
                        <div id="image" key={index} className="border rounded overflow-hidden shadow-lg animate-on-scroll">
                            <h3 className="font-bold">{exercise.name}</h3>
                            <img id="image" className="w-full" src={base_url + exercise.image} alt={exercise.name} />
                        </div>
                    ))}
                </div>
                <button className="mt-4 bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-4 rounded">
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
