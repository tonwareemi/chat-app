import React,{useEffect, useContext, useState} from "react"
import UserContext from "../context/userContext"
import ChatsContext from "../context/chatContext"
import "../css/dashboard.css"
function Dashboard (){

  //  this state is used to hold chat specific to user
  //const [chatList, setChatList] = useState([])
  const {User} = useContext(UserContext);
  const {Chats, setChats} = useContext(ChatsContext)
  
  useEffect(()=>{
    let chatsArr = [];
    fetch("http://localhost:8000/chats")
    .then(data => data.json())
    .then(data => data.forEach(chat =>{
      for(let i =0; i < User.chats.length; i++){
        if(chat.id === User.chats[i].id){
          chatsArr.push(chat)
          setChats(chatsArr)
          console.log(Chats)
        }
      }
    }))
    },[])
  
  return (
      <div className="chat-container">
        {
          User.chats.map((value , index)=>(
              <div key={value.id} className="chat">
              <h2 className="chat-title">{value.name}</h2>
              <h3 className="chat-last-text">console.log(Chats)}</h3>
              </div>
          ))
        }
      </div>
    )
}

export default Dashboard