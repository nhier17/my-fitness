import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { fitnessGoals } from '../data/dummy';
import { PieChartData, BarChartData, WorkoutCard, RecentWorkouts, Calendar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { getDashboardData } from '../utils/api';
import WorkoutSummary from './WorkoutSummary';

const Dashboard = () => {
  const [data, setData] = useState({});
  const [selectedDates, setSelectedDates] = useState([])
  const { selectedExercises } = useStateContext();

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await getDashboardData();
        setData(response);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };
    fetchSummary();
  }, []);
  //date change
  const handleDateChange = (date) => {
    setSelectedDates((prevDates) => {
      const dateExists = prevDates.some((selectedDate) =>
        dayjs(selectedDate).isSame(date, 'day')
      );
      if (dateExists) {
        return prevDates.filter(
          (selectedDate) => !dayjs(selectedDate).isSame(date, 'day')
        );
      } else {
        return [...prevDates, date];
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-md w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Calendar onDateChange={handleDateChange} selectedDates={selectedDates} />
      </div>

      <div className="mb-10">
        <WorkoutSummary data={data} />
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-md w-full lg:w-1/3">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold text-gray-700">Fitness Goals</p>
          </div>
          <div className="mt-10 w-72 md:w-400">
            {fitnessGoals.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold text-gray-500">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.target}</p>
                  </div>
                </div>
                <p className="text-gray-400">{item.percentage}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-md w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold text-gray-600">Progressive Overload</p>
          </div>
          <div className="md:w-full overflow-auto">
            <BarChartData data={data} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <PieChartData selectedExercises={selectedExercises} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <h3 className="text-2xl font-medium mb-6">Today's Workout</h3>
        <div className="flex flex-wrap justify-center gap-5">
          {selectedExercises.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
        <RecentWorkouts data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
