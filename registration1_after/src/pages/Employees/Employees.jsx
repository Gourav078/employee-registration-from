import React from 'react'
import EmployeeForm from "./EmployeeForm";
// import PageHeader from "../../components/PageHeader";
// import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const classes = useStyles();

    return (
        <>
        <div style={{background: "#5c33ae", width: "45%", height: "10px", margin: "auto", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}></div>
            <Paper className={classes.pageContent} style={{width: "45%", margin: "auto"}}>
                <EmployeeForm />
            </Paper>
        </>
    )
}
