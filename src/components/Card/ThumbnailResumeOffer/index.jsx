import './index.scss';

export default function ThumbnailResumeOffer({
    nameOffer,
    periodOffer,
    descriptionOffer,
    firstTag,
    secondTag
}) {
    return (
        <div className="thumbnail-resume-offer">
            <h4>{nameOffer}</h4>
            <p className="period">{periodOffer}</p>
            <p className="description">{descriptionOffer}</p>
            <div className="d-flex justify-start tags">
                <p className={`tag ${firstTag}`}>{firstTag}</p>
                <p className={`tag ${secondTag}`}>{secondTag}</p>
            </div>
        </div>
    );
}