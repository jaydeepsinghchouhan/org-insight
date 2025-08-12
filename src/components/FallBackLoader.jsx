import { Box, Typography } from "@mui/material";

export const FallbackLoader = () => (
    <Box
    sx={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography variant="h6">Loading...</Typography>
  </Box>
);