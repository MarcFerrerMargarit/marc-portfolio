import React from 'react';
import CommandLine from '@/components/terminal/CommandLine';

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
            [Tu biografía o descripción personal aquí]
          </p>
          <p>
            [Información sobre tus intereses, motivaciones, etc.]
          </p>
        </div>
      </section>
      
      <CommandLine />
    </div>
  );
}