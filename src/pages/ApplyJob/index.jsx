import { Icon } from '@iconify/react';
import Modal from '../../components/Modal';
import './index.scss';

export default function ApplyJob() {

  const skill = [
    { value: "photoshop", label: "Photoshop" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "node-js", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "django", label: "Django" },
    { value: "sql", label: "SQL" },
    { value: "nosql", label: "NoSQL" },
    { value: "mongodb", label: "MongoDB" },
    { value: "git", label: "Git" },
    { value: "github", label: "GitHub" },
    { value: "docker", label: "Docker" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "aws", label: "AWS" },
    { value: "azure", label: "Azure" },
    { value: "google-cloud", label: "Google Cloud" },
    { value: "linux", label: "Linux" },
    { value: "bash", label: "Bash" },
    { value: "jira", label: "JIRA" },
    { value: "confluence", label: "Confluence" },
    { value: "agile-methodologies", label: "Agile Methodologies" },
    { value: "scrum", label: "Scrum" },
    { value: "kanban", label: "Kanban" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "figma", label: "Figma" },
    { value: "sketch", label: "Sketch" },
    { value: "adobe-xd", label: "Adobe XD" },
    { value: "invision", label: "InVision" },
    { value: "after-effects", label: "After Effects" },
    { value: "illustrator", label: "Illustrator" },
    { value: "premiere-pro", label: "Premiere Pro" },
    { value: "marketing", label: "Marketing" },
    { value: "seo", label: "SEO" },
    { value: "content-writing", label: "Content Writing" },
    { value: "copywriting", label: "Copywriting" },
    { value: "email-marketing", label: "Email Marketing" },
    { value: "social-media-marketing", label: "Social Media Marketing" },
    { value: "google-analytics", label: "Google Analytics" },
    { value: "google-ads", label: "Google Ads" },
    { value: "facebook-ads", label: "Facebook Ads" },
    { value: "instagram-ads", label: "Instagram Ads" },
    { value: "linkedin-ads", label: "LinkedIn Ads" },
    { value: "twitter-ads", label: "Twitter Ads" },
    { value: "community-management", label: "Community Management" },
    { value: "swello", label: "Swello" },
    { value: "buffer", label: "Buffer" },
    { value: "hootsuite", label: "Hootsuite" },
    { value: "trello", label: "Trello" },
    { value: "slack", label: "Slack" },
    { value: "microsoft-office", label: "Microsoft Office" },
    { value: "excel", label: "Excel" },
    { value: "powerpoint", label: "PowerPoint" },
    { value: "word", label: "Word" }
  ];
  
  const languages = [
    { value: "UK-A1", label: "Anglais: A1" },
    { value: "UK-A2", label: "Anglais: A2" },
    { value: "UK-B1", label: "Anglais: B1" },
    { value: "UK-B2", label: "Anglais: B2" },
    { value: "UK-C1", label: "Anglais: C1" },
    { value: "UK-C2", label: "Anglais: C2" },
    { value: "FR-A1", label: "Français: A1" },
    { value: "FR-A2", label: "Français: A2" },
    { value: "FR-B1", label: "Français: B1" },
    { value: "FR-B2", label: "Français: B2" },
    { value: "FR-C1", label: "Français: C1" },
    { value: "FR-C2", label: "Français: C2" },
    { value: "ES-A1", label: "Espagnol: A1" },
    { value: "ES-A2", label: "Espagnol: A2" },
    { value: "ES-B1", label: "Espagnol: B1" },
    { value: "ES-B2", label: "Espagnol: B2" },
    { value: "ES-C1", label: "Espagnol: C1" },
    { value: "ES-C2", label: "Espagnol: C2" },
    { value: "DE-A1", label: "Allemand: A1" },
    { value: "DE-A2", label: "Allemand: A2" },
    { value: "DE-B1", label: "Allemand: B1" },
    { value: "DE-B2", label: "Allemand: B2" },
    { value: "DE-C1", label: "Allemand: C1" },
    { value: "DE-C2", label: "Allemand: C2" },
    { value: "IT-A1", label: "Italien: A1" },
    { value: "IT-A2", label: "Italien: A2" },
    { value: "IT-B1", label: "Italien: B1" },
    { value: "IT-B2", label: "Italien: B2" },
    { value: "IT-C1", label: "Italien: C1" },
    { value: "IT-C2", label: "Italien: C2" },
    { value: "CN-A1", label: "Chinois: A1" },
    { value: "CN-A2", label: "Chinois: A2" },
    { value: "CN-B1", label: "Chinois: B1" },
    { value: "CN-B2", label: "Chinois: B2" },
    { value: "CN-C1", label: "Chinois: C1" },
    { value: "CN-C2", label: "Chinois: C2" }
  ];

  return (
    <div className="apply-job">
      <section className="apply-job-form">
        <div className="container">
          <form action="" method="post">
            <div className="d-flex align-start">
              <div className="description">
                <h2>Postulez a cette offre de stage</h2>
                <span className="line"></span>
                <h3>Vous êtes</h3>
                <div className="d-flex identity">
                  <div className="d-flex direction-column align-start gender">
                    <label htmlFor="gender">
                      Genre<span>*</span>
                    </label>
                    <select name="gender" id="gender">
                      <option value="man" selected>
                        Homme
                      </option>
                      <option value="woman">Femme</option>
                    </select>
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="firstName">
                      Prenom<span>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Jean"
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="name">
                      Nom<span>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="birthday">
                      Date de naissance<span>*</span>
                    </label>
                    <input
                      type="date"
                      name="birthday"
                      id="birthday"
                      value="2024-04-10"
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="">
                      Telephone mobile<span>*</span>
                    </label>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="0670619599"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="adress">Adresse</label>
                    <input
                      type="text"
                      name="adress"
                      id="adress"
                      placeholder="12 Avenue des vignes"
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="additionalAdress">
                      Complément d'adresse
                    </label>
                    <input
                      type="text"
                      name="additionalAdress"
                      id="additionalAdress"
                      placeholder="Bat A, apt 7"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="birthday">Code postal</label>
                    <input
                      type="text"
                      name="birthday"
                      id="birthday"
                      placeholder="60200"
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="city">Ville</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Paris"
                    />
                  </div>
                </div>
                <div className="d-flex direction-column align-start website">
                  <label htmlFor="website-url">
                    Adresse de votre site web personnel
                  </label>
                  <input
                    type="text"
                    name="website-url"
                    id="website-url"
                    placeholder="https://www.jeandupont.fr"
                  />
                </div>
                <div className="d-flex direction-column align-start linkedin">
                  <label htmlFor="linkedin-url">
                    Lien vers votre page Linkedin
                  </label>
                  <input
                    type="text"
                    name="linkedin-url"
                    id="linkedin-url"
                    placeholder="https://www.linkedin.com/in/jean-dupont"
                  />
                </div>
                <div className="d-flex justify-start">
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      name="driving-license"
                      id="driving-license"
                    />
                    <label htmlFor="driving-license">
                      J'ai le permis de conduire
                    </label>
                  </div>
                  <div className="d-flex">
                    <input type="checkbox" name="handicap" id="handicap" />
                    <label htmlFor="handicap">J'ai une forme de handicap</label>
                  </div>
                </div>
                <span className="line"></span>
                <h3>Votre situation actuelle</h3>
                <div className="d-flex situation">
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="study-level">
                      Niveau d'études*<span>*</span>
                    </label>
                    <select name="study-level" id="study-level">
                      <option value="" selected>
                        Bac +3
                      </option>
                      <option value="">Bac +2</option>
                      <option value="">Bac +1</option>
                      <option value="">Bac +4</option>
                    </select>
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="firstName">Diplôme préparé</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Jean"
                    />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <label htmlFor="name">Nom de l'établissement</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Dupont"
                    />
                  </div>
                </div>
                <div className="d-flex direction-column align-start name-degree">
                  <label htmlFor="name">Nom de la formation préparée</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Licence générale informatique, mention développement web "
                  />
                </div>
                <div className="d-flex direction-column align-start motivation">
                  <label htmlFor="motivation">
                    Vos atouts & motivations pour postuler à cette offre de
                    stage
                  </label>
                  <textarea
                    name="motivation"
                    id="motivation"
                    placeholder="Présentez vous et mettez en avant votre parcours, vos atouts, votre personnalité, 
    vos centres d'intérêt, attentes, etc."
                  ></textarea>
                </div>
              </div>
              <div className="skill">
                <section className="profil">
                  <h3>Votre photo</h3>
                  <p>
                    Ajouter votre photo à votre profil est apprécié par les
                    entreprises et augmente vos chances
                  </p>
                  <div className="d-flex">
                    <img src="/img/profil-picture/student1.png" alt="" />
                    <label htmlFor="" className="text-center">
                      Importer(500x500 pixels max) <br />
                      <span>JPG ou PNG(5Mo max)</span>
                    </label>
                    <input type="file" name="" id="" />
                  </div>
                  <span className="line"></span>
                </section>
                <section className="skill-tag">
                  <h3>Vos compétences</h3>
                  <p>Ajoutez jusqu'à 10 compétences :</p>
                  <span className="line"></span>
                </section>
                <section className="language">
                  <h3>Votre pratique des langues</h3>
                  <p>Ajoutez les langues que vous pratiquez :</p>
                    <p>test</p>
                    <Modal options={languages} enableContractInput={false} />
                  <span className="line"></span>
                </section>
                <section className="experience">
                  <h3>Vos expérience pro</h3>
                  <p>Stages, emplois d'été, projets personnels :</p>
                  <Modal options={languages} enableContractInput={false} />
                  <span className="line"></span>
                </section>
                <section className="document">
                  <h3>CV et autres documents</h3>
                  <p>
                    Importez votre CV et votre lettre de motivation ou ajoutez
                    tout document utile à votre candidature (présentation
                    détaillée de vos projets, portfolio, etc.)
                  </p>
                  <div className="d-flex direction-column align-start">
                    <p>Votre CV (format PDF, 20Mo max)</p>
                    <label className="d-flex" htmlFor="cv">
                      <Icon icon="ph:paperclip" />
                      Importez votre CV
                    </label>
                    <input type="file" name="cv" id="cv" />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <p>Lettre de motivation (format PDF, 20Mo max)</p>
                    <label className="d-flex" htmlFor="cv">
                      <Icon icon="ph:paperclip" />
                      Importez votre lettre de motivation
                    </label>
                    <input type="file" name="cv" id="cv" />
                  </div>
                  <div className="d-flex direction-column align-start">
                    <p>Autre document (format PDF ou ZIP, 50Mo max)</p>
                    <label className="d-flex" htmlFor="cv">
                      <Icon icon="ph:paperclip" />
                      Importez un autre document
                    </label>
                    <input type="file" name="cv" id="cv" />
                  </div>
                </section>
              </div>
            </div>
            <div className="submit">
              <span className="line"></span>
              <input type="submit" value="Postuler à cette offre de stage" />
              <p className="cgv">
                En validant ce formulaire, vous confirmez que vous acceptez nos{' '}
                <a href="">Conditions Générales d'Utilisation</a> et notre{' '}
                <a href="">politique de confidentialité.</a>
              </p>
              <a href="" className="d-flex btn">
                <Icon icon="ph:arrow-left-bold" /> Retour
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
