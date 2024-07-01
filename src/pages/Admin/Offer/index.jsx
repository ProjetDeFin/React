import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import ListAdmin from '../../../components/List/Admin';
import './index.scss';
import { useEffect, useState } from 'react';

export default function OfferAdmin() {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);

  if (localStorage.getItem('role') !== 'ROLE_COMPANY_RESPONSIBLE') {
    navigate('/admin/mon-profil');
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/offers/company/${localStorage.getItem('id')}`)
      .then((response) => response.json())
      .then((data) => {
        setOffers(data);
      });
  }, []);

  return (
    <div className="offer-admin">
      <div className="content">
        <div className="d-flex">
          <div className="d-flex">
            <img src="/img/logo/company.jpg" alt="" />
            <h2>MentalWorks</h2>
          </div>
          <Link to="/admin/offres/nouveau" className="d-flex btn">
            <Icon icon="material-symbols:add" />
            Nouvelle offre
          </Link>
        </div>
        <span></span>
        <section>
          <div className="d-flex">
            <h3>{offers.length} offres trouvées</h3>
            {/*todo sort*/}
            {/*<div className="d-flex">
              <p>Filter par status :</p>
              <select name="" id="">
                <option value="Tous" default>
                  Tous
                </option>
                <option value="Active">Active</option>
                <option value="Clôturé">Clôturé</option>
              </select>
            </div>*/}
          </div>
          <div className="table">
            <div className="head-table">
              <div className="d-flex justify-start">
                <div className="name">
                  <h4>Nom de l'offre</h4>
                </div>
                <div className="status">
                  <h4>Status</h4>
                </div>
                <div className="date-publication">
                  <h4>Date publication</h4>
                </div>
                <div className="date-limite">
                  <h4>Date limite</h4>
                </div>
                <div className="type">
                  <h4>Type</h4>
                </div>
                <div className="candidate">
                  <h4>Candidature</h4>
                </div>
              </div>
            </div>
            {offers.map((offer, index) => (
              <div key={index} className="body-table">
                <div className="name">{offer.title}</div>
                <div className="status">{offer.deletedAt ? 'Active' : 'Clôturé'}</div>
                <div className="date-publication">{offer.formatedStartApplyDate}</div>
                <div className="date-limite">{offer.formatedEndApplyDate}</div>
                <div className="type">{offer.type}</div>
                <div className="candidate">{offer.applications.length}</div>
              </div>
            ))}
            <div className="row d-flex">{/* todo ajout de la pagination */}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
