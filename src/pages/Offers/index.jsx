import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import ThumbnailOfferCompany from '../../components/Card/ThumbnailOfferCompany';
import './index.scss';

export default function Companies() {
  const [filter, setFilter] = useState({ sectors: [], categories: [], size: [], distance: 50 });
  const [sort, setSort] = useState('alphaAZ');
  const [allSectorsChecked, setAllSectorsChecked] = useState(true);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, [filter, sort]);

  const fetchOffers = async () => {
    try {
      const queryParams = new URLSearchParams({
        filters: JSON.stringify(filter),
        order: sort,
        orderBy: 'name',
        page: 1,
        limit: 10
      });

      const response = await fetch(`/api/companies?${queryParams}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setOffers(data);
    } catch (error) {
      console.error('Failed to fetch companies:', error);
    }
  };

  const handleSectorChange = (e) => {
    const { value, checked } = e.target;
    setFilter(prevState => {
      const sectors = checked
        ? [...prevState.sectors, value]
        : prevState.sectors.filter(sector => sector !== value);
      return { ...prevState, sectors };
    });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFilter(prevState => {
      const categories = checked
        ? [...prevState.categories, value]
        : prevState.categories.filter(category => category !== value);
      return { ...prevState, categories };
    });
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setFilter(prevState => {
      const size = checked
        ? [...prevState.size, value]
        : prevState.size.filter(size => size !== value);
      return { ...prevState, size };
    });
  };

  const handleDistanceChange = (e) => {
    setFilter(prevState => ({ ...prevState, distance: e.target.value }));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="company-list">
      <div className="grey text-center">
        <div className="container">
          <p className="text-left">Accueil / Offre / <span className="purple">{getTypeTranslation()}</span></p>
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
                <p>Secteur d'activité</p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <div className="d-flex direction-column align-start">
                <div className="d-flex">
                  <input type="checkbox" checked={allSectorsChecked} onChange={() => {
                    setAllSectorsChecked(!allSectorsChecked);
                    setFilter(prevState => ({ ...prevState, sectors: [] }));
                  }} disabled={filter.sectors.length >= 1} />
                  <label>Tous</label>
                </div>
                {['Commerce', 'Industrie mécanique', 'Industrie chimique', 'Automobile', 'Informatique', 'Réseaux, téléphonie, FAI', 'Tourisme, sport', 'Transport', 'Finances', 'Loisirs', 'Alimentation', 'Santé, bien-être', 'Immobilier, BTP', 'Média', 'Autre'].map(sector => (
                  <div className="d-flex" key={sector}>
                    <input type="checkbox" value={sector} checked={filter.sectors.includes(sector)}
                           onChange={handleSectorChange} disabled={allSectorsChecked} />
                    <label>{sector}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="level-of-study">
              <div className="d-flex title">
                <p>Catégorie</p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <div className="d-flex direction-column align-start">
                {[
                  'Master, DEA, DESS',
                  'Licence',
                  'BTS, DUT, BUT',
                  'BAC',
                  'CAP, BEP',
                ].map((level) => (
                  <div className="d-flex" key={level}>
                    <input
                      type="checkbox"
                      value={level}
                      onChange={handleLevelChange}
                    />
                    <label>{level}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="duration">
              <div className="d-flex title">
                <p>Effectifs</p>
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
              <input type="range" min="0" max="100" value={filter.distance} onChange={handleDistanceChange} />
              <p className="distance-text">À moins de {filter.distance} km</p>
            </div>
          </section>
          <section className="result">
            <div className="d-flex">
              <div>
                <h3>Résultats</h3>
                <p>{companies.length} entreprises trouvées</p>
              </div>
              <div className="d-flex">
                <p>Trier par :</p>
                <select value={sort} onChange={handleSortChange}>
                  <option value="dateRecent">
                    Date de publication (plus récent)
                  </option>
                  <option value="dateOld">
                    Date de publication (plus vieux)
                  </option>
                  <option value="alphaAZ">Alphabétique (A-Z)</option>
                  <option value="alphaZA">Alphabétique (Z-A)</option>
                  <option value="deadline">Date limite pour postuler</option>
                </select>
              </div>
            </div>
            <div className="d-flex wrap">
              {companies.map((company, index) => (
                <ThumbnailOfferCompany
                  key={index}
                  logoCompany={company.logo}
                  nameCompany={company.nameCompany}
                  descriptionCompany={company.descriptionCompany}
                  availablePosition={company.labelPoste}
                  firstTag={company.tags[0]}
                  secondTag={company.tags[1]}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
