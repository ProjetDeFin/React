import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.scss';
import 'hamburgers/dist/hamburgers.css';

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isOffersActive =
    location.pathname === '/offre/stage' ||
    location.pathname === '/offre/alternance';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <nav className="d-flex align-center">
        <NavLink to="/" className="logo-link" activeClassName="is-active">
          <div className="logo d-flex justify-start">
            <img src="/img/logo/bourse-stage.svg" alt="" />
            <p>Bourse aux Stages</p>
          </div>
        </NavLink>
        <button
          className={`hamburger hamburger--spin ${isMenuOpen ? 'is-active' : ''}`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className={`d-flex menu ${isMenuOpen ? 'is-open' : ''}`}>
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
        {isLoggedIn ? (
          <div className="d-flex account connected dropdown">
            <div className="d-flex">
              <img src={`${process.env.REACT_APP_API_URL}${localStorage.getItem('picture')}`} alt="avatar profil" />
              <h4>{`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}</h4>
            </div>
            <div className="dropdown-content d-flex direction-column">
              {localStorage.getItem('role') === 'ROLE_COMPANY_RESPONSIBLE' ? (
                <NavLink to="/admin/offres">Dashboard</NavLink>
                ) : (
                localStorage.getItem('role') === 'ROLE_SUPER_ADMIN' ? (
                  <NavLink to={process.env.REACT_APP_API_URL}>Administration</NavLink>
                ) : (''))
              }
              <NavLink to="/admin/mon-profil">Profil</NavLink>
              <NavLink
                to=""
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('id');
                  localStorage.removeItem('firstName');
                  localStorage.removeItem('lastName');
                  localStorage.removeItem('role');
                  setIsLoggedIn(false);
                }}
              >
                Deconnexion
              </NavLink>
            </div>
          </div>
        ) : (
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
        )}
      </nav>
    </div>
  );
}
