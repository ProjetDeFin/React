import './index.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

export default function AddAdminOffer() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="AddAdminOffer">
            <div className="content">
                <div className="d-flex justify-start">
                    <img src="/img/logo/company.jpg" alt="Company Logo" />
                    <h2>MentalWorks</h2>
                </div>
                <span></span>
                <section>
                    <h3>Publier une offre</h3>
                    <div className="status-progress-offer d-flex">
                        <div className={`d-flex ${currentStep === 1 ? 'active' : ''}`}>
                            <div className="round d-flex align-center justify-center">
                                <Icon icon="basil:bag-outline" />
                            </div>
                            <div>
                                <p>Etape 1/3</p>
                                <p>Type d'offre</p>
                            </div>
                            <span></span>
                        </div>
                        <div className={`d-flex ${currentStep === 2 ? 'active' : ''}`}>
                            <div className="round d-flex align-center justify-center">
                                <Icon icon="hugeicons:note-01" />
                            </div>
                            <div>
                                <p>Etape 2/3</p>
                                <p>Description</p>
                            </div>
                            <span></span>
                        </div>
                        <div className={`d-flex ${currentStep === 3 ? 'active' : ''}`}>
                            <div className="round d-flex align-center justify-center">
                                <Icon icon="ph:gift" />
                            </div>
                            <div>
                                <p>Etape 3/3</p>
                                <p>Publication</p>
                            </div>
                            <span></span>
                        </div>
                    </div>
                    <div className="content-offer">
                        <div className={`offer-type d-flex ${currentStep === 1 ? 'active' : 'd-none'}`}>
                            <button className="btn" onClick={nextStep}>Etape suivante</button>
                        </div>
                        <div className={`offer-type d-flex ${currentStep === 2 ? 'active' : 'd-none'}`}>
                            <button className="btn" onClick={prevStep}>Etape précédente</button>
                            <button className="btn" onClick={nextStep}>Etape suivante</button>
                        </div>
                        <div className={`offer-type d-flex ${currentStep === 3 ? 'active' : 'd-none'}`}>
                            <button className="btn" onClick={prevStep}>Etape précédente</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}