import './index.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

export default function AddAdminOffer() {
  const [currentStep, setCurrentStep] = useState(1);

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
            <form method="post">
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
                        name="name-offer"
                        id="name-offer"
                        placeholder="ex: Assistant marketing"
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
                          <input type="checkbox" name="" id="" checked />
                          <label htmlFor="">Stage</label>
                        </div>
                        <div className="d-flex">
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="">Alternance</label>
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
                        name="name-offer"
                        id="name-offer"
                        placeholder="Montants par mois"
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
                      <select name="" id="">
                        <option value="" disabled selected>
                          Choisir le type de job
                        </option>
                        <option value="">Alternance</option>
                        <option value="internship">Stage</option>
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
                    <div></div>
                  </div>
                </div>
                <div className="block">
                  <div className="d-flex justify-start">
                    <div>
                      <h4>Compétences</h4>
                      <p>Ajoutez les compétences recherchées</p>
                    </div>
                    <div></div>
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
                    <textarea
                      name=""
                      id=""
                      placeholder="Saissez votre texte ici"
                    ></textarea>
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
                    <textarea
                      name=""
                      id=""
                      placeholder="Saissez votre texte ici"
                    ></textarea>
                  </div>
                </div>
                <div className="block">
                  <div className="d-flex justify-start align-start">
                    <div>
                      <h4>Profil recherché</h4>
                      <p>
                        Décrivez les qualités du candidat idéal en termes de
                        savoir-faire et de savoir-être.
                      </p>
                    </div>
                    <textarea
                      name=""
                      id=""
                      placeholder="Saissez votre texte ici"
                    ></textarea>
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
                <div className="block">
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
