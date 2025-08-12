import React from "react";
import { Box, Grid, useTheme } from "@mui/material";
import TopPerformers from "./TopPerformers";
import BestTeam from "./Bestteams";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
    const theme = useTheme();
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 5, p: 3 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} md={6} lg={4}>
          <TopPerformers theme={theme}/>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
          <BestTeam theme={theme} fullHeight />
        </Grid>
        <Grid item xs={12} md={12} lg={4} sx={{ display: "flex" }}>
          <UpcomingEvents theme={theme} fullHeight />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
