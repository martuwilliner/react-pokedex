import logo from './pokebola.svg';
import Search from './components/Search';
import {SearchProvider} from './providers/Search';
import SearchContexts from './contexts/Search';
import {useContext} from 'react';

function App() {

  const search = useContext(SearchContexts)
  
  

  return (
        <SearchProvider>
        
        <Search/>
        <h2>{search}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        
        </SearchProvider>
  );
}

export default App;
