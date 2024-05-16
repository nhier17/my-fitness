import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FiBarChart } from 'react-icons/fi';

export const userData = [
    {
        userId: 1,
        date: "2024-05-01",
        weight: 150, // in pounds
        bodyFatPercentage: 20, // in percentage
        bmi: 24.5,
        chest: 40, // in inches
        waist: 32, // in inches
        hips: 38, // in inches
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
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Users',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];