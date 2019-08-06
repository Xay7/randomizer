import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

WebFont.load({
  google: {
    families: ["Open Sans:400,700", "sans-serif"]
  }
});

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const defaultTheme = {
  main: "rebeccapurple"
};

const app = (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
