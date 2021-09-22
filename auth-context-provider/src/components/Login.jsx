import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Login() {
  const { user, isAuth } = useContext(AuthContext);
  return isAuth ? (
    <>
      <div
        style={{
          heigth: "100px",
          width: "400px",
          color: "teal",
          border: "3px solid brown",
          borderRadius: "10px",
          margin: "auto",
        }}
      >
        {isAuth ? `Your token is : ${user}` : null}
      </div>
    </>
  ) : (
    "please log in first"
  );
}
