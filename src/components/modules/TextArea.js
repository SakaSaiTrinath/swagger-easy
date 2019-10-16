import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ id, rows, color, ...otherstyle }) => {
  const style = {
    border: `1px solid ${color}`,
    ...otherstyle,
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>
        Comment:
        <textarea
          style={style}
          className="form-control"
          rows={rows}
          id={id}
        ></textarea>
      </label>
    </div>
  );
};

TextArea.defaultProps = {
  rows: 5,
  color: '#ced4da',
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.string,
  color: PropTypes.string,
};

export default TextArea;
