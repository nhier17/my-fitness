import React, {useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';



const Membership = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Call handleResize on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const splideOptions = {
    perPage: 1,
    type: 'loop',
    autoplay: true,
    interval: 4000, 
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    pagination: false,
    drag: 'free',
  };
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl md:text-5xl font-bold text-purple-700 md:text-center text-start mb-8">Choose Your Membership Plan</h1>
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isMobile ? 'splide-container' : ''}`}>
      {isMobile ? (
        <Splide options={splideOptions}>
          <SplideSlide>
            <div className="bg-gray-800 p-6 shadow-md rounded-lg transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Basic</h2>
                    <ul>
                        <li className="text-gray-200">Basic Training plans</li>
                        <li className="text-gray-200">Personalized meal plans</li>
                        <li className="text-gray-200">Monthly newsletter</li>
                        <li className="line-through">Exclusive fitness challenges</li>
                        <li className="line-through">Access to progess tracking features</li>
                        <li className="line-through">Monthly online coaching</li>
                        <li className="line-through">Personalized workout plans</li>
                    </ul>
                    <p className="text-purple-600 font-bold">$9.99/month</p>
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out">Select Plan</button>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-gray-800 p-6 shadow-md rounded-lg transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Premium</h2>
                    <ul>
                        <li className="text-[#ccc]">Basic training plans</li>
                        <li className="text-[#ccc]">Personalized meal plans</li>
                        <li className="text-[#ccc]">Monthly newsletter</li>
                        <li className="text-[#ccc]">Exclusive fitness challenges</li>
                        <li className="text-[#ccc]">Access to progess tracking features</li>
                        <li className="line-through">Monthly online coaching</li>
                        <li className="line-through">Personalized workout plans</li>
                    </ul>
                    <p className="text-purple-600 font-bold">$19.99/month</p>
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out">Select Plan</button>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="bg-gray-800 p-6 shadow-md rounded-lg transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Elite</h2>
                    <ul>
                        <li className="text-gray-200">Basic training plans</li>
                        <li className="text-gray-200">Personalized meal plans</li>
                        <li className="text-gray-200">Monthly newsletter</li>
                        <li className="text-gray-200">Exclusive fitness challenges</li>
                        <li className="text-gray-200">Access to progess tracking features</li>
                        <li className="text-gray-200">Monthly online coaching</li>
                        <li className="text-gray-200">Personalized workout plans</li>
                    </ul>
                    <p className="text-purple-600 font-bold">$29.99/month</p>
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out">Select Plan</button>
            </div>
          </SplideSlide>
        </Splide>
      ) : (
        <>
          <div className="bg-gray-800 p-6 shadow-md rounded-lg transition duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2 text-purple-700">Basic</h2>
                    <ul>
                        <li className="text-gray-200">Basic Training plans</li>
                        <li className="text-gray-200">Personalized meal plans</li>
                        <li className="text-gray-200">Monthly newsletter</li>
                        <li className="line-through">Exclusive fitness challenges</li>
                        <li className="line-through">Access to progess tracking features</li>
                        <li className="line-through">Monthly online coaching</li>
                        <li className="line-through">Personalized workout plans</li>
                    </ul>
                    <p className="text-purple-600 font-bold">$9.99/month</p>
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out">Select Plan</button>
                </div>
          <div className="bg-gray-800 p-6 shadow-md rounded-lg transition duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2 text-purple-700">Premium</h2>
                    <ul>
                        <li className="text-[#ccc]">Basic training plans</li>
                        <li className="text-[#ccc]">Personalized meal plans</li>
                        <li className="text-[#ccc]">Monthly newsletter</li>
                        <li className="text-[#ccc]">Exclusive fitness challenges</li>
                        <li className="text-[#ccc]">Access to progess tracking features</li>
                        <li className="line-through">Monthly online coaching</li>
                        <li className="line-through">Personalized workout plans</li>
                    </ul>
                    <p className="text-purple-600 font-bold">$19.99/month</p>
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out">Select Plan</button>
          </div>
          <div className="bg-gray-800 p-6 shadow-md rounded-lg transition duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2 text-purple-700">Elite</h2>
                    <ul>
                        <li className="text-gray-200">Basic training plans</li>
                        <li className="text-gray-200">Personalized meal plans</li>
                        <li className="text-gray-200">Monthly newsletter</li>
                        <li className="text-gray-200">Exclusive fitness challenges</li>
                        <li className="text-gray-200">Access to progess tracking features</li>
                        <li className="text-gray-200">Monthly online coaching</li>
                        <li className="text-gray-200">Personalized workout plans</li>
                    </ul>
                    <p className="text-purple-600 font-bold">$29.99/month</p>
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out">Select Plan</button>
          </div>
          </>
      )}
    </div>
  </div>
  )
}

export default Membership
