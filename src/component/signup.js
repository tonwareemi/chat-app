import React from "react"
import {Link} from "react-router-dom"
import "../css/signin.css"
//import UserContext from "../context/userContext"


var Signup = () =>{
  
 //var states for collecting user login credential
const [userEmail , setUserEmail] =  useState("");
const [password, setPassword] = useState("");
const [userName, setUserName] = useState("")
//user credentials
const [userInfo , setUserInfo] =  useState({})
const navigate = useNavigate();
//onchange listener functions for collecting credentials
const getUserEmailInfo =(e)=>{
  setUserEmail(e.target.value.toLowerCase())
}
const getPasswordInfo =(e)=>{
  setPassword(e.target.value)
}
const getIserNameInfo =(e)=>{
  setUserName(e.target.value.toLowerCase())
}
const get
//sign function to submit user credential
const signIn =()=>{
  if(password === userInfo.password){
    navigate("/")
  }
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
        onChange={getUaerNameInfo}
        required />
        <label htmlFor="name" className="label-name"></label>
        </div>
        <div className="form">
        <input
        type="email" 
        name="email"
        className="email"
        placeholder="example@gmail.com"
        onchange={getUserEmailInfo}
        required />
        <label htmtFor="email" className="label-name"></label>
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
        <div className="submit">Log in</div>
      </form>
    </div>
  </div>
  )
}

export default Signup;