import React from "react";
import { TextField } from "@material-ui/core";

export default function NumberField(props) {
  const { name, label, value, error = null, onChange } = props;
  return (
    <TextField
    type="number"
      required
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onInput = {(e) =>{
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
    }}
      {...(error && { error: true, helperText: error })}
    />
  );
}
