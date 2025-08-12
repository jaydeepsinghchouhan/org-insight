import React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 34, 
  padding: 3,
  "& .MuiSwitch-switchBase": {
    margin: 4,
    padding: 0,
    transform: "translateX(1px)",
    "&.Mui-checked": {
      transform: "translateX(25px)", 
      color: "#fff",
      "& .MuiSwitch-thumb:before": {
        content: '"☀️"', 
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
      content: '"🌙"', 
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