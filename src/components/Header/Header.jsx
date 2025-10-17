import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <header>
            <h1 className="title">Mon classement Miss France</h1>
            <nav className="boutons">
                <Link to="/"> 
                    <button className="dirButton">Toutes les candidates</button>
                </Link>
                <Link to="/les15">
                    <button className="dirButton">Tes 15 préselectionnées</button>
                </Link>
                <Link to="/finalistes">
                    <button className="dirButton">Tes 5 finalistes</button>
                </Link>
            </nav>
        </header>
    );
}