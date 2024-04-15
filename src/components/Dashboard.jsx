import React, { useState } from 'react'

const Dashboard = () => {
    const [workouts, setWorkouts] = useState([])
    const [formData, setFormData] = useState({
        exercises: '',
        duration: '',
        intensity: '',
        notes: '',
    })
const submitHandler = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, formData]);
    setFormData({
        name: '',
        difficulty: '',
        image: '',
        notes: '',
    });
}
const handleChange = (e) => {
    setFormData({
       ...formData,
        [e.target.name]: e.target.value,
    })
};

  return (
    <div className="max-w-4xl px-4 mx-auto py-8 mt-20">
    <h1 className="text-3xl font-bold mb-4">Workout tracking</h1>
    <form className="mb-8" onSubmit={submitHandler}>
        <div className="mb-4">
        <label className="block text-gray-700">Exercise:</label>
          <input
            type="text"
            name="exercise"
            value={formData.exercise}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Duration (minutes):</label>
          <input
            type="text"
            name="exercise"
            value={formData.exercise}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Intensity (1-10):</label>
          <input
            type="text"
            name="exercise"
            value={formData.exercise}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Notes:</label>
        <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Log Workout</button>
    </form>
    <div className="">
        <h2 className="text-2xl font-bold mb-4">Logged Workouts</h2>
        <ul>
            {workouts.map((workout, index) => (
                <li className="mb-4 border-b pb-2" key={index}>
                    <strong className="block mb-1">Exercise:</strong>
                    <p className="mb-1">{workout.exercise}</p>
                     <strong className="block mb-1">Duration:</strong>
                     <p className="mb-1">{workout.duration} minutes</p>
                     <strong className="block mb-1">Intensity:</strong>
                     <p className="mb-1">{workout.intensity}</p>
                     <strong className="block mb-1">Notes:</strong>
                     <p>{workout.notes}</p>
                </li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default Dashboard