import React,{useState,useEffect} from "react"

function Dashboard (){
  //  this state is used to hold chat specific to user
  const   [chatList, setChatList] = useState([])
  // this is to fetch all chats and get accessable chsts
  useEffect(()=>{
  fetch("http://localhost:8000/chats")
  .then(data => data.json())
  .then(data => console.log(data));
  },[])
  return (
      <div>dashboard</div>
    )
}

export default Dashboard