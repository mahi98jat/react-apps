import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export default function ShowThemes() {
  const { theme, togolTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <h1>Your Theme is:{theme}</h1>
      <button onClick={togolTheme}>Change Theme</button>
    </>
  );
}
