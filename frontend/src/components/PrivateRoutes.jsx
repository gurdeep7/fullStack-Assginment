import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider"


export const PrivateRoute = ({children})=>{
  const  {token} = useContext(AuthContext);
  if(!token)
  {
      console.log("token",token)
  return <Navigate to = {"/notauthorised"} />
  }
  return children
}