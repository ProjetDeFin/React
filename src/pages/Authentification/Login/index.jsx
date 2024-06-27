import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token);
        const decoded = jwtDecode(result.token);
        const detailedResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/login/details/${decoded.username}`);
        if (detailedResponse.ok) {
          const detailedResult = await detailedResponse.json();
          localStorage.setItem('firstName', detailedResult.firstName);
          localStorage.setItem('lastName', detailedResult.lastName);
          localStorage.setItem('id', detailedResult.id);
        }
      } else {
        setMessage(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grey login">
      <div className="d-flex justify-center align-center">
        <div className="content">
          <div className="text-center">
            <h2>BIENVENUE</h2>
            <h3>Connectez-vous pour continuer</h3>
            <p>
              Pas encore de compte ? <Link to="/inscription">Créez-en un !</Link>
            </p>
            <form method="post">
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
                <label htmlFor="password">Mot de passe</label>
                <div className="d-flex">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="G1BonMotdePasse!"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="toggle-visibility btn"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <Icon icon="mdi:eye-off" /> : <Icon icon="mdi:eye" />}
                  </button>
                </div>
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