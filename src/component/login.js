import React, {useState, useEffect, useContext} from "react"
import UserContext from "../context/userContext"
import "../css/signin.css"
import {Link, useNavigate } from "react-router-dom"

function Login(){
//var states for collecting user login credential
const [user , setUser] =  useState(""); // this can be email or user name
const [password, setPassword] = useState("");

//user credentials
const [info , setInfo] =  useState([])

//this context is used to know the user login to in the dashboard
const User = useContext(UserContext)
//this is used to programmatically move user's to another page
const navigate = useNavigate();


//onchange listener functions for collecting credentials
const getUserNameInfo =(e)=>{
  setUser(e.target.value.toLowerCase())
}
const getPasswordInfo =(e)=>{
  setPassword(e.target.value)
}

//sign function to submit user credential
const signIn =()=>{
  //authentication of email 
  for(let i = 0; i < info.length; i++){
    if(info[i].email === user.trim() || info[i].userName === user.trim()){
        if(password.trim() === info[i].password){
            User.setUser(info[i]);
          //AccesibleUser.setAccesibleUser(info[i].id);
          navigate("/dashboard") 
        }else{
          alert("username and password does not match")
        }
  }else{
    
  }
  }
}

//

useEffect(
    ()=>{
      const abortCon = new AbortController()
     fetch("http://localhost:8000/user",{signal: abortCon.signal}) 
      .then(user =>{
        if(!user.ok)
        throw Error("failed fetch")
        return user.json()
      }) 
      .then(userInfo => { 
      setInfo(userInfo)
    })
      return ()=> abortCon.abort 
    },[]);

return(
  <div className="Home">
    <div className="container">
      <nav>
      <div className="sign">
      <Link to="signup" className="up">Sign up</Link>
      </div>
      </nav>
      <form>
       <div className="form">
        <input 
        type="text" 
        name="name" 
        className="name" 
        placeholder="eg: Hillary Zakana"
        onChange={getUserNameInfo}
        required />
        <label htmlFor="name" className="label-name"></label>
        </div>
        <div className="form">
        <input 
        type="text" 
        name="password" 
        className="password" 
        placeholder="*********"
        onChange={getPasswordInfo}
        required />
        <label htmlFor="password" className="label-name"></label>
        </div>
        <div className="submit" 
        onClick={signIn}>
        Log in</div>
      </form>
    </div>
  </div>
  )
}

export default Login;