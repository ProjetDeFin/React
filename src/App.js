import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Companies from './pages/Companies';
import Offers from './pages/Offers';
import Students from './pages/Students';
import Layout from './components/Layout';
import OfferDetail from './pages/OfferDetail';
import CompanyDetail from './pages/CompanyDetail';
import ApplyJobWrapper from './pages/ApplyJobWrapper';
import AdminApplyJob from './pages/Admin/ApplyJob';
import AdminOffer from './pages/Admin/Offer';
import AdminAddOffer from './pages/Admin/AddOffer';
import Registration from './pages/Authentification/Registration';
import RegistrationCompany from './pages/Authentification/Registration/Company';
import RegistrationStudent from './pages/Authentification/Registration/Student';
import Login from './pages/Authentification/Login';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const errorToast = (message) => toast.error(message);
  const successToast = (message) => toast.success(message);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      <div className="App">
        <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entreprises" element={<Companies />} />
            <Route path="/etudiants" element={<Students />} />
            <Route
              path="/offre/stage"
              element={<Offers type="internships" />}
            />
            <Route
              path="/offre/alternance"
              element={<Offers type="apprenticeships" />}
            />
            <Route path="/detail-offre/:id" element={<OfferDetail />} />
            <Route path="/detail-entreprise/:id" element={<CompanyDetail />} />
            <Route path="/postuler/:id" element={<ApplyJobWrapper />} />
            <Route path="/connexion" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} errorToast={errorToast} successToast={successToast} />} />
            <Route path="/creation-compte" element={<Registration />} />
            <Route
              path="/inscription/entreprise"
              element={<RegistrationCompany />}
            />
            <Route
              path="/inscription/etudiant"
              element={<RegistrationStudent />}
            />
            <Route path="/admin/postuler" element={<AdminApplyJob />} />
            <Route path="/admin/offres" element={<AdminOffer />} />
            <Route path="/admin/offres/nouveau" element={<AdminAddOffer />} />
            <Route path="/inscription" element={<Registration />} />
            <Route path="/connexion" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} errorToast={errorToast} successToast={successToast} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}
