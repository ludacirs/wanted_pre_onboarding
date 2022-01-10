import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider } from "styled-components";

import theme from "./lib/styles/theme";

import "./index.css";
import "./reset.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
