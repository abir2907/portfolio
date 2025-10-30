import React from 'react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon, KaggleIcon, GFGIcon } from './SocialIcons';

const Hero = () => (
  <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 sm:gap-12 pt-24 sm:pt-28 md:pt-32 pb-12 px-4 md:px-8 overflow-hidden">
    {/* Glossy liquid background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary -z-10"></div>
    <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 via-transparent to-neon/10 -z-10"></div>
    <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-b from-transparent via-accent/5 to-transparent -z-10"></div>
    
    {/* Profile Image with floating animation */}
    <div className="relative group animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-neon rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow"></div>
      <img 
        src="/src/assets/profile.jpg" 
        alt="Abir Chodha" 
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl object-cover border-4 border-accent/50 group-hover:border-neon transform transition-all duration-500 group-hover:scale-105 shadow-2xl" 
      />
    </div>
    
    <div className="max-w-2xl text-center md:text-left space-y-4 sm:space-y-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-accent via-neon to-accent bg-clip-text text-transparent animate-fade-in-up leading-tight">
        Abir Chodha
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-accent animate-fade-in-up animation-delay-200">
        Full Stack Developer | CSE @ VIT-AP (CGPA: 9.18)
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-text/90 leading-relaxed animate-fade-in-up animation-delay-400">
        Computer Science Engineering student at VIT-AP University with expertise in MERN/PERN stack development. Built 3+ production-ready full-stack applications including an AI-powered SaaS platform and secure job portal. Proficient in PostgreSQL/MongoDB schema design, JWT authentication, RESTful API development, and cloud integrations.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-600">
        <a 
          href="#projects" 
          className="group relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-accent to-neon text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-center"
        >
          <span className="relative z-10">View My Projects</span>
        </a>
        <a 
          href="#contact" 
          className="group relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl border-2 border-accent text-accent font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:border-neon hover:text-neon text-center"
        >
          Get In Touch
        </a>
      </div>
      
      <div className="flex gap-4 sm:gap-6 justify-center md:justify-start animate-fade-in-up animation-delay-800 flex-wrap">
        <a href="https://www.linkedin.com/in/abir-chodha/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text hover:text-accent transform hover:scale-125 transition-all duration-300">
          <LinkedInIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="https://github.com/abir2907" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text hover:text-accent transform hover:scale-125 transition-all duration-300">
          <GitHubIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="https://leetcode.com/u/abirrr/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-text hover:text-accent transform hover:scale-125 transition-all duration-300">
          <LeetCodeIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="https://www.kaggle.com/abirchodha" target="_blank" rel="noopener noreferrer" aria-label="Kaggle" className="text-text hover:text-accent transform hover:scale-125 transition-all duration-300">
          <KaggleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/abirchc1ky/" target="_blank" rel="noopener noreferrer" aria-label="GFG" className="text-text hover:text-accent transform hover:scale-125 transition-all duration-300">
          <GFGIcon className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
