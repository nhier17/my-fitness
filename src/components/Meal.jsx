import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImageUrl = async () => {
          const response = await axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`)
          setImageUrl(response.data.image)
        }
       fetchImageUrl()
    }, [meal.id])

  return (
    <article className="flex flex-col p-8 mx-4 max-w-[300px] shadow-md overflow-hidden">
      <Link to={'/recipe/' + meal.id}>
       <img className="w-full mb-3" src={imageUrl} alt="recipe" />
      </Link>
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2 text-white">{meal.title}</h1>
      <ul className="mb-2 list-none text-white">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
    </div>
  </article>
  )
}

export default Meal
