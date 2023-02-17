import React,{useEffect, useContext, useState} from "react"
import {Link} from "react-router-dom"
import UserContext from "../context/userContext"
import "../css/dashboard.css"
function Dashboard (){

  //  this state is used to hold chat specific to user
  //const [chatList, setChatList] = useState([])
  const {User} = useContext(UserContext);
  const [lastMessagesArr, setLastMessagesArr] = useState([])
  
  
  useEffect(()=>{
    fetch("http://localhost:8000/chats")
    .then(data => data.json())
    .then(data => data.forEach(chat =>{
     for(let i =0; i < User.chats.length; i++){
       if(User.chats[i].id === chat.id){
          setLastMessagesArr(
            lastMessages => [...lastMessages,{id: chat.id, lastMessage: chat.messages[chat.messages.length - 1], user: User.chats[i].name}]
            )
       }
     }
    }))
    
    
    },[])
  
  return (
      <div className="message-container">
          {
            lastMessagesArr.map((value, index)=>(
            <Link to={`/chat/${value.id}`} key={value.id  + index} >
              <div className="message"> 
                <span className="message-user">{value.user}</span>
                <span className="message-lastMessage">{value.lastMessage.text}</span>
              </div>
            </Link>
            ))
          }
      </div>
    )
}

export default Dashboard