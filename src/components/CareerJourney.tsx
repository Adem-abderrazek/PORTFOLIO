import React, { useState } from 'react';
import { BookOpen, Briefcase, Award, ChevronRight, ChevronLeft, Star } from 'lucide-react';
const theme = localStorage.getItem('theme')
const CareerJourney = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const milestones = [
    {
      id: 1,
      type: 'education',
      title: 'Computer Science Degree',
      year: '2018-2022',
      institution: 'University École supérieure des sciences et de la technologie',
      description: 'Specialized in Web Development',
      icon: BookOpen,
      achievements: [
        'Dean\'s List 2020',
        'Best Project Award',
      ],
      color: 'bg-blue-500'
    },
    {
      id: 2,
      type: 'career',
      title: 'Junior Developer',
      year: '2022-2023',
      institution: 'Tech Corp',
      description: 'Frontend Development  and backEnd Development',
      icon: Briefcase,
      achievements: [
        'Completed 5 Major Projects',
        'Employee of the Month',
        'Led Team Training'
      ],
      color: 'bg-green-500'
    },
    {
      id: 3,
      type: 'career',
      title: 'Senior Developer',
      year: '2023-Present',
      institution: 'Innovation Labs',
      description: 'Full Stack Development and UI/UX Design',
      icon: Award,
      achievements: [
        'System Architecture Design',
        'Scrum Master',
        'Project Management'],
      color: 'bg-purple-500'
    }
  ];

  const handleNext = () => {
    if (currentIndex < milestones.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const CurrentIcon = milestones[currentIndex].icon;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-{theme==dark?[#121212]:[#fff]} rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full ${
            currentIndex === 0 ? 'text-gray-300' : 'text-blue-500 hover:bg-blue-50'
          }`}
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-700">
            My Journey
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === milestones.length - 1}
          className={`p-2 rounded-full ${
            currentIndex === milestones.length - 1 
              ? 'text-gray-300' 
              : 'text-blue-500 hover:bg-blue-50'
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Main content card */}
      <div className={`rounded-xl p-6 text-white transition-all duration-300 ${milestones[currentIndex].color}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white bg-opacity-20 rounded-lg">
            <CurrentIcon size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{milestones[currentIndex].title}</h2>
            <p className="opacity-90">{milestones[currentIndex].year}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{milestones[currentIndex].institution}</h3>
          <p className="opacity-90">{milestones[currentIndex].description}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Achievements</h3>
          <div className="grid gap-3">
            {milestones[currentIndex].achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white bg-opacity-10"
              >
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-yellow-300" />
                  <span>{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {milestones.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? milestones[currentIndex].color
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerJourney;