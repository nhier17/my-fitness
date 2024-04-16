import React from 'react'
import Meal from './Meal';

const MealList = ({ mealData }) => {
  const nutrients = mealData.nutrients;

  return (
    <div className="max-w-xl mx-auto">
      <section className="bg-white shadow-lg rounded-lg p-4 mb-4">
        <h1 className="text-center text-teal-400 text-2xl font-semibold mb-4">Eat Train Sleep</h1>
        <ul className="mb-4">
          <li><strong>Calories:</strong> {nutrients.calories.toFixed(0)}</li>
          <li><strong>Carbohydrates:</strong> {nutrients.carbohydrates.toFixed(0)}</li>
          <li><strong>Fat:</strong> {nutrients.fat.toFixed(0)}</li>
          <li><strong>Protein:</strong> {nutrients.protein.toFixed(0)}</li>
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
