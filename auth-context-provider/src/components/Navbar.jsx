import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Navbar() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:`${isAuth?"green":"red"}`,
        color:`${isAuth?"red":"green"}`
      }}
    >
      <div>Home</div>
      <div>About Us</div>
      <div>{isAuth ? "log out" : "log in"}</div>
      <button style={{
          backgroundColor:"transparent",
          color:`${isAuth?"white":"blue"}`,
          border:"none",
          borderBottom:"2px solid black"
      }} onClick={toggleAuth}>{isAuth ? "Log Out" : "Login"}</button>
    </div>
  );
}
