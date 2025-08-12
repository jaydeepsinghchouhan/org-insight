// src/components/Header.jsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "../context/ThemeContext";
import Box from "@mui/material/Box";
import { ThemeSwitch } from "./CustomThemeToggleButton";
import { useMediaQuery } from "@mui/material";


export default function Header() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
  position="static"
  sx={{
    zIndex: (t) => t.zIndex.drawer + 1,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.background.paper, // softer dark background
    color:
      theme.palette.mode === "light"
        ? theme.palette.primary.contrastText
        : theme.palette.text.primary, // readable text in dark
  }}
>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Title */}
        {isMobile ? (<Typography variant="h6" sx={{fontSize:"1rem"}} noWrap component="div">
          OrgInsight - Know your Organization
        </Typography>):(
        <Typography variant="h6" noWrap component="div">
          OrgInsight - Know your Organization
        </Typography>)}

        {/* Theme Switch */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ThemeSwitch
            checked={theme.palette.mode === "light"}
            onChange={toggleColorMode}
            inputProps={{ "aria-label": "toggle theme" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
