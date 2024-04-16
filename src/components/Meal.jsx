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
    <article className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Link to={'/recipe' + meal.id}>
      <div className="relative pb-2/3">
      {imageUrl && <img className="absolute h-full w-full object-cover" src={imageUrl} alt="recipe" />}
    </div>
      </Link>
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2">{meal.title}</h1>
      <ul className="mb-2">
        <li><strong>Preparation time:</strong> {meal.readyInMinutes} minutes</li>
        <li><strong>Number of servings:</strong> {meal.servings}</li>
      </ul>
    </div>
  </article>
  )
}

export default Meal
