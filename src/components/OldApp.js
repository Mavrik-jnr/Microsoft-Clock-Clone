import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Card } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 350;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List
        sx={{
          pt: "58px",
          "& .MuiButtonBase-root": {
            pl: { xs: "16px" },
          },
        }}
      >
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const theme = useTheme();
  console.log(theme.transitions.duration.leavingScreen);
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
    },
  });

  const BigDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // console.log(theme);
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "background.main",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },

          bgcolor: "transparent",
          color: "inactiveTime",
          zIndex: 9999,
          "& .MuiToolbar-root": {
            pl: { xs: "20px", md: "29px" },
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", md: "none", zIndex: 9999 } }}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" gap="4px" sx={{ zIndex: 9999 }}>
            <AccessAlarmIcon />
            <Typography variant="body1" noWrap component="div">
              Glock
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            hideBackdrop: false,
          }}
          BackdropProps={{ invisible: true }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "sidebar",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              boxShadow: theme.shadows[2],
              transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            },
          }}
        >
          {drawer}
        </Drawer>
        <BigDrawer
          variant="permanent"
          open={mobileOpen}
          sx={{
            display: { xs: "none", sm: "block" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",

              backgroundColor: "sidebar",
            },
          }}
        >
          {drawer}
        </BigDrawer>
      </Box>
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Card sx={{ width: "463px", height: "400px", mb: "16px" }}>
          <Typography variant="h3">00:30:00</Typography>
        </Card>
        <Card sx={{ width: "463px", height: "400px" }}>
          <Typography variant="h3">00:30:00</Typography>
        </Card>
      </Box> */}
    </Box>
  );
}

export default App;
