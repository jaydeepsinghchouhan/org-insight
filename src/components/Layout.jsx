import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const bottomNavHeight = 56; // default MUI BottomNavigation height

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Box
          sx={{
            p: 2,
            flexGrow: 1,
            overflow: "auto",
            pb: isMobile ? `${bottomNavHeight + 8}px` : 2, // extra bottom padding for mobile
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
export default Layout;
