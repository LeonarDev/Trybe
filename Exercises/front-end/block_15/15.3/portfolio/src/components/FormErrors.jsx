import React from 'react';
import PropTypes from 'prop-types';

import './FormErrors.css';

const FormErrors = ({ formErrors }) => (
  <section id="form-errors">
    {Object.keys(formErrors).filter((fieldName) => (
      formErrors[fieldName].length > 0
    )).map((fieldName) => (
      <p className="error-message" key={fieldName}>{formErrors[fieldName]}</p>
    ))}
  </section>
);

FormErrors.propTypes = {
  formErrors: PropTypes.exact({
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
    unexpected: PropTypes.string,
  }).isRequired,
};

export default FormErrors;
