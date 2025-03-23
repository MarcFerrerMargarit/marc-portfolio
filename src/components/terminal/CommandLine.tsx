"use client"

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const COMMANDS = {
  help: "Muestra comandos disponibles",
  about: "Navega a la sección 'Sobre mí'",
  experience: "Navega a la sección 'Experiencia'",
  skills: "Navega a la sección 'Habilidades'",
  contact: "Navega a la sección 'Contacto'",
  home: "Vuelve a la página principal",
  clear: "Limpia la consola",
  theme: "Cambia el tema (uso: theme [green|blue|amber|white|matrix])"
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
          setHistory([...history, `$ ${input}`, `Tema cambiado a ${args[1]}`]);
        } else {
          setHistory([...history, `$ ${input}`, "Uso: theme [green|blue|amber|white|matrix]"]);
        }
        break;
      default:
        setHistory([...history, `$ ${input}`, `Comando no reconocido: ${command}. Escribe 'help' para ver comandos disponibles.`]);
    }
  };

  const handleNavigation = (path?: string) => {
    if (!path) {
      setHistory([...history, `$ ${input}`, "Especifica una ruta. Ejemplo: cd about"]);
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
      setHistory([...history, `$ ${input}`, `Ruta no encontrada: ${path}`]);
    }
  };

  const showHelp = () => {
    const helpText = ["Comandos disponibles:"];
    
    Object.entries(COMMANDS).forEach(([cmd, desc]) => {
      helpText.push(`  ${cmd.padEnd(12)} - ${desc}`);
    });
    
    helpText.push("");
    helpText.push("Navegación:");
    helpText.push("  cd [ruta]      - Navega a una sección (ejemplo: cd about-me)");
    helpText.push("  goto [ruta]    - Alias para cd");
    helpText.push("  open [ruta]    - Alias para cd");
    
    setHistory([...history, `$ ${input}`, ...helpText]);
  };

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
        Escribe un comando o 'help' para ver opciones disponibles
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