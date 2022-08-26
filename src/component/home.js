import React, {useContext,useEffect} from "react"
import UserContext from "../context/userContext"


var Home = () =>{
  const { data, isPending, isError, getUser } = useContext(UserContext);
  console.log(data)
  useEffect(
    getUser("http://localhost:8000/user","admin","ad1")
  ,[])
return(
  <div className="Home">
   <h1> hi </h1>
  </div>
  )
}

export default Home;