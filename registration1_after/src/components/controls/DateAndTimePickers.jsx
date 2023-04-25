import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        required
        variant="outlined"
        id="datetime-local"
        label="Date Time Entry"
        type="datetime-local"
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
          readOnly: true
        }}
      />
    </form>
  );
}
