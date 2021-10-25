import { useContext, useEffect} from "react";
import ShowContext from "../contexts/Show"
import ActiveContext from "../contexts/Active"
import "../styles/Modal.css";
export default function Active() {
    const { active, changeActive } = useContext(ActiveContext);
    const { show, showApi,setShow } = useContext(ShowContext);
    useEffect(showApi, [])

    return(
        <>
        
        {show ? (
      <section className={`modal ${active ? 'active' :null}`}>
      <article className="modal-content">
        <section className="modal-btns">
          <button onClick={changeActive} className="btn-modal-close"> Volver </button>
        </section>
        <figure>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${show.id}.png`}/>
        </figure>
        <section className="modal-body">
          <h2>
            <span className="name"> {show.name} </span> 
            <span className="id"> #{show.id} </span>
          </h2>
          <h3>
            <span className="title"> Height </span> 
            <span className="value"> {show.height} </span>
          </h3>
          <ul className="tags types">
            <li className="tags-title">Types</li>
            { show.types && show.types.map((el) => <li className="tags-item">{el}</li> )}  
          </ul>
          <h3>
            <span className="title"> Weight </span> 
            <span className="value"> {show.weight} </span>
          </h3>

          <ul className="tags">
            <li className="tags-title">Abilities</li>
            { show.abilities && show.abilities.map((el) => <li className="tags-item">{el}</li> )}  
          </ul>
        </section>
      </article>
      </section>
    ) : null}

        </>
    )
//.map((el,i) => <span key={i}>{el}</span>)

}