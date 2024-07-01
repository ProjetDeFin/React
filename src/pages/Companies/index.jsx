import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import ThumbnailOfferCompany from '../../components/Card/ThumbnailOfferCompany';
import './index.scss';
import axios from 'axios';

export default function Companies() {
  const [filter, setFilter] = useState({
    sectors: [],
    categories: [],
    size: [],
    distance: 50,
  });
  const [allSectorsChecked, setAllSectorsChecked] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [order, setOrder] = useState('ASC');
  const [orderBy, setOrderBy] = useState('name');

  useEffect(() => {
    const queryParams = new URLSearchParams({
      filters: JSON.stringify(filter),
      order: order,
      orderBy: orderBy,
      page: 1,
      limit: 10,
    });

    fetch(`${process.env.REACT_APP_API_URL}/api/companies?${queryParams}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCompanies(data);
      })
      .catch((error) => {
        console.error('Failed to fetch companies:', error);
      });
  }, [filter, orderBy, order]);

  const handleSectorChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prevState) => {
      const sectors = checked
        ? [...prevState.sectors, value]
        : prevState.sectors.filter((sector) => sector !== value);
      return { ...prevState, sectors };
    });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prevState) => {
      const categories = checked
        ? [...prevState.categories, value]
        : prevState.categories.filter((category) => category !== value);
      return { ...prevState, categories };
    });
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setFilter((prevState) => {
      const size = checked
        ? [...prevState.size, value]
        : prevState.size.filter((size) => size !== value);
      return { ...prevState, size };
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
    <div className="company-list">
      <div className="grey text-center">
        <div className="container">
          <p className="text-left">
            Accueil / <span className="purple">Entreprises</span>
          </p>
          <h2>
            Liste des <span className="turquoise">entreprises</span>
          </h2>
          <p>
            Decouvrez les entreprises qui proposent des offres de stage ou
            d'alternance
          </p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-start">
          <section className="filter">
            <div className="profiles">
              <div className="d-flex title">
                <p>Secteur d'activite</p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <div className="d-flex direction-column align-start">
                <div className="d-flex">
                  <input
                    type="checkbox"
                    checked={allSectorsChecked}
                    onChange={() => {
                      setAllSectorsChecked(!allSectorsChecked);
                      setFilter((prevState) => ({ ...prevState, sectors: [] }));
                    }}
                    disabled={filter.sectors.length >= 1}
                  />
                  <label>Tous</label>
                </div>
                {[
                  'Commerce',
                  'Industrie mécanique',
                  'Industrie chimique',
                  'Automobile',
                  'Informatique',
                  'Réseaux, téléphonie, FAI',
                  'Tourisme, sport',
                  'Transport',
                  'Finances',
                  'Loisirs',
                  'Alimentation',
                  'Santé, bien-être',
                  'Immobilier, BTP',
                  'Média',
                  'Autre',
                ].map((sector) => (
                  <div className="d-flex" key={sector}>
                    <input
                      type="checkbox"
                      value={sector}
                      checked={filter.sectors.includes(sector)}
                      onChange={handleSectorChange}
                      disabled={allSectorsChecked}
                    />
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
                  'Services aux particuliers',
                  'Services aux entreprises',
                  'Mairie, collectivité',
                  'Association, ONG',
                  "Organismes d'état",
                  'Autres',
                ].map((category) => (
                  <div className="d-flex" key={category}>
                    <input
                      type="checkbox"
                      value={category}
                      checked={filter.categories.includes(category)}
                      onChange={handleCategoryChange}
                    />
                    <label>{category}</label>
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
                  '1-9',
                  '10-49',
                  '50-99',
                  '100-249',
                  '250-999',
                  '1000 et supérieur',
                ].map((size) => (
                  <div className="d-flex" key={size}>
                    <input
                      type="checkbox"
                      value={size}
                      checked={filter.size.includes(size)}
                      onChange={handleSizeChange}
                    />
                    <label>{size}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="range">
              <div className="d-flex title">
                <p>
                  Distance<span> - 0 a 100KM</span>
                </p>
                <Icon icon="iconamoon:arrow-up-2-duotone" />
              </div>
              <input
                disabled
                type="range"
                min="0"
                max="100"
                value={filter.distance}
                onChange={handleDistanceChange}
              />
              <p className="distance-text">A moins de {filter.distance} km</p>
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
                <select value={orderBy+'-'+order} onChange={handleSortChange}>
                  <option value="title-ASC">Alphabétique (A-Z)</option>
                  <option value="title-DESC">Alphabétique (Z-A)</option>
                </select>
              </div>
            </div>
            <div className="d-flex wrap">
              {companies.map((company) => (
                <ThumbnailOfferCompany
                  key={company.id}
                  logoCompany={company.logo}
                  nameCompany={company.name}
                  descriptionCompany={company.description}
                  tags={company.sectors}
                  idCompany={company.id}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
