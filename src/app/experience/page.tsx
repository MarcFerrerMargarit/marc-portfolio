import React from 'react';
import CommandLine from '@/components/terminal/CommandLine';

/**
 * Experience page component listing professional experience and work history
 */
export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <section className="border border-terminal-dimmed p-4 rounded-md">
        <div className="flex items-center text-sm text-terminal-dimmed mb-2">
          <span>marc@ferrer:~/portfolio/experience$</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          Work <span className="text-terminal-accent">Experience</span>
        </h1>
        
        <div className="space-y-6">
          <div className="border-l-2 border-terminal-dimmed pl-4">
            <h2 className="text-xl font-bold text-terminal-accent">Software Architect</h2>
            <p className="text-sm text-terminal-dimmed">Volkswagen Group Services Barcelona | June 2021 - Present</p>
            <ul className="mt-2 space-y-1">
              <li>• Initially developed Human Machine Interface (HMI) applications for car displays using Java, and conducted testing with Python</li>
              <li>• Transitioned to a Software Architect role, responsible for validating technical proposals and feasibilities for HMI projects</li>
              <li>• Currently serving as Android Architect and Dev/Technical Lead for Android Automotive projects, overseeing technical direction and development</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-terminal-dimmed pl-4">
            <h2 className="text-xl font-bold text-terminal-accent">Junior Software Developer</h2>
            <p className="text-sm text-terminal-dimmed">ITK Systems Engineering SLU | August 2018 - May 2021</p>
            <ul className="mt-2 space-y-1">
              <li>• Developed High-Level Software using technologies like Java, Android, C++, C, C#, Unity, and VR/AR</li>
              <li>• Conducted component testing in C++ and Linux</li>
              <li>• Worked on internal projects to develop web pages and integration software using Django</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-terminal-dimmed pl-4">
            <h2 className="text-xl font-bold text-terminal-accent">C++, C# and Unity Developer</h2>
            <p className="text-sm text-terminal-dimmed">Interiorvista | March 2017 - July 2018</p>
            <ul className="mt-2 space-y-1">
              <li>• Developed C++ algorithms for a 3D Visualization Project</li>
              <li>• Created internal tools for 3D visualization with C# and Unity</li>
              <li>• Completed final degree project on Machine Learning with data exported from internal tools using Python</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-terminal-dimmed pl-4">
            <h2 className="text-xl font-bold text-terminal-accent">IT Intern</h2>
            <p className="text-sm text-terminal-dimmed">Medcom Tech | June 2016 - September 2016</p>
            <ul className="mt-2 space-y-1">
              <li>• IT intern position</li>
            </ul>
          </div>
        </div>
      </section>
      
      <CommandLine />
    </div>
  );
}