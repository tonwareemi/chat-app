import React,{useEffect, useContext, useState} from "react"
import UserContext from "../context/userContext"
function Dashboard (){
  //  this state is used to hold chat specific to user
  //const [chatList, setChatList] = useState([])
  const user = useContext(UserContext);
  const [chatList,setChatList] = useState([]);
  // this is to fetch all chats and get accessable chsts
  useEffect(()=>{
  fetch("http://localhost:8000/chats")
  .then(data => data.json())
  .then(data =>{
     data.forEach(function (value){
        for(let i =0;i < value.accessors.length; i++){
          if(value.accessors[i] === user.User.id ){
            setChatList([...chatList,value])
          }
        }
      }
  )})  ;
  },[])
  return (
      <div>
        {
          chatList.map((value , index)=>(
              <div key={`{value.id + index}`}>{value.id}</div>
          ))
        }
      </div>
    )
}

export default Dashboard