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
  const [selectedValues, setSelectedValues] = useState({}); // Track selected values for each select

  const handleButtonClick = () => {
    setIsSelectVisible(!isSelectVisible);
    if (!isSelectVisible && !enableContractInput) {
      const newSelectId = Date.now(); // Unique ID for each select
      setSelectList([...selectList, newSelectId]);
    }
  };

  const handleSelectRemove = (id) => {
    setSelectList(selectList.filter((selectId) => selectId !== id));
    setSelectedValues((prev) => {
      const newValues = { ...prev };
      delete newValues[id];
      return newValues;
    });
  };

  const handleContractTypeChange = (e) => {
    setContractType(e.target.value);
  };

  const handleContractValueChange = (e) => {
    setContractValue(e.target.value);
  };

  const handleContractAdd = () => {
    if (contractType && contractValue) {
      setContracts([
        ...contracts,
        { type: contractType, value: contractValue },
      ]);
      setContractType('');
      setContractValue('');
      setIsSelectVisible(false); // Optionally hide the form after submission
    }
  };

  const handleSelectChange = (id, value) => {
    setSelectedValues((prev) => ({ ...prev, [id]: value }));
  };

  const getAvailableOptions = (currentId) => {
    const selectedValuesArray = Object.values(selectedValues);
    return selectOptions.filter(
      (option) =>
        !selectedValuesArray.includes(option.value) ||
        selectedValues[currentId] === option.value,
    );
  };

  const handleRemoveContract = (index) => {
    setContracts(contracts.filter((_, i) => i !== index));
  };

  return (
    <div className="modal">
      <button className="d-flex btn" onClick={handleButtonClick}>
        <Icon icon="material-symbols:add" />
        Ajouter
      </button>
      {selectList.map((selectId) => (
        <div key={selectId} className="select-container">
          <select
            onChange={(e) => handleSelectChange(selectId, e.target.value)}
            value={selectedValues[selectId] || ''}
          >
            <option value="">Sélectionnez une option</option>
            {getAvailableOptions(selectId).map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            className="delete"
            onClick={() => handleSelectRemove(selectId)}
          >
            <Icon icon="ic:outline-delete" />
          </button>
        </div>
      ))}
      {isSelectVisible && enableContractInput && (
        <div className="prompt-modal d-flex direction-column align-start">
          <div className="d-flex direction-column align-start">
            <label htmlFor="">Type de contract</label>
            <select value={contractType} onChange={handleContractTypeChange}>
              <option value="" disabled>
                Sélectionnez un type de contrat
              </option>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
              <option value="CDD">Stage</option>
              <option value="CDD">Alternance</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div className="d-flex direction-column align-start">
            <label htmlFor="">Intitule</label>
            <input
              type="text"
              value={contractValue}
              onChange={handleContractValueChange}
              placeholder="Entrez la valeur"
            />
          </div>
          <button className="add" onClick={handleContractAdd}>
            AJOUTER
          </button>
        </div>
      )}
      {contracts.map((contract, index) => (
        <div key={index} className="contract-item">
          <input
            type="text"
            readOnly
            value={`${contract.type}: ${contract.value}`}
          />
          <button onClick={() => handleRemoveContract(index)}>
            <Icon icon="ic:outline-delete" />
          </button>
        </div>
      ))}
    </div>
  );
}
