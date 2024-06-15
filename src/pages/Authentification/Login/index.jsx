import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="grey login">
      <div className="d-flex justify-center align-center">
        <div className="content">
          <div className="text-center">
            <h2>BIENVENUE</h2>
            <h3>Connectez vous pour continuer</h3>
            <p>
              pas encore de compte ? <Link to="/inscription">Cree en un !</Link>
            </p>
            <form method="post">
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="G1BonMotdePasse!"
                />
              </div>
              <input className="btn" type="submit" value="SE CONNECTER" />
              <p className="text-right">mot de passe oublie ?</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
