import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, id, placeholder, color, ...otherstyle }) => {
  const style = {
    border: 'none',
    borderBottom: `1px solid ${color}`,
    ...otherstyle,
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        {...otherstyle}
        style={style}
        id={id}
        type={type}
        className="form-control"
        aria-describedby={label || placeholder || type || id}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  id: '',
  placeholder: '',
  label: '',
  color: '#ced4da',
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
};

export default Input;
