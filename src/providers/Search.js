import { useState } from "react";
import SearchContext from "../contexts/Search";
export function SearchProvider({ children }) {
  const [search, setSearch] = useState(null);
  const getSearch = async () => {
    try {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118")
      const response = await request.json();
      const data = response.results;
      const result = data.find(e => search != null ? e.name.includes(search) : null )

      return result
    } catch (error) {
      return error
    }
  }
  return (
    <SearchContext.Provider value={{ search, setSearch,getSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
