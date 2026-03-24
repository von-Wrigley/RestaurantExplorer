'use client';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: (x:string) => {
    x;
  },
});

function ThemeContextCreator({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>(()=> {
    if(typeof window !=='undefined'){
      const themeStorage = localStorage.getItem('theme') || 'light';
      return themeStorage
    }
  });

  useEffect(() => {
    // const themeStorage = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      // setTheme(themeStorage);
    } else {
      document.documentElement.classList.remove('dark');
      // setTheme(theme);
    }
     localStorage.setItem('theme', theme);
  }, [theme]);

  const themeObject = {
    theme,
    setTheme,
  };

  return <ThemeContext value={themeObject}>{children}</ThemeContext>;
}

export default ThemeContextCreator;
