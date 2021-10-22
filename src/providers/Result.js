import { useState } from "react";
import ResultContext from "../contexts/Result";
export function ResultProvider({ children }) {
  const [result, setResult] = useState(null);
  const getResult = async (url) => {
    try {
      const request = await fetch(url)
      const response = await request.json();
      const data = Object({
        id:response.id,
        name: response.name, 
        avatar: response.sprites.front_default})
      setResult(data)  
    } catch (error) {
      return error
    }
  }
  return (
    <ResultContext.Provider value={{ result, setResult,getResult }}>
      {children}
    </ResultContext.Provider>
  );
}