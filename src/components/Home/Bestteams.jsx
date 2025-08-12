import React from "react";
import { Typography, Card, Box, Avatar } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { bestTeam } from "../../constants/common";

const BestTeam = ({theme}) => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        bgcolor: theme.palette.background.paper, 
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
      >
        👥 Best Team of the Month
      </Typography>

      <Card
        sx={{
          p: 2,
          textAlign: "center",
          bgcolor: theme.palette.background.paper, 
        }}
      >
        <GroupIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
        <Typography variant="h6" sx={{ mt: 1 }}>
          {bestTeam.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bestTeam.description}
        </Typography>

        {/* Team members with names */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          {bestTeam.members.map((member, i) => (
            <Box
              key={i}
              sx={{
                m: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={member.imageUrl}
                alt={member.name}
                sx={{ mb: 0.5 }}
              />
              <Typography variant="caption" color="text.secondary">
                {member.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default BestTeam;
