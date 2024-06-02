import './index.scss';
import { Fragment, useState } from 'react';

export default function InputCustom({
  type,
  placeholder,
  classes = '',
  min = null,
  max = null,
  onChange,
  ...props
}) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleKeyDown = (e) => {
    if (type === 'number') {
      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
      if (allowedKeys.includes(e.key)) {
        return;
      }
      if (isNaN(e.key)) {
        e.preventDefault();
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (type === 'number' && isNaN(value)) {
      return;
    }
    if (max && value.length > max) {
      return;
    }
    setInputValue(value);
    if (error && value.length >= min) {
      setError(false);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e) => {
    if (min && inputValue.length < min) {
      setError(true);
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Fragment>
      <input
        className={`${classes} ${error ? 'input-error' : ''}`}
        type={type === 'number' ? 'text' : type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        {...props}
      />
      {error && (
        <span className="error-message">
          Input must be at least {min} characters long
        </span>
      )}
    </Fragment>
  );
}
