import { createContext, useState } from "react";
import axios from "react";
export const AuthContext = createContext();

export default function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();
  //const article = { title: "Axios POST Request Example" };
  const login = () => {
    axios
      .post(
        "https://reqres.in/api/users",

        {
          name: "morpheus",
          job: "leader",
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //login();
  const toggleAuth = () => {
    setIsAuth(!isAuth);
    setUser(user === "" ? "Mahipal" : "");
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
