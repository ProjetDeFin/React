import { useLocation } from 'react-router-dom';
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from 'react-router-dom';

export default function ListAdmin({ data }) {
  const location = useLocation();

  const isListCandidatAdmin = location.pathname === '/admin/liste-candidats';

  const snakeCase = (str) => {
    return str
      .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
      .toLowerCase();
  };

  const getClassNames = (key, value) => {
    const baseClass = 'tag';
    if (key === 'status_candidat' || typeof value === 'string') {
      switch (value.toLowerCase()) {
        case 'active':
          return `${baseClass} active`;
        case 'cloture':
          return `${baseClass} cloture`;
        case 'stage':
          return `${baseClass} stage`;
        case 'alternance':
          return `${baseClass} alternance`;
        case 'non repondu':
          return `${baseClass} candidat_no_answer`;
        case 'refuse':
          return `${baseClass} candidat_refused`;
        case 'entretien effectue':
          return `${baseClass} candidat_interviewed`;
        case 'retenu':
          return `${baseClass} candidat_accepted`;
        case 'entretien planifie':
          return `${baseClass} candidat_interview_planned`;
        default:
          return '';
      }
    }
    return '';
  };

  return (
    <div className="content-table">
      {data.map((offer, index) => (
        <div key={index} className="row d-flex justify-start">
          {Object.entries(offer).map(([key, value]) => (
            key !== 'profil_picture' && (
              <div key={key} className={snakeCase(key)}>
                {isListCandidatAdmin && key === "name" ? (
                  <div className="d-flex justify-start">
                    <img src={`/img/profil-picture/${offer['profil_picture']}`} alt="" />
                    <p className={getClassNames(key, value)}>{value}</p>
                  </div>
                ) : (
                  <p className={getClassNames(key, value)}>{value}</p>
                )}
              </div>
            )
          ))}
          {isListCandidatAdmin && (
            <div className="action">
              <Link className="btn" to="">Voir la candidature</Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
