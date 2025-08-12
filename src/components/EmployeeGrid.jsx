import React from "react";
import EmployeeCard from "./EmployeeCard"; // Should already be converted to JSX + MUI
import { Grid } from "@mui/material";

export default function EmployeeGrid({ employees }) {
  return (
    <Grid container spacing={2}>
      {employees.map((emp) => (
        <Grid item xs={12} sm={6} lg={4} key={emp.id}>
          <EmployeeCard employee={emp} />
        </Grid>
      ))}
    </Grid>
  );
}
