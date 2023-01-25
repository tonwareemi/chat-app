import React, {useState, useEffect} from "react"
import "../css/signin.css"
import {Link, useNavigate } from "react-router-dom"

function Login(){
//var states for collecting user login credential
const [user , setUser] =  useState(""); // this can be email or user name
const [password, setPassword] = useState("");
//user credentials
const [info , setInfo] =  useState([])
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
    if(info[i].email === user|| info[i].user === user){
      //console.log(info[i])
        if(password === info[i].password){
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
      console.log(userInfo)
    })
      return ()=> abortCon.abort 
    },[user]);

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