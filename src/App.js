import "./styles/libs.css";
import "./styles/main.css";
import { useContext } from "react"
import icon from "./assets/logo.svg"

import ActiveContext from "./contexts/Active";
import ResultContext from "./contexts/Result";
import Header from "./components/Header";
import Result from "./components/Result";
import List from "./components/List";
import Active from"./components/Active";
export default function App() {
  
  const {result} = useContext(ResultContext);
  const {active} = useContext(ActiveContext);

  return (
    <>
        <Header />
        <Result /> 
        {result ==null ? <List/>:
        null}
        {active ? <Active/> : null}
        
    </>
  );
}
