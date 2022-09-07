import React,{ createContext, useState} from "react";

const AuthContext = createContext();

export function UserProvider({children}){
  const [authentic,setAuthentic] = useState(false);
  
  const authenticator = (userEmail, password) =>{
    if(!authentic){
      
    }
  }
  

  return <AuthContext.Provider value={{authentic,}}>{children}</AuthContext.Provider>
}

export default UserContext;