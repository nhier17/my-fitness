import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import heart from '../assets/heart1.png';
import nutrition from '../assets/nutrition.png';
import run from '../assets/run.png';
import lotus from '../assets/lotus.png';
import barbell from '../assets/barbell.png';
import { cm, cm1, cm2, cm3, cm4, cm5, cm6, cm7, cm8,cm9, cm10, cm11 } from '../assets';

export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Exercises",
          link: "/exercises",
        },
        {
          name: "Workouts",
          link: "/workouts",
        },
        {
          name: "Explore",
          link: "/explore",
        },
        {
          name: "Terms & Services",
          link: "/terms-and-services",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "/helpcenter",
        },
        {
          name: "Progress",
          link: "/partners",
        },
        {
          name: "Suggestions",
          link: "/suggestions",
        },
        {
          name: "Challenges",
          link: "/challenges",
        },
        {
          name: "Nutrition",
          link: "/nutrition",
        },
      ],
    }
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: FaInstagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: FaTiktok,
      link: "https://www.tiktok.com/",
    },
    {
      id: "social-media-3",
      icon: FaXTwitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: FaLinkedinIn ,
      link: "https://www.linkedin.com/",
    },
  ];
  export const services = [
    {
      title: 'Strength Training',
      description: 'Build muscle, increase strength, and improve overall fitness with personalized strength training programs tailored to your goals.',
      icon: barbell,
      alt: 'Barbell Icon'
    },
    {
      title: 'Nutrition',
      description: 'Unlock your full potential with expert nutrition guidance, personalized meal plans, and sustainable lifestyle changes for optimal health and performance.',
      icon: nutrition,
      alt: 'Nutrition Icon'
    },
    {
      title: 'Wellness',
      description: 'Nurture your mind, body, and spirit with holistic wellness programs designed to reduce stress, improve sleep, and enhance overall well-being.',
      icon: heart,
      alt: 'Heart Icon'
    },
    {
      title: 'Weight Loss',
      description: 'Achieve your weight loss goals with personalized workout plans, expert coaching, and support to help you transform your body and lifestyle.',
      icon: run,
      alt: 'Run Icon'
    },
    {
      title: 'Yoga',
      description: 'Discover the transformative power of yoga with classes that promote flexibility, strength, and inner peace, suitable for all levels and ages.',
      icon: lotus,
      alt: 'Lotus Icon'
    }
  ];
  export const images = [
    {
      id: 1,
      src: cm,
      alt: 'Image 1'
    },
    {
      id: 2,
      src: cm1,
      alt: 'Image 2'
    },
    {
      id: 3,
      src: cm2,
      alt: 'Image 3'
    },
    {
      id: 4,
      src: cm3,
      alt: 'Image 4'
    },
      {
      id: 5,
      src: cm4,
      alt: 'Image 5'
    },
    {
      id: 6,
      src: cm5,
      alt: 'Image 6'
    },
    {
      id: 7,
      src: cm6,
      alt: 'Image 7'
    },
    {
      id: 8,
      src: cm7,
      alt: 'Image 8'
    },
    {
      id: 9,
      src: cm8,
      alt: 'Image 9'
    },
    {
      id: 10,
      src: cm9,
      alt: 'Image 10'
    },
    {
      id: 11,
      src: cm10,
      alt: 'Image 11'
    },
    {
      id: 12,
      src: cm11,
      alt: 'Image 12'
    }
  ];

  export const posts = [
    {
        id: 1,
        title: 'My Weekly Workout Routine',
        author: 'FitnessFanatic123',
        content: 'Check out my weekly workout routine! I do a mix of strength training, cardio, and flexibility exercises to stay fit and healthy. Let me know what you think!',
        date: 'April 15, 2024'
    },
    {
        id: 2,
        title: 'Favorite Healthy Recipes',
        author: 'HealthyEater99',
        content: 'I love cooking healthy meals at home. Here are some of my favorite recipes for breakfast, lunch, and dinner. Enjoy!',
        date: 'April 14, 2024'
    },
    {
      id: 3,
      title: 'Gotta Get big',
      author: 'RonieColeman',
      content: 'Yeah buddy, light weight!Gotta get big! The hardest choices require the strongest wills.',
      date: 'April 15, 2024'
    }
];