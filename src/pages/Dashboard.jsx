import React, { useState } from 'react'
import { chartData, fitnessBranding, recentActivities, fitnessGoals } from '../data/dummy';
import { LineChartData, CountsCard, BarChartData, WorkoutCard } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const { selectedExercises } = useStateContext();
  return (
<div className="flex-1 h-screen flex justify-center  py-6">
<div className="flex-1 max-w-6xl flex flex-col gap-6 md:gap-3">
  <h2 className="text-2xl px-4 font-medium">DashBoard</h2>
  <div className="flex flex-wrap justify-between gap-6 md:gap-3 px-4">
    {chartData.map((item,index) => (
      <div key={index}>
        <CountsCard key={index} item={item} data={data} />
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