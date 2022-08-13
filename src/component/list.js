import React from "react";
import useFetch from  "../CustomHooks/usefetch"
import { useParams,  useNavigate} from "react-router-dom"

function List(){
  let router = useNavigate();
  const {id} = useParams()
  const { data , isPending, isError } =  useFetch("http://localhost:8000/chat");
  var Chat = ({list})=>{
    return(
    list.chat.map((value,index)=>(
            <div key={index} className={value[1]}> {value[0]}</div>
          ))
    )
  }
  
  return(
    <div className = "list">
      {isError && <div>something went wrong</div>}
      {isPending && <div>Loading....</div>}
      {data && data.map((value)=>(
       <div className="container" key={value.id}>{
       value.id === id ? <Chat list={value}/> : null
       }</div>
       
      )) }
    </div>
    )
}

export default List;