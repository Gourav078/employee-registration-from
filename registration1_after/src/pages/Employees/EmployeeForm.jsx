import React from "react";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/UseForm";
import * as employeeService from "../../services/employeeService";
import { Box, Typography } from "@mui/material";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  per_mobile: "",
  sec_mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  dateofBirth: new Date(0),
  isPermanent: false,
};

export default function EmployeeForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeService.insertEmployee(values);
      resetForm();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Controls.ReqInput
              name="fullName"
              label="Full Name"
              onChange={handleInputChange}
              required
            />
            <Controls.ReqInput
              label="Email Id"
              name="email"
              onChange={handleInputChange}
              required
            />
            <Controls.ReqInput
              label="Employee code"
              name="emp_code"
              onChange={handleInputChange}
            />
            <Controls.ReqInput
              label="Branch"
              name="branch"
              onChange={handleInputChange}
            />
            <Controls.ReqInput
              label="Division"
              name="divi"
              onChange={handleInputChange}
            />
            <Controls.NumberField
              label="Permanentn Mobile"
              name="mobile"
              onChange={handleInputChange}
            />
            <Controls.OptNumberField
              label="Secondry Mobile"
              name="mobile"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controls.Select
              name="a_status"
              label="Active Status"
              value={values.a_status}
              onChange={handleInputChange}
              options={employeeService.getStatus()}
              error={errors.a_status}
            />
            <Controls.Select
              label="Edit Status"
              name="e_status"
              value={values.e_status}
              onChange={handleInputChange}
              options={employeeService.getStatus()}
              error={errors.e_status}
            />
            <Controls.Select
              label="Delete Status"
              name="d_status"
              value={values.d_status}
              onChange={handleInputChange}
              options={employeeService.getStatus()}
              error={errors.d_status}
            />
            <Controls.ReqInput
              label="Branch Code"
              name="b_code"
              value={values.b_code}
              onChange={handleInputChange}
              error={errors.b_code}
            />
            <Controls.ReqInput
              label="Division Code"
              name="d_code"
              value={values.d_code}
              onChange={handleInputChange}
              error={errors.d_code}
            />
            <Controls.ReqInput
              label="Designation Code"
              name="de_code"
              value={values.de_code}
              onChange={handleInputChange}
              error={errors.de_code}
            />
            <Controls.ReqInput
              label="Entry By"
              name="entry"
              value={values.entry}
              onChange={handleInputChange}
              error={errors.entry}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controls.Select
              name="departmentId"
              label="Department"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
              error={errors.departmentId}
            />
            <Controls.Select
              name="designationId"
              label="Designation"
              value={values.designationId}
              onChange={handleInputChange}
              options={employeeService.getDesignationCollection()}
              error={errors.designationId}
            />
            <Controls.DatePicker
              readOnly={true}
              name="hireDate"
              label="Hire Date"
              value={values.hireDate}
              onChange={handleInputChange}
            />
            <Controls.DateAndTimePickers
              readOnly={true}
              name="entry_time"
              label="Entry Time"
              value={values.entrydate}
              onChange={handleInputChange}
            />
            <Controls.ReqInput
              label="Zip Code"
              name="pin"
              value={values.pin}
              onChange={handleInputChange}
              error={errors.pin}
            />
            <Controls.RadioGroup
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />
            <Controls.Checkbox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controls.ReqInput
              label="City"
              name="city"
              value={values.city}
              onChange={handleInputChange}
            />
            <Controls.Select
              label="Country"
              name="country"
              value={values.country}
              onChange={handleInputChange}
              options={employeeService.getCountryName()}
            />
            <Controls.Select
              label="State"
              name="state"
              value={values.state}
              onChange={handleInputChange}
              options={employeeService.getStateName()}
            />
            <Controls.ReqInput
              label="Address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
              error={errors.address}
            />
            <Controls.DatePicker
              readonly
              name="dateofBirth"
              label="Date OF Birth"
              value={values.dateofBirth}
              onChange={handleInputChange}
            />

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "initial",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Form>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Controls.Button
          style={{ width: "30%", background: "#673ab7" }}
          type="submit"
          text="Submit"
        />
        <Box style={{ width: "50%" }} />
        <Typography
          text="Reset"
          color="#673ab7"
          onClick={resetForm}
          style={{ fontWeight: "bolder", cursor: "pointer" }}
        >
          Clear form
        </Typography>
      </Box>
    </>
  );
}
