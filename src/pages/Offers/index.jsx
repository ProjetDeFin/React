import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import './index.scss';
import OfferCompany from '../../components/Card/OfferCompany';

export default function Offers({ type }) {
  const getTypeTranslation = () => {
    switch (type) {
      case 'internships':
        return 'Stage';
      case 'apprenticeships':
        return 'Alternance';
      default:
        return 'Stage';
    }
  };

  const [filter, setFilter] = useState({
    profiles: [],
    levels: [],
    duration: [],
    type: getTypeTranslation(),
    distance: 100,
  });
  const [offers, setOffers] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [levels, setLevels] = useState([]);
  const [order, setOrder] = useState('ASC');
  const [orderBy, setOrderBy] = useState('title');

  useEffect(() => {
    const queryParams = new URLSearchParams({
      filters: JSON.stringify(filter),
      order: order,
      orderBy: orderBy,
      page: 1,
      limit: 10,
    });

    fetch(`${process.env.REACT_APP_API_URL}/api/offers?${queryParams}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setOffers(data.offers);
        setProfiles(data.jobProfiles);
        setLevels(data.diplomas);
      }).catch((error) => {
        console.error('Failed to fetch offers:', error);
      });
    }, [filter, order, orderBy]);

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
    const values = e.target.value.split('-');
    setOrderBy(values[0]);
    setOrder(values[1]);
  };

  return (
    <div className="offers">
      <div className="grey text-center">
        <div className="container">
          <p className="text-left">
            Accueil / Offre /{' '}
            <span className="purple">{getTypeTranslation()}</span>
          </p>
          <h2>
            Offres de{' '}
            <span className="turquoise">
              {getTypeTranslation().toLowerCase()}
            </span>
          </h2>
          <p>
            Découvrez les offres de {getTypeTranslation().toLowerCase()}{' '}
            actuellement proposées par les entreprises
          </p>
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
                {profiles && profiles.map((profile) => (
                  <div className="d-flex" key={profile.id}>
                    <input
                      type="checkbox"
                      value={profile.name}
                      onChange={handleProfileChange}
                    />
                    <label>{profile.name}</label>
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
                { levels && levels.map((level) => (
                  <div className="d-flex" key={level.id}>
                    <input
                      type="checkbox"
                      value={level.name}
                      onChange={handleLevelChange}
                    />
                    <label>{level.name}</label>
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
                {[
                  'Moins de 2 mois',
                  'Entre 2 et 6 mois',
                  'Entre 6 et 12 mois',
                  'Plus de 12 mois',
                ].map((duration) => (
                  <div className="d-flex" key={duration}>
                    <input
                      type="checkbox"
                      value={duration}
                      onChange={handleDurationChange}
                    />
                    <label>{duration}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="range">
              <div className="d-flex title">
                <p>
                  Distance<span> - 0 à 100KM</span>
                </p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={filter.distance}
                onChange={handleDistanceChange}
              />
              <p className="distance-text">À moins de {filter.distance} km</p>
            </div>
          </section>
          <section className="result">
            <div className="d-flex">
              <div>
                <h3>Résultats</h3>
                <p>
                  {offers && offers.length > 0 ? offers.length : 0} entreprises
                  trouvées
                </p>
              </div>
              <div className="d-flex">
                <p>Trier par :</p>
                <select
                  value={orderBy + '-' + order}
                  onChange={handleSortChange}
                >
                  <option value="updatedAt-ASC">
                    Date de publication (plus récent)
                  </option>
                  <option value="updatedAt-DESC">
                    Date de publication (plus vieux)
                  </option>
                  <option value="title-ASC">Alphabétique (A-Z)</option>
                  <option value="title-DESC">Alphabétique (Z-A)</option>
                  <option value="deadline">Date limite pour postuler</option>
                </select>
              </div>
            </div>
            <div className="d-flex direction-column">
              {offers.map((offer) => (
                <OfferCompany
                  logo={offer.companyLogo}
                  typeOffer={offer.type}
                  nameOffer={offer.title}
                  nameCompany={offer.companyName}
                  locationCompany={offer.companyCity}
                  tags={offer.jobProfiles}
                  inOfferPage={true}
                  period={offer.period}
                  restDay={offer.restDay}
                  duration={offer.duration}
                  offerId={offer.id}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
