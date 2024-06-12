import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import './index.scss';

export default function NavbarAdmin() {
    return (
        <div className="nav-bar-admin">
            <div className="grey">
               <div className="nav-container">
                    <h3>Mon compte</h3>
                    <div className="d-flex direction-column align-start menu-admin">
                        <NavLink to="" className="d-flex justify-start" activeClassName="is-active">
                            <Icon icon="mingcute:building-2-line"/>
                            Fiche entreprise
                        </NavLink>
                        <NavLink to="/admin/apply" className="d-flex justify-start" activeClassName="is-active">
                            <Icon icon="bi:people"/>
                            Candidatures
                        </NavLink>
                        <NavLink to="/admin/offres" className="d-flex justify-start" activeClassName="is-active">
                            <Icon icon="system-uicons:clipboard-notes"/>
                            Offres
                        </NavLink>
                    </div>
                </div>
                <span></span>
                <div className="nav-container">
                    <div className="d-flex direction-column parameter">
                        <NavLink to="" className="d-flex justify-start" activeClassName="is-active">
                            <Icon icon="fluent:settings-48-regular"/>
                            Paramètres
                        </NavLink>
                        <div className="d-flex profil">
                            <img src="/img/profil-picture/avatar.jpg" alt="" />
                            <div className="d-flex direction-column align-start">
                                <h4>Olivier SALESSE</h4>
                                <p>Administrateur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}