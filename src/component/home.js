import React from "react"
import { Link } from "react-router-dom"

var Home = ({data , isPending , isError}) =>{
  console.log(data)
return(
  <div className="Home">
   {isError && <h2> unable to retrive content try again later </h2>}
   {isPending && <p>Loading........</p>}
   {data && data.map((data)=>(
     <Link key={data.id} to={`chat/${data.id}`} ><div className="chats"> {data.chatName} </div> </Link>
   ))}
  </div>
  )
}

export default Home;