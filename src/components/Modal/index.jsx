import { useState } from 'react';
import './index.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Modal({ options, enableContractInput }) {
    const [isSelectVisible, setIsSelectVisible] = useState(false);
    const [selectOptions, setSelectOptions] = useState(options || []);
    const [contractType, setContractType] = useState('');
    const [contractValue, setContractValue] = useState('');
    const [contracts, setContracts] = useState([]);
    const [selectList, setSelectList] = useState([]);

    const handleButtonClick = () => {
        setIsSelectVisible(!isSelectVisible);
        if (!isSelectVisible && !enableContractInput) {
            const newSelectId = Date.now(); // Unique ID for each select
            setSelectList([...selectList, newSelectId]);
        }
    };

    const handleSelectRemove = (id) => {
        setSelectList(selectList.filter(selectId => selectId !== id));
    };

    const handleContractTypeChange = (e) => {
        setContractType(e.target.value);
    };

    const handleContractValueChange = (e) => {
        setContractValue(e.target.value);
    };

    const handleContractSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        if (contractType && contractValue) {
            setContracts([...contracts, { type: contractType, value: contractValue }]);
            setContractType('');
            setContractValue('');
            setIsSelectVisible(false); // Optionally hide the form after submission
        }
    };

    return (
        <div className="modal">
            <button className="d-flex btn" onClick={handleButtonClick}>
                <Icon icon="material-symbols:add" />
                Ajouter
            </button>
            {selectList.map((selectId) => (
                <div key={selectId} className="select-container">
                    <select>
                        {selectOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => handleSelectRemove(selectId)}>
                        <Icon icon="ic:outline-delete"/>
                    </button>
                </div>
            ))}
            {isSelectVisible && enableContractInput && (
                <div className="prompt-modal">
                    <form onSubmit={handleContractSubmit}>
                        <input
                            type="text"
                            value={contractValue}
                            onChange={handleContractValueChange}
                            placeholder="Entrez la valeur"
                        />
                        <select value={contractType} onChange={handleContractTypeChange}>
                            <option value="">Sélectionnez un type de contrat</option>
                            <option value="CDI">CDI</option>
                            <option value="CDD">CDD</option>
                            <option value="Freelance">Freelance</option>
                        </select>
                        <button type="submit">
                            ajouter
                        </button>
                    </form>
                </div>
            )}
            {contracts.map((contract, index) => (
                <div key={index} className="contract-item">
                    <input
                        type="text"
                        readOnly
                        value={`${contract.type}: ${contract.value}`}
                    />
                </div>
            ))}
        </div>
    );
}