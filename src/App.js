import React from "react";
import { Route, Routes} from   "react-router-dom";
import useFetchChatAccesor from "./CustomHooks/useFetchChatAccesor"
import Home from "./component/home" 
import List from "./component/list"
import NonFound from "./component/notFound"

function App() {
  const {data,isPending,isError} = useFetchChatAccesor("http://localhost:8000/chats","c1")
  console.log(data)
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home data={data} isPending={isPending} isError={isError}/>} />
           <Route exact path="chat/:id" element={<List />}/>
           <Route path="*"  element={<NonFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
