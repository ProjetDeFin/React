import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
        localStorage.setItem('token', result.token);
      } else {
        setMessage(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
      <div className="grey login">
        <div className="d-flex justify-center align-center">
          <div className="content">
            <div className="text-center">
              <h2>Bienvenue</h2>
              <h3>Connectez-vous pour continuer</h3>
              <p>
                Pas encore de compte ? <Link to="/inscription">Créez-en un !</Link>
              </p>
              <form onSubmit={handleSubmit}>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="email">Email</label>
                  <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="jean.bernard@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="G1BonMotdePasse!"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input className="btn" type="submit" value="SE CONNECTER" />
                <p className="text-right">Mot de passe oublié ?</p>
              </form>
              {message && <p className="message">{message}</p>}
            </div>
          </div>
        </div>
      </div>
  );
}
