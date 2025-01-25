import React, { useState, useContext } from 'react';
import { ArrowRight, Github, ExternalLink, Play } from 'lucide-react';

const ThemeContext = React.createContext({
  theme: 'light',
  styles: {
    light: {
      background: '#FAFAFA',
      text: '#333333',
      accent: '#FF6F61',
      accentSecondary: '#00BFA5',
      tertiary: '#6A5ACD'
    },
    dark: {
      background: '#121212',
      text: '#E0E0E0',
      accent: '#BB86FC',
      accentSecondary: '#03DAC5',
      tertiary: '#8A4FFF' 
    }
  }
});

const portfolioData = {
    projects: [
        {
            title: "AI-Powered E-commerce Platform",
            description: "Advanced online marketplace with machine learning-driven personalization and real-time inventory management.",
            tech: ["React", "Node.js", "TensorFlow", "GraphQL"],
            role: "Lead Architect",
            image: "https://infostride.com/wp-content/uploads/2024/01/How-Much-Does-eCommerce-Website-Development-Cost-1200x717.png",
            githubLink: "https://github.com/project1",
            demoLink: "https://project1-demo.com",
            complexity: "High",
            duration: "6 months"
        },
        {
            title: "Healthcare Analytics Dashboard",
            description: "Comprehensive medical insights platform with predictive patient risk analysis and interactive data visualization.",
            tech: ["React", "D3.js", "Python", "Kubernetes"],
            role: "Frontend Lead",
            image: "",
            githubLink: "https://github.com/project2",
            demoLink: "https://www.youtube.com/watch?v=56MD5YtKo0c&ab_channel=DennisBabych",
            complexity: "Medium",
            duration: "4 months"
        },
        {
            title: "Decentralized Social Network",
            description: "Blockchain-powered social media platform ensuring user data privacy and transparent content monetization.",
            tech: ["React Native", "Ethereum", "Web3.js", "IPFS"],
            role: "Full Stack Developer",
            image: "/api/placeholder/600/400",
            githubLink: "https://github.com/project3",
            demoLink: "https://project3-demo.com",
            complexity: "High",
            duration: "8 months"
        },
        {
            title: "Smart City IoT Management",
            description: "Real-time urban infrastructure monitoring system using distributed sensor networks and edge computing.",
            tech: ["React", "TypeScript", "Docker", "LoRaWAN"],
            role: "IoT Solutions Architect",
            image: "/api/placeholder/600/400",
            githubLink: "https://github.com/project4",
            demoLink: "https://project4-demo.com",
            complexity: "Very High",
            duration: "12 months"
        },
        {
            title: "Machine Learning Trading Bot",
            description: "Automated cryptocurrency trading platform with adaptive machine learning investment strategies.",
            tech: ["Python", "TensorFlow", "Flask", "Binance API"],
            role: "AI Developer",
            image: "/api/placeholder/600/400",
            githubLink: "https://github.com/project5",
            demoLink: "https://project5-demo.com",
            complexity: "High",
            duration: "5 months"
        },
        {
            title: "Augmented Reality Education App",
            description: "Interactive learning platform transforming educational content through immersive AR experiences.",
            tech: ["Unity", "ARKit", "React Native", "WebGL"],
            role: "Lead Developer",
            image: "/api/placeholder/600/400",
            githubLink: "https://github.com/project6",
            demoLink: "https://project6-demo.com",
            complexity: "Medium",
            duration: "7 months"
        }
    ]
};










const DemoModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-4xl relative">
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
                Close
            </button>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">{project.title} - Demo</h2>
            <div className="aspect-video">
            <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/aqz-KE-bpKQ"
    title={`${project.title} Demo`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
/>

            </div>
        </div>
    </div>
);

const ProjectCard = ({ project, theme, onShowDemo }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
        <div className="relative">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
                <a 
                    href={project.githubLink} 
                    target="_blank" 
                    className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                    <Github size={20} />
                </a>
                <button 
                    onClick={() => onShowDemo(project)}
                    className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition group/demo"
                >
                    <Play size={20} className="group-hover/demo:scale-110 transition" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/demo:opacity-100 transition-opacity">
                        Watch Demo
                    </span>
                </button>
            </div>
        </div>
        {/* Rest of the card remains the same */}
    </div>
);

const SkillsShowcase = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDemo, setSelectedDemo] = useState(null);
    const projectsPerPage = 3;
    
    const theme = localStorage.getItem('theme') || 'light';
    const { styles } = useContext(ThemeContext);
    const currentTheme = styles[theme];

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = portfolioData.projects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(portfolioData.projects.length / projectsPerPage);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {selectedDemo && (
                <DemoModal 
                    project={selectedDemo} 
                    onClose={() => setSelectedDemo(null)} 
                />
            )}

            <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {currentProjects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        theme={currentTheme} 
                        onShowDemo={setSelectedDemo}
                    />
                ))}
            </div>
            
            <div className="flex justify-center space-x-2">
                <button 
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-50"
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-md transition ${
                            currentPage === index + 1 
                                ? `bg-${currentTheme.accent} text-white` 
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button 
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SkillsShowcase;