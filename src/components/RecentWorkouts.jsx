import React from 'react';

const RecentWorkouts = ({ data }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 mb-6 mt-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-600">Recent Workouts</h2>
      {data?.recentWorkouts?.length > 0 ? (
        data.recentWorkouts.map((workout, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Date: {new Date(workout.startedAt).toLocaleDateString()}
            </p>
            <p className="text-md text-gray-600 mb-2">
              Calories Burnt: {workout.exercises.reduce((total, ex) => total + (ex.caloriesBurnt || 0), 0)}
            </p>
            <div className="text-md text-gray-600">
              Exercises:
              <ul className="list-disc list-inside ml-4 mt-2">
                {workout.exercises.map((ex, idx) => (
                  <li key={idx}>
                    <span className="font-medium">{ex.exercise.name}</span> - {ex.reps} reps x {ex.sets} sets @ {ex.weight} kg
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p className="text-md text-gray-500">No recent workouts available.</p>
      )}
    </div>
  );
};

export default RecentWorkouts;
