import { createContext, useEffect, useState } from "react";

export const ThemeToastContext = createContext();

export const ThemeToastProvider = ({ children }) => {
  const [themeToast, setThemeToast] = useState('default');

  useEffect(() => {
    return () => setThemeToast('default')
  }, [])


  const changeThemeToast = (theme) => {
    
    setThemeToast(theme)

  };


  return (
    <ThemeToastContext.Provider value={{ themeToast, changeThemeToast }}>
      {children}
    </ThemeToastContext.Provider>
  );
};
