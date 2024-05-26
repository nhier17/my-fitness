import React from 'react';
import { FaDumbbell} from 'react-icons/fa';
import {  MdTimelapse } from "react-icons/md";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="flex flex-1 max-w-[400px] p-4 md:p-3.5 border rounded-lg shadow-lg border-gray-300 flex-col gap-2">
        <div className="w-fit text-sm text-purple-500 font-medium bg-inherit bg-opacity-20 p-1.5 rounded-md">
            #{workout?.category}
        </div>
        <div className="text-xl text-gray-900 font-semibold">{workout?.name}</div>
        <div className="text-base text-gray-500 font-medium flex gap-1.5">
        Count: {workout?.sets} sets X {workout?.reps} reps
      </div>
        <div className="flex gap-4">
        <div className="text-base text-gray-500 font-medium flex items-center gap-1.5">
            < MdTimelapse className="text-xl text-black" />
            <span className="text-sm">{workout?.duration} min</span>
        </div>
        <div className="text-base text-gray-900 font-medium flex items-center gap-1.5">
            <FaDumbbell className="text-xl text-black" />
            <span className="text-sm">{workout?.weight} kg</span>
        </div>
        </div>
    </div>
  )
}

export default WorkoutCard