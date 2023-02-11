import React, {createContext, useState} from "react"

const UserContext = createContext()

export function UserProvider({children}){
  const [User,setUser] = useState("")
  return(<UserContext.Provider value={{User ,setUser}}>{children}</UserContext.Provider>)
}

export default UserContext;