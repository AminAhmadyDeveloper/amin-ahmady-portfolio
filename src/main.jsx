import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./main.css";
import { store } from "@risingstack/react-easy-state";
import "devicon";
import { RecoilRoot } from "recoil";
import "react-image-gallery/styles/css/image-gallery.css"

const theme = store({
  theme: "light",
  changeTheme: () => {
    theme.theme = theme.theme === "light" ? "dark" : "light";
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <React.StrictMode>
      <App theme={theme} />
    </React.StrictMode>
  </RecoilRoot>
);
