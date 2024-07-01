import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './index.scss';

const skillOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'react', label: 'React' },
  { value: 'node', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
];

const sectorsOptions = [
  { value: 'it', label: "Technologies de l'information" },
  { value: 'finance', label: "Finance / Banque" },
  { value: 'sante', label: "Santé / Pharmaceutique" },
  { value: 'education', label: "Éducation / Enseignement" },
  { value: 'commerce', label: "Commerce / Distribution" },
  { value: 'industrie', label: "Industrie" },
  { value: 'consulting', label: "Conseil / Consulting" },
  { value: 'art', label: "Art / Culture" },
  { value: 'tourisme', label: "Tourisme / Hôtellerie" },
  { value: 'transport', label: "Transport / Logistique" },
  { value: 'energie', label: "Énergie / Environnement" },
  { value: 'services', label: "Services aux entreprises" },
  { value: 'communication', label: "Communication / Médias" }
];

const languageOptions = [
  { value: 'french_a1', label: 'Français A1' },
  { value: 'french_a2', label: 'Français A2' },
  { value: 'french_b1', label: 'Français B1' },
  { value: 'french_b2', label: 'Français B2' },
  { value: 'english_a1', label: 'Anglais A1' },
  { value: 'english_a2', label: 'Anglais A2' },
  { value: 'english_b1', label: 'Anglais B1' },
  { value: 'english_b2', label: 'Anglais B2' },
  { value: 'german_a1', label: 'Allemand A1' },
  { value: 'german_a2', label: 'Allemand A2' },
  { value: 'german_b1', label: 'Allemand B1' },
  { value: 'german_b2', label: 'Allemand B2' },
  { value: 'italian_a1', label: 'Italien A1' },
  { value: 'italian_a2', label: 'Italien A2' },
  { value: 'italian_b1', label: 'Italien B1' },
  { value: 'italian_b2', label: 'Italien B2' },
  { value: 'chinese_a1', label: 'Chinois A1' },
  { value: 'chinese_a2', label: 'Chinois A2' },
  { value: 'chinese_b1', label: 'Chinois B1' },
  { value: 'chinese_b2', label: 'Chinois B2' },
];

const categoriesOptions = [
  { value: '1', label: 'Services aux particuliers' },
  { value: '2', label: 'Services aux entreprises' },
  { value: '3', label: 'Mairie, collectivité' },
  { value: '4', label: 'Association, ONG' },
  { value: '5', label: 'Organismes d\'état' },
  { value: '6', label: 'Autres' }
];


