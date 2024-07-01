import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import './index.scss';

export default function NavbarAdmin() {
  const role = localStorage.getItem('role');

  return (
    <div className="nav-bar-admin">
      <div className="grey">
        <div className="nav-container">
          <h3>Mon compte</h3>
          <div className="d-flex direction-column align-start menu-admin">
            <NavLink
              to="/admin/mon-profil"
              className="d-flex justify-start"
              activeClassName="is-active"
            >
              <Icon icon="carbon:user-profile" />
              Mon profil
            </NavLink>
            {role === 'ROLE_COMPANY_RESPONSIBLE' && (
              <NavLink
                to="/admin/entreprise"
                className="d-flex justify-start"
                activeClassName="is-active"
              >
                <Icon icon="mingcute:building-2-line" />
                Fiche entreprise
              </NavLink>
            )}
            <NavLink
              to="/admin/liste-candidats"
              className="d-flex justify-start"
              activeClassName="is-active"
            >
              <Icon icon="bi:people" />
              Candidatures
            </NavLink>
            <NavLink
              to="/admin/offres"
              className="d-flex justify-start"
              activeClassName="is-active"
            >
              <Icon icon="system-uicons:clipboard-notes" />
              Offres
            </NavLink>
          </div>
        </div>
        <span></span>
        <div className="nav-container">
          <div className="d-flex direction-column parameter">
            <NavLink
              to=""
              className="d-flex justify-start"
              activeClassName="is-active"
            >
              <Icon icon="fluent:settings-48-regular" />
              Paramètres
            </NavLink>
            <div className="d-flex profil">
              <img src={`${process.env.REACT_APP_API_URL}${localStorage.getItem('picture')}`} alt="avatar profil" />
              <div className="d-flex direction-column align-start account">
                <h4>{`${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}</h4>
                <p> {localStorage.getItem('role') === 'ROLE_COMPANY_RESPONSIBLE' ? 'Administrateur' : localStorage.getItem('role') === 'ROLE_SUPER_ADMIN' ? 'Super-Administrateur' : 'Étudiant'} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
