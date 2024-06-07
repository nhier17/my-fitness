import React from 'react'

const RecentWorkouts = ({ data }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 mb-6 mt-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-600">Recent Workouts</h2>
        {data?.recentWorkouts?.map((workout, index) => (
            <div key={index} className="mb-4">
             <p className="text-gray-500">Date: {new Date(workout.startedAt).toLocaleDateString()}</p>
             <p className="text-gray-500">Calories Burnt: {workout.exercises.reduce((total, ex) => total + (ex.caloriesBurnt || 0), 0)}</p>
             <p className="text-gray-500">Exercises: {workout.exercises.map(ex => ex.exercise.name).join(', ')}</p>
            </div>
        ))}
    </div>
  )
}

export default RecentWorkouts