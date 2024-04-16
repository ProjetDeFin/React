import Link from "../../Link";
import Item from "./Item";
import './index.scss';

export default function Navbar() {
return (
  <nav>
    <Link href="/" children="Logo" />
    <ul className="navbar-list">
      <li><Item href="/" children="Accueil" /></li>
      <li><Item href="/offers" children="Offres" /></li>
      <li><Item href="/applications" children="Demandes" /></li>
      <li><Item href="/companies" children="Entreprise" /></li>
      <li><Item href="/students" children="Etudiants" />
      </li>
    </ul>
    <ul className="account">
      <li><Item href="/sign-in" children="Se connecter" classes="sign-in btn-sign" /></li>
      <li className="separator"></li>
      <li><Item href="/register" children="Créer un compte" classes="register btn-sign" /></li>
    </ul>
  </nav>
);
}
