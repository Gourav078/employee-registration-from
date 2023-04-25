import React from "react";
import { TextField } from "@material-ui/core";

export default function ReqInput(props) {
  const { name, label, value, error = null, onChange } = props;
  return (
    <TextField
      required
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
}
