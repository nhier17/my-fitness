
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await api.json();
        setDetails(detailData);
      
      }
    fetchDetails();
  }, [params.name])
    
  return (
    <div>
<div>
  <h2>{details.title}</h2>
  <img src={details.image} alt={details.title} />
</div>
<div>
  <button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions</button>
  <button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients</button>
  {activeTab === "instructions" && (
  <div>
    <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
    <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
  </div>
  )}
  {activeTab === "ingredients" && (
  <ul>
   {details.extendedIngredients.map((ingredient) => (
    <div  key={ingredient.id}>   
       <li id={ingredient.id}>{ingredient.original}</li>
       </div>

   ))}
  </ul>
  )}
</div>
    </div>
  )
}


export default Recipe
