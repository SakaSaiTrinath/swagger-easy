import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, className, color, children, ...otherstyle }) => {
  const style = {
    border: `1px solid ${color}`,
    color: `${color}`,
    ...otherstyle,
  };

  return (
    <button
      style={style}
      id={id}
      type="button"
      className={`btn btn-${className}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  color: '#ced4da',
  id: '',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
};

export default Button;
