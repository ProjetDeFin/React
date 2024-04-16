<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import "./index.scss";

export default function Navbar() {
  return (
    <div className="container">
        <nav className="d-flex align-center">
        <NavLink exact to="/" className="logo-link" activeClassName="is-active">
            Logo
        </NavLink>
        <div className="d-flex menu">
            <NavLink exact to="/" activeClassName="is-active">
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
            <NavLink to="/sign-in" activeClassName="is-active" className="btn btn-empty">
            Se connecter
            </NavLink>
            <NavLink to="/register" activeClassName="is-active" className="btn">
            Creer un compte
            </NavLink>
        </div>
        </nav>
    </div>
=======
import Link from '../../Link';
import Item from './Item';
import './index.scss';

export default function Navbar() {
  return (
    <nav>
      <Link href="/" children="Logo" />
      <ul className="navbar-list">
        <li>
          <Item href="/" children="Accueil" />
        </li>
        <li>
          <Item href="/offers" children="Offres" />
        </li>
        <li>
          <Item href="/applications" children="Demandes" />
        </li>
        <li>
          <Item href="/companies" children="Entreprise" />
        </li>
        <li>
          <Item href="/students" children="Etudiants" />
        </li>
      </ul>
      <ul className="account">
        <li>
          <Item
            href="/sign-in"
            children="Se connecter"
            classes="sign-in btn-sign"
          />
        </li>
        <li className="separator"></li>
        <li>
          <Item
            href="/register"
            children="Créer un compte"
            classes="register btn-sign"
          />
        </li>
      </ul>
    </nav>
>>>>>>> ba460a5 (prettier)
  );
}
