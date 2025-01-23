import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Phone, Download, Menu, X } from 'lucide-react';
import CareerJourney from './components/CareerJourney';
import { ContactForm } from './components/ContactForm';
import Skills from './components/Skills';
import FlyingBirdsBackground from './components/Birds';
const Portfolio = () => {
  // Get initial theme from localStorage or default to 'light'
  const [isVisible, setIsVisible] = useState({skills: false, projects: false});
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Theme toggle function with localStorage persistence
  const toggleTheme = () => {
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

  const portfolioData = {
    personalInfo: {
      name: "Jane Smith",
      title: "Full Stack Developer & UI Designer",
      bio: "With 8 years of experience building user-friendly and visually stunning websites. I specialize in React, TypeScript, and UI/UX design, turning complex problems into elegant solutions.",
      email: "jane.smith@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      socialLinks: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
      }
    },
    projects: [
      {
        title: "E-commerce Platform",
        description: "A full-featured online shopping platform with real-time inventory management and AI-powered recommendations",
        tech: ["React", "Node.js", "MongoDB", "Redux"],
        role: "Lead Developer",
        image: "/api/placeholder/600/400",
        link: "https://project1.com"
      },
      {
        title: "Healthcare Dashboard",
        description: "Analytics dashboard for healthcare providers featuring real-time patient data and predictive analytics",
        tech: ["React", "D3.js", "Firebase", "Material-UI"],
        role: "Frontend Developer",
        image: "/api/placeholder/600/400",
        link: "https://project2.com"
      },
      {
        title: "Social Media App",
        description: "Mobile-first social platform for creative professionals with AI-powered content curation",
        tech: ["React Native", "GraphQL", "AWS"],
        role: "Full Stack Developer",
        image: "/api/placeholder/600/400",
        link: "https://project3.com"
      }
    ],
    skills: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
      { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "AWS"] },
      { category: "Tools", items: ["Git", "Docker", "Figma", "Jest"] }
    ],
  };const styles = {
    light: {
      background: '#FAFAFA',
      text: '#333333',
      accent: '#FF6F61',
      accentSecondary: '#00BFA5',
    },
    dark: {
      background: '#121212',
      text: '#E0E0E0',
      accent: '#BB86FC',
      accentSecondary: '#03DAC5',
    },
  };

  const currentTheme = styles[theme];


  // Navigation items
  const navItems = ['Home', 'Projects', 'Skills', 'career', 'Contact'];

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navHeight = 64; // height of navbar in pixels
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  const fadeInUpClass = "opacity-0 translate-y-10 transition-all duration-700 ease-out";
  const fadeInUpVisibleClass = "opacity-100 translate-y-0";
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
       {/* Navigation */}
       <nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">{portfolioData.personalInfo.name}</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-current p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 shadow-lg">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center w-full px-3 py-2 text-base font-medium hover:text-blue-600 dark:hover:text-blue-400"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-5 h-5 mr-2" /> Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5 mr-2" /> Light Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
<FlyingBirdsBackground />
       <section id="home" className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                {portfolioData.personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-light">
                {portfolioData.personalInfo.title}
              </h2>
              <p className="text-lg opacity-90">
                {portfolioData.personalInfo.bio}
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white transform hover:scale-105 transition-all duration-300"
                >
                  Contact Me
                </a>
                <button className="px-8 py-3 rounded-lg border-2 border-accent-primary hover:bg-accent-primary hover:text-white transition-colors duration-300">
                  <Download className="inline-block mr-2 w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-2xl">
                <img
                  src="/api/placeholder/400/400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="opacity-90 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: `${currentTheme.accent}20`, color: currentTheme.accent }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Skills Section */}
       <section id="skills" className="py-16 px-4">
        <Skills />
      </section>

      

      <section id="home" className="pt-32 pb-16 px-4">
        {/* ... */}
      </section>

      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800">
        {/* ... */}
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