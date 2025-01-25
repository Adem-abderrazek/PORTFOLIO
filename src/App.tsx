import React, { useState, useEffect, MouseEventHandler } from 'react';
import CareerJourney from './components/CareerJourney';
import { ContactForm } from './components/ContactForm';
import Skills from './components/Skills';
import FlyingBirdsBackground from './components/Birds';
import Projects from './components/Projects';
import { Navbar } from './components/Navbar';
import AboutMe from './components/AboutMe';
const Portfolio = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleTheme: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      // Update document class for Tailwind dark mode
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);







  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <FlyingBirdsBackground />
      <section id="home" className="pt-32 pb-16 px-4">
        <AboutMe />
      </section>
      <section id="projects" className="py-16 px-4">
        <Projects />
      </section>
      <section id="skills" className="py-16 px-4">
        <Skills />
      </section>
      <section id="career" className="py-16 px-4 bg-white dark:bg-gray-800">
        <CareerJourney />
      </section>
      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-800">
        <ContactForm />
      </section>

    </div>
  );
};

export default Portfolio;