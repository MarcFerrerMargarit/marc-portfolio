"use client"

import React, { useState, useEffect } from 'react';

// Define theme colors
const themes = {
  green: {
    bg: '#0c0c0c',
    text: '#33ff33',
    accent: '#33ff33',
    dimmed: '#175e17',
    cursor: '#33ff33',
    name: 'Verde Clásico'
  },
  blue: {
    bg: '#012456',
    text: '#f0f0f0',
    accent: '#569cd6',
    dimmed: '#3c73a6',
    cursor: '#569cd6',
    name: 'Azul PowerShell'
  },
  amber: {
    bg: '#2b2b2b',
    text: '#ffbf00',
    accent: '#ffbf00',
    dimmed: '#a67b00',
    cursor: '#ffbf00',
    name: 'Ámbar Retro'
  },
  white: {
    bg: '#121212',
    text: '#f0f0f0',
    accent: '#f0f0f0',
    dimmed: '#777777',
    cursor: '#f0f0f0',
    name: 'Minimalista'
  },
  matrix: {
    bg: '#000000',
    text: '#00FF41',
    accent: '#008F11',
    dimmed: '#003B00',
    cursor: '#00FF41',
    name: 'Matrix'
  }
};

type ThemeKey = keyof typeof themes;

/**
 * Theme toggle component for changing the terminal color scheme
 */
const ThemeToggle: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('green');
  
  // Apply theme on component mount and theme change
  useEffect(() => {
    applyTheme(currentTheme);
    
    // Expose theme change function globally for command line access
    window.changeTheme = (theme: string) => {
      if (theme in themes) {
        setCurrentTheme(theme as ThemeKey);
      }
    };
    
    return () => {
      window.changeTheme = undefined;
    };
  }, [currentTheme]);
  
  // Apply theme colors to CSS variables
  const applyTheme = (theme: ThemeKey) => {
    const root = document.documentElement;
    const selectedTheme = themes[theme];
    
    root.style.setProperty('--terminal-bg', selectedTheme.bg);
    root.style.setProperty('--terminal-text', selectedTheme.text);
    root.style.setProperty('--terminal-accent', selectedTheme.accent);
    root.style.setProperty('--terminal-dimmed', selectedTheme.dimmed);
    root.style.setProperty('--terminal-cursor', selectedTheme.cursor);
  };
  
  const handleThemeChange = (theme: ThemeKey) => {
    setCurrentTheme(theme);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-terminal-dimmed text-sm">Tema:</span>
      <div className="flex space-x-1">
        {(Object.keys(themes) as ThemeKey[]).map((theme) => (
          <button
            key={theme}
            onClick={() => handleThemeChange(theme)}
            className={`w-4 h-4 rounded-full ${
              currentTheme === theme ? 'ring-2 ring-terminal-text ring-opacity-50' : ''
            }`}
            style={{ 
              backgroundColor: themes[theme].accent,
              borderColor: themes[theme].dimmed,
              borderWidth: '1px'
            }}
            title={themes[theme].name}
            aria-label={`Cambiar a tema ${themes[theme].name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;