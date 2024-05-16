import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);


  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    if (chartContainer && chartContainer.current && data) {
      const dates = data.map((entry) => entry.date);
      const weights = data.map((entry) => entry.weight);

      const chartData = {
        labels: dates,
        datasets: [
          {
            label: 'Weight',
            data: weights,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

      const newChartInstance = new Chart(chartContainer.current, {
        type: 'line',
        data: chartData,
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                parser: 'YYYY-MM-DD',
                tooltipFormat: 'll',
              },
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Weight (lbs)',
              },
            },
          },
        },
      });
      setChartInstance(newChartInstance);
    }

    // Clean up function
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, chartInstance]);

  return (
    <div>
      <canvas  />
    </div>
  );
};

export default LineChart;
