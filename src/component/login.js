import React, {useState, useEffect} from "react"
import "../css/signin.css"
import {Link, useNavigate } from "react-router-dom"

function Login(){
//var states for collecting user login credential
const [userEmail , setUserEmail] =  useState("");
const [password, setPassword] = useState("");
//user credentials
const [userInfo , setUserInfo] =  useState({})
const navigate = useNavigate();
//onchange listener functions for collecting credentials
const getUserNameInfo =(e)=>{
  setUserEmail(e.target.value.toLowerCase())
}
const getPasswordInfo =(e)=>{
  setPassword(e.target.value)
}
//sign function to submit user credential
const signIn =()=>{
  if(password === userInfo.password){
    navigate("/dashboard")
  }
}

//

useEffect(
    ()=>{
     fetch(`http://localhost:8000/user`) 
  .then(user => user.json()) 
  .then(user => { 
    for(var i = 0; i < user.customer.length; i++){
      if(user.customer[i].email === userEmail){ 
        setUserInfo(user.customer[i])
      }
    }
  })},[userEmail]);

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
        type="password" 
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