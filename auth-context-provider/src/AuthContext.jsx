import { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export default function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("");
  //const article = { title: "Axios POST Request Example" };
  const login = () => {
    axios
      .post(
        "https://reqres.in/api/login",

        {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }
      )
      .then((res) => {
        let { token } = res.data;
        setUser(token);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  
  const toggleAuth = () => {
    setIsAuth(!isAuth);
    // setUser(user === "" ? "Mahipal" : "");
    login();
  };
  return (
    <>
      <AuthContext.Provider
        value={{
          isAuth: isAuth,
          toggleAuth: toggleAuth,
          status: "not logged in",
          user: user,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
