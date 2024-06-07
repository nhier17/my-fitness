import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { IoWaterOutline } from "react-icons/io5";
import { IoFootsteps } from "react-icons/io5";
import { GiBiceps } from "react-icons/gi";
import { trainer, yogee,pilates } from '../assets';



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
    icon: <FaHeartbeat />,
    title: 'Weight Loss',
    target: 'Lose 5 lbs',
    progress: '2 lbs lost',
    percentage: '40%',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <GiBiceps />,
    title: 'Muscle Gain',
    target: 'Gain 3 lbs',
    progress: '1 lbs gained',
    percentage: '33%',
    iconColor: '#0ef',
    iconBg: '#000000',
    pcColor: 'green-600',
  },
  {
    icon: <IoFootsteps />,
    title: 'Daily Steps',
    target: '10,000 steps/day',
    progress: '7,500 steps',
    percentage: '75%',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'green-600',
  },
  {
    icon: <FaRunning />,
    title: 'Weekly Running',
    target: 'Run 20 miles/week',
    progress: '15 miles',
    percentage: '75%',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'green-600',
  },
  {
    icon: <IoWaterOutline />,
    title: 'Hydration',
    target: 'Drink 3L water/day',
    progress: '2L',
    percentage: '67%',
    iconColor: 'rgb(24, 118, 211)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'green-600',
  },
];


