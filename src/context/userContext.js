import React,{ createContext, useState} from "react";

const UserContext = createContext();

export function UserProvider({children}){
  const[authentic,setAuthentic] = useState(false)

  return <UserContext.Provider value={{data,isPending,isError,getUser}}>{children}</UserContext.Provider>
}

export default UserContext;