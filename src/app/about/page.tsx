import React from 'react';
import CommandLine from '@/components/terminal/CommandLine';

/**
 * About page component showcasing the developer's background and interests
 */
export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="border border-terminal-dimmed p-4 rounded-md">
        <div className="flex items-center text-sm text-terminal-dimmed mb-2">
          <span>marc@ferrer:~/portfolio/about$</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          About <span className="text-terminal-accent">Me</span>
        </h1>
        
        <div className="space-y-4">
          <p>
            From an early age, I developed a deep passion for technology and software development. 
            Programming quickly became both my profession and my hobby, driving me to continuously 
            expand my knowledge and refine my skills.
          </p>
          
          <p>
            I specialize in Android development, particularly in Android Automotive, and have 
            extensive experience in software architecture, Jetpack Compose, and Kotlin. My expertise 
            also extends to Python, C++, and Java, with a strong interest in Machine Learning and 
            Data Science.
          </p>
          
          <p>
            Beyond my professional work, I am committed to lifelong learning, regularly exploring 
            new programming languages, frameworks, and methodologies. In my free time, I enjoy 
            experimenting with technology, optimizing workflows, and engaging with the gaming community.
          </p>
          
          <p>
            Always open to connecting with like-minded professionals and discussing innovative 
            ideas in software development and AI.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-3">Education</h2>
          
          <div className="space-y-3">
            <div className="border-l-2 border-terminal-dimmed pl-4">
              <h3 className="font-bold">Master's Degree in Data Science</h3>
              <p className="text-sm text-terminal-dimmed">Universitat Oberta de Catalunya (UOC) | 2020 - 2022</p>
              <p className="text-sm mt-1">Master's on Data Science coursed via Online, all classes and exams are fully online.</p>
            </div>
            
            <div className="border-l-2 border-terminal-dimmed pl-4">
              <h3 className="font-bold">Engineer's Degree in Computer Engineering</h3>
              <p className="text-sm text-terminal-dimmed">Universitat de Barcelona | 2014 - 2018</p>
            </div>
          </div>
        </div>
      </section>
      
      <CommandLine />
    </div>
  );
}