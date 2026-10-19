'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  fontScale: number; // 1, 1.15, 1.25
  increaseFontScale: () => void;
  resetFontScale: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontScale, setFontScale] = useState<number>(1);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check initial system theme preference or saved preference
    const savedTheme = localStorage.getItem('catemu-theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const savedFontScale = localStorage.getItem('catemu-font-scale');
    if (savedFontScale) {
      const scale = parseFloat(savedFontScale);
      setFontScale(scale);
      document.documentElement.style.setProperty('--font-scale', scale.toString());
    }
  }, []);

  const increaseFontScale = () => {
    setFontScale((prev) => {
      let next = 1;
      if (prev === 1) next = 1.15;
      else if (prev === 1.15) next = 1.25;
      else next = 1;
      
      document.documentElement.style.setProperty('--font-scale', next.toString());
      localStorage.setItem('catemu-font-scale', next.toString());
      return next;
    });
  };

  const resetFontScale = () => {
    setFontScale(1);
    document.documentElement.style.setProperty('--font-scale', '1');
    localStorage.setItem('catemu-font-scale', '1');
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('catemu-theme', next);
      return next;
    });
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontScale,
        increaseFontScale,
        resetFontScale,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
