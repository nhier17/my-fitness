import React from 'react'
import { IoIosMore } from 'react-icons/io';
import { chartData, fitnessBranding, recentActivities, fitnessGoals } from '../data/dummy';
import { LineChart } from '../components';
import { fitness3 } from '../assets'

const Dashboard = () => {
  return (
    <div className="mt-12">
    <div className="flex flex-wrap lg:flex-nowrap justify-center ">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Total Workout Duration</p>
            <p className="text-2xl">56 hrs</p>
          </div>
          <button
            type="button"
            className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
          >
            <img src={fitness3} alt="Workout Icon" className="w-8 h-8" />
          </button>
        </div>
        <div className="mt-6">
   
        </div>
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {chartData.map((item) => (
          <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Fitness Goals Section */}
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl text-gray-600">Fitness Goals</p>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
            <span>
              <IoIosMore  />
            </span>
          </p>
        </div>
      </div>
      <div className="mt-10 flex gap-10 flex-wrap justify-center">
        <div className=" border-r-1 border-color m-4 pr-10">
          {fitnessGoals.map((goal) => (
            <div key={goal.title} className="mb-4">
              <p className="text-xl font-semibold text-gray-600">{goal.target}</p>
              <p className="text-gray-500 mt-1">{goal.title}</p>
            </div>
          ))}
        </div>
        <div>
    
        </div>
      </div>
    </div>

    {/* Recent Activities Section */}
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
      <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-semibold">Recent Activities</p>
        
      </div>
      <div className="mt-10 w-72 md:w-400">
        {recentActivities.map((activity) => (
          <div key={activity.title} className="flex justify-between mt-4">
            <div className="flex gap-4">
              <button
                type="button"
                style={{ color: activity.iconColor, backgroundColor: activity.iconBg }}
                className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
              >
                {activity.icon}
              </button>
              <div>
                <p className="text-md font-semibold">{activity.title}</p>
                <p className="text-sm text-gray-400">{activity.desc}</p>
              </div>
            </div>
            <p className={`text-${activity.pcColor}`}>{activity.amount}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-5 border-t-1 border-color">
        <div className="mt-3">
      
        </div>
        <p className="text-gray-400 text-sm">36 Recent Activities</p>
      </div>
    </div>

    {/* Weekly Stats Section */}
    <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
      <div className="flex justify-between items-center gap-2 mb-10">
        <p className="text-xl font-semibold">Weekly Stats</p>
        
      </div>
      <div className="md:w-full overflow-auto">
        <LineChart />
      </div>
    </div>

    {/* Branding Section */}
    <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
      <div className="flex justify-between">
        <p className="text-xl font-semibold">Featured Trainers</p>
        <button type="button" className="text-xl font-semibold text-gray-500">
          <IoIosMore />
        </button>
      </div>
      <div className="mt-10 ">
        {fitnessBranding.data.map((trainer) => (
          <div key={trainer.title} className="flex justify-between mt-4 w-full">
            <div className="flex gap-4">
              <button
                type="button"
                style={{ background: trainer.iconBg }}
                className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
              >
                {trainer.icon}
              </button>
              <div>
                <p className="text-md font-semibold">{trainer.title}</p>
                <p className="text-sm text-gray-400">{trainer.desc}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-4">
        </div>
      </div>
    </div>

    {/* Daily Tips Section */}
    <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
      <div className="flex justify-between">
        <p className="text-xl font-semibold">Daily Fitness Tips</p>
        <button type="button" className="text-xl font-semibold text-gray-500">
          <IoIosMore />
        </button>
      </div>
      <div className="mt-10">
        <img className="md:w-96 h-50" src={fitness3} alt="Workout Tip" />
        <div className="mt-8">
          <p className="font-semibold text-lg">Stay Hydrated</p>
          <p className="text-gray-400">By Johnathan Doe</p>
          <p className="mt-8 text-sm text-gray-400">
            Drinking water is crucial for maintaining your fitness levels and overall health. Ensure you drink at least 8 glasses of water a day.
          </p>
          <div className="mt-3">
     
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard