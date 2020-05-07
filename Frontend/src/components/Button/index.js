// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import ButtonStyled from './ButtonStyled';

// == Composant
const Button = ({ buttonText, type }) => (
  <ButtonStyled>
    <button
      type={ type }
    >
      { buttonText }
    </button>
  </ButtonStyled>
);

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
// == Export
export default Button;
