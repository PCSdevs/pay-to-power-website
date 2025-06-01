// src/components/ScrollToHashElement.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0); // Ensure DOM is fully loaded
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToHashElement;
