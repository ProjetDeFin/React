import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import './index.scss';

export default function Registration() {
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState('');

  const validatePassword = (password, confirmationPassword) => {
    const minLength = /^(?=.{8,})/;
    const specialChar = /^(?=.*[!@#$%^&*])/;
    const digit = /^(?=.*\d)/;
    const uppercase = /^(?=.*[A-Z])/;

    const errors = [];

    if (!minLength.test(password)) {
      errors.push('Le mot de passe doit contenir au moins 8 caractères.');
    }
    if (!specialChar.test(password)) {
      errors.push('Le mot de passe doit contenir au moins un caractère spécial.');
    }
    if (!digit.test(password)) {
      errors.push('Le mot de passe doit contenir au moins un chiffre.');
    }
    if (!uppercase.test(password)) {
      errors.push('Le mot de passe doit contenir au moins une majuscule.');
    }
    if (password !== confirmationPassword) {
      errors.push('Les mots de passe ne correspondent pas.');
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorMessages = validatePassword(password, confirmationPassword);
    if (errorMessages.length > 0) {
      setErrors(errorMessages);
    } else {
      setErrors([]);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            name,
            email,
            password,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setMessage('Registration successful!');
          // Optionally, you can redirect the user or update the state here
        } else {
          setMessage(result.message || 'Registration failed. Please try again.');
        }
      } catch (error) {
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmationPassword = () => {
    setShowConfirmationPassword(!showConfirmationPassword);
  };

  return (
      <div className="grey registration">
        <div className="d-flex justify-center align-center">
          <div className="content">
            <h2>INSCRIPTION</h2>
            <p>Rejoignez Bourses aux Stages et tentez votre chance parmi les offres déjà en ligne !</p>
            <form onSubmit={handleSubmit}>
              <div className="d-flex direction-column align-start">
                <label htmlFor="firstName">Prénom</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Jean"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="d-flex direction-column align-start">
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jean"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="d-flex direction-column align-start">
                <label htmlFor="email">E-mail</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="jean@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex direction-column align-start">
                <label htmlFor="password">Mot de passe</label>
                <div className="password-container d-flex justify-start">
                  <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                      type="button"
                      className="toggle-visibility btn"
                      onClick={toggleShowPassword}
                  >
                    {showPassword ? <Icon icon="weui:eyes-off-filled" /> : <Icon icon="weui:eyes-on-outlined" />}
                  </button>
                </div>
              </div>
              <div className="d-flex direction-column align-start">
                <label htmlFor="passwordConfirmation">Confirmation du mot de passe</label>
                <div className="password-container d-flex justify-start">
                  <input
                      type={showConfirmationPassword ? 'text' : 'password'}
                      name="passwordConfirmation"
                      id="passwordConfirmation"
                      placeholder="Confirmation du mot de passe"
                      value={confirmationPassword}
                      onChange={(e) => setConfirmationPassword(e.target.value)}
                  />
                  <button
                      type="button"
                      className="toggle-visibility btn"
                      onClick={toggleShowConfirmationPassword}
                  >
                    {showConfirmationPassword ? <Icon icon="weui:eyes-off-filled" /> : <Icon icon="weui:eyes-on-outlined" />}
                  </button>
                </div>
              </div>
              {errors.length > 0 && (
                  <ul className="error-list">
                    {errors.map((error, index) => (
                        <li key={index} className="error">
                          {error}
                        </li>
                    ))}
                  </ul>
              )}
              <input className="btn" type="submit" value="Créer mon compte" />
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </div>
  );
}
