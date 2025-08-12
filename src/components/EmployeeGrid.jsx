import React from "react";
import EmployeeCard from "./EmployeeCard";
import { Box, Grid } from "@mui/material";
import NoDataFound from "./NoDataFound";

export default function EmployeeGrid({ employees }) {
  return (
    <Box>
    <Grid display="flex" justifyContent="center" container spacing={4}>
      {employees?.length > 0 ? employees.map((emp) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={emp.id}>
          <EmployeeCard employee={emp} />
        </Grid>
      )) : <NoDataFound/>}
    </Grid>
    </Box>
    
  );
}
