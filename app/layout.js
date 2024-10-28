'use client';

import Navbar from '@/components/navbar';
import { useState, useEffect, createContext, useContext } from 'react';
import './globals.css';

// Create a Theme Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// export const metadata = {
//   title: 'Movie viewer',
//   description: 'Shows the top movies.',
// }


export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  // Load theme preference from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.className = savedTheme; // Apply the theme to <html> element
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme; // Apply the theme to <html> element
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Shows the top movies." />
        <link rel="icon" href="/favicon.ico" />
        <title>Movie viewer</title>
      </head>
      <body className={theme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
          <div className='color-mode'>
            <label htmlFor="button">Light/Dark mode</label>      
            <button name='button' className="slider-toggle" onClick={toggleTheme}>
              <div className={`slider ${theme === 'dark' ? 'slider-dark' : 'slider-light'}`}>
                <span className="slider-thumb"></span>
              </div>
            </button>
          </div>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
