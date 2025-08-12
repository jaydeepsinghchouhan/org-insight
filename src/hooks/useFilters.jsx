import { useState, useEffect, useCallback } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export function useFilters(initialSearch = "", initialDepartment = "") {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [department, setDepartment] = useState(initialDepartment);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleReset = useCallback(() => {
    setSearchTerm("");
    setDepartment("");
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    department,
    setDepartment,
    handleReset,
  };
}
