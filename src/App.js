import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Companies from './pages/Companies';
import Offers from './pages/Offers';
import Students from './pages/Students';
import Layout from './components/Layout';
import OfferDetail from './pages/OfferDetail';
import CompanyDetail from './pages/CompanyDetail';
import ApplyJobWrapper from './pages/ApplyJobWrapper';
import Login from './pages/Authentification/Login';
import Registration from './pages/Authentification/Registration';
import AdminApplyJob from './pages/Admin/ApplyJob';
import AdminOffer from './pages/Admin/Offer';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/students" element={<Students />} />
            <Route
              path="/offers/internships"
              element={<Offers type="internships" />}
            />
            <Route
              path="/offers/apprenticeships"
              element={<Offers type="apprenticeships" />}
            />
            <Route path="/detail-offre/:id" element={<OfferDetail />} />
            <Route path="/detail-entreprise/:id" element={<CompanyDetail />} />
            <Route path="/postuler/:id" element={<ApplyJobWrapper />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/creation-compte" element={<Registration />} />
            <Route path="/admin/postuler" element={<AdminApplyJob />} />
            <Route path="/admin/offres" element={<AdminOffer />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}
