import React from "react"
import {Link} from "react-router-dom"
import "../css/signin.css"
//import UserContext from "../context/userContext"


var Signup = () =>{
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
        <input type="text" name="name" className="name" placeholder="eg: Hillary Zakana" required />
        <label htmlFor="name" className="label-name"></label>
        </div>
        <div className="form">
        <input type="email" name="email" className="email" placeholder="example@gmail.com" required />
        <label htmtFor="email" className="label-name"></label>
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

export default Signup;