import React from 'react';
import { MealPlan } from '../components';
import { FaUtensils, FaChartPie, FaAppleAlt } from 'react-icons/fa';

const Nutrition = () => {
  return (
    <div className="mx-auto px-4 py-8 mt-10">
    <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800">Your Nutrition Plan</h1>
        <p className="text-lg text-white mt-2">Plan your meals for a healthier lifestyle</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="block mb-4 p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition duration-300">
                <div className="text-center mb-4 text-purple-800">
                    <FaUtensils className="text-3xl" />
                    <h2 className="text-2xl font-bold">Customize Your Plan</h2>
                </div>
                <p className="text-gray-700">Tailor your meal plan based on your dietary preferences and goals.</p>
        </div>
        <div className="block mb-4 p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition duration-300">
                <div className="text-center mb-4 text-purple-800">
                    <FaChartPie className="text-3xl" />
                    <h2 className="text-2xl font-bold">Nutritional Info</h2>
                </div>
                <p className="text-gray-700">Learn about the nutritional value of different foods and how they contribute to your health.</p>
        </div>
        <div className="block mb-4 p-6 bg-white shadow-lg hover:shadow-xl rounded-lg transition duration-300">
                <div className="text-center mb-4 text-purple-800">
                    <FaAppleAlt className="text-3xl" />
                    <h2 className="text-2xl font-bold">Healthy Recipes</h2>
                </div>
                <p className="text-gray-700">Discover delicious and nutritious recipes to support your healthy lifestyle.</p>
        </div>
    </div>
    <div className="mt-12">
        <MealPlan />
    </div>
</div>
  )
}

export default Nutrition
