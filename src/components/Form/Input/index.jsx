import './index.scss';
import { Fragment, useState, useRef, useCallback, useEffect } from 'react';

export default function InputCustom({ type, placeholder, classes = null, min = null, max = null, onChange, debounceDelay = 500, name, id, ...props }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const debounceTimeout = useRef(null);

  const handleDebouncedChange = useCallback(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      if (onChange) {
        onChange({ target: { name, value: inputValue } });
      }
    }, debounceDelay);
  }, [inputValue, onChange, debounceDelay, name]);

  const handleKeyDown = (e) => {
    if (type === 'number') {
      if (
          e.key === 'Backspace' ||
          e.key === 'ArrowLeft' ||
          e.key === 'ArrowRight' ||
          e.key === 'Tab'
      ) {
        return;
      }
      if (isNaN(e.key)) {
        e.preventDefault();
      }
    }
    if (max && inputValue.length >= max) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (error && e.target.value.length >= min) {
      setError(false);
    }
    handleDebouncedChange();
  };

  const handleBlur = () => {
    if (min && inputValue.length < min) {
      setError(true);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
      <Fragment>
        <input
            className={`${classes ? classes : ''} ${error ? 'input-error' : ''}`}
            type={type === 'number' ? 'text' : type}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            min={min}
            max={max}
            name={name}
            id={id}
            {...props}
        />
        {error && <span className="error-message">Input must be at least {min} characters long</span>}
      </Fragment>
  );
}
