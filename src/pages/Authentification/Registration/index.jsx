import { useState } from 'react';
import './index.scss';

export default function Registration() {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const validatePassword = (password) => {
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

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorMessages = validatePassword(password);
    if (errorMessages.length > 0) {
      setErrors(errorMessages);
    } else {
      setErrors([]);
      console.log('Form submitted');
    }
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
              <input type="text" name="firstName" id="firstName" placeholder="Jean" />
            </div>
            <div className="d-flex direction-column align-start">
              <label htmlFor="name">Nom</label>
              <input type="text" name="name" id="name" placeholder="Jean" />
            </div>
            <div className="d-flex direction-column align-start">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" placeholder="jean@example.com" />
            </div>
            <div className="d-flex direction-column align-start">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
        </div>
      </div>
    </div>
  );
}