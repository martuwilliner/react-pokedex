import "./styles/libs.css";
import "./styles/main.css";
import icon from "./assets/logo.svg"
import { SearchProvider } from "./providers/Search";
import { ResultProvider } from "./providers/Result";
import { ListProvider } from "./providers/List";
import SearchForm from "./components/Search";
import Result from "./components/Result";
import List from "./components/List";
export default function App() {
  
  return (
    <SearchProvider>
      <ResultProvider>
        <ListProvider>
      <img src={icon} alt="pokeball icon" />
        <SearchForm /> 
        <Result />
        <List/>
        </ListProvider>
      </ResultProvider>
    </SearchProvider>
  );
}
