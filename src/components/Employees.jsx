import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Filters from "./Filters";
import EmployeeGrid from "./EmployeeGrid";
import { useFilters } from "../hooks/useFilters";

export default function Employees() {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employees);

  const {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    department,
    setDepartment,
    handleReset,
  } = useFilters();

  useEffect(() => {
    dispatch({ type: "FETCH_EMPLOYEES_START" });
  }, [dispatch]);

  const filteredEmployees = employees.filter((emp) => {
    const matchesName = emp.name
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase());
    const matchesDept = department ? emp.department === department : true;
    return matchesName && matchesDept;
  });

  const departments = [...new Set(employees.map((e) => e.department))];

  if (loading) return <Box sx={{ p: 2 }}>Loading employees...</Box>;
  if (error) return <Box sx={{ p: 2, color: "red" }}>{error}</Box>;

  return (
    <Box sx={{ p: 1 }}>
      <Filters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        department={department}
        onDepartmentChange={setDepartment}
        departments={departments}
        handleReset={handleReset}
      />
      <EmployeeGrid employees={filteredEmployees} />
    </Box>
  );
}
