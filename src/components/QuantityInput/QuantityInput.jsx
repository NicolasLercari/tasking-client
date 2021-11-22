import NumericInput from "../generics/Inputs/NumericInput/NumericInput";
import { Button } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const QuantityInput = ({ onChange, quantity, onClick, defaultQuantity }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <NumericInput
        label="quantity"
        placeholder="quantity"
        onChange={onChange}
        value={quantity}
        minInput={defaultQuantity}
      />
      <Button onClick={onClick} variant="contained" size="small">
        Get tasks
      </Button>
    </Box>
  );
};

export default QuantityInput;

QuantityInput.propTypes = {
  onChange: PropTypes.func,
  quantity: PropTypes.number,
  onClick: PropTypes.func,
  defaultQuantity: PropTypes.number,
};
