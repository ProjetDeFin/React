import './index.scss';
import Link from "../../Link";
import { Icon } from '@iconify/react';
import Button from "../../Button";
import {Input} from "postcss";
import InputCustom from "../../Form/Input";
import SocialMedia from "../../social-media";

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>À propos</h3>
          </div>
          <div className="footer-menu">
            <ul className="footer-menu--list">
              <li><Link href="/" children="Accueil" /></li>
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
            <SocialMedia href="" name="ri:facebook-fill" />
            <SocialMedia href="" name="ri:twitter-fill" />
            <SocialMedia href="" name="ri:instagram-line" />
            <SocialMedia href="" name="ri:linkedin-fill" />
          </div>
        </div>
      </footer>
    );
}
