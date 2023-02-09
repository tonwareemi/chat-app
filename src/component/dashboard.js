import React,{useEffect, useContext} from "react"
import UserContext from "../context/userContext"
function Dashboard (){
  //  this state is used to hold chat specific to user
  //const [chatList, setChatList] = useState([])
  const item = useContext(UserContext);
  // this is to fetch all chats and get accessable chsts
  useEffect(()=>{
  fetch("http://localhost:8000/chats")
  .then(data => data.json())
  .then(data =>{
    console.log(item)
    console.log(data)});
  },[])
  return (
      <div>
      
      </div>
    )
}

export default Dashboard