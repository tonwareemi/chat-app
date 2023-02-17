import React from "react";
import { Route, Routes} from   "react-router-dom";
import Login from "./component/login.js" 
import Signup from "./component/signup.js" 
import NonFound from "./component/notFound"
import Dashboard from "./component/dashboard"
import Chats from "./component/chat"
import {UserProvider} from "./context/userContext"


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
             <Route path="*"  element={<NonFound/>}/>
          <Route />
          <Route exact path="/dashboard" the element={<Dashboard/>}/>
          <Route exact path="/signup" element={<Signup/>} />
          <Route path="/chat/:chatId" element={<Chats/>}/>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
