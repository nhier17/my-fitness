import React from 'react'
import Meal from './Meal';
import { FaCheese, FaFire, FaDrumstickBite, FaCarrot } from "react-icons/fa";

const MealList = ({ mealData }) => {
  const nutrients = mealData.nutrients;

  return (
    <div className="flex flex-col items-center">
      <section className="my-8">
        <h1 className="text-center text-2xl font-bold mb-4 text-white">Macros</h1>
        <ul className="mb-4 flex flex-wrap justify-center gap-4 text-white md:text-xl text-lg max-lg:3xl">
          <li className="flex items-center">
            <FaFire className="text-red-500 mr-2" />
            Calories: {nutrients.calories.toFixed(0)}
            </li>
          <li className="flex items-center">
            <FaCarrot className="text-orange-500 mr-2" />
            Carbohydrates: {nutrients.carbohydrates.toFixed(0)}
            </li>
          <li className="flex items-center">
            <FaCheese className="text-yellow-500 mr-2" />
            Fat: {nutrients.fat.toFixed(0)}
            </li>
          <li className="flex items-center">
            <FaDrumstickBite className="text-green-500 mr-2" />
            Protein: {nutrients.protein.toFixed(0)}
            </li>
        </ul>
      </section>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mealData.meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  )
}

export default MealList
