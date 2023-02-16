import React,{useState,createContext} from "react";

const ChatsContext = createContext();

export function ChatsProvider({children}){
  const [Chats,setChats] = useState([])
  return(<ChatsContext.Provider value={{Chats, setChats}}>{children}</ChatsContext.Provider>)
}

export default ChatsContext