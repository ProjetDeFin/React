import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import ThumbnailResumeOffer from '../../components/Card/ThumbnailResumeOffer';
import './index.scss';

export default function Companies() {

    const offerData = [
        {
            nameOffer: 'Stage en marketing digital',
            periodOffer: '01/07/2024 au 31/08/2024',
            descriptionOffer: 'Apprenez les bases du marketing digital au sein de notre équipe dynamique.',
            firstTag: 'Marketing',
            secondTag: 'Design'
        },
        {
            nameOffer: 'Développeur Wordpress',
            periodOffer: '01/07/2024 au 31/08/2024',
            descriptionOffer: 'Développez des interfaces utilisateur modernes et réactives.',
            firstTag: 'Informatique',
            secondTag: 'Design'
        },
        {
            nameOffer: 'Analyste financier junior',
            periodOffer: '01/07/2024 au 31/08/2024',
            descriptionOffer: 'Participez à l\'analyse financière et à la préparation des rapports.',
            firstTag: 'Finance',
            secondTag: 'Marketing'
        },
        {
            nameOffer: 'UX/UI design',
            periodOffer: '01/07/2024 au 31/08/2024',
            descriptionOffer: 'Concevez des supports de communication visuelle percutants.',
            firstTag: 'Design',
            secondTag: 'Marketing'
        },
        {
            nameOffer: 'Support IT',
            periodOffer: '01/07/2024 au 31/08/2024',
            descriptionOffer: 'Assurez le support technique et la maintenance.',
            firstTag: 'Informatique',
            secondTag: 'Finance'
        }
    ];

    return (
        <div className="company-detail">
            <div className="grey">
                <div className="container">
                    <h2>Mentalworks</h2>
                    <a href="" className="link d-flex">mentalworks.fr <Icon icon="tabler:arrow-right" /></a>
                    <div className="d-flex summary justify-start">
                        <div className="d-flex">
                            <div className="circle d-flex justify-center align-center">
                                <Icon icon="simple-line-icons:check" />
                            </div>
                            <div>
                                <p>Activité</p>
                                <p>Informatique</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="circle d-flex justify-center align-center">
                                <Icon icon="simple-line-icons:fire" />
                            </div>
                            <div>
                                <p>Ancienneté</p>
                                <p>24 ans</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="circle d-flex justify-center align-center">
                                <Icon icon="fluent:people-team-20-regular" />
                            </div>
                            <div>
                                <p>Effectifs</p>
                                <p>22</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="circle d-flex justify-center align-center">
                                <Icon icon="grommet-icons:money" />
                            </div>
                            <div>
                                <p>Chiffre d'affaires</p>
                                <p>1,2 M€</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="circle d-flex justify-center align-center">
                                <Icon icon="ep:location" />
                            </div>
                            <div>
                                <p>Situation</p>
                                <p>Compiègne (60200)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container">
                    <div className="d-flex align-start">
                        <section>
                            <div className="presentation">
                                <h3>Présentation</h3>
                                <p>Mentalworks est à la fois une agence web et webmarketing mais aussi une SSII/ESN spécialisée dans le développement et la maintenance d'applications sur-mesure.</p>
                                <p>Mentalworks représente une nouvelle génération : celle des agences digitales technologiques. Notre particularité est d'intégrer à la fois une agence web et e-marketing (conseil stratégique, SEO/SEA/CM) mais aussi une SSII/ESN composée de développeurs spécialisés pour couvrir toutes les technologies et répondre à tous les besoins: créer ou développer des applications métiers ou applis mobiles/tablettes, relier ou synchroniser un site e-commerce avec un ERP/CRM existant ou avec tout autre système d'information, etc.</p>
                                <p>Experts du framework PHP Symfony et .NET Nous avons développé une gamme de solutions d'entreprises sur étagère en mode licence ou abonnement (SaaS) : smart INTRANET/EXTRANET, smart CRM/ERP, smart CSE, smart ASSO et Smart MAIRIES. N'hésitez pas à nous contacter pour vous les présenter et organiser une démonstration.</p>
                                <p>Une équipe pluridisciplinaire composée d'experts imagine et conçoit avec vous votre projet. Vous êtes conseillé et accompagné du début à la fin. Notre valeur ajoutée : écouter, échanger, comprendre, analyser, être force de proposition, penser digital et multicanal mais aussi et surtout optimiser l'expérience utilisateur pour tirer le meilleur potentiel de chaque support .</p>
                                <p>Nous travaillons avec tous nos clients avec la même implication et le même engagement. Quel que soit votre besoin et votre budget, partenaires de votre réussite, nous trouverons ensemble la solution pour développer une stratégie digitale gagnante. La vôtre.</p>
                            </div>
                            <div>
                                <h3>Réseaux sociaux</h3>
                                <div className="d-flex justify-start">
                                    <a href="https://www.linkedin.com/">
                                        <div className="rs d-flex">
                                            <Icon icon="mdi:linkedin"/>
                                            <p>linkedin.com</p>
                                        </div>
                                    </a>
                                    <a href="https://x.com/home?lang=fr">                               
                                    <div className="rs d-flex">
                                        <Icon icon="mdi:twitter"/>
                                        <p>twitter.com</p>
                                    </div>
                                    </a>
                                    <a href="https://www.facebook.com/?locale=fr_FR">
                                    <div className="rs d-flex">
                                        <Icon icon="mdi:facebook"/>
                                        <p>facebook.com</p>
                                    </div>
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <div className="rs d-flex">
                                            <Icon icon="mdi:instagram"/>
                                            <p>Instagram</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex gallery">
                                <div className="d-flex direction-column">
                                    <img src="/img/company/detail4.jpg" alt="" />
                                    <img src="/img/company/detail1.jpg" alt="" />
                                </div>
                                <div className="d-flex direction-column">
                                    <img src="/img/company/detail3.jpg" alt="" />
                                    <img src="/img/company/detail2.jpg" alt="" />
                                    <img src="/img/company/detail5.jpg" alt="" />
                                </div>
                            </div>
                        </section>
                        <section>
                            <img className="logo" src="/img/logo/company1.png" alt="" />
                            <div className="situation">
                                <h3>Situation</h3>
                                <p>Mentalworks</p>
                                <p>41 rue Irène Joliot Curie</p>
                                <p>Bâtiment Millenium</p>
                                <p>60610 Lacroix Saint-Ouen</p>
                            </div>
                            <div className="map">
                                <a href="" className="link d-flex">Voir sur une carte <Icon icon="tabler:arrow-right" /></a>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.4660064693376!2d2.7818889770599915!3d49.38117627140783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7d69aefe1ca19%3A0xa2bd048d657fa30e!2sMentalWorks!5e0!3m2!1sfr!2sfr!4v1717313852498!5m2!1sfr!2sfr" 
                                    width="420" 
                                    height="420" 
                                    style={{ border: 0, borderRadius: 6 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                <span></span>
                            </div>
                            <div className="contact">
                                <h3>Nous joindre</h3>
                                <p>Téléphone : 03 44 86 22 55</p>
                                <p>Du lundi au vendredi de 8h30 à 18h30</p>
                                <a href="" className="link d-flex">Nous envoyer un message <Icon icon="tabler:arrow-right" /></a>
                                <span></span>
                            </div>
                            <div className="additional-contact">
                                <h3>Vos contacts</h3>
                                <div>
                                    <p>Directeur des Ressources Humaines</p>
                                    <p>Olivier SALESSE</p>
                                    <div className="d-flex justify-start">
                                        <a href="" target='_blank'>
                                            <Icon icon="mdi:linkedin"/>
                                        </a>
                                        <a href="" target='_blank'>
                                            <Icon icon="carbon:email"/>
                                        </a>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <p>Responsable des offres de stage</p>
                                    <p>Mathieu MOUNIER</p>
                                    <div className="d-flex justify-start">
                                        <a href="" target='_blank'>
                                            <Icon icon="mdi:linkedin"/>
                                        </a>
                                        <a href="" target='_blank'>
                                            <Icon icon="carbon:email"/>
                                        </a>
                                    </div>
                                    <span></span>
                                </div>
                                <div>
                                    <p>Responsable des offres en alternance</p>
                                    <p>Jeff MARTINS</p>
                                    <div className="d-flex justify-start">
                                        <a href="" target='_blank'>
                                            <Icon icon="mdi:linkedin"/>
                                        </a>
                                        <a href="" target='_blank'>
                                            <Icon icon="carbon:email"/>
                                        </a>
                                    </div>
                                    <span></span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="grey">
                <div className="container offer">
                    <div className="offer-internship">
                        <h3>Offres de stage proposées</h3>
                        <div className="d-flex wrap justify-start">
                            {offerData.slice(0, 3).map((offer, index) => (
                                <ThumbnailResumeOffer
                                    key={index}
                                    nameOffer={offer.nameOffer}
                                    periodOffer={offer.periodOffer}
                                    descriptionOffer={offer.descriptionOffer}
                                    firstTag={offer.firstTag}
                                    secondTag={offer.secondTag}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="offer-alternated-training">
                        <h3>Offres d'alternance proposées</h3>
                        <div className="d-flex wrap justify-start">
                            {offerData.slice(-2).map((offer, index) => (
                                <ThumbnailResumeOffer
                                    key={index + 3} // To ensure unique keys, adjust the index
                                    nameOffer={offer.nameOffer}
                                    periodOffer={offer.periodOffer}
                                    descriptionOffer={offer.descriptionOffer}
                                    firstTag={offer.firstTag}
                                    secondTag={offer.secondTag}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}