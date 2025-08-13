import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 2
      }}
    >
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/dashboard" 
        sx={{ mt: 2 }}
      >
        Go to Home
      </Button>
    </Box>
  );
}
