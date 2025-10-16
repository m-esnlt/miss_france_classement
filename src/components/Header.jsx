import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Mon classement Miss France</h1>
            <nav>
                <Link to="/">Toutes les miss</Link>
                <Link to="/les15">Les 15</Link>
                <Link to="/finalistes">Les 5 finalistes</Link>
            </nav>
        </header>
    );
}