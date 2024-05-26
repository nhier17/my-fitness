import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Timer, ExerciseLog } from "../components";
import WorkoutSummary from "./WorkoutSummary";
import { base_url } from "../utils/api";
import { useStateContext } from '../contexts/ContextProvider';

const BeginWorkout = () => {
  const navigate = useNavigate();
  const { selectedExercises } = useStateContext();

  const [weights, setWeights] = useState({});
  const [reps, setReps] = useState({});
  const [completedSets, setCompletedSets] = useState(0);
  const [exerciseLogs, setExerciseLogs] = useState([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [workoutCompleted, setWorkoutCompleted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const moveToNextExercise = () => {
    if (selectedExercises.length > 0 && currentExerciseIndex < selectedExercises.length - 1) {
      if (
        weights[selectedExercises[currentExerciseIndex]._id]?.trim() !== "" &&
        reps[selectedExercises[currentExerciseIndex]._id]?.trim() !== ""
      ) {
        setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
        setSeconds(0);
      } else {
        setWorkoutCompleted(true);
      }
    } else {
      setWorkoutCompleted(true);
    }
  };

  //log workoutCompleted
  const logExerciseCompletion = () => {
    const currentExercise = selectedExercises[currentExerciseIndex];
    const exerciseLog = {
        name: currentExercise.name,
        weight: weights[currentExercise._id],
        reps: reps[currentExercise._id],
        completedSets: completedSets,
    };
    setExerciseLogs((prevLogs) => [...prevLogs, exerciseLog]);
    moveToNextExercise();
  };

  //input change for  weight and reps
  const inputHandler = (exerciseId, setter) => (e) => {
    setter((prev) => ({ ...prev, [exerciseId]: e.target.value }));
  };
  //begin workout
  const beginWorkout = () => {
    if (Object.keys(weights).length === 0 || Object.keys(reps).length === 0) {
        alert("Please input both weight and reps.");
    } else {
      if (!isActive) {
        setIsActive(true);
        setWeights((prevWeights) => ({
            ...prevWeights,
            [selectedExercises[currentExerciseIndex]._id]: "",
          }));
          setReps((prevReps) => ({
            ...prevReps,
            [selectedExercises[currentExerciseIndex]._id]: "",
          }));
          setCompletedSets((prevSets) => prevSets + 1);
          logExerciseCompletion()
      } else {
        setIsActive(false);
      }
    }
    };
  

  const resetWorkout = () => {
    setIsActive(false);
    setCompletedSets(0);
    setWeights({});
    setReps({});
    setSeconds(0);
    setExerciseLogs([])
  };

  const exerciseLogHandler = (exerciseLog) => {
    setExerciseLogs((prev) => [...prev, exerciseLog]);
  };

  const backHome = () => {
    navigate("/start-workout");
  };

  const moveToPrevExercise = () => {
    setCurrentExerciseIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <FaArrowLeft
        className="text-3xl text-[#ccc] mb-4 cursor-pointer"
        onClick={backHome}
      />
      {workoutCompleted ? (
        <div>
          <h2 className="text-4xl text-center text-teal-400">
            Workout Completed
          </h2>
          <WorkoutSummary exerciseLogs={exerciseLogs} />
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          <div className="flex justify-between mb-4">
            <button onClick={moveToPrevExercise}>
              <FaArrowLeft className="text-black" />
            </button>
            <button onClick={moveToNextExercise}>
              <FaArrowRight className="text-black" />
            </button>
          </div>
          <img
            src={base_url + selectedExercises[currentExerciseIndex]?.image}
            alt="workout"
          />
          <h2 className="text-black text-xl md:text-2xl">
            {selectedExercises[currentExerciseIndex]?.name}
          </h2>

          <div className="flex items-center justify-center">
            <Timer
              onLogExercise={exerciseLogHandler}
              exerciseId={selectedExercises.map((exercise) => exercise._id)}
              isActive={isActive}
              setIsActive={setIsActive}
              seconds={seconds}
              setSeconds={setSeconds}
            />
            <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
              {completedSets}/4
            </div>
            <p className="text-black">sets</p>
          </div>

          <div className="flex gap-2 mt-2">
            <input
              className="w-1/2 border rounded py-2 px-3 text-black"
              value={weights[selectedExercises[currentExerciseIndex]._id] || ""}
              type="number"
              placeholder="Weight"
              onChange={inputHandler(
                selectedExercises[currentExerciseIndex]._id,
                setWeights
              )}
            />
            <input
              className="w-1/2 border rounded py-2 px-3 text-black"
              value={reps[selectedExercises[currentExerciseIndex]._id] || ""}
              type="number"
              placeholder="Reps"
              onChange={inputHandler(
                selectedExercises[currentExerciseIndex]._id,
                setReps
              )}
            />
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={beginWorkout}
            >
              Start
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={resetWorkout}
            >
              Reset
            </button>
          </div>
        </div>
      )}
      <ExerciseLog exerciseLogs={exerciseLogs} />
    </div>
  );
};

export default BeginWorkout;
