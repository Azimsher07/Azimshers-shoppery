import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TechsContextProvider } from "./assets/context/TechsContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TechsContextProvider>
    <App />
  </TechsContextProvider>
);
