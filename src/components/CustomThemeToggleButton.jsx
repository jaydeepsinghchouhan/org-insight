// src/components/CustomThemeToggleButton.jsx
import React from "react";
import Switch from "@mui/material/Switch";
import { styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 34, // increased height
  padding: 3,
  "& .MuiSwitch-switchBase": {
    margin: 4,
    padding: 0,
    transform: "translateX(1px)",
    "&.Mui-checked": {
      transform: "translateX(25px)", // move thumb correctly
      color: "#fff",
      "& .MuiSwitch-thumb:before": {
        content: '"☀️"', // sun in light mode
      },
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor:
      theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 25,
    height: 25,
    "&:before": {
      content: '"🌙"', // moon in dark mode
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor:
      theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    opacity: 1,
  },
}));

export {ThemeSwitch};