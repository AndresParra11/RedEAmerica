import { Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import "./TextInput.scss";

const TextInput = ({ name, label, autoFocus, required, type }) => (
  <Field
    as={TextField}
    autoComplete={name}
    name={name}
    required={required}
    fullWidth
    id={name}
    label={label}
    type={type}
    autoFocus={autoFocus}
  />
);

const ErrorMessageText = ({ name }) => (
  <ErrorMessage name={name}>
    {(msg) => <div className="errors">{msg}</div>}
  </ErrorMessage>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  required: PropTypes.bool,
};

ErrorMessageText.propTypes = {
  name: PropTypes.string.isRequired,
};

export { TextInput, ErrorMessageText };
