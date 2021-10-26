import {  useContext, useEffect } from "react";
import ListContext from "../contexts/List";
import "../styles/list.css";
import ActiveContext from "../contexts/Active";
import ShowContext from "../contexts/Show";

export default function List() {
    
    const { list,getList,next,prev,setUrl,url } = useContext(ListContext);
    
    const { changeActive } = useContext(ActiveContext);
    
    const {setShow} = useContext(ShowContext);
    
    useEffect(() => getList(), [url] )
    
    return(<section className="list">
        {list.map((el) =>
    <article  key={el.id} className="list-items" onClick={() => {changeActive(); setShow(el.id)}}>
        {/* <img src={el.sprites.front_default}/> */}
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${el.id}.png`}/>
        <h2>{el.name}</h2>
        <h3>#{el.id}</h3>
    </article>
    )}
    <section className="list-btns">
    {prev && <button className="list-btn list-btn-prev" onClick={() => setUrl(prev)}>Previous</button>}
    {next && <button className="list-btn list-btn-next" onClick={() => setUrl(next)}>Next</button>}
    </section>
    
    </section>);
}

