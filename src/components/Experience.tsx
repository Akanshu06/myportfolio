import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
     {
      title: 'Software Developer',
      company: 'Bhavisyad india',
      period: '2024  - present',
      description: 'I was responsible for It and software from a to z ',
      achievements: [
        'Improved user engagement by 35%',
        'Implemented responsive design and all payment though online via razorpay',
        'Optimized loading times by 50%'
      ]
    },
    {
      title: 'Mern Stack Developer internship',
      company: 'The Entrepreneurship Network',
      period: 'fab 2025 - jun 2025',
      description: `Successfully delivered 2+ full-stack projects that were deployed and used in real environments. Implemented secure authentication (JWT) and payment integration (Razorpay), improving system reliability and user trust.`,
      achievements: [
        'Reduced bug resolution time by collaborating with team members and streamlining testing processes.',
        'Led a team of 5 developers',
        'Earned completion certification for outstanding performance during the internship.'
      ]
    },
   
   
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-16 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-600 text-sm">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;