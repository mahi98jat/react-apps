import { createContext } from "react";
import { useState } from "react";
let togolTheme;
export const ThemeContext = createContext({
  theme: "",
  togolTheme: togolTheme,
});
export default function Theme({ children }) {
  const [theme, setTheme] = useState("dark");
  togolTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      {" "}
      <ThemeContext.Provider value={{ theme: theme, togolTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
