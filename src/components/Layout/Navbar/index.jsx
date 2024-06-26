import { NavLink, useLocation } from 'react-router-dom';
import './index.scss';

export default function Navbar() {
  const location = useLocation();
  const isOffersActive =
    location.pathname === '/offre/stage' ||
    location.pathname === '/offre/alternance';
  const isAdminPath = location.pathname === '/admin/';

  return (
    <div className="container">
      <nav className="d-flex align-center">
        <NavLink to="/" className="logo-link" activeClassName="is-active">
          <div className="logo d-flex justify-start">
            <img src="/img/logo/bourse-stage.svg" alt="" />
            <p>Bourse aux Stages</p>
          </div>
        </NavLink>
        <div className="d-flex menu">
          <NavLink to="/" activeClassName="is-active">
            Accueil
          </NavLink>
          <div className={`dropdown ${isOffersActive ? 'active' : ''}`}>
            <span className="dropdown-link">Offres</span>
            <div className="dropdown-content d-flex direction-column">
              <NavLink to="/offre/stage" activeClassName="is-active">
                Stage
              </NavLink>
              <NavLink to="/offre/alternance" activeClassName="is-active">
                Alternance
              </NavLink>
            </div>
          </div>
          <NavLink to="/entreprises" activeClassName="is-active">
            Entreprise
          </NavLink>
          <NavLink to="/etudiants" activeClassName="is-active">
            Etudiants
          </NavLink>
        </div>
        {!isAdminPath ? (
          <div className="d-flex account no-connexion">
            <NavLink
              to="/connexion"
              activeClassName="is-active"
              className="btn btn-empty"
            >
              Se connecter
            </NavLink>
            <NavLink
              to="/inscription"
              activeClassName="is-active"
              className="btn"
            >
              Créer un compte
            </NavLink>
          </div>
        ) : (
          <div className="d-flex account connected dropdown">
            <div className="d-flex">
              <img src="/img/profil-picture/avatar.jpg" alt="" />
              <h4>Olivier SALESSE</h4>
            </div>
            <div className="dropdown-content d-flex direction-column">
              <NavLink to="">Dashboard</NavLink>
              <NavLink to="">Profil</NavLink>
              <NavLink to="">Deconnexion</NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
