import { Icon } from '@iconify/react';
import CompanyCard from '../../components/Card/OfferCompany';
import './index.scss';
import { useState } from 'react';

export default function Offers({ type }) {
  const [filter, setFilter] = useState({
    profiles: [],
    levels: [],
    duration: [],
    distance: 100,
  });

  const [sort, setSort] = useState('dateRecent');

  // TODO: remove this when API call
  const getTypeTranslation = () => {
    switch (type) {
      case 'internships':
        return 'Stage';
      case 'apprenticeships':
        return 'Alternance';
      default:
        return 'Stage';
    }
  }

  const offerData = [
    {
      logo: 'intel.svg',
      nameOffer: getTypeTranslation()+' en analyse de données',
      nameCompany: 'Orange',
      locationCompany: 'Paris',
      period: 'Du 10/04/2024 au 10/06/2024 (61 jours)',
      typeOffer: getTypeTranslation(),
      restDay: 30,
      firstTag: 'Marketing',
      secondTag: 'Design',
      level: 'Master, DEA, DESS',
      duration: 'Entre 2 et 6 mois'
    },
    {
      logo: 'intel.svg',
      nameOffer: getTypeTranslation()+' en développement web',
      nameCompany: 'BNP Paribas',
      locationCompany: 'Lyon',
      period: 'Du 01/05/2024 au 01/07/2024 (62 jours)',
      typeOffer: getTypeTranslation(),
      restDay: 45,
      firstTag: 'Informatique',
      secondTag: 'Finance',
      level: 'Licence',
      duration: 'Moins de 2 mois'
    },
    {
      logo: 'intel.svg',
      nameOffer: getTypeTranslation()+' en gestion de projet',
      nameCompany: 'Air France',
      locationCompany: 'Marseille',
      period: 'Du 15/04/2024 au 15/06/2024 (62 jours)',
      typeOffer: getTypeTranslation(),
      restDay: 60,
      firstTag: 'Finance',
      secondTag: 'Marketing',
      level: 'BTS, DUT, BUT',
      duration: 'Entre 2 et 6 mois'
    },
    {
      logo: 'intel.svg',
      nameOffer: getTypeTranslation()+' en design UX/UI',
      nameCompany: 'Renault',
      locationCompany: 'Nice',
      period: 'Du 20/04/2024 au 20/06/2024 (62 jours)',
      typeOffer: getTypeTranslation(),
      restDay: 50,
      firstTag: 'Design',
      secondTag: 'Informatique',
      level: 'Master, DEA, DESS',
      duration: 'Plus de 12 mois'
    },
    {
      logo: 'intel.svg',
      nameOffer: getTypeTranslation()+" en finance d'entreprise",
      nameCompany: 'TotalEnergies',
      locationCompany: 'Toulouse',
      period: 'Du 25/05/2024 au 25/06/2024 (62 jours)',
      typeOffer: getTypeTranslation(),
      restDay: 25,
      firstTag: 'Finance',
      secondTag: 'Marketing',
      level: 'Licence',
      duration: 'Entre 2 et 6 mois'
    },
    {
      logo: 'intel.svg',
      nameOffer: getTypeTranslation()+' en marketing digital',
      nameCompany: "L'Oréal",
      locationCompany: 'Bordeaux',
      period: 'Du 01/02/2024 au 30/06/2024 (62 jours)',
      typeOffer: getTypeTranslation(),
      restDay: 15,
      firstTag: 'Marketing',
      secondTag: 'Design',
      level: 'Master, DEA, DESS',
      duration: 'Entre 2 et 6 mois'
    },
    {
      logo: 'intel.svg',
      nameOffer: getTypeTranslation()+' en ressources humaines',
      nameCompany: 'SNCF',
      locationCompany: 'Strasbourg',
      period: 'Du 01/05/2024 au 05/07/2024 (62 jours)',
      typeOffer: getTypeTranslation(),
      restDay: 10,
      firstTag: 'Design',
      secondTag: 'Finance',
      level: 'BTS, DUT, BUT',
      duration: 'Entre 2 et 6 mois'
    },
    {
      logo: 'intel.svg',
      nameOffer: getTypeTranslation()+' en data science',
      nameCompany: 'Capgemini',
      locationCompany: 'Nantes',
      period: 'Du 10/05/2024 au 10/07/2024 (62 jours)',
      typeOffer: getTypeTranslation(),
      restDay: 75,
      firstTag: 'Informatique',
      secondTag: 'Marketing',
      level: 'Licence',
      duration: 'Entre 2 et 6 mois'
    },
  ];

  const handleProfileChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prevState) => {
      const profiles = checked
        ? [...prevState.profiles, value]
        : prevState.profiles.filter((profile) => profile !== value);
      return { ...prevState, profiles };
    });
  };

  const handleLevelChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prevState) => {
      const levels = checked
        ? [...prevState.levels, value]
        : prevState.levels.filter((level) => level !== value);
      return { ...prevState, levels };
    });
  };

  const handleDurationChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prevState) => {
      const duration = checked
        ? [...prevState.duration, value]
        : prevState.duration.filter((d) => d !== value);
      return { ...prevState, duration };
    });
  };

  const handleDistanceChange = (e) => {
    setFilter((prevState) => ({ ...prevState, distance: e.target.value }));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredOffers = offerData.filter(offer => {
    const profileMatch = filter.profiles.length === 0 || filter.profiles.includes(offer.firstTag) || filter.profiles.includes(offer.secondTag);
    const levelMatch = filter.levels.length === 0 || filter.levels.includes(offer.level);
    const durationMatch = filter.duration.length === 0 || filter.duration.includes(offer.duration);
    const distanceMatch = true;

    return profileMatch && levelMatch && durationMatch && distanceMatch;
  });

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (sort === 'dateRecent') {
      return (
        new Date(b.period.split(' ')[2]) - new Date(a.period.split(' ')[2])
      );
    } else if (sort === 'dateOld') {
      return (
        new Date(a.period.split(' ')[2]) - new Date(b.period.split(' ')[2])
      );
    } else if (sort === 'alphaAZ') {
      return a.nameOffer.localeCompare(b.nameOffer);
    } else if (sort === 'alphaZA') {
      return b.nameOffer.localeCompare(a.nameOffer);
    } else if (sort === 'deadline') {
      return b.restDay - a.restDay;
    }
    return 0;
  });

  return (
    <div className="offers">
      <div className="grey text-center">
        <div className="container">
          <h2>Offres de <span className="turquoise">{getTypeTranslation().toLowerCase()}</span></h2>
          <p>Découvrez les offres de {getTypeTranslation().toLowerCase()} actuellement proposées par les entreprises</p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-start">
          <section className="filter">
            <div className="profiles">
              <div className="d-flex title">
                <p>Profils métiers</p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <div className="d-flex direction-column align-start">
                {[
                  'Design',
                  'Commercial',
                  'Marketing',
                  'Business',
                  'Management',
                  'Finance',
                  'Industrie',
                  'Informatique',
                ].map((profile) => (
                  <div className="d-flex" key={profile}>
                    <input
                      type="checkbox"
                      value={profile}
                      onChange={handleProfileChange}
                    />
                    <label>{profile}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="level-of-study">
              <div className="d-flex title">
                <p>Niveau recherché</p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <div className="d-flex direction-column align-start">
                {['Master, DEA, DESS', 'Licence', 'BTS, DUT, BUT', 'BAC', 'CAP, BEP'].map(level => (
                  <div className="d-flex" key={level}>
                    <input type="checkbox" value={level} onChange={handleLevelChange} />
                    <label>{level}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="duration">
              <div className="d-flex title">
                <p>Durée</p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <div className="d-flex direction-column align-start">
                {['Moins de 2 mois', 'Entre 2 et 6 mois', 'Entre 6 et 12 mois', 'Plus de 12 mois'].map(duration => (
                  <div className="d-flex" key={duration}>
                    <input type="checkbox" value={duration} onChange={handleDurationChange} />
                    <label>{duration}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="range">
              <div className="d-flex title">
                <p>Distance<span> - 0 à 100KM</span></p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={filter.distance}
                onChange={handleDistanceChange}
                disabled={true}
              />
              <button>A moins de {filter.distance} km</button>
            </div>
          </section>
          <section className="result">
            <div className="d-flex">
              <div>
                <h3>Résultats</h3>
                <p>{sortedOffers.length} offres trouvées</p>
              </div>
              <div className="d-flex">
                <p>Trier par :</p>
                <select value={sort} onChange={handleSortChange}>
                  <option value="dateRecent">Date de publication (plus récent)</option>
                  <option value="dateOld">Date de publication (plus vieux)</option>
                  <option value="alphaAZ">Alphabétique (A-Z)</option>
                  <option value="alphaZA">Alphabétique (Z-A)</option>
                  <option value="deadline">Date limite pour postuler</option>
                </select>
              </div>
            </div>
            <div className="d-flex direction-column">
              {sortedOffers.map((offer, index) => (
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
