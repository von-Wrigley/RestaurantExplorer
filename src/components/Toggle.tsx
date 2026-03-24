'use client';

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContextCreator';

function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleFunc = (t: string) => {
    if (t === theme) {
      return;
    }
    localStorage.setItem('theme', t);
    setTheme(t);
    if (t === 'dark') {
      document.documentElement.classList.toggle('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log(t, theme);
  };

  return (
    <div className="flex flex-row rounded-lg divide-x  divide-amber-400 cursor-pointer dark:border-darkmode-10 dark:divide-violet-600 ">
      <button
        name="light"
        onClick={() => toggleFunc('light')}
        className="hover:bg-gray-100 hover:rounded-l-lg "
      >
        <span className="text-[23px]">☀️</span>
      </button>
      <button
        name="dark"
        onClick={() => toggleFunc('dark')}
        className="hover:bg-gray-100 hover:rounded-r-lg  "
      >
        <span className="text-[23px]">🌚</span>
      </button>
    </div>
  );
}

export default Toggle;
