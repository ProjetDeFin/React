import './index.scss';
import { Link } from 'react-router-dom';

export default function Registration() {
  return (
    <div className="registration">
      <div className="grey">
        <div className="login">
          <div className="text-center">
            <h2>BIENVENUE</h2>
            <p>connectez vous pour continuer</p>
            <p>
              Pas encore de compte ? <Link to="">cree en un !</Link>
            </p>
          </div>
          <form action="" method="post">
            <div className="d-flex direction-column align-start">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="jean.bernard@gmail.com"
              />
            </div>
            <div className="d-flex direction-column align-start">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="BonneCh3nce!"
              />
            </div>
            <input type="submit" value="SE CONNECTER" />
            <p className="text-right">mot de passe oublie ?</p>
          </form>
        </div>
      </div>
    </div>
  );
}
