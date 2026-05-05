import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    const handleReveal = () => {
      if (!window.IntersectionObserver) {
        document.querySelectorAll('.reveal').forEach((el) => el.classList.add('active'));
        return;
      }

      const observerOptions = {
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            // Remove active class when leaving viewport to allow replay
            entry.target.classList.remove('active');
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    };

    // Run after a short delay to ensure DOM is ready
    const timer = setTimeout(handleReveal, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     <Home/>
    </>
  )
}

export default App
