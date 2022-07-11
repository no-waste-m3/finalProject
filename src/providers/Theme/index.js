import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('@themeNoWaste') || 'light');

  useEffect(() => {

    localStorage.setItem('@themeNoWaste', theme)

  }, [theme])

  const changeTheme = (theme) => {
    
    setTheme(theme)

  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};