import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContextProvider, useColorMode } from "./context/ThemeContext";
import { createAppTheme } from "./theme/createAppTheme";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

function ThemedApp() {
  const { mode } = useColorMode();

  return (
    <ThemeProvider theme={createAppTheme(mode)}>
      <CssBaseline />   
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        </Routes>
        </ErrorBoundary> 
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
