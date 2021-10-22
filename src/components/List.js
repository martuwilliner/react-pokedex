import {  useContext, useEffect } from "react";
import ListContext from "../contexts/List";
import "../styles/list.css"

export default function List() {
    const { list,getList } = useContext(ListContext);
    useEffect(() => getList(), [] )

    return(<section className="list">
        {list.map((el) =>
    <article  key={el.id} className="list-items">
        <img src={el.sprites.front_default}/>
        <h2>{el.name}</h2>
        <h3>#{el.id}</h3>
    </article>
    )}</section>);
    /* return(<section><pre>{JSON.stringify(list)}</pre></section>); */
}

