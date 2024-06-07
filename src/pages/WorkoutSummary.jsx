import React from 'react';
import {  IoTimer } from "react-icons/io5";
import { FaDumbbell, FaFire } from 'react-icons/fa';
import { ShareWorkout } from '../components';

const WorkoutSummary = ({ data }) => {
  return (
    <div className="container bg-white rounded-md shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Workout Summary</h2>
      <div className="flex flex-wrap gap-1">
      <div className="bg-white flex-1 min-w-[200px] p-6 border rounded-lg shadow-lg border-gray-300 flex gap-2">
        <div className="flex-1 flex flex-col gap-3 md:gap-1.5">
            <h3 className="font-semibold text-lg md:text-base text-gray-600">
              #Total Workouts
            </h3>
            <div className="font-semibold text-4xl md:text-2xl flex items-end gap-2 text-gray-900 ">
            <div className={`mb-2 font-medium text-base ${true ? 'text-green-500' : 'text-red-500'} md:text-xs`}>
            (+10%)
          </div>
            </div>
            <div className="text-sm md:text-xs text-gray-500 mb-1.5">
            Total no of workouts for today
            </div>
            <div className="px-4 py-2 bg-green-100 text-gray-500 text-base rounded-md hover:drop-shadow-xl">
                {data?.summary?.totalWorkouts}
            </div>
        </div>
        <button className="h-fit p-2 flex items-center justify-center bg-green-100 text-green-400 text-2xl rounded-lg hover:drop-shadow-xl">
        <FaDumbbell  />
        </button>
    </div>
    <div className="bg-white flex-1 min-w-[200px] p-6 border rounded-lg shadow-lg border-gray-300 flex gap-2">
        <div className="flex-1 flex flex-col gap-3 md:gap-1.5">
            <h3 className="font-semibold text-lg md:text-base text-gray-600">
              #Total Calories Burnt
            </h3>
            <div className="font-semibold text-4xl md:text-2xl flex items-end gap-2 text-gray-900 ">
            <div className={`mb-2 font-medium text-base ${true ? 'text-green-500' : 'text-red-500'} md:text-xs`}>
            (+10%)
          </div>
            </div>
            <div className="text-sm md:text-xs text-gray-500 mb-1.5">
            Total calories burnt today
            </div>
            <div className="px-4 py-2 bg-orange-200 text-gray-500 text-base rounded-md hover:drop-shadow-xl">
                {data?.summary?.totalCaloriesBurnt}
            </div>
        </div>
        <div className="h-fit p-2 flex items-center justify-center bg-orange-200 text-[#eb9e34] text-2xl rounded-lg hover:drop-shadow-xl">
        <FaFire  />
        </div>
    </div>
    <div className="bg-white flex-1 min-w-[200px] p-6 border rounded-lg shadow-lg border-gray-300 flex gap-2">
        <div className="flex-1 flex flex-col gap-3 md:gap-1.5">
            <h3 className="font-semibold text-lg md:text-base text-gray-600">
              #Average Duration
            </h3>
            <div className="font-semibold text-4xl md:text-2xl flex items-end gap-2 text-gray-900 ">
            <div className={`mb-2 font-medium text-base ${true ? 'text-green-500' : 'text-red-500'} md:text-xs`}>
            (+10%)
          </div>
            </div>
            <div className="text-sm md:text-xs text-gray-500 mb-1.5">
            Average time on each workout
            </div>
            <div className="px-4 py-2 bg-pink-100 text-gray-500 text-base rounded-md hover:drop-shadow-xl">
                {data?.summary?.avgDuration}
            </div>
        </div>
        <div className="h-fit p-2 flex items-center justify-center bg-pink-100 text-[#FF9AD5] text-2xl rounded-lg hover:drop-shadow-xl"
        >
        <IoTimer />
        </div>
    </div>
    </div>
     <ShareWorkout exerciseLogs={data} /> 
    </div>
  )
}

export default WorkoutSummary
