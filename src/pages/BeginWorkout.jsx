import React, { useState, useEffect, useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { Timer, ExerciseLog } from "../components";
import { base_url, startWorkoutData, completeWorkoutData } from "../utils/api";
import { useStateContext } from '../contexts/ContextProvider';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

const BeginWorkout = () => {
  const navigate = useNavigate();
  const { selectedExercises, setSelectedExercises } = useStateContext();

  const [weights, setWeights] = useState({});
  const [reps, setReps] = useState({});
  const [completedSets, setCompletedSets] = useState({});
  const [exerciseLogs, setExerciseLogs] = useState([]);
  const [isWorkoutStarted, setIsWorkoutStarted] = useState({});
  const [isActive, setIsActive] = useState({});
  const [seconds, setSeconds] = useState({});
  const [workoutId, setWorkoutId] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isWorkoutCompleted, setIsWorkoutCompleted] = useState(false);

  const currentExercise = selectedExercises[currentExerciseIndex];
  const exerciseId = currentExercise?._id;

  const calculateCaloriesBurnt = (weight,reps,sets) => {
    return (weight * reps * sets) / 100;
  }

  //check if all exercises are completed
  useEffect(() => {
    if(selectedExercises.length > 0 && Object.keys(isWorkoutStarted).length > 0) {
      const allCompletd = selectedExercises.every (
        (exercise) => !isWorkoutStarted[exercise._id]
      );
      if(allCompletd) {
        setIsWorkoutCompleted(true);
      }
    }
  },[isWorkoutStarted, selectedExercises]);

  // start the workout
  const handleStartWorkout = useCallback(async () => {
    if (!exerciseId || !weights[exerciseId] || !reps[exerciseId]) {
      alert('Please add the weight and desired reps');
      return;
    }
     const caloriesBurnt = calculateCaloriesBurnt(weights[exerciseId], reps[exerciseId],completedSets[exerciseId] || 1);
    const exerciseData = {
      exercise: exerciseId,
      name: currentExercise.name,
      weight: weights[exerciseId],
      sets: completedSets[exerciseId] || 1,
      reps: reps[exerciseId],
      caloriesBurnt,
    };
    
    try {
      const workoutData = await startWorkoutData(exerciseData);
      if (workoutData) {
        setWorkoutId(workoutData);
        setCompletedSets(prevSets => ({
          ...prevSets,
          [exerciseId]: 1,
        }));
        setIsWorkoutStarted(prev => ({
          ...prev,
          [exerciseId]: true,
        }));
        setIsActive(prev => ({
          ...prev,
          [exerciseId]: true,
        }));
        setSeconds(prev => ({
          ...prev,
          [exerciseId]: 0,
        }));
        toast.success('Workout started successfully');
      } else {
        toast.error('Failed to start workout');
      }
    } catch (error) {
      console.error('Error starting workout:', error);
      toast.error('Error starting workout');
    }
  }, [exerciseId, weights, reps, completedSets, currentExercise.name]);
  //sets change
  const handleNextSet = () => {
    if (!exerciseId) return;

    const currentSets = completedSets[exerciseId] || 0;
    const newSets = currentSets + 1;

    if (newSets > 4) {
      toast.error('You have already completed 4 sets for this exercise.');
      return;
    }

    setCompletedSets(prev => ({
      ...prev,
      [exerciseId]: newSets,
    }));

    setIsActive(prev => ({
      ...prev,
      [exerciseId]: true,
    }));
    setSeconds(prev => ({
      ...prev,
      [exerciseId]: 0,
    }));
    toast.success(`Completed set ${newSets} for ${selectedExercises[currentExerciseIndex]?.name}.`);
  };

  //complete workout
  const handleWorkoutCompletion = async () => {
    if (!exerciseId) return;

    try {
      if (workoutId) {
       const caloriesBurnt = calculateCaloriesBurnt(weights[exerciseId], reps[exerciseId],completedSets[exerciseId] || 1);  
       const exerciseDetails = {
     [exerciseId]: {
       weight: weights[exerciseId],
       reps: reps[exerciseId],
       sets: completedSets[exerciseId] || 0,
       caloriesBurnt,
     }
   };
 await completeWorkoutData(workoutId, exerciseDetails);
   setIsWorkoutStarted(prev => ({
     ...prev,
     [exerciseId]: false,
   }));
   setIsActive(prev => ({
     ...prev,
     [exerciseId]: false,
   }));
   setCompletedSets(prev => ({
     ...prev,
     [exerciseId]: 0,
   }));
   setWeights(prev => ({
     ...prev,
     [exerciseId]: '',
   }));
   setReps(prev => ({
     ...prev,
     [exerciseId]: '',
   }));
   setSeconds(prev => ({
     ...prev,
     [exerciseId]: 0,
   }));
    logExerciseCompletion(exerciseId, caloriesBurnt);
        toast.success('Exercise completed successfully');
      }
    } catch (error) {
      console.error('Error completing workout', error);
      toast.error('Failed to complete workout');
    }
  };

  //exercise logs
  const logExerciseCompletion = (exerciseId,caloriesBurnt) => {
    const exercise = selectedExercises.find(e => e._id === exerciseId);
    const exerciseLog = {
      name: exercise?.name,
      weight: weights[exerciseId],
      reps: reps[exerciseId],
      sets: completedSets[exerciseId] || 0,
      caloriesBurnt,
    };
    setExerciseLogs((prevLogs) => [...prevLogs, exerciseLog]);
  };

  const inputHandler = (exerciseId, setter) => (e) => {
    setter((prev) => ({ ...prev, [exerciseId]: e.target.value }));
  };
  //reset workout
  const resetWorkout = () => {
    setIsWorkoutStarted({});
    setIsActive({});
    setCompletedSets({});
    setWeights({});
    setReps({});
    setSeconds({});
    setExerciseLogs([]);
    setWorkoutId(null);
  };

  const exerciseLogHandler = (exerciseLog) => {
    setExerciseLogs((prev) => [...prev, exerciseLog]);
  };

  const backHome = () => {
    resetWorkout();
    setSelectedExercises([]);
    navigate("/workouts");
  };

  const splideOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    focus: 'center',
    pagination: false,
    arrows: true,
    omitEnd: true,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <Splide
          options={splideOptions}
          onMoved={(splide, newIndex) => {
            setCurrentExerciseIndex(newIndex);
          }}
        >
          {selectedExercises.map((exercise, index) => (
            <SplideSlide key={exercise._id}>
                <img src={base_url + exercise?.image} alt="workout" />
                <h2 className="text-black text-xl md:text-2xl">{exercise?.name}</h2>
                <div className="flex items-center justify-center">
                  <Timer
                    onLogExercise={exerciseLogHandler}
                    exerciseId={exercise?._id}
                    isActive={isActive[exercise?._id]}
                    setIsActive={(active) => setIsActive(prev => ({ ...prev, [exercise?._id]: active }))}
                    seconds={seconds[exercise?._id] || 0}
                    setSeconds={setSeconds}
                  />
                  <div className="w-14 h-14 bg-teal-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    {completedSets[exercise?._id] || 0}/4
                  </div>
                  <p className="text-black">sets</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <input
                    className="w-1/2 border rounded py-2 px-3 text-black"
                    value={weights[exercise?._id] || ""}
                    type="number"
                    placeholder="Weight"
                    onChange={inputHandler(exercise?._id, setWeights)}
                  />
                  <input
                    className="w-1/2 border rounded py-2 px-3 text-black"
                    value={reps[exercise?._id] || ""}
                    type="number"
                    placeholder="Reps"
                    onChange={inputHandler(exercise?._id, setReps)}
                  />
                  <button
                    className="bg-purple-700 hover:bg-orange-500 text-white px-4 py-2 rounded-md"
                    onClick={handleNextSet}
                  >
                    <FaPlus />
                  </button>
                </div>
            </SplideSlide>
          ))}
        </Splide>
        <div className="mt-4">
          {isWorkoutStarted[currentExercise?._id] ? (
            <>
              <button
                className="bg-green-500 hover:bg-orange-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleWorkoutCompletion}
              >
                Complete Workout
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={resetWorkout}
              >
                Reset
              </button>
            </>
          ) : (
            <button
              className="bg-purple-700 hover:bg-orange-500 text-white px-4 py-2 rounded-md"
              onClick={handleStartWorkout}
            >
              Start Workout
            </button>
          )}
        </div>
      </div>
      {isWorkoutCompleted && (
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6 mt-6">
          <h2 className="text-black text-2xl">Workout Summary</h2>
          <ExerciseLog exerciseLogs={exerciseLogs} />
          <div className="flex gap-2 items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => navigate('/profile')}
          >
            View Workout History
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-4"
            onClick={backHome}
          >
            Back to Home
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeginWorkout;
