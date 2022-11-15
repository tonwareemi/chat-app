import React from "react";
import { Route, Routes} from   "react-router-dom";
import { UserProvider } from "./context/authContext"
import Entry from "./component/login.js" 
import Signup from "./component/signup.js" 
import NonFound from "./component/notFound"
//import UserContext from "./context/authContext"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Entry />} />
             <Route path="*"  element={<NonFound/>}/>
          <Route />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
