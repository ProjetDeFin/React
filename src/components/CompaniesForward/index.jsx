import './index.scss';

export default function CompaniesForward({ companies }) {
  return (
      <div className="companies-forward">
        <h2>Entreprise à la une</h2>
        <ul className="companies-forward-img">
          {companies.slice(0,5).map((company) => (
              <li key={company.name}>
                <img src={company.logo} alt={company.name} />
              </li>
          ))}
        </ul>
      </div>
  );
}
