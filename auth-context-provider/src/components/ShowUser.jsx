import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function ShowUser() {
  const { user, isAuth } = useContext(AuthContext);
  return <><div>{isAuth?"":user} </div></>;
}
