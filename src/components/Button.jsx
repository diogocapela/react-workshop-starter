import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      className="Button"
      style={{
        color: props.color,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'blue',
};

export default Button;
