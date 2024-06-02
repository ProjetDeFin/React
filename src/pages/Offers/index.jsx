import { Icon } from '@iconify/react';
import CompanyCard from '../../components/Card/OfferCompany';
import './index.scss';

export default function Offers() {

  const offerData = [
    {
        logo: 'intel.svg',
        nameOffer: 'Stage en analyse de données',
        nameCompany: 'Orange',
        locationCompany: 'Paris',
        period: 'Du 10/04/2024 au 10/06/2024 (61 jours)',
        typeOffer: 'Stage',
        restDay: 30,
        firstTag: 'Marketing',
        secondTag: 'Design'
    },
    {
        logo: 'intel.svg',
        nameOffer: 'Stage en développement web',
        nameCompany: 'BNP Paribas',
        locationCompany: 'Lyon',
        period: 'Du 01/05/2024 au 01/07/2024 (62 jours)',
        typeOffer: 'Stage',
        restDay: 45,
        firstTag: 'Informatique',
        secondTag: 'Finance'
    },
    {
        logo: 'intel.svg',
        nameOffer: 'Stage en gestion de projet',
        nameCompany: 'Air France',
        locationCompany: 'Marseille',
        period: 'Du 15/04/2024 au 15/06/2024 (62 jours)',
        typeOffer: 'Stage',
        restDay: 60,
        firstTag: 'Finance',
        secondTag: 'Marketing'
    },
    {
        logo: 'intel.svg',
        nameOffer: 'Stage en design UX/UI',
        nameCompany: 'Renault',
        locationCompany: 'Nice',
        period: 'Du 20/04/2024 au 20/06/2024 (62 jours)',
        typeOffer: 'Stage',
        restDay: 50,
        firstTag: 'Design',
        secondTag: 'Informatique'
    },
    {
        logo: 'intel.svg',
        nameOffer: 'Stage en finance d\'entreprise',
        nameCompany: 'TotalEnergies',
        locationCompany: 'Toulouse',
        period: 'Du 25/05/2024 au 25/06/2024 (62 jours)',
        typeOffer: 'Stage',
        restDay: 25,
        firstTag: 'Finance',
        secondTag: 'Marketing'
    },
    {
        logo: 'intel.svg',
        nameOffer: 'Stage en marketing digital',
        nameCompany: 'L\'Oréal',
        locationCompany: 'Bordeaux',
        period: 'Du 01/02/2024 au 30/06/2024 (62 jours)',
        typeOffer: 'Stage',
        restDay: 15,
        firstTag: 'Marketing',
        secondTag: 'Design'
    },
    {
        logo: 'intel.svg',
        nameOffer: 'Stage en ressources humaines',
        nameCompany: 'SNCF',
        locationCompany: 'Strasbourg',
        period: 'Du 01/05/2024 au 05/07/2024 (62 jours)',
        typeOffer: 'Stage',
        restDay: 10,
        firstTag: 'Design',
        secondTag: 'Finance'
    },
    {
        logo: 'intel.svg',
        nameOffer: 'Stage en data science',
        nameCompany: 'Capgemini',
        locationCompany: 'Nantes',
        period: 'Du 10/05/2024 au 10/07/2024 (62 jours)',
        typeOffer: 'Stage',
        restDay: 75,
        firstTag: 'Informatique',
        secondTag: 'Marketing'
    }
];

  return (
    <div className="offers">
      <div className="grey text-center">
        <div className="container">
          <h2>Offres de <span className="turquoise">stage</span></h2>
          <p>Découvrez les offres de stages actuellement proposées par les entreprises</p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-start">
          <section className="filter">
            <div className="profiles">
              <div className="d-flex title">
                <p>Profils métiers</p>
                <Icon icon="iconamoon:arrow-up-2-duotone"/>
              </div>
              <div className="d-flex direction-column align-start">
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Design</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Commercial</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Marketing</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Business</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Management</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Finance</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Industrie</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Informatique</label>
                </div>
              </div>
            </div>
            <div className="level-of-study">
              <div className="d-flex title">
                <p>Niveau recherché</p>
                <Icon icon="iconamoon:arrow-up-2-duotone"/>
              </div>
              <div className="d-flex direction-column align-start">
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Master, DEA, DESS</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">License</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">BTS, DUT, BUT</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">BAC</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">CAP, BEP</label>
                </div>
              </div>
            </div>
            <div className="duration">
              <div className="d-flex title">
                <p>Durée</p>
                <Icon icon="iconamoon:arrow-up-2-duotone"/>
              </div>
              <div className="d-flex direction-column align-start">
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Moins de 2 mois</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Entre 2 et 6 mois</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Entre 6 et 12 mois</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Plus de 12 mois</label>
                </div>
              </div>
            </div>
            <div className="range">
              <div className="d-flex title">
                <p>Distance<span> - 0 a 100KM</span></p>
                <Icon icon="iconamoon:arrow-up-2-duotone"/>
              </div>
              <input type="range" name="" id="" min="0" max="100"/>
              <button>A moins de 50 km</button>
            </div>
          </section>
          <section className="result">
            <div className="d-flex">
              <div>
                <h3>Résultats</h3>
                <p>73 offres trouvées</p>
              </div>
              <div className="d-flex">
                <p>Trier par :</p>
                <select name="" id="">
                  <option value="">Date de publication (plus récent)</option>
                  <option value="">Date de publication (plus vieux)</option>
                </select>
              </div>
            </div>
            <div className="d-flex direction-column">
            {offerData.map((offer, index) => (
                <CompanyCard
                    key={index}
                    logo={offer.logo}
                    typeOffer={offer.typeOffer}
                    nameOffer={offer.nameOffer}
                    nameCompany={offer.nameCompany}
                    locationCompany={offer.locationCompany}
                    descriptionCompany={offer.descriptionCompany}
                    firstTag={offer.firstTag}
                    secondTag={offer.secondTag}
                    inOfferPage={true}
                    period={offer.period}
                    restDay={offer.restDay}
                    offerId="1"
                />
            ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
