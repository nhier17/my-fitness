import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BarChartData = ({ data }) => {
  const weeks = data?.totalWeeksCaloriesBurnt?.weeks || [];
  const caloriesBurned = data?.totalWeeksCaloriesBurnt?.caloriesBurnt || [];

  console.log('weeks:', weeks);
  console.log('caloriesBurned:', caloriesBurned);

  return (
    <div className="flex flex-1 p-6 md:p-4 flex-col min-w-[280px] border rounded-lg shadow-lg border-gray-300">
      <h3 className="text-base font-medium text-gray-500">Weekly Calories Burned</h3>
      {weeks.length > 0 && caloriesBurned.length > 0 ? (
        <BarChart
          xAxis={[{ scaleType: 'band', data: weeks }]}
          series={[{ data: caloriesBurned }]}
          height={300}
        />
      ) : (
        <p className="text-sm text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default BarChartData;
