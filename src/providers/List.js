import { useState } from "react";
import ListContext from "../contexts/List";
export function ListProvider({ children }) {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12"); 
  const [list, setList] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  
  const getList = async () => {
    try {
      const request = await fetch(url)
      const response = await request.json();
      const data = response.results

      console.log("data",data);
      
      const all = await Promise.all(
          data.map(async (poke)=>{
            const request = await fetch (poke.url);
            const response = await request.json();
            return response;
          })
      )
      setList(all)

      setNext(response.next)

      setPrev(response.previous)
      

    } catch (error) {
      return error
    }
  }
  return (
    <ListContext.Provider value={{ list, setList,getList, url, setUrl,next, setNext,prev, setPrev }}>
      {children}
    </ListContext.Provider>
  );
}
