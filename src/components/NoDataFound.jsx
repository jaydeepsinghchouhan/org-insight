import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export default function NoDataFound({ message = "No data found", onReset, showDetails = true }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "text.secondary",
      }}
    >
      <SearchOffIcon sx={{ fontSize: 64, mb: 1, color: "text.disabled" }} />
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        {message}
      </Typography>
      {showDetails && <Typography variant="body2" sx={{ maxWidth: 360, mb: 2 }}>
        Try adjusting your search or filter to find what you’re looking for.
      </Typography>}

      {onReset && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={onReset}
        >
          Reset Filters
        </Button>
      )}
    </Box>
  );
}
