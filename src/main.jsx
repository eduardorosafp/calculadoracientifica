import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Calculator from "./Calculator.jsx";
import Header from "./components/Header.jsx";
import { GlobalStyle } from "./Global/globlal-style.ts"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle> </GlobalStyle>
    <Header />
    <Calculator />
    <App />
  </React.StrictMode>
);
