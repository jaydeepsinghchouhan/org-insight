import React from "react";
import {
  Typography,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box
} from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { upcomingEvents } from "../../constants/common";

const UpcomingEvents = ({theme}) => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        maxWidth: 550,
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
        🎉 Upcoming Birthdays & Anniversaries
      </Typography>
      <Card
        sx={{
          p: 2,
          bgcolor: theme.palette.background.paper, 
        }}
      >
        <List>
          {upcomingEvents.map((event, idx) => (
            <ListItem key={idx}>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor:
                      event.type === "birthday"
                        ? theme.palette.error.light
                        : theme.palette.info.light,
                  }}
                >
                  {event.type === "birthday" ? <CakeIcon /> : <FavoriteIcon />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={event.name}
                secondary={`${event.date} • ${
                  event.type === "birthday" ? "Birthday" : "Work Anniversary"
                }`}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
};

export default UpcomingEvents;
