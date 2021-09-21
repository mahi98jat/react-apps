import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { Nav, Button } from "../styled-components/Styles";

export default function Navbar() {
  const { theme, togolTheme } = useContext(ThemeContext);

  return (
    <Page>
      <Nav>
        <div>Home</div>
        <div>Form</div>
        <div>About Us</div>
        <h1>{theme}</h1>
        <Button>
          <button onClick={togolTheme}>Change Theme</button>
        </Button>
      </Nav>
    </Page>
  );
}

const Page = ({ children }) => {
  return <div>{children}</div>;
};
