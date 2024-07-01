import './index.scss';
import { Link } from 'react-router-dom';

export default function CompaniesForward({ companies }) {
  return (
    <div className="companies-forward">
      <h2>Entreprise à la une</h2>
      <ul className="companies-forward-img">
        {companies.slice(0, 5).map((company) => (
          <Link to={`/detail-entreprise/${company.id}`} key={company.name}>
            <li key={company.name}>
              <img src={`${process.env.REACT_APP_API_URL}/uploads/logo/${company.logo}`} alt={company.name} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
