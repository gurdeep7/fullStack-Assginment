import { useEffect, useRef, useState } from "react"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
export const Dashboard = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [classes, setClasses] = useState([])

    const [page,setPage] = useState(+searchParams.get("page"))

    const [totalPages, setTotalPages] = useState()

    const [subject,setSubject] = useState("")

   
    
    useEffect(()=>{
        getClasses()
        console.log("work")
    },[page])
    
    const navigate = useNavigate()

    const getClasses = ()=>{
        fetch(`http://localhost:2345/search?page=${page}&&subject=${subject}`)
        .then(d => d.json())
        .then(res =>{
            setClasses(res.Class)
            setTotalPages(+res.totalPages)
           
        })
    }

    console.log(page)

    return <div>
       <input value={subject}
        type="text"
        onChange={(e)=>{
            
            setSubject(e.target.value)
        }} />
        <button onClick={()=>{getClasses()}}>Search</button>
        <table border="black" style={{margin:"auto"}}>
            <tr>
                <th>
                    grade
                </th>
                <th>
                    Section
                </th>
                <th>
                    Teacher
                </th>
                <th>
                    Photo
                </th>
                <th>
                    Subject
                </th>
                <th>
                    Age
                </th>
            </tr>
            {classes.map((e,i)=><tr key={i}>
               { console.log(e)}
                <td>{e.grade}</td>
                <td>{e.section}</td>
                <td>{e.teacher.name}</td>
                <td>
                    <img style={{width:"200px", height:"200px"}} src={e.teacher.profile}/>
                </td>
                <td>
                    {e.subject}
                </td>
                <td>
                    {e.teacher.age}
                </td>
            </tr>)}
        </table>
        <button disabled={page === 1} onClick={()=>{setPage(page-1)
        navigate("/dashboard?page="+page)
        }}>Prev</button>
        <button disabled={page === totalPages} onClick={()=>{setPage(page+1)
        navigate("/dashboard?page="+page)
        console.log(totalPages,"totalpages")}}>Next</button>
    </div>
}