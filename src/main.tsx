import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WithRouter from "./providers/withRouter";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <WithRouter />
    </BrowserRouter>
  </React.StrictMode>
);
