import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  type,
  id,
  placeholder,
  color,
  ariaLabel,
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
                type={type}
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
              type={type}
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
            type={type}
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
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Input;
