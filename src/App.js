import React from "react";
import { Route, Routes} from   "react-router-dom";
import Login from "./component/login.js" 
import Signup from "./component/signup.js" 
import NonFound from "./component/notFound"
import Dashboard from "./component/dashboard"
import {UserProvider} from "./context/userContext"
import {ChatsProvider} from "./context/chatContext"


function App() {
  return (
    <div className="App">
      <UserProvider>
       <ChatsProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
             <Route path="*"  element={<NonFound/>}/>
          <Route />
          <Route path="/dashboard" the element={<Dashboard/>}/>
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
         </ChatsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
