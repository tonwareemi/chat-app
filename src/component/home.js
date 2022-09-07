import React from "react"
import "../css/signin.css"
//import UserContext from "../context/userContext"


var Home = () =>{
  //const { data, isPending, isError, getUser } = useContext(UserContext);
  //console.log(data)
 // useEffect(
 //   getUser("http://localhost:8000/user","admin","ad1")
 // ,[])
return(
  <div className="Home">
    <nav>
    <div className="sign">
    <div className="in"> Sign in</div>
    <div className="up">Sign up</div>
    </div>
    </nav>
    <form>
     <div class="form">
      <input type="text" name="name" className="name" required />
      <label for="name" className="label-name"><span className="text">Username</span></label>
      </div>
      <div className="form">
      <input type="password" name="password" className="password" required />
      <label for="password" className="label-name"><span className="text">PassWord</span></label>
      </div>
      <div className="submit">Log in</div>
    </form>
  </div>
  )
}

export default Home;