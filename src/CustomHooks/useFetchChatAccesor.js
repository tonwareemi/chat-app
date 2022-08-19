import {useState,useEffect} from "react";

function useFetchChatAccesor (url,userid) {
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
      
          setData(
            data.filter((value)=>{
            for(let i = 0; i  < value.accessors.length; i++){
              if(value.accessors[i] === userid){
                value.accessors.splice(i,1)
                return value;
              }
            }
          })
            )

      
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
},[url,userid])
  
  return { data , isPending, isError }
}


export default useFetchChatAccesor