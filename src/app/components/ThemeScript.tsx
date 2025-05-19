'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved === 'dark' || (!saved && prefersDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  return null;
}
