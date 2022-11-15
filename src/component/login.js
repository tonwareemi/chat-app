import React, {useContext}from "react"
import UserProvider from "../context/authContext"
import "../css/signin.css"
import {Link} from "react-router-dom"
import Chats from "./chat"
//import UserProvider from "../context/authContext"

var Entry = ()=>{
  let auth = useContext(UserProvider);
  return(
      <div>
       {console.log(auth)}
       { auth ? <Login /> : <Chats />}
      </div>
    )
}

var Login = () =>{

return(
  <div className="Home">
    <div className="container">
      <nav>
      <div className="sign">
      <Link to="/" className="in"> Sign in</Link>
      <Link to="signup" className="up">Sign up</Link>
      </div>
      </nav>
      <form>
       <div className="form">
        <input type="text" name="name" className="name" placeholder="eg: Hillary Zakana" required />
        <label htmlFor="name" className="label-name"></label>
        </div>
        <div className="form">
        <input type="password" name="password" className="password" placeholder="*********" required />
        <label htmlFor="password" className="label-name"></label>
        </div>
        <div className="submit">Log in</div>
      </form>
    </div>
  </div>
  )
}

export default Entry;