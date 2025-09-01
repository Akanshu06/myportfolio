import React from 'react';
import { Award, Users, Coffee, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '30+' },
    { icon: Users, label: 'Happy Clients', value: '3+' },
    { icon: Coffee, label: 'Cups of Tea', value: '1000+' },
    { icon: Clock, label: 'Hands-on Experience', value: '1+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Passionate Developer with a Creative Mind
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a full-stack developer with hands-on experience creating digital experiences 
              that are not only functional but also beautiful. I specialize in React, Node.js, Express.js, Mongodb, Mysql and 
              modern web technologies.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey started with a curiosity about how websites work, and it has evolved into 
              a passion for creating seamless user experiences. I believe in writing clean, 
              maintainable code and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while planning my next project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;