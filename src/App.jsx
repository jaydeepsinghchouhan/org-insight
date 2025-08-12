import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContextProvider, useColorMode } from "./context/ThemeContext";
import { createAppTheme } from "./theme/createAppTheme";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Layout from "./components/Layout";

function ThemedApp() {
  const { mode } = useColorMode();

  return (
    <ThemeProvider theme={createAppTheme(mode)}>
      <CssBaseline />    
        <Routes>
          <Route element={<Layout />}>
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        </Routes>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <ThemedApp />
    </ThemeContextProvider>
  );
}
