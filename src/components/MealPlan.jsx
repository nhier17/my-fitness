import React, { useState } from 'react'
import axios from 'axios';
import MealList from './MealList';

const MealPlan = () => {
    const [mealData, setMealData] = useState(null)
    const [calories, setCalories] = useState(2000)

const fetchMealData = async () => {
    const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`)
      console.log(response.data)  
    setMealData(response.data)
    }
    
    const handleChange = (e) => {
        setCalories(e.target.value)
    }

  return (
    <div className="max-w-xl mx-auto p-4">
      <section className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Today's Meal Plan</h2>
        <div className="mb-4">
          <label htmlFor="calories" className="block font-semibold mb-2">Target Calories:</label>
          <input
            id="calories"
            type="number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter target calories (e.g., 2000)"
            value={calories}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={fetchMealData}
        >
          Get Daily Meal Plan
        </button>
        {mealData && <MealList mealData={mealData} />}
      </section>
    </div>
  )
}

export default MealPlan
