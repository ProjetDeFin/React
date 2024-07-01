import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import ListAdmin from '../../../components/List/Admin';
import './index.scss';

export default function OfferAdmin() {
  const navigate = useNavigate();

  if (localStorage.getItem('role') !== 'ROLE_COMPANY_RESPONSIBLE') {
    navigate('/admin/mon-profil');
  }

  const offers = [
    {
      name: 'Développeur Front-End',
      status: 'Active',
      datePublication: '01/06/2024',
      dateLimite: '30/06/2024',
      type: 'Stage',
      candidate: 12,
    },
    {
      name: 'Assistant Marketing',
      status: 'Cloture',
      datePublication: '15/05/2024',
      dateLimite: '15/06/2024',
      type: 'Alternance',
      candidate: 20,
    },
    {
      name: 'Data Analyst',
      status: 'Active',
      datePublication: '10/06/2024',
      dateLimite: '10/07/2024',
      type: 'Stage',
      candidate: 8,
    },
    {
      name: 'Chef de Projet',
      status: 'Cloture',
      datePublication: '05/05/2024',
      dateLimite: '05/06/2024',
      type: 'Alternance',
      candidate: 15,
    },
    {
      name: 'Designer UX/UI',
      status: 'Active',
      datePublication: '20/06/2024',
      dateLimite: '20/07/2024',
      type: 'Stage',
      candidate: 10,
    },
    {
      name: 'Ingénieur Logiciel',
      status: 'Active',
      datePublication: '25/06/2024',
      dateLimite: '25/07/2024',
      type: 'Alternance',
      candidate: 5,
    },
    {
      name: 'Consultant IT',
      status: 'Cloture',
      datePublication: '01/04/2024',
      dateLimite: '01/05/2024',
      type: 'Stage',
      candidate: 18,
    },
  ];

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
            <h3>16 offres trouvées</h3>
            <div className="d-flex">
              <p>Filter par status :</p>
              <select name="" id="">
                <option value="Tous" default>
                  Tous
                </option>
                <option value="Active">Active</option>
                <option value="Clôturé">Clôturé</option>
              </select>
            </div>
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
            <ListAdmin data={offers} />
            <div className="row d-flex">{/* ajout de la pagination */}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
