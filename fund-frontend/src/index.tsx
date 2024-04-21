import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthUserProvider from "./Store/AuthClientProvider";
import { render } from "react-dom";                 // add this

render(
  <React.StrictMode>
    <AuthUserProvider>
    <App />
    </AuthUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
