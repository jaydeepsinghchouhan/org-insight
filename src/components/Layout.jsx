import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "./Footer";

function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const bottomNavHeight = 56;

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Box
          sx={{
            p: isMobile ? 0:2,
            flexGrow: 1,
            overflow: "auto",
            pb: isMobile ? `${bottomNavHeight + 8}px` : 2,
            minHeight: "80vh",
          }}
        >
          <Outlet />
        </Box>
        <Footer/>
      </Box>
    </Box>
  );
}
export default Layout;
