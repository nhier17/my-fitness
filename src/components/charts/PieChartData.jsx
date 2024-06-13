import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';


const getPieChartData = (selectedExercises) => {
  if (!selectedExercises) return [];
  
  const categoryCounts = selectedExercises.reduce((acc, exercise) => {
    const category = exercise.category || 'Unknown';
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category]++;
    return acc;
  }, {});

  return Object.entries(categoryCounts).map(([bodyPart, count]) => ({
    id: bodyPart,
    label: bodyPart,
    value: count,
  }));
};

const PieChartData = ({ selectedExercises }) => {;
  const data = getPieChartData(selectedExercises);

  return (
    <div>
    <h3 className="text-base font-medium text-gray-500">Exercise Categories</h3>
    {data.length > 0 ? (
      <PieChart
      series={[
        {
          data: data,
        },
      ]}
        height={300}
      />
    ) : (
      <p className="text-sm text-gray-500">No data available</p>
    )}
  </div>
  )
}

export default PieChartData