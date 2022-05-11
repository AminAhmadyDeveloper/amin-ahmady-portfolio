import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./main.css";
import { store } from "@risingstack/react-easy-state";
const theme = store({
  theme: "light",
  changeTheme: () => {
    theme.theme = theme.theme === "light" ? "dark" : "light";
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App theme={theme} />
  </React.StrictMode>
);
