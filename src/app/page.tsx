import React from 'react';
import Link from 'next/link';
import CommandLine from '@/components/terminal/CommandLine';

/**
 * Home page component that introduces the developer with a terminal-inspired
 * design while maintaining conventional navigation.
 */
export default function Home() {
  return (
    <div className="space-y-6">
      <section className="border border-terminal-dimmed p-4 rounded-md">
        <div className="flex items-center text-sm text-terminal-dimmed mb-2">
          <span>marc@ferrer:~/portfolio$</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">
          Hello, I'm <span className="text-terminal-accent">Marc Ferrer Margarit</span>
        </h1>
        
        <p className="text-xl mb-6">
          <span className="typing-effect max-w-fit">
            Software Developer
          </span>
        </p>
        
        <p className="mb-6">
          Welcome to my portfolio. Navigate through the sections to learn more about me,
          my skills, and my work.
        </p>
        
        <div className="flex space-x-4">
          <Link 
            href="/about" 
            className="bg-terminal-dimmed hover:bg-terminal-accent text-terminal-bg px-4 py-2 rounded transition-colors"
          >
            About Me
          </Link>
          <Link 
            href="/experience" 
            className="border border-terminal-dimmed hover:border-terminal-accent px-4 py-2 rounded transition-colors"
          >
            Experience
          </Link>
        </div>
      </section>
      
      <section className="border border-terminal-dimmed p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4 border-b border-terminal-dimmed pb-2">
          $ quick-info --about-me
        </h2>
        <div className="space-y-2">
          <p>
            <span className="text-terminal-dimmed"></span> Passionate software developer with experience in building robust applications
          </p>
          <p>
            <span className="text-terminal-dimmed"></span> Specialized in [your main technologies/frameworks]
          </p>
          <p>
            <span className="text-terminal-dimmed"></span> Currently working on exciting projects that [brief description]
          </p>
        </div>
      </section>
      
      <section className="border border-terminal-dimmed p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4 border-b border-terminal-dimmed pb-2">
          $ git stats --summary
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 border border-terminal-dimmed rounded-md">
            <p className="text-terminal-accent text-2xl font-bold">X+</p>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="p-3 border border-terminal-dimmed rounded-md">
            <p className="text-terminal-accent text-2xl font-bold">Y+</p>
            <p className="text-sm">Projects</p>
          </div>
          <div className="p-3 border border-terminal-dimmed rounded-md">
            <p className="text-terminal-accent text-2xl font-bold">Z+</p>
            <p className="text-sm">Clients</p>
          </div>
          <div className="p-3 border border-terminal-dimmed rounded-md">
            <p className="text-terminal-accent text-2xl font-bold">W+</p>
            <p className="text-sm">Tech Stack</p>
          </div>
        </div>
      </section>
      
      {/* Interactive command line */}
      <CommandLine />
    </div>
  );
}