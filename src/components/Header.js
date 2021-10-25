import icon from "../assets/logo.svg";
import "../styles/Header.css";
import SearchForm from './Search';
export default function Header() {
    return (
        <header>
            <figure id="icon">
                <img src={icon} alt="pokeball icon" />
            </figure>
            <SearchForm />
        </header>
    )
}