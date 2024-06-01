import './index.scss';

export default function CompanyCard({
    logo,
    typeOffer,
    nameOffer,
    nameCompany,
    locationCompany,
    descriptionCompany,
    firstTag,
    secondTag,
    inOfferPage = false,
    restDay,
    period
}) {

    const calculateProgress = (restDay) => {
        const progress = Math.max(0, Math.min((restDay / 100) * 100, 100));
        return progress;
    };

    const progress = calculateProgress(restDay);

    const defaultTemplate = (
        <div className='company-card'>
            <div className="d-flex">
                <img src={`/img/logo/${logo}`} alt="" />
                <p className="type-offer">{typeOffer}</p>
            </div>
            <h5 className="name-offer">{nameOffer}</h5>
            <p className="detail-company">{nameCompany} . {locationCompany}</p>
            <p className="description-company">{descriptionCompany}</p>
            <div className="d-flex tag-offer justify-start">
                <p className={`tag ${firstTag}`}>{firstTag}</p>
                <p className={`tag ${secondTag}`}>{secondTag}</p>
            </div>
        </div>
    );

    const offerPageTemplate = (
        <div className="company-card-offer">
            <div className="d-flex">
                <img src={`/img/logo/${logo}`} alt="" />
                <div className="content">
                    <h3>{nameOffer}</h3>
                    <p className="description">{nameCompany} . <span>{locationCompany} . {period}</span></p>
                    <div className="d-flex justify-start">
                        <p className="type-offer">{typeOffer}</p>
                        <span className="line"></span>
                        <p className={`tag ${firstTag}`}>{firstTag}</p>
                        <p className={`tag ${secondTag}`}>{secondTag}</p>
                    </div>
                </div>
                <div>
                    <a href="" className="btn">En savoir plus</a>
                    <div className="progress-bar-container">
                    <div className={`progress-bar ${progress > 30 ? 'high' : (progress > 20 ? 'medium' : 'low')}`} style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="rest-day">Reste {restDay} jours pour postuler</p>
                </div>
            </div>
        </div>
    );
    
    return inOfferPage ? offerPageTemplate : defaultTemplate;
}