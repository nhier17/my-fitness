import React, { useState } from 'react';
import { base_url } from '../utils/api';
import { useScrollAnime } from '../animation'
import { Timer } from '../components';

const StartWorkout = ({ location }) => {
    useScrollAnime();
    
  const selectedExercises = location.state?.exercises || [];

  //weight, reps and sets for each exercise
  const [weight, setWeight] = useState({})
  const [reps, setReps] = useState({})
  const [sets, setSets] = useState({})
  const [exerciseLogs, setExerciseLogs] = useState({})  
    
    const handleWeightChange = (exerciseId, value) => {
        setWeight((prevWeight) => ({prevWeight, [exerciseId]: value}))
    };

    const handleRepsChange = (exerciseId, value) => {
        setReps((prevReps) => ({ ...prevReps, [exerciseId]: value}))
    };
    const handleSetsChange = (exerciseId, value) => {
        setSets((prevSets) => ({ ...prevSets, [exerciseId]: value}))
    };

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Start Workout</h1>
        <div className="flex flex-col mb-4">
            <div className="time-elasped"><Timer/></div>
        </div>
        {selectedExercises.length > 0 ? (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedExercises.map((exercise, index) => (
                        <div id="image" key={index} className="border rounded overflow-hidden shadow-lg p-4 m-2 animate-on-scroll">
                            <h3 className="font-bold text-lg mb-2">{exercise.name}</h3>
                            <img id="image" className="w-full" src={base_url + exercise.image} alt={exercise.name} />
                            <div className="flex gap-1 mt-2 flex-col">
                            <input
                                className="w-1/2 border rounded py-2 px-3 text-black"
                                 value={weight[exercise._id] || ''}   
                                 type="number"
                                 placeholder="Weight"
                                 onChange={(e) => handleWeightChange(exercise._id, e.target.value)} 
                                 />
                                <input
                                className=" w-1/2 border rounded py-2 px-3 text-black"
                                 value={sets[exercise._id] || ''}   
                                 type="number"
                                 placeholder="Sets"
                                 onChange={(e) => handleSetsChange(exercise._id, e.target.value)} 
                                 />
                                  <input
                                className="w-1/2 border rounded py-2 px-3 text-black"
                                 value={reps[exercise._id] || ''}   
                                 type="number"
                                 placeholder="Reps"
                                 onChange={(e) => handleRepsChange(exercise._id, e.target.value)} 
                                 />
                            </div>
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
