import './index.scss';

export default function ThumbnailOfferCompany({
    logoCompany,
    nameCompany,
    descriptionCompany,
    availablePosition,
    firstTag,
    secondTag
}) {
    return (
        <div className="thumbnail-offer-company">
            <div className="d-flex">
                <img src={`/img/logo/${logoCompany}`} alt="" />
                <p className="available-position">{availablePosition}</p>
            </div>
            <h3>{nameCompany}</h3>
            <p className="description">{descriptionCompany}</p>
            <div className="d-flex justify-start">
                <p className={`tag ${firstTag}`}>{firstTag}</p>
                <p className={`tag ${secondTag}`}>{secondTag}</p>
            </div>
        </div>
    );
}