import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Theme context (same as previous example)
const ThemeContext = React.createContext({
  theme: 'light',
  styles: {
    light: {
      background: '#FAFAFA',
      text: '#333333',
      accent: '#FF6F61',
      accentSecondary: '#00BFA5',
      tertiary: '#6A5ACD' // Added a new color for Tools category
    },
    dark: {
      background: '#121212',
      text: '#E0E0E0',
      accent: '#BB86FC',
      accentSecondary: '#03DAC5',
      tertiary: '#8A4FFF' // Adjusted for dark theme
    }
  }
});

const SkillCard = ({ skill, theme, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.3 
        }
      }}
      className={`relative rounded-xl shadow-md overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: color + '20',
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke={color} 
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span 
              className={`text-lg font-semibold transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
              }`}
              style={{ color: color }}
            >
              {skill.name}
            </span>
          </div>
        </div>

        {/* Progress Line */}
        <div 
          className={`w-full h-2 rounded-full mb-2 ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
          }`}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ 
              width: `${skill.level * 100}%`,
              transition: {
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
            className="h-full rounded-full"
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}40`
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsShowcase = () => {
  // Get current theme from context
  const  theme  =localStorage.getItem('theme') || 'light'; 
  const { styles } = useContext(ThemeContext);
  const currentStyles = styles[theme];

  // Enhanced skills data with proficiency levels
  const skills = [
    { 
      category: "Frontend", 
      color: currentStyles.accent, 
      items: [
        { name: "React", level: 0.9 },
        { name: "TypeScript", level: 0.8 },
        { name: "Tailwind CSS", level: 0.85 },
        { name: "Next.js", level: 0.75 }
      ]
    },
    { 
      category: "Backend", 
      color: currentStyles.accentSecondary, 
      items: [
        { name: "Node.js", level: 0.7 },
        { name: "Python", level: 0.8 },
        { name: "PostgreSQL", level: 0.75 },
        { name: "AWS", level: 0.6 }
      ]
    },
    { 
      category: "Tools", 
      color: currentStyles.tertiary, 
      items: [
        { name: "Git", level: 0.9 },
        { name: "Docker", level: 0.7 },
        { name: "Figma", level: 0.8 },
        { name: "Jest", level: 0.6 }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div 
      className={`w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#121212]' : 'bg-[#FAFAFA]'
      }`}
    >
      <h2 
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 transition-colors duration-300 ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
        }`}
      >
        My Technical Skills
      </h2>
      
      {skills.map((skillCategory) => (
        <div key={skillCategory.category} className="mb-8">
          {/* Clickable Category Title */}
          <motion.button
            className="w-full text-left mb-4"
            onClick={() => setActiveCategory(activeCategory === skillCategory.category ? null : skillCategory.category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div 
              className={`flex items-center justify-between p-3 sm:p-4 rounded-lg transition-all duration-300 ease-in-out ${
                theme === 'dark' ? 'bg-gray-800 bg-opacity-50' : 'bg-opacity-20'
              }`}
              style={{ 
                backgroundColor: skillCategory.color + (theme === 'dark' ? '30' : '20'), 
                borderLeft: `4px solid ${skillCategory.color}` 
              }}
            >
              <span 
                className="text-lg sm:text-xl font-semibold"
                style={{ color: skillCategory.color }}
              >
                {skillCategory.category}
              </span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                animate={{ 
                  rotate: activeCategory === skillCategory.category ? 180 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <path 
                  d="M7 10l5 5 5-5" 
                  fill="none" 
                  stroke={skillCategory.color} 
                  strokeWidth="2" 
                />
              </motion.svg>
            </div>
          </motion.button>

          {/* Animated Category Content */}
          <AnimatePresence>
            {activeCategory === skillCategory.category && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  transition: { 
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: { 
                    duration: 0.2,
                    ease: "easeInOut"
                  }
                }}
                className="overflow-hidden"
              >
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skillCategory.items.map((skill) => (
                    <SkillCard 
                      key={skill.name} 
                      skill={skill} 
                      theme={theme} 
                      color={skillCategory.color} 
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default SkillsShowcase;