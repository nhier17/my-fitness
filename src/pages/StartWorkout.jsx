import React, { useState } from 'react';
import { base_url } from '../utils/api';
import { useScrollAnime } from '../animation'
import { Timer, ExerciseLog } from '../components';

const StartWorkout = ({ location }) => {
    useScrollAnime();
    
  const selectedExercises = location.state?.exercises || [];

  //weight, reps and sets for each exercise
  const [weight, setWeight] = useState({})
  const [reps, setReps] = useState({})
  const [sets, setSets] = useState({})
  const [exerciseLogs, setExerciseLogs] = useState([])  
   const [workoutStarted, setWorkoutStarted] = useState(false)
   const [workoutCompleted, setWorkoutCompleted] = useState(false)

    const inputHandler = (exerciseId, setter) => (e) => {
        setter((prev) => ({ ...prev, [exerciseId]: e.target.value}))
    };

    const exerciseLogHandler = (exerciseLog) => {
        setExerciseLogs((prev) => [...prev, exerciseLog])
    }

    const startWorkoutHandler = () => {
        setWorkoutStarted(true)
    };

   const workoutCompletedHandler = (exerciseId) => {
    setWorkoutCompleted((prev) => ({ ...prev, [exerciseId]: !prev[exerciseId]}))
    };

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Start Workout</h1>
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
                                 onChange={inputHandler(exercise._id, setWeight)} 
                                 />
                                <input
                                className=" w-1/2 border rounded py-2 px-3 text-black"
                                 value={sets[exercise._id] || ''}   
                                 type="number"
                                 placeholder="Sets"
                                 onChange={inputHandler(exercise._id, setSets)} 
                                 />
                                  <input
                                className="w-1/2 border rounded py-2 px-3 text-black"
                                 value={reps[exercise._id] || ''}   
                                 type="number"
                                 placeholder="Reps"
                                 onChange={inputHandler(exercise._id, setReps)} 
                                 />
                            </div>
                            <label className="flex items-center mt-4">
                                <input
                                 type="checkbox" 
                                 checked={workoutCompleted[exercise._id] || false}
                                 className="form-checkbox h-5 w-5 text-purple-600" 
                                 onChange={() => workoutCompletedHandler(exercise._id)} />
                                <span className="ml-2 text-sm">Completed</span>
                            </label>
                        </div>
                    ))}
                </div>
                {workoutStarted ? (
                        <div className="flex flex-col mb-4">
                            <div className="time-elasped">
                                <Timer onLogExercise={exerciseLogHandler} exerciseId={selectedExercises.map((exercise) => exercise._id)} />
                            </div>
                        </div>
                    ) : (
                        <button className="mt-4 bg-purple-700 hover:bg-[#F5622B] text-white font-bold py-2 px-4 rounded" onClick={startWorkoutHandler}>
                            Start Workout
                        </button>
                    )}
         
            </div>
        ) : (
            <p>No exercises selected for the workout.</p>
        )}
       <ExerciseLog exerciseLogs={exerciseLogs} />
    </div>
    );
};

export default StartWorkout;
