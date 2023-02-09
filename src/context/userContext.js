import React, {createContext, useState} from "react"

const UserContext = createContext()

export function UserProvider({children}){
  const [accesibleUser,setAccesibleUser] = useState("")
  return(<UserContext.Provider value={{accesibleUser ,setAccesibleUser}}>{children}</UserContext.Provider>)
}

export default UserContext;