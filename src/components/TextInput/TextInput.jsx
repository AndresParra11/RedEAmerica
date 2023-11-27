import { Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import "./TextInput.scss";

const TextInput = ({
  name,
  label,
  autoFocus,
  required,
  type,
  onChange,
  multiple,
}) => (
  <Field name={name}>
    {({ field }) => (
      <TextField
        autoComplete={name}
        name={field.name}
        required={required}
        fullWidth
        id={name}
        label={label}
        type={type}
        autoFocus={autoFocus}
        onChange={(e) => {
          field.onChange(e);
          if (onChange) {
            onChange(e); // Puedes propagar el evento onChange si es necesario
          }
        }}
        value={field.value}
        multiple={multiple}
      />
    )}
  </Field>
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
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
};

ErrorMessageText.propTypes = {
  name: PropTypes.string.isRequired,
};

export { TextInput, ErrorMessageText };
