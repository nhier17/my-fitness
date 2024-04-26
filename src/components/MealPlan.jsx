import React, { useState } from 'react'
import axios from 'axios';
import MealList from './MealList';

const MealPlan = () => {
    const [mealData, setMealData] = useState(null)
    const [calories, setCalories] = useState('')

const fetchMealData = async () => {
    const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`)
    setMealData(response.data)
    }
    
    const handleChange = (e) => {
        setCalories(e.target.value)
    }

  return (
    <div className="flex items-center justify-center py-8 mt-10">
      <section className="mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Today's Meal Plan</h2>
        <div className="mb-4">
          <label htmlFor="calories" className="block font-semibold mb-2">Target Calories:</label>
          <input
            id="calories"
            type="number"
            className="w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-black"
            placeholder="Enter target calories (e.g., 2000)"
            value={calories}
            onChange={handleChange}
          />
        </div>
        <button
          className=" py-2 px-4 bg-purple-600 text-white border-none font-sans font-normal text-base transition duration-300 ease-in-out hover:bg-purple-700 rounded-md"
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
