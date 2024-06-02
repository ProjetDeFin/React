import './index.scss';

export default function ApplyStudent({
  profilPicture,
  titleApply,
  namePerson,
  agePerson,
  locationPerson,
  tag,
  periodApply,
}) {
  return (
    <div className="apply-student-card">
      <div className="d-flex justify-start">
        <div>
          <img src={`/img/profil-picture/${profilPicture}`} alt="" />
        </div>
        <div className="description">
          <h3>{titleApply}</h3>
          <p className="detail-apply">
            {namePerson} ({agePerson}) . {locationPerson}
          </p>
          <div className="d-flex">
            <p className="type-offer">{tag}</p>
            <span></span>
            <p className="period-apply">{periodApply}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
