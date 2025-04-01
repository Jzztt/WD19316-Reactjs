import React, { createContext, useState } from "react";

// Tạo context sử dụng createContext
export const ThemeContext = createContext({});
interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");
  return (
    // Tạo provider sử dụng context
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
