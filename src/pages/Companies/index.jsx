import { Icon } from '@iconify/react';
import ThumbnailOfferCompany from '../../components/Card/ThumbnailOfferCompany';
import './index.scss';

export default function Companies() {
  const companiesData = [
    {
        logo: "intel.svg",
        nameCompany: "TotalEnergies",
        descriptionCompany: "TotalEnergies est une entreprise française de pétrole et de gaz qui vise à transformer l'énergie durablement.",
        labelPoste: "2 stages, 1 alternance",
        tags: ["Informatique", "Marketing"]
    },
    {
        logo: "intel.svg",
        nameCompany: "BNP Paribas",
        descriptionCompany: "BNP Paribas est une des principales banques de France offrant des services financiers à l'international.",
        labelPoste: "1 stage, 1 alternance",
        tags: ["Finance", "Design"]
    },
    {
        logo: "intel.svg",
        nameCompany: "Renault",
        descriptionCompany: "Renault est un constructeur automobile français renommé pour ses véhicules innovants.",
        labelPoste: "1 stage",
        tags: ["Informatique", "Design"]
    },
    {
        logo: "intel.svg",
        nameCompany: "Société Générale",
        descriptionCompany: "Société Générale est une banque française offrant divers services bancaires et financiers.",
        labelPoste: "1 alternance",
        tags: ["Finance", "Marketing"]
    },
    {
        logo: "intel.svg",
        nameCompany: "Orange",
        descriptionCompany: "Orange est une multinationale française de télécommunications, l'un des principaux opérateurs mondiaux.",
        labelPoste: "2 stages",
        tags: ["Informatique", "Marketing"]
    },
    {
        logo: "intel.svg",
        nameCompany: "L'Oréal",
        descriptionCompany: "L'Oréal est un leader mondial de la beauté, spécialisé dans les produits cosmétiques et de soins.",
        labelPoste: "1 stage, 1 alternance",
        tags: ["Marketing", "Design"]
    },
    {
        logo: "intel.svg",
        nameCompany: "Airbus",
        descriptionCompany: "Airbus est un leader mondial de l'aérospatiale, fabriquant des avions commerciaux et militaires.  constructeur d'avion français, allemand, espagnol et britannique et une coopération industrielle internationale présente dans le secteur",
        labelPoste: "1 stage",
        tags: ["Informatique", "Design"]
    },
    {
        logo: "intel.svg",
        nameCompany: "Carrefour",
        descriptionCompany: "Carrefour est une entreprise française de grande distribution, leader dans le commerce de détail.",
        labelPoste: "1 alternance",
        tags: ["Marketing", "Finance"]
    }
  ];

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
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Tous</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Commerce</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Industrie mécanique</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Industrie chimique</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Automobile</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Réseaux, téléphonie, FAI</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Tourisme, sport</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Transport</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Finances</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Loisirs</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Alimentation</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Santé, bien-être</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Immobilier, BTP</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Média</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Autre</label>
                </div>
              </div>
            </div>
            <div className="level-of-study">
              <div className="d-flex title">
                <p>Catégorie</p>
                <Icon icon="iconamoon:arrow-up-2-duotone"/>
              </div>
              <div className="d-flex direction-column align-start">
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Services aux particuliers</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Services aux entreprises</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Mairie, collectivité</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Association, ONG</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Organismes d'état</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Autres</label>
                </div>
              </div>
            </div>
            <div className="duration">
              <div className="d-flex title">
                <p>Effectifs</p>
                <Icon icon="iconamoon:arrow-up-2-duotone"/>
              </div>
              <div className="d-flex direction-column align-start">
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">1-9</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">10-49</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">50-99</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">100-249</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">250-999</label>
                </div>
                <div className="d-flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">1000 et supérieur</label>
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
                  <option value="">Nom(A-Z)</option>
                  <option value="">Nom(Z-A)</option>
                </select>
              </div>
            </div>
            <div className="d-flex wrap">
            {companiesData.map((company, index) => (
                <ThumbnailOfferCompany
                    key={index}
                    logoCompany={company.logo}
                    nameCompany={company.nameCompany}
                    descriptionCompany={company.descriptionCompany}
                    availablePosition={company.labelPoste}
                    firstTag={company.tags[0]}
                    secondTag={company.tags[1]}
                    idCompany={1}

                />
            ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
