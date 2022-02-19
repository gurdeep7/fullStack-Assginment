import { useNavigate } from "react-router-dom"

export const NotAuthorised= ()=>{
    const navigate = useNavigate()

return <h1>
    You are not authorised to view this page
<br/>
    <button onClick={()=>navigate("/login")}>BACK TO LOGIN PAGE</button>

</h1>
}