import './index.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

export default function Login({ setIsLoggedIn, isLoggedIn, errorToast, successToast }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      );

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token);
        const decoded = jwtDecode(result.token);
        const detailedResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/login/details/${decoded.username}`,
        );
        if (detailedResponse.ok) {
          const detailedResult = await detailedResponse.json();
          localStorage.setItem('firstName', detailedResult.firstName);
          localStorage.setItem('lastName', detailedResult.lastName);
          localStorage.setItem('id', detailedResult.id);
          localStorage.setItem('role', decoded.roles[0]);
          setIsLoggedIn(true);
          successToast('Login successful');
          navigate('/');
        } else {
          errorToast('Invalid server response.');
        }
      } else {
        errorToast('Invalid credentials.');
      }
    } catch (error) {
      errorToast('An error occurred. Please try again.');
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
            <h2>Bienvenue</h2>
            <h3>Connectez-vous pour continuer</h3>
            <p>
              Pas encore de compte ?{' '}
              <Link to="/inscription">Créez-en un !</Link>
            </p>
            <form method="post" onSubmit={handleSubmit}>
              <div className="d-flex direction-column align-start">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
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
                    {showPassword ? (
                      <Icon icon="mdi:eye-off" />
                    ) : (
                      <Icon icon="mdi:eye" />
                    )}
                  </button>
                </div>
              </div>
              <input className="btn" type="submit" value="SE CONNECTER" />
              <div className="d-flex justify-end">
                <Link to="https://api.groupe-3.lycee-stvincent.net/reset_password/">Mot de passe oublié ?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
