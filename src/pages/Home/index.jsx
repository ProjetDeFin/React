import CompaniesForward from '../../components/CompaniesForward';
import CompanyCard from '../../components/Card/OfferCompany';
import ApplyStudent from '../../components/Card/ApplyStudent';
import { Icon } from '@iconify/react';
import './index.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/home')
      .then((response) => response.json())
      .then((data) => {
        setHome(data);
      }
    );
  }, [home]);

  return (
    <div className="homepage">
      <section className="landing-page">
        <div className="container">
          <div className="d-flex">
            <div className="description">
              <p className="landing-scape">
                Trouver un stage n'aura jamais été <span>aussi facile !</span>
              </p>
              <p>
                Trouvez les offres de stage ou d'alternance près de chez vous
                qui correspondent à votre profil et à vos attentes.
              </p>
              <p>
                <span>1254</span> offres de <strong>stages</strong> |{' '}
                <span>987</span> offres <strong>d'alternance</strong>{' '}
                n'attendent que vous !
              </p>
            </div>
            <img src="/img/home-man.png" alt="" />
          </div>
        </div>
      </section>
      <div className="container">
        {home.categories &&
          <CompaniesForward companies={home.companies} />
        }
        <section className="account-creation">
          <div className="d-flex align-start">
            <div>
              <p>Entreprises,déposez vos offres gratuitement</p>
              <p>
                Vous pourrez gérer votre planning d'accueil et bénéficier de
                nombreux services intégrés.
              </p>
              <Link to="/inscription" className="btn">
                Créez votre compte
              </Link>
            </div>
            <img src="/img/dashboard-thumbnail.jpg" alt="" />
          </div>
        </section>
        <section className="companyOffer">
          <div className="d-flex">
            <h2>
              Dernières <span>offres</span>
            </h2>
            <Link to="/offre/stage" className="turquoise all-offer d-flex">
              toutes les offres
              <Icon icon="tabler:arrow-right" />
            </Link>
          </div>
          <div className="d-flex wrap">
            {home.offers && home.offers.map((offer) => (
              <CompanyCard
                logo={offer.company.logo}
                typeOffer={offer.type}
                nameOffer={offer.title}
                nameCompany={offer.company.name}
                locationCompany={offer.company.city || ''}
                descriptionCompany={offer.description}
                firstTag={offer.jobProfiles[0].name || ''}
                secondTag={offer.jobProfiles[1].name || ''}
                offerId={1}
              />
            ))}
          </div>
        </section>
      </div>
      <section className="bg-grey apply-student">
        <div className="container">
          <div className="d-flex">
            <h2>
              Dernières <span>demandes</span>
            </h2>
            <Link to="" className="turquoise all-offer d-flex">
              toutes les demandes
              <Icon icon="tabler:arrow-right" />
            </Link>
          </div>
          <div className="d-flex wrap">
            {/*{home.applications && home.applications.map((apply) => (
              <ApplyStudent
                profilPicture={apply.student.picture}
                titleApply={apply.name}
                agePerson={apply.student.age}
                locationPerson={apply.student.city}
                namePerson={apply.student.name}
                tag={apply.tags[0].name || ''}
                periodApply={apply.period || ''}
              />
            ))}*/}
          </div>
        </div>
      </section>
    </div>
  );
}
