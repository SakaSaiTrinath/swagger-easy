import React from 'react';
import PropTypes from 'prop-types';

const AccordianContent = ({ children }) => {
  return <div>{children}</div>;
};

AccordianContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccordianContent;
