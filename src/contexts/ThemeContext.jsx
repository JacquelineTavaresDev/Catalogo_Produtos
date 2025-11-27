import { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme.js";

export const ThemeAppContext = createContext();

export function ThemeAppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeAppContext.Provider value={{ darkMode, toggleTheme, theme }}>
      {children}
    </ThemeAppContext.Provider>
  );
}
