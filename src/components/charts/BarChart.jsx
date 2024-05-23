import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BarChartData = ({ data }) => {
  return (
    <div className="flex flex-1 p-6 md:p-4 flex-col min-w-[280px] border rounded-lg shadow-lg border-gray-300">
        <h3 className="text-base font-medium text-gray-500">Weekly Calories Burned</h3>
        {data?.totalWeeksCaloriesBurnt && (
            <BarChart
            xAxis={[
              { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
            ]}
            series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
            height={300}
          />
        )}
    </div>
  )
}

export default BarChartData