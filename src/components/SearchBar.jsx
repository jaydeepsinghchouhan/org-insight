import React from "react";
import { TextField } from "@mui/material";

export default function SearchBar({ onSearch }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search by name or department..."
      onChange={(e) => onSearch(e.target.value)}
      size="small"
    />
  );
}
