import * as React from "react";
import MiniDrawer from "./components/Md";

export default function App(props) {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return <MiniDrawer container={container} />;
}
