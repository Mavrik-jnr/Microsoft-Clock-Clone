import { Button, IconButton } from "@mui/material";
import * as React from "react";
import { Route, Routes } from "react-router";
import MiniDrawer from "./components/Md";
import Alarm from "./pages/Alarm";
import Focus from "./pages/Focus";
import Stopwatch from "./pages/Stopwatch";
import Timer from "./pages/Timer";
import WorldClock from "./pages/WorldClock";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function App(props) {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Routes>
        <Route path="/" element={<MiniDrawer container={container} />}>
          <Route path="/focus" element={<Focus />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/world" element={<WorldClock />} />
        </Route>
      </Routes>
    </>
  );
}
