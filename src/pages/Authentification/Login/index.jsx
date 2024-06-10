import './index.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
      <div className="d-flex">
        <img src="" alt="" />
        <div className="d-flex direction-column">
          <div>
            <h2>Login</h2>
            <form action="">
              <div className="d-flex direction-column">
                <label htmlFor=""></label>
                <input type="text" />
              </div>
              <div className="d-flex direction-column">
                <label htmlFor=""></label>
                <input type="text" />
              </div>
              <input type="submit" value="Se connecter" />

              <p>
                vous n'avez pas de compte ? <Link>S'enregistrer</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
