import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import App from './App';
import AboutLanding from './components/AboutLanding';
import StudentLanding from './components/StudentLanding';
import TutorLanding from './components/TutorLanding';



const Router = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check the current URL hash
    const hash = window.location.hash;
    if (hash === '#/about') {
      setCurrentPage('about');
      // Scroll to top when navigating to about page
      window.scrollTo(0, 0);
    } else if (hash === '#/student') {
      setCurrentPage('student');
      // Scroll to top when navigating to student page
      window.scrollTo(0, 0);
    } else if (hash === '#/tutor') {
      setCurrentPage('tutor');
      // Scroll to top when navigating to tutor page
      window.scrollTo(0, 0);
    } else {
      setCurrentPage('home');
      // Scroll to top when navigating to home page
      window.scrollTo(0, 0);
    }
  }, []);

  // Listen for browser back/forward buttons and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/about') {
        setCurrentPage('about');
        // Scroll to top when navigating to about page via browser back/forward
        window.scrollTo(0, 0);
      } else if (hash === '#/student') {
        setCurrentPage('student');
        // Scroll to top when navigating to student page via browser back/forward
        window.scrollTo(0, 0);
      } else if (hash === '#/tutor') {
        setCurrentPage('tutor');
        // Scroll to top when navigating to tutor page via browser back/forward
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        // Scroll to top when navigating to home page via browser back/forward
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>

      <AnimatePresence mode="wait">
        {currentPage === 'about' ? (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AboutLanding />
          </motion.div>
        ) : currentPage === 'student' ? (
          <motion.div
            key="student"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <StudentLanding />
          </motion.div>
        ) : currentPage === 'tutor' ? (
          <motion.div
            key="tutor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TutorLanding />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <App />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Router; 