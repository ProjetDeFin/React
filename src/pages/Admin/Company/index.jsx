import { useState } from "react";
import './index.scss'

export default function AdminCompany() {

    const [showForm, setShowForm] = useState(false);
    const [siret, setSiret] = useState('');
    const [siretError, setSiretError] = useState('');
    const [files, setFiles] = useState([]);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const validateSiret = (value) => {
        // Vérification simple : un numéro SIRET comporte 14 chiffres
        const siretRegex = /^\d{14}$/;
        if (!siretRegex.test(value)) {
            setSiretError('Le numéro SIRET doit contenir exactement 14 chiffres.');
        } else {
            setSiretError('');
        }
    };

    const handleSiretChange = (event) => {
        const value = event.target.value;
        setSiret(value);
        validateSiret(value);
    };

    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };

    return (
        <div className="company-admin">
            {!showForm && (
                <div className="d-flex align-center justify-center btn-creation"> 
                    <button className="btn" onClick={toggleForm}>Je crée ma fiche entreprise</button>
                </div>
            )}
            {showForm && (
                <form method="post">
                    <div className="d-flex align-start">
                        <section className="identity-company">
                            <h2>Identité de l'entreprise</h2>
                            <div className="d-flex">
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="organizationName">Nom</label>
                                    <input type="text" name="organizationName" id="organizationName" placeholder="Nom" />
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="siret">SIRET</label>
                                    <input
                                        type="text"
                                        name="siret"
                                        id="siret"
                                        placeholder="SIRET"
                                        value={siret}
                                        onChange={handleSiretChange}
                                    />
                                    {siretError && <p className="error">{siretError}</p>}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="industry">Secteur</label>
                                    <select name="industry" id="industry">
                                        <option value="">Sélectionnez</option>
                                        <option value="technology">Technologie</option>
                                        <option value="finance">Finance</option>
                                        <option value="health">Santé</option>
                                    </select>
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="category">Catégorie</label>
                                    <select name="category" id="category">
                                        <option value="">Sélectionnez</option>
                                        <option value="small">Petite entreprise</option>
                                        <option value="medium">Moyenne entreprise</option>
                                        <option value="large">Grande entreprise</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="address">Adresse</label>
                                    <input type="text" name="address" id="address" />
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="addressComplement">Complément</label>
                                    <input type="text" name="addressComplement" id="addressComplement" />
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="postalCode">Code Postal</label>
                                    <input type="text" name="postalCode" id="postalCode" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="city">Ville</label>
                                    <input type="text" name="city" id="city" />
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="organizationPhone">Tel (standard)</label>
                                    <input type="text" name="organizationPhone" id="organizationPhone" />
                                </div>
                            </div>
                        </section>
                        <section className="more-information">
                            <h2>Complément d'information</h2>
                            <div className="d-flex direction-column align-start">
                                <div className="d-flex">
                                    <label htmlFor="logo">Logo</label>
                                    <input 
                                        type="file" 
                                        name="logo" 
                                        id="logo" 
                                        multiple
                                        accept=".jpg, .jpeg, .png, .gif"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <p>Version Full (800px de large) et version picto (300px par 300px) JPG, PNG, GIF acceptés</p>
                            </div>
                            <div className="d-flex direction-column align-start">
                                <label htmlFor="creationDate">Date de création</label>
                                <input type="date" name="creationDate" id="creationDate" />
                            </div>
                            <div className="d-flex">
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="revenue">Chiffre d'affaires (en M€)</label>
                                    <input type="number" name="revenue" id="revenue" />
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="employeesNumber">Nombre d'employés</label>
                                    <input type="number" name="employeesNumber" id="employeesNumber" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="facebook">Facebook</label>
                                    <input type="text" name="facebook" id="facebook" />
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="linkedin">LinkedIn</label>
                                    <input type="text" name="linkedin" id="linkedin" />
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="instagram">Instagram</label>
                                    <input type="text" name="instagram" id="instagram" />
                                </div>
                                <div className="d-flex direction-column align-start">
                                    <label htmlFor="twitter">Twitter</label>
                                    <input type="text" name="twitter" id="twitter" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
            )}
        </div>
    );
}
