"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../theme/ThemeToggle';

// Define navigation links
const navLinks = [
  { path: '/', label: '~/home' },
  { path: '/about', label: '~/about-me' },
  { path: '/experience', label: '~/experience' },
  { path: '/skills', label: '~/skills' },
  { path: '/contact', label: '~/contact' },
];

/**
 * Terminal layout component that wraps all pages with terminal-like header and styling
 * while maintaining conventional navigation.
 */
const Terminal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <div className="terminal-container min-h-screen pb-8">
      <header className="terminal-header mb-6">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <span className="text-terminal-accent font-bold mr-2">
              marc@ferrer:~$
            </span>
            <span className="typing-effect max-w-fit">
              cd portfolio
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        
        <nav className="flex space-x-4 mt-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`nav-link ${pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="mt-8 text-terminal-dimmed text-sm">
        <div className="border-t border-terminal-dimmed pt-4">
          <p>© {new Date().getFullYear()} Marc Ferrer Margarit. All rights reserved.</p>
          <p className="mt-1">Built with Next.js and TypeScript</p>
        </div>
      </footer>
    </div>
  );
};

export default Terminal;