import React from 'react';
import CommandLine from '@/components/terminal/CommandLine';

/**
 * Contact page component with contact information and form
 */
export default function ContactPage() {
  return (
    <div className="space-y-6">
      <section className="border border-terminal-dimmed p-4 rounded-md">
        <div className="flex items-center text-sm text-terminal-dimmed mb-2">
          <span>marc@ferrer:~/portfolio/contact$</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          Contact <span className="text-terminal-accent">Me</span>
        </h1>
        
        <div className="space-y-4">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Contact information */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Connect With Me</h2>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-terminal-accent mr-2"></span>
                  <span className="text-terminal-dimmed mr-2">Email:</span>
                  <a href="mailto:marcferm@gmail.com" className="hover:text-terminal-accent">
                    marcferm@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <span className="text-terminal-accent mr-2"></span>
                  <span className="text-terminal-dimmed mr-2">GitHub:</span>
                  <a href="https://github.com/MarcFerrerMargarit" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-accent">
                    github.com/MarcFerrerMargarit
                  </a>
                </div>
                
                <div className="flex items-center">
                  <span className="text-terminal-accent mr-2"></span>
                  <span className="text-terminal-dimmed mr-2">LinkedIn:</span>
                  <a href="https://linkedin.com/in/marcferrermargarit" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-accent">
                    linkedin.com/in/marcferrermargarit
                  </a>
                </div>
                
                <div className="flex items-center">
                  <span className="text-terminal-accent mr-2"></span>
                  <span className="text-terminal-dimmed mr-2">Location:</span>
                  <span>Sant Sadurni d'Anoia, Barcelona</span>
                </div>
              </div>
            </div>
            
            {/* Simple contact form */}
            <div>
              <h2 className="text-xl font-bold mb-4">Send Me a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-terminal-dimmed mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-terminal-bg border border-terminal-dimmed rounded p-2 focus:border-terminal-accent focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-terminal-dimmed mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-terminal-bg border border-terminal-dimmed rounded p-2 focus:border-terminal-accent focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-terminal-dimmed mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-terminal-bg border border-terminal-dimmed rounded p-2 focus:border-terminal-accent focus:outline-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-terminal-dimmed hover:bg-terminal-accent text-terminal-bg px-4 py-2 rounded transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <CommandLine />
    </div>
  );
}