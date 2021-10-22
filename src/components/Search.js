import { useContext, useRef } from "react";
import SearchContext from "../contexts/Search";
export default function SearchForm() {
  const { setSearch } = useContext(SearchContext);
  const SearchInput = useRef(null);
  return (
    <fieldset>
      <input
        type="text"
        ref={SearchInput}
        onChange={() =>
          SearchInput.current.value.trim().length > 2
            ? setSearch(SearchInput.current.value)
            : setSearch(null)
        }
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </fieldset>
  );
}