export default function FormRegistration() {
  const location = useLocation();

  let isStudent = location.pathname === '/inscription/etudiant';
  let isCompany = location.pathname === '/inscription/entreprise';
  const isMyProfile = location.pathname === '/admin/mon-profil';

  const [formData, setFormData] = useState({
    gender: 'man',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    position: '',
    organizationName: '',
    siret: '',
    sectors: '',
    categories: '',
    address: '',
    addressComplement: '',
    postalCode: '',
    city: '',
    organizationPhone: '',
    studyLevel: '',
    diploma: '',
    schoolName: '',
    profilePicture: '',
    cv: '',
    personalWebsite: '',
    linkedin: '',
    drivingLicense: false,
    disability: false,
    skills: [],
    languages: [],
    isStudent,
    isCompany,
  });
  const animatedComponents = makeAnimated();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState('');

  const validatePassword = (password, confirmPassword) => {
    const minLength = /^(?=.{8,})/;
    const specialChar = /^(?=.*[!@#$.%^&*])/;
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
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSkillsChange = (selectedOptions) => {
    setFormData({ ...formData, skills: selectedOptions });
  };

  const handleLanguagesChange = (selectedOptions) => {
    setFormData({...formData, languages: selectedOptions})
  }

  const handleSectorsChange = (sectorsOptions) => {
    setFormData({...formData, sectors: sectorsOptions})
  }

  const handleCategoriesChange = (sectorsOptions) => {
    setFormData({...formData, categories: sectorsOptions})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorMessages = validatePassword(
      formData.password,
      formData.confirmPassword,
    );

    if (isCompany && !validateSiret(formData.siret)) {
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
                    <option value="man">Homme</option>
                    <option value="woman">Femme</option>
                    <option value="other">Non binaire</option>
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
                {isCompany && (
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
            {isCompany && (
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
                    <label htmlFor="sectors">Secteur d'activité</label>
                    <Select
                      isMulti
                      name="sectors"
                      options={sectorsOptions}
                      className="basic-multi-select"
                      closeMenuOnSelect={false}
                      classNamePrefix="select"
                      onChange={handleSectorsChange}
                      components={animatedComponents}
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="categories">Catégorie</label>
                    <Select
                      isMulti
                      name="skills"
                      options={categoriesOptions}
                      className="basic-multi-select"
                      closeMenuOnSelect={false}
                      classNamePrefix="select"
                      onChange={handleSkillsChange}
                      components={animatedComponents}
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
            {(isStudent || isMyProfile) && (
              <section className="additional-information">
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="studyLevel">Niveau d'étude</label>
                    <select 
                      name="studyLevel"
                      id="studyLevel"
                      value={formData.studyLevel}
                      onChange={handleInputChange}
                    >
                      <option value="-3">3eme</option>
                      <option value="-2">Seconde</option>
                      <option value="-1">Premiere</option>
                      <option value="-1">Terminal</option>
                      <option value="0" selected>bac +0</option>
                      <option value="1">bac +1</option>
                      <option value="2">bac +2</option>
                      <option value="3">bac +3</option>
                      <option value="4">bac +4</option>
                      <option value="5">bac +5</option>
                      <option value="6">bac +6</option>
                      <option value="7">bac +7</option>
                      <option value="8">bac +8</option>
                    </select>
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="diploma">Diplôme préparé</label>
                    <select 
                      name="diploma"
                      id="diploma"
                      value={formData.diploma}
                      onChange={handleInputChange}
                    >
                      <option value="1">Brevet des colleges</option>
                      <option value="2">CAP</option>
                      <option value="3">Baccalaureat</option>
                      <option value="4">BTS</option>
                      <option value="5">License</option>
                      <option value="6">Master</option>
                      <option value="7">Doctorat</option>
                    </select>
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
                {isMyProfile && (
                  <div className="my-profil">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="profilePicture">Photo de profil</label>
                    <input
                      type="file"
                      name="profilePicture"
                      id="profilePicture"
                      value={formData.profilePicture}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="d-flex direction-column align-start">
                      <label htmlFor="personalWebsite">Adresse de votre site personnel</label>
                      <input
                        type="text"
                        name="personalWebsite"
                        id="personalWebsite"
                        value={formData.personalWebsite}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="d-flex direction-column align-start">
                      <label htmlFor="linkedin">Lien vers votre Linkedin</label>
                      <input
                        type="text"
                        name="linkedin"
                        id="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex align-start">
                      <label htmlFor="drivingLicense">Permis de conduire</label>
                      <input
                        type="checkbox"
                        name="drivingLicense"
                        id="drivingLicense"
                        checked={formData.drivingLicense}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="d-flex align-start">
                      <label htmlFor="disability">Forme de handicap</label>
                      <input
                        type="checkbox"
                        name="disability"
                        id="disability"
                        checked={formData.disability}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex align-start language-skill">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="skills">Compétences</label>
                    <Select
                      isMulti
                      name="skills"
                      options={skillOptions}
                      className="basic-multi-select"
                      closeMenuOnSelect={false}
                      classNamePrefix="select"
                      onChange={handleSkillsChange}
                      components={animatedComponents}
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="skills">Languages et niveau</label>
                    <Select
                      isMulti
                      name="language"
                      options={languageOptions}
                      className="basic-multi-select"
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      classNamePrefix="select"
                      onChange={handleLanguagesChange}
                    />
                  </div>
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="cv">CV</label>
                    <input
                      type="file"
                      name="cv"
                      id="cv"
                      value={formData.cv}
                      onChange={handleInputChange}
                    />
                  </div>
                  </div>
                )}
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
