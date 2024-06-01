import CompaniesForward from '../../components/CompaniesForward';
import CompanyCard from '../../components/Card/OfferCompany';
import ApplyStudent from '../../components/Card/ApplyStudent';
import { Icon } from '@iconify/react';
import './index.scss';

export default function Home() {
  const forwardCompany = [
    {
      name: 'AMD',
      logo: '/img/logo/amd.svg',
    },
    {
      name: 'Intel',
      logo: '/img/logo/intel.svg',
    },
    {
      name: 'Talkit',
      logo: '/img/logo/talkit.svg',
    },
    {
      name: 'Tesla',
      logo: '/img/logo/tesla.svg',
    },
    {
      name: 'Vodafone',
      logo: '/img/logo/vodafone.svg',
    },
    {
      name: 'Company 6',
      logo: '/img/logo/company.jpg',
    },
    {
      name: 'Company 7',
      logo: '/img/logo/company.jpg',
    },
    {
      name: 'Company 8',
      logo: '/img/logo/company.jpg',
    },
    {
      name: 'Company 9',
      logo: '/img/logo/company.jpg',
    },

    {
      name: 'Company 10',
      logo: '/img/logo/company.jpg',
    },

    {
      name: 'Company 11',
      logo: '/img/logo/company.jpg',
    },

    {
      name: 'Company 12',
      logo: '/img/logo/company.jpg',
    },
  ];

  const marketing = { name: 'Marketing', color: '#d6a196' };
  const design = { name: 'Design', color: '#acd696' };
  const finance = { name: 'Finance', color: '#96d6d6' };
  const it = { name: 'Informatique', color: '#9696d6' };

  const lastOffers = [
    {
        name: 'Offer 1',
        type: 'Alternance',
        company: {
            name: 'Company 1',
            logo: 'company1.png',
            location: 'Paris',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
        tags: [marketing, design],
    },
    {
        name: 'Offer 2',
        type: 'Stage',
        company: {
            name: 'Company 2',
            logo: 'company1.png',
            location: 'Lyon',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
        tags: [design, finance],
    },
    {
        name: 'Offer 3',
        type: 'Alternance',
        company: {
            name: 'Company 3',
            logo: 'company1.png',
            location: 'Marseille',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
        tags: [marketing, it],
    },
    {
        name: 'Offer 4',
        type: 'Stage',
        company: {
            name: 'Company 4',
            logo: 'company1.png',
            location: 'Toulouse',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
        tags: [design, finance],
    },
    {
        name: 'Offer 5',
        type: 'Stage',
        company: {
            name: 'Company 5',
            logo: 'company1.png',
            location: 'Nice',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
        tags: [marketing, it],
    },
    {
        name: 'Offer 6',
        type: 'Alternance',
        company: {
            name: 'Company 6',
            logo: 'company1.png',
            location: 'Nantes',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
        tags: [design, finance],
    },
    {
        name: 'Offer 7',
        type: 'Stage',
        company: {
            name: 'Company 7',
            logo: 'company1.png',
            location: 'Strasbourg',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
        tags: [marketing, it],
    },
    {
        name: 'Offer 8',
        type: 'Alternance',
        company: {
            name: 'Company 8',
            logo: 'company1.png',
            location: 'Bordeaux',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
        tags: [design, finance],
    },
    {
      name: 'Offer 8',
      type: 'Alternance',
      company: {
          name: 'Company 8',
          logo: 'company1.png',
          location: 'Bordeaux',
      },
      description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [design, finance],
    },
    {
      name: 'Offer 8',
      type: 'Alternance',
      company: {
          name: 'Company 8',
          logo: 'company1.png',
          location: 'Bordeaux',
      },
      description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [design, finance],
    },
    {
      name: 'Offer 8',
      type: 'Alternance',
      company: {
          name: 'Company 8',
          logo: 'company1.png',
          location: 'Bordeaux',
      },
      description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [design, finance],
    },
    {
      name: 'Offer 8',
      type: 'Alternance',
      company: {
          name: 'Company 8',
          logo: 'company1.png',
          location: 'Bordeaux',
      },
      description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
      tags: [design, finance],
    },
  ];

  const lastApply = [
    {
      name: 'Application 1',
      student: {
        name: 'Student 1',
        age: 20,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 10/04/2024 au 12/06/2024',
      tags: [marketing, design],
    },
    {
      name: 'Application 2',
      student: {
        name: 'Student 2',
        age: 21,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 15/05/2024 au 17/07/2024',
      tags: [design, finance],
    },
    {
      name: 'Application 3',
      student: {
        name: 'Student 3',
        age: 22,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 20/06/2024 au 22/08/2024',
      tags: [marketing, finance],
    },
    {
      name: 'Application 4',
      student: {
        name: 'Student 4',
        age: 23,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 25/07/2024 au 27/09/2024',
      tags: [design, finance],
    },
    {
      name: 'Application 5',
      student: {
        name: 'Student 5',
        age: 24,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 30/08/2024 au 01/11/2024',
      tags: [marketing, it],
    },
    {
      name: 'Application 6',
      student: {
        name: 'Student 6',
        age: 25,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 05/09/2024 au 07/11/2024',
      tags: [it, finance],
    },
    {
      name: 'Application 7',
      student: {
        name: 'Student 7',
        age: 26,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 10/10/2024 au 12/12/2024',
      tags: [marketing, it],
    },
    {
      name: 'Application 8',
      student: {
        name: 'Student 8',
        age: 27,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 15/11/2024 au 17/01/2025',
      tags: [it, finance],
    },
    {
      name: 'Application 9',
      student: {
        name: 'Student 4',
        age: 23,
        city: 'Paris',
        country: 'France',
        picture: 'student1.png',
      },
      type: 'internship',
      period: 'Du 25/07/2024 au 27/09/2024',
      tags: [design, finance],
    }
  ];

    return (
      <div className="homepage">
        <section className="landing-page">
          <div className="container">
            <div className="d-flex justify-center">
              <div className="description">
                <p className="landing-scape">Trouver un stage n'aura jamais été <span>aussi facile !</span></p>
                <p>Trouvez les offres de stage ou d'alternance près de chez vous qui correspondent à votre profil et à vos attentes.</p>
                <p><span>1254</span> offres de <strong>stages</strong> | <span>987</span> offres <strong>d'alternance</strong> n'attendent que vous !</p>
              </div>
              <img src="/img/home-man.png" alt="" />
            </div>
          </div>
        </section>
        <div className="container">
          <CompaniesForward companies={forwardCompany} />
          <section className='companyOffer'>
            <div className="d-flex">
              <h2>Dernières <span>offres</span></h2>
              <a href="" className='turquoise all-offer d-flex'>
                toutes les offres
                <Icon icon="tabler:arrow-right" />
              </a>
            </div>
            <div className="d-flex wrap">
              {lastOffers.map((offer, index) => (
                  <CompanyCard
                      key={index}
                      logo={offer.company.logo}
                      typeOffer={offer.type}
                      nameOffer={offer.name}
                      nameCompany={offer.company.name}
                      locationCompany={offer.company.location || ""} 
                      descriptionCompany={offer.description}
                      firstTag={offer.tags[0].name || ""}
                      secondTag={offer.tags[1].name || ""}
                  />
              ))}
            </div>
          </section>
        </div>
        <section className="bg-grey apply-student">
          <div className="d-flex">
            <h2>Dernières <span>demandes</span></h2>
            <a href="" className='turquoise all-offer d-flex'>
              toutes les demandes
              <Icon icon="tabler:arrow-right" />
            </a>
          </div>
          <div className="d-flex wrap">
            {lastApply.map((apply, index) => (
                <ApplyStudent
                    key={index}
                    profilPicture={apply.student.picture}
                    titleApply={apply.name}
                    agePerson={apply.student.age}
                    locationPerson={apply.student.city}
                    namePerson={apply.student.name}
                    tag={apply.tags[0].name || ""}
                    periodApply={apply.period || ""} 
                />
            ))}
          </div>
        </section>
      </div>
    );
}
