import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import CompanyCard from '../../components/Card/OfferCompany';
import './index.scss';
import OfferCompany from '../../components/Card/OfferCompany';
import { useEffect, useState } from 'react';
import Map from '../../components/Map';

export default function OfferDetail() {
  const [offer, setOffer] = useState({});
  const [similarOffers, setSimilarOffers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/offers/${id}`,
{
        method: 'GET',
        headers: {
          'Content-Type': 'application'
        }}
    )
      .then(r => r.json())
      .then(data => {
      setOffer(data.offer);
      setSimilarOffers(data.similarOffers);
      });
   }, [id]);

  return (
    <div className="offer-detail">
      <div className="grey">
        <div className="container">
          <p className="text-left">
            Accueil / Offres / Stages /{' '}
            <span className="purple">{offer.title}</span>
          </p>
          <div className="announce-box">
            <div className="d-flex">
              <div className="d-flex">
                <img src="/img/logo/intel.svg" alt="" />
                <div>
                  <h2>Assistant Social Media</h2>
                  <p className="description">
                    <strong>MentalWorks</strong> . lacroix St Ouen - Du
                    20/05/2024 au 28/08/2024(39 jours)
                  </p>
                  <div className="d-flex tag justify-start">
                    <p className="type-offer">{offer.type}</p>
                    {offer.jobProfiles && offer.jobProfiles.map((tag) => (
                      <p className="tag" style={{ backgroundColor: `${tag.color}50`, color: tag.color }}
                         key={tag.id}>{tag.name}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <Link to={offer.companyLinkedin}>
                  <Icon icon="material-symbols-light:share-outline" />
                </Link>
                <Link className="btn" to="/postuler/1">
                  Postuler
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-start">
          <section>
            <div>
              <h2>A propos de ce stage</h2>
              <p>{offer.description}</p>
            </div>
            <div className="mission">
              <h2>Missions</h2>
              <div className="d-flex direction-column align-start">
                {offer.missions && offer.missions.map((mission) => (
                  <div className="d-flex align-start" key={mission.id}>
                    <Icon icon="simple-line-icons:check" />
                    <p>{mission.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="profil-wanted">
              <h2>Profil recherché</h2>
              <div className="d-flex direction-column align-start">
                {offer.desiredProfiles && offer.desiredProfiles.map((profile) => (
                  <div className="d-flex align-start" key={profile.id}>
                    <Icon icon="simple-line-icons:check" />
                    <p>{profile.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="detail">
            <div className="deadline">
              <h3>Échéances</h3>
              <div className="grey">
                <p>
                  Reste{' '}
                  {`${offer.restDay} ${offer.restDay > 1 ? 'jours' : 'jour'}`}{' '}
                  pour postuler
                </p>
                <div className="progress-bar-container">
                  <div
                    className={`progress-bar ${offer.restDay > 30 ? 'high' : offer.restDay > 20 ? 'medium' : 'low'}`}
                    style={{ width: `${offer.restDay}%` }}
                  ></div>
                </div>
              </div>
              <div className="d-flex">
                <p className="label">Postuler avant le</p>
                <p>{offer.formatedEndApplyDate}</p>
              </div>
              <div className="d-flex">
                <p className="label">Offre publiée le</p>
                <p>{offer.formatedStartApplyDate}</p>
              </div>
              <div className="d-flex">
                <p className="label">Type d'offre</p>
                <p>{offer.type}</p>
              </div>
              <div className="d-flex">
                <p className="label">Gratification</p>
                <p>{offer.restDay > 60 ? 'Obligatoire' : 'Non obligatoire'}</p>
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
                {offer.jobProfiles &&
                  offer.jobProfiles.map((tag) => (
                    <p
                      className="tag"
                      style={{
                        backgroundColor: `${tag.color}50`,
                        color: tag.color,
                      }}
                      key={tag.id}
                    >
                      {tag.name}
                    </p>
                  ))}
              </div>
              <span className="line"></span>
            </div>
            <div className="skill">
              <h3>Compétences recherchées</h3>
              <div className="d-flex justify-start wrap">
                {offer.skills &&
                  offer.skills.map((skill) => (
                    <p className="type-offer" key={skill.id}>
                      {skill.name}
                    </p>
                  ))}
              </div>
            </div>
          </section>
        </div>
        <Link to={`/postuler/${offer.id}`} className="btn">
          Postuler
        </Link>
        <span className="line break-content"></span>
        <section className="company-detail">
          <div className="d-flex">
            <div className="description">
              <img src={`${process.env.REACT_APP_API_URL}${offer.companyLogo}`} alt="" />
              <p>
                {offer.companyDescription}
              </p>
              <Link to={`/detail-entreprise/${offer.companyId}`} className="link d-flex">
                En savoir plus sur {offer.companyName}
                <Icon icon="tabler:arrow-right" />
              </Link>
            </div>
            <div className="d-flex gallery">
              <div className="d-flex direction-column">
                {offer.companyPhotos && offer.companyPhotos.map((photo, index) => (
                  <img key={index} src={`${process.env.REACT_APP_API_URL}${photo}`} alt={offer.companyName} />
                ))}
              </div>
              <Map lat={offer.companyLat} lng={offer.companyLng} />
            </div>
          </div>
        </section>
      </div>
      <section className="grey offer-similar">
        <div className="container">
          <div className="d-flex">
            <h2>Offres de stage similaires</h2>
            <Link to="/offre/stage" className="link d-flex">
              toutes les offres
              <Icon icon="tabler:arrow-right" />
            </Link>
          </div>
          <div className="d-flex wrap">
            {similarOffers.map((offer) => (
              <CompanyCard
                key={offer.id}
                logo={offer.companyLogo}
                typeOffer={offer.type}
                nameOffer={offer.title}
                nameCompany={offer.companyName}
                locationCompany={offer.companyCity}
                descriptionCompany={offer.description}
                tags={offer.jobProfiles}
                restDay={offer.restDay}
                period={offer.period}
                offerId={offer.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
