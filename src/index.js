import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

import "./index.css";
// import { } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const container = document.getElementById("root");
const root = createRoot(container);
const theme = createTheme({
  typography: {
    fontFamily: " 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI'",
    h1: {
      fontSize: "clamp(32px, 10vw, 80px)",
      fontWeight: 900,
    },
    h2: {
      fontSize: "clamp(22px, 5vw, 56px)",
      fontWeight: 600,
    },
    h3: {
      fontSize: "40px",
      fontWeight: 600,
    },
  },
  // textColor: {

  // },
  palette: {
    //Time
    inactiveTime: "#606060",
    activeTime: "#00000",
    disabledTime: "#A2A2A2",
    //UI
    accent: "#99000D",
    onAccent: "#fffff",
    timeRingInactive: "#F4F4F4",
    timeRingBorder: "#EEEEEE",
    timerText: "#00000",
    timerIcons: "#1b1b1b",
    sidebar: "#f3f3f3",
    background: {
      main: "#f9f9f9",
      light: "#33333",
    },

    //Util
    error: {
      main: "#c42b1c",
    },
  },
  shadows: {
    0: "none",
    1: "0px 1px 3px 1px #F6F6F6",
    2: "0px 3px 8px 2px #C3c3c3",
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#fdfdfd",
          border: "2px solid #eaeaea",
          borderRadius: "8px",
          transition: ".1s",

          " &:hover": {
            backgroundColor: "#f7f7f7",
            transform: "translateY(-5px)",
            boxShadow: "0px 2px 4px 2px #F0F0F0",
          },
        },
      },
    },
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-v
