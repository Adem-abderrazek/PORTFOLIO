import React, { useContext } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const ContactForm = () => {
  const  theme = localStorage.getItem('theme') || 'light';

    const styles={ 
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
    
  };
  const currentStyles = styles[theme];

  return (
    <section
      id="contact"
      className="py-16 px-4 flex justify-center"
      style={{ backgroundColor: currentStyles.background, color: currentStyles.text }}
    >
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-3" color={currentStyles.accent} />
              <span>adem11.abderrazek@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-3" color={currentStyles.accent} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Adem-abderrazek" className="hover:opacity-75 ">
                <Github size={24} color={currentStyles.accent} />
                
              </a>
              <h1>Adem-abderrazek</h1>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/adem-abderrazak-61a2552bb/" className="hover:opacity-75">
                <Linkedin size={24} color={currentStyles.accent} />
              </a>
                <h1>Adem Abderrazak</h1>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: currentStyles.background,
                  color: currentStyles.text,
                  borderColor: currentStyles.accent,
                  outlineColor: currentStyles.accent,
                }}
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: currentStyles.background,
                  color: currentStyles.text,
                  borderColor: currentStyles.accent,
                  outlineColor: currentStyles.accent,
                }}
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                rows={4}
                style={{
                  backgroundColor: currentStyles.background,
                  color: currentStyles.text,
                  borderColor: currentStyles.accent,
                  outlineColor: currentStyles.accent,
                }}
              ></textarea>
            </div>
            <button
              className="w-full px-6 py-3 rounded-lg hover:opacity-90"
              style={{ backgroundColor: currentStyles.accent, color: currentStyles.text }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
