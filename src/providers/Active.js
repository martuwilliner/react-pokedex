import { useState } from "react";
import ActiveContext from "../contexts/Active";
export function ActiveProvider({ children }) {
  const [active, setActive] = useState(false);
  
  const changeActive = () => setActive(!active)


  return (
    <ActiveContext.Provider value={{ active, setActive, changeActive}}>
      {children}
    </ActiveContext.Provider>
  );
}