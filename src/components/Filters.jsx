import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ClearIcon from "@mui/icons-material/Clear";

export default function Filters({
  searchTerm,
  onSearchChange,
  department,
  onDepartmentChange,
  departments = [],
  handleReset
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "stretch", sm: "center" },
        gap: 2,
        mb: 2,
      }}
    >
      <TextField
        label="Search by name"
        variant="outlined"
        autoComplete="off"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{ flex: 2 }}
        InputProps={{
          endAdornment: searchTerm && (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        select
        label="Department"
        variant="outlined"
        value={department}
        onChange={(e) => onDepartmentChange(e.target.value)}
        sx={{ flex: 1, minWidth: 180 }}
        InputProps={{
          endAdornment: department && (
            <InputAdornment position="end" sx={{ mr: 3 }}>
              {" "}
              {/* Push left */}
              <IconButton
                size="small"
                onClick={() => onDepartmentChange("")}
                aria-label="Clear department"
                sx={{ p: 0.5 }}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        {departments.map((dept) => (
          <MenuItem key={dept} value={dept}>
            {dept}
          </MenuItem>
        ))}
      </TextField>

      <Button
        variant="outlined"
        color="secondary"
        onClick={handleReset}
        startIcon={<RestartAltIcon />}
        size="medium"
        sx={{
          flexShrink: 0,
          height: "40px",
          alignSelf: { xs: "flex-end", sm: "center" },
        }}
      >
        Reset
      </Button>
    </Box>
  );
}
