import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Card, useMediaQuery } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { navigation, admin } from "../utils/navigation";
import ListItemLink from "./ListItemLink";
import { Outlet } from "react-router";
const drawerWidth = 350;

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
  [theme.breakpoints.down("sm")]: {
    width: "0px",
  },
});

const Drawer = styled(MuiDrawer, {
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

export default function MiniDrawer({ container }) {
  const theme = useTheme();

  const tab = useMediaQuery("md");
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    console.log("No");
    setOpen(!open);
  };

  //   const handleDrawerClose = () => {
  //     setOpen(!open);
  //   };

  return (
    <Box sx={{ display: "flex" }}>
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
            pl: { xs: "20px", md: "16px" },
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // tab ? handleDrawerOpen : handleDrawerToggle
            onClick={handleDrawerOpen}
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
        component="main"
        sx={{ display: "flex" }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            position: { xs: "fixed", md: "static" },
            zIndex: 999,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",

              backgroundColor: "sidebar",
              borderTopRightRadius: { xs: "6px", sm: "0" },
              borderBottomRightRadius: { xs: "6px", sm: "0" },
              boxShadow: { xs: open && theme.shadows[2], md: "none" },
              transition: {
                sm: theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
              },
            },
          }}
          open={open}
        >
          {/* <Toolbar /> */}

          <List
            sx={{
              pt: "58px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Box>
              {navigation.map((text, index) => (
                <ListItem key={index} disablePadding sx={{ display: "block" }}>
                  <ListItemLink
                    icon={text.icon}
                    to={text.route}
                    primary={text.text}
                  />
                </ListItem>
              ))}
            </Box>

            <Box>
              {" "}
              {admin.map((text, index) => (
                <ListItem key={index} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "space-between",
                      gap: "15px",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        color: "#1a1a1a",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText color="#1a1a1a" primary={text.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </List>
        </Drawer>
      </Box>

      <Box
        sx={{
          pl: { xs: "16px", sm: "70px" },
          pr: { xs: "16px", sm: "32px", md: "48px" },
          pb: "16px",
          transition: ".4s",
        }}
        flexGrow={1}
        minHeight={"100vh"}
        width="100%"
        bgcolor="background.main"
        onClick={() => {
          setOpen(false);
        }}
      >
        {" "}
        <Toolbar
          sx={{
            position: "fixed",
            backgroundColor: "background.main",
            width: "100%",
            zIndex: "99",
            minHeight: { xs: "56px", md: "40px" },
          }}
        />
        <Box
          backgroundColor="background.main"
          paddingTop={{ xs: "70px", md: "60px" }}
          overflow="hidden"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
