import './index.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

const skillOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'react', label: 'React' },
  { value: 'node', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
];

const jobsProfils = [
  { value: 'developer', label: 'Développeur' },
  { value: 'designer', label: 'Designer' },
  { value: 'project_manager', label: 'Chef de projet' },
  { value: 'data_scientist', label: 'Data Scientist' },
  { value: 'product_manager', label: 'Product Manager' },
  { value: 'qa_engineer', label: 'Ingénieur QA' },
  { value: 'devops_engineer', label: 'Ingénieur DevOps' },
  { value: 'hr_specialist', label: 'Spécialiste RH' },
  { value: 'marketing_specialist', label: 'Spécialiste Marketing' },
  { value: 'sales_representative', label: 'Représentant des ventes' },
];

const animatedComponents = makeAnimated();

export default function AddAdminOffer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    offerType: [],
    salary: '',
    categories: '',
    jobsProfils: [],
    skills: [],
    about: '',
    mission: '',
    profile: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    about: '',
    mission: '',
    profile: '',
  });
  const navigate = useNavigate();

  if (localStorage.getItem('role') !== 'ROLE_COMPANY_RESPONSIBLE') {
    navigate('/admin/mon-profil');
  }

  const handleJobsProfilsChange = (selectedOptions) => {
    setFormData({ ...formData, jobsProfils: selectedOptions });
  };

  const handleSkillsChange = (selectedOptions) => {
    setFormData({ ...formData, skills: selectedOptions });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedOptions = checked
      ? [...formData.offerType, name]
      : formData.offerType.filter((item) => item !== name);
    setFormData({ ...formData, offerType: updatedOptions });
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des textarea
    const { about, mission, profile } = formData;
    let errors = {};
    if (about.length < 300) {
      errors = {
        ...errors,
        about: `Le texte doit contenir au moins 300 caractères. Actuellement : ${about.length} caractères.`,
      };
    }
    if (mission.length < 300) {
      errors = {
        ...errors,
        mission: `Le texte doit contenir au moins 300 caractères. Actuellement : ${mission.length} caractères.`,
      };
    }
    if (profile.length < 300) {
      errors = {
        ...errors,
        profile: `Le texte doit contenir au moins 300 caractères. Actuellement : ${profile.length} caractères.`,
      };
    }

    // Afficher les erreurs si présentes
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    // Ici, vous pouvez envoyer les données formData vers votre API ou effectuer d'autres actions nécessaires.
    console.log(formData);
    // Exemple d'envoi vers l'API
    // fetch('votre_url', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }).then(response => {
    //   // Gérer la réponse de l'API
    // }).catch(error => {
    //   console.error('Erreur lors de l\'envoi des données', error);
    // });
  };

  return (
    <div className="AddAdminOffer">
      <div className="content">
        <div className="d-flex justify-start">
          <img src="/img/logo/company.jpg" alt="Company Logo" />
          <h2>MentalWorks</h2>
        </div>
        <span></span>
        <section>
          <h3>Publier une offre</h3>
          <div className="status-progress-offer d-flex justify-start">
            <div className={`d-flex ${currentStep === 1 ? 'active' : ''}`}>
              <div className="round d-flex align-center justify-center">
                <Icon icon="basil:bag-outline" />
              </div>
              <div>
                <p>Etape 1/3</p>
                <p>Type d'offre</p>
              </div>
            </div>
            <span></span>
            <div className={`d-flex ${currentStep === 2 ? 'active' : ''}`}>
              <div className="round d-flex align-center justify-center">
                <Icon icon="hugeicons:note-01" />
              </div>
              <div>
                <p>Etape 2/3</p>
                <p>Description</p>
              </div>
            </div>
            <span></span>
            <div className={`d-flex ${currentStep === 3 ? 'active' : ''}`}>
              <div className="round d-flex align-center justify-center">
                <Icon icon="ph:gift" />
              </div>
              <div>
                <p>Etape 3/3</p>
                <p>Publication</p>
              </div>
            </div>
          </div>
          <div className="content-offer">
            <form onSubmit={handleSubmit}>
              <div className={`${currentStep === 1 ? 'active' : 'd-none'}`}>
                <div className="block">
                  <div className="d-flex justify-start">
                    <div>
                      <h4>Nom de l'offre</h4>
                      <p></p>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name-offer"
                        placeholder="ex: Assistant marketing"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <p>Au moins 50 caractères</p>
                    </div>
                  </div>
                </div>
                <div className="block offer-type">
                  <div className="d-flex justify-start">
                    <div>
                      <h4>Type d'offre</h4>
                    </div>
                    <div>
                      <div className="d-flex direction-column align-start">
                        <div className="d-flex">
                          <input
                            type="checkbox"
                            name="stage"
                            id="stage"
                            checked={formData.offerType.includes('stage')}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="stage">Stage</label>
                        </div>
                        <div className="d-flex">
                          <input
                            type="checkbox"
                            name="alternance"
                            id="alternance"
                            checked={formData.offerType.includes('alternance')}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="alternance">Alternance</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="d-flex justify-start">
                    <div>
                      <h4>Rémunération</h4>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder="Montants par mois"
                        value={formData.salary}
                        onChange={handleInputChange}
                      />
                      <p>
                        575 € par mois minimum pour les stages de plus de 2 mois
                      </p>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="d-flex justify-start">
                    <div>
                      <h4>Categories</h4>
                      <p>You can select multiple job categories</p>
                    </div>
                    <div>
                      <select
                        name="categories"
                        id="categories"
                        value={formData.categories}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled>
                          Choisir le type de job
                        </option>
                        <option value="alternance">Alternance</option>
                        <option value="stage">Stage</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="d-flex justify-start">
                    <div>
                      <h4>Profils métiers</h4>
                      <p>Ajoutez les métiers recherchés</p>
                    </div>
                    <div>
                      <Select
                        isMulti
                        name="jobsProfils"
                        options={jobsProfils}
                        className="basic-multi-select"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        classNamePrefix="select"
                        onChange={handleJobsProfilsChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="block last">
                  <div className="d-flex justify-start">
                    <div>
                      <h4>Compétences</h4>
                      <p>Ajoutez les compétences recherchées</p>
                    </div>
                    <div>
                      <Select
                        isMulti
                        name="skills"
                        options={skillOptions}
                        className="basic-multi-select"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        classNamePrefix="select"
                        onChange={handleSkillsChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-end">
                  <button className="btn" onClick={nextStep}>
                    Etape suivante
                  </button>
                </div>
              </div>
              <div className={`${currentStep === 2 ? 'active' : 'd-none'}`}>
                <div className="block">
                  <div className="d-flex justify-start align-start">
                    <div>
                      <h4>A propos</h4>
                      <p>Texte d'introduction qui résume l'offre</p>
                    </div>
                    <div className="d-flex direction-column align-start">
                      <textarea
                        name="about"
                        id="about"
                        placeholder="Saissez votre texte ici"
                        value={formData.about}
                        onChange={handleInputChange}
                      ></textarea>
                      <p>{formData.about.length} caractères</p>
                      {errorMessages.about && (
                        <p className="error-message">{errorMessages.about}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="d-flex justify-start align-start">
                    <div>
                      <h4>Mission</h4>
                      <p>
                        Décrivez les tâches, missions et responsabilités qui
                        seront confiées au candidat
                      </p>
                    </div>
                    <div className="d-flex direction-column align-start">
                      <textarea
                        name="mission"
                        id="mission"
                        placeholder="Saissez votre texte ici"
                        value={formData.mission}
                        onChange={handleInputChange}
                      ></textarea>
                      <p>{formData.mission.length} caractères</p>
                      {errorMessages.mission && (
                        <p className="error-message">{errorMessages.mission}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="block last">
                  <div className="d-flex justify-start align-start">
                    <div>
                      <h4>Profil recherché</h4>
                      <p>
                        Décrivez les qualités du candidat idéal en termes de
                        savoir-faire et de savoir-être.
                      </p>
                    </div>
                    <div className="d-flex direction-column align-start">
                      <textarea
                        name="profile"
                        id="profile"
                        placeholder="Saissez votre texte ici"
                        value={formData.profile}
                        onChange={handleInputChange}
                      ></textarea>
                      <p>{formData.profile.length} caractères</p>
                      {errorMessages.profile && (
                        <p className="error-message">{errorMessages.profile}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn" onClick={prevStep}>
                    Etape précédente
                  </button>
                  <button className="btn" onClick={nextStep}>
                    Etape suivante
                  </button>
                </div>
              </div>
              <div className={`${currentStep === 3 ? 'active' : 'd-none'}`}>
                <div className="block last">
                  <div className="d-flex justify-start ">
                    <div>
                      <h4>Êtes-vous sûr ?</h4>
                      <p>
                        Vérifiez les différents champs avant de valider l'offre
                      </p>
                    </div>
                    <input
                      className="btn"
                      type="submit"
                      value="Je publie mon offre"
                    />
                  </div>
                  {errorMessages.about && (
                    <p className="error-message">
                      Champ "A propos" : {errorMessages.about}
                    </p>
                  )}
                  {errorMessages.mission && (
                    <p className="error-message">
                      Champ "Mission" : {errorMessages.mission}
                    </p>
                  )}
                  {errorMessages.profile && (
                    <p className="error-message">
                      Champ "Profil recherché" : {errorMessages.profile}
                    </p>
                  )}
                </div>
                <div className="d-flex">
                  <button className="btn" onClick={prevStep}>
                    Etape précédente
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
