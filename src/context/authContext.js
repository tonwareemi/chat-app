import React,{ createContext, useState} from "react";

const AuthContext = createContext();

export function UserProvider({children}){
  const [authentic,setAuthentic] = useState(true);
  
  const authenticator = (userEmail, password) =>{
    
  }
  

  return <AuthContext.Provider value={authentic}>{children}</AuthContext.Provider>
}

export default UserProvider;