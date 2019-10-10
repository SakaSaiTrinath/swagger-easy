import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({ id, className, color, options, ...otherstyle }) => {
  const style = {
    border: `1px solid ${color}`,
    color: `${color}`,
    ...otherstyle,
  };

  return (
    <div className="form-group">
      <select className="btn" style={style}>
        {options.map(option => (
          <option value="audi" key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.defaultProps = {
  className: '',
  color: '#ced4da',
  id: '',
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
};

export default Dropdown;
