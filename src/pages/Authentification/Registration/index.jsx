import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

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
    console.log('ici');
    event.preventDefault();
    const errorMessages = validatePassword(password, confirmationPassword);
    if (errorMessages.length > 0) {
      setErrors(errorMessages);
    } else {
      setErrors([]);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
          method: 'POST',
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
    <div className="registration">
      <div className="container">
        <p className="text-center">VOUS ETES :</p>
        <div className="d-flex justify-center">
          <Link to="/inscription/entreprise">
            <div className="card">
              <h3 className="text-center">Une entreprise</h3>
              <p>Poster des offres</p>
              <p>Augmentez votre visibilite</p>
              <p>Trouvez votre prochaine stagiaire ou alternant</p>
            </div>
          </Link>
          <Link to="/inscription/etudiant">
            <div className="card">
              <h3 className="text-center">Un(e) etudiant(e)</h3>
              <p>Differenciez vous !</p>
              <p>Postulez a des offres qui vous correspondent</p>
              <p>Construisez votre futur !</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
