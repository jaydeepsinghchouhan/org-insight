import React, { useEffect, useState, useMemo } from "react";
import { Box, Button } from "@mui/material";
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

  // Track how many records to show
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    dispatch({ type: "FETCH_EMPLOYEES_START" });
  }, [dispatch]);

  // Filtered list
  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchesName = emp.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      const matchesDept = department ? emp.department === department : true;
      return matchesName && matchesDept;
    });
  }, [employees, debouncedSearchTerm, department]);

  // Departments for filters
  const departments = useMemo(
    () => [...new Set(employees.map((e) => e.department))],
    [employees]
  );

  useEffect(() => {
    setVisibleCount(12);
  }, [debouncedSearchTerm, department]);

  if (loading) return <Box sx={{ p: 2 }}>Loading employees...</Box>;
  if (error) return <Box sx={{ p: 2, color: "red" }}>{error}</Box>;

  const visibleEmployees = filteredEmployees.slice(0, visibleCount);
  console.log(filteredEmployees?.length, visibleEmployees);
  

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
      <EmployeeGrid employees={visibleEmployees} />

      {visibleCount < filteredEmployees.length && (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="contained"
            onClick={() => setVisibleCount((prev) => prev + 12)}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
}
