import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeAppProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeAppProvider>
      <App />
    </ThemeAppProvider>
  </React.StrictMode>
);
