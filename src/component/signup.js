import React,{useState,useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"
import "../css/signin.css"
//import UserContext from "../context/userContext"


var Signup = () =>{

 //var states for collecting user credential
const [user , setUserInfo] = useState([])
const [userEmail , setUserEmail] =  useState("");
const [userPassword, setUserPassword] = useState("");
const [username, setUserName] = useState("")

//nav hook for dynamic url changing
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
  user.forEach((val)=>{
    if(val.email === userEmail ){
      alert("email is already used by another user")
    }else if(val.userName === username){
      alert("this username already exist")
    }else{
    fetch("http://localhost:8000/user/", {
    method:"POST",
    body: JSON.stringify({
      id:user.length + 1,
      userName:username,
      password:userPassword,
      email: userEmail
    }),
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(userAdd => userAdd.json())
  .then(userInfo =>{ 
    console.log(userInfo) 
     navigate("/")
  })
  .catch(err => console.log(err))
    }
  })
}

//getting all user info
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
      setUserInfo(userInfo)
      console.log(userInfo)
    })
      return ()=> abortCon.abort 
    },[]);

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