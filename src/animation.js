import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useTitleAnime = () => {
  useGSAP(() => {
     gsap.to('#title', {
      opacity: 1,
      y: 0,
      duration: 1, 
      ease: 'power3.out', 
    });
  }, []);
};

export const useCardAnime = () => {
  useGSAP(() => {
    gsap.to('#workout', {
      opacity: 1,
      y: 40,
      duration: 2, 
      ease: 'power2.inOut',
    })
  }, [])  
};
