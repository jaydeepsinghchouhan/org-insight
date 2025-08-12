import React from "react";
import { Box, Grid } from "@mui/material";
import TopPerformers from "./TopPerformers";
import BestTeam from "./Bestteams";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 5, p: 3 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} md={6} lg={4}>
          <TopPerformers />
        </Grid>
        {/* Best Team */}
        <Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
          <BestTeam fullHeight />
        </Grid>
        {/* Upcoming Events */}
        <Grid item xs={12} md={12} lg={4} sx={{ display: "flex" }}>
          <UpcomingEvents fullHeight />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
