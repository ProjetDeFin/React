import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import CompanyCard from '../../components/Card/OfferCompany';
import './index.scss';

export default function OfferDetail() {
  const marketing = { name: 'Marketing', color: '#d6a196' };
  const design = { name: 'Design', color: '#acd696' };
  const finance = { name: 'Finance', color: '#96d6d6' };
  const it = { name: 'Informatique', color: '#9696d6' };

  const lastOffers = [
    {
      name: 'Offer 1',
      type: 'Alternance',
      company: {
        name: 'Company 1',
        logo: 'company1.png',
        location: 'Paris',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [marketing, design],
    },
    {
      name: 'Offer 2',
      type: 'Stage',
      company: {
        name: 'Company 2',
        logo: 'company1.png',
        location: 'Lyon',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [design, finance],
    },
    {
      name: 'Offer 3',
      type: 'Alternance',
      company: {
        name: 'Company 3',
        logo: 'company1.png',
        location: 'Marseille',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [marketing, it],
    },
    {
      name: 'Offer 4',
      type: 'Stage',
      company: {
        name: 'Company 4',
        logo: 'company1.png',
        location: 'Toulouse',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [design, finance],
    },
    {
      name: 'Offer 5',
      type: 'Stage',
      company: {
        name: 'Company 5',
        logo: 'company1.png',
        location: 'Nice',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [marketing, it],
    },
    {
      name: 'Offer 6',
      type: 'Alternance',
      company: {
        name: 'Company 6',
        logo: 'company1.png',
        location: 'Nantes',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [design, finance],
    },
    {
      name: 'Offer 7',
      type: 'Stage',
      company: {
        name: 'Company 7',
        logo: 'company1.png',
        location: 'Strasbourg',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [marketing, it],
    },
    {
      name: 'Offer 8',
      type: 'Alternance',
      company: {
        name: 'Company 8',
        logo: 'company1.png',
        location: 'Bordeaux',
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [design, finance],
    },
  ];

  const progress = 12;

  return (
    <div className="offer-detail">
      <div className="container">
        <div className="d-flex align-start">
          <section>
            <div>
              <h2>A propos de ce stage</h2>
              <p>
                Mentalworks est à la recherche d'un(e) assistant(e) en marketing
                des médias sociaux pour l'aider à gérer ses réseaux en ligne.
                Vous serez responsable de la surveillance de nos canaux de
                médias sociaux, de la création de contenu, de la recherche de
                moyens efficaces d'engager la communauté et d'inciter les autres
                à s'engager sur nos canaux.
              </p>
            </div>
            <div className="mission">
              <h2>Missions</h2>
              <div className="d-flex direction-column align-start">
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>
                    Engagement de la communauté pour s'assurer qu'elle est
                    soutenue et activement représentée en ligne
                  </p>
                </div>
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>
                    Se concentrer sur la publication de contenu sur les médias
                    sociaux
                  </p>
                </div>
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>Soutien au marketing et à la stratégie</p>
                </div>
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>
                    Rester à l'affût des tendances sur les plateformes de médias
                    sociaux et suggérer des idées de contenu à l'équipe.
                  </p>
                </div>
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>Participer à des communautés en ligne</p>
                </div>
              </div>
            </div>
            <div className="profil-wanted">
              <h2>Profil recherché</h2>
              <div className="d-flex direction-column align-start">
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>
                    Vous êtes passionné par le digital et pratiquez les
                    principaux réseaux sociaux
                  </p>
                </div>
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>
                    Vous avez le sens des relations humaines et du travail en
                    équipe
                  </p>
                </div>
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>
                    Vous avez un état d'esprit positif et confiant et n'hésitez
                    pas à apprendre de nouvelles compétences et à assumer des
                    responsabilités supplémentaires
                  </p>
                </div>
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>
                    Vous avez le sens du détail et de la créativité et maîtrisez
                    Canva
                  </p>
                </div>
                <div className="d-flex align-start">
                  <Icon icon="simple-line-icons:check" />
                  <p>
                    Vous avez déjà assuré des missions de Community Manager sur
                    Instagram, Linkedin, Facebook, TikTok et X
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="detail">
            <div className="deadline">
              <h3>Échéances</h3>
              <div className="grey">
                <p>Reste 3 jours pour postuler</p>
                <div className="progress-bar-container">
                  <div
                    className={`progress-bar ${progress > 30 ? 'high' : progress > 20 ? 'medium' : 'low'}`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="d-flex">
                <p className="label">Postuler avant le</p>
                <p>17 mai 2024</p>
              </div>
              <div className="d-flex">
                <p className="label">Offre publiée le</p>
                <p>15 avril 2024</p>
              </div>
              <div className="d-flex">
                <p className="label">Type d'offre</p>
                <p>Stage</p>
              </div>
              <div className="d-flex">
                <p className="label">Gratification</p>
                <p>Non obligatoire</p>
              </div>
              <div className="d-flex">
                <p className="label">Candidatures déposées</p>
                <p>6</p>
              </div>
              <span className="line"></span>
            </div>
            <div className="profil">
              <h3>Profils métiers</h3>
              <div className="d-flex justify-start">
                <p className="tag Marketing">Marketing</p>
                <p className="tag Design">Design</p>
              </div>
              <span className="line"></span>
            </div>
            <div className="skill">
              <div className="d-flex justify-start wrap">
                <p className="type-offer">Gestion de projet</p>
                <p className="type-offer">Maîtrise du Français</p>
                <p className="type-offer">Social Media Marketing</p>
                <p className="type-offer">Canva</p>
                <p className="type-offer">Réseaux Sociaux</p>
              </div>
            </div>
          </section>
        </div>
        <Link to={'/apply-job/1'} className="btn">
          Postuler
        </Link>
        <span className="line break-content"></span>
        <section className="company-detail">
          <div className="d-flex">
            <div className="description">
              <img src="/img/logo/tesla.svg" alt="" />
              <p>
                Mentalworks est à la fois une agence web et webmarketing mais
                aussi une SSII/ESN spécialisée dans le développement et la
                maintenance d'applications sur-mesure.
              </p>
              <p>
                Créé par des anciens de l'UTC et de l'INSSET, notre culture et
                notre modèle atypique est un atout et une force qui nous permet
                de couvrir l'intégralité de la chaîne de valeurs pour concevoir
                et réaliser un site internet ou une application web de A à Z :
                audit, conseil, ergonomie, création et webdesign, développement
                front et back, maintenance corrective/évolutive, accompagnement
                webmarketing et même des formations expertes.
              </p>
              <a href="" className="link d-flex">
                En savoir plus sur MentalWorks
                <Icon icon="tabler:arrow-right" />
              </a>
            </div>
            <div className="d-flex gallery">
              <div className="d-flex direction-column">
                <img src="/img/company/photo1.jpg" alt="" />
                <img src="/img/company/photo2.jpg" alt="" />
                <img src="/img/company/photo3.jpg" alt="" />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.4660064693376!2d2.7818889770599915!3d49.38117627140783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7d69aefe1ca19%3A0xa2bd048d657fa30e!2sMentalWorks!5e0!3m2!1sfr!2sfr!4v1717313852498!5m2!1sfr!2sfr"
                width="420"
                height="420"
                style={{ border: 0, borderRadius: 6 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <section className="grey offer-similar">
        <div className="container">
          <div className="d-flex">
            <h2>Offres de stage similaires</h2>
            <a href="/offers/internships" className="turquoise all-offer d-flex">
              toutes les offres
              <Icon icon="tabler:arrow-right"/>
            </a>
          </div>
          <div className="d-flex wrap">
            {lastOffers.map((offer, index) => (
              <CompanyCard
                key={index}
                logo={offer.company.logo}
                typeOffer={offer.type}
                nameOffer={offer.name}
                nameCompany={offer.company.name}
                locationCompany={offer.company.location || ''}
                descriptionCompany={offer.description}
                firstTag={offer.tags[0].name || ''}
                secondTag={offer.tags[1].name || ''}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
