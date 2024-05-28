import { FiBarChart } from 'react-icons/fi';
import {  FaRunning, FaDumbbell, FaFire } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { trainer, yogee,pilates } from '../assets'

export const userData = [
    {
        userId: 1,
        date: "2024-05-01",
        weight: 150, 
        bodyFatPercentage: 20, 
        bmi: 24.5,
        chest: 40, 
        waist: 32, 
        hips: 38, 
      },
      {
        userId: 2,
        date: "2024-05-05",
        weight: 149,
        bodyFatPercentage: 19.5,
        bmi: 24.3,
        chest: 39.5,
        waist: 31.5,
        hips: 37.5,
      },
      {
        userId: 3,
        date: "2024-05-10",
        weight: 148,
        bodyFatPercentage: 19,
        bmi: 24.1,
        chest: 39,
        waist: 31,
        hips: 37,
      },  
      {
        userId: 4,
        date: "2024-05-15",
        weight: 147,
        bodyFatPercentage: 18.5,
        bmi: 23.9,
        chest: 38.5,
        waist: 30.5,
        hips: 36.5,
      },
      {
        userId: 5,
        date: "2024-05-20",
        weight: 146,
        bodyFatPercentage: 18,
        bmi: 23.7,
        chest: 38,
        waist: 30,
        hips: 36,
      },
     {
        userId: 6,
        date: "2024-05-25",
        weight: 145,
        bodyFatPercentage: 17.5,
        bmi: 23.5,
        chest: 37.5,
        waist: 29.5,
        hips: 35.5,
      },
     {
        userId: 7,
        date: "2024-05-30",
        weight: 144,
        bodyFatPercentage: 17,
        bmi: 23.3,
        chest: 37,
        waist: 29,
        hips: 35,
      },
      {
        userId: 8,
        date: "2024-06-05",
        weight: 143,
        bodyFatPercentage: 16.5,
        bmi: 23.1,
        chest: 36.5,
        waist: 28.5,
        hips: 34.5,
      },
     {
        userId: 9,
        date: "2024-06-10",
        weight: 142,
        bodyFatPercentage: 16,
        bmi: 22.9,
        chest: 36,
        waist: 28,
        hips: 34,
      },
     {
        userId: 10,
        date: "2024-06-15",
        weight: 141,
        bodyFatPercentage: 15.5,
        bmi: 22.7,
        chest: 35.5,
        waist: 27.5,
        hips: 33.5,
      },
     
]; 
export const chartData = [
  {
    name: "Calories Burned",
    icon: (
      <FaFire style={{ color: 'inherit', fontSize: '26px'}} />
    ),
    desc: "Total calories burned today",
    key: "totalCaloriesBurnt",
    unit: "kcal",
    color: "#eb9e34",
    lightColor: "#FDF4EA",
  },
  {
    name: "Workouts",
    icon: <FaDumbbell style={{ color: 'inherit', fontSize: '26px'}}  />,
    desc: "Total no of workouts for today",
    key: "totalWorkouts",
    unit: "",
    color: "#41C1A6",
    lightColor: "#E8F6F3",
  },
  {
    name: "Average  Calories Burned",
    icon: <FiBarChart style={{ color: 'inherit', fontSize: '26px'}} />,
    desc: "Average Calories Burned on each workout",
    key: "avgCaloriesBurntPerWorkout",
    unit: "kcal",
    color: "#FF9AD5",
    lightColor: "#FEF3F9",
  },
];
// data/dummy.js

export const fitnessBranding = {
  data: [
    {
      icon: <img src={trainer} alt="Trainer 1" className="rounded-full w-10 h-10" />,
      iconBg: '#03C9D7',
      title: 'John Doe',
      desc: 'Certified Personal Trainer',
    },
    {
      icon: <img src={yogee} alt="Trainer 2" className="rounded-full w-10 h-10" />,
      iconBg: '#FB9678',
      title: 'Jane Smith',
      desc: 'Yoga Instructor',
    },
    {
      icon: <img src={pilates} alt="Trainer 3" className="rounded-full w-10 h-10" />,
      iconBg: '#FF5C8E',
      title: 'Emily Johnson',
      desc: 'Pilates Expert',
    },
  ],
};

export const recentActivities = [
  {
    icon: <FaRunning className="w-8 h-8" />,
    iconBg: '#03C9D7',
    title: 'Morning Run',
    desc: '5 miles in 40 minutes',
    amount: '300 cal',
    pcColor: 'green-600',
  },
  {
    icon: <GrYoga  className="w-8 h-8" />,
    iconBg: '#FB9678',
    title: 'Yoga Session',
    desc: '1 hour session',
    amount: '200 cal',
    pcColor: 'red-600',
  },
  {
    icon: <FaDumbbell className="w-8 h-8" />,
    iconBg: '#FF5C8E',
    title: 'Strength Training',
    desc: '45 minutes workout',
    amount: '400 cal',
    pcColor: 'blue-600',
  },
];

export const fitnessGoals = [
  {
    title: 'Weight Loss',
    target: 'Lose 5 lbs',
    progress: '2 lbs lost',
    percentage: '40%',
  },
  {
    title: 'Muscle Gain',
    target: 'Gain 3 lbs',
    progress: '1 lbs gained',
    percentage: '33%',
  },
  {
    title: 'Daily Steps',
    target: '10,000 steps/day',
    progress: '7,500 steps',
    percentage: '75%',
  },
  {
    title: 'Weekly Running',
    target: 'Run 20 miles/week',
    progress: '15 miles',
    percentage: '75%',
  },
  {
    title: 'Hydration',
    target: 'Drink 3L water/day',
    progress: '2L',
    percentage: '67%',
  },
];

export const workoutData = [
  {
    title: 'Cardio',
    amount: '20 hrs',
    percentage: '75%',
    icon: <img src="path/to/cardio.jpg" alt="Cardio" className="w-8 h-8" />,
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    title: 'Strength Training',
    amount: '15 hrs',
    percentage: '60%',
    icon: <img src="path/to/strength.jpg" alt="Strength" className="w-8 h-8" />,
    iconColor: '#FB9678',
    iconBg: '#FFF2E6',
    pcColor: 'red-600',
  },
  {
    title: 'Flexibility',
    amount: '10 hrs',
    percentage: '50%',
    icon: <img src="path/to/flexibility.jpg" alt="Flexibility" className="w-8 h-8" />,
    iconColor: '#FF5C8E',
    iconBg: '#FFE8EF',
    pcColor: 'blue-600',
  },
  {
    title: 'Balance',
    amount: '5 hrs',
    percentage: '25%',
    icon: <img src="path/to/balance.jpg" alt="Balance" className="w-8 h-8" />,
    iconColor: '#8BE78B',
    iconBg: '#E8FBE8',
    pcColor: 'yellow-600',
  },
];
