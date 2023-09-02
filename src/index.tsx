import React from "react";
import ReactDOM from "react-dom";
import "reflect-metadata";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
);
