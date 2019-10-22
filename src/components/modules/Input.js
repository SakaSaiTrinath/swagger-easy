import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  type,
  id,
  placeholder,
  color,
  ariaLabel,
  value,
  onChange,
  ...otherstyle
}) => {
  const style = {
    border: 'none',
    borderBottom: `1px solid ${color}`,
    ...otherstyle,
  };

  return (
    <>
      {type === 'checkbox' ? (
        <div className="checkbox">
          {label ? (
            <label htmlFor={id}>
              {label}
              <input
                {...otherstyle}
                style={style}
                id={id}
                value={value}
                type={type}
                onChange={onChange}
                aria-describedby={label || placeholder || type || id}
                aria-label={ariaLabel}
                placeholder={placeholder}
              />
            </label>
          ) : (
            <input
              {...otherstyle}
              style={style}
              id={id}
              value={value}
              type={type}
              onChange={onChange}
              aria-describedby={label || placeholder || type || id}
              aria-label={ariaLabel}
              placeholder={placeholder}
            />
          )}
        </div>
      ) : (
        <div className="form-group">
          {label && <label htmlFor={id}>{label}</label>}
          <input
            {...otherstyle}
            style={style}
            id={id}
            value={value}
            type={type}
            onChange={onChange}
            className="form-control"
            aria-describedby={label || placeholder || type || id}
            aria-label={ariaLabel}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
  label: '',
  color: '#ced4da',
  ariaLabel: '',
  value: '',
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
