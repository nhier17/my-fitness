import React, { useState, useRef } from 'react'
import { Exercise } from '../components';
import { categories } from '../constants';
import { useTitleAnime, useCardAnime, useCategoryAnime } from '../animation';

const Workout = () => {
  const [selectedCategory, setSelectedCategory] = useState('legs');
  const containerRef = useRef(null);

  useTitleAnime();
  useCardAnime();
  useCategoryAnime(containerRef, selectedCategory);


  return (
    <div className="md:mt-20 mt-10">
      <h2 id="title" className="text-3xl md:text-4xl text-purple-700 text-start md:text-center p-2 md:p-4 opacity-0 translate-y-20 font-semibold">
        Our Training Programs
        </h2>
      <div  id="workout" className="flex overflow-x-auto overflow-y-hidden  opacity-0"
      ref={containerRef}
       style={{'scrollbarWidth': 'none','::WebkitScrollbar': { 'display': 'none' }}}>
      {categories.map((category) =>(
        <div  className={`flex-shrink-0 mx-4 `} key={category.id} onClick={() => setSelectedCategory(category.title)}>
        <div className="rounded-md overflow-hidden shadow-md text-center transition duration-300 transform hover:scale-105" 
        style={{ width: '300px', height: '400px' }}>
          <img className="w-full h-[200px] object-cover" src={category.img} alt={category.alt} />
          <div className={`bg-gray-800 text-white p-4 ${selectedCategory === category.title ? 'active' : ''}`}>
          <h3 className="text-white text-lg font-semibold">{category.title}</h3>
          <p className="text-white text-sm">{category.description}</p>  
          </div>
        </div>
        </div>
      ))}
      </div>
        <Exercise selectedCategory={selectedCategory} />
    </div>
  )
}

export default Workout

