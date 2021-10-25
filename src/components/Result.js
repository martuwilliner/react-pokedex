import { useContext,useEffect } from "react";
import SearchContext from "../contexts/Search";
import ResultContext from "../contexts/Result";
import ShowContext from "../contexts/Show"
import ActiveContext from "../contexts/Active"
export default function Result() {
  const { search,getSearch } = useContext(SearchContext);
  const { result,setResult,getResult } = useContext(ResultContext);

  const { changeActive } = useContext(ActiveContext);
  const { setShow } = useContext(ShowContext);
  
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
    {result ? (
      <section className="list">
      <article className="list-items" onClick={() => {changeActive(); setShow(result.id)}}>
        
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${result.id}.png`}/>
        <h2> {result.name}</h2>
        <h3>#{result.id}</h3>
      </article>
      </section>
    ) : null}
  </>
  )
}
