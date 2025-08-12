import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export function useEmployees() {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employees);

  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("");
  

  useEffect(() => {
    dispatch({ type: "FETCH_EMPLOYEES_START" });
  }, [dispatch]);

  const departments = [...new Set(employees.map((e) => e.department))];

  const filteredEmployees = employees.filter((emp) => {
    const matchesName = emp.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDept = department ? emp.department === department : true;
    return matchesName && matchesDept;
  });


  return {
    employees,
    filteredEmployees,
    departments,
    searchTerm,
    setSearchTerm,
    department,
    setDepartment,
    loading,
    error,
  };
}
