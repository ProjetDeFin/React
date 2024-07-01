import './index.scss';
import { Link } from 'react-router-dom';

export default function ApplyStudent({
  profilPicture,
  titleApply,
  namePerson,
  agePerson,
  locationPerson,
  tag,
  periodApply,
  idApply,
}) {
  return (
    // <Link to={`/apply-job/${idApply}`}>
    <div className="apply-student-card" key={idApply}>
      <div className="d-flex justify-start">
        <div>
          <img src={`${process.env.REACT_APP_API_URL}${profilPicture}`} alt="" />
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
    // </Link>
  );
}
