import { Link } from 'react-router-dom';
import './index.scss';

export default function ThumbnailOfferCompany({
  logo,
  name,
  description,
  internshipOffers,
  apprenticeshipsOffers,
  tags,
  idCompany,
}) {
  return (
    <Link to={`/detail-entreprise/${idCompany}`}>
      <div className="thumbnail-offer-company">
        <div className="d-flex">
          <img src={`/img/logo/${logo}`} alt="" />
          <p className="available-position">{`${internshipOffers} stage et ${apprenticeshipsOffers} alternance`}</p>
        </div>
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <div className="d-flex justify-start">
          {tags && tags.map((tag) => (
            <p style={{ backgroundColor: `${tag.color}50`, color: tag.color }} className="tag">{tag.name}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}
