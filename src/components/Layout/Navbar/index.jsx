import { NavLink } from 'react-router-dom';
import './index.scss';

export default function Navbar() {
  return (
    <div className="container">
      <nav className="d-flex align-center">
        <NavLink to="/" className="logo-link" activeClassName="is-active">
          <div className="logo d-flex justify-start">
            <img src="/img/logo/bourse-stage.svg" alt="" />
            <p>Bourse au Stages</p>
          </div>
        </NavLink>
        <div className="d-flex menu">
          <NavLink to="/" activeClassName="is-active">
            Accueil
          </NavLink>
          <NavLink to="/offers" activeClassName="is-active">
            Offres
          </NavLink>
          <NavLink to="/applications" activeClassName="is-active">
            Demandes
          </NavLink>
          <NavLink to="/companies" activeClassName="is-active">
            Entreprise
          </NavLink>
          <NavLink to="/students" activeClassName="is-active">
            Etudiants
          </NavLink>
        </div>
        <div className="d-flex account">
          <NavLink
            to="/sign-in"
            activeClassName="is-active"
            className="btn btn-empty"
          >
            Se connecter
          </NavLink>
          <NavLink to="/register" activeClassName="is-active" className="btn">
            Créer un compte
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
