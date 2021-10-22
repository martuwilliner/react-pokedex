import { useState } from 'react';
import SearchContexts from '../contexts/Search';
export function SearchProvider({children}){

    const [search, setSearch] = useState(null)

    return(
        <SearchContexts.Provider value={{search, setSearch}}>
            {children}
        </SearchContexts.Provider>
    )

}