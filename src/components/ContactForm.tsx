import { Github, Linkedin, Mail, Phone } from "lucide-react";


export const ContactForm = () => {
  

  return (
     <section id="contact" className="py-16 bg-white px-4">
     <div className="max-w-7xl mx-auto">
       <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div>
           <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
           <div className="space-y-4">
             <div className="flex items-center">
               <Mail className="w-6 h-6 text-blue-600 mr-3" />
               <span>jane.smith@example.com</span>
             </div>
             <div className="flex items-center">
               <Phone className="w-6 h-6 text-blue-600 mr-3" />
               <span>+1 (555) 123-4567</span>
             </div>
             <div className="flex space-x-4">
               <a href="#" className="text-gray-600 hover:text-gray-900">
                 <Github size={24} />
               </a>
               <a href="#" className="text-gray-600 hover:text-gray-900">
                 <Linkedin size={24} />
               </a>
             </div>
           </div>
         </div>
         <form className="space-y-4">
           <div>
             <label className="block text-gray-700 mb-2">Name</label>
             <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
           </div>
           <div>
             <label className="block text-gray-700 mb-2">Email</label>
             <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
           </div>
           <div>
             <label className="block text-gray-700 mb-2">Message</label>
             <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
           </div>
           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full">
             Send Message
           </button>
         </form>
       </div>
     </div>
   </section>
  );
};
