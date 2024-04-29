import React from 'react'

const ExerciseLog = ({ exerciseLogs }) => {
  return (
    <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-2">Exercise Logs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exerciseLogs.map((exerciseLog, index) => (
            <div key={index} className="border rounded p-4">
                <h3 className="text-lg font-semibold mb-2">Exercise: {exerciseLog.exerciseName}</h3>
                <p>Sets: {exerciseLog.sets}</p>
                <p>Reps: {exerciseLog.reps}</p>
                {exerciseLog.weight && <p>Weight: {exerciseLog.weight}</p>}
                <p>Date & Time: {new Date(exerciseLog.dateTime).toLocaleString()}</p>
                <p>Notes: {exerciseLog.notes}</p>
            </div>
        ))}
    </div>
</div>
  )
}

export default ExerciseLog
