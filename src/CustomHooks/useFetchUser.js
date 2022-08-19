import { useState, useEffect } from "react"

function useFetchUser (url,type,id) {
  const [data,setData] = useState(null);
  const [isPending,setIsPending] = useState(true)
  const [isError, setIsError] = useState(false)
  
  useEffect(()=>{
    const abort = new AbortController();
    fetch(url,{signal: abort.signal})
    .then(res => {
      if(!res.ok){
          throw Error("data was not recieved")
      }
      return res.json();
    })
    .then( data => {
      
      switch (type.toLowerCase()){
        case "admin" :
          setData(
            data.admin.filter((value)=>{
            if(value.id === id){
              return value;
            }
          })
            )
        break;
        case "customer" :
          setData(
            data.customer.filter((value)=>{
            if(value.id === id){
              return value;
            }
          })
            )
        break;
        default:
          console.warn(`${type} is not a set of users`)
      }
      
      setIsPending(false)
    })
    .catch(error =>{
      if(error.name === "AbortError"){
        console.log("aborted")
      }else{
      setIsError(true)
      setIsPending(false)
    }
    })
    return ()=> abort.abort()
},[url,type,id])
  
  return { data , isPending, isError }
}


export default useFetchUser