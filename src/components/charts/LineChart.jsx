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
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      )}
    </div>
  );
};

export default LineChartData;
