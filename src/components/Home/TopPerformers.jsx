import React from "react";
import { Typography, Card, CardContent, Grid, Box, Avatar, Badge } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { topPerformers } from "../../constants/common";

const TopPerformers = ({theme}) => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 5,
        p: 3,
        bgcolor: theme.palette.background.paper, 
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.gold, fontWeight: "bold" }}
      >
        🏆 Top Performers of the Month 🏆
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Celebrating the best talent of our team!
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {topPerformers.map((performer, index) => (
          <Grid item key={index} display="flex" justifyContent="center">
            <Card className="top-performer" sx={{ bgcolor: theme.palette.background.paper }}>
              <Badge
                badgeContent={<StarIcon sx={{ color: theme.palette.gold }} />}
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
              >
                <Avatar
                  className="top-performer-avatar"
                  src={performer.imageUrl}
                  alt={performer.name}
                />
              </Badge>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  {performer.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {performer.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopPerformers;
