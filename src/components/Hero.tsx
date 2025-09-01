import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Akanshu Pandey
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, responsive web applications using modern
            technologies. Passionate about clean code, user experience, and
            bringing ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              View My Work
            </button>
            <a href="/nresume3.pdf" download>
              <button className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/Akanshu06"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/akanshu-pandey/"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
              href="akanshu06@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
