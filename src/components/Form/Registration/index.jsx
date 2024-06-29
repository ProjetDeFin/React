import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import './index.scss';

export default function FormRegistration() {
  const location = useLocation();
  const isEntreprise = location.pathname === '/inscription/entreprise';
  const isEtudiant = location.pathname === '/inscription/etudiant';

  const [formData, setFormData] = useState({
    gender: 'homme',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    position: '',
    organizationName: '',
    siret: '',
    industry: '',
    category: '',
    address: '',
    addressComplement: '',
    postalCode: '',
    city: '',
    organizationPhone: '',
    studyLevel: '',
    diploma: '',
    schoolName: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState('');

  const validatePassword = (password, confirmPassword) => {
    const minLength = /^(?=.{8,})/;
    const specialChar = /^(?=.*[!@#$%^&*])/;
    const digit = /^(?=.*\d)/;
    const uppercase = /^(?=.*[A-Z])/;

    const errors = [];

    if (!minLength.test(password)) {
      errors.push('Le mot de passe doit contenir au moins 8 caractères.');
    }
    if (!specialChar.test(password)) {
      errors.push(
        'Le mot de passe doit contenir au moins un caractère spécial.',
      );
    }
    if (!digit.test(password)) {
      errors.push('Le mot de passe doit contenir au moins un chiffre.');
    }
    if (!uppercase.test(password)) {
      errors.push('Le mot de passe doit contenir au moins une majuscule.');
    }
    if (password !== confirmPassword) {
      errors.push('Les mots de passe ne correspondent pas.');
    }

    return errors;
  };

  const validateSiret = (siret) => {
    const siretRegex = /^\d{14}$/;
    return siretRegex.test(siret);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorMessages = validatePassword(
      formData.password,
      formData.confirmPassword,
    );

    if (isEntreprise && !validateSiret(formData.siret)) {
      errorMessages.push('Le numéro SIRET est invalide.');
    }

    if (errorMessages.length > 0) {
      setErrors(errorMessages);
    } else {
      setErrors([]);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/register`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          },
        );

        const result = await response.json();

        if (response.ok) {
          setMessage('Inscription réussie!');
          // Optionally, you can redirect the user or update the state here
        } else {
          setMessage(
            result.message || 'Inscription échouée. Veuillez réessayer.',
          );
        }
      } catch (error) {
        setMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="form-registration">
      <div className="container">
        <form method="post" onSubmit={handleSubmit}>
          <div className="d-flex align-start">
            <section className="personal">
              <h3>Votre identite</h3>
              <div className="d-flex">
                <div className="d-flex direction-column align-start">
                  <label htmlFor="gender">Genre</label>
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                    <option value="non-binaire">Non binaire</option>
                  </select>
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="lastName">Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="d-flex direction-column align-start">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex">
                <div className="d-flex direction-column align-start">
                  <label htmlFor="password">Mot de passe</label>
                  <div className="password-input d-flex">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button
                      className="reveal btn"
                      type="button"
                      onClick={toggleShowPassword}
                    >
                      <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} />
                    </button>
                  </div>
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="confirmPassword">
                    Confirmation du mot de passe
                  </label>
                  <div className="password-input d-flex">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <button
                      className="reveal btn"
                      type="button"
                      onClick={toggleShowConfirmPassword}
                    >
                      <Icon
                        icon={showConfirmPassword ? 'mdi:eye-off' : 'mdi:eye'}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                {isEntreprise && (
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="position">Fonction / poste</label>
                    <input
                      type="text"
                      name="position"
                      id="position"
                      value={formData.position}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
                <div className="d-flex direction-column align-start">
                  <label htmlFor="mobile">Tel. mobile</label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>
            {isEntreprise && (
              <section className="organisation">
                <h3>Votre organisation</h3>
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="organizationName">Nom</label>
                    <input
                      type="text"
                      name="organizationName"
                      id="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="siret">Siret</label>
                    <input
                      type="text"
                      name="siret"
                      id="siret"
                      value={formData.siret}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="industry">Secteur d'activité</label>
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="category">Catégorie</label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="address">Adresse</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="addressComplement">
                      Complément d'adresse
                    </label>
                    <input
                      type="text"
                      name="addressComplement"
                      id="addressComplement"
                      value={formData.addressComplement}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="postalCode">Code postal</label>
                    <input
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="city">Ville</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="organizationPhone">Téléphone</label>
                    <input
                      type="text"
                      name="organizationPhone"
                      id="organizationPhone"
                      value={formData.organizationPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </section>
            )}
            {isEtudiant && (
              <section className="additional-information">
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="studyLevel">Niveau d'étude</label>
                    <input
                      type="text"
                      name="studyLevel"
                      id="studyLevel"
                      value={formData.studyLevel}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="diploma">Diplôme préparé</label>
                    <input
                      type="text"
                      name="diploma"
                      id="diploma"
                      value={formData.diploma}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="schoolName">Nom de l'établissement</label>
                  <input
                    type="text"
                    name="schoolName"
                    id="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                  />
                </div>
              </section>
            )}
          </div>
          {errors.length > 0 && (
            <div className="errors">
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          {message && <div className="message">{message}</div>}
          <button className="btn" type="submit">
            Créer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}
