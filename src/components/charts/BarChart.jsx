import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BarChartData = ({ data }) => {
  if (!data?.progress) {
    return (
      <div className="flex flex-1 p-6 md:p-4 flex-col min-w-[280px] border rounded-lg shadow-lg border-gray-300">
        <h3 className="text-base font-medium text-gray-500">Workout Summary</h3>
        <p className="text-sm text-gray-500">No data available</p>
      </div>
    );
  }

  const dates = data.progress.dates.map(date => new Date(date).toLocaleDateString());
  const weights = data.progress.weights;
  const reps = data.progress.reps;

  return (
    <div className="flex flex-1 p-6 md:p-4 flex-col min-w-[280px] border rounded-lg shadow-lg border-gray-300">
      <h3 className="text-base font-medium text-gray-500">Workout Summary</h3>
      <BarChart
        xAxis={[
          { scaleType: "band", data: dates, label: "Date" },
        ]}
        series={[
          { data: weights, label: "Weights" },
          { data: reps, label: "Reps" },
        ]}
        height={300}
      />
    </div>
  );
};

export default BarChartData;
