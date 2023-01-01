import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PublicIcon from "@mui/icons-material/Public";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";

export const navigation = [
  {
    icon: <FilterTiltShiftIcon />,
    text: "Focus Sessions",
    route: "/focus",
  },
  {
    icon: <HourglassEmptyIcon />,
    text: "Timer",
    route: "/timer",
  },
  {
    icon: <NotificationsNoneIcon />,
    text: "Alarm",
    route: "/alarm",
  },
  {
    icon: <AccessAlarmsIcon />,
    text: "Stopwatch",
    route: "/stopwatch",
  },
  {
    icon: <PublicIcon />,
    text: "World clock",
    route: "/world",
  },
];

export const admin = [
  {
    icon: <PermIdentityIcon />,
    text: "Sign in",
    route: "/sign-in",
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
    route: "/settings",
  },
];
