import './index.scss';

export default function CompanyCard({
    logo,
    typeOffer,
    nameOffer,
    nameCompany,
    locationCompany,
    descriptionCompany,
    firstTag,
    secondTag
}) {
    return (
        <div className='company-card'>
            <div className="d-flex">
                <img src={`/img/logo/${logo}`} alt="" />
                <p className="type-offer">{typeOffer}</p>
            </div>
            <h5 className="name-offer">{nameOffer}</h5>
            <p className="detail-company">{nameCompany} . {locationCompany}</p>
            <p className="description-company">{descriptionCompany}</p>
            <div className="d-flex tag-offer justify-start">
                <p className={firstTag}>{firstTag}</p>
                <p className={secondTag}>{secondTag}</p>
            </div>
        </div>
    );
}