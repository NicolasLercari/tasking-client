import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const NumericInput = ({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  minInput = 0,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={(e) => {
        if (!e.target.value) onChange(undefined);
        if (e.target.value >= minInput) onChange(e.target.value);
      }}
      disabled={disabled}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      margin="normal"
    />
  );
};

NumericInput.propTypes = {
  value: PropTypes.number,
  minInput: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

NumericInput.defaultProps = {
  value: undefined,
  label: "",
  disabled: false,
};

export default NumericInput;
