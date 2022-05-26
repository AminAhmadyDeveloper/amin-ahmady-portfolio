import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./main.css";
import "devicon";
import "react-image-gallery/styles/css/image-gallery.css";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
