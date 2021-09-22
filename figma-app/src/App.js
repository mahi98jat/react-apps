import { useContext } from "react";
import FigmaUi from "./components/FigmaUi";
import "./App.css";
import { FigmaContext } from "./contexts/FigmaContext";
function App() {
  const { theme } = useContext(FigmaContext);
  return (
    <div
      style={{
        height: "400px",
        width: "600px",
        margin: "auto",
        backgroundColor: `${theme ? "rgb(32,42,68)" : "gray"}`,
        color: `${theme ? "white" : "black"}`,
        fontSize: "18px",
      }}
    >
      <FigmaUi />
    </div>
  );
}

export default App;
