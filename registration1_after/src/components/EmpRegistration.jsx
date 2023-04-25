import React from "react";
import "../App/App.css";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
// import PageHeader from '../components/PageHeader';
import { createTheme } from "@material-ui/core/styles";

import Employees from "../pages/Employees/Employees";
import {AppBar} from "@material-ui/core";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333996",
    },
    secondary: {
      main: "#f83245",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "10px",
    width: "100%",
  },
});

function EmpRegistration() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default EmpRegistration;
