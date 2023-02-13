import React,{useEffect, useContext, useState} from "react"
import UserContext from "../context/userContext"
import "../css/dashboard.css"
function Dashboard (){

  //  this state is used to hold chat specific to user
  //const [chatList, setChatList] = useState([])
  const {User} = useContext(UserContext);
  const [chatList,setChatList] = useState([]);
  
 // useEffect(()=>{},[User.])
  
  return (
      <div className="chat-container">
        {
          User.chats.map((value , index)=>(
              <div key={`{value.id + index}`} className="chat">{value.name}{console.log(value)}</div>
          ))
        }
      </div>
    )
}

export default Dashboard