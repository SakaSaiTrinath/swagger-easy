import React from 'react';
import PropTypes from 'prop-types';

const makeFun = (param, style, className, children) => {
  switch (param) {
    case 'h1':
      return (
        <h1 className={className} style={style}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={className} style={style}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={className} style={style}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={className} style={style}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={className} style={style}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={className} style={style}>
          {children}
        </h6>
      );
    default:
      return (
        <h5 className={className} style={style}>
          {children}
        </h5>
      );
  }
};

const Header = ({ as, id, className, color, children, ...otherstyle }) => {
  const style = {
    color: `${color}`,
    marginTop: '40px',
    marginBottom: '10px',
    ...otherstyle,
  };

  return makeFun(as, style, className, children);
};

Header.defaultProps = {
  className: '',
  color: 'black',
  id: '',
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
};

export default Header;
