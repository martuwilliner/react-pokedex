import { useState } from "react";
import ListContext from "../contexts/List";
export function ListProvider({ children }) {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118")
      const response = await request.json();
      const data = response.results.slice(0,12)

      console.log("data",data);
      
      const all = await Promise.all(
          data.map(async (poke)=>{
            const request = await fetch (poke.url);
            const response = await request.json();
            return response;
          })
      )
      console.log("all", all);
      setList(all)
    } catch (error) {
      return error
    }
  }
  return (
    <ListContext.Provider value={{ list, setList,getList }}>
      {children}
    </ListContext.Provider>
  );
}
