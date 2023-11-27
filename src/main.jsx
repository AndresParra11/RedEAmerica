import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router/AppRouter.jsx";
import './main.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
