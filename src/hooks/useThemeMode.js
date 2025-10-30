import { useState, useEffect } from 'react';

export const useThemeMode = () => {
  const [mode, setMode] = useState(() => {
    // Get initial mode from localStorage or default to 'light'
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  return { mode, toggleMode };
};
