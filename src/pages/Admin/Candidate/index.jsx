import Link from "../../../components/Link";
import { Icon } from "@iconify/react/dist/iconify.js";
import ListAdmin from "../../../components/List/Admin";
import './index.scss'
import { useNavigate } from 'react-router-dom';

const candidates = [
    {
      name: "Alice Durand",
      score: 4.25,
      status_candidates: "Entretien effectué",
      date: "15/07/2023",
      profil_picture: "student1.png"
    },
    {
      name: "Julien Lambert",
      score: 3.50,
      status_candidates: "Retenu",
      date: "28/06/2023"
    },
    {
      name: "Sophie Lefevre",
      score: 2.80,
      status_candidates: "Non répondu",
      date: "10/06/2023"
    },
    {
      name: "Pierre Dubois",
      score: 1.75,
      status_candidates: "Refusé",
      date: "02/06/2023"
    },
    {
      name: "Marie Martin",
      score: 5.00,
      status_candidates: "Entretien planifié",
      date: "20/07/2023"
    },
    {
      name: "Lucas Dupont",
      score: 2.10,
      status_candidates: "Non répondu",
      date: "05/06/2023"
    }
];

export default function AdminCandidat() {
  const navigate = useNavigate();

  if (localStorage.getItem('role') !== 'ROLE_COMPANY_RESPONSIBLE') {
    navigate('/admin/mon-profil');
  }

    return (
      <div className="offer-admin admin-candidate">
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
              <h3>16 candidatures trouvées</h3>
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
                    <h4>Nom</h4>
                  </div>
                  <div className="score">
                    <h4>Score</h4>
                  </div>
                  <div className="status_candidates">
                    <h4>Status</h4>
                  </div>
                  <div className="date">
                    <h4>Date</h4>
                  </div>
                  <div className="type">
                    <h4>Action</h4>
                  </div>
                </div>
              </div>
              <ListAdmin data={candidates} />
              <div className="row d-flex">{/* ajout de la pagination */}</div>
            </div>
          </section>
        </div>
      </div>
    )
}
