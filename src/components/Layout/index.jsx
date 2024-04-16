import Navbar from './Navbar';
import Footer from './Footer';
import './index.scss';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
