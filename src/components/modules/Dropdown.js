// import React /*, { useState }*/ from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = ({
  id,
  className,
  color,
  options,
  onChange,
  value,
  placeholder,
  ...otherstyle
}) => {
  const style = {
    border: `1px solid ${color}`,
    color: `${color}`,
    ...otherstyle,
  };

  // const [value_, setValue_] = useState(value)

  return (
    <div className="form-group">
      <select className="btn" value={value} style={style} onChange={onChange}>
        <option value="" default>
          {placeholder}
        </option>
        {options.map(option => (
          <option value={option.value} key={option.id}>
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
  placeholder: 'Select',
  value: '',
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Dropdown;
