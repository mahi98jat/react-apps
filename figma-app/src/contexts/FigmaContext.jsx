import { createContext, useState } from "react";

export const FigmaContext = createContext();

export default function Figma({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <FigmaContext.Provider value={{ theme: isDarkMode, changeTheme }}>
      {children}
    </FigmaContext.Provider>
  );
}
