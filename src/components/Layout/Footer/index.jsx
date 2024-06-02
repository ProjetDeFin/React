import './index.scss';
import Link from '../../Link';
import { Icon } from '@iconify/react';
import Button from '../../Button';
import { Input } from 'postcss';
import InputCustom from '../../Form/Input';
import SocialMedia from '../../social-media';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex align-start">
          <div className="d-flex direction-column align-start">
            <div className="logo d-flex justify-start">
              <img src="/img/logo/bourse-stage.svg" alt="" />
              <p>Bourse au Stages</p>
            </div>
            <p>
              Première plateforme dédiée à la recherche de stages et
              d'alternance qui relie automatiquement les étudiants et les
              entreprises.
            </p>
          </div>
          <div className="d-flex footer-menu direction-column align-start">
            <Link href="/">Accueil</Link>
            <Link href="/">Offres</Link>
            <Link href="/">Demandes</Link>
            <Link href="/">Entreprises</Link>
            <Link href="/">Etudiants</Link>
          </div>
          <div className="d-flex footer-menu direction-column align-start">
            <Link href="/">Blog</Link>
            <Link href="/">Sponsors</Link>
            <Link href="/">Mentions legales</Link>
            <Link href="/">Donnees personnelles</Link>
            <Link href="/">Nous contacter</Link>
          </div>
          <div className="newsletter">
            <h4>Etudiants creez votre compte.</h4>
            <p>
              Recevez automatiquement par email les offres qui vous interessent
            </p>
            <div className="d-flex justify-start">
              <InputCustom type="text" placeholder="Votre email" />
              <Button children="C'est parti"></Button>
            </div>
          </div>
        </div>
        <span></span>
        <div className="d-flex">
          <p>2024 @ Bourse aux stages • Tous droits réservés</p>
          <div className="d-flex">
            <SocialMedia href="" name="ri:facebook-fill" />
            <SocialMedia href="" name="ri:twitter-fill" />
            <SocialMedia href="" name="ri:instagram-line" />
            <SocialMedia href="" name="ri:linkedin-fill" />
          </div>
        </div>
      </div>
    </footer>
  );
}
