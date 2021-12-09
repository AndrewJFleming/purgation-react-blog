import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import { ContextProvider } from "./shared/context/Context";

ReactDOM.render(
  <React.StrictMode>
    {/* Everything wrapped by ContextProvider will have access to our global state. */}
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
