import CompaniesForward from '../../components/CompaniesForward';
import CompanyCard from '../../components/Card/OfferCompany';
import ApplyStudent from '../../components/Card/ApplyStudent';
import { Icon } from '@iconify/react';
import './index.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const fetchHome = async () => {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/home`);
      if (data.status === 200) {
        setHome(data.data);
      }
    }
    fetchHome();
  }, []);

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
                <span>{ home.internshipsOffersCount }</span> offres de <strong>stages</strong> |{' '}
                <span>{ home.apprenticeshipsOffersCount }</span> offres <strong>d'alternance</strong>{' '}
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
          <div className="d-flex wrap flex-start">
            {home.offers && home.offers.map((offer) => (
              <CompanyCard
                logo={offer.company.logo}
                typeOffer={offer.type}
                nameOffer={offer.title}
                nameCompany={offer.company.name}
                locationCompany={offer.company.city || ''}
                descriptionCompany={offer.description}
                tags={offer.jobProfiles}
                offerId={offer.id}
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
          <div className="d-flex wrap flex-start">
            {home.applications && home.applications.map((apply) => (
              <ApplyStudent
                profilPicture={apply.studentPicture}
                titleApply={apply.title}
                agePerson={apply.studentAge}
                locationPerson={apply.studentCity}
                namePerson={apply.studentFullName}
                tag={apply.type || ''}
                periodApply={apply.period || ''}
                idApply={apply.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
