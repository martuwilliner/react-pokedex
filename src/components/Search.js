import {useContext, useRef } from 'react';
import SearchContexts from '../contexts/Search';

export default function Search() {

    const setSearch = useContext(SearchContexts);
    const searchInput = useRef(null)
    
    

    return (
        <fieldset>
            <input
            type="text"
            placeholder="Buscar Pokémon"
            onChange={() => searchInput.current.value.trim().length > 2 ? setSearch(searchInput.current.value): setSearch(null) }
            ref={searchInput}
            />
            <i class="fas fa-search"></i>
        </fieldset>
    )
}