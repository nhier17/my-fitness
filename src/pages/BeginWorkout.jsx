import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { Timer, ExerciseLog } from "../components";
import { base_url, startWorkoutData, completeWorkoutData } from "../utils/api";
import { useStateContext } from '../contexts/ContextProvider';

const BeginWorkout = () => {
  const navigate = useNavigate();
  const { selectedExercises } = useStateContext();

  const [weights, setWeights] = useState({});
  const [reps, setReps] = useState({});
  const [completedSets, setCompletedSets] = useState({});
  const [exerciseLogs, setExerciseLogs] = useState([]);
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [workoutId, setWorkoutId] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);


  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isActive]);

  const handleStartWorkout = async () => {
    if (Object.keys(weights).length === 0 || Object.keys(reps).length === 0) {
      toast.error('Please fill in all the fields');
      return;
    }

    try {
      const workoutData = await startWorkoutData(selectedExercises);

      if (workoutData) {
        setWorkoutId(workoutData);
        setCompletedSets(prevSets => ({
          ...prevSets,
          [currentExercise?._id]: 1,
        }))
        setIsWorkoutStarted(true);
        setIsActive(true);
        toast.success('Workout started successfully');
      } else {
        toast.error('Failed to start workout');
      }
    } catch (error) {
      console.error('Error starting workout:', error);
      toast.error('Error starting workout');
    }
  };

  const handleNextSet = () => {
    const exerciseId = selectedExercises[currentExerciseIndex]?._id;
    if (!exerciseId) return;

    const currentSets = completedSets[exerciseId] || 0;
    const newSets = currentSets + 1;

    if (newSets > 4) {
      toast.error('You have already completed 4 sets for this exercise.');
      return;
    }

    setCompletedSets(prev => ({
      ...prev,
      [exerciseId]: newSets
    }));

    setIsActive(false);
    setSeconds(0);
    setIsActive(true);

    toast.success(`Completed set ${newSets} for ${selectedExercises[currentExerciseIndex]?.name}.`);
  };

  const handleWorkoutCompletion = async () => {
    try {
      if (workoutId) {
        const exerciseDetails = selectedExercises.reduce((details, exercise) => {
          details[exercise?._id] = {
            weight: weights[exercise?._id],
            reps: reps[exercise?._id],
            sets: completedSets[exercise?._id] || 0,
          };
          return details;
        }, {});
        await completeWorkoutData(workoutId, exerciseDetails);
        setIsWorkoutStarted(false);
        setIsActive(false);
        setCompletedSets({});
        setWeights({});
        setReps({});
        toast.success('Workout completed successfully');
        logExerciseCompletion();
      }
    } catch (error) {
      console.error('Error completing workout', error);
      toast.error('Failed to complete workout');
    }
  };

  const logExerciseCompletion = () => {
    selectedExercises.forEach((exercise) => {
      const exerciseLog = {
        name: exercise?.name,
        weight: weights[exercise?._id],
        reps: reps[exercise?._id],
        sets: completedSets[exercise?._id] || 0,
      };
      setExerciseLogs((prevLogs) => [...prevLogs, exerciseLog]);
    });
  };

  const inputHandler = (exerciseId, setter) => (e) => {
    setter((prev) => ({ ...prev, [exerciseId]: e.target.value }));
  };

  const resetWorkout = () => {
    setIsWorkoutStarted(false);
    setIsActive(false);
    setCompletedSets({});
    setWeights({});
    setReps({});
    setSeconds(0);
    setExerciseLogs([]);
    setWorkoutId(null);
  };

  const exerciseLogHandler = (exerciseLog) => {
    setExerciseLogs((prev) => [...prev, exerciseLog]);
  };

  const backHome = () => {
    navigate("/start-workout");
  };

  const nextExercise = () => {
    if (currentExerciseIndex < selectedExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const prevExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  const currentExercise = selectedExercises[currentExerciseIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <FaArrowLeft
        className="text-3xl text-[#ccc] mb-4 cursor-pointer"
        onClick={backHome}
      />
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <div className="flex justify-between mb-4">
          <button onClick={prevExercise} disabled={currentExerciseIndex === 0}>
            <FaArrowLeft className="text-black" />
          </button>
          <button onClick={nextExercise} disabled={currentExerciseIndex === selectedExercises.length - 1}>
            <FaArrowRight className="text-black" />
          </button>
        </div>
        {currentExercise && (
          <>
            <img src={base_url + currentExercise?.image} alt="workout" />
            <h2 className="text-black text-xl md:text-2xl">
              {currentExercise?.name}
            </h2>
            <div className="flex items-center justify-center">
              <Timer
                onLogExercise={exerciseLogHandler}
                exerciseId={currentExercise?._id}
                isActive={isActive}
                setIsActive={setIsActive}
                seconds={seconds}
                setSeconds={setSeconds}
              />
              <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                {completedSets[currentExercise?._id] || 0}/4
              </div>
              <p className="text-black">sets</p>
            </div>
            <div className="flex gap-2 mt-2">
              <input
                className="w-1/2 border rounded py-2 px-3 text-black"
                value={weights[currentExercise?._id] || ""}
                type="number"
                placeholder="Weight"
                onChange={inputHandler(
                  currentExercise?._id,
                  setWeights
                )}
              />
              <input
                className="w-1/2 border rounded py-2 px-3 text-black"
                value={reps[currentExercise?._id] || ""}
                type="number"
                placeholder="Reps"
                onChange={inputHandler(
                  currentExercise?._id,
                  setReps
                )}
              />
                <button
                className="bg-purple-700 hover:bg-orange-500 text-white px-4 py-2 rounded"
                onClick={handleNextSet}
              >
                <FaPlus />
              </button>
            </div>
            <div className="mt-4">
            
            </div>
          </>
        )}
        <div className="mt-4">
          {isWorkoutStarted ? (
            <>
              <button
                className="bg-green-500 hover:bg-orange-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleWorkoutCompletion}
              >
                Complete Workout
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={resetWorkout}
              >
                Reset
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleStartWorkout}
            >
              Start Workout
            </button>
          )}
        </div>
      </div>
      <ExerciseLog exerciseLogs={exerciseLogs} />
    </div>
  );
};

export default BeginWorkout;
