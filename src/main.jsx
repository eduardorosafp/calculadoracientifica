import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Global/globlal-style.ts";
import RoutesApp from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RoutesApp />
  </React.StrictMode>
);
