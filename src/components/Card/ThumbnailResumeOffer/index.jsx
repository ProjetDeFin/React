import './index.scss';
import { Link } from 'react-router-dom';

export default function ThumbnailResumeOffer({
  idOffer,
  nameOffer,
  periodOffer,
  descriptionOffer,
  tags,
}) {
  return (
    <Link to={`/detail-offre/${idOffer}`}>
      <div className="thumbnail-resume-offer">
        <h4>{nameOffer}</h4>
        <p className="period">{periodOffer}</p>
        <p className="description">{descriptionOffer}</p>
        <div className="d-flex justify-start tags">
          {tags && tags.map((tag) => (
            <p style={{ backgroundColor: `${tag.color}50`, color: tag.color }} className="tag">{tag.name}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}
