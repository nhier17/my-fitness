import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BarChartData = ({ data }) => {

  return (
    <div className="flex flex-1 p-6 md:p-4 flex-col min-w-[280px] border rounded-lg shadow-lg border-gray-300">
      <h3 className="text-base font-medium text-gray-500">Workout Summary</h3>
      <p className="text-gray-500 text-sm capitalize">Total calories burnt today: {data?.totalCaloriesBurnt}</p>
      <p className="text-gray-500 text-sm capitalize">Average calories burnt per workout: {data?.averageCalories}</p>
      <p className="text-gray-500 text-sm capitalize">Total Workouts today: {data?.totalWorkouts}</p>
      {data.totalWeeksCaloriesBurnt? (
        <BarChart
        xAxis={[
          { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
        ]}
        series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurnt }]}
        height={300}
        />
      ) : (
        <p className="text-sm text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default BarChartData;
