import Navbar from './Navbar';
import NavbarAdmin from './Navbar/Admin';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import './index.scss';
import {ToastContainer} from "react-toastify";

export default function Layout({ children, isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="layout">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isAdminRoute ? (
        <div className="d-flex admin justify-start align-start">
          <NavbarAdmin />
          <div className="admin-content">{children}</div>
        </div>
      ) : (
        <div className="main-content">{children}</div>
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
}
