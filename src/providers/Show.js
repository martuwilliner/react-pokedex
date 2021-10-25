import { useState } from "react";
import ShowContext from "../contexts/Show";
export function ShowProvider({ children }) {
  const [show, setShow] = useState(null);
  
    const showApi = async () => {
        try {
            const request = await fetch("https://pokeapi.co/api/v2/pokemon/" + show);
            const response = await request.json();
            const data = {
              id: response.id,
              name: response.name,
              height: response.height,
              weight: response.weight,
              types: Array.from(response.types).map(el => el.type.name),
              abilities: Array.from(response.abilities).map(el => el.ability.name)
            }
            setShow(data)
        } catch (error) {
            console.log(error);
            setShow(null)
        }
    }

  return (
    <ShowContext.Provider value={{ show, setShow, showApi}}>
      {children}
    </ShowContext.Provider>
  );
}