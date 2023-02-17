import React from "react";
import  {useParams} from "react-router-dom"

const Chats = ()=>{
  const {chatId} = useParams()
  console.log(chatId)
  
  return(
      <div>Chats</div>
    )
}

export default Chats;