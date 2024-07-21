import React, { createContext, useContext, useState, useEffect } from "react";

const themesContext = createContext();

export const useTheme = () => useContext(themesContext);

//SET THEME
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  //Switch theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themesContext.Provider>
  );
};
