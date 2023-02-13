import React,{useState,createContext} from "react";

const ChatsContext = createContext();

export function ChatsProvider(){
  const [chats,setChats] = useState([])
  return(<ChatsContext.Provider value={}></ChatsContext.Provider>)
}

export default ChatsContext