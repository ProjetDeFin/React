import { Icon } from '@iconify/react';
import ThumbnailOfferCompany from '../../components/Card/ThumbnailOfferCompany';
import './index.scss';
import {useState} from "react";

export default function Companies() {
    const [filter, setFilter] = useState({ sectors: [], categories: [], size: [], distance: 50 });
       const [sort, setSort] = useState('alphaAZ');
    const [allSectorsChecked, setAllSectorsChecked] = useState(true);
  const companiesData = [
    {
      logo: 'intel.svg',
      nameCompany: 'TotalEnergies',
      descriptionCompany:
        "TotalEnergies est une entreprise française de pétrole et de gaz qui vise à transformer l'énergie durablement.",
      labelPoste: '2 stages, 1 alternance',
      tags: ['Informatique', 'Marketing'],
    },
    {
      logo: 'intel.svg',
      nameCompany: 'BNP Paribas',
      descriptionCompany:
        "BNP Paribas est une des principales banques de France offrant des services financiers à l'international.",
      labelPoste: '1 stage, 1 alternance',
      tags: ['Finance', 'Design'],
    },
    {
      logo: 'intel.svg',
      nameCompany: 'Renault',
      descriptionCompany:
        'Renault est un constructeur automobile français renommé pour ses véhicules innovants.',
      labelPoste: '1 stage',
      tags: ['Informatique', 'Design'],
    },
    {
      logo: 'intel.svg',
      nameCompany: 'Société Générale',
      descriptionCompany:
        'Société Générale est une banque française offrant divers services bancaires et financiers.',
      labelPoste: '1 alternance',
      tags: ['Finance', 'Marketing'],
    },
    {
      logo: 'intel.svg',
      nameCompany: 'Orange',
      descriptionCompany:
        "Orange est une multinationale française de télécommunications, l'un des principaux opérateurs mondiaux.",
      labelPoste: '2 stages',
      tags: ['Informatique', 'Marketing'],
    },
    {
      logo: 'intel.svg',
      nameCompany: "L'Oréal",
      descriptionCompany:
        "L'Oréal est un leader mondial de la beauté, spécialisé dans les produits cosmétiques et de soins.",
      labelPoste: '1 stage, 1 alternance',
      tags: ['Marketing', 'Design'],
    },
    {
      logo: 'intel.svg',
      nameCompany: 'Airbus',
      descriptionCompany:
        "Airbus est un leader mondial de l'aérospatiale, fabriquant des avions commerciaux et militaires.  constructeur d'avion français, allemand, espagnol et britannique et une coopération industrielle internationale présente dans le secteur",
      labelPoste: '1 stage',
      tags: ['Informatique', 'Design'],
    },
    {
      logo: 'intel.svg',
      nameCompany: 'Carrefour',
      descriptionCompany:
        'Carrefour est une entreprise française de grande distribution, leader dans le commerce de détail.',
      labelPoste: '1 alternance',
      tags: ['Marketing', 'Finance'],
    },
  ];

    const handleSectorChange = (e) => {
        const { value, checked } = e.target;
        setFilter(prevState => {
            const sectors = checked
                ? [...prevState.sectors, value]
                : prevState.sectors.filter(sector => sector !== value);
            return { ...prevState, sectors };
        });
        if (checked) {
            setAllSectorsChecked(false);
        } else if (filter.sectors.length === 1) {
            setAllSectorsChecked(true);
        }
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

    const filteredCompanies = companiesData.filter(company => {
        const sectorMatch = filter.sectors.length === 0 || filter.sectors.includes(company.sector);
        const categoryMatch = filter.categories.length === 0 || filter.categories.some(category => company.categories.includes(category));
        const sizeMatch = filter.size.length === 0 || filter.size.includes(company.size);

        return sectorMatch && categoryMatch && sizeMatch;
    });

    const sortedCompanies = [...filteredCompanies].sort((a, b) => {
        if (sort === 'alphaAZ') {
            return a.nameCompany.localeCompare(b.nameCompany);
        } else if (sort === 'alphaZA') {
            return b.nameCompany.localeCompare(a.nameCompany);
        }
        return 0;
    });

    return (
        <div className="company-list">
            <div className="grey text-center">
                <h2>Liste des <span className="turquoise">entreprises</span></h2>
                <p>Decouvrez les entreprises qui proposent des offres de stage ou d'alternance</p>
            </div>
            <div className="container">
                <div className="d-flex align-start">
                    <section className="filter">
                        <div className="profiles">
                            <div className="d-flex title">
                                <p>Secteur d'activite</p>
                                <Icon icon="iconamoon:arrow-up-2-duotone"/>
                            </div>
                            <div className="d-flex direction-column align-start">
                                <div className="d-flex">
                                    <input type="checkbox" checked={allSectorsChecked} onChange={() => {
                                        setAllSectorsChecked(!allSectorsChecked);
                                        setFilter(prevState => ({ ...prevState, sectors: [] }));
                                    }} />
                                    <label>Tous</label>
                                </div>
                                {['Commerce', 'Industrie mécanique', 'Industrie chimique', 'Automobile', 'Informatique', 'Réseaux, téléphonie, FAI', 'Tourisme, sport', 'Transport', 'Finances', 'Loisirs', 'Alimentation', 'Santé, bien-être', 'Immobilier, BTP', 'Média', 'Autre'].map(sector => (
                                    <div className="d-flex" key={sector}>
                                        <input type="checkbox" value={sector} checked={filter.sectors.includes(sector)} onChange={handleSectorChange} />
                                        <label>{sector}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="level-of-study">
                            <div className="d-flex title">
                                <p>Catégorie</p>
                                <Icon icon="iconamoon:arrow-up-2-duotone"/>
                            </div>
                            <div className="d-flex direction-column align-start">
                                {['Services aux particuliers', 'Services aux entreprises', 'Mairie, collectivité', 'Association, ONG', 'Organismes d\'état', 'Autres'].map(category => (
                                    <div className="d-flex" key={category}>
                                        <input type="checkbox" value={category} checked={filter.categories.includes(category)} onChange={handleCategoryChange} />
                                        <label>{category}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="duration">
                            <div className="d-flex title">
                                <p>Effectifs</p>
                                <Icon icon="iconamoon:arrow-up-2-duotone"/>
                            </div>
                            <div className="d-flex direction-column align-start">
                                {['1-9', '10-49', '50-99', '100-249', '250-999', '1000 et supérieur'].map(size => (
                                    <div className="d-flex" key={size}>
                                        <input type="checkbox" value={size} checked={filter.size.includes(size)} onChange={handleSizeChange} />
                                        <label>{size}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="range">
                            <div className="d-flex title">
                                <p>Distance<span> - 0 a 100KM</span></p>
                                <Icon icon="iconamoon:arrow-up-2-duotone"/>
                            </div>
                            <input disabled type="range" min="0" max="100" value={filter.distance} onChange={handleDistanceChange}/>
                            <button>A moins de {filter.distance} km</button>
                        </div>
                    </section>
                    <section className="result">
                        <div className="d-flex">
                            <div>
                                <h3>Résultats</h3>
                                <p>{sortedCompanies.length} entreprises trouvées</p>
                            </div>
                            <div className="d-flex">
                                <p>Trier par :</p>
                                <select value={sort} onChange={handleSortChange}>
                                    <option value="alphaAZ">Nom (A-Z)</option>
                                    <option value="alphaZA">Nom (Z-A)</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex wrap">
                            {sortedCompanies.map((company, index) => (
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
