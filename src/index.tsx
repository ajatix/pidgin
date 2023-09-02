import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import createMonacoEditor from "./monaco";

const client = createMonacoEditor("monaco-editor");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
