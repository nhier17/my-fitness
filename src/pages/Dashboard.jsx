import React, { useState, useEffect } from 'react'
import { chartData, fitnessGoals } from '../data/dummy';
import { LineChartData, CountsCard, BarChartData, WorkoutCard } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { getDashboardData } from '../utils/api';

const Dashboard = () => {
  const [data, setData] = useState({});
  const { selectedExercises } = useStateContext();

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await getDashboardData();
        console.log(response);
      setData(response);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
  
    }
    fetchSummary();
  }, []);


  return (
<div className="container flex-1 flex justify-center mx-auto px-4 py-8">
<div className="flex-1 flex flex-col gap-6 md:gap-3">
  <h2 className="text-2xl px-4 font-medium">DashBoard</h2>
  <div className="flex flex-wrap justify-between gap-6 md:gap-3 px-4">
    {chartData.map((item) => (
      <div key={item.id}>
        <CountsCard key={item.id} item={item} data={data} />
      </div>
    ))}
  </div>
<div className="flex flex-wrap justify-center gap-5 md:gap-3 mb-24">
{fitnessGoals.map((goal, index) => (
  <div key={index} className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <h3 className="font-semibold text-gray-500 text-base">{goal.title}</h3>
    <p className="text-sm text-gray-500">{goal.target}</p>
    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
      <div 
      className="bg-blue-600 h-4 rounded-full"
      style={{ width: goal.percentage}}
      ></div>
    </div>
  </div>
))}
</div>

  <div className="bg-white flex flex-wrap justify-between gap-6 md:gap-3 px-4">
    <BarChartData data={data} />
    <LineChartData data={data} />
  </div>

  <div className="bg-white flex flex-col gap-6 md:gap-3 px-4">
    <h3 className="text-2xl font-medium">Today's Workout</h3>
    <div className="flex flex-wrap justify-center gap-5 md:gap-3 mb-24">
      {selectedExercises.map((workout, index) => (
        <WorkoutCard key={index} workout={workout}  />
      ))}
    </div>
  </div>
</div>
</div>
  )
}

export default Dashboard