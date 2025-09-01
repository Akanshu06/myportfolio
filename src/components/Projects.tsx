import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Expanse Tracker',
      description: 'A full-stack expanses tracker built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and leaderboard.',
      image: './epxpic.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js','RsetApi'],
      liveUrl: 'https://expanses-tracker-app.vercel.app/login',
      githubUrl: 'https://github.com/Akanshu06/expanses-tracker-app',
      date: '2024'
    },
    {
      title: 'Chat-app',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: './chatapp.png',
      technologies: ['React', 'Tailwind.css', 'Socket.io', 'Express', 'MongoDb'],
      liveUrl: 'https://persnal-chat-p4tcdi8b5-akanshus-projects.vercel.app',
      githubUrl: 'https://github.com/Akanshu06/PERSNAL-CHAT-APP',
      date: '2025'
    },
    {
      title: 'BlogHub',
      description: 'A responsive  blogo app that displays all blogs of authenticated user and user can edit anytimes with beautiful visualizations.',
      image: './blogify.png',
      technologies: ['Marn stack'],
      liveUrl: 'https://blogo-five.vercel.app/login',
      githubUrl: 'https://github.com/Akanshu06/blogo',
      date: '2024'
    },
    {
      title: 'System Authentication',
      description: 'Authentication with google rechapcha interactions built with modern technologies like token based auth system.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;