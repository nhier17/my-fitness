import { useState } from 'react'
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

export const useScrollAnime = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useGSAP(() => {
      const handleScroll = () => {
          setScrollPosition(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  useGSAP(() => {
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

      elementsToAnimate.forEach((element) => {
          const elementOffsetTop = element.offsetTop;
          const windowHeight = window.innerHeight;
          const scrollThreshold = windowHeight * 0.8; // Adjust this threshold as needed

          if (scrollPosition > elementOffsetTop - scrollThreshold && scrollPosition < elementOffsetTop + element.clientHeight) {
              gsap.to(element, {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  ease: 'power3.out',
              });
          } else {
              gsap.to(element, {
                  opacity: 0,
                  y: 50,
                  duration: 1,
                  ease: 'power3.out',
              });
          }
      });
  }, [scrollPosition]);

  return scrollPosition;
}

export const useCategoryAnime = (containerRef, selectedCategory) => {
  useGSAP(() => {
    console.log('useCategoryAnime hook triggered');
    const container = containerRef.current;

    if (container) {
      const activeCategory = container.querySelector('.category-card.active');
      if (activeCategory) {
        const containerWidth = container.offsetWidth;
        const activeCategoryWidth = activeCategory.offsetWidth;
        const activeCategoryOffsetLeft = activeCategory.offsetLeft;
        const scrollLeft = activeCategoryOffsetLeft - (containerWidth - activeCategoryWidth) / 2;

        gsap.to(container, {
          scrollTo: {
            x: scrollLeft,
            ease: 'power2.out'
          },
          duration: 0.5
        });
      }
    }
  }, [containerRef, selectedCategory]);
};
