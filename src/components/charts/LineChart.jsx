import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const LineChartData = ({ data }) => {

  return (
    <div className="flex flex-1 p-6 md:p-4 flex-col min-w-[280px] border rounded-lg shadow-lg border-gray-300">
      <h3 className="text-base font-medium text-gray-500">Weekly Calories Burned</h3>
      {data?.pieChartData && (
          <PieChart
          series={[
            {
              data: data?.pieChartData,
              innerRadius: 30,
              outerRadius: 120,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          height={300}
        />
      )}
    </div>
  );
};

export default LineChartData;
