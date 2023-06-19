import React from "react";
import reactdom from "react-dom";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
reactdom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
