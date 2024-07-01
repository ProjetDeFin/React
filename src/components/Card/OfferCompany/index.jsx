import './index.scss';
import { Link } from 'react-router-dom';

export default function OfferCompany({
  logo,
  typeOffer,
  nameOffer,
  nameCompany,
  locationCompany,
  tags,
  descriptionCompany,
  inOfferPage = false,
  restDay,
  period,
  offerId,
}) {
  const calculateProgress = (restDay) => {
    return Math.max(0, Math.min((restDay / 100) * 100, 100));
  };

  const progress = calculateProgress(restDay);

  const defaultTemplate = (
    <Link to={`/detail-offre/${offerId}`}>
      <div className="company-card">
        <div className="d-flex">
          <img src={`/img/logo/${logo}`} alt="" />
          <p className="type-offer">{typeOffer}</p>
        </div>
        <h5 className="name-offer">{nameOffer}</h5>
        <p className="detail-company">
          {nameCompany} . {locationCompany}
        </p>
        <p className="description-company">{descriptionCompany}</p>
        <div className="d-flex tag-offer justify-start">
          {tags && tags.map((tag) => (
            <p style={{ backgroundColor: `${tag.color}50`, color: tag.color }} className="tag">{tag.name}</p>
          ))}
        </div>
      </div>
    </Link>
  );

  const offerPageTemplate = (
    <div className="company-card-offer" key={offerId}>
      <div className="d-flex">
        <Link to={`/detail-offre/${offerId}`}>
          <img src={`/img/logo/${logo}`} alt="" />
        </Link>
        <div className="content">
          <Link to={`/detail-offre/${offerId}`}>
            <h3>{nameOffer}</h3>
          </Link>
          <p className="description">
            {nameCompany} .{' '}
            <span>
              {locationCompany} . {period} ({restDay}{' '}
              {restDay > 1 ? 'jours' : 'jour'})
            </span>
          </p>
          <div className="d-flex justify-start">
            <p className="type-offer">{typeOffer}</p>
            <span className="line"></span>
            {tags &&
              tags.map((tag) => (
                <p
                  style={{
                    backgroundColor: `${tag.color}50`,
                    color: tag.color,
                  }}
                  className="tag"
                >
                  {tag.name}
                </p>
              ))}
          </div>
        </div>
        <div>
          <Link to={`/detail-offre/${offerId}`} className="btn">
            En savoir plus
          </Link>
          <div className="progress-bar-container">
            <div
              className={`progress-bar ${progress > 30 ? 'high' : progress > 20 ? 'medium' : 'low'}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="rest-day">Reste {restDay} jours pour postuler</p>
        </div>
      </div>
    </div>
  );

  return inOfferPage ? offerPageTemplate : defaultTemplate;
}
