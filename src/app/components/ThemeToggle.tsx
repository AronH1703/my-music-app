'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved === 'dark' || (!saved && prefersDark);

    console.log('Dark mode detected:', dark); // Debugging
    setIsDark(dark);

    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    console.log('Toggling theme to:', newTheme ? 'dark' : 'light'); // Debugging
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');

    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  if (isDark === null) return null // avoid flicker before mounting

  return (
    <button onClick={toggleTheme} className="px-4 py-2 rounded-xl border border-gray-400 dark:border-white">
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
