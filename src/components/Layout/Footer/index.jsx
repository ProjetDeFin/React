import './index.scss';
import Link from "../../Link";
import { Icon } from '@iconify/react';
import Button from "../../Button";
import {Input} from "postcss";
import InputCustom from "../../Form/Input";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <h3>À propos</h3>
                </div>
                <div className="footer-menu">
                    <ul className="footer-menu--list">
                        <li><Link href="/" children="Accueil"/></li>
                        <li><Link href="/offers" children="Offres"/></li>
                        <li><Link href="/applications" children="Demandes"/></li>
                        <li><Link href="/companies" children="Entreprises"/></li>
                        <li><Link href="/students" children="Etudiants"/></li>
                    </ul>
                    <ul className="footer-menu--list">
                        <li><Link href="/" children="Accueil"/></li>
                        <li><Link href="/offers" children="Offres"/></li>
                        <li><Link href="/applications" children="Demandes"/></li>
                        <li><Link href="/companies" children="Entreprises"/></li>
                        <li><Link href="/students" children="Etudiants"/></li>
                    </ul>
                </div>
                <div className="footer-student">
                    <div className="footer-student--title">
                        <h3>Étudiants, créer votre compte</h3>
                        <p>Recevez automatiquement par email les offres qui vous intéressent!</p>
                    </div>
                    <div className="footer-student--form">
                        <InputCustom type="text" placeholder="Votre email" classes="footer-email"/>
                        <Button children="C'est parti"></Button>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="footer-bottom">
                <p>2024 @ Bourse aux stages • Tous droits réservés</p>
                <div className="footer-bottom--links">
                    <Link href="" classes="social-network" children={<Icon icon="ri:facebook-fill" />} />
                    <Link href="" classes="social-network" children={<Icon icon="ri:twitter-fill" />} />
                    <Link href="" classes="social-network" children={<Icon icon="ri:instagram-line" />} />
                    <Link href="" classes="social-network" children={<Icon icon="ri:linkedin-fill" />} />
                </div>
            </div>
        </footer>
    );
}
