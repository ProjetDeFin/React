import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import ThumbnailResumeOffer from '../../components/Card/ThumbnailResumeOffer';
import './index.scss';

export default function CompanyDetail() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchCompanyDetails();
  }, [id]);

  const fetchCompanyDetails = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/companies/${id}`,
      );
      const data = await response.json();
      setCompany(data);
      setOffers(data.offers); // Assumes the API returns offers within the company data
    } catch (error) {
      console.error('Failed to fetch company details:', error);
    }
  };

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div className="company-detail">
      <div className="grey">
        <div className="container">
          <p className="text-left">
            Accueil / Entreprises / <span className="purple">MentalWorks</span>
          </p>
          <h2>{company.name}</h2>
          <a href={company.website} className="link d-flex">
            {company.website} <Icon icon="tabler:arrow-right" />
          </a>
          <div className="d-flex summary justify-start">
            <div className="d-flex">
              <div className="circle d-flex justify-center align-center">
                <Icon icon="simple-line-icons:check" />
              </div>
              <div>
                <p>Activité</p>
                <p>{company.activity}</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="circle d-flex justify-center align-center">
                <Icon icon="simple-line-icons:fire" />
              </div>
              <div>
                <p>Ancienneté</p>
                <p>{company.age} ans</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="circle d-flex justify-center align-center">
                <Icon icon="fluent:people-team-20-regular" />
              </div>
              <div>
                <p>Effectifs</p>
                <p>{company.employees}</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="circle d-flex justify-center align-center">
                <Icon icon="grommet-icons:money" />
              </div>
              <div>
                <p>Chiffre d'affaires</p>
                <p>{company.revenue} M€</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="circle d-flex justify-center align-center">
                <Icon icon="ep:location" />
              </div>
              <div>
                <p>Situation</p>
                <p>{company.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="d-flex align-start">
            <section>
              <div className="presentation">
                <h3>Présentation</h3>
                <p>{company.description}</p>
              </div>
              <div>
                <h3>Réseaux sociaux</h3>
                <div className="d-flex justify-start">
                  {company.socialLinks.linkedin && (
                    <a href={company.socialLinks.linkedin}>
                      <div className="rs d-flex">
                        <Icon icon="mdi:linkedin" />
                        <p>linkedin.com</p>
                      </div>
                    </a>
                  )}
                  {company.socialLinks.twitter && (
                    <a href={company.socialLinks.twitter}>
                      <div className="rs d-flex">
                        <Icon icon="mdi:twitter" />
                        <p>twitter.com</p>
                      </div>
                    </a>
                  )}
                  {company.socialLinks.facebook && (
                    <a href={company.socialLinks.facebook}>
                      <div className="rs d-flex">
                        <Icon icon="mdi:facebook" />
                        <p>facebook.com</p>
                      </div>
                    </a>
                  )}
                  {company.socialLinks.instagram && (
                    <a href={company.socialLinks.instagram}>
                      <div className="rs d-flex">
                        <Icon icon="mdi:instagram" />
                        <p>Instagram</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
              <div className="d-flex gallery">
                <div className="d-flex direction-column">
                  <img src={company.images[0]} alt="" />
                  <img src={company.images[1]} alt="" />
                </div>
                <div className="d-flex direction-column">
                  <img src={company.images[2]} alt="" />
                  <img src={company.images[3]} alt="" />
                  <img src={company.images[4]} alt="" />
                </div>
              </div>
            </section>
            <section>
              <img className="logo" src={company.logo} alt="" />
              <div className="situation">
                <h3>Situation</h3>
                <p>{company.name}</p>
                <p>{company.address}</p>
                <p>{company.city}</p>
                <p>{company.postalCode}</p>
              </div>
              <div className="map">
                <a href={company.mapLink} className="link d-flex">
                  Voir sur une carte <Icon icon="tabler:arrow-right" />
                </a>
                <iframe
                  src={company.mapEmbed}
                  width="420"
                  height="420"
                  style={{ border: 0, borderRadius: 6 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <span></span>
              </div>
              <div className="contact">
                <h3>Nous joindre</h3>
                <p>Téléphone : {company.phone}</p>
                <p>{company.hours}</p>
                <a href={company.contactLink} className="link d-flex">
                  Nous envoyer un message <Icon icon="tabler:arrow-right" />
                </a>
                <span></span>
              </div>
              <div className="additional-contact">
                <h3>Vos contacts</h3>
                {company.contacts.map((contact, index) => (
                  <div key={index}>
                    <p>{contact.role}</p>
                    <p>{contact.name}</p>
                    <div className="d-flex justify-start">
                      {contact.linkedin && (
                        <a
                          href={contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon icon="mdi:linkedin" />
                        </a>
                      )}
                      {contact.email && (
                        <a
                          href={`mailto:${contact.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon icon="carbon:email" />
                        </a>
                      )}
                    </div>
                    <span></span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="grey">
        <div className="container offer">
          <div className="offer-internship">
            <h3>Offres de stage proposées</h3>
            <div className="d-flex wrap justify-start">
              {offers
                .filter((offer) => offer.type === 'internship')
                .map((offer, index) => (
                  <ThumbnailResumeOffer
                    key={index}
                    nameOffer={offer.name}
                    periodOffer={offer.period}
                    descriptionOffer={offer.description}
                    firstTag={offer.firstTag}
                    secondTag={offer.secondTag}
                  />
                ))}
            </div>
          </div>
          <div className="offer-alternated-training">
            <h3>Offres d'alternance proposées</h3>
            <div className="d-flex wrap justify-start">
              {offers
                .filter((offer) => offer.type === 'apprenticeship')
                .map((offer, index) => (
                  <ThumbnailResumeOffer
                    key={index + offers.length} // To ensure unique keys
                    nameOffer={offer.name}
                    periodOffer={offer.period}
                    descriptionOffer={offer.description}
                    firstTag={offer.firstTag}
                    secondTag={offer.secondTag}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
