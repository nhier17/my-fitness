import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import heart from '../assets/heart1.png';
import nutrition from '../assets/nutrition.png';
import run from '../assets/run.png';
import lotus from '../assets/lotus.png';
import barbell from '../assets/barbell.png';

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