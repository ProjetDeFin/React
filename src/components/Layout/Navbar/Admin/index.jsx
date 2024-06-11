import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import './index.scss';

export default function NavbarAdmin() {
    return (
        <div className="nav-bar-admin">
            <div className="grey">
                <div className="d-flex direction-column">
                    <h3>Mon compte</h3>
                    <div className="d-flex direction-column">
                        <Link to="" className="d-flex justify-start">
                            <Icon icon="ic:outline-message"/>
                            Messages
                        </Link>
                        <Link to="" className="d-flex justify-start">
                            <Icon icon="mingcute:building-2-line"/>
                            Fiche entreprise
                        </Link>
                        <Link to="" className="d-flex justify-start">
                            <Icon icon="bi:people"/>
                            Candidatures
                        </Link>
                        <Link to="" className="d-flex justify-start">
                            <Icon icon="system-uicons:clipboard-notes"/>
                            Offres
                        </Link>
                    </div>
                    <span></span>
                    <div className="d-flex direction-column">
                        <Link to="" className="d-flex justify-start">
                            <Icon icon="fluent:settings-48-regular"/>
                            Paramètres
                        </Link>
                        <div className="d-flex">
                            <img src="/img/profil-picture/avatar.jpg" alt="" />
                            <div className="d-flex direction-column">
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