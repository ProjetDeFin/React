import CompaniesForward from '../../components/CompaniesForward';
import './index.scss';

export default function Home() {
  const forwardCompany = [
    {
      name: 'Company 1',
      logo: 'assets/company1.png',
    },
  ];

  const searchedProfile = [
    {
      name: 'Profile 1',
      icon: 'ri:menu-2-fill',
      offers: 264,
    },
  ];

  const lastOffer = {
    name: 'Offer 1',
    type: 'internship',
    company: {
      name: 'Company 1',
      logo: 'assets/company1.png',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec.',
    tags: ['Marketing', 'Design'],
  };

  const lastApplication = {
    name: 'Application 1',
    student: {
      name: 'Student 1',
      age: 20,
      city: 'Paris',
      country: 'France',
      picture: 'assets/student1.png',
    },
    type: 'internship',
    tags: ['Marketing', 'Design'],
  };

  return (
    <div className="homepage">
      <h1>Welcome to the homepage</h1>
      <p>This is the homepage of the app.</p>
      <CompaniesForward />
    </div>
  );
}
