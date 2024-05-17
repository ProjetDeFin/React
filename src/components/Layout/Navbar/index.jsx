import { NavLink } from 'react-router-dom';
import './index.scss';

export default function Navbar() {
    return (
        <nav className="d-flex align-center">
            <NavLink exact to="/" className="logo-link" activeClassName="is-active">Logo</NavLink>
            <div className="d-flex">
                <NavLink exact to="/" activeClassName="is-active">Accueil</NavLink>
                <NavLink to="/offers" activeClassName="is-active">Offres</NavLink>
                <NavLink to="/applications" activeClassName="is-active">Demandes</NavLink>
                <NavLink to="/companies" activeClassName="is-active">Entreprise</NavLink>
                <NavLink to="/students" activeClassName="is-active">Etudiants</NavLink>
            </div>
            <div className="d-flex">
                <NavLink to="/sign-in" activeClassName="is-active">Se connecter</NavLink>
                <NavLink to="/register" activeClassName="is-active">Creer un compte</NavLink>
            </div>
        </nav>
    );
>>>>>>> cf8312d (MIN: resolve conflict)
}
