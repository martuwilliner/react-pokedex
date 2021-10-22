import { useContext,useEffect } from "react";
import SearchContext from "../contexts/Search";
import ResultContext from "../contexts/Result";
export default function Result() {
  const { search,getSearch } = useContext(SearchContext);
  const { result,setResult,getResult } = useContext(ResultContext);
  
  useEffect(() => {
    getSearch().then(async data => {
      if (data){
        getResult(data.url)
      }else{
        setResult(null)
      }
    })
    }
  , [getSearch, getResult, setResult])
  return( 
  <>
  <h1>{search}</h1>

  {result ? (
    <article>
  <h2>{result.name}<img src={result.avatar} alt={result.name}/></h2>
  </article>
  ) : null}


  </>
  )
}
