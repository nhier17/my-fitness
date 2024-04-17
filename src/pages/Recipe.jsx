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
    <div className="md:mt-[10rem] mt-10 mb-20">
<div>
  <h2 className="text-center text-white mb-4">{details.title}</h2>
  <img className="m-auto rounded-md px-5" src={details.image} alt={details.title} />
</div>
<div className="md:ml-8 ml-10 mt-5 md:flex block flex-wrap justify-center items-center">
  <button className={`px-4 py-2 mr-4 bg-white border border-black font-semibold cursor-pointer ${activeTab === "instructions" ? "bg-red-800 text-white" : ""}`} onClick={() => setActiveTab("instructions")}>Instructions</button>
  <button className={`px-4 py-2 mr-4 bg-white border border-black font-semibold cursor-pointer ${activeTab === "ingredients" ? "bg-red-800 text-white" : ""}`} onClick={() => setActiveTab("ingredients")}>Ingredients</button>
  {activeTab === "instructions" && (
  <div>
    <h3 className="text-white" dangerouslySetInnerHTML={{__html: details.summary }}></h3>
    <h3 className="text-white" dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
  </div>
  )}
  {activeTab === "ingredients" && (
  <ul className="mt-6">
   {details.extendedIngredients.map((ingredient) => (
    <div  key={ingredient.id}>   
       <li className="text-white text-lg text-center" id={ingredient.id}>{ingredient.original}</li>
       </div>

   ))}
  </ul>
  )}
</div>
    </div>
  )
}


export default Recipe