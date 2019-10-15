import React from 'react';
import PropTypes from 'prop-types';

const AccordianTitle = ({ children }) => {
  return <div>{children}</div>;
};

AccordianTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccordianTitle;
