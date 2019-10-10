import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Accordian = ({ children, color }) => {
  const accEl = useRef();
  const panelEl = useRef();
  const accStyle = {
    color: `${color}`,
    cursor: 'pointer',
    padding: '18px',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    outline: 'none',
    transition: '0.4s',
  };

  const panelStyle = {
    padding: '0 18px',
    display: 'none',
    backgroundColor: 'white',
    overflow: 'hidden',
  };

  const accElClick = () => {
    accEl.current.classList.toggle('active');
    if (panelEl.current.style.display === 'block') {
      panelEl.current.style.display = 'none';
    } else {
      panelEl.current.style.display = 'block';
    }
  };

  return (
    <>
      <div
        tabIndex={0}
        onKeyDown={accElClick}
        role="button"
        ref={accEl}
        onClick={accElClick}
        style={accStyle}
      >
        {children}
      </div>
      <div ref={panelEl} style={panelStyle}>
        <p>Lorem ipsum...</p>
      </div>
    </>
  );
};

Accordian.defaultProps = {
  color: '#ced4da',
  children: 'Accordian',
};

Accordian.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
};

export default Accordian;
