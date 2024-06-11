import Navbar from './Navbar';
import NavbarAdmin from './Navbar/Admin';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import './index.scss';

export default function Layout({ children }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  console.log(location);

  return (
    <div className="layout">
      <Navbar />
      {isAdminRoute ? (
        <div className="d-flex">
          <NavbarAdmin />
          <div className="admin-content">
            {children}
          </div>
        </div>
      ) : (
        <div className="main-content">
          {children}
        </div>
      )}
      <Footer />
    </div>
  );
}
