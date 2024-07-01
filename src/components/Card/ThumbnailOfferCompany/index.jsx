import { Link } from 'react-router-dom';
import './index.scss';

export default function ThumbnailOfferCompany({
  item
}) {
  return (
    <Link to={`/detail-entreprise/${item.id}`}>
      <div className="thumbnail-offer-company">
        <div className="d-flex">
          <img src={`${process.env.REACT_APP_API_URL}/uploads/logo/${item.logo}`} alt="" />
          <p className="available-position">
            {`${item.internshipOffers.filter((offer) => offer.type === 'Stage').length} stages,
             ${item.internshipOffers.filter((offer) => offer.type === 'Alternance').length} alternances`}
          </p>
        </div>
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <div className="d-flex justify-start wrap">
          {item.sectors && item.sectors.map((tag) => (
            <p style={{ backgroundColor: `${tag.color}50`, color: tag.color }} className="tag">{tag.name}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}
