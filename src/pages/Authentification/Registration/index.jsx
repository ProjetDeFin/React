import './index.scss';

export default function Registration() {
  return (
    <div className="grey registration">
        <div className="d-flex justify-center align-center">
            <div className="content">
                <h2>INSCRIPTION</h2>
                <p>Rejoignez Bourses aux Stages et tentez votre chance parmis les offres déja en ligne !</p>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="firstName">Prénom</label>
                  <input type="text" name="firstName" id="firstName" placeholder="jean" />
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="name">Nom</label>
                  <input type="text" name="name" id="name" placeholder="jean" />
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="email">E-mail</label>
                  <input type="text" name="email" id="email" placeholder="jean" />
                </div>
                <div className="d-flex direction-column align-start">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="text" name="password" id="password" placeholder="jean"/>
                </div>
                <input className="btn" type="submit" value="Créer mon compte" />
            </div>
        </div>
    </div>
  );
}
