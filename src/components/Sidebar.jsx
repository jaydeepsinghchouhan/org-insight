import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, BottomNavigation, BottomNavigationAction, Box, ListItemIcon } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sideBarElements } from "../constants/common";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

export default function Sidebar() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  
  const [value, setValue] = useState(
    sideBarElements.findIndex(el => el.link === location.pathname) || 0
  );

  const icons = [<HomeIcon />, <StarIcon />, <SettingsIcon />]; 

  const drawerContent = (
    <>
      <div style={{ textAlign: "center", padding: "16px" }}>
      <Link
        to="/dashboard"
        style={{
          textDecoration: "none",
          display: "inline-block",
          fontWeight: 700, 
          fontSize: "1.5rem",
          textTransform: "uppercase", 
          color: theme.palette.primary.main, 
        }}
      >
        ORG
        <span
          style={{
            color: theme.palette.secondary.main, 
            fontWeight: 700,
          }}
        >
          Insight
        </span>
      </Link>
    </div>
      <List sx={{ flexGrow: 1 }}>
        {sideBarElements.map((element, index) => {
          const isActive = location.pathname === element.link;
          return (
            <ListItem
              key={element.id}
              sx={{
                "&:hover": { backgroundColor: theme.palette.action.hover },
                backgroundColor: isActive
                  ? theme.palette.action.selected
                  : "inherit",
                paddingLeft: "24px",
              }}
            >
              <Link
                to={element.link}
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1rem",
                  width: "100%",
                  display:"flex",
                  alignItems:"center",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px", color: "inherit" }}>
                {icons[index] || <HomeIcon />}
              </ListItemIcon>
                <ListItemText primary={element.label} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );

  return (
    <>
      {/* Desktop: Permanent Drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Mobile: Bottom Navigation */}
      {isMobile && (
  <>
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 56, // standard MUI BottomNavigation height
        borderTop: `1px solid ${theme.palette.divider}`,
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(sideBarElements[newValue].link);
        }}
      >
        {sideBarElements.map((element, index) => (
          <BottomNavigationAction
            key={element.id}
            label={element.label}
            icon={icons[index] || <HomeIcon />}
            sx={{
              "&.Mui-selected": {
                color: theme.palette.text.primary,
                fontWeight: "bold",
                "& .MuiSvgIcon-root": {
                  border: `2px solid ${theme.palette.gold}`,
                  borderRadius: "50%",
                  padding: "4px",
                }
              }
            }}
          />
        ))}
      </BottomNavigation>
    </Box>

    {/* Spacer div to push content above bottom navigation */}
    <Box sx={{ height: 56 }} />
  </>
)}
    </>
  );
}
