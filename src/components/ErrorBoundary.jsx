import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 2
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h4" gutterBottom>
              Something went wrong
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" color="primary" onClick={this.handleRefresh}>
                Refresh
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="/dashboard"
              >
                Go to Home
              </Button>
              <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/dashboard" 
                      sx={{ mt: 2 }}
                    >
                      Go to Home
                    </Button>
            </Stack>
          </Stack>
        </Box>
      );
    }

    return this.props.children;
  }
}
