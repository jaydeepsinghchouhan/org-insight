// src/components/Footer.jsx
import React from "react";
import { Box, Typography, useTheme, Link } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        paddingRight: 2,
        textAlign: "right",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: "auto",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontWeight: 500 }}
      >
        Designed by{" "}
        <Link
          href="https://www.linkedin.com/in/jaydeepsinghchouhan" // <-- your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            fontWeight: "bold",
            color:
            theme.palette.mode === "light"
            ? theme.palette.primary.contrastText
            : theme.palette.text.primary, 
            cursor: "pointer",
          }}
        >
          Jaydeep Singh Chouhan
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
