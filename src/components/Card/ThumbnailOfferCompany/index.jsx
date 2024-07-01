import { Link } from 'react-router-dom';
import './index.scss';

export default function ThumbnailOfferCompany({
  logoCompany,
  nameCompany,
  descriptionCompany,
  tags,
  idCompany,
}) {
  return (
    <Link to={`/detail-entreprise/${idCompany}`}>
      <div className="thumbnail-offer-company">
        <div className="d-flex">
          <img src={`${process.env.REACT_APP_API_URL}/uploads/logo/${logoCompany}`} alt="" />
        </div>
        <h3>{nameCompany}</h3>
        <p className="description">{descriptionCompany}</p>
        <div className="d-flex justify-start wrap">
          {tags && tags.map((tag) => (
            <p style={{ backgroundColor: `${tag.color}50`, color: tag.color }} className="tag">{tag.name}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}
