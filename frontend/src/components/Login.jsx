import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContextProvider"
import { Div } from "../designs/login"
export const Login = ()=>{
    const [form,setForm] = useState({})
    const{token, handleToken} = useContext(AuthContext)

    const handleChange = ({target:{name,value}})=>{
        setForm({
            ...form,
            [name]:value
        })
        console.log(form)
    }
    const navigate = useNavigate()
    return<Div>
        <h2>Login Here</h2>
        <input type="text" onChange={handleChange} name="email" placeholder="Enter a Email"/>
        <input type="password" onChange={handleChange} name="password" placeholder="Enter a password"/>
        <button onClick={()=>{
            try{
                fetch("http://localhost:2345/login",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(form)
                })
                .then(res => res.json())
              .then(res => {if(res.status == "passed"){
                handleToken(res)
                navigate("/dashboard?page=1")
              }else{
                  alert("wrong email or password")
                  console.log("wrong") 
              }
            })
        }
            catch(err){

            }
            
        }}>LOGIN </button>
    </Div>
}