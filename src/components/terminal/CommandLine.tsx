"use client"

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Available terminal commands with their descriptions
 */
const COMMANDS = {
  help: "Display available commands",
  about: "Navigate to 'About Me' section",
  experience: "Navigate to 'Experience' section",
  skills: "Navigate to 'Skills' section",
  contact: "Navigate to 'Contact' section",
  home: "Return to the home page",
  clear: "Clear the console",
  theme: "Change the theme (usage: theme [green|blue|amber|white|matrix])"
};

/**
 * Interactive command line component that processes user commands
 * and performs navigation or other actions based on input
 */
const CommandLine: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Focus input field on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  /**
   * Handle form submission when user enters a command
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add command to history
    const newHistory = [...history, `$ ${input}`];
    setHistory(newHistory);

    // Process the command
    processCommand(input.trim().toLowerCase());
    
    // Reset input and history index
    setInput("");
    setHistoryIndex(-1);
  };

  /**
   * Process the entered command and execute corresponding action
   */
  const processCommand = (cmd: string) => {
    const args = cmd.split(' ');
    const command = args[0];
    
    // Process different commands
    switch (command) {
      case 'cd':
      case 'goto':
      case 'open':
        handleNavigation(args[1]);
        break;
      case 'help':
        showHelp();
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'about':
        router.push('/about');
        break;
      case 'experience':
        router.push('/experience');
        break;
      case 'skills':
        router.push('/skills');
        break;
      case 'contact':
        router.push('/contact');
        break;
      case 'home':
        router.push('/');
        break;
      case 'theme':
        if (args[1] && window.changeTheme) {
          window.changeTheme(args[1]);
          setHistory([...history, `$ ${input}`, `Theme changed to ${args[1]}`]);
        } else {
          setHistory([...history, `$ ${input}`, "Usage: theme [green|blue|amber|white|matrix]"]);
        }
        break;
      default:
        setHistory([...history, `$ ${input}`, `Command not recognized: ${command}. Type 'help' to see available commands.`]);
    }
  };

  /**
   * Handle navigation to different sections of the portfolio
   */
  const handleNavigation = (path?: string) => {
    if (!path) {
      setHistory([...history, `$ ${input}`, "Please specify a path. Example: cd about"]);
      return;
    }
    
    // Map common paths
    const pathMap: {[key: string]: string} = {
      'about': '/about',
      'about-me': '/about',
      'experience': '/experience',
      'skills': '/skills',
      'contact': '/contact',
      'home': '/',
      '~': '/',
      'portfolio': '/',
    };

    if (pathMap[path]) {
      router.push(pathMap[path]);
    } else {
      setHistory([...history, `$ ${input}`, `Path not found: ${path}`]);
    }
  };

  /**
   * Display help information about available commands
   */
  const showHelp = () => {
    const helpText = ["Available commands:"];
    
    Object.entries(COMMANDS).forEach(([cmd, desc]) => {
      helpText.push(`  ${cmd.padEnd(12)} - ${desc}`);
    });
    
    helpText.push("");
    helpText.push("Navigation:");
    helpText.push("  cd [path]      - Navigate to a section (example: cd about-me)");
    helpText.push("  goto [path]    - Alias for cd");
    helpText.push("  open [path]    - Alias for cd");
    
    setHistory([...history, `$ ${input}`, ...helpText]);
  };

  /**
   * Handle keyboard navigation for command history
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle up/down arrows for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        // Extract command without the prompt
        const cmd = history[history.length - 1 - newIndex].replace(/^\$ /, '');
        setInput(cmd);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const cmd = history[history.length - 1 - newIndex].replace(/^\$ /, '');
        setInput(cmd);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="border border-terminal-dimmed rounded-md p-4 bg-terminal-bg mt-6">
      <div className="mb-2 text-sm text-terminal-dimmed">
        Type a command or 'help' to see available options
      </div>
      
      {/* Command history */}
      <div className="mb-4 font-mono text-sm">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('$') ? 'text-terminal-text' : 'text-terminal-dimmed'}>
            {line}
          </div>
        ))}
      </div>
      
      {/* Command input */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-terminal-accent mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-terminal-text"
          autoFocus
          aria-label="Terminal command input"
        />
      </form>
    </div>
  );
};

// Add type definition for the global theme function
declare global {
  interface Window {
    changeTheme?: (theme: string) => void;
  }
}

export default CommandLine;