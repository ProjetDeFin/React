import { Link } from 'react-router-dom';
import './index.scss';

export default function Registration() {
  return (
    <div className="registration">
      <div className="container">
        <p className="text-center">VOUS ETES :</p>
        <div className="d-flex justify-center">
          <Link to="/inscription/entreprise">
            <div className="card">
              <h3 className="text-center">Une entreprise</h3>
              <p>Poster des offres</p>
              <p>Augmentez votre visibilite</p>
              <p>Trouvez votre prochaine stagiaire ou alternant</p>
            </div>
          </Link>
          <Link to="/inscription/etudiant">
            <div className="card">
              <h3 className="text-center">Un(e) etudiant(e)</h3>
              <p>Differenciez vous !</p>
              <p>Postulez a des offres qui vous correspondent</p>
              <p>Construisez votre futur !</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
