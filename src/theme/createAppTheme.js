// theme.js
import { createTheme } from "@mui/material/styles";

const borderRadius = 2;

export const createAppTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      gold: "#d4af37",
      ...(mode === "light"
        ? {
            primary: {
              main: "#e9decf",
              contrastText: "#34312d",
            },
            background: {
              default: "#f9f6f1",
              paper: "#fffaf3",
            },
            secondary: {
              main: "#c7b299",
              contrastText: "#34312d",
            },
            divider: "#ede6db",
          }
        : {
            primary: { main: "#90caf9", contrastText: "#212121" },
            background: { default: "#181b21", paper: "#232731" },
            secondary: { main: "#a29bfe", contrastText: "#232731" },
            divider: "#31343c",
          }),
    },
    shape: { borderRadius },
    components: {
      MuiCssBaseline: {   // ✅ ADD THIS BLOCK
        styleOverrides: {
          body: {
            transition: "background-color 1s ease, color 1s ease",
          },
          "*": {
            transition: "background-color 1s ease, color 0.4s ease, border-color 1s ease",
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius + 12,
            boxShadow:
              mode === "light"
                ? "0 4px 14px rgba(200, 190, 167, 0.08)"
                : "0 4px 18px rgba(144,202,249,0.12)",
            transition: "box-shadow 0.2s, border-radius 0.3s",

            "&.top-performer": {
              display: "flex",
              alignItems: "center",
              padding: "16px",
              border: `2px solid ${mode === "light" ? "#d4af37" : "#ffd700"}`,
              boxShadow: `0 0 10px ${
                mode === "light" ? "#d4af37" : "#ffd700"
              }`,
              position: "relative",
            },

            backgroundColor: "#fffaf3",
            // This is our tree-card variation
            "&.tree-card": {
              padding: "0.7em",
              borderRadius: "0.8em",
              position: "relative",
              backgroundColor: mode === "light"
                ? "#fffaf3"
                : "#232731", // Matches dark mode bg
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            "&.tree-card-status": {
              fontSize: "0.6em",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderRadius: `${borderRadius * 0.7}px ${borderRadius * 0.7}px 0 0`,
            backgroundColor: "#e9decf",
            color: "#34312d",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius,
            textTransform: "none",
            fontWeight: 600,
            backgroundColor: "#e9decf",
            color: "#34312d",
            "&:hover": {
              backgroundColor: "#f3e8d3",
            },
          },
        },
      },
    },
    typography: {
      fontFamily: [
        "Inter",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ].join(","),
      h6: { fontWeight: 700, letterSpacing: "0.02em" },
      body2: { fontSize: "1rem" },
    },
  });
