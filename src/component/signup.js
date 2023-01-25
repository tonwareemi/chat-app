import React,{useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import "../css/signin.css"
//import UserContext from "../context/userContext"


var Signup = () =>{
  
 //var states for collecting user login credential
const [userEmail , setUserEmail] =  useState("");
const [userPassword, setUserPassword] = useState("");
const [userName, setUserName] = useState("")
//user credentials
const [userInfo , setUserInfo] =  useState({})
const navigate = useNavigate();
//onchange listener functions for collecting credentials
const getUserEmailInfo =(e)=>{
  setUserEmail(e.target.value.toLowerCase())
}
const getUserPasswordInfo =(e)=>{
  setUserPassword(e.target.value)
}
const getUserNameInfo =(e)=>{
  setUserName(e.target.value.toLowerCase())
}
//sign function to submit user credential
const signUp =()=>{
  fetch("http://localhost:8000/user",
  {
    method:"POST",
    body: JSON.stringify({
      user: userName,
      password: userPassword,
      email:userEmail
    }),
    header:{
      "Content-Type": "application/json"
    }
  }
  ).then(userAdd => userAdd.json())
  .then(userInfo => console.log(userInfo))
  .catch(err => console.log(err))
} 

return (
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
        type="email" 
        name="email"
        className="email"
        placeholder="example@gmail.com"
        onChange={getUserEmailInfo}
        required />
        <label htmlFor="email" className="label-name"></label>
        </div>
        <div className="form">
        <input
        type="password"
        name="password"
        className="password" 
        placeholder="*********" 
        onChange={getUserPasswordInfo}
        required />
        <label htmlFor="password" className="label-name"></label>
        </div>
        <div className="submit" onClick={signUp}>Log in</div>
      </form>
    </div>
  </div>
  )
}

export default Signup;